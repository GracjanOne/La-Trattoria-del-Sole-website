const landing_page_button = document.querySelector("#landing-page-button");
const send_button = document.querySelector("#send-button");
const hamburgerMenu = document.querySelector("#hamburger-menu"); 
const sidebar = document.querySelector("#right-menu");
const closeSidebar = document.querySelector("#close-sidebar");
landing_page_button.addEventListener("mousedown", function(){
    landing_page_button.style.boxShadow = "inset 0px 0px 7px 0px rgba(66, 68, 90, 1)";
});
landing_page_button.addEventListener("mouseup", function(){
    landing_page_button.style.boxShadow = "none";
});
send_button.addEventListener("mousedown", function(){
    send_button.style.boxShadow = "inset -1px 2px 4px 6px rgba(0, 0, 0, 0.25)";
});
send_button.addEventListener("mouseup", function(){
    send_button.style.boxShadow = "-6px 4px 4px 6px rgba(0, 0, 0, 0.25)";
    window.setTimeout(msgSend,500);
});
function msgSend(){
    alert("Twoja wiadomość została poprawnie wysłana!");
};

hamburgerMenu.addEventListener("click", () =>{
    sidebar.style.display = "block"
    //Dodaj animacje
})
closeSidebar.addEventListener("click", (evt) =>{
    evt.preventDefault();
    sidebar.style.display = "none"
})