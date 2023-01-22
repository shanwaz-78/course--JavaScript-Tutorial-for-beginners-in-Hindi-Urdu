function fn(num) {
    return new Promise(function (resolve,reject) {
        console.log('Please Wait, Data is Fetching')
     setTimeout(() => {
        console.log('Data Fetched Successful')
        if (num >= 20) {
            resolve('Name is Greater (Seprate Promise)');
        }else{
            reject('Name is lower')
        }
     }, 1000);
    })
}

const a = new Promise(function (resolve,reject) {
   setTimeout(() => {
    resolve(10)
   console.log('First promise has resolved')
   }, 2000);
})

const b = new Promise(function (resolve,reject) {
   setTimeout(() => {
    resolve(20)
        console.log('second promise has resolved')
   }, 3000);
})

const c = new Promise(function (resolve,reject) {
    setTimeout(() => {
     resolve(30)
         console.log('third promise has resolved')
    }, 4000);
 })

fn(20).then((result)=> {
    console.log(result)
}).catch((reject)=> {
    console.log(reject)
})

Promise.all([a,b,c]).then((succss)=> {
    console.log(`Value is : ${succss}`)
    const Total = succss.reduce((acc,crr)=> acc + crr)
    console.log(`Total is : ${Total}`)
}).catch((error)=> {
    console.log(`Error is : ${error}`)
})

// // const a = prompt("Please Enter Your Percentage")

// // console.log('Please Wait Your Data is Fetching....');

// // setTimeout(() => {
// //     alert("Successul")
// // if (a >= 80 && a <= 100) {
// //     console.log('You are In Merit')
// // }else if (a >= 62 && a<= 80) {
// //     console.log('You are 1st Division')
// // }else if (a >= 50 && a <= 62) {
// //     console.log('You are 2nd division')
// // }else if (a >= 40 && a<= 50) {
// //     console.log('You are 3rd Division')
// // }else if (a >= 30 && a <= 40) {
// //     console.log('You are 4th Division')
// // }else if (a < 30) {
// //     console.log('You are Fail')
// // }else {
// //     console.log('Please Enter Valid Number')
// // }

// // },3000);