// ? SIDEBAR
const sideBar = document.querySelector("#sidebar");
const menubtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menubtn.addEventListener('click', () => {
    sideBar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none';
})
