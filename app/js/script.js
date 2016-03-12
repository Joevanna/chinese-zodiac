var ChineseAnimals = (function() {
	var animalsYears = {
		'rat': [1948, 1960, 1972, 1984, 1996, 2008],
        'ox': [1949, 1961, 1973, 1985, 1997, 2009],
        'tiger': [1950, 1962, 1974, 1986, 1998, 2010],
        'rabbit': [1951, 1963, 1975, 1987, 1999, 2011],
        'dragon': [1952, 1964, 1976, 1988, 2000, 2012],
        'snake': [1953, 1965, 1977, 1989, 2001, 2013],
        'horse': [1954, 1966, 1978, 1990, 2002, 2014],
        'goat': [1955, 1967, 1979, 1991, 2003, 2015],
        'monkey': [1956, 1968, 1980, 1992, 2004, 2016],
        'dog': [1958, 1970, 1982, 1994, 2006, 2018],
        'rooster': [1957, 1969, 1981, 1993, 2005, 2017],
        'pig': [1959, 1971, 1983, 1995, 2007, 2019]
	};

	// Returns the name of teh animal if the year if found, or false if it wasn't
	function getAnimalFromYear(year) {
		var foundAnimal = false;
		for (var animalName in animalsYears) {
			var years = animalsYears[animalName];
			if(years.indexOf(year) > -1) {
				foundAnimal = animalName;
				break;
			}
		}

		return foundAnimal;
	}

	return {
		getAnimalFromYear: getAnimalFromYear
	}
})();

//Main program
var App = (function() {
	var els = {
		input: null,
		button: null,
		output: null
	};

	 // Finds the animal for the given year,
    // and passes the result for output.
    // @param year - int of year to find

    function findAnimal(year) {
    	var animal = ChineseAnimals.getAnimalFromYear(year);
    	showOutput(year, animal);
    }

    function showOutput(year, animal) {
 		var	ul = document.querySelector('animals'),
			lis = document.querySelectorAll('li');


		for (var i = 0; i < lis.length; i++) {

			if (lis[i].classList.contains('selected')) {
				lis[i].className -= 'selected';
			}

			if (animal === lis[i].getAttribute('id')) {
				lis[i].className += 'selected';
			}
		}

		els.input.value = '';
		
    }
// Caches our DOM elements and binds a handler for the button.

	function init() {
			els.input = document.getElementById('js-input'),
			els.button = document.getElementsByTagName('button')[0];
		

		els.button.addEventListener('click', function() {
			var inputYear = parseInt(els.input.value);
			findAnimal(inputYear);
			// els.input.value = '';
		}, false);
	}

	return {
		init: init
	}

})();

App.init();
