
(function() {

	window.addEventListener("load", function() {

		var timeEnd = new Date();
		console.log("耗时：" + (timeEnd - timeStart));

		var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		// 滚动函数
		var scrollTo = (function() {
			var timer;
			// cubic-bezier贝塞尔曲线函数
			function easeIn(left, timing, duration, curr) {
				return left * (timing /= duration) * timing + curr;
			}

			// 用闭包维护变量timer，end是目标参数，duration是经过时间
			return function(end, duration, callback) {
				// 连续点击
				timer && clearInterval(timer);
				// 开始时间
				var startTime = new Date();

				timer = setInterval(function() {
					// 当前时间
					var nowTime = new Date();
					// 已经过时间
					var timing = nowTime - startTime;

					if (timing >= duration) {
						timing = duration;
						clearInterval(timer);
						callback && callback();
					}
					var curr = document.body.scrollTop || document.documentElement.scrollTop;
					// 剩余距离
					var left = end - curr;
					var move = easeIn(left, timing, duration, curr);

					document.body.scrollTop = document.documentElement.scrollTop = move;

				}, 16);
			}

		})();

		var coverDown = document.getElementById("cover-down");
		var toTop = document.getElementById("to-top");

		coverDown.addEventListener("click", function() {
			scrollTo(clientHeight, 2000);
		}, false);

		// 回到顶部函数
		toTop.addEventListener("click", function() {
			scrollTo(0, 2000);
		}, false);

		var skills = document.getElementById("skills-wraper");
		var worksContent = document.getElementsByClassName("works-content");
		var worksItem = document.getElementsByClassName("works-item");
		var worksPoint = document.getElementsByClassName("works-point");
		var worksTimeline = document.getElementsByClassName("works-timeline");
		// 节流函数
		var throttle = (function() {
			var timer;
			return function(fn) {
				timer && clearTimeout(timer);
				timer = setTimeout(fn, 200);
			}
		})();
		// 滚动触发的函数，包装起来
		function scrollFunc() {
			var distance = document.documentElement.scrollTop || document.body.scrollTop;

			if (skills.offsetTop - clientHeight / 2 < distance && showSkills) {
				showSkills();
				showSkills = null; // 执行一次便释放
			}

			for (var i = 0; i < worksItem.length; i++) {
				// 非最后一个作品
				if (i !== worksItem.length - 1) {
					if (worksItem[i].offsetTop - clientHeight / 2 < distance && distance < worksItem[i + 1].offsetTop - clientHeight / 2) {
						showWorks(i); // 显示当前作品
					} else {
						hideWorks(i); // 非当前显示作品
					}
				} else {
					// 底部作品
					if (worksItem[i].offsetTop - clientHeight / 2 < distance) {
						showWorks(i);
					} else {
						hideWorks(i);
					}
				}
			}
			// 显示回到顶部
			distance >= clientHeight ? toTop.classList.add("to-top-on") : toTop.classList.remove("to-top-on");
		}

		// 弱智函数001
		function showSkills() {
			skills.classList.add("skills-on");
		}
		// 弱智函数002
		function showWorks(i) {
			worksContent[i].classList.add("works-content-on");
			worksPoint[i].style.opacity = "1";
			worksPoint[i].style.backgroundColor = "#ed5565";
			worksTimeline[i].style.height = "100%";
		}
		// 弱智函数003
		function hideWorks(i) {
			worksPoint[i].style.backgroundColor = "#fff";
		}
		// 滚动
		window.addEventListener("scroll", function() {
			throttle(scrollFunc);
		}, false);
		// 更新
		document.addEventListener("resize", function() {
			clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		}, false);

		var main = document.getElementById("main");
		var loading = document.getElementById("loading");

		var worksWraper = document.getElementById("works-wraper");
		var overlayUp = document.getElementById("overlay-up");
		var overlayDown = document.getElementById("overlay-down");

		setTimeout(function() {
			// 全部加载完成后关闭loading
			loading.style.display = "none";
			main.style.display = "block";
			// 某些浏览器有问题
			var footerHeight = document.getElementById("footer").offsetHeight;
			worksWraper.style.marginBottom = footerHeight + "px";
			// 关闭遮罩
			overlayUp.classList.add("up-off");
			overlayDown.classList.add("down-off");
		}, 100);

		var tryMeOut = document.getElementById("try-me-out");

		var questionBox = document.getElementById("question-box");
		var questionItem = document.getElementsByClassName("question-item");
		var answerItem = document.getElementsByClassName("answer-item");

		var body = document.getElementsByTagName("body")[0];
		var close = document.getElementById("close");

		var hello = document.getElementById("hello");
		// 问题num初始化
		var num;
		// 是否点击了问题
		var isOn;

		// 点击面试	
		tryMeOut.addEventListener("click", function() {

			var time = document.getElementById("time");
			showTime(time);
			// 获得打招呼宽度
			hello.style.visibility = "hidden";
			hello.style.display = "block";
			hello.width = hello.offsetWidth;
			hello.style.visibility = "visible";
			hello.style.marginLeft = -1 * hello.width / 2 + "px";
			hello.style.width = "50px";
			hello.style.display = "none";

			// 我的回答赋值固定宽度，避免变形
			for (var i = 0; i < answerItem.length; i++) {
				var p = answerItem[i].getElementsByTagName("p");
				for (var j = 0; j < p.length; j++) {
					p[j].style.width = p[j].offsetWidth + "px";
				}
			}
			// 背景
			overlayUp.classList.remove("up-off");
			overlayDown.classList.remove("down-off");
			body.style.overflowY = "hidden";

			setTimeout(function() {
				// 打招呼
				hello.style.display = "block";
				// 触发动画
				hello.offsetWidth = hello.offsetWidth;
				hello.style.width = hello.width + "px";
			}, 1000);

			setTimeout(function() {
				hello.style.display = "none";
				questionBox.style.display = "block";
				questionBox.offsetWidth = questionBox.offsetWidth;

				questionBox.classList.add("box-on");
				close.style.display = "block";
			}, 2500);

			for (var i = 0; i < questionItem.length; i++) {
				(function(i) {
					setTimeout(function() {
						questionItem[i].classList.add("que-on");
					}, 3500 + i * 500);
				})(i);
			}
			// 每次都初始化
			num = -1;
			isOn = false;

		}, false);

		// 点击问题回答
		for (var i = 0; i < questionItem.length; i++) {
			// num为当前显示索引，this.index为点击的索引
			questionItem[i].index = i;

			questionItem[i].addEventListener("click", function() {
				isOn = true;
				// 点击问题高亮
				for (var l = 0; l < questionItem.length; l++) {
					l == this.index ? questionItem[l].classList.add("hover") : questionItem[l].classList.remove("hover");
				}
				// 点击对应的回答
				var ansClicked = answerItem[this.index].getElementsByTagName("p");
				// 点击非当前显示的问题，并且不是第一次点击问题
				if (num != this.index && num != -1) {
					var that = this;
					// 当前显示的回答
					var ansNow = answerItem[num].getElementsByTagName("p");
					for (var j = 0; j < ansNow.length; j++) {
						// 关闭当前回答，显示点击的回答
						// 移除最后一条回答有回调，显示点击的新的问题
						j == ansNow.length - 1 ? move(ansNow[j], function() {
							// 当前的问题
							answerItem[num].classList.remove("ans-on");
							// 点击的问题
							answerItem[that.index].classList.add("ans-on");
							num = that.index;
							for (var k = 0; k < ansClicked.length; k++) {
								ansClicked[k].style.visibility = "visible";
							}
						}) : move(ansNow[j]);
					}
				} else if (num == -1) {
					// 第一次点击问题
					answerItem[this.index].classList.add("ans-on");
					// 更新num
					num = this.index;
					for (var j = 0; j < ansClicked.length; j++) {
						ansClicked[j].style.visibility = "visible";
					}
				}
			}, false);
		}

		// 关闭
		close.addEventListener("click", function() {
			// 点击关闭移除问题
			questionBox.classList.remove("box-on");
			for (var i = 0; i < questionItem.length; i++) {
				questionItem[i].classList.remove("hover", "que-on");
			}
			// 移除答案
			for (var i = 0; i < answerItem.length; i++) {
				if (answerItem[i].classList.contains("ans-on")) {
					// 当前显示的所有段落
					var a = answerItem[i].getElementsByTagName("p");
					// move函数定义的地方i有冲突，js函数运行在定义它们的地方
					var sb = i;
					for (var j = 0; j < a.length; j++) {
						// 如果是回答的最后一条，动画完成后回调去除类名
						j == a.length - 1 ? move(a[j], function() {
							answerItem[sb].classList.remove("ans-on");
							// 关闭背景等
							setTimeout(closeAns, 500);
						}) : move(a[j]);
					}
				}
			}

			questionBox.style.display = "none";
			close.style.display = "none";
			// 没有点击问题就关闭
			!isOn && setTimeout(closeAns, 100);

		}, false);

		// 弱智函数
		function closeAns() {
			overlayUp.classList.add("up-off");
			overlayDown.classList.add("down-off");
			body.style.overflowY = "auto";
		}

		// 弱智函数
		function move(obj, callback) {
			obj.style.right = "-100%";
			setTimeout(function() {
				obj.style.visibility = "hidden";
				obj.style.right = "3%";
				callback && callback();
			}, 1400);
		}
		// 弱智函数
		function showTime(obj) {
			var time = new Date().getHours();
			if (time > 5 && time < 12) {
				obj.innerHTML = "早上好";
			} else if (time >= 12 && time < 14) {
				obj.innerHTML = "中午好";
			} else if (time >= 14 && time < 19) {
				obj.innerHTML = "下午好";
			} else if (time >= 19 && time < 24) {
				obj.innerHTML = "晚上好";
			} else {
				obj.innerHTML = "凌晨好";
			}
		}

	}, false);

})();

console.info("%c前端求职", "color:#fff;font-size:14px;text-shadow:1px 1px #000;background-color:#ed5565;padding:3px;border-radius:3px");
console.log(["其实这是好几个月前写的，当时反复重写了一个月，最后也没完成", "从设计到代码都是自己原创（也参考了很多国外设计还有简历），开始想模仿Material Design", "最近重构了一下，虽然完全谈不上复用性，组件啊模块什么的", "当时觉得前端就应该搞花俏的特效，现在都是黑历史，我都想全部删了", "以前偏向CSS，现在更喜欢JavaScript", "不过都是几个月前的事了，现在更偏好逻辑性强的东西", "credit: http://www.apollozz.com/resume/index.html 曾经从上面得到了很多创意", "唉，好多想学计划学的都没时间，光是打基础就够喝好几壶了，想学JAVA..."].join("\n"));

// [].forEach.call(document.all,function(a){
// 	a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16);
// });
