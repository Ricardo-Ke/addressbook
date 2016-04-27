// 全局变量
var winWid,winHei;

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
}

function addNameVerify() {
	var myName = document.querySelector('#myName'),	
		nameInput = myName.getElementsByTagName('input')[0];
		nameTip = myName.getElementsByTagName('span')[1];

	nameInput.onblur = function() {
		var re = new RegExp('^[\\u4e00-\\u9fa5]{0,}$');
		var isRight = re.test(this.value);
		if (!isRight) {
			nameTip.innerHTML = '*错了哦';
			nameTip.className = 'errColor';
		}else {
			nameTip.className = '';
			nameTip.innerHTML = '(必填哦)';
		}
	}

	nameInput.onfocus = function() {
		addNameVerify();
	}
}