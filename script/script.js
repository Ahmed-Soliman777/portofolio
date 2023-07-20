var toggler = document.querySelector(".toggle"),
    nav = document.querySelector(".responsive_nav"),
    close = document.querySelector(".close")
    // progressSection = document.querySelector("#skills"),
    // progress = document.querySelectorAll("progress")
toggler.onclick = function(){
    nav.classList.add("open_close_tab")
}
close.onclick = function(){
    nav.classList.remove("open_close_tab")
}


// window.onscroll = function(){
//     if(window.scrollY >= progressSection.offsetTop - 150){
//         console.log("reached")
//         progress.forEach((progress) => {
//             progress.value = progress.dataset.value;
//         })
//     }
// }