(this.webpackJsonpwwtbam=this.webpackJsonpwwtbam||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"question":"How many seconds are in an hour?","answers":["1000","2345","3600","6300"],"correct":"3600"},{"question":"What makeup product makes eyelashes appear longer?","answers":["Mascara","Blush","Foundation","Lipstick"],"correct":"Mascara"},{"question":"What city contains the Eiffel Tower?","answers":["Sydney","Las Angeles","New York City","Paris"],"correct":"Paris"},{"question":"Which sport is also known as football?","answers":["Soccer","Basketball","Baseball","Cricket"],"correct":"Soccer"},{"question":"How many continents are there?","answers":["5","6","7","8"],"correct":"7"},{"question":"Who wasn\'t a member of the Beatles?","answers":["John Lennon","Paul McCartney","Ringo Star","Justin Timberlake"],"correct":"Justin Timberlake"},{"question":"Which of the following is not a type of pasta?","answers":["Spaghetti","Escargot","Fettuccine","Ziti"],"correct":"Escargot"},{"question":"Which state has cities named San Francisco and Hollywood?","answers":["California","Utah","Hawaii","Montana"],"correct":"California"},{"question":"Which instrument does not have strings?","answers":["Guitar","Bass","Trombone","Cello"],"correct":"Trombone"},{"question":"What product does Tesla produce?","answers":["Ice cream","Televisions","Hair brushes","Electric cars"],"correct":"Electric cars"},{"question":"Which animal is not a primate?","answers":["Chimpanzee","Dolphin","Gorillla","Orangutan"],"correct":"Dolphin"},{"question":"What gas makes voices sound higher when inhaled?","answers":["Oxygen","Nitrogen","Sulfur Hexafluoride","Helium"],"correct":"Helium"}]')},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s(5),r=s.n(c),i=(s(12),s(2)),o=(s(13),s(14),s(3)),l=s.n(o),u=s.p+"static/media/like.ae778be2.svg",m=function(e){var t=e.setGameStart,s=e.gameOver,n=e.score;return Object(a.jsx)("div",{className:l()("game-start",{"game-start_bg":!s}),children:Object(a.jsxs)("div",{className:"game-start__wrapper",children:[Object(a.jsx)("img",{className:"game-start__logo",src:u,alt:"like"}),Object(a.jsxs)("div",{className:"game-start__content",children:[s?Object(a.jsxs)("div",{className:"game-start__score",children:[Object(a.jsx)("h3",{className:"game-start__score-title",children:"Total score:"}),Object(a.jsx)("h2",{className:"game-start__title",children:"$".concat(n.toLocaleString()," earned")})]}):Object(a.jsx)("h1",{className:"game-start__title",children:"Who wants to be a millionaire?"}),Object(a.jsx)("button",{className:"game-start__button",type:"button",onClick:function(){t(!0)},children:"Start"})]})]})})},b=(s(15),s(16),s.p+"static/media/open-menu.4cc3cba4.svg"),j=s.p+"static/media/close-menu.f1510c4e.svg",d=function(e){var t=e.setShowStep,s=Object(n.useState)(!1),c=Object(i.a)(s,2),r=c[0],o=c[1];return Object(a.jsx)("div",{className:"mobile-menu",children:Object(a.jsx)("button",{className:"mobile-menu__button",type:"button",onClick:function(){o((function(e){return!e})),t((function(e){return!e}))},children:Object(a.jsx)("img",{className:"mobile-menu__icon",src:r?j:b,alt:"menu-icon"})})})},h=s(6),f=["A","B","C","D"],g=[500,1e3,2e3,4e3,8e3,16e3,32e3,64e3,125e3,25e4,5e5,1e6],O=function(e){var t=e.setGameStart,s=e.setGameOver,c=e.setScore,r=Object(n.useState)(0),o=Object(i.a)(r,2),u=o[0],m=o[1],b=Object(n.useState)(!1),j=Object(i.a)(b,2),O=j[0],_=j[1],p=Object(n.useState)(!1),w=Object(i.a)(p,2),v=w[0],S=w[1],x=Object(n.useState)(!1),N=Object(i.a)(x,2),k=N[0],y=N[1],T=Object(n.useState)(!1),q=Object(i.a)(T,2),C=q[0],W=q[1],B=[].concat(g).reverse(),E=h[u];Object(n.useEffect)((function(){O&&setTimeout((function(){m((function(e){return e+1})),_(!1)}),2e3)}),[O]);var G=function(e){!function(e){c(0===e?0:g[e-1])}(e),t(!1),s(!0)};return Object(n.useEffect)((function(){k&&setTimeout((function(){G(u),y(!1)}),1500)}),[k,u,G]),Object(a.jsx)("div",{className:"game-field",children:Object(a.jsxs)("div",{className:"game-field__wrapper",children:[Object(a.jsxs)("div",{className:"game-field__question",children:[Object(a.jsx)("h2",{className:"game-field__title",children:E.question}),Object(a.jsx)("div",{className:"game-field__answers",children:E.answers.map((function(e,t){return Object(a.jsxs)("button",{className:l()("game-field__answer","answer-button",{"answer-button_selected":e===v,"answer-button_correct":e===O,"answer-button_wrong":e===k}),type:"button",onClick:function(){return function(e){S(e),e!==E.correct&&setTimeout((function(){y(e)}),1e3),e===E.correct&&10===u&&setTimeout((function(){_(e)}),1e3),e===E.correct&&setTimeout((function(){_(e)}),1e3)}(e)},children:[Object(a.jsx)("span",{className:"answer-button__letter",children:f[t]}),e]},e)}))})]}),Object(a.jsx)("div",{className:l()("game-field__steps",{"mobile-hidden":!C}),children:Object(a.jsx)("div",{className:"game-field__steps-list",children:B.map((function(e){return Object(a.jsx)("div",{className:l()("game-field__step",{"game-field__step_inactive":e>g[u],"game-field__step_current":e===g[u],"game-field__step_finished":e<g[u]}),children:"$".concat(e.toLocaleString())},e)}))})}),Object(a.jsx)(d,{setShowStep:W})]})})},_=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],b=Object(n.useState)(0),j=Object(i.a)(b,2),d=j[0],h=j[1];return Object(a.jsx)("div",{className:"game",children:s?Object(a.jsx)(O,{setGameStart:c,setGameOver:u,setScore:h}):Object(a.jsx)(m,{setGameStart:c,gameOver:l,score:d})})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(a.jsx)(_,{}),document.getElementById("root")),p()}],[[17,1,2]]]);
//# sourceMappingURL=main.67715ddf.chunk.js.map