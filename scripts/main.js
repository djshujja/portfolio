
let themeDots = document.getElementsByClassName('theme-dot')
let lightMode = document.getElementById('light-mode')

for (let i=0; themeDots.length> i; i++){
	themeChange(themeDots[i])
}

function themeChange(themeDot){
	themeDot.addEventListener('click', () => {
		removeAllOpen()
		let mode = themeDot.dataset.mode
		themeDot.classList.add('open')
		setTheme(mode)
	})
}

function removeAllOpen(){
	for(var i=0; themeDots.length>i; i++){
			themeDots[i].classList.remove('open')	
	}
}


let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
	

}else{
	setTheme(theme)

}


switch(theme){
	case 'light':
		lightMode.classList.add('open')
		setTheme('light')
		break;
	case 'blue':
		document.getElementById('blue-mode').classList.add('open')
		setTheme('blue')
		break;
	case 'green':
		document.getElementById('green-mode').classList.add('open')
		setTheme('green')
		break;
	case 'purple':
		document.getElementById('purple-mode').classList.add('open')
		setTheme('purple')
		break;
	default:
		lightMode.classList.add('open')
		setTheme('light')

}


function setTheme(mode){

		let link = document.getElementById('theme-style')
	switch(mode){
		case 'light':
			link.href = 'default.css';
			break;

		case 'blue':
			link.href = 'blue.css'
			break;

		case 'green':
			link.href = 'green.css'
			break;

		case 'purple':
			link.href = 'purple.css'
			break;
	}
	localStorage.setItem('theme', mode)
}



topBtn = document.getElementById("top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function Top() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}