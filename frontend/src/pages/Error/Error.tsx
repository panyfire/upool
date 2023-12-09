import React from 'react'
import { Text } from 'ui'
import { GradientBackground } from 'layouts/GradientBackground'

export const Error = () => {
  return (
    <GradientBackground>
      404
      <Text text={'ERROR PAGE'} type={'h1'} />
    </GradientBackground>
  )
}
