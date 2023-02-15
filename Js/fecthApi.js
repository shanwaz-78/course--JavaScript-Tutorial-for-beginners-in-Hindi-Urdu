// Get text data from server;
// fetch('./Class-Inheritance.js')
// .then(response => response.text()) // It will return the promise
// .then(result => console.log(result)) // It will also return the promise

console.log('\n');
// Get from JSON file;

fetch('https://jsonplaceholder.typicode.com/users')
.then(resoponse2 => resoponse2.json())
.then(result2 => console.log(result2))

console.log('\n');
// read only names data of json file 

fetch('https://jsonplaceholder.typicode.com/users')
.then(response3 => response3.json())
.then(result3 => {
    for(const i in result3){
        console.log(result3[i].name)
    }
}).catch(error => console.log('Error Is Occured'));

console.log('\n');

fetch('https://jsonplaceholder.typicode.com/users')
.then(response4 => response4.json())
.then(result4 => {
    for(const i in result4){
        console.log(`${result4[i].username} ${result4[i].email}`)
    }
})

console.log('\n');

fetch('https://jsonplaceholder.typicode.com/users',{
    method : 'POST',
    body : JSON.stringify({
        name : 'Shnwaz',
        Age : 19,
        Designation : 'Developer',
    }),
    headers : {
        'Content-type' : 'application/json',
    },
})
.then(response5 => response5.json())
.then(result5 => console.log(result5))