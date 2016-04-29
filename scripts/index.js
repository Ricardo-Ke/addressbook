// 全局变量
var winWid,winHei,
	nameRight = false,
	teleRight = false,
	cityRight = false,
	videoState = false;

window.onload = function() {
	checkWinSize();
	addEvents();
}

window.onresize = function() {
	checkWinSize();
}

function checkWinSize() {
	winWid = window.innerWidth || document.body.clientWidth;
	winHei = window.innerHeight || document.body.clientHeight;

	var content = document.querySelector('#content');
	content.style.width = winWid + 'px';
	content.style.height = winHei + 'px';
}

function addEvents() {
	addNameVerify();
	addTeleVerify();
	addCityVerify();
	// addSubmitVerify();
}

function addNameVerify() {	
	var	nameInput = document.querySelectorAll('#myName input')[0],
		nameTip = document.querySelectorAll('#myName span')[1];

	nameInput.onblur = function() {
		var re = new RegExp('^[\\u4e00-\\u9fa5]{0,}$');
		// var isRight = re.test(this.value);
		var isRight = this.value.match(re);
		if (!isRight) {
			nameTip.innerHTML = '*不对哦';
			nameTip.className = 'errColor';
		}else {
			nameTip.className = '';
			nameTip.innerHTML = '√';
			nameRight = true;
		}
	}
}

function addTeleVerify() {
	var teleInput = document.querySelector('#tele input'),
		teleTip = document.querySelectorAll('#tele span')[1];

	teleInput.onblur =function() {
		var re = new RegExp('^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$');
		var isRight = this.value.match(re);
		if (!isRight) {
			teleTip.innerHTML = '*号码不对哦';
			teleTip.className = 'errColor';
		}else {
			teleTip.className = '';
			teleTip.innerHTML = '√';
			teleRight = true;
		}
	}
}

function addCityVerify() {
	var cityInput = document.querySelector('#city input'),
		cityTip = document.querySelectorAll('#city span')[1];

	cityInput.onblur = function() {
		var re = new RegExp('^[\\u4e00-\\u9fa5]{0,}$');
		var isRight = this.value.match(re);
		if (!isRight) {
			cityTip.innerHTML = '*有问题哦';
			cityTip.className = 'errColor';
		}else {
			cityTip.className = '';
			cityTip.innerHTML = '√';
			cityRight = true;
		}
	}
}

function addSubmitVerify() {
	// var subBtn = document.querySelector('.subBtn');
	var myForm = document.querySelector('form');
	myForm.onsubmit = function(e) {
		e.preventDefault();
		if (nameRight && teleRight && cityRight) {
			myForm.submit();
		}else {
			alert("同学，确认你的信息都填写正确哦~~~");
		}
	}
}