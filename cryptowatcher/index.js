var binanceListUrl = "https://cors-anywhere.herokuapp.com/support.binance.com/hc/en-us/sections/115000106672-New-Listings";
var articles = [];
var truc = false;

var refreshIntervalId = undefined;

/* later */
clearInterval(refreshIntervalId);

$(document).ready(function () {
	// console.log("ready !");
	$.get(binanceListUrl, function (response) {
		// console.log("ok");
		initList(response);
	}, );
})

function watchBinance() {
	refreshIntervalId = setInterval(testNewCurrencyBinance, 10000)
}

function stopWatching() {
	clearInterval(refreshIntervalId);
}

function testNewCurrencyBinance() {
	console.log("test");
	$.get(binanceListUrl, function (response) {
		// console.log("ok");
		handleHtml(response);
	}, );
}

function handleHtml(htmlString) {

	let dom = $('<p id="truc">coucou</p>').append($.parseHTML(htmlString));

	let articlesList = $('ul:first', dom);

	let listLength = $('ul:first li', dom).length;

	let i = 0;
	for (i = 0; i < listLength; i++) {
		let e = $("li:first", articlesList);
		compareElement(e.text().trim());
		e.remove();
	}
}

function compareElement(title) {
	let index = articles.indexOf(title);

	if (index > - 1) {
		// console.log("Found element : " + title);
	} else {
		articles.push(title);
		playSound();
		// console.log("not found : " + title);
	}
}

function initList(response) {

	let htmlString = response;

	let dom = $('<p id="truc">coucou</p>').append(jQuery.parseHTML(htmlString));

	let articlesList = $('ul:first', dom);
	let listLength = $('ul:first li', dom).length;

	let i = 0;
	for (i = 0; i < listLength; i++) {
		let e = $("li:first", articlesList);
		articles.push(e.text().trim());
		e.remove();
	}
}


function sendEmail() {
	alert("send email not implemented")
}

function playSound() {
	// console.log("truc " + truc);
	truc = true;
	
	var alarm = document.getElementById("alarme");

	alarm.addEventListener('ended', function() {
		if(truc) {
			this.play();
		}
	}, false);

	alarm.play();
}

function stopSound() {
	// console.log("truc " + truc);
	truc = false;
}
