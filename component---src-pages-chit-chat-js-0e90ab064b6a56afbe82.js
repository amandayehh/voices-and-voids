(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/NyR":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);a("y2Yf"),a("/eHF"),a("wL/u"),a("93Eu"),a("km63"),a("+m0d");function o(){var e=document.getElementsByClassName("small-header__info")[0];e.classList.remove("invisible"),e.classList.add("visible")}function s(){var e=document.getElementsByClassName("small-header__info")[0];e.classList.remove("visible"),e.classList.add("invisible")}var r=function(e){var t,a;function l(){return e.apply(this,arguments)||this}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=l.prototype;return r.getSmallHeaderTitleClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__title small-header__title__on-dark":"small-header__title small-header__title__on-light"},r.getSmallHeaderInfoClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info semi-bold small-header__info__on-dark invisible":"small-header__info semi-bold small-header__info__on-light invisible"},r.getSmallHeaderInfoTitleClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info__title semi-bold small-header__info__title__on-dark":"small-header__info__title semi-bold small-header__info__title__on-light"},r.getSmallHeaderInfoContentClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info_content small-header__info__content__on-dark":"small-header__info_content small-header__info__content__on-light"},r.render=function(){return n.a.createElement("div",null,n.a.createElement("header",{className:"small-header"},n.a.createElement("h4",{className:this.getSmallHeaderTitleClassName(),onMouseOver:o,onMouseOut:s,"aria-label":this.props.infoContent},this.props.headerTitle)),n.a.createElement("div",{className:this.getSmallHeaderInfoClassName()},n.a.createElement("p",{className:this.getSmallHeaderInfoTitleClassName()},this.props.infoTitle),n.a.createElement("p",{className:this.getSmallHeaderInfoContentClassName()},this.props.infoContent)))},l}(l.Component);t.a=r},"1H/V":function(e,t,a){},"7PZw":function(e,t,a){},"9BGq":function(e,t,a){e.exports=a.p+"static/echos appearing with chit chat text-7692e0a4f67cd419eec645e2f2735c2c.gif"},ONU3:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),o=a("Wbzz"),s=(a("y2Yf"),a("/eHF")),r=a.n(s);a("7PZw"),a("93Eu"),a("km63"),a("+m0d"),a("bXw6");var c=function(e){var t,a;function l(){return e.apply(this,arguments)||this}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=l.prototype;return s.getBackNavClass=function(){return"absolute"==this.props.positionMode?"back-nav__absolute":"back-nav"},s.getStrokeClassName=function(){return"on-dark"==this.props.colorMode?"back-nav__on-dark-stroke ":"is-red"==this.props.colorMode?"back-nav__red-stroke":"back-nav__on-light-stroke"},s.render=function(){return n.a.createElement("div",{className:this.getBackNavClass()},n.a.createElement(r.a,{duration:1500},n.a.createElement(o.Link,{to:"/"+this.props.homeSection},n.a.createElement("svg",{width:"55",height:"55",viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"back-nav__img",role:"navigation","aria-label":"back to homepage",alt:"back to homepage"},n.a.createElement("path",{className:this.getStrokeClassName(),d:"M29.7474 52.4975L4.99862 27.7487L29.7474 3.00001",strokeWidth:"6"})))))},l}(l.Component);t.a=c},VuGJ:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),o=(a("Wbzz"),a("vrFN")),s=(a("/eHF"),a("/NyR")),r=a("ONU3"),c=a("ccWF");t.default=function(e){return n.a.createElement("div",null,n.a.createElement(o.a,{title:"Chit Chat"}),n.a.createElement(s.a,{className:"small-header__title",headerTitle:"Chit Chat",infoTitle:"Chit Chat",infoContent:"This texttovoice.io script is spoken by one voice assistant for other voices assistants to respond with very limited human intervention. "}),n.a.createElement(c.a,null),n.a.createElement(r.a,{homeSection:"#chit-chat"}))}},bXw6:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1NSA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI5Ljc0NzQgNTIuNDk3NUw0Ljk5ODYyIDI3Ljc0ODdMMjkuNzQ3NCAzLjAwMDAxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjYiLz4KPC9zdmc+Cg=="},ccWF:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),o=(a("y2Yf"),a("1H/V"),a("93Eu"),a("km63"),a("+m0d"),a("zckf"),a("hKjB")),s=a.n(o),r=a("9BGq"),c=a.n(r);var m=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).portalRoot="undefined"!=typeof document?document.getElementById("portal"):null,a.state={volume:!1},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=l.prototype;return o.changeVolume=function(e){document.getElementsByClassName("audio-element")[0];1==this.state.volume?(this.setState({volume:!1}),document.getElementsByClassName("content-chit-chat__volume-svg__muted")[0].classList.add("visible"),document.getElementsByClassName("content-chit-chat__volume-svg__muted")[0].classList.remove("invisible"),document.getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0].classList.add("invisible"),document.getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0].classList.remove("visible")):0==this.state.volume&&(console.log("volume false"),this.setState({volume:!0}),document.getElementsByClassName("content-chit-chat__volume-svg__muted")[0].classList.add("invisible"),document.getElementsByClassName("content-chit-chat__volume-svg__muted")[0].classList.remove("visible"),document.getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0].classList.add("visible"),document.getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0].classList.remove("invisible"))},o.playSound=function(){null!=document&&(this.audioEl=document.getElementsByClassName("audio-element")[0],null!=this.audioEl&&(1==this.state.volume?(this.audioEl.play(),this.audioEl.muted=!1):0==this.state.volume&&(this.audioEl.muted=!0)))},o.render=function(){var e=this;return n.a.createElement("div",null,n.a.createElement("svg",{onClick:function(t){return e.changeVolume(t)},className:"content-chit-chat__volume-svg",role:"button","aria-label":"mute or unmute",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",tabIndex:"0"},n.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.a.createElement("path",{className:"content-chit-chat__volume-svg-path content-chit-chat__volume-svg__unmuted invisible",d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),n.a.createElement("path",{className:"content-chit-chat__volume-svg-path content-chit-chat__volume-svg__muted visible",d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"})),n.a.createElement("div",{className:"content-chit-chat__text"},n.a.createElement("p",null,"hi turkers hi amazon hi echo ok google"),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,"I love chit chatting."),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'<amazon:effect name="whispered">chit chat chit chat chit chat </amazon:effect>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Echo, open shopping list <break time="2s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, <break time="1s"/> where are you <break time="5s"/>'),n.a.createElement("audio",{className:"audio-element",autoPlay:!0,allow:"autoplay",muted:"muted"},n.a.createElement("source",{src:s.a})),this.playSound(),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Computer, open voice pad <break time="2s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Read <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Computer, listen <break time="2s"/>'),n.a.createElement("p",null,'<amazon:effect name="whispered">chit chat chit chat chit chat chit chat chit chat',n.a.createElement("span",null,"  "),"</amazon:effect>"),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'I love chit chatting. Hey Computer, how old are you? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Hey Echo, what is the last thing you heard? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, where do you live? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Ok google, talk to a turk worker <break time="7s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'parrot <break time="5s"/>'),n.a.createElement("p",null,'goldfinch <break time="5s"/>'),n.a.createElement("p",null,'stellar\'s jay <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'eagle <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'<voice name="Ivy">Hi. Most of my time is spent in my living room, on that old pink couch. One thing I don\'t tell a lot of people is...<break time="300ms"/> <amazon:effect name="whispered">I am one of the voice workers for Alexa.</amazon:effect>.</voice>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, let\'s chat <break time="2s"/> Jonathan'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'<voice name="Kendra">Amazon, tell me an inspirational quote </voice><break time="3s"/>'),n.a.createElement("p",null,'Echo, who is your inventor? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Computer, what is capitalism? <break time="4s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'<voice name="Matthew">Ok google, talk to a turk worker <break time="7s"/> </voice>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'eagle <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'I love chit chatting. Hey Computer, how old are you? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Hey Echo, what is the last thing you heard? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, where do you live? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, who is donald trump? <break time="3s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,"Echo, read an inspirational quote",n.a.createElement("span",null,"  "),'<break time="3s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Ok google, talk to a turk worker <break time="7s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'toucan <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Ok google, talk to a turk worker <break time="7s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'swallow <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,"It was great to chit chat. Let's do it again soon")),n.a.createElement("img",{src:c.a,alt:"echos appearing with chit chat text",className:"content-chit-chat__img"}))},l}(l.Component);t.a=m},hKjB:function(e,t,a){e.exports=a.p+"static/Mellon_pres_noClap.pt1-4fd7ff5b5b66855a035c72c9971c34be.mp3"},"wL/u":function(e,t,a){},zckf:function(e,t,a){e.exports=a.p+"static/silence-2b5bb70515af549dba0643c2d97a25af.mp3"}}]);
//# sourceMappingURL=component---src-pages-chit-chat-js-0e90ab064b6a56afbe82.js.map