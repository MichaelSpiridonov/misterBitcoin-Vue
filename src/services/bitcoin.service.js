'use strict'

import axios from "axios";
import { storageService } from "./storage.service";

const RATE_KEY = 'rate'
const MARKET_HISTORY = 'marketHistory'
const BLOCK_SIZE = 'blockSize'
export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
	getAvgBlockSize,
}

async function getRate() {
    var rate = await storageService.load(RATE_KEY)
    if (!rate || !rate.length){
        const conversion = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        rate = conversion.data
        storageService.save(RATE_KEY, rate)
    } 
    return rate
}

async function getMarketPriceHistory() {

}

async function getAvgBlockSize() {
    
}