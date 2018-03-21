(function() {

	// 免费游戏hover
	var gameHover = document.getElementById("game_hover");
	gameHover.addEventListener("mouseover", function() {
		gameHover.parentNode.setAttribute("class", "js_site-item site-item g_tips-r-show");
	},  false);
	gameHover.addEventListener("mouseleave", function() {
		gameHover.parentNode.setAttribute("class", "js_site-item site-item");
	},  false);


	// 弹出皮肤选择模块:
	var skinBtn = document.getElementById("skinbtn");
	var hao123Skin = document.getElementById("hao123-skin");
	var skinDisplay;

	skinBtn.addEventListener("click", function(event) {
		event.target.setAttribute("class", "skinbtn__link down");
		setTimeout(function() {
			event.target.setAttribute("class", "skinbtn__link");
		}, 500);

		skinDisplay = hao123Skin.style.display;
		if(skinDisplay == "none") {
			hao123Skin.style.display = "block";
			hao123Skin.style.maxHeight = "243px";
		} else {
			hao123Skin.style.display = "none";
			hao123Skin.style.maxHeight = "0px";
		}

	}, false);


	//选择皮肤：
	var gImglinks = document.getElementsByClassName("g-imglink");
	var gImglinksImage = document.getElementsByClassName("g-imglink-img-click");
	var skinRoot = document.getElementById("skinroot");
	var skinName_i;

	for (var i = 0, l = gImglinks.length; i < l; i++) {
    	gImglinks[i].addEventListener("click", function(event) {

    		for (var j = 0, k = gImglinksImage.length; j < k; j++) {
    			gImglinksImage[j].parentNode.setAttribute("class", "g-imglink g-fc3 g-fc3h skin__item");
    		}
    		event.target.parentNode.setAttribute("class", "g-imglink g-fc3 g-fc3h skin__item skin__item--select");

    		skinName_i = event.target.parentNode.name;

    		setSkinBackground(skinName_i);

    	}, false);
  	}

  	//关闭皮肤浮层:
  	var skinClose = document.getElementById("skin_close");
  	skinClose.addEventListener("click", function() {
  		hao123Skin.style.display = "none";
		hao123Skin.style.maxHeight = "0px";
  	}, false);


  	//保存皮肤：
  	var skinrootClassName;
  	var skinSave = document.getElementById("skin_save");
  	skinSave.addEventListener("click", function() {
  		skinrootClassName = skinRoot.getAttribute("class");
  		if(skinrootClassName == "sk_skin-color-green") {
  			alert("请先选择皮肤再保存哦！");
  		} else {
  			document.cookie = "skinName=" + skinName_i;
  			hao123Skin.style.display = "none";
			hao123Skin.style.maxHeight = "0px";
  		}
  	}, false);

  	//获取cookie及显示；
  	var skinName = getcookieSkinname();
  	if(skinName == "") {
  		skinRoot.setAttribute("class", "sk_skin-color-green");
  	} else {
  		setSkinBackground(skinName);
  	}

  	//函数-获取cookie中模板名称；
  	function getcookieSkinname() {
  		var arrStr = document.cookie.split("; ");
  		for (var i = 0; i < arrStr.length; i++) {
  			var temp = arrStr[i].split("=");
  			if (temp[0] = "skinName") {
  				return unescape(temp[1]);
  			}
  		}
  		return "";
  	};
  	
  	//函数-设置背景图；
  	function setSkinBackground(skinName) {
  		switch(skinName) {
    			case "a-xingqiujueqi3":
    				skinRoot.setAttribute("class", "sk_xingqiujueqi3");
    				break;
    			case "a-chuyinweilai":
    				skinRoot.setAttribute("class", "sk_miku");
    				break;
    			case "a-zhanlang2":
    				skinRoot.setAttribute("class", "sk_zhanlang2");
    				break;
    			case "a-mengchong":
    				skinRoot.setAttribute("class", "sk_keaimengchong");
    				break;
    			case "a-chenxiao":
    				skinRoot.setAttribute("class", "sk_chenxiao");
    				break;
    			case "a-yangran":
    				skinRoot.setAttribute("class", "sk_hao123");
    				break;
    			case "a-huangxuan":
    				skinRoot.setAttribute("class", "sk_huangxuan");
    				break;
    			case "a-wuxiubo":
    				skinRoot.setAttribute("class", "sk_wuxiubo");
    				break;
    		}
  	}
}());