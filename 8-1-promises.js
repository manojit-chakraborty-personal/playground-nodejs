const add = (a,b) => {
    return new Promise((resolve, reject) => {
        resolve(parseFloat(a) + parseFloat(b))
    })
}

add(1, 2).then((sum) => {
    console.log(sum);
    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2);
}).catch((e) => {
    console.error(e);
})