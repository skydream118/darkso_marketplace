import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'

//import ERC20Abi from './lib/abi/ERC20.json'
import DarksoAbi from './lib/abi/Darkso.json'
import DarksoNFTAbi from './lib/abi/DarksoNFT.json'

import { DarksoAddress, DarksoNFTAddress } from './lib/constants'


export class DarksoContracts {
    readonly library: Web3Provider
    
    private readonly darkso: Contract
    private readonly darksoNFT: Contract
    
    constructor(library: Web3Provider ) {
        this.library = library
        
        this.darkso = new Contract(DarksoAddress, DarksoAbi, library.getSigner())
        this.darksoNFT = new Contract(DarksoNFTAddress, DarksoNFTAbi, library.getSigner())
    }
    
    /**
     * Common
     * */
 
    getDarksoContract(): Contract {
        return this.darkso
    }
    getDarksoNFTContract(): Contract {
        return this.darksoNFT
    }    
}
