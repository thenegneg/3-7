
let div=Array.from(document.getElementsByTagName("div"))
div.forEach((elem)=>{
    elem.addEventListener("click",function(){
        elem.classList.toggle("box")
    })
})
let h1=Array.from(document.getElementsByTagName("h1"))
h1.forEach((elem)=>{
    elem.addEventListener("click",function(){
        elem.classList.toggle("active")
        elem.classList.toggle("radiuse")
        elem.classList.toggle("color")
    })
})

console.log("--------------------------------------------");