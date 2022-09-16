/*start navbar*/
/*navbar search onclick effect*/
/*let searchIcon=document.querySelector(".fa-search") 
let searchInput=document.querySelector("#search");
let notification=document.querySelector(".notification")
searchIcon.addEventListener("click",function () {
if(searchInput.style.width=="100px") { 
  searchInput.style.width="0px"
  searchInput.style.borderBottom="0px"
  setTimeout(() =>{
  notification.style.display="flex"} ,300
 ) 

}else{searchInput.style.width="100px"
searchInput.style.borderBottom="1px solid black"
  notification.style.display="none"
}
}) */
/*end navbar search icon*/
/*star status icon functions */
let notifArray=["anythinvvvhh bvgg hhc vhg hhff ggff ggfg here", "exehgtr gdezdmple text here ", "new user", "freeh jjjjcft", "lorem others shopping site ", "email and more information on the web site ", "add visacard to your site ", "add visacard and create a new feedback "]
let messagesArray=["new like", "new sell", "new item delivered"]
let taskArray=["tr", "add fedd", "new host"]
creatListContent(notifArray,0);
creatListContent(messagesArray,1)
creatListContent(taskArray, 2)
function creatListContent(allrray, indexWhereAdElementd){
   let status = document.querySelectorAll(".status")[indexWhereAdElementd]
    let statusUl = document.createElement("ul")
    statusUl.classList.add("status-ul")
    status.appendChild(statusUl);
allrray.forEach((e)=>{
  statusLi = document.createElement("li")
let Litext = document.createTextNode(e)
let spanid = document.createElement("span");
idInArray = `${indexWhereAdElementd}${allrray.indexOf(e)}`
let id = document.createTextNode(allrray.indexOf(e)+ 1)
statusLi.setAttribute("id", idInArray)
spanid.appendChild(id)
let a = document.createElement("a")

a.appendChild(Litext)
a.setAttribute("href", "#")
statusLi.appendChild(spanid)
statusLi.appendChild(a)
let dateP=document.createElement("p")
dateText=document.createTextNode("13/07,09:00")
dateP.setAttribute("class","date")
dateP.appendChild(dateText)
statusLi.appendChild(dateP)
statusLi.classList.add("status-li")
statusUl.appendChild(statusLi)
}) }
/*end status icons function */
/*list o'click function*/
let iconClick=document.querySelectorAll(".notification > i")
iconClick.forEach((e)=>{
 e.addEventListener("click" ,dropMenuDisplay) 
})
 function dropMenuDisplay(){
   
   if(document.querySelector(`.${this.classList[1]}`).nextElementSibling.children[0].style.display=="none"){
    document.querySelectorAll(".status-ul").forEach((r)=>{r.style.display="none"});
     document.querySelector(`.${this.classList[1]}`).nextElementSibling.children[0].style.display="block"
    
   }
   else{  document.querySelector(`.${this.classList[1]}`).nextElementSibling.children[0].style.display="none"}
 
 }
 /*notification number*/
 let spn=document.querySelectorAll(".spn")
 spn.forEach((e)=>{
 if(e.parentElement.classList.contains("one")){
   e.innerHTML=notifArray.length 
 }
 else if(e.parentElement.classList.contains("two")){
   e.innerHTML=messagesArray.length 
 } 
 else{e.innerHTML =taskArray.length} 
 })
 /*end notifications number*/
 
   /*end navbar*/
   
   /*start sidebar */
   
let iconListSidebar=document.querySelectorAll(".list")

//function for sidebar links click//
iconListSidebar.forEach((e)=>{
  let yy;
  e.onclick=(sp)=>{
    
    if(sp.target.classList.contains("spanned")){
 yy= sp.target
    } 
  else{sp.target.parentElement.nextElementSibling; 
    yy=sp.target.parentElement
  }

   for (let i = 0; i < 3; i++) {
     if(iconListSidebar[i]!=yy){
   iconListSidebar[i].nextElementSibling .style.display= "none";
     iconListSidebar[i].style.backgroundColor="var(--bottonFour)"
  iconListSidebar[i].lastChild.style.transform!=""?iconListSidebar[i].lastChild.style.transform="":""
       
     }if(iconListSidebar[i]==yy){
       if(iconListSidebar[i].nextElementSibling.style.display=="block"){
  iconListSidebar[i].nextElementSibling.style.display="none"
        iconListSidebar[i].style.backgroundColor="var(--bottonFour)"
         iconListSidebar[i].lastChild.style.transform=""
       }
       else{iconListSidebar[i].nextElementSibling.style.display="block"
    iconListSidebar[i].style.backgroundColor="var(--firstTextCol)"
     iconListSidebar[i].lastChild.style.transform="rotate(90deg)"
       
  } 
     } 
  
   }
   
 } 
} )
//end function for sidebar links click//

/*show sidebar function*/
let chev=document.querySelector(".side-chev")
let side=document.querySelector(".sidebar")
let sideshow=true
chev.onclick=()=>{
  if(sideshow){
    side.style.width="320px" ;
    let rotat=document.querySelector(".side-chev .fa-chevron-right");
    rotat.style.transform="rotate(180deg)";
    chev.style.left="320px"
   sideshow=false
}else{
  side.style.width="0px";
 document.querySelector(".side-chev .fa-chevron-right").style.transform="";
chev.style.left="1px"
sideshow=true
} 
 
}

/*end sidebar show*/
/*end sidebar */

/*hppy clients number function*/
let arrStats=["125" ,"28","25" ,"12"]
let p=document.querySelectorAll(".happy-clients .box P")
  p.forEach((e)=>stat(e))
 
 function stat(el){
   let goal=el.dataset.goal
   
let stat=setInterval(()=>{
  el.firstChild.textContent++
  if(el.firstChild.textContent==goal){
    clearInterval(stat)
  } 
  
},goal/4000)
 } 
/* end hppy clients number function*/
/*area chart*/
        var options = {
          series: [{
          name: '$13,243',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: '2,35,090',
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: '$1,34,39',
          data: [19, 32, 45, 32, 26, 52, 41]
        },{
          name: '$1,34',
          data: [11, 32, 12, 50, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
/*end area chart*/
/*start search by title and code*/
let sel=document.querySelector(".ser div select")
let searchBy=document.querySelector(".ser div input")
sel.onchange=()=>{
  searchBy.placeholder=sel.value
} 


/*end search by title and code*/
/*start items function */
let items=[
  {
    image:"img/pic.png", 
    proName:"nike shoes", 
    proCode:"42zsq", 
    status:"paid", 
    payDate:"27 sep 2015", 
    proPrice:"$99.5", 
    quantity:"2",
    tracking:"#tezq44367"
  },  {
     image: "img/pic2.png",
     proName: "nike shoes",
     proCode: "42zsq",
     status: "Pending",
     payDate: "27 sep 2015",
     proPrice: "$99.5",
     quantity: "2",
     tracking: "#tezq44367"
   }, {
      image: "img/pic3.png",
      proName: "nike shoes",
      proCode: "42zsq",
      status: "Failed",
      payDate: "27 sep 2015",
      proPrice: "$99.5",
      quantity: "2",
      tracking: "#tezq44367"
    }, {
       image: "img/pic4.png",
       proName: "nike shoes",
       proCode: "42zsq",
       status: "paid",
       payDate: "27 sep 2015",
       proPrice: "$99.5",
       quantity: "2",
       tracking: "#tezq44367"
     }, {
        image: "img/pic5.png",
        proName: "nike shoes",
        proCode: "42zsq",
        status: "Failed",
        payDate: "27 sep 2015",
        proPrice: "$99.5",
        quantity: "2",
        tracking: "#tezq44367"
      },
      {
        image: "img/pic6.png",
        proName: "nike shoes",
        proCode: "42zsq",
        status: "paid",
        payDate: "27 sep 2015",
        proPrice: "$99.5",
        quantity: "2",
        tracking: "#tezq44367"
      }, {
        image: "img/pic3.png",
        proName: "nike shoes",
        proCode: "42zsq",
        status: "paid",
        payDate: "27 sep 2015",
        proPrice: "$99.5",
        quantity: "2",
        tracking: "#tezq44367"
      }, {
        image: "img/pic4.png",
        proName: "nike shoes",
        proCode: "42zsq",
        status: "paid",
        payDate: "27 sep 2015",
        proPrice: "$99.5",
        quantity: "2",
        tracking: "#tezq44367"
      },
       {
        image: "img/pic2.png",
        proName: "baskat",
        proCode: "abcsq",
        status: "paid",
        payDate: "27 sep 2015",
        proPrice: "$99.5",
        quantity: "2",
        tracking: "#tezq44367"
      }, {
        image: "img/pic.png",
        proName: "Fashion",
        proCode: "500zsq",
        status: "Pending",
        payDate: "27 sep 2015",
        proPrice: "$99.5",
        quantity: "2",
        tracking: "#tezq44367"
      }, 
       {
         image: "img/pic3.png",
         proName: "clothes",
         proCode: "42zsq",
         status: "paid",
         payDate: "27 sep 2015",
         proPrice: "$99.5",
         quantity: "2",
         tracking: "#tezq44367"
       }
  
  ];
  
let itemParent=document.querySelector(".items table")


function itemsToForm(arr){
  itemParent.innerHTML +=`<tr class="tt" >
             <th>
               IMAGE
               </th>
             <th>
               PRODUCT NAME
               </th>
          <th>
           PRODUCT CODE
            </th>
             <th>
               STATUS
               </th>
               <th>
                PURCHASED ON
               </th>
                 <th>
                   PRICE
                 </th>
                   <th>
                     QUANTITY
                   </th>
                   <th>
                  TRACKING NO#
                     </th>
                     </tr>`
  arr.forEach((e)=>{
itemParent.innerHTML +=` 
<tr><td><img src="${e.image}"></td>
<td>${e.proName}</td>
<td>${e.proCode}</td>
<td><p class="proInp">${e.status}</p></td>
<td>${e.payDate}</td>
<td>${e.proPrice}</td>
<td>${e.quantity}</td>
<td>${e.tracking}</td>
</tr>
`

})
statusBotton()

}

itemsToForm(items)


/*start status botton color*/
function statusBotton(){
let pStat=document.querySelectorAll(".proInp")
pStat.forEach((p)=>{
if(p.innerHTML=="paid"){
  p.style.backgroundColor="var(--bottonSiel)"
} 
else if(p.innerHTML=="Pending"){
  p.style.backgroundColor="var(--bottonThree)"
}
  else {
    p.style.backgroundColor="var(--bottonFive)"
  } 
})} 
/*end status botton color*/
searchBy.onkeyup=()=>{
  itemParent.innerHTML=""
  let css=[]
  
items.forEach((e)=>{

   if(searchBy.placeholder=="Search By Title"){
  e.proName.includes(searchBy.value. toLowerCase())?css.push(e):""
  }
  else{
    e.proCode.includes(searchBy.value)?css.push(e):""
  }
  
} )

if(css.length >0){
  itemsToForm(css)
   document.querySelector(".no-result").style.display="none"
}
else{
  document.querySelector(".no-result").style.display="block"
} 




  
} 
