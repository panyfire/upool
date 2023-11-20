import React, { useState, FC } from 'react'
import { Tab, Tabs, TabList } from 'react-tabs'
import { ethers } from 'ethers'
import { Form, Formik, FormikProps } from 'formik'
import { useSendDataAfterSuccessTran } from './api/hooks'
import { Icon, Input, Text, InputRange, ConfirmButton } from 'ui'
import {
  FormBalance,
  FormCoinInfo,
  FormTitle,
  RangeWrapper,
  TabValue,
  TabListWrapper,
  DurationWrapper,
} from './styles'
import { LockOverview } from 'components'
import { useMetaMask } from 'hooks/useMetaMask'

type TAb = {
  nameCoin?: string
  iconCoinUrl?: string
  subHeader?: string
  duration: string
  durations: { type: string; value: string }[]
  apr: number
  coinToBeLocked: number
  expectedRoi?: number
  maxArpPercent: string
  minArpPercent: string
  percents: string[]
  rangeValue: string
  amount: number
  errorStatus: string | false | undefined
}

export const StakeForm: FC<TAb> = (props) => {
  const {
    durations,
    duration,
    apr,
    coinToBeLocked,
    expectedRoi,
    maxArpPercent,
    minArpPercent,
    percents,
    rangeValue,
    // amount,
    errorStatus,
  } = props
  const [tab, setTabIndex] = useState(0)
  const [dtab, dsetTabIndex] = useState(1)

  const { wallet } = useMetaMask()

  const getAmountValueWithPercent = (amount: number, percent: number) =>
    (amount / 100) * percent

  const initialValueForm: TAb = {
    duration: duration,
    durations: durations,
    apr: apr,
    coinToBeLocked: coinToBeLocked,
    amount: getAmountValueWithPercent(
      Number(wallet.balance),
      Number(rangeValue)
    ),
    expectedRoi: expectedRoi,
    maxArpPercent: maxArpPercent,
    minArpPercent: minArpPercent,
    percents: percents,
    rangeValue: rangeValue,
    errorStatus: errorStatus,
  }

  const [recipient] = useState('0xd8E4Adad8C6E4a09d435449a6003a3274ECF6633')
  const [errorCheck, setErrorCheck] = useState(initialValueForm.errorStatus)
  const sendHook = useSendDataAfterSuccessTran()

  const sendSuccessTransaction = (data: unknown) => sendHook.mutateAsync(data)

  const onSendSuccess = (data: unknown) => sendSuccessTransaction(data)

  const handleTransaction = async (amount: number | undefined | string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      const transaction = {
        to: recipient,
        value: ethers.utils.parseEther(`${amount}`),
        // from:
      }

      await signer
        .sendTransaction(transaction)
        .then((transactionResponse) => {
          // This callback is called when the transaction is first sent to the network
          console.log('Транзакция отправлена:', transactionResponse)
          return transactionResponse.wait() // Wait for the transaction to be mined
        })
        .then((receipt) => {
          // This callback is called when the transaction is confirmed on the network
          console.log('Транзакция потверждена:', receipt)
          // You can perform additional actions here after the transaction is confirmed
          onSendSuccess(receipt)
        })
        .catch((error) => {
          console.error(error)
          setErrorCheck('Не хватает денег')
        })
    } catch (error) {
      console.error(error)
      setErrorCheck('Не хватает денег')
    }
  }

  const convertToNumber = (value: string | number | undefined) => Number(value)

  const calculateRoiWithDuration = (values: TAb) =>
    convertToNumber(values.amount) +
    (convertToNumber(values.amount) *
      (convertToNumber(values.apr) * convertToNumber(values.duration))) /
      365

  // const calcExpectedRoi = () => {
  //   return values.amount + values.apr
  // }

  // const getPercentAmout = (value: any) => {
  //   return value.percent
  // }

  const onSubmit = (data: TAb) =>
    handleTransaction(data?.expectedRoi?.toFixed(5))

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
        console.log('values', values)
        // TODO: Прокинуть
        // const validate = Boolean(
        //   values.email && values.name && values.subject && values.message
        // )
        return (
          <Form>
            <FormTitle>
              <Text text={'LOCKED BALANCE'} type={'card'} />
              <FormCoinInfo>
                <Icon size={'32'} name={'wallet'} />
                <Text text={'ETC'} type={'card'} />
              </FormCoinInfo>
            </FormTitle>
            <div>
              <Input
                type={'text'}
                label={'Subscription amount'}
                value={`${Number(values.amount).toFixed(
                  wallet.balance.length
                )}`}
                name={'amount'}
                placeholder={'Enter amount'}
                error={touched.amount && Boolean(errors.amount)}
                helperText={touched.amount && errors.amount && errorCheck}
                onChange={handleChange}
              />
              <div
                onClick={() => {
                  setFieldValue('amount', Number(wallet.balance))
                  setFieldValue('rangeValue', '100')
                  setTabIndex(3)
                }}
              >
                <Text text="Max" type="value" />
              </div>
            </div>
            <FormBalance>
              <Text text={'Balance :'} type={'label'} />
              <Text text={wallet?.balance} type={'card'} />
            </FormBalance>
            <RangeWrapper>
              <InputRange
                name="rangeValue"
                max={100}
                min={0}
                onChange={(e) => {
                  setTabIndex(-1)
                  setFieldValue(
                    'amount',
                    `${getAmountValueWithPercent(
                      Number(wallet.balance),
                      Number(values.rangeValue)
                    )}`
                  )
                  setFieldValue(
                    'expectedRoi',
                    (Number(values.amount) * Number(values.rangeValue)) / 100 +
                      Number(values.amount)
                  )
                  handleChange(e)
                }}
                value={values.rangeValue}
              />
            </RangeWrapper>
            <Tabs
              style={{ color: 'white' }}
              selectedIndex={tab}
              onSelect={(index: number) => setTabIndex(index)}
            >
              <TabList className={'tablist__list'}>
                <TabListWrapper>
                  {percents.map((e: string, i: number) => {
                    return (
                      <Tab
                        key={i}
                        onClick={() => {
                          if (e === 'MAX') {
                            setFieldValue('amount', Number(wallet.balance))
                            setFieldValue('rangeValue', 100)
                          } else {
                            setFieldValue(
                              'amount',
                              `${getAmountValueWithPercent(
                                Number(wallet.balance),
                                Number(e)
                              )}`
                            )
                            setFieldValue('rangeValue', Number(e))
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
              >
                <TabList className={'tablist__list_days'}>
                  <TabListWrapper>
                    {durations.map((e, i: number) => {
                      return (
                        <Tab
                          onClick={() => {
                            setFieldValue('duration', durations[i].type)
                            setFieldValue('apr', durations[i].value)
                          }}
                          key={`${i} + nd`}
                        >
                          <TabValue>
                            <Text text={`${e?.type} D`} type={'value'} />
                          </TabValue>
                        </Tab>
                      )
                    })}
                  </TabListWrapper>
                </TabList>
              </Tabs>
              <LockOverview
                expectedRoi={calculateRoiWithDuration(values)}
                duration={values.duration}
                durations={values.durations}
                apr={values.apr}
                coinToBeLocked={values.coinToBeLocked}
                maxArpPercent={values.maxArpPercent}
                minArpPercent={values.minArpPercent}
                percents={values.percents}
                rangeValue={values.rangeValue}
                amount={values.amount}
              />
              <div style={{ marginTop: 20 }}>
                <ConfirmButton eventClick={handleSubmit} text={'Confirm'} />
              </div>
              {errorCheck && <div style={{ color: 'red' }}>{errorCheck}</div>}
            </DurationWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
