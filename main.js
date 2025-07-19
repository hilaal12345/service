const icon1=document.querySelector("#icon1")
const icon2=document.querySelector("#icon2")
const menu=document.querySelector("#menu")
const count1=document.querySelector("#count1")
const count2=document.querySelector("#count2")
const Add=document.querySelector("#Add")
const Remove=document.querySelector("#Remove")


console.log( count1,
         count2, Add,Remove)

icon1.addEventListener("click",()=> {
          menu.classList.toggle("hidden")

          // menu.style.display="block"
          //   icon1.style.display = "none"


})


let value=0

Add.addEventListener("click",()=>{

          value++
          count1.innerHTML=value
          count2.innerHTML=value
})


Remove.addEventListener("click",()=>{
          if(value>0)
                    value--
          count1.innerHTML=value
          count2.innerHTML=value


          

          
})
















// const icon = document.querySelector("#iconOne")
// // const icon2 = document.querySelector("#icontwo")
// const menu = document.querySelector("#menu")

// console.log(icon, menu)

// icon.addEventListener("click", () => {
//     menu.style.display = "block"
//     icon.style.display = "none"
//     icon2.style.display = "block"
// })

// icon2.addEventListener("click", () => {
//      menu.style.display = "none"
//     icon.style.display = "block"
//     icon2.style.display = "none"
// })





// icon.addEventListener("click", () => {
//     menu.classList.toggle("hidden")
// })













// .main{
//     height: 20px;
//     width: 100%;
//     background-color: rgb(36, 36, 59);

// }