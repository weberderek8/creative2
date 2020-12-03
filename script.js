function loadJoke(e) {
  e.preventDefault();
  // get form values
  const url = "https://api.chucknorris.io/jokes/random";


  fetch(url)
	.then(function(response) {
		//console.log(response);
		//console.log(response.json());
		return response.json();
	}).then(function(json) {
		console.log(json);
		console.log(json.value);
		let result = json.value;
		document.getElementById("joke").innerHTML = result;
		document.getElementById("icon").src = json.icon_url;
	});
}


document.getElementById('get').addEventListener('click', loadJoke);
