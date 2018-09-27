const image = document.getElementById("img")
const phoneelem = document.getElementById("phone")
const nameelem = document.getElementById("name")
const email = document.getElementById("email")
const locat = document.getElementById("location")


const getUser = function(){
	fetch("https://randomuser.me/api/")
	.then(res => res.json())
	.then(user => {

		user = user.results[0]

		let name, mail, location, phone, nat, picture, birth

		name = user.name.first[0].toUpperCase() + user.name.first.slice(1, user.name.first.length) + " " + user.name.last[0].toUpperCase() + user.name.last.slice(1, user.name.last.length)
		mail= user.email
		phone = user.phone
		picture = user.picture.large
		location = capitalize(user.location.city) + " - " + capitMore(user.location.street)

		locat.innerHTML = location
		image.src = picture
		nameelem.innerHTML = name
		phoneelem.innerHTML = phone
		email.innerHTML = mail
	})
}

getUser()