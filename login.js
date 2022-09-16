/*show password function */

let pass=document.querySelector(`input[type="password"]`)
let faEye=document.querySelector(".fa-eye")
let faEyeSlash=document.querySelector(".fa-eye-slash")

pass.onkeyup=()=>{
  faEye.style.display="block"
} 
faEye.addEventListener("click",()=>{
  faEye.style.display="none"
  pass.setAttribute("type", "text")
  faEyeSlash.style.display ="block"
  
})
faEyeSlash.addEventListener("click", ()=>{
  faEyeSlash.style.display="none"
  pass.setAttribute("type", "password")
  faEye.style.display="block"
})


let acconts=[
  {
    
    email:"chaouki@gmail.com",
    password:"azeqsd"
  } 
  ]
  let textinp=document.querySelector(`input[type="email"]`)
  let sub=document.querySelector("#sub")
sub.onclick=()=>{
  if(textinp.value.length>0&&pass.value.length>0)
  {
  for (let i=0;i<acconts.length;i++) {
    
    if(acconts[i].email==textinp.value.toLowerCase()&& pass.value==acconts[i].password){
      window.location.href="index.html" 
    
    }
    else{
      document.querySelector(".tt").style.display="block"
      setTimeout(()=>{
        document.querySelector(".tt").style.display="none"
      },4000)

    } 
    
  }} 

}
