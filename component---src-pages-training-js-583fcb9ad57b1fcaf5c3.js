(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/NyR":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);a("y2Yf"),a("/eHF"),a("wL/u"),a("93Eu"),a("km63"),a("+m0d");function s(){var e=document.getElementsByClassName("small-header__info")[0];e.classList.remove("invisible"),e.classList.add("visible")}function o(){var e=document.getElementsByClassName("small-header__info")[0];e.classList.remove("visible"),e.classList.add("invisible")}var r=function(e){var t,a;function l(){return e.apply(this,arguments)||this}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=l.prototype;return r.getSmallHeaderTitleClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__title small-header__title__on-dark":"small-header__title small-header__title__on-light"},r.getSmallHeaderInfoClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info semi-bold small-header__info__on-dark invisible":"small-header__info semi-bold small-header__info__on-light invisible"},r.getSmallHeaderInfoTitleClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info__title semi-bold small-header__info__title__on-dark":"small-header__info__title semi-bold small-header__info__title__on-light"},r.getSmallHeaderInfoContentClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info_content small-header__info__content__on-dark":"small-header__info_content small-header__info__content__on-light"},r.render=function(){return n.a.createElement("div",null,n.a.createElement("header",{className:"small-header"},n.a.createElement("h4",{className:this.getSmallHeaderTitleClassName(),onMouseOver:s,onMouseOut:o,"aria-label":this.props.infoContent},this.props.headerTitle)),n.a.createElement("div",{className:this.getSmallHeaderInfoClassName()},n.a.createElement("p",{className:this.getSmallHeaderInfoTitleClassName()},this.props.infoTitle),n.a.createElement("p",{className:this.getSmallHeaderInfoContentClassName()},this.props.infoContent)))},l}(l.Component);t.a=r},"1H/V":function(e,t,a){},"9BGq":function(e,t,a){e.exports=a.p+"static/echos appearing with chit chat text-7692e0a4f67cd419eec645e2f2735c2c.gif"},"9JTn":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),s=(a("Wbzz"),a("vrFN")),o=(a("/eHF"),a("93Eu"),a("km63"),a("+m0d"),a("/NyR")),r=a("ccWF");t.default=function(e){return n.a.createElement("div",null,n.a.createElement(s.a,{title:"Training a voice assistant"}),n.a.createElement(o.a,{headerTitle:"Training a voice assistant",infoTitle:"Training",infoContent:"As if we were training a  voice assistant to understand human ways of saying things, we said utterances as they appeared on screen. These utterances were created using the neural net trained on real voice assistant data, at different temperatures (leading to more or less non-sensical utterances). Composed by Danny Clay Neural Net by Gabrielle Benabdallah"}),n.a.createElement(r.a,null))}},ccWF:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),s=(a("y2Yf"),a("1H/V"),a("93Eu"),a("km63"),a("+m0d"),a("zckf"),a("hKjB")),o=a.n(s),r=a("9BGq"),c=a.n(r);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).changeVolume=a.changeVolume.bind(i(a)),a.componentDidMount=a.componentDidMount.bind(i(a)),a.audioEl=document.getElementsByClassName("audio-element")[0],a.state={volume:!1,mounted:!1},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=l.prototype;return s.changeVolume=function(e){1==this.state.volume?(this.setState({volume:!1}),document.getElementsByClassName("content-chit-chat__volume-svg__muted")[0].classList.add("visible"),document.getElementsByClassName("content-chit-chat__volume-svg__muted")[0].classList.remove("invisible"),document.getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0].classList.add("invisible"),document.getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0].classList.remove("visible")):0==this.state.volume&&(console.log("volume false"),this.setState({volume:!0}),document.getElementsByClassName("content-chit-chat__volume-svg__muted")[0].classList.add("invisible"),document.getElementsByClassName("content-chit-chat__volume-svg__muted")[0].classList.remove("visible"),document.getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0].classList.add("visible"),document.getElementsByClassName("content-chit-chat__volume-svg__unmuted")[0].classList.remove("invisible"))},s.componentDidMount=function(){this.mounted=!0},s.playSound=function(){1==this.mounted&&(this.audioEl=document.getElementsByClassName("audio-element")[0],null!=this.audioEl&&(console.log(this.state.volume),1==this.state.volume?(this.audioEl.play(),this.audioEl.muted=!1):0==this.state.volume&&(this.audioEl.muted=!0)))},s.render=function(){var e=this;return n.a.createElement("div",null,n.a.createElement("svg",{onClick:function(t){return e.changeVolume(t)},className:"content-chit-chat__volume-svg",role:"button","aria-label":"mute or unmute",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",tabIndex:"0"},n.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.a.createElement("path",{className:"content-chit-chat__volume-svg-path content-chit-chat__volume-svg__unmuted invisible",d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),n.a.createElement("path",{className:"content-chit-chat__volume-svg-path content-chit-chat__volume-svg__muted visible",d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"})),n.a.createElement("div",{className:"content-chit-chat__text"},n.a.createElement("p",null,"hi turkers hi amazon hi echo ok google"),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,"I love chit chatting."),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'<amazon:effect name="whispered">chit chat chit chat chit chat </amazon:effect>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Echo, open shopping list <break time="2s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, <break time="1s"/> where are you <break time="5s"/>'),n.a.createElement("audio",{ref:this.audioRef,className:"audio-element",autoPlay:!0,allow:"autoplay",muted:"muted"},n.a.createElement("source",{src:o.a})),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Computer, open voice pad <break time="2s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Read <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Computer, listen <break time="2s"/>'),n.a.createElement("p",null,'<amazon:effect name="whispered">chit chat chit chat chit chat chit chat chit chat',n.a.createElement("span",null,"  "),"</amazon:effect>"),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'I love chit chatting. Hey Computer, how old are you? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Hey Echo, what is the last thing you heard? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, where do you live? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Ok google, talk to a turk worker <break time="7s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'parrot <break time="5s"/>'),n.a.createElement("p",null,'goldfinch <break time="5s"/>'),n.a.createElement("p",null,'stellar\'s jay <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'eagle <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'<voice name="Ivy">Hi. Most of my time is spent in my living room, on that old pink couch. One thing I don\'t tell a lot of people is...<break time="300ms"/> <amazon:effect name="whispered">I am one of the voice workers for Alexa.</amazon:effect>.</voice>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, let\'s chat <break time="2s"/> Jonathan'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'<voice name="Kendra">Amazon, tell me an inspirational quote </voice><break time="3s"/>'),n.a.createElement("p",null,'Echo, who is your inventor? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Computer, what is capitalism? <break time="4s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'<voice name="Matthew">Ok google, talk to a turk worker <break time="7s"/> </voice>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'eagle <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'I love chit chatting. Hey Computer, how old are you? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Hey Echo, what is the last thing you heard? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, where do you live? <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Amazon, who is donald trump? <break time="3s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,"Echo, read an inspirational quote",n.a.createElement("span",null,"  "),'<break time="3s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Ok google, talk to a turk worker <break time="7s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'toucan <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'Ok google, talk to a turk worker <break time="7s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,'swallow <break time="5s"/>'),n.a.createElement("p",null,n.a.createElement("span",null," ")),n.a.createElement("p",null,"It was great to chit chat. Let's do it again soon")),n.a.createElement("img",{src:c.a,alt:"echos appearing with chit chat text",className:"content-chit-chat__img"}),this.playSound())},l}(l.Component);t.a=m},hKjB:function(e,t,a){e.exports=a.p+"static/Mellon_pres_noClap.pt1-4fd7ff5b5b66855a035c72c9971c34be.mp3"},"wL/u":function(e,t,a){},zckf:function(e,t,a){e.exports=a.p+"static/silence-2b5bb70515af549dba0643c2d97a25af.mp3"}}]);
//# sourceMappingURL=component---src-pages-training-js-583fcb9ad57b1fcaf5c3.js.map