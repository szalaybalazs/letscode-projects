//Funkció elnevezése
const getTrips = function(stopTrips){
	//az üres array létrehozása
	let trips = []
	//egy for loop, ami végigmegy az össze kapott útvonalon
	for (var i = 0; i < Object.keys(stopTrips).length; i++) {
				//változóba menti az útvonal azonosítóját
				let tripid = stopTrips[Object.keys(stopTrips)[i]]
				//beilleszti az azonosítót az utvonal array végére
				trips.push(tripid)
	}
	//visszaküldi az útvonalak azonosítóit
	return trips
}