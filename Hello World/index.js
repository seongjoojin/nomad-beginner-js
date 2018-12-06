const title = document.querySelector("#title")

const BASE_COLOR = "white"
const OTHER_COLOR ="#27ae60"

function handClick() {
	const currentColor = title.style.color
	if(currentColor === BASE_COLOR) {
		title.style.color = OTHER_COLOR
	} else {
		title.style.color = BASE_COLOR
	}
}

function init() {
	title.style.color = BASE_COLOR
	title.addEventListener("click", handClick)
}
init()

function handleOffline() {
	console.log('Bye Bye')
}

function handleOnline() {
	console.log("Welcome back")
}

window.addEventListener("offline", handleOffline)
window.addEventListener("online", handleOnline)