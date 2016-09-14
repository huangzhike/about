window.onload=function(){
	var view=document.getElementById('view');
	var viewback_up=document.getElementById('viewback_up');
	var viewback_down=document.getElementById('viewback_down');
	var question_box=document.getElementById('question_box');
	var question=document.getElementsByClassName('question');
		
	var answer=document.getElementsByClassName("answer");
	console.log(answer[0].getElementsByTagName("p")[0]);
	var header=document.getElementById('header');
	var button=document.getElementsByClassName('button');
	var body=document.getElementsByTagName('body')[0];
	var close=document.getElementById('close');
	
	var welcome=document.getElementById('welcome');
	var hello=document.getElementById("hello");
	var bye=document.getElementById("bye");
	
	
function first_view(){
//loading hello
	var main=document.getElementById("main");
	var loading=document.getElementById('loading');
 var loading_i=loading.getElementsByTagName("span")[0];
	var body=document.getElementsByTagName('body')[0];

var main=document.getElementById("main");
	var loading=document.getElementById('loading');
 var loading_i=loading.getElementsByTagName("span")[0];
	var body=document.getElementsByTagName('body')[0];
getWidth(loading_i);
loading_i.style.marginLeft=-1*loading_i.width/2+"px";
loading_i.style.display="block";
/*	body.style.visibility="visible";*/
/*	loading.style.display="block";*/



	setTimeout(function(){
		loading.style.display="none";
		main.style.display="block";
	},1000);

/*getWidth(loading_i);
loading_i.style.marginLeft=-1*loading_i.width/2+"px";
loading_i.style.display="block";

	loading.style.display="block";


	setTimeout(function(){
		loading.style.display="none";
		main.style.display="block";
	},1000);*/

	//遮罩动画
	setTimeout(function(){
		addClass(viewback_up,"up_off");
		addClass(viewback_down,"down_off");
		body.style.overflowY="hidden";
			//获得打招呼宽度
    getWidth(bye);
getWidth(hello);
	getWidth(welcome);
	welcome.style.display="block";
	welcome.style.marginLeft=-1*welcome.width/2+"px";
	welcome.style.width="50px";

	},1200);

	//打招呼
	setTimeout(function(){
		welcome.style.width=welcome.width+"px";
	},2000);

	//关闭遮罩等
	setTimeout(function(){
		removeClass(viewback_up,"up_off");
		removeClass(viewback_down,"down_off");
		body.style.overflowY="auto";
		welcome.style.display="none";
		
	},4000);

	setTimeout(function(){
		var myskills_out=document.getElementsByClassName('myskills_out');
		for (var i = 0; i < myskills_out.length; i++) {
			addClass(myskills_out[i],"skills_on");
		}
		addClass(header,"header_on");
		for (var i = 0; i < button.length; i++) {
			addClass(button[i],"b_on");
		}
		view.style.visibility="visible";
	},4500);

	setTimeout(function(){
		addClass(view,"view_on");
	},9000);


}


	
	//点击面试
	view.onclick=function(){
var say_time=hello.getElementsByTagName('span')[0].getElementsByTagName('span')[0];
show_time(say_time);

   var width=parseInt(Number(document.documentElement.offsetWidth|| document.body.offsetWidth));
	//我的回答赋值宽度，位置，后面用到
     var answer_w=[];
    for (var i = 0; i < answer.length; i++) {
      var e=answer[i].getElementsByTagName("p");
      answer_w[i]=[];
      for (var j= 0; j< e.length; j++) {
        answer_w[i][j]=e[j].offsetWidth;
        e[j].style.width=answer_w[i][j]+"px";
        e[j].style.left=e[j].offsetLeft+"px";        
      }
    }

		//背景
		addClass(viewback_up,"up_off");
		addClass(viewback_down,"down_off");
		body.style.overflowY="hidden";
		close.style.display="block";
		//打招呼

		hello.style.display="block";
		hello.style.marginLeft=-1*hello.width/2+"px";
		hello.style.width="50px";
		setTimeout(function(){hello.style.width=hello.width+"px";},1000);
		setTimeout(function(){hello.style.display="none";hello.style.width="50px";},2500);
		//显示问题
		setTimeout(function(){question_box.style.display="block";},2500);
		setTimeout(function(){addClass(question_box,"box_on") ;},3000);
		setTimeout(function(){addClass(question[0],"que_on") ;},4000);
		setTimeout(function(){addClass(question[1],"que_on") ;},4500);
		setTimeout(function(){addClass(question[2],"que_on") ;},5000);
		setTimeout(function(){addClass(question[3],"que_on") ;},5500);

		//点击问题回答
		var num=-1;
		is_on=false;
		for (var i = 0; i < question.length; i++) {
			//保存当前索引，说明，num为当前显示索引，that.index为点击的索引
			question[i].index=i
			question[i].onclick=function(){
				is_on=true;
				var that=this;
				//问题高亮
				for(var l = 0; l < question.length; l++){
					if(l==that.index){
						addClass(question[l],"hover");
					}else{
						removeClass(question[l],"hover");
					}
				}
				//点击移除我的回答
				var c=answer[that.index].getElementsByTagName("p");
				//点击非当前显示的并且不是第一次点击问题
				if (num!=that.index&&num!=-1) {
					//console.log("a"+num);
					var b=answer[num].getElementsByTagName("p");
					for (var k = 0; k< b.length; k++) {
						if(k==b.length-1){
							move(b[k],{left:1.1*width},add);
						}else{
							move(b[k],{left:1.1*width});
						}
					}
					//关闭当前回答，显示点击的回答
					function add(){
						removeClass(answer[num],"ans_on");
						addClass(answer[that.index],"ans_on");
						
						for (var j= 0; j< c.length; j++){
							c[j].style.visibility="visible";
							if(j==c.length-1){
								//console.log("b"+num);
								num=that.index;
								//console.log("c"+num);
							}
						}
					}
				} else if(num==-1){
					//第一次点击问题
					addClass(answer[that.index],"ans_on");
					for (var j= 0; j< c.length; j++) {
						c[j].style.visibility="visible";
						if(j==c.length-1){
							//console.log("b"+num);
							num=that.index;
							//console.log("d"+num);
						}
					}
				}
			}
		}
	};


close.onclick=function(){
var width=parseInt(Number(document.documentElement.offsetWidth|| document.body.offsetWidth));
	

		//点击关闭移除
		removeClass(question_box,"box_on");

		for(var l = 0; l < question.length; l++){
			removeClass(question[l],"hover");
			removeClass(question[l],"que_on");
		}

		for (var i = 0; i< answer.length; i++) {
			if( hasClass(answer[i],"ans_on")){
				var a=answer[i].getElementsByTagName("p");
				for (var j = 0; j < a.length; j++) {
					//如果是最后一条回答，动画完成后去除类名
					if( j ==a.length-1){
						var that=this;
						that.index=i;
						//关闭的动画
						function quit(){
							removeClass(answer[that.index],"ans_on");
							setTimeout(function(){
								bye.style.display="block";
								bye.style.marginLeft=-1*bye.width/2+"px";
								bye.style.width="50px";
							},500);
							

							setTimeout(function(){
								bye.style.width= bye.width+"px";
							},1500);

							//关闭背景等
							setTimeout(function(){
								bye.style.display="none";
								bye.style.width="50px";
								removeClass(viewback_up,"up_off");
								removeClass(viewback_down,"down_off");
								document.getElementsByTagName('body')[0].style.overflowY="auto";
							},3500);


						}
						move(a[j],{left:1.1*width},quit);
					}else{
						//非最后一条回答
						move(a[j],{left:1.1*width});
					}
				}
			}
		}
		//console.log("num"+num);

		
		question_box.style.display="none";
		close.style.display="none";

		//没有点击问题就关闭
		if (!is_on) {
			is_on=false;
			bye.style.display="block";
			bye.style.marginLeft=-1*bye.width/2+"px";
			bye.style.width="50px";
			setTimeout(function(){
				bye.style.width= bye.width+"px";
			},500);
			setTimeout(function(){
				bye.style.display="none";
				bye.style.width="50px";
				removeClass(viewback_up,"up_off");
				removeClass(viewback_down,"down_off");
				document.getElementsByTagName('body')[0].style.overflowY="auto";
			},2500);

		}


	};



	var demo=document.getElementsByClassName("demo");
	var wraper=document.getElementsByClassName('wraper');
	var round=document.getElementsByClassName('round');
	var way=document.getElementsByClassName('way');
	var hor=document.getElementsByClassName('hor');

	var totop=document.getElementById("totop");
	var clientHeight=document.documentElement.clientHeight|| document.body.clientHeight;
	var timer=null;
	var istop =true;



	window.onscroll=function(){
		var disdance=document.documentElement.scrollTop||document.body.scrollTop;
		function show_demo(i){
			addClass(demo[i],"demo_on");
			demo[i].style.opacity="1";
			round[i].style.opacity="1";
			round[i].style.backgroundColor="#ed5565";
			way[i].style.height="122%"
			hor[i].style.width="300px";
		}
		function hide_demo(i){
			removeClass(demo[i],"demo_on");
			round[i].style.backgroundColor="#333";
			hor[i].style.width="0px";

		}
		// console.time("test")
		for (var i = 0; i < wraper.length; i++) {
			if( wraper[i].offsetTop){
				//非最后一个作品
				if(i!= wraper.length-1){
					if ( wraper[i].offsetTop-clientHeight/2<disdance&&disdance< wraper[i+1].offsetTop-clientHeight/2){
						show_demo(i); //显示当前作品
					}else{
						hide_demo(i); //非当前显示作品
					}
				}else if(i== wraper.length-1){
					//作品底部
					if( wraper[i].offsetTop-clientHeight/2<disdance){
						show_demo(i);
					}else{
						hide_demo(i);
					}
				}
			}
		}
		// console.timeEnd("test")

		// 显示回到顶部
		if(disdance>=clientHeight){
			totop.style.display="block";
			setTimeout(function(){
				totop.style.opacity="1";
			},500);
		}
		else {
			totop.style.opacity="0";
			setTimeout(function(){
				totop.style.display="none";
			},300);
		}
		if(istop){
			clearInterval(timer);
		}

	};

	// 回到顶部函数
	totop.onclick=function(){
		if (!istop) {
			clearInterval(timer);
		}
		timer=setInterval(function(){
			var disdance=document.documentElement.scrollTop||document.body.scrollTop;
			var pace= Math.floor(-disdance/10);
			document.documentElement.scrollTop=document.body.scrollTop=disdance+pace;
			istop=false;
			if(Math.floor(disdance)==0){
				clearInterval(timer);
				istop=true;
			}
		},5)
	}

};



// function move(element, position, callback){
// 	if(!element.move){
// 		element.move = {}; 
// 	}
// 	clearInterval(element.move); //清除定时器
// 	var speed=10; // 定义速度
// 	var now=(function(element){
// 		return {left:element.offsetLeft, top:element.offsetTop};		
// 	})(element); //获得初始位置
// 	var original={};
// 	original.left=now.left; //保存初始位置
// 	//original.top=now.top;
// 	var terminal=[]; //存储目标位置
// 	terminal.push('left'); //左
// 	//terminal.push('top'); 
// 	var pace=[];
// 	element.move = setInterval(function(){//动画定时器		
// 		for(var i=0;i<terminal.length;i++){
// 			pace[i]=Math.round((position[terminal[i]]- now[terminal[i]]) /speed);
// 			now[terminal[i]] += pace[i];
// 			element.style[terminal[i]] =now[terminal[i]] + 'px';
// 			//水平及垂直移动
// 		}
// 		for(var i=0;i<terminal.length;i++){
// 			if(Math.round(pace[i])==0 ){ //判断动画终点
// 				if(i!=terminal.length-1) //完成单个方向位移
// 				continue; //离开本次循环
// 			}else{
// 				break; //一个方向都没完成，跳出循环，不进行下面操作
// 			}
// 			//动画完成
// 			for(var i=0;i<terminal.length;i++){
// 				element.style[terminal[i]] = Math.round(position[terminal[i]]) + 'px';
// 				clearInterval(element.move); //清除定时器
// 				element.style.visibility="hidden";
// 				element.style.left=original.left+"px"; //恢复初始位置
// 				//element.style.top=original.top+"px";
// 				if(callback){ //动画完成后回调函数
// 					callback();
// 				}
// 			}
// 		}
// 	}, 17);
// };

// move函数ver 2.0，结合css更简洁高效！
function move(element, position, callback){
	var original=(function(element){
		return {left:element.offsetLeft};		
	})(element); //获得初始位置
	element.style.left=position.left+"px";
	setTimeout(function(){
		element.style.visibility="hidden";
		element.style.left=original.left+"px"; //恢复初始位置
		if(callback){ //动画完成后回调函数
			callback();
		}
	},1400)
};


function getWidth(obj){
		obj.style.visibility="hidden";
		obj.style.display="block";
		obj.width=obj.offsetWidth;
		obj.style.visibility="visible";
		obj.style.display="none";
console.log(obj.width);
	}

function show_time(obj){
	var time = new Date().getHours();
	if (time > 5 && time < 12){
		obj.innerHTML="早上好";
	}else if (time >= 12 && time <14){
		obj.innerHTML="中午好";
	}else if (time >= 14 && time < 19){
		obj.innerHTML="下午好";
	}else if (time >= 19 && time < 24){
		obj.innerHTML="晚上好";
	}else {
		obj.innerHTML="凌晨好";
	}
}


function hasClass(element,classsName) {
	var a= element.className.split(" ");
	for (var i = 0; i < a.length; i++) {
		if(a[i].match(new RegExp('(\\s|^)'+classsName+'(\\s|$)'))){
			return true;
		}
	}
}

function addClass(element,className) {
	if (!hasClass(element,className)){
		element.className += " "+className;
	}
}

function removeClass(element,className) {
	if (hasClass(element,className)) {
		var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
		element.className=element.className.replace(reg,'');
	}
}

console.info("%c前端求职，我会用最大的努力回复你的认同。请联系我","color:#fff;font-size:14px;text-shadow:1px 1px #000;background-color:#ed5565;padding:4px;border-radius:3px");

console.log([
"简历完成了，以下是感想",
"嗯，这个简历从构思到代码都是自己完成的（也从别人获得了不少创意），一开始打算写Material Design，后来重写了好几次，最后效果还满意（开始很简陋）",
"因为是简历，所以写了很多花哨的效果，其实我是一个朴实的人，喜欢极简。。。",
"这个简历最难的不是代码，而是构思设计，反反复复，设计师和码农都不容易",
"最后，代码写得很low",
"还在不断提高自己水平，不断学习中"
].join('\n'));