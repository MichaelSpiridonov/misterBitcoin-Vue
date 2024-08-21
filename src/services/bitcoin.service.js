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
    var marketHistory = await storageService.load(MARKET_HISTORY)
    if (!marketHistory || !marketHistory.length){
        const history = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        marketHistory = history.data.values
        storageService.save(MARKET_HISTORY, marketHistory)
    } 
    return marketHistory
}

async function getAvgBlockSize() {
    var avgBlock = await storageService.load(BLOCK_SIZE)
    if (!avgBlock || !avgBlock.length){
        const block = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`)
        avgBlock = block.data.values
        storageService.save(BLOCK_SIZE, avgBlock)
    } 
    return avgBlock
}