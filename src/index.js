//console.log("Hello, node")

// var trace = require('tracer').colorConsole({level: 'warn'})
// trace.info('This is info!!!')
// trace.warn('This is warning!!!')
// trace.error('This is error!!!')

import * as func from './libs.js'

console.log(func.minus(7, 5))
const arr = [1,2,3,4,5]
console.log(func.odd(arr))
func.timetable(4)