(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/NyR":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n);a("y2Yf"),a("/eHF"),a("S8fh"),a("93Eu"),a("km63"),a("+m0d");n.Component,a("wL/u");function r(){var e=document.getElementsByClassName("small-header__info")[0];e.classList.remove("invisible"),e.classList.add("visible")}function l(){var e=document.getElementsByClassName("small-header__info")[0];e.classList.remove("visible"),e.classList.add("invisible")}var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.getSmallHeaderTitleClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__title small-header__title__on-dark":"small-header__title small-header__title__on-light"},i.getSmallHeaderInfoClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info semi-bold small-header__info__on-dark invisible":"small-header__info semi-bold small-header__info__on-light invisible"},i.getSmallHeaderInfoTitleClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info__title semi-bold small-header__info__title__on-dark":"small-header__info__title semi-bold small-header__info__title__on-light"},i.getSmallHeaderInfoContentClassName=function(){return"small-header__on-dark"==this.props.colorMode?"small-header__info_content small-header__info__content__on-dark":"small-header__info_content small-header__info__content__on-light"},i.render=function(){return o.a.createElement("div",null,o.a.createElement("header",{className:"small-header"},o.a.createElement("h4",{className:this.getSmallHeaderTitleClassName(),onMouseOver:r,onMouseOut:l,"aria-label":this.props.infoContent},this.props.headerTitle)),o.a.createElement("div",{className:this.getSmallHeaderInfoClassName()},o.a.createElement("p",{className:this.getSmallHeaderInfoTitleClassName()},this.props.infoTitle),o.a.createElement("p",{className:this.getSmallHeaderInfoContentClassName()},this.props.infoContent)))},n}(n.Component);t.a=i},"55ZP":function(e,t,a){},"7PZw":function(e,t,a){},"8k0H":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n);a("Wbzz"),a("y2Yf"),a("/eHF"),a("EgAo"),a("93Eu"),a("km63"),a("+m0d");var r=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.state={width:window.innerWidth,mobileWidth:700},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.changeWidth=function(){this.setState({mobileWidth:0})},r.componentWillMount=function(){window.addEventListener("resize",this.handleWindowSizeChange)},r.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowSizeChange)},r.render=function(){var e=this,t=this.state.width<=this.state.mobileWidth;return console.log("isMobile"),console.log(t),t?o.a.createElement("div",{className:"layout__mobile"},o.a.createElement("h3",{className:"layout__mobile__title"}," VOICES + VOIDS "),o.a.createElement("p",{className:"layout__mobile__description"},"Voices + Voids features interactive vignettes best experienced on a computer"),o.a.createElement("div",{className:"layout__mobile__email text-link__underline"},o.a.createElement("p",null,o.a.createElement("a",{href:"mailto: ?subject=Voices + Voides&body=https://amandayehh.github.io/voices-and-voids/"},"Email myself the link"))),o.a.createElement("div",{className:"layout__mobile__enter text-link__underline",onClick:function(){return e.changeWidth()}},o.a.createElement("p",null,"Continue to site, but expect quirky layout bugs"))):o.a.createElement("div",null,this.props.children)},n}(n.Component);t.a=r},EgAo:function(e,t,a){},ONU3:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),l=(a("y2Yf"),a("/eHF")),i=a.n(l);a("7PZw"),a("93Eu"),a("km63"),a("+m0d"),a("bXw6");var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.getBackNavClass=function(){return"absolute"==this.props.positionMode?"back-nav__absolute":"back-nav"},l.getStrokeClassName=function(){return"on-dark"==this.props.colorMode?"back-nav__on-dark-stroke ":"is-red"==this.props.colorMode?"back-nav__red-stroke":"back-nav__on-light-stroke"},l.render=function(){return o.a.createElement("div",{className:this.getBackNavClass()},o.a.createElement(i.a,{duration:1500},o.a.createElement(r.Link,{to:"/"+this.props.homeSection},o.a.createElement("svg",{width:"55",height:"55",viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"back-nav__img",role:"navigation","aria-label":"back to homepage",alt:"back to homepage"},o.a.createElement("path",{className:this.getStrokeClassName(),d:"M29.7474 52.4975L4.99862 27.7487L29.7474 3.00001",strokeWidth:"6"})))))},n}(n.Component);t.a=s},S8fh:function(e,t,a){},bXw6:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1NSA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI5Ljc0NzQgNTIuNDk3NUw0Ljk5ODYyIDI3Ljc0ODdMMjkuNzQ3NCAzLjAwMDAxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjYiLz4KPC9zdmc+Cg=="},"ggd/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("vrFN"),l=(a("93Eu"),a("km63"),a("+m0d"),a("8k0H")),i=a("/NyR"),s=a("i+DB"),c=a("ONU3");t.default=function(e){return o.a.createElement("div",null,o.a.createElement(r.a,{title:"Set an alarm trio"}),o.a.createElement(l.a,null,o.a.createElement("div",{className:"black-background"},o.a.createElement(i.a,{colorMode:"small-header__on-dark",headerTitle:"Set an alarm",infoTitle:"Set an alarm",infoContent:["Movement score responding to voice assistant commands. The alarms are extracted from ghost workers' Google Voice Assistant data logs, and then scripted for Alexa using texttovoice.io. Score interpreted at home over zoom during the Covid-19 pandemic.",o.a.createElement("br",null),o.a.createElement("br",null),"Collaborator:",o.a.createElement("br",null),"Kate Sicchio",o.a.createElement("br",null),"Alexa"]}),o.a.createElement(s.a,{videoSrc:"https://player.vimeo.com/video/418230349?title=0&byline=0&portrait=0",title:"Set an alarm Trio"}),o.a.createElement(c.a,{colorMode:"on-dark",homeSection:"#alarm"}))))}},"i+DB":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n);a("y2Yf"),a("/eHF"),a("55ZP"),a("93Eu"),a("km63"),a("+m0d");var r=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"video-full"},o.a.createElement("iframe",{src:this.props.videoSrc,title:this.props.title,frameBorder:"0",className:"video-full__vimeo",allowFullScreen:!0})))},n}(n.Component);t.a=r},"wL/u":function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-alarm-js-b376864b736cb63b7419.js.map