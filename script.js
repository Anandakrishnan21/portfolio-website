const toggleBtn = document.getElementsByClassName("toggle")[0];
const navLink = document.getElementsByClassName("nav-link")[0];

toggleBtn.addEventListener('click',()=>{
	navLink.classList.toggle('active')
})