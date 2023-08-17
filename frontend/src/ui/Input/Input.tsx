import React, { FC } from 'react'
import {
    BtnMaxWrapper,
    Field,
    InputContainer,
    InputStyled,
    Label,
} from './styles'
import { Text } from 'ui'

export const Input: FC = () => {
    return (
        <InputStyled>
            <Label htmlFor="field">
                <Text text={'Do you like cheese?'} type={'label'} />
            </Label>
            <InputContainer>
                <Field
                    name="field"
                    id="field"
                    placeholder="enter the amount"
                    type="text"
                />
                <BtnMaxWrapper>
                    <Text text={'Max'} type={'value'} />
                </BtnMaxWrapper>
            </InputContainer>
        </InputStyled>
    )
}
