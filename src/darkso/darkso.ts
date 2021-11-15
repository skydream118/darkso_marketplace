import { Web3Provider } from '@ethersproject/providers'
import { DarksoContracts as Contracts } from './darksoContract'


export interface DarksoOptions {
    defaultAccount: string | null
}

export default class Darkso {
    readonly contracts: Contracts
    readonly account: string
    
    constructor(account: string , library: any ) {
        this.contracts = new Contracts(library)
        this.account = account
    }
    
    async estimateTxGas(execution: Promise<any>, gasMin: number = 0): Promise<{ gasLimit: string | null; }> {
        const gasOptions: { gasLimit: string | null; } = {
            gasLimit: null
        }
        
        try {
            const estimatedGas = await execution
            const bufferedGas = parseInt(estimatedGas.mul(170).div(100).toString())
            const normalizedGas = parseInt(((gasMin || 0) * 110 / 100).toString())
            gasOptions.gasLimit = Math.max(bufferedGas, normalizedGas).toString()
        } catch (ex) {
            gasOptions.gasLimit = '8000000'
        }
        return gasOptions
    }
}
