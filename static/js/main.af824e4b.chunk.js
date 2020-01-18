(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],[,,function(e,t){e.exports={EventEmitter:{events:{},dispatch:function(e,t){e in this.events&&this.events[e].forEach((function(e){return e(t)}))},subscribe:function(e,t){e in this.events||(this.events[e]=[]),this.events[e].push(t)},unsubscribe:function(e,t){if(e in this.events){var n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}}}}},function(e,t,n){e.exports=n.p+"static/media/logo.f83b4400.png"},,,,,function(e,t,n){e.exports=n.p+"static/media/jeff.2df84c4c.jpg"},function(e,t,n){e.exports=n.p+"static/media/tft.ba6397f1.png"},,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),c=n.n(r),o=n(10),s=n(1),l=[{key:0,title:"About",icon:"fas fa-user fa-fw",href:"#About"},{key:1,title:"Experience",icon:"fas fa-chart-line fa-fw",href:"#Experience"},{key:2,title:"Projects",icon:"fas fa-folder-open fa-fw",href:"#Projects"},{key:3,title:"Skills",icon:"fas fa-chart-pie fa-fw",href:"#Skills"},{key:4,title:"Education",icon:"fas fa-graduation-cap fa-fw",href:"#Education"},{key:5,title:"Resume",icon:"fas fa-envelope fa-fw",href:"#Resume"},{key:6,title:"GitHub",icon:"fab fa-github-square fa-fw",href:"https://github.com/jmanke"},{key:7,title:"LinkedIn",icon:"fab fa-linkedin fa-fw",href:"https://www.linkedin.com/in/jeff-manke/"}],u=function(e){return i.a.createElement("div",{className:"nav-tooltip "+e.className},i.a.createElement("span",{className:"nav-tooltip__arrow"}),i.a.createElement("strong",null,e.title))},m=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1];return i.a.createElement("a",{className:"nav__item"+(e.sectionActive?" active":""),href:e.href,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},i.a.createElement("div",{className:"nav__item__active-bar"+(e.sectionActive?" show":" hidden")}),i.a.createElement("i",{className:e.icon+((r||e.sectionActive)&&e.showTooltip?" scale-expand":" scale-original")}),i.a.createElement("span",{className:"nav__item__text"}," "+e.title),e.showTooltip?i.a.createElement(u,{title:e.title,className:r?"fade-in":"fade-out"}):null)},f=n(3),h=n.n(f),d=n(2),p=function(){return i.a.createElement("img",{className:"logo",href:"/",src:h.a,alt:"Jeff Manke"})},v=function(){var e=l.filter((function(e){return"#"!==e.href[0]})),t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(l.filter((function(e){return"#"===e.href[0]}))),f=Object(s.a)(u,2),h=f[0],v=f[1];function g(){c(!1)}function E(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];h.map((function(e){return e.sectionActive=!1})),h.find((function(e){return e.title===n})).visibility=a;var i=h.reduce((function(e,t){return t.visibility>e.visibility?t:e}));i.sectionActive=i.visibility>window.innerHeight/2,v(Object(o.a)(h))}return Object(a.useEffect)((function(){return d.EventEmitter.subscribe("section_update",E),function(){d.EventEmitter.unsubscribe("section_update",E)}})),i.a.createElement("nav",{className:"nav"},i.a.createElement("div",{className:"nav__start"},i.a.createElement("i",{tabIndex:"-1",onClick:function(){c(!r)},className:"fas fa-bars menu-toggle"}),p(),h.map((function(e){return i.a.createElement(m,Object.assign({},e,{showTooltip:!0}))}))),i.a.createElement("div",{className:"nav__middle"},p()),i.a.createElement("div",{className:"nav__end"},e.map((function(e){return i.a.createElement(m,Object.assign({},e,{showTooltip:!1}))}))),i.a.createElement("div",{className:"nav__sidebar"+(r?" active":"")},i.a.createElement("div",{className:"nav__sidebar__header"},i.a.createElement("i",{tabIndex:"-1",onClick:g,className:"fas fa-bars menu-toggle"}),p()),h.map((function(e){return i.a.createElement("div",{className:"nav__sidebar__item",onClick:g,key:e.key},i.a.createElement(m,Object.assign({},e,{showTooltip:!1})))}))),r?i.a.createElement("div",{className:"shadow-screen",onClick:g}):null)},g=function(e){return i.a.createElement("h1",{className:"heading"},e.title)};function E(){for(var e=[],t=1;t<=20;t++){var n=t/20;e.push(n)}return e.push(0),e}var b=function(e){var t=Object(a.useCallback)((function(t){null!==t&&function(t){var n={root:null,rootMargin:"0px",threshold:E()};new IntersectionObserver((function(t){d.EventEmitter.dispatch("section_update",[e.title,t[0].intersectionRect.height])}),n).observe(t)}(t)}),[]);return i.a.createElement("section",{className:"section "+e.bgColor,ref:t},i.a.createElement("div",{className:"link-id",id:e.title}),i.a.createElement(g,{title:e.title}),e.children)},y=n(4),k=n(7),_=function(){function e(t,n){Object(y.a)(this,e),this.x=t||0,this.y=n||0}return Object(k.a)(e,[{key:"multiply",value:function(t){return new e(this.x*t,this.y*t)}},{key:"divide",value:function(t){return new e(this.x/t,this.y/t)}},{key:"add",value:function(t){return new e(this.x+t,this.y+t)}},{key:"subtract",value:function(t){return new e(this.x-t,this.y-t)}},{key:"addVec",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"subtractVec",value:function(t){return new e(this.x-t.x,this.y-t.y)}},{key:"sqrDistance",value:function(e){return Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2)}},{key:"distance",value:function(e){return Math.sqrt(this.sqrDistance(e))}},{key:"normalize",value:function(){var e=this.magnitude;this.x/=e,this.y/=e}},{key:"toString",value:function(){console.log("("+this.x+", "+this.y+")")}},{key:"magnitude",get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}}]),e}(),w=Math.pow(150,2),x=Math.pow(200,2);function N(e,t){var n=new _(Math.random()*e.width,Math.random()*e.height),a=new _(2*Math.random()-1,2*Math.random()-1);if(a.normalize(),t){var i=4*Math.random(),r=.1*e.width,c=.1*e.height;i<1?(n.x=-r,a.x<0&&(a.x*=-1)):i<2?(n.x=e.width+r,a.x>0&&(a.x*=-1)):i<3?(n.y=-c,a.y<0&&(a.y*=-1)):(n.y=e.height+c,a.x>0&&(a.y*=-1))}var o=.6*Math.random()+.4;return{position:n,velocity:a.multiply(o),radius:4*Math.random()+1,color:"#71D5FF",pushedThisFrame:!1}}function j(e,t){t.position.x<0||t.position.x>e.canvas.width||t.position.y<0||t.position.y>e.canvas.height||(e.beginPath(),e.fillStyle=t.color,e.arc(t.position.x,t.position.y,t.radius,0,2*Math.PI),e.fill())}function M(e,t,n){for(var a=0;a<n.length;a++){var i=t.position.sqrDistance(n[a].position);i<w&&(e.beginPath(),e.strokeStyle=t.color,e.lineWidth=1-i/w*1,e.moveTo(t.position.x,t.position.y),e.lineTo(n[a].position.x,n[a].position.y),e.stroke())}}function C(e,t,n){if(n.mouseInCanvas){var a=n.mousePos.sqrDistance(t.position);a<x&&(e.beginPath(),e.strokeStyle=t.color,e.lineWidth=1-a/x*1,e.moveTo(t.position.x,t.position.y),e.lineTo(n.mousePos.x,n.mousePos.y),e.stroke())}}function T(e,t){var n=t.currTick/t.endTick,a=t.radius*n,i=t.lineWidth*(1-n);t.currTick+=t.speed,e.beginPath(),e.strokeStyle=t.color,e.lineWidth=i,e.arc(t.position.x,t.position.y,a,0,2*Math.PI),e.stroke()}function O(e,t){for(var n=0;n<t.length;n++){var a=t[n].radius*(t[n].currTick/t[n].endTick)-e.position.distance(t[n].position);if(a<20&&a>0){e.pushedThisFrame=!0;var i=e.position.subtractVec(t[n].position);i.normalize(),e.position=e.position.addVec(i.multiply(10*(1-t[n].currTick/t[n].endTick)))}}}var S=function e(t,n,a,i){Object(y.a)(this,e),this.mousePos=t||new _(0,0),this.particles=n||[],this.mouseInCanvas=a||!1,this.pings=i||[]},I=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(new S),r=Object(s.a)(n,2),c=r[0],o=r[1],l=c.particles,u=c.mousePos,m=c.pings,f=c.mouseInCanvas;function h(e){var n=[e.clientX,e.clientY],a=n[0],i=n[1],r=t.current.getBoundingClientRect();u.x=a-r.x,u.y=i-r.y}window.requestAnimationFrame((function(){if(t.current){var e=t.current.getContext("2d"),n=e.canvas.width,a=e.canvas.height;if(Math.abs(t.current.getBoundingClientRect().y)>a)o(new S(c.position,c.particles,c.mouseInCanvas,c.pings));else{e.clearRect(0,0,n,a);for(var i=n*a,r=Math.min(Math.floor(i/(4e4/3)),150),s=r-l.length,h=0;h<s;h++)l.push(N(e.canvas,!1));r<l.length&&(l=l.slice(0,r));for(var d=0;d<m.length;d++)T(e,m[d]);for(var p=0;p<l.length;p++)C(e,l[p],c),O(l[p],m),l[p].pushedThisFrame?l[p].pushedThisFrame=!1:l[p].position=l[p].position.addVec(l[p].velocity),j(e,l[p]),M(e,l[p],l);for(var v=.1*n,g=.1*a,E=l.filter((function(e){return e.position.x<n+v&&e.position.x>-v&&e.position.y<a+g&&e.position.y>-g})),b=E.length,y=0;y<r-b;y++)E.push(N(e.canvas,!0));var k=m.filter((function(e){return e.currTick<e.endTick})),_=new S(u,E,f,k);o(_)}}}));var d=0,p=0;if(e.current){var v=e.current.getBoundingClientRect();d=v.width,p=v.height}return i.a.createElement("div",{className:"canvas-container",onMouseMove:function(e){h(e)},onMouseEnter:function(){f=!0},onMouseLeave:function(){f=!1},onClick:function(e){var t,n,a,i,r,c;h(e),m.push((t=u.x,n=u.y,a=100,i=150,r=3,c=3,{position:new _(t,n),color:"#71D5FF",endTick:a,currTick:0,radius:i,speed:r,lineWidth:c}))},ref:e},i.a.createElement("canvas",{className:"landing-page__canvas",width:d,height:p,ref:t}))},P=function(){return i.a.createElement("div",{className:"landing-page"},i.a.createElement(I,null),i.a.createElement("div",{className:"landing-page__container"},i.a.createElement("img",{src:h.a,alt:"Jeff Manke Logo",className:"landing-page__container__logo unselectable"}),i.a.createElement("h1",{className:"landing-page__container__title"},"Jeff Manke"),i.a.createElement("h2",{className:"landing-page__container__subtitle"},"// Software Developer")))},R=n(8),q=n.n(R),A=function(){return i.a.createElement("div",{className:"about section-container"},i.a.createElement("div",{className:"text-img-box"},i.a.createElement("p",null,"Hello, my name is Jeff Manke and I am a Software Developer currently living in Victoria, BC. I have a Bachelor of Science, Double Major in Computer Science and Economics from the Univeristy of Victoria. Ever since I took Computer Science as my second major, I have been spending almost all of my time programming and learning new technologies. Whether its writing highly optimized and multithreaded C#/C++ code, or front end development with JavaScript and React.js, I love taking on new challenges and solving problems."),i.a.createElement("img",{src:q.a,alt:"Jeff Manke Hololens",className:"paragraph-img"})))},D=function(){return i.a.createElement("div",{className:"experience section__body"},i.a.createElement("p",null))},F=n(9),J=n.n(F),V=function(){return i.a.createElement("div",{className:"project-card"},i.a.createElement("img",{src:J.a,alt:"Test",className:"project-card__img-display"}),i.a.createElement("h3",{className:"project-card__heading"},"Project Cheese"),i.a.createElement("p",{className:"project-card__description-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"))},B=function(){return i.a.createElement("div",{className:"projects section__body"},i.a.createElement("div",{className:"projects__grid"},i.a.createElement(V,null),i.a.createElement(V,null),i.a.createElement(V,null),i.a.createElement(V,null),i.a.createElement(V,null),i.a.createElement(V,null)))},W=function(){return i.a.createElement("div",{className:"skills section__body"},i.a.createElement("p",null))},L=function(){return i.a.createElement("div",{className:"education section__body"},i.a.createElement("p",null))},z=function(){return i.a.createElement("div",{className:"content"},i.a.createElement(P,null),i.a.createElement(b,{children:i.a.createElement(A,null),title:"About",bgColor:"bg-primary"}),i.a.createElement(b,{children:i.a.createElement(D,null),title:"Experience",bgColor:"bg-secondary"}),i.a.createElement(b,{children:i.a.createElement(B,null),title:"Projects",bgColor:"bg-primary"}),i.a.createElement(b,{children:i.a.createElement(W,null),title:"Skills",bgColor:"bg-secondary"}),i.a.createElement(b,{children:i.a.createElement(L,null),title:"Education",bgColor:"bg-primary"}))},H=function(){return i.a.createElement("div",{className:"line-numbers unselectable"})};c.a.render(i.a.createElement((function(){return i.a.createElement("div",{className:"app"},i.a.createElement(v,null),i.a.createElement(z,null),i.a.createElement(H,null))}),null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.af824e4b.chunk.js.map