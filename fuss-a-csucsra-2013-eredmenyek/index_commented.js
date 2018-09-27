//A táblázat frissítő funkció elkészítése
const futok_frissités = function(category){

	//létrehozom a táblázatot tartalmazó változót (variable)
	const table = document.getElementById("runners")

	//"kitakarítom a táblázatot" - kitörlöm a tartalmát
	table.innerHTML = ""

	//kiválasztom a jelelegi futókat a funkció argumentumából
	//a kiválasztott futókat belerakom egy felülírhatatlan változóba
	const futok = runners[category]

	//létrehozom a táblázat első sorát
	var fejlec = table.insertRow(0)


	//Létrehozom a különböző cellákat az adott sorban
	var fejlec_helyezet = fejlec.insertCell(0)
	//Létrehozom a cella tartalmát html kódolással
	fejlec_helyezet.innerHTML = "<strong>Helyezés</strong>"
	//ugyan ez még néhányszor:
	var fejlec_nev = fejlec.insertCell(1)
	fejlec_nev.innerHTML = "<strong>Név</strong>"
	//..
	var fejlec_rajtszam = fejlec.insertCell(2)
	fejlec_rajtszam.innerHTML = "<strong>Rajtszám</strong>"
	//..
	var header_ido = fejlec.insertCell(3)
	header_ido.innerHTML = "<strong>Idő</strong>"


	//létrehozok egy for loopot, egy olyan funkció ami ddig fut le, ameddig a benne megadott állítás igaz
	//jelen esetben létrehozom az i változot, megmondom neki, hogy addig fusson, amíg kevesebb mint ahány jelenlegi futó van, és minden kör elött adjon hozzá 1-et
	for (var i = 0; i < futok.length; i++) {

		//a fönt már leírt módon létrehozom az összes sort
		//a let egy olyan változó, ami csak ezen a "szinten" és ez alatt, ebben a scopeban használható
		let sor = table.insertRow(i + 1)

		//egyben az összes cella megnevezése, ezúttal angolul
		let place = sor.insertCell(0)
		let name = sor.insertCell(1)
		let index = sor.insertCell(2)
		let time = sor.insertCell(3)

		//az i változó a loopon belül mindenhol lekérhető, jelen esetben az írja ki a versenyző helyezését
		place.innerHTML = i + 1 + "."
		name.innerHTML = futok[i].Név
		index.innerHTML = futok[i].Rajtszám
		time.innerHTML = futok[i].Időeredmény
	}
}
//táblázat frissítésa az oldal betöltésekor
futok_frissités(0)

//a selectre rakott változásfigyelő elkészítése
const optionchange = function(){
	//kategória leolvasása
	const category = document.getElementById('category').value
	//táblázat frissítése a fönt leolvasott kategóriával
	futok_frissités(category)
}

