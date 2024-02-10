import React, { FC, useState } from 'react'
import { Form, Formik, FormikProps } from 'formik'
import { ConfirmButton, Icon, Text } from 'ui'
import { toast } from 'react-toastify'
import {
  DurationWrapper,
  FormCoinInfo,
  FormTitle,
  UnlocksWrapper,
} from './styles'

import {
  LockOverviewStyles,
  LockOverviewStylesItem,
} from 'components/LockOverview/styles'
import { Alert } from 'components'
import { useSend } from './api/hooks'
import { useMetaMask } from 'hooks/useMetaMask'

type TAb = {
  amount: number | string
  totalAmount: number | string
  duration: number | string
  endLocking: string | number
  id: number | string
  popupCallback?: (e: boolean) => void
  transactionId?: string
  wallet?: string
  refetch?: () => void
}

export const RedemptionForm: FC<TAb> = (props) => {
  const {
    amount,
    totalAmount,
    duration,
    endLocking,
    id,
    popupCallback,
    refetch,
  } = props
  const { wallet } = useMetaMask()

  const initialValueForm: TAb = {
    amount,
    totalAmount,
    duration,
    endLocking,
    id,
    wallet: String(wallet?.accounts[0]),
  }

  const [, setValue] = useState(0)

  const { mutateAsync } = useSend()
  const send = (data: TAb) => mutateAsync(data).then(() => refetch && refetch())

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
    await send(data)
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
          // touched,
          // errors,
          // handleChange,
          // setFieldValue,
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
            <div style={{ marginTop: 20 }}>
              <Alert />
            </div>
            <DurationWrapper>
              <ConfirmButton
                eventClick={handleSubmit}
                text="Confirm"
                style={{ marginTop: 75 }}
              />
            </DurationWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
