
const getElement = (id) => {
	return document.getElementById(id) || undefined
}

const objects = {
	navbar: getElement("navbar"),
	copy: getElement("copyLink")
}

const buttons = document.querySelectorAll(".navbar-button").forEach((element) => {
	console.log(element)
	const scroll = element.getAttribute("scroll")
	element.addEventListener("click", function() {
		getElement(scroll).scrollIntoView({ behavior: "smooth" })
	})
})

document.addEventListener("scroll", function(e) {
	console.log(window.scrollY)
	if (window.scrollY < 15) {
		objects.navbar.style.height = "70px"
	} else {
		objects.navbar.style.height = "50px"
	}
})

objects.copy.addEventListener('click', function() {
	navigator.clipboard.writeText("https://example.com")
})