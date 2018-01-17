const categories = [
	"Nő - 14 alatt",
	"Nő - 14-18",
	"Nő - 18 felett",
	"Férfi - 14 alatt",
	"Férfi - 14-18",
	"Férfi - 18 felett",
]




const updatetable = function(category){
	const table = document.getElementById("runners")
	table.innerHTML = ""

	const categoryrunners = runners[category]
	console.log(categoryrunners)
	var header = table.insertRow(0)

	var header_place = header.insertCell(0)
	header_place.innerHTML = "<strong>Helyezés</strong>"

	var header_name = header.insertCell(1)
	header_name.innerHTML = "<strong>Név</strong>"

	var header_index = header.insertCell(2)
	header_index.innerHTML = "<strong>Rajtszám</strong>"

	var header_time = header.insertCell(3)
	header_time.innerHTML = "<strong>Idő</strong>"

	for (var i = 0; i < categoryrunners.length; i++) {
		var row = table.insertRow(i + 1)
		var place = row.insertCell(0)
		place.innerHTML = i + 1
		var name = row.insertCell(1)
		var index = row.insertCell(2)
		var time = row.insertCell(3)
		name.innerHTML = categoryrunners[i].Név
		index.innerHTML = categoryrunners[i].Rajtszám
		time.innerHTML = categoryrunners[i].Időeredmény
	}
}

updatetable(0)

const optionchange = function(){
	const category = document.getElementById('category').value
	updatetable(category)
}

