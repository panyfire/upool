import React, { useState } from 'react'
import { Tab, Tabs, TabList } from 'react-tabs'
import { Form, Formik, FormikProps } from 'formik'
import { Icon, Input, Text, InputRange } from 'ui'
import {
  FormBalance,
  FormCoinInfo,
  FormTitle,
  RangeWrapper,
  TabValue,
  TabListWrapper,
} from './styles'

type TAb = {
  amount: number
  rangeValue: number
  duration: number
}

export const StakeForm = () => {
  const [tab, setTabIndex] = useState(0)

  const initialValueForm: TAb = {
    amount: 0,
    rangeValue: 0,
    duration: 1,
  }

  const onSubmit = (data: TAb) => {
    // contactFormApi.mutateAsync(data).catch((reason) => setError(reason.response.status))
    alert(JSON.stringify(data))
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
          // handleSubmit,
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
                value={values.amount}
                name={'amount'}
                placeholder={''}
                error={touched.amount && Boolean(errors.amount)}
                helperText={touched.amount && errors.amount}
                onChange={handleChange}
              />
            </div>
            <FormBalance>
              <Text text={'Balance :'} type={'label'} />
              <Text text={'0.38133365768695803875 '} type={'card'} />
            </FormBalance>
            <RangeWrapper>
              <InputRange
                name={'rangeValue'}
                max={100}
                min={0}
                onChange={handleChange}
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
                  <Tab>
                    <TabValue>
                      <Text text={'25%'} type={'value'} />
                    </TabValue>
                  </Tab>
                  <Tab>
                    <TabValue>
                      <Text text={'50%'} type={'value'} />
                    </TabValue>
                  </Tab>
                  <Tab>
                    <TabValue>
                      <Text text={'75%'} type={'value'} />
                    </TabValue>
                  </Tab>
                  <Tab>
                    <TabValue>
                      <Text text={'MAX'} type={'value'} />
                    </TabValue>
                  </Tab>
                </TabListWrapper>
              </TabList>
            </Tabs>
          </Form>
        )
      }}
    </Formik>
  )
}
