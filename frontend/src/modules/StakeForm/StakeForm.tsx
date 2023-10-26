import React, { useState, FC } from 'react'
import { Tab, Tabs, TabList } from 'react-tabs'
import { ethers } from 'ethers'
// import detectEthereumProvider from '@metamask/detect-provider';
import { Form, Formik, FormikProps } from 'formik'
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
  durations: string[]
  apr: number
  coinToBeLocked: number
  expectedRoi?: number
  maxArpPercent: string
  minArpPercent: string
  percents: string[]
  rangeValue: string
  amount: number
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
  }

  // const [amount, setAmount] = useState('0.381333')
  const [recipient] = useState('0xd8E4Adad8C6E4a09d435449a6003a3274ECF6633')

  const handleTransaction = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window?.ethereum)
      const signer = provider.getSigner()

      const transaction = {
        to: recipient,
        value: ethers.utils.parseEther('0.0000451567'),
        // from:
      }

      await signer.sendTransaction(transaction)
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = (data: TAb) => {
    // contactFormApi.mutateAsync(data).catch((reason) => setError(reason.response.status))
    handleTransaction().then(() => alert(JSON.stringify(data)))
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
        console.log('values', values)
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
                helperText={touched.amount && errors.amount}
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
                name={'rangeValue'}
                max={100}
                min={0}
                onChange={(e) => {
                  if (Number(values.rangeValue) <= 25) {
                    setTabIndex(0)
                  }
                  if (
                    Number(values.rangeValue) > 25 &&
                    Number(values.rangeValue) <= 50
                  ) {
                    setTabIndex(1)
                  }
                  if (
                    Number(values.rangeValue) > 50 &&
                    Number(values.rangeValue) <= 75
                  ) {
                    setTabIndex(2)
                  }
                  if (
                    Number(values.rangeValue) === 100 ||
                    values.rangeValue === wallet.balance
                  ) {
                    setTabIndex(3)
                  }
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
              onSelect={(index: number) => {
                setTabIndex(index)
                switch (index) {
                  case 0:
                    setFieldValue('rangeValue', 25)
                    break
                  case 1:
                    setFieldValue('rangeValue', 50)
                    break
                  case 2:
                    setFieldValue('rangeValue', 75)
                    break
                  case 3:
                    setFieldValue('rangeValue', 100)
                    break
                }
              }}
            >
              <TabList className={'tablist__list'}>
                <TabListWrapper>
                  {percents.map((e: string, i: number) => {
                    return (
                      <Tab key={i}>
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
                onSelect={(index: number) => {
                  dsetTabIndex(index)
                  switch (index) {
                    case 0:
                      setFieldValue('duration', 1)
                      break
                    case 1:
                      setFieldValue('duration', 7)
                      break
                    case 2:
                      setFieldValue('duration', 30)
                      break
                    case 3:
                      setFieldValue('duration', 60)
                      break
                    case 4:
                      setFieldValue('duration', 90)
                      break
                  }
                }}
              >
                <TabList className={'tablist__list_days'}>
                  <TabListWrapper>
                    {durations.map((e, i: number) => {
                      return (
                        <Tab key={i}>
                          <TabValue>
                            <Text text={`${e} D`} type={'value'} />
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
                durations={[]}
                apr={0}
                coinToBeLocked={0}
                maxArpPercent={''}
                minArpPercent={''}
                percents={[]}
                rangeValue={''}
                amount={0}
              />
              <ConfirmButton eventClick={handleSubmit} text={'Conform'} />
            </DurationWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
