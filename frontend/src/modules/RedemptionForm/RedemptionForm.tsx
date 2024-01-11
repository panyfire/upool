import React, { FC, useState } from 'react'
// import { ethers } from 'ethers'
import { Form, Formik, FormikProps } from 'formik'
import { ConfirmButton, Icon, Input, Text } from 'ui'
import { toast } from 'react-toastify'
import {
  AmountWrapper,
  DurationWrapper,
  // FormBalance,
  FormCoinInfo,
  FormTitle,
  MaxBtn,
  UnlocksWrapper,
  // RangeWrapper,
  // TabListWrapper,
  // TabValue,
} from './styles'

// import { LockOverview } from 'components'
// import { useMetaMask } from 'hooks/useMetaMask'
// import { chainIdName } from 'utils'
import {
  LockOverviewStyles,
  LockOverviewStylesItem,
} from 'components/LockOverview/styles'
import { Alert } from 'components'
import { useSend } from './api/hooks'

type TAb = {
  amount: number | string
  totalAmount: number | string
  duration: number | string
  endLocking: string | number
  id: number | string
  popupCallback?: (e: boolean) => void
}

export const RedemptionForm: FC<TAb> = (props) => {
  const { amount, totalAmount, duration, endLocking, id, popupCallback } = props
  // const { wallet } = useMetaMask()

  const initialValueForm: TAb = {
    amount,
    totalAmount,
    duration,
    endLocking,
    id,
  }

  const [value, setValue] = useState(0)

  const { refetch } = useSend(value)
  // const sendSuccessTransaction = (data: unknown) => mutateAsync(data)

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

  const onSendSuccess = async (data: TAb) => {
    await setValue(Number(data.id))
    await refetch()
    if (popupCallback) {
      await popupCallback(false)
    }
    await notify('Sent request')
  }

  return (
    <Formik
      initialValues={initialValueForm}
      onSubmit={(value: TAb) => onSendSuccess(value)}
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
            <div>
              <FormTitle>
                <Text text={'BLOCKED BALANCE'} type={'popUpPreTitle'} />
                <FormCoinInfo>
                  <Icon size={'24'} name={'wallet'} />
                </FormCoinInfo>
              </FormTitle>

              <LockOverviewStyles style={{ marginTop: 20 }}>
                <LockOverviewStylesItem>
                  <div>
                    <Text text={'ETH LOCKED'} type={'popUpValue'} />
                    <Text
                      color={'#86F3FF'}
                      text={String(totalAmount)}
                      type={'popUpValue'}
                    />
                  </div>
                  <div>
                    <Text text={'UNLOCKS IN'} type={'popUpValue'} />
                    <UnlocksWrapper>
                      <Text
                        color={'#86F3FF'}
                        text={String(duration)}
                        type={'popUpValue'}
                      />
                      <Text
                        color={'#86F3FF'}
                        text={'DAY'}
                        type={'popUpValue'}
                      />
                    </UnlocksWrapper>
                  </div>
                </LockOverviewStylesItem>
              </LockOverviewStyles>
              <FormTitle style={{ marginTop: 20 }}>
                <Text text={'Redemption'} type={'popUpPreTitle'} />
                <FormCoinInfo>
                  <Icon size={'24'} name={'wallet'} />
                </FormCoinInfo>
              </FormTitle>
            </div>
            <AmountWrapper>
              <Input
                type={'text'}
                label={'Ransom amount'}
                value={
                  values.amount > totalAmount ? totalAmount : values.amount
                }
                name={'amount'}
                placeholder={'Enter amount'}
                error={touched.amount && Boolean(errors.amount)}
                helperText={touched.amount && errors.amount}
                onChange={(e: HTMLElement) => {
                  handleChange(e)
                  if (values.amount > totalAmount) {
                    setFieldValue('amount', String(totalAmount))
                  }
                }}
                maxLength={12}
              />
              <MaxBtn
                onClick={() => {
                  setFieldValue('amount', totalAmount)
                }}
              >
                <Text text="Max" type="value" />
              </MaxBtn>
            </AmountWrapper>
            <div style={{ marginTop: 20 }}>
              <Alert />
            </div>
            <div style={{ marginTop: 20 }}>
              <Text
                text={'BUYBACK  overview '}
                color={'#86F3FF'}
                type={'popUpPreTitle'}
              />
              <LockOverviewStyles style={{ marginTop: 20 }}>
                <LockOverviewStylesItem>
                  <Text
                    color={'#A5A5A5'}
                    text={'BLOCKED BALANCE'}
                    type={'popUpPreTitle'}
                  />
                  <Text
                    color={'#86F3FF'}
                    text={String(totalAmount)}
                    type={'popUpPreTitle'}
                  />
                </LockOverviewStylesItem>
                <LockOverviewStylesItem>
                  <Text
                    color={'#A5A5A5'}
                    text={'Redemption amount'}
                    type={'popUpPreTitle'}
                  />
                  <Text
                    color={'#86F3FF'}
                    text={String(
                      values.amount > totalAmount ? totalAmount : values.amount
                    )}
                    type={'popUpPreTitle'}
                  />
                </LockOverviewStylesItem>
                <LockOverviewStylesItem>
                  <Text
                    color={'#A5A5A5'}
                    text={'early redemption commission'}
                    type={'popUpPreTitle'}
                  />
                  <Text color={'#86F3FF'} text={'50%'} type={'popUpPreTitle'} />
                </LockOverviewStylesItem>
                <LockOverviewStylesItem>
                  <Text
                    color={'#A5A5A5'}
                    text={'Total payout amount'}
                    type={'popUpPreTitle'}
                  />
                  <Text
                    color={'#86F3FF'}
                    text={String(
                      +(values.amount > totalAmount
                        ? totalAmount
                        : values.amount) / 2
                    )}
                    type={'popUpPreTitle'}
                  />
                </LockOverviewStylesItem>
              </LockOverviewStyles>
            </div>

            <DurationWrapper>
              <div style={{ marginTop: 20 }}>
                <ConfirmButton
                  disableStatus={!values.amount && !value}
                  eventClick={handleSubmit}
                  text="Confirm"
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
