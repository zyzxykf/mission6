(function() {
	var ch = function(element) {
		if(element.charAt(0) == "#") {
			return document.querySelector(element);
		}
		return document.querySelectorAll(element);
	};

	var viewer = ch("#viewer"),
		equals = ch("#equals"),
		nums = ch(".num"),
		operators = ch(".ops"),
		beforeNum = "",
		afterNum = "",
		resultNum,
		operator;

	var setNum = function() {
		if(resultNum) {
			beforeNum = this.getAttribute("value");
			resultNum = "";
		} else {
			beforeNum += this.getAttribute("value");
		}
		viewer.setAttribute("value", beforeNum);
	}

	for (var i = 0, l = nums.length; i < l; i++) {
			nums[i].onclick = setNum;
	}
})();