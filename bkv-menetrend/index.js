
//html elemensek konstansainak létrehozása
const foundcontainer = document.getElementById("stops")
const overlay = document.getElementById("overlay")
const stopname = document.getElementById("stop")
const next = document.getElementById("next")
const header = document.getElementById("header")

//a filter html komponens
const filters = "<input type='text' placeholder='Megálló keresése... (Enter)' id='search' ><button onclick='search()'>Keresés</button>"

//a keresési lista html elemenseit tartalmazó változó
let list = ""

let link
if(window.location.href.split("//")[0] === "https:"){
	console.info("using https")
	link = "https://cors-anywhere.herokuapp.com/http://futar.bkk.hu/bkk-utvonaltervezo-api/ws/otp/api/where/arrivals-and-departures-for-stop.json?stopId=BKK_"
}else{
	link = "http://futar.bkk.hu/bkk-utvonaltervezo-api/ws/otp/api/where/arrivals-and-departures-for-stop.json?stopId=BKK_"
}

//funkció létrehozása
const select = (pos, id, name) => {
	//újrapozicionálja a térképet
	map(pos)

	//Kérés a bkk szerveréhez
	try{
		fetch(link + id, {method: "GET", mode: 'cors'})
		//várás az api válaszára, majd ha megjött kódolás átalakítása
		.then(res => res.json())
		.then(stop => {
			//stop logolása
			console.info(stop)
			//tesztelem, hogy a válasz státusza 200, azaz "ok"
			if(stop.code === 200 || stop.code === "200"){
				//Kiírom az overlayre a megálló nevét
				document.getElementById('content').innerHTML = name
				//tesztelem, hogy van-e a megállónak neve
				//"A biztonság kedvéért"
				if(name && name.length > 0)
					//ha van, megjelenítem az overlayt
					overlay.className = "overlay shown"
					else
						//ha nincs, küldök egy error a consolnak
						//ha esetleg nem tudnád, a böngésző konzolját a fejlesztőeszközöknél, az f12 funkció billenytű lenyomása után megnyíló fülön taláható meg
						console.error("A kiválaszott megálló lekérése nem sikerült!")
				//változóba mentem az apiból jövő adatokat
				//erre azért van szükség, mert az api válasz nagyon kacifántos, minden összefügg mindennel
				let currentTime = new Date(stop.currentTime * 1000)
				let stopTimes = stop.data.entry.stopTimes
				let stopTrips = stop.data.references.trips

				//a már elöbb megírt funkcióval összegyűjtöm a megállóban a következő 20 percben megálló járatokat
				let trips = getTrips(stopTrips)

				
				//tesztelem, hogy áll-e meg a következő húsz percben jármű
				if(stopTimes.length > 0){
					//a megállólista létrehozása
					//a megállólistában lesznek a megállóban megálló járatok, valamint azok adataik
					let stoplist = ""

					//for lopp létrehozása
					for (var i = 0; i < stopTimes.length; i++) {
						//következő jármű érkezésének lekérése
						let time = new Date(stopTimes[i].departureTime * 1000)

						//az adott járot azonosítójának lekérése
						let id = getId(trips, stopTimes, i)

						// a járat számának lekérése
						let route = stop.data.references.routes[id.routeId].shortName

						//járat cáljának lekérése
						let description = id.tripHeadsign


						//html komponenslitába való fűzűse
						stoplist = stoplist + "<div class='routes'><span class='route'>"+ route + "</span><span class='desc'>" + description + "</span><div class='time'>" + time.getHours() + ":" + time.getMinutes() + "</div></div>"
					}
					//vissza gomb, valamint az adatok megjelenítése
					header.innerHTML = "<button onclick='back()'>Vissza</button>" + stoplist
				
				//ha nem áll meg jármű, kiírom, hogy nincs információ
				}else{
					header.innerHTML = "<button onclick='back()'>Vissza</button> <br> <div class='routes'>Erre a magállóra nincs elérhető információ!</div>"

				}
			
			//ha a status nem 200, hibaüzenet küldése
			}else{
				console.error("A megálló lekérése nem sikerült!")
				back()
			}
		})
	}catch(err){
		console.info(err)
	}	
}

//vissza funkció létrehozása
const back = function(){
	//html tartalom visszaállítása
	header.innerHTML = filters + "<div id='stops'>" + list + "</div>"
	//overlay eltűntetése
	overlay.className = "overlay"


}

//Egy kicsit összegezném a munkát
//A bkk apival való dolgozás nem a legmegnyugtatóbb dolog az életben
//labirintusként viselkedik, nagyon sok helyen már szükségvan egy más helyen taláható azonosítóra
//ezen okból feltűnhet, hogy a honlap nem teljes, mivel csak az érkező járatokat írja ki, az indulókhoz hozzá sem nyúl
//fogd fel ezt úgy, mint egy feladatot, csináld meg Te az induló járatokat, valamint az api támogatja a várható érkezés kiírását, szóval egyszerűen kiírhatod, hogy mennyit késik, vagy éppen siet az adott járat, ezen felül, a mi oldalunk több azonos nevű megállót jelenít meg, amit szintén megcsinálhatnál
//Sok sikert, és jó kódolást!