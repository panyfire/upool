import React, { FC, useState } from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'
import { toast } from 'react-toastify'
import { ethers } from 'ethers'
import { Form, Formik, FormikProps } from 'formik'
import { useSendDataAfterSuccessTran } from './api/hooks'
import { ConfirmButton, Input, InputRange, Text } from 'ui'
import {
  AmountWrapper,
  DurationWrapper,
  FormBalance,
  FormCoinInfo,
  FormTitle,
  Image,
  MaxBtn,
  RangeWrapper,
  TabListWrapper,
  TabValue,
} from './styles'
import { LockOverview } from 'components'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetTableData } from 'modules/ProfileTable/api/hooks'
import { sha256 } from 'js-sha256'

type TAb = {
  nameCoin?: string
  iconCoinUrl?: string
  subHeader?: string
  duration: number
  aprData: { apr: string; duration: string }[]
  apr: number
  coinToBeLocked?: number
  expectedRoi: string
  maxArpPercent: string
  minArpPercent: string
  percents: string[]
  rangeValue?: string
  amount: string
  errorStatus: string | false | undefined
  id: number
  startLocking: Date | string
  endLocking: Date | string
  popUpCallback?: () => void | string
}

const getAmountValueWithPercent = (amount: string, percent: number) => {
  if (amount === '100') {
    return amount
  }
  if (amount === '1') {
    return '0'
  }
  return String((Number(amount) / 100) * percent)
}

function addDaysToDate(currentDate: Date, days: number) {
  const date = new Date(currentDate)
  date.setDate(date.getDate() + days)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const suffixes = ['th', 'st', 'nd', 'rd']
  let suffix = ' '
  if (day >= 11 && day <= 13) {
    suffix = 'th'
  } else {
    suffix = suffixes[day % 10] || 'th'
  }

  return `${month} ${day} ${suffix}, ${year} ${hours}:${minutes}`
}

const currentDate = new Date()

export const StakeForm: FC<TAb> = (props) => {
  const {
    id,
    aprData,
    duration,
    apr,
    expectedRoi,
    maxArpPercent,
    minArpPercent,
    percents = ['25', '50', '75', '100'],
    rangeValue,
    errorStatus,
    popUpCallback,
    nameCoin,
    iconCoinUrl,
  } = props
  const [tab, setTabIndex] = useState(0)
  const [dtab, dsetTabIndex] = useState(1)

  const { wallet } = useMetaMask()
  const tableData = wallet.chainId
    ? useGetTableData(String(wallet.accounts[0]), String(wallet.chainId))
    : null

  const initialValueForm: TAb = {
    id: id,
    duration: duration,
    aprData: aprData,
    rangeValue: rangeValue,
    apr: apr,
    amount: `${getAmountValueWithPercent(wallet.balance, Number(rangeValue))}`,
    expectedRoi: expectedRoi,
    maxArpPercent: maxArpPercent,
    minArpPercent: minArpPercent,
    percents: percents,
    errorStatus: errorStatus,
    startLocking: addDaysToDate(currentDate, 0),
    endLocking: addDaysToDate(currentDate, duration),
    popUpCallback: popUpCallback,
  }

  const { mutateAsync } = useSendDataAfterSuccessTran()
  const sendSuccessTransaction = (data: unknown) => mutateAsync(data)
  const [, setLoadingTransaction] = useState<boolean>(false)

  const notify = (text: string) =>
    toast(text, {
      position: 'bottom-right',
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  const onSendSuccess = (data: unknown) => {
    sendSuccessTransaction(data).then(() => {
      popUpCallback && popUpCallback()
      setLoadingTransaction(false)
      tableData?.refetch()
    })
  }
  const handleTransaction = async (
    amount: number | string,
    duration: number,
    apr: number
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const transaction = {
        to: '0x8f412065Ad768f0f466Df98093F156D73DD3aB19',
        value: ethers.utils.parseEther(String(amount).slice(0, 13)),
        // from: '0xd8E4Adad8C6E4a09d435449a6003a3274ECF6633',
      }

      await signer
        .sendTransaction(transaction)
        .then((transactionResponse) => {
          // This callback is called when the transaction is first sent to the network
          localStorage.setItem('transactionResponse', transactionResponse.hash)
          setLoadingTransaction(true)
          popUpCallback && popUpCallback()
          notify('Transaction sent')
          return transactionResponse.wait() // Wait for the transaction to be mined
        })
        .then((receipt) => {
          // This callback is called when the transaction is confirmed on the network
          // You can perform additional actions here after the transaction is confirmed
          const data = {
            wallet: String(wallet.accounts[0]),
            stakeId: id,
            amount: String(amount),
            duration: String(duration),
            transactionHash: receipt.transactionHash,
            apr: apr,
            chainId: String(wallet.chainId),
          }
          const response = {
            imgHash: sha256.hmac(`HELLO`, `${JSON.stringify({ ...data })} `),
            ...data,
          }
          onSendSuccess(response)
        })
        .catch((error) => {
          notify(error.message)
        })
    } catch ({ message }) {
      notify(String(message))
    }
  }
  const convertToNumber = (value: string | number | undefined) => Number(value)

  const calculateRoiWithDuration = (values: TAb) =>
    convertToNumber(values.amount) +
    (convertToNumber(values.amount) *
      (convertToNumber(values.apr) * convertToNumber(values.duration))) /
      365

  const onSubmit = (data: TAb) => {
    handleTransaction(data.amount, data.duration, data.apr)
  }
  return (
    <Formik
      initialValues={initialValueForm}
      onSubmit={(value: TAb) => onSubmit(value)}
      // validationSchema={contactForm}
      enableReinitialize
    >
      {(props: FormikProps<TAb>) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          setFieldValue,
          handleSubmit,
          // ...other
        } = props
        // TODO: Прокинуть
        // const validate = Boolean(
        //   values.email && values.name && values.subject && values.message
        // )
        return (
          <Form>
            <FormTitle>
              <Text text={'LOCKED BALANCE'} type={'card2'} />
              <FormCoinInfo>
                <Image src={iconCoinUrl} alt={''} />
                <Text text={nameCoin} type={'card2'} />
              </FormCoinInfo>
            </FormTitle>
            <AmountWrapper>
              <Input
                type={'text'}
                label={'Subscription amount'}
                value={`${values.amount.substring(0, 12)}`}
                name={'amount'}
                placeholder={'Enter amount'}
                error={touched.amount && Boolean(errors.amount)}
                helperText={touched.amount && errors.amount}
                onChange={handleChange}
                disabled={Boolean(Number(wallet.balance) <= 0)}
              />
              <MaxBtn
                disabled={Boolean(Number(wallet.balance) <= 0)}
                onClick={() => {
                  setFieldValue('amount', wallet.balance)
                  setFieldValue('rangeValue', '100')
                  setTabIndex(3)
                }}
              >
                <Text text="Max" type="value" />
              </MaxBtn>
            </AmountWrapper>
            <FormBalance>
              <Text text={'Balance :'} type={'label'} />
              <Text text={wallet?.balance} type={'card'} />
            </FormBalance>
            <RangeWrapper>
              <InputRange
                name="rangeValue"
                max={'100'}
                min={'0'}
                disabled={Boolean(Number(wallet.balance) <= 0)}
                onChange={(e) => {
                  setTabIndex(-1)
                  setFieldValue('rangeValue', e.target.value)
                  setFieldValue(
                    'amount',
                    `${getAmountValueWithPercent(
                      wallet.balance,
                      Number(e.target.value)
                    )}`
                  )
                  if (!e.target.value) {
                    setFieldValue('expectedRoi', 0)
                  }
                  setFieldValue('expectedRoi', calculateRoiWithDuration(values))
                }}
                value={`${values.rangeValue}`}
              />
            </RangeWrapper>
            <Tabs
              style={{ color: 'white', marginTop: 20 }}
              className={'tablist__list'}
              selectedIndex={tab}
              onSelect={(index: number) => setTabIndex(index)}
              disabled={Boolean(Number(wallet.balance) <= 0)}
            >
              <TabList>
                <TabListWrapper>
                  {percents.map((e: string, i: number) => {
                    return (
                      <Tab
                        disabled={Boolean(Number(wallet.balance) <= 0)}
                        key={i}
                        onClick={() => {
                          if (!(Number(wallet.balance) <= 0)) {
                            if (e === 'MAX') {
                              setFieldValue('amount', wallet.balance)
                              setFieldValue('rangeValue', '100')
                            } else {
                              setFieldValue(
                                'amount',
                                `${getAmountValueWithPercent(
                                  wallet.balance,
                                  Number(e)
                                )}`
                              )
                              setFieldValue('rangeValue', Number(e))
                            }
                            setFieldValue(
                              'expectedRoi',
                              calculateRoiWithDuration(values)
                            )
                          }
                        }}
                      >
                        <TabValue>
                          <Text
                            text={e !== 'MAX' ? `${e} %` : e}
                            type={'value'}
                          />
                        </TabValue>
                      </Tab>
                    )
                  })}
                </TabListWrapper>
              </TabList>
            </Tabs>
            <DurationWrapper>
              <Text text={'add duration'} type={'popUpPreTitle'} />
              <Tabs
                className={'tablist__list_duration'}
                style={{ color: 'white' }}
                selectedIndex={dtab}
                onSelect={(index: number) => dsetTabIndex(index)}
                disabled={Boolean(Number(wallet.balance) <= 0)}
              >
                <TabList
                  disabled={Boolean(Number(wallet.balance) <= 0)}
                  className={'tablist__list_days'}
                >
                  <TabListWrapper>
                    {aprData.map((e, i: number) => {
                      return (
                        <Tab
                          disabled={Boolean(Number(wallet.balance) <= 0)}
                          onClick={() => {
                            if (!(Number(wallet.balance) <= 0)) {
                              setFieldValue('duration', aprData[i].duration)
                              setFieldValue('apr', aprData[i].apr)
                              setFieldValue(
                                'endLocking',
                                addDaysToDate(
                                  currentDate,
                                  Number(aprData[i].duration)
                                )
                              )
                              setFieldValue(
                                'expectedRoi',
                                calculateRoiWithDuration(values)
                              )
                            }
                          }}
                          key={`${i} + nd`}
                        >
                          <TabValue>
                            <Text text={`${e?.duration} D`} type={'value'} />
                          </TabValue>
                        </Tab>
                      )
                    })}
                  </TabListWrapper>
                </TabList>
              </Tabs>
              <LockOverview
                expectedRoi={values.expectedRoi}
                duration={values.duration}
                apr={values.apr}
                maxArpPercent={values.maxArpPercent}
                minArpPercent={values.minArpPercent}
                percents={values.percents}
                rangeValue={values.rangeValue ? values.rangeValue : ''}
                amount={values.amount}
                startLocking={values.startLocking}
                endLocking={values.endLocking}
              />

              <ConfirmButton
                disableStatus={!Number(values.amount)}
                eventClick={handleSubmit}
                text={'Confirm'}
                style={{ marginTop: 75 }}
              />
            </DurationWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
