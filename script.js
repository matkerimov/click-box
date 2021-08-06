const box = document.querySelector(".box")

document.addEventListener("click", (event) => {
    console.log(123)
    box.style.top = `${event.clientY}px`
    box.style.left = `${event.clientX}px`
    box.style.transform = "translate(-50%, -50%)"
})
//
// document.addEventListener("mousemove", (event)=>{
//     box.style.top = `${event.clientY}px`
//     box.style.left = `${event.clientX}px`
//     box.style.transform = "translate(50%, 50%)"
// })








// function qux(){
//     var bar = 2
// }
//
// qux()
//
// console.log(bar)
//
//
// let / const | блочная область видимости
// var | функциональная область видимости