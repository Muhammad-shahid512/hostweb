var crosbtn=document.querySelector(".crosbtn")
let pop=document.querySelector(".pop")
const popUPopen=()=>{
    pop.classList.add("scale-100")
}
const closePOPup=()=>{   
pop.classList.remove("scale-100");
}


// MOdule 1 popup data show popup

let pop1class=document.querySelector(".pop1class")

const pop1=()=>{
    console.log("hello")
pop1class.classList.add("scale-100")
}
const closePOPup1=()=>{
    pop1class.classList.remove("scale-100")

}



// Pop up Update Data 
const pop2class=document.querySelector(".pop2class");
const closePOPup3=()=>{
    pop2class.classList.remove("scale-100")
    console.log("Remove pop")
}


// feee

// 2nd form

let updateForm = document.querySelector(".updateForm");
const first1 = document.getElementById("first1");
const first2 = document.getElementById("first2");
const first3 = document.getElementById("first3");
const first4 = document.getElementById("first4");
const first5 = document.getElementById("first5");

// Define the event listener outside of the editData function
updateForm.addEventListener("submit", function (event) {
    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
    let index = parseInt(event.target.dataset.index); // Add data-index attribute to your form in the HTML
    let name1 = event.target.name1.value;
    let name2 = event.target.name2.value;
    let name3 = event.target.name3.value;
    let name4 = event.target.name4.value;
    // let name3 = event.target.name3.value;
    // let name4 = event.target.name4.value;
    // let name5 = event.target.name5.value;
    uploadset[index].name = name1;
    uploadset[index].email = name2;
    uploadset[index].pre = name4;
   
console.log(`${index} this is index`)
    localStorage.setItem("userData", JSON.stringify(uploadset));
    showData();
    event.preventDefault();
});
const editData = (index) => {
    pop2class.classList.add("scale-100");
    console.log(index);
    console.log("edit");
    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
    first1.value = uploadset[index].name;
    first2.value = uploadset[index].email;
    first3.value = uploadset[index].number;
    first4.value = uploadset[index].pre;
    first5.value = uploadset[index].se;
    console.log(`this is previous Store Data in the state ${uploadset[index].name}`);
    // Set the data-index attribute to the current index
    updateForm.setAttribute("data-index", index);
 };

// Optionally, remove the event listener when it's no longer needed
// updateForm.removeEventListener("submit", yourEventListenerFunction);


// Pop up Entry Data
let form=document.querySelector(".formsubmit");
let notification=document.querySelector(".notification");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let number = e.target.number.value;
    let pre = parseFloat(e.target.pre.value) || 0; // Convert pre to a number, default to 0 if not a valid number
    let se = e.target.se.value;

    console.log(name + email + number + se);
    e.target.reset();

    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
   
    let check=0
   for(let i of uploadset)
   {
    if(i.email==email)
    {
        check=1;
        break;
        
    }
   }
   if(check==1)
   {
    alert("Same data not allow")
   }
   else{

    if(name!='' && email!=''&& number!='' && pre!='' &&se!='')
    {
    uploadset.push({
        "name": name,
        "email": email,
        "number": number,
        "pre": pre,
        "se": se,
    });
}
else{
    alert("Plaese enter")
}

   }
   
   
   
  
    localStorage.setItem("userData", JSON.stringify(uploadset));

    // Calculate the sum of 'pre' values


    showData();
    showListData();
    lengthFunction();
    lengthFunctionbell()
    money();

    let length = uploadset.length;
    notification.innerHTML = length;
});
let student=document.querySelector(".student");
const lengthFunction=()=>{
    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
  let notification=uploadset.length;
  student.innerHTML=notification;
}
let bell=document.querySelector(".bell");
const lengthFunctionbell=()=>{
    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
  let noti=uploadset.length;
  bell.innerHTML=noti;
}
// show data
const showData=()=>{
    // let postshort=document.querySelector(".postshort");
    let post1Data=document.querySelector(".post1Data");
    let uploadset=JSON.parse(localStorage.getItem("userData"))||[];
let addData=''
// let showpost='';
uploadset.forEach((element,i)=>{

    addData+=`
    <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">${element.name}</td>
    <td class="whitespace-nowrap px-6 py-4">${element.email}</td>
    <td class="whitespace-nowrap px-6 py-4">${element.number}</td>
    <td class="whitespace-nowrap px-6 py-4">${element.pre}</td>
    <td class="whitespace-nowrap px-6 py-4">${element.se}</td>
  
    <td class="whitespace-nowrap px-6 py-4" onclick="editData(${i})">  <button class="mx-4 bg-[#df6e93] rounded-md p-[9px]  text-white text-[16px] font-semibold">Edit</button></td>
    <td class="whitespace-nowrap px-6 py-4" onclick="RemveData(${i})">  <button class="mx-4 bg-[#df6e93] rounded-md p-[9px] text-white font-semibold text-[16px]">Remove</button></td>
  </tr>
    `

})
post1Data.innerHTML=addData;
// postshort.innerHTML=showData;
// console.log(addData)
}
showData();


// let clearall=document.querySelector(".clearall");
// clearall.addEventListener("click",(e)=>{
//     localStorage.clear("userData")
//     showData()
// })

const clearall=()=>{
    localStorage.clear("userData");
    showData();
}

const RemveData=(index)=>{
console.log(index)
let uploadset=JSON.parse(localStorage.getItem("userData"))||[];
uploadset.splice(index,1)
localStorage.setItem("userData",JSON.stringify(uploadset));
showData();
console.log("Delete function fire")
}
// fee cocker
let fee =document.querySelector(".fee")
let pop3class=document.querySelector(".pop3class");
let closefee=()=>{
    pop3class.classList.remove("scale-100")

}
let post2Data=document.querySelector(".post2Data");
const feeData = () => {
    pop3class.classList.add("scale-100");
    let datafee = '';
    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(uploadset);
    console.log("Data");
    uploadset.forEach((dt, i) => {
        datafee += `
            <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">${dt.name}</td>
                <td class="whitespace-nowrap px-6 py-4">${dt.email}</td>
                <td class="whitespace-nowrap px-6 py-4">${dt.number}</td>
                <td class="whitespace-nowrap px-6 py-4">${dt.fee}</td>
                <td class="whitespace-nowrap px-6 py-4" onclick="addfee(${i})">
                    <button class="mx-4 bg-[#df6e93] rounded-md p-[9px] text-white text-[16px] font-semibold">ADD FEE</button>
                </td>
            </tr>`;
    });
    post2Data.innerHTML = datafee;
};
let total=0;
const addfee = (index) => {
    let fee = prompt("Enter fee value");
    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
uploadset[index].fee=fee;
localStorage.setItem("userData",JSON.stringify(uploadset));
console.log(uploadset)
       
};


let listData=document.querySelector(".listData");
const showListData=()=>{
    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
    let total = uploadset.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.pre;
    }, 0);
    console.log(total);
let showf='';
console.log(uploadset)
    uploadset.forEach((data,i)=>{

showf+=`
<tr class=" border-b dark:border-neutral-500">
<td class="whitespace-nowrap px-6 py-4 font-medium">${data.name}</td>
<td class="whitespace-nowrap px-6 py-4">${data.email}</td>
<td class="whitespace-nowrap px-6 py-4">${data.number}</td>
<td class="whitespace-nowrap px-6 py-4">${data.pre}</td>
</tr>
`
    })
    listData.innerHTML=showf;
console.log(showData)
}


// sum all money in jason

let tstudent=document.querySelector(".tstudent");
let money=()=>{
    let uploadset = JSON.parse(localStorage.getItem("userData")) || [];
let sum=0;
sum=uploadset.reduce((datavalue,currentValue)=>{
 return datavalue+currentValue.pre   
},0)
tstudent.innerHTML=sum;   
}

money();


showListData();
lengthFunction();
lengthFunctionbell()