(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/NyR":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n);a("y2Yf"),a("/eHF"),a("S8fh"),a("93Eu"),a("km63"),a("+m0d");n.Component,a("wL/u");function s(){var e=document.getElementsByClassName("small-header__info")[0];e.classList.remove("invisible"),e.classList.add("visible")}function l(){var e=document.getElementsByClassName("small-header__info")[0];e.classList.remove("visible"),e.classList.add("invisible")}var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.getSmallHeaderTitleClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__title small-header__title__on-dark":"small-header__title small-header__title__on-light"},i.getSmallHeaderInfoClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info semi-bold small-header__info__on-dark invisible":"small-header__info semi-bold small-header__info__on-light invisible"},i.getSmallHeaderInfoTitleClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info__title semi-bold small-header__info__title__on-dark":"small-header__info__title semi-bold small-header__info__title__on-light"},i.getSmallHeaderInfoContentClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info_content small-header__info__content__on-dark":"small-header__info_content small-header__info__content__on-light"},i.render=function(){return o.a.createElement("div",null,o.a.createElement("header",{className:"small-header"},o.a.createElement("h4",{className:this.getSmallHeaderTitleClassName(),onMouseOver:s,onMouseOut:l,"aria-label":this.props.infoContent},this.props.headerTitle)),o.a.createElement("div",{className:this.getSmallHeaderInfoClassName()},o.a.createElement("p",{className:this.getSmallHeaderInfoTitleClassName()},this.props.infoTitle),o.a.createElement("p",{className:this.getSmallHeaderInfoContentClassName()},this.props.infoContent)))},n}(n.Component);t.a=i},"28Mm":function(e,t,a){e.exports=a.p+"static/ambience 2-affe4a7e8edefff4bd913fb7f4d9bc65.mp3"},"6lBY":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),s=(a("Wbzz"),a("vrFN")),l=(a("/eHF"),a("8k0H")),i=a("/NyR"),c=a("ONU3"),r=(a("y2Yf"),a("XETa"),a("93Eu"),a("km63"),a("+m0d"),a("h/4p")),m=a.n(r),_=a("buvW"),d=a.n(_),u=a("ABHa"),p=a.n(u),g=a("28Mm"),h=a.n(g),f=a("VCnq"),v=a.n(f),b=a("8BUt"),N=a.n(b),E=a("OwBq"),y=a.n(E),C=a("HxfK"),k=a.n(C),w=a("QRh9"),x=a.n(w),L=a("WNXu"),B=a.n(L);var S=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={muted:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.playSound=function(e,t){var a=t.target.classList[1];if(t.target.src=d.a,null!=t.target.id){if(0==document.getElementsByClassName("audio-player"+e).length){var n=document.createElement("audio");n.className="audio-player"+e,n.classList.add("audio-player"),n.src=e,n.type="audio/mpeg",n.muted=this.state.muted,n.addEventListener("ended",(function(){!function(e){document.getElementsByClassName(e)[0].src=m.a}(a)})),document.getElementById("song").appendChild(n),n.play()}else if(0!=document.getElementsByClassName("audio-player"+e).length){var o=document.getElementsByClassName("audio-player"+e)[0];o.paused?(o.play(),t.target.src=d.a):(o.pause(),t.target.src=m.a)}}},s.changeVolume=function(e){var t=document.getElementsByClassName("audio-player");1==this.state.muted?(this.setState({muted:!1}),document.getElementsByClassName("volume-svg__muted")[0].classList.add("invisible"),document.getElementsByClassName("volume-svg__muted")[0].classList.remove("visible"),document.getElementsByClassName("volume-svg__unmuted")[0].classList.add("visible"),document.getElementsByClassName("volume-svg__unmuted")[0].classList.remove("invisible")):0==this.state.muted&&(this.setState({muted:!0}),document.getElementsByClassName("volume-svg__muted")[0].classList.add("visible"),document.getElementsByClassName("volume-svg__muted")[0].classList.remove("invisible"),document.getElementsByClassName("volume-svg__unmuted")[0].classList.add("invisible"),document.getElementsByClassName("volume-svg__unmuted")[0].classList.remove("visible"));for(var a=0;a<=t.length;a++)null!=t[a]&&(t[a].muted=!this.state.muted)},s.render=function(){var e=this;return o.a.createElement("div",{className:"content__pot"},o.a.createElement("div",{id:"song"}),o.a.createElement("svg",{onClick:function(t){return e.changeVolume(t)},className:"volume-svg",role:"button","aria-label":"mute or unmute",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",tabIndex:"0"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{className:"volume-svg-path volume-svg__unmuted",d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),o.a.createElement("path",{className:"volume-svg-path volume-svg__muted invisible",d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"})),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-1 content__pot__img__sound",id:"ambience1",onClick:function(t){return e.playSound(p.a,t)}}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-2"}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-3 content__pot__img__sound",onClick:function(t){return e.playSound(h.a,t)}}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-4 content__pot__img__sound",onClick:function(t){return e.playSound(v.a,t)}}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-5"}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-6 content__pot__img__sound",onClick:function(t){return e.playSound(N.a,t)}}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-7 content__pot__img__sound",onClick:function(t){return e.playSound(y.a,t)}}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-8"}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-9 content__pot__img__sound",onClick:function(t){return e.playSound(k.a,t)}}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-10"}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-11 content__pot__img__sound",onClick:function(t){return e.playSound(x.a,t)}}),o.a.createElement("img",{src:m.a,alt:"Alexa underneath a pot",className:"content__pot__img content__pot__img-12 content__pot__img__sound",onClick:function(t){return e.playSound(B.a,t)}}))},n}(n.Component);t.default=function(e){return o.a.createElement("div",null,o.a.createElement(s.a,{title:"Garden of pots"}),o.a.createElement(l.a,null,o.a.createElement(i.a,{className:"small-header__title",headerTitle:"Garden of pots",infoTitle:"Garden of pots",infoContent:["A few pots hide the ambient noises gleaned from the background of Amazon Mechanical Turker workers who work to train voice assistants and sift through voice assistant data.",o.a.createElement("br",null),o.a.createElement("br",null),"Collaborator:",o.a.createElement("br",null),"Danny Clay"]}),o.a.createElement(S,null),o.a.createElement(c.a,{homeSection:"#garden-of-pots"})))}},"7PZw":function(e,t,a){},"8BUt":function(e,t,a){e.exports=a.p+"static/ambience 4-b9ca9d0fa2beb7343cffb73c62826ead.mp3"},ABHa:function(e,t,a){e.exports=a.p+"static/ambience 1-01cb18914a49e7cd14275d3b0e1cd6c1.mp3"},HxfK:function(e,t,a){e.exports=a.p+"static/ambience 6-c5af31ef9a4475283d232ea4f679529c.mp3"},ONU3:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),s=a("Wbzz"),l=(a("y2Yf"),a("/eHF")),i=a.n(l);a("7PZw"),a("93Eu"),a("km63"),a("+m0d"),a("bXw6");var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.getBackNavClass=function(){return"absolute"==this.props.positionMode?"back-nav__absolute":"back-nav"},l.getStrokeClassName=function(){return"on-dark"==this.props.colorMode?"back-nav__on-dark-stroke ":"is-red"==this.props.colorMode?"back-nav__red-stroke":"back-nav__on-light-stroke"},l.render=function(){return o.a.createElement("div",{className:this.getBackNavClass()},o.a.createElement(i.a,{duration:1500},o.a.createElement(s.Link,{to:"/"+this.props.homeSection},o.a.createElement("svg",{width:"55",height:"55",viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"back-nav__img",role:"navigation","aria-label":"back to homepage",alt:"back to homepage"},o.a.createElement("path",{className:this.getStrokeClassName(),d:"M29.7474 52.4975L4.99862 27.7487L29.7474 3.00001",strokeWidth:"6"})))))},n}(n.Component);t.a=c},OwBq:function(e,t,a){e.exports=a.p+"static/ambience 5-15c6de2f80cdd983317fe8701ebec779.mp3"},QRh9:function(e,t,a){e.exports=a.p+"static/ambience 7-95634951e7805b777a0a1be25d140025.mp3"},S8fh:function(e,t,a){},VCnq:function(e,t,a){e.exports=a.p+"static/ambience 3-8b660c9e9cba9261d139767b8f061005.mp3"},WNXu:function(e,t,a){e.exports=a.p+"static/ambience 8-349a3b12dc67d2dd86a294ee6529929b.mp3"},XETa:function(e,t,a){},bXw6:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1NSA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI5Ljc0NzQgNTIuNDk3NUw0Ljk5ODYyIDI3Ljc0ODdMMjkuNzQ3NCAzLjAwMDAxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjYiLz4KPC9zdmc+Cg=="},buvW:function(e,t,a){e.exports=a.p+"static/alexa-pot-v2-9c48b6f1f988d2752015ea4edfd33d95.gif"},"h/4p":function(e,t,a){e.exports=a.p+"static/pot-still-v2-048c0ba55ee35d9995209745eb9d586f.gif"},"wL/u":function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-garden-of-pots-js-3126f33e1c2cb89d42a6.js.map