// setTimeout(() => console.log('Two Seconds are up'), 2000)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             longitude: 0,
//             latitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('rahara', (data) => console.log(data))

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(parseFloat(a) + parseFloat(b))
    }, 2000)
}

add(1, 4, (sum) => console.log(sum))