const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([2,3,2])
        reject('reject korechi error eta')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})