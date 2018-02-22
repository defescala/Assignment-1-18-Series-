const getRandom =() => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
      const beer = beers[0];
      const name = document.createElement("h2");
			name.textContent = beer.name;
      const description = document.createElement("p");
			description.textContent = beer.description;
      const abv = document.createElement("p");
			abv.textContent = `Alcohol Volume: ${beer.abv}%`;
      const Brewed = document.createElement("span");
			Brewed.textContent = `First brewed on: ${beer.first_brewed}`;
      const beerElement = document.getElementById("beer");
	  beerElement.innerHTML = "";
      
      beerElement.appendChild(name);
      beerElement.appendChild(description);
      beerElement.appendChild(abv);
      beerElement.appendChild(Brewed);
    })
    .catch(err => {
      console.error(err.message);
    });
};

document.getElementById("grabButton").addEventListener("click", getRandom);
