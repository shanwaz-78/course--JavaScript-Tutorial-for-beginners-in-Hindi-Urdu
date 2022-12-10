  // Window height width methods
// window.innerHeight;
// window.innerWidth;
// window.outerHeight;
// window.outerWidth;
    
document.querySelector("#open").addEventListener("click",function () {
    //give link is optional;
    const openWindow = window.open("https://www.google.com",'',"width=500px,height=300px,left=100px,top=150px");
})

document.querySelector("#close").addEventListener("click",function () {
    openWindow.close()
})

    //To add scrool bar from y x; 
// window.scrollBy(0,50);
// window.scrollTo()

    //Location Object;

    // location.href = "https://www.google.com";
    // history.back;
    // history.forward;
    // history.go;

    let count = 0;
const stop = setInterval(function () {
    count += 10;
    if (count == 40) {
        clearInterval(stop);
    }
    const hs = document.querySelector("#submit-btn");
    hs.style.marginLeft = count + "px"
},1000)

