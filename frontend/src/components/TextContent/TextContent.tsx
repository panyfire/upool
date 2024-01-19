import React, { FC } from 'react'
import { Wrapper } from './styles'
import { Text } from 'ui'

type IProps = {
  title: string
  description: string
}

export const TextContent: FC<IProps> = (props) => {
  const { title, description } = props
  return (
    <Wrapper>
      <Text color={'white'} text={title} type={'h41'} />
      <Text color={'rgba(255, 255, 255, 0.6)'} text={description} type={'default'} />
    </Wrapper>
  )
}
