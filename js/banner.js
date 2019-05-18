var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
canvas.width=canvas.height=400;
aaa();

function aaa(){
    var a,b,c,d,e,f,g,p,max,tim,hei,len,x,y,y1,r;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle="rgb(0,0,0)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.globalCompositeOperation = "lighter";
    tim=new Date().getTime()/50;
    ctx.strokeStyle=ctx.fillStyle="hsla(222,60%,60%,0.4)";
    
    max=100;
    len=5;
    for(g=0;g<7;g++){
        for(b=0;b<len;b++){
            p=[];
            c=b/len+tim/117;
            c=c%1;
            c=c-0.5;
            hei=c*650+200;
            f=(g+1)/7;
            
            r=0;
            for(a=0;a<max;a++){
                e=a+g*1113+tim;
                d=Math.sin(e/2-b)+Math.sin(-e/7+b*7);
                d*=160;
                if(d<-10)d=-10;
                if(d>10)d=10;
                x=Math.cos(r)*250;
                y1=Math.sin(r);
                y=y1*180*(-c)+d*f*3*(1.5-Math.abs(y1));
                p.push([x,y]);
                r+=Math.PI/max;
            }
            
            ctx.beginPath();
            for(a=0;a<p.length;a++){
                ctx.lineTo(p[a][0]+canvas.width/2,p[a][1]+hei);
            }
            ctx.fill();
        }
    }
requestAnimationFrame(aaa);
}