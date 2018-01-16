var binanceListUrl = "https://cors-anywhere.herokuapp.com/support.binance.com/hc/en-us/sections/115000106672-New-Listings";
var kucoinListUrl = "https://cors-anywhere.herokuapp.com/news.kucoin.com/en/category/announcements/";
var articlesBinance = [];
var articlesKucoin = [];
var truc = false;

var binanceRefreshIntervalId = undefined;
var kucoinRefreshIntervalId = undefined;

$(document).ready(function () {
	$.get(binanceListUrl, function (response) {
		initList(response, binanceHtmlParser);
	});

	$.get(kucoinListUrl, function (response) {
		initList(response, kucoinHtmlParser);
	});

	binanceRefreshIntervalId = setInterval(watchBinance, 10000)
	kucoinRefreshIntervalId = setInterval(watchKucoin, 10000)
})

function compareElement(title, list) {
	let index = list.indexOf(title);
	let isNewElement = false;

	if (index > - 1) {
		// console.log("Found element : " + title);
	} else {
		list.push(title);
		isNewElement = true;
		// console.log("not found : " + title);
	}

	return isNewElement;
}

function initList(htmlString, htmlParser) {
	let dom = $('<p id="truc">coucou</p>').append(jQuery.parseHTML(htmlString));
	htmlParser(dom);
}

/* binance */
function watchBinance() {
	console.log("Watch Binance");
	$.get(binanceListUrl, function (response) {
		handleHtml(response, binanceHtmlParser);
	});
}


function stopWatchingBinance() {
	clearInterval(binanceRefreshIntervalId);
}

function binanceHtmlParser(dom) {
	let articlesList = $('ul:first', dom);
	let listLength = $('ul:first li', dom).length;
	let isNewElement;

	let i = 0;
	for (i = 0; i < listLength; i++) {
		let e = $("li:first", articlesList);
		isNewElement = compareElement(e.text().trim(), articlesBinance);
		e.remove();
	}

	return isNewElement;
}

/* kucoin */
function watchKucoin() {
	console.log("Watch Kucoin")
	$.get(kucoinListUrl, function (response) {
		handleHtml(response, kucoinHtmlParser);
	});
}


function stopWatchingKucoin() {
	clearInterval(kucoinRefreshIntervalId);
}

function kucoinHtmlParser(dom) {
	let isNewElement = false;
	let articlesList = $('.post-title', dom);

	let listLength = articlesList.length;

	let i = 0;
	for(i = 0; i<listLength; i++) {
		let e = $(".post-title:eq(" + i + ")", dom).text().trim();
		isNewElement = compareElement(e, articlesKucoin);
	}

	return isNewElement;
}

/* Generic */
function handleHtml(html, htmlParser) {
	let isNew = htmlParser(html);
	if (isNew) {
		sendAlert();
	}
}

function sendEmail() {
	$.get("http://localhost:9876/news", function (response) { 
			console.log("Mail send" + response);
		});
}

function playSound() {
	truc = true;

	var alarm = document.getElementById("alarme");

	alarm.addEventListener('ended', function () {
		if (truc) {
			this.play();
		}
	}, false);

	alarm.play();
}

function stopSound() {
	truc = false;
}

function sendAlert() {
	console.log("alert !");
	playSound();
	sendEmail();
}