$(document).ready((function(){let e=-100,t=-100;const o=document.querySelector(".cursor--small");(()=>{document.addEventListener("mousemove",(o=>{e=o.clientX,t=o.clientY}));const n=()=>{o.style.transform=`translate(${e}px, ${t}px)`,requestAnimationFrame(n)};requestAnimationFrame(n)})();let n,r=0,a=0;(()=>{const o=document.querySelector(".cursor--canvas");paper.setup(o);const s=new paper.Path.RegularPolygon(new paper.Point(0,0),8,15);s.strokeColor="rgba(255, 169, 0, 1)",s.strokeWidth=1,s.smooth(),n=new paper.Group([s]),n.applyMatrix=!1;s.segments.map((()=>new SimplexNoise));const p=(e,t,o)=>(1-o)*e+o*t;paper.view.onFrame=o=>{r=p(r,e,.2),a=p(a,t,.2),n.position=new paper.Point(r,a)}})()}));