const minus = (a, b) => (a-b)
const odd = (arr) => (arr.filter(e => e % 2 === 1))
const timetable = (num) => {
    const k = [1,2,3,4,5,6,7,8,9,10,11,12]
    k.map(e => console.log(`${num} x ${e} = ${num*e}`))
}
export {
    minus,
    odd,
    timetable
}