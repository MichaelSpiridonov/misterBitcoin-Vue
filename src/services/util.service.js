'use strict'

export const utilService = {
    makeId,
    getRandomInt,
    debounce,
    formatDate,
}

function makeId() {
    var pt1 = Date.now().toString(16)
    var pt2 = getRandomInt(1000, 9999).toString(16)
    var pt3 = getRandomInt(1000, 9999).toString(16)
    return `${pt3}-${pt1}-${pt2}`.toUpperCase()
}

function getRandomInt(num1, num2) {
    var max = num1 >= num2 ? num1 + 1 : num2 + 1
    var min = num1 <= num2 ? num1 : num2
    return Math.floor(Math.random() * (max - min)) + min
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

function formatDate(timestamp) {
    const date = new Date(timestamp)
    const options = {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    }
    return date.toLocaleDateString('en-US', options)
}