import React, { createContext, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
//import useActiveWeb3React from '../../hooks/connections/useActiveWeb3React'
import Darkso from '../../darkso'

export interface DarksoContext {
    darkso?: Darkso
}

export const Context = createContext<DarksoContext>({ darkso: undefined })

const DarksoProvider: React.FC = ({ children }) => {
    const [darkso, setDarkso] = useState<any>()
    
    const { account, library, active } = useWeb3React()
    
    useEffect(() => {
        if (!library && !active && !account) return
        
        setDarkso(new Darkso(account as string, library ))
    }, [library, account])
        
    return <Context.Provider value={{ darkso: darkso }}>{children}</Context.Provider>
}

export default DarksoProvider
