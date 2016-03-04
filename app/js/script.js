var application = (function() {


	var input = document.getElementById('js-input'),
		button = document.getElementsByTagName('button')[0],
		ul = document.querySelector('animals'),
		lis = document.querySelectorAll('li');

	var animals = [
			{
				id: 'rat',
				years: [1948, 1960, 1972, 1984, 1996, 2008]
			},
			{
				id: 'ox',
				years: [1949, 1961, 1973, 1985, 1997, 2009]
			},
			{
				id: 'tiger',
				years: [1950, 1962, 1974, 1986, 1998, 2010]
			},
			{
				id: 'rabbit',
				years: [1951, 1963, 1975, 1987, 1999, 2011]
			},
			{
				id: 'dragon',
				years: [1952, 1964, 1976, 1988, 2000, 2012]
			},
			{
				id: 'snake',
				years: [1953, 1965, 1977, 1989, 2001, 2013]
			},
			{
				id: 'horse',
				years: [1954, 1966, 1978, 1990, 2002, 2014]
			},
			{
				id: 'goat',
				years: [1955, 1967, 1979, 1991, 2003, 2015]
			},
			{
				id: 'monkey',
				years: [1956, 1968, 1980, 1992, 2004, 2016]
			},
			{
				id: 'dog',
				years: [1958, 1970, 1982, 1994, 2006, 2018]
			},
			{
				id: 'rooster',
				years: [1957, 1969, 1981, 1993, 2005, 2017]
			},
			{
				id: 'pig',
				years: [1959, 1971, 1983, 1995, 2007, 2019]
			}
		];

	function submitValue(e) {
		e.preventDefault();
		for (var i = 0; i < animals.length; i++) {
			var dates = animals[i].years;
			for (var j = 0; j < dates.length; j++) {
				if (parseInt(input.value) === dates[j]) {
					for (d = 0; d < lis.length; d++) {

						if (lis[d].getAttribute('id') === animals[i].id) {
							lis[d].classList.add("selected");
						}
					}
				}
			}
		}
	}

	// function onClearInput() {
	// 	if (input.value = '') {
	// 		lis.className = "";
	// 	}
	// }

	function events() {
		button.addEventListener('click', submitValue);
		input.addEventListener('change', onClearInput);
	}

	function init() {
		events();
	}

	return {
		init: init
	}

})();


(function() {

	application.init();

})();
