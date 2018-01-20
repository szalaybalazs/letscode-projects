
//a html komponensek változókba való mentése
const image = document.getElementById("img")
const phoneelem = document.getElementById("phone")
const nameelem = document.getElementById("name")
const email = document.getElementById("email")
const locat = document.getElementById("location")


const getUser = function(){
	//kérése a randomusr apijának
	fetch("https://randomuser.me/api/")
	//api válaszának dekódolása
	.then(res => res.json())
	.then(user => {
		//felhasználó értékeinek kiválasztása és az alapértelmezett user változó felülírása
		user = user.results[0]
		//változók létrehozása
		let name, mail, location, phone, nat, picture, birth
		//gelhasználó nevének kezdőbetüi naggyátétele
		//a név első betűjének kiválasztása, és naggyá-alakítása
		//a név többi betüinek beillesztése 
		name = user.name.first[0].toUpperCase() + user.name.first.slice(1, user.name.first.length) + " " + user.name.last[0].toUpperCase() + user.name.last.slice(1, user.name.last.length)
		mail= user.email
		phone = user.phone
		picture = user.picture.large
		//Cím nagybetűsítése
		location = capitalize(user.location.city) + " - " + capitMore(user.location.street)

		//html módosítása
		locat.innerHTML = location
		image.src = picture
		nameelem.innerHTML = name
		phoneelem.innerHTML = phone
		email.innerHTML = mail
	})
}

//funkció meghívása
getUser()