<<<<<<< HEAD
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-Btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click",function() {
    console.log(sidebar.classList);
    //if(sidebar.classList.contains("show-sidebar")) {
       // sidebar.classList.remove("show-sidebar");
   // }
   // else {
    //    sidebar.classList.add("shoe-sidebar");
   // }
    sidebar.classList.toggle("shoebar");
});


closeBtn.addEventListener("click",function() {
    sidebar.classList.remove("show-sidebar");

});
=======
const weatherScorer=(weather) => {
    let score =0
    if(weather=='sunny'){
        score=1
    }else if(weather=='rainy'){
        score=-1
    }else{
        score=0
    }
    console.log(weather('rainy'))
}












































>>>>>>> d21b3e6 (Tip calculator initial commit)
