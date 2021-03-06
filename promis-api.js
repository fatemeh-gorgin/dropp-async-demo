// const p = Promise.reject(new Error('error message'))
// p.catch(error => console.log(error))

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async op 1 ...');
        resolve(1)
    }, 2000)
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async op 2 ...');
        resolve(2)
    }, 2000)
})
Promise.all([p1, p2])
    .then(result => console.log(result))