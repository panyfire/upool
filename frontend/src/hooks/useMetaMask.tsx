/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, createContext, PropsWithChildren, useContext, useCallback } from 'react'

import detectEthereumProvider from '@metamask/detect-provider'
import { formatBalance } from 'utils'

type WalletState = {
    accounts: any[]
    balance: string
    chainId: string | unknown
}

type MetaMaskContextData = {
    wallet: WalletState
    hasProvider: boolean | null
    error: boolean
    errorMessage: string
    isConnecting: boolean
    connectMetaMask: () => void
    clearError: () => void
}

const disconnectedState: WalletState = { accounts: [], balance: '', chainId: '' }

const MetaMaskContext = createContext<MetaMaskContextData>({} as MetaMaskContextData)

export const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {
    const [hasProvider, setHasProvider] = useState<boolean | null>(null)


    const [isConnecting, setIsConnecting] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
    const clearError = () => setErrorMessage('')

    const [wallet, setWallet] = useState(disconnectedState)
    // useCallback ensures that you don't uselessly recreate the _updateWallet function on every render
    const _updateWallet = useCallback(async (providedAccounts?: any) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const accounts = providedAccounts || await window.ethereum.request(
            { method: 'eth_accounts' },
        )

        if (accounts.length === 0) {
            // If there are no accounts, then the user is disconnected
            setWallet(disconnectedState)
            return
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const balance = formatBalance(await window.ethereum.request({
            method: 'eth_getBalance',
            params: [accounts[0], 'latest'],
        }))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const chainId = await window.ethereum.request({
            method: 'eth_chainId',
        })

        setWallet({ accounts, balance, chainId })
    }, [])

    const updateWalletAndAccounts = useCallback(() => _updateWallet(), [_updateWallet])
    const updateWallet = useCallback((accounts: any) => _updateWallet(accounts), [_updateWallet])

    /**
     * This logic checks if MetaMask is installed. If it is, some event handlers are set up
     * to update the wallet state when MetaMask changes. The function returned by useEffect
     * is used as a "cleanup": it removes the event handlers whenever the MetaMaskProvider
     * is unmounted.
     */
    useEffect(() => {
        const getProvider = async () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            const provider = await detectEthereumProvider({ silent: true })
            setHasProvider(Boolean(provider))

            if (provider) {
                updateWalletAndAccounts()
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                window.ethereum.on('accountsChanged', updateWallet)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                window.ethereum.on('chainChanged', updateWalletAndAccounts)
            }
        }

        getProvider()

        return () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            window.ethereum?.removeListener('accountsChanged', updateWallet)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            window.ethereum?.removeListener('chainChanged', updateWalletAndAccounts)
        }
    }, [updateWallet, updateWalletAndAccounts])

    const connectMetaMask = async () => {
        setIsConnecting(true)

        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            })
            clearError()
            updateWallet(accounts)
        } catch(err: any) {
            setErrorMessage(err.message)
        }
        setIsConnecting(false)
    }

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <MetaMaskContext.Provider
            value={{
                wallet,
                hasProvider,
                error: !!errorMessage,
                errorMessage,
                isConnecting,
                connectMetaMask,
                clearError,
            }}
        >
            {children}
        </MetaMaskContext.Provider>
    )
}

export const useMetaMask = () => {
    const context = useContext(MetaMaskContext)
    if (context === undefined) {
        throw new Error('useMetaMask must be used within a "MetaMaskContextProvider"')
    }
    return context
}
