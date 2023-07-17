var toggler = document.querySelector(".toggle"),
    nav = document.querySelector(".responsive_nav"),
    close = document.querySelector(".close")
toggler.onclick = function(){
    nav.classList.add("open_close_tab")
}
close.onclick = function(){
    nav.classList.remove("open_close_tab")
}