document.querySelector("#Submit").addEventListener('click',(e) => {
  try {
    alert('Your Form Submited Successfuly')
    e.preventDefault();
    async function tryFn() {
        console.log('This Is 1st Msg');
        console.log('This Is 2nd Msg');
        await fetch('https://jsonplaceholder.typicode.com/users',{
            method : 'POST',
            body : JSON.stringify({
                name : document.querySelector('#Name').value,
                password : document.querySelector("#password").value,
                city : document.querySelector("#city").value,
            }),
            headers : {
                'Content-type' : 'application/json'
            },
        })
        .then(response => response.json())
        .then(result => console.log(result))
    }
    
    console.log('This Is 3rd Msg');
    tryFn();
    console.log('This is 4th Msg');

  } catch (error) {
    console.log('Error Is Occured');
  }
})