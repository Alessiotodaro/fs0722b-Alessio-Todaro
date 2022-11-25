function scroll(){
    window.addEventListener("scroll",function(event){
     if (document.documentElement.scrollTop>410) {
         document.getElementById("nav").className = "nav-js"
         document.getElementById("last").style.backgroundColor = "green"
     } else {
         document.getElementById("nav").className = "";
         document.getElementById("last").style.backgroundColor = ""
     }
    })
 }

 scroll()