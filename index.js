let mylead=[];
// let inputel=document.getElementById("input-el");

const inputel=document.getElementById("input-el");

// const cannot be reassign

const ulel=document.getElementById("ul-el");

const inputbtn=document.getElementById("input-btn");

const delbtn=document.getElementById("del-btn");

const tabbtn=document.getElementById("tab-btn");

const leadsfromlocalstorage=JSON.parse(localStorage.getItem("mylead"));


// const tabs=[{
//     url:"https://www.linkedin.com/in/yash-talathi-70b229282/"
    
// }]

// to return previous store value....we need to check if it has truely value and call rendor...if it has then set it to myleads oand call funtion

if(leadsfromlocalstorage){
    mylead=leadsfromlocalstorage;
    render(mylead);
}

// what if...we also want to render old arr...so pass mylead in render and make render function more dynamic 

function render(leads){

    let listitem="";

    for(let i=0;i<leads.length;i++){
    // ulel.textContent+= "<li>"mylead[i]+"</li>";


    // listitem+= "<li><a target='_blank' href='"+mylead[i]+"'>" +mylead[i]+ "</a></li>";


    // using template strings:they can be break for proper usage

    listitem+= `
    <li>
    <a target='_blank' href='${leads[i]}'>
     ${leads[i]} 
     </a>
     </li>
     `;

    

    // method 2
    
    // const li=document.createElement("li");
    // li.textContent=mylead[i];
    // ulel.append(li);
    }
    ulel.innerHTML=listitem;

}

inputbtn.addEventListener("click",function() {
    mylead.push(inputel.value);
    // console.log(mylead);

    // Save mylead to local storage
    // remeber to JSON>stringify()

    localStorage.setItem("mylead",JSON.stringify(mylead));
    inputel.value="";
    render(mylead);
})

tabbtn.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs)
    {
        // active tab and chrome can have many window so curr window   
        mylead.push(tabs[0].url);
        localStorage.setItem("mylead",JSON.stringify(mylead));
        render(mylead);
    })

})

delbtn.addEventListener("dblclick",function(){
    localStorage.clear();
    mylead=[];
    render(mylead);
})



// hints
// localStorage.setItem(key,value)
// localStorage.getItem(key)
// localStorage.clear()
// both key and value needs to be the strings

// localStorage.setItem("myname","yash talthi");

// let namee=localStorage.getItem("myname");

// console.log(namee);

// // localStorage.clear()

// let mleads=["ww.aweson.com"];

// mleads=JSON.parse(mleads);

// console.log(mleads);


document.getElementById("toggle").addEventListener("click",function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    
    document.getElementById("del-btn").classList.toggle("del-dark");

    document.getElementById("tab-btn").classList.toggle("tab-dark");

    document.getElementById("input-btn").classList.toggle("input-dark");


    for(let i=0;i<mylead.length;++i){
        document.getElementsByTagName('a')[i].classList.toggle("a-dark");
    }

    // toggle means jar aahe trr remove ani nt aahe tar add
    // class list add class in html which we can edit in css
    // when use document.style it add in html

});



// script.js
// document.addEventListener("DOMContentLoaded", () => {
//     const toggleButton = document.getElementById("toggle");
//     const body = document.getElementsByTagName('body')[0];
//     const delBtn = document.getElementById("del-btn");
//     const tabBtn = document.getElementById("tab-btn");
//     const inputBtn = document.getElementById("input-btn");
//     const anchors = document.getElementsByTagName('a');

//     // Check the saved preference
//     if (localStorage.getItem("dark-mode") === "enabled") {
//         enableDarkMode();
//     }

//     toggleButton.addEventListener("click", () => {
//         if (body.classList.contains("dark-theme")) {
//             disableDarkMode();
//         } else {
//             enableDarkMode();
//         }
//     });

//     function enableDarkMode() {
//         body.classList.add("dark-theme");
//         delBtn.classList.add("del-dark");
//         tabBtn.classList.add("tab-dark");
//         inputBtn.classList.add("input-dark");

//         for (let i = 0; i < mylead.length; ++i) {
//             anchors[i].classList.add("a-dark");
//         }
//         localStorage.setItem("dark-mode", "enabled");
//     }

//     function disableDarkMode() {
//         body.classList.remove("dark-theme");
//         delBtn.classList.remove("del-dark");
//         tabBtn.classList.remove("tab-dark");
//         inputBtn.classList.remove("input-dark");

//         for (let i = 0; i < mylead.length; ++i) {
//             anchors[i].classList.remove("a-dark");
//         }
//         localStorage.setItem("dark-mode", "disabled");
//     }
// });
