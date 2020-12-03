function loadJoke(e) {
  e.preventDefault();
  const url = "https://api.chucknorris.io/jokes/random";


  fetch(url)
	.then(function(response) {
		return response.json();
	}).then(function(json) {
		let result = json.value;
		document.getElementById("joke").innerHTML = result;
		document.getElementById("icon").src = json.icon_url;
	});
}


document.getElementById('get').addEventListener('click', loadJoke);
