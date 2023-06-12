// Get text data from server;
// fetch('./Class-Inheritance.js')
// .then(response => response.text()) // It will return the promise
// .then(result => console.log(result)) // It will also return the promise

// Get from JSON file;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resoponse2) => resoponse2.json())
  .then((result2) => console.log(result2));

console.log("\n");
// read only names data of json file

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response3) => response3.json())
  .then((result3) => {
    for (const i in result3) {
      console.log(result3[i].name);
    }
  })
  .catch((error) => console.log("Error Is Occured"));

console.log("\n");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response4) => response4.json())
  .then((result4) => {
    for (const i in result4) {
      console.log(`${result4[i].username} ${result4[i].email}`);
    }
  });

console.log("\n");

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
    name: "Shnwaz",
    Age: 19,
    Designation: "Developer",
  }),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response5) => response5.json())
  .then((result5) => console.log(result5));

// get Data
async function get_data(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error in Fetching... status code is " + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

get_data('https://jsonplaceholder.typicode.com/users');


// put data 
async function put_request(url, id, data) {
    const response = await fetch(`${url}/${id}`, {
        method : 'PUT',
        body : JSON.stringify(data),
        headers : {
            'Content-type' : 'application/json'
        }
    })
    if(!response.ok){
        throw new Error(`Error at put_request status is ${response.status}` );
    }
    const user_data = await response.json();
    return user_data;
};

async function put_data(url) {
    const user_data = {
        naem : 'Will',
        age : 23,
        designation : 'Developer',
    };
    const data = await put_request(url, 2, user_data);
    console.log(data)
};

put_data('https://jsonplaceholder.typicode.com/users')
