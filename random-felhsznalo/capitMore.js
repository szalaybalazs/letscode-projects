const capitMore = function(string){
	//a kapott "szöveg szöveg" kódolású szöveget a spaceknél array-á vágása
	let array = string.split(" ")
	let result = ""
	//for loop az elöbb elkészült arrayhoz
	for (var i = 0; i < array.length; i++) {
		//az array minden egyes elemét capitalizálom
		result = result + capitalize(array[i]) + " "
	}
	//visszaküldöm az így készült stringet
	return result

}