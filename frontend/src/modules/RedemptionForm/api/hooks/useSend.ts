import { useMutation } from 'react-query'
import { SendRedeemID } from '../services'


export const useSend = () =>
    useMutation('SendSDSD', SendRedeemID.send)
