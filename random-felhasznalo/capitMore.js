const capitMore = function(string){
	let array = string.split(" ")
	let result = ""
	for (var i = 0; i < array.length; i++) {
		result = result + capitalize(array[i]) + " "
	}
	return result

}