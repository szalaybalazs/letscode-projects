const getId = function(trips, stopTimes, i){
	let id = {}
	for (var  n= 0; n < trips.length; n++) {
		if(trips[n].id == stopTimes[i].tripId)
			id = trips[n]
	}
	return id
}