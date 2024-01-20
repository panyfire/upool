export type IButton = {
    text: string,
    eventClick?: (e: any) => void,
    disableStatus?: boolean,
    style?: { marginTop: number },
    onClick?: () => any | void
}
