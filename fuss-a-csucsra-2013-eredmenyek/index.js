const updateRunners = function(category){
	const futok = runners[category]

	const table = document.getElementById("runners")
	table.innerHTML = ""

	var header = table.insertRow(0)

	var header_place = header.insertCell(0)
	header_place.innerHTML = "<strong>Helyezés</strong>"
	var header_name = header.insertCell(1)
	header_name.innerHTML = "<strong>Név</strong>"
	var header_index = header.insertCell(2)
	header_index.innerHTML = "<strong>Rajtszám</strong>"
	var header_time = header.insertCell(3)
	header_time.innerHTML = "<strong>Idő</strong>"

	for (var i = 0; i < futok.length; i++) {
		let row = table.insertRow(i + 1)

		let place = row.insertCell(0)
		let name = row.insertCell(1)
		let index = row.insertCell(2)
		let time = row.insertCell(3)

		place.innerHTML = i + 1 + "."
		name.innerHTML = futok[i].Név
		index.innerHTML = futok[i].Rajtszám
		time.innerHTML = futok[i].Időeredmény
	}
}
updateRunners(0)

const optionchange = function(){
	const category = document.getElementById('category').value
	updateRunners(category)
}

