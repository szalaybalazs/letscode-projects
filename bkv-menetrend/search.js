//Funkció elkészítése
const search = function(){
	//az eddigi találatok törlése
  	foundcontainer.innerHTML = ""
  	list = ""
	let filtered = []

	//a keresés mező tartalmának beolvasása, kisbetűkké alakítása, trimmelése
	//trimmelésnél a szöveg elött és mögött lévő felesleges szóközöket szedem le
	let value = document.getElementById('search').value.toLowerCase().trim()
	
	//for loop elkészítése
	for (var i = 0; i < stops.length; i++) {
		let stop = stops[i]
		//tesztelem, hogy az addot megálló megfelel-e a keresési feltételeknek
		if(stop.name.toLowerCase().includes(value)){
			//ha igen, beküldöm a találatok közé
			filtered.push(stop)
		}
	}
	//ha a keresés mező üres, az összes megállót hozza föl találatként
	if(value === ''){
		filtered = stops
	}
	//for loop a találatoknak
	for (var i = 0; i < filtered.length; i++) {
		//leolvasom, és arrayba illesztem a megálló pozícióját
		let position = [
			filtered[i].lat,
			filtered[i].lon
		]
		//beillesztem a html komponensé alakított megállót a html listába
		//vedd észre, hogy mivel a megálló neve és azonosítója szöveg, és elötte már használtam mind a két alap idézőjelet, 
		//ott a back-tick karaktert használtam
		list = list + "<div class='item' onclick='select([" + position + "], `" + filtered[i].id + "`, `" + filtered[i].name + "`)'>" + filtered[i].name +" </div>"
	}
	//ha kész a lista, kiírom a html-be
	foundcontainer.innerHTML = list
	//Ha nincs talált megálló
	if(filtered.length === 0)
		//Kiírom, hogy nem talált semmit
		foundcontainer.innerHTML = "<div class='item notfound'>Nincs a keresésnek megfelelő megálló</div>"
}