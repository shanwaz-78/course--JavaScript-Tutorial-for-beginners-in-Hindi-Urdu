document.querySelector('button').addEventListener('click',function () {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(responseText)
        }
    }

    xhttp.open("GET","../index.html",false);
    xhttp.send();
})