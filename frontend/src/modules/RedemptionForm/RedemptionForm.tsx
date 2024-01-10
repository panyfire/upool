import React, { FC } from 'react'
// import { ethers } from 'ethers'
import { Form, Formik, FormikProps } from 'formik'
import { ConfirmButton, Icon, Input, Text } from 'ui'
// import { toast } from 'react-toastify'
import {
  AmountWrapper,
  DurationWrapper,
  FormBalance,
  FormCoinInfo,
  FormTitle,
  MaxBtn,
  // RangeWrapper,
  // TabListWrapper,
  // TabValue,
} from './styles'

// import { LockOverview } from 'components'
import { useMetaMask } from 'hooks/useMetaMask'
import { chainIdName } from 'utils'

type TAb = {
  amount: number | string
}

export const RedemptionForm: FC<TAb> = (props) => {
  const { amount } = props
  const { wallet } = useMetaMask()

  const initialValueForm: TAb = {
    amount,
  }

  // const { mutateAsync } = useSendDataAfterSuccessTran()
  // const sendSuccessTransaction = (data: unknown) => mutateAsync(data)

  // const notify = (text: string) =>
  //   toast(text, {
  //     position: 'bottom-right',
  //     autoClose: 3500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'dark',
  //   })

  // const onSendSuccess = (data: unknown) => {
  //   sendSuccessTransaction(data).then(() => {
  //     popUpCallback && popUpCallback()
  //     setLoadingTransaction(false)
  //     notify('Transaction confirmed')
  //   })
  // }

  return (
    <Formik
      initialValues={initialValueForm}
      onSubmit={(value: TAb) => console.log(value)}
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
              <Text text={'Redemption ETH '} type={'card'} />
              <FormCoinInfo>
                <Icon size={'24'} name={'wallet'} />
                <Text text={chainIdName(`${wallet.chainId}`)} type={'card'} />
              </FormCoinInfo>
            </FormTitle>
            <AmountWrapper>
              <Input
                type={'text'}
                label={'Subscription amount'}
                value={values.amount}
                name={'amount'}
                placeholder={'Enter amount'}
                error={touched.amount && Boolean(errors.amount)}
                helperText={touched.amount && errors.amount}
                onChange={(e: HTMLElement) => {
                  handleChange(e)
                }}
              />
              <MaxBtn
                onClick={() => {
                  setFieldValue('amount', wallet.balance)
                }}
              >
                <Text text="Max" type="value" />
              </MaxBtn>
            </AmountWrapper>
            <FormBalance>
              <Text text={'Balance :'} type={'label'} />
              <Text text={wallet?.balance} type={'card'} />
            </FormBalance>
            {/*<RangeWrapper>*/}
            {/*  <InputRange*/}
            {/*    name="rangeValue"*/}
            {/*    max={'100'}*/}
            {/*    min={'0'}*/}
            {/*    onChange={(e) => {*/}
            {/*      setTabIndex(-1)*/}
            {/*      setFieldValue('rangeValue', e.target.value)*/}
            {/*      setFieldValue(*/}
            {/*        'amount',*/}
            {/*        `${getAmountValueWithPercent(*/}
            {/*          wallet.balance,*/}
            {/*          Number(e.target.value)*/}
            {/*        )}`*/}
            {/*      )*/}
            {/*      setFieldValue('expectedRoi', calculateRoiWithDuration(values))*/}
            {/*    }}*/}
            {/*    value={`${values.rangeValue}`}*/}
            {/*  />*/}
            {/*</RangeWrapper>*/}
            <DurationWrapper>
              {/*<Text text={'add duration'} type={'popUpPreTitle'} />*/}
              {/*<LockOverview*/}
              {/*  expectedRoi={values.expectedRoi}*/}
              {/*  duration={values.duration}*/}
              {/*  durations={values.durations}*/}
              {/*  apr={values.apr}*/}
              {/*  maxArpPercent={values.maxArpPercent}*/}
              {/*  minArpPercent={values.minArpPercent}*/}
              {/*  percents={values.percents}*/}
              {/*  rangeValue={values.rangeValue ? values.rangeValue : ''}*/}
              {/*  amount={values.amount}*/}
              {/*  startLocking={values.startLocking}*/}
              {/*  endLocking={values.endLocking}*/}
              {/*/>*/}

              <div style={{ marginTop: 20 }}>
                <ConfirmButton
                  disableStatus={!values.amount}
                  eventClick={handleSubmit}
                  text={'Confirm'}
                  style={{ marginTop: 76 }}
                />
              </div>
            </DurationWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
