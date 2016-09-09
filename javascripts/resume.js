window.onload=function(){
var view=document.getElementById('view');
var viewback_up=document.getElementById('viewback_up');
var viewback_down=document.getElementById('viewback_down');

var question_box=document.getElementById('question_box');
var question=document.getElementsByClassName('question');

var width=parseInt(Number(document.documentElement.offsetWidth|| document.body.offsetWidth));
var halfWidth=width/2;

var answer=document.getElementsByClassName("answer");
console.log(answer[0].getElementsByTagName("p")[0]);

var header=document.getElementById('header');
var button=document.getElementsByClassName('button');

var body=document.getElementsByTagName('body')[0];


var close=document.getElementById('close');


//获得打招呼宽度
var welcome=document.getElementById('welcome');
var hello=document.getElementById("hello");
var bye=document.getElementById("bye");

hello.style.display="block";
hello.style.visibility="hidden";
var hello_w=hello.offsetWidth;
hello.style.visibility="visible";
hello.style.display="none";

bye.style.display="block";
bye.style.visibility="hidden";
var bye_w=bye.offsetWidth;
bye.style.visibility="visible";
bye.style.display="none";

welcome.style.display="block";
show_time(welcome.getElementsByTagName("span")[1]);
welcome.style.visibility="hidden";
var welcome_w=welcome.offsetWidth;
welcome.style.visibility="visible";
welcome.style.display="none";


//回答赋值宽度
var answer_w=[];
for (var i = 0; i < answer.length; i++) {
answer_w[i]=[]
for (var j= 0; j< answer[i].getElementsByTagName("p").length; j++) {
answer_w[i][j]=answer[i].getElementsByTagName("p")[j].offsetWidth;
//console.log( answer[i].getElementsByTagName("p")[j].offsetWidth);
answer[i].getElementsByTagName("p")[j].style.width=answer_w[i][j]+"px";
}
}

//loading hello
body.style.visibility="visible";
var main=document.getElementById("main");
// document.getElementsByTagName('body')[0].style.display="none";
document.getElementById('loading').style.display="block";
document.getElementById('main').style.display="none";

welcome.style.display="block";
welcome.style.marginLeft=-1*welcome_w/2+"px";
welcome.style.width="50px";

setTimeout(function(){
document.getElementById('loading').style.display="none";
document.getElementById('main').style.display="block";
},1000)

setTimeout(function(){
addClass(viewback_up,"up_off");
addClass(viewback_down,"down_off");
body.style.overflowY="hidden";
},1100)

setTimeout(function(){
welcome.style.width=welcome_w+"px";
},2000);

setTimeout(function(){
removeClass(viewback_up,"up_off");
removeClass(viewback_down,"down_off");
body.style.overflowY="auto";
welcome.style.display="none";
var myskills_out=document.getElementsByClassName('myskills_out');
for (var i = 0; i < myskills_out.length; i++) {
addClass(myskills_out[i],"skills_on");
}
addClass(header,"header_on");
for (var i = 0; i < button.length; i++) {
addClass(button[i],"b_on")
}
view.style.visibility="visible";
},4000);

setTimeout(function(){
addClass(view,"view_on");
},9000);

// 面试
view.onclick=function(){
var say_time=hello.getElementsByTagName('span')[0].getElementsByTagName('span')[0];

show_time(say_time);

addClass(viewback_up,"up_off");
addClass(viewback_down,"down_off");
body.style.overflowY="hidden";
close.style.display="block";

hello.style.display="block";
hello.style.marginLeft=-1*hello_w/2+"px";
hello.style.width="50px";

setTimeout(function(){
hello.style.width=hello_w+"px";
},1000);

setTimeout(function(){
hello.style.display="none";
hello.style.width="50px";
},2500);

setTimeout(function(){
question_box.style.display="block";
},2500)

setTimeout(function(){
addClass(question_box,"box_on") ;
},3000);

setTimeout(function(){
addClass(question[0],"que_on") ;
},4000);

setTimeout(function(){
addClass(question[1],"que_on") ;
},4500);

setTimeout(function(){
addClass(question[2],"que_on") ;
},5000);

setTimeout(function(){
addClass(question[3],"que_on") ;
},5500);




var num=-1;
for (var i = 0; i < question.length; i++) {
question[i].index=i
question[i].onclick=function(){
var that=this;

for(var l = 0; l < question.length; l++){
if(l==that.index){
addClass(question[l],"hover");
}else{
removeClass(question[l],"hover");
}
}

if (num!=that.index&&num!=-1) {
//console.log("a"+num);
for (var k = 0; k< answer[num].getElementsByTagName("p").length; k++) {
if(k==answer[num].getElementsByTagName("p").length-1){
move(answer[num].getElementsByTagName("p")[k],{left:1.1*width},(k+1)*4,add);
}else{
move(answer[num].getElementsByTagName("p")[k],{left:1.1*width},(k+1)*4);
}
}

function add(){
removeClass(answer[num],"ans_on");
addClass(answer[that.index],"ans_on");

for (var j= 0; j< answer[that.index].getElementsByTagName("p").length; j++) {
answer[that.index].getElementsByTagName("p")[j].style.visibility="visible";
// addClass(answer[that.index].getElementsByTagName("p")[j],"ans_on");
if(j==answer[that.index].getElementsByTagName("p").length-1){
//console.log("b"+num);
num=that.index;
//console.log("c"+num);
}
}
}



} else if(num==-1){
addClass(answer[that.index],"ans_on");
for (var j= 0; j< answer[that.index].getElementsByTagName("p").length; j++) {
answer[that.index].getElementsByTagName("p")[j].style.visibility="visible";
if(j==answer[that.index].getElementsByTagName("p").length-1){
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
removeClass(question_box,"box_on");
for(var l = 0; l < question.length; l++){
removeClass(question[l],"hover");
removeClass(question[l],"que_on");
}

for (var i = 0; i< answer.length; i++) {
if( hasClass(answer[i],"ans_on")){
for (var j = 0; j < answer[i].getElementsByTagName("p").length; j++) {
if( j ==answer[i].getElementsByTagName("p").length-1){
var that=this;
that.index=i;
function remove(){
removeClass(answer[that.index],"ans_on");
}
move(answer[i].getElementsByTagName("p")[j],{left:1.1*width},(j+1)*5,remove);
}else{
move(answer[i].getElementsByTagName("p")[j],{left:1.1*width},(j+1)*5);
}
}
}
}

//console.log("num"+num);

question_box.style.display="none";
close.style.display="none";
bye.style.display="block";
bye.style.marginLeft=-1*bye_w/2+"px";
bye.style.width="50px";

setTimeout(function(){
bye.style.width= bye_w+"px";
},1000);

setTimeout(function(){
bye.style.display="none";
bye.style.width="50px";
removeClass(viewback_up,"up_off");
removeClass(viewback_down,"down_off");
document.getElementsByTagName('body')[0].style.overflowY="auto";
},3000);


};



var demo=document.getElementsByClassName("demo");
var wraper=document.getElementsByClassName('wraper');
var round=document.getElementsByClassName('round');
var way=document.getElementsByClassName('way');
var hor=document.getElementsByClassName('hor');

function show_i(){
round[0].style.opacity="1";
way[0].style.height="121%"
setTimeout(function(){
round[1].style.opacity="1";
way[1].style.height="121%"
},1000);
setTimeout(function(){
round[2].style.opacity="1";
way[2].style.height="121%"
},1000);
setTimeout(function(){
round[3].style.opacity="1";
way[3].style.height="133%"
},3000);
}


var totop=document.getElementById("totop");
var clientHeight=document.documentElement.clientHeight|| document.body.clientHeight;
var timer=null;
var istop =true;





window.onscroll=function(){

var disdance=document.documentElement.scrollTop||document.body.scrollTop;

// console.time("test")
for (var i = 0; i < wraper.length; i++) {

if( wraper[i].offsetTop){
if(i!= wraper.length-1){
if ( wraper[i].offsetTop-clientHeight/2<disdance&&disdance< wraper[i+1].offsetTop-clientHeight/2){
if(i==0){
show_i();
}
addClass(demo[i],"demo_on");
demo[i].style.opacity="1";
round[i].style.backgroundColor="#ed5565";
hor[i].style.width="305px";
}else{
removeClass(demo[i],"demo_on")
round[i].style.backgroundColor="#333";
hor[i].style.width="0px";
}
}else if(i== wraper.length-1){
if( wraper[i].offsetTop-clientHeight/2<disdance){
addClass(demo[i],"demo_on");
demo[i].style.opacity="1";
round[i].style.backgroundColor="#ed5565";
hor[i].style.width="305px";
}else{
removeClass(demo[i],"demo_on")
round[i].style.backgroundColor="#333";
hor[i].style.width="0px";
}
}
}
}
// console.timeEnd("test")


// 显示回到顶部
if(disdance>=clientHeight){
totop.style.display="block";
setTimeout(function(){totop.style.opacity="1";},500);
}
else {
setTimeout(function(){totop.style.display="none";},300);
totop.style.opacity="0";
}
if(istop){
clearInterval(timer);
}
}

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
if(disdance==0){
clearInterval(timer);
istop=true;
}
},5)
}






}







// 关于move函数，本来打算是用css transition和 translate结合js addClass函数及setTimeout完成的，但效果不满意，于是在网上找到了一个函数，在其基础上做了修改并添加了可爱的注释O(∩_∩)O~~
//移动到指定位置，格式{left:10, top:30}或{left:10}或{top:30}；speed:速度 1-100，默认10
var move = function(element, position, speed,callback){
if(typeof(element)=='string')
element=document.getElementById(element); //传入对象
if(!element.effect){
element.effect = {};
element.effect.move=0; //对象添加移动属性
}
clearInterval(element.effect.move); //清除定时器

var speed=speed||10; // 定义速度
var start=(function(elem){
var posi = {left:elem.offsetLeft, top:elem.offsetTop};
while(elem = elem.offsetParent){
posi.left += elem.offsetLeft; //对象离定位父元素位移与父元素位移之和
// posi.top += elem.offsetTop;
};
return posi; //返回起始坐标并赋值
})(element);
element.style.position = 'fixed'; //设置对象定位
var original={left:0,top:0};
original.left=start.left; //保存初始位置于结束时恢复
//original.top=start.top;
element.style.left=start.left+"px"; //设置初始位置
//element.style.top=start.top+"px";
var style = element.style;
var styleArr=[]; //定义数组存储目标top left
if(typeof(position.left)=='number')
styleArr.push('left'); //左
//if(typeof(position.top)=='number')
//styleArr.push('top'); //顶
var pace=[];
element.effect.move = setInterval(function(){
//动画定时器
for(var i=0;i<styleArr.length;i++){

pace[i]=Math.round((position[styleArr[i]]- start[styleArr[i]]) /speed);


//start[styleArr[i]] += pace[i];
start[styleArr[i]] = start[styleArr[i]]+ pace[i];
style[styleArr[i]] =start[styleArr[i]] + 'px';

// console.log("原现在"+start[styleArr[i]]);
// console.log("现在"+Math.round(start[styleArr[i]]));
// console.log("原终点"+position[styleArr[i]]);
// console.log("终点"+Math.round(position[styleArr[i]]));
//水平及垂直移动
}


for(var i=0;i<styleArr.length;i++){
if(Math.round(pace[i])==0 ){ //判断动画是否终点
if(i!=styleArr.length-1) //完成单个方向位移
continue; //离开本次循环
}else{
break; //一个方向都没完成，跳出循环，不进行下面操作
}
//动画完成
for(var i=0;i<styleArr.length;i++){
style[styleArr[i]] = Math.round(position[styleArr[i]]) + 'px';
clearInterval(element.effect.move); //清除定时器

element.style.visibility="hidden";
element.style.left=original.left+"px"; //恢复初始位置
//element.style.top=original.top+"px";
if(callback) //动画完成后回调函数
callback();
}
}
}, 10);
};




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
return true
}
}
}

function addClass(element,className) {
if (!this.hasClass(element,className))
element.className += " "+className;
}

function removeClass(element,className) {
if (hasClass(element,className)) {
var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
element.className=element.className.replace(reg,'');
}
}


console.info("%c寻找给自己发展机会的公司，我会用最大的努力回复你的认同。请联系我","color:#fff;font-size:16px;text-shadow:1px 1px #000;background-color:#ed5565;padding:4px;border-radius:3px")

console.log([
"简历完成了，以下是感想",
"嗯，这个简历从构思到代码都是自己完成的（也从别人获得了不少创意），一开始打算写Material Design，后来越写越远，推翻重写好几次，最后效果还满意（开始其实很简陋）",
"因为是简历，所以写了很多花哨的效果，其实我是一个朴实的人，喜欢极简。。。",
"写这个简历最难的不是技术，而是构思设计，反反复复好多次，设计师和码农都不容易",
"实话说，代码写的又丑又烂，for循环，if else一大堆嵌套，有时在IE下就出现莫名其妙的bug（该死的IE）",
"不断提高自己水平，不断学习中"
].join('\n'));