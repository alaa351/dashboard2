let sidbar_toog = document.querySelector("#sidbar-toog");
let sidepar = document.getElementById("sidepar");
let content = document.querySelector("#content");
 
// sidbar_toog.addEventListener("click" , () => {

//     let sidbarwidth = window.getComputedStyle(sidepar).width;
//     if (sidbarwidth == "250px"){
//         sidepar.style.width ="0px";

//         content.style.marginRight ="0px";

//     }
//     else{
//         sidepar.style.width ="250px";
//         content.style.marginRight="250px";
//     }});
    	

sidbar_toog.addEventListener("click" , () => { 
  let sideparRight =  window.getComputedStyle(sidepar).right;
  if(window.innerWidth > 767){
    if(sideparRight == "0px"){
      sidepar.style.right ="-250px"; 
       content.style.marginRight = "0";

    }
    else {
      sidepar.style.right ="0"; 
       content.style.marginRight = "250px";

    }
  }
  else{
    if( sideparRight == "0px"){
       sidepar.style.right ="-250px";
    }
    else{
       sidepar.style.right ="0";
    }
  }
});


new DataTable('#example', {
    responsive:true,
  buttons: [
    {
      extend: 'copy',
      text: 'نسخ'
    },
    {
      extend: 'excel',
      text: 'اكسل'
    },
    {
      extend: 'pdf',
      text: 'ملف'
    },
    {
      extend: 'print',
      text: 'طباعة'
    }
  ],
  layout: {
    topStart: 'buttons'
  }
});
