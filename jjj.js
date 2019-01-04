//顶部悬浮
window.onload=function(){
    		var cover=document.getElementsByClassName('box')[0];
    		window.onscroll=function(){
    			var st=document.documentElement.scrollTop || document.body.scrollTop;
    			if(st>180){
    				cover.style.position='fixed';
    			}
    			else{
    				cover.style.position='static';
    			}
    		}
 
   	}
//放大镜
var sp00=document.getElementById('sp00');
var sp11=document.getElementById('sp11');
var fang=document.getElementById('fang');
var dada= document.getElementById('dada');
var slider=document.getElementById('slider');
var box =document.getElementById('f1');
var p=document.createElement("img");
fang.appendChild(p);
p.setAttribute("src","img/pp0.jpeg");
sp00.setAttribute('style','border:2px solid #ff9003');
sp00.onmouseover=function(){
    sp00.setAttribute('style','border:2px solid #ff9003');
    sp11.setAttribute('style','border:2px solid #fff');
    p.setAttribute("src","img/pp0.jpeg");
    var bimg=document.getElementById('Bimg');
    bimg.setAttribute("src","img/big.jpg");
}
sp11.onmouseover=function(){
    sp11.setAttribute('style','border:2px solid #ff9003');
    sp00.setAttribute('style','border:2px solid #fff');
    p.setAttribute("src","img/pp1.jpeg");
    var bimg=document.getElementById('Bimg');
    bimg.setAttribute('src','img/big4.jpg');

}
fang.onmouseover = function(){
        dada.style.display = 'block';
        slider.style.display = 'block';
    }
fang.onmouseout = function(){
        slider.style.display = 'none';
        dada.style.display = 'none';
}
fang.onmousemove=function(ev){
    var ev=ev||window.event;
    //(1)根据鼠标位置计算放大镜的位置
    var left=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
    var top=ev.clientY-box.offsetTop-slider.offsetHeight/4;

    var maxLeft=fang.offsetWidth-slider.offsetWidth;
    var maxTop=fang.offsetHeight-slider.offsetHeight;
    left=left>maxLeft?maxLeft:left<0?0:left;
    top=top>maxTop?maxTop:top<0?0:top;
    
    slider.style.left=left+"px";
    slider.style.top=top+"px";
    var x=Bimg.offsetWidth/(fang.offsetWidth+100);
    Bimg.style.left=-left*x+"px";
    Bimg.style.top=-top*x+"px";
    }
//化妆品含量
var fp5=document.getElementById("fp5");
var fp6=document.getElementById("fp6");
var fp9=document.getElementById("fp9");
fp9.innerText='"'+'"';
fp5.onclick=function()
{
    fp5.setAttribute('style','border:1px solid #ff0754');
    var a=document.getElementById("a");
    a.setAttribute('src','img/duigou.png');
    fp9.innerText='"'+ fp5.innerText+'"';
    fp6.setAttribute('style','border:none');
    var b=document.getElementById("b");
    b.setAttribute('src','');
}
fp6.onclick=function()
{
    fp6.setAttribute('style','border:1px solid #ff0754');
    var b=document.getElementById("b");
    b.setAttribute('src','img/duigou.png');
     fp9.innerText= '"'+ fp6.innerText+'"';
    fp5.setAttribute('style','border:none');
    var a=document.getElementById("a");
    a.setAttribute('src','');   
}
//库存加减
var jia = document.getElementById("jia");
var jian = document.getElementById("jian");
var input = document.getElementById("input");
jia.onclick = function() {
    var i=parseInt(input.value);
            if(i<5){
                jia.setAttribute('style','cursor:pointer');
                jian.setAttribute('style','cursor:pointer');
                i=i+1;
                input.value=i;
            }
            else{
                jia.setAttribute('style','cursor:not-allowed');
                jian.setAttribute('style','cursor:pointer');
            }
}
jian.onclick = function() {
    jian.setAttribute('style','cursor:pointer');
    var i=parseInt(input.value);
    if(i>1){
        jia.setAttribute('style','cursor:pointer');
        jian.setAttribute('style','cursor:pointer');
        i=i-1;
        input.value=i;
    }
    else{
        jian.setAttribute('style','cursor:not-allowed');
    }
}
//加入购物车,继续购物
var bu2=document.getElementById('bu2');
var body=document.getElementById('body');
var box5=document.getElementById('box5');
var bu11=document.getElementById('bu11');
var h4=document.getElementById('h4');
bu2.onclick=function(){
    body.style.display='block';
    box5.style.display='block';
}
bu11.onclick=function(){
    body.style.display='none';
    box5.style.display='none';
}
h4.onclick=function(){
    body.style.display='none';
    box5.style.display='none';
}
