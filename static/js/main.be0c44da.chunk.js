(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={bg:"style_bg__SIp08",day:"style_day__2XsYS",night:"style_night__1-OEA",planet:"style_planet__1WNGE",sun:"style_sun__2wy5q",show:"style_show__2oUt0",moon:"style_moon__OZe9t",hide:"style_hide__P7Cuo",buttonArea:"style_buttonArea__2NuGS",button:"style_button__1tbq7"}},,,function(e,t,a){e.exports={bg:"style_bg__23KpP",modalBg:"style_modalBg__2fk9T",allModal:"style_allModal__2jfBy",myModal:"style_myModal__346ay",myTop:"style_myTop__11CtL",myAnimation:"style_myAnimation__2Qax5",myAnimation1:"style_myAnimation1__1xVvJ",show:"style_show__os-NF",button:"style_button__UklTK"}},,function(e,t,a){e.exports={container:"style_container__2Kzp1",productArea:"style_productArea__3qroD",product:"style_product__3jvit",input:"style_input__32O4e",cartArea:"style_cartArea__1CPFs",productInCart:"style_productInCart__2jqzK",subtotal:"style_subtotal__3cyim",buttonInCart:"style_buttonInCart__252Nb"}},function(e,t,a){e.exports={wrapper:"Carousel_wrapper__4Q2Ft",item:"Carousel_item__1BCpk",animationShow:"Carousel_animationShow__20XoG",show:"Carousel_show__2WEz2",animationHide:"Carousel_animationHide__3Usd1",hide:"Carousel_hide__aYMRU",dotsWrapper:"Carousel_dotsWrapper__1PW0w",dots:"Carousel_dots__3xwu3",dotShow:"Carousel_dotShow__23q1W"}},,function(e,t,a){e.exports={colorPicker:"style_colorPicker__3liA3",colorName:"style_colorName__1fI5o",colorRange:"style_colorRange__3-9OO",box:"style_box__Jk-o1"}},function(e,t,a){e.exports={background:"style_background__2GbSR",wrapper:"style_wrapper__3y7RH",tooltips:"style_tooltips__2fLSM",top:"style_top__pHPPc",left:"style_left__3Ogu6",right:"style_right__2Fcqj",bottom:"style_bottom__R-vkW"}},,,function(e,t,a){e.exports={HW12:"new12_HW12__3mD3L",tagName:"new12_tagName__kWc37",choice:"new12_choice__XVKEX",content:"new12_content__3C2k_"}},function(e,t,a){e.exports={box:"style_box__wtwdE",unit:"style_unit__1NTia",wrapper:"style_wrapper__rIU_m",score:"style_score__xs9xw"}},,function(e,t,a){e.exports={content:"style_content__16qDY"}},,function(e,t,a){e.exports={HW14:"style_HW14__jbtSx",inline:"style_inline__taW4d"}},function(e,t,a){e.exports={HW15:"style_HW15__36bMx"}},function(e,t,a){e.exports={Gophers:"style_Gophers__25NPe",pink:"style_pink__27s9N"}},,,,,,function(e,t,a){e.exports={done:"style_done__2f8R3",a:"style_a__3Fjqf",b:"style_b__450Vv"}},,,function(e,t,a){e.exports=a(49)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),o=(a(42),a(2)),i=a(6),u=a(1);var m=a(4);var s=a(3),d=a(8);var b=Object(n.createRef)();var p=Object(n.createRef)();var E=(new Date).getFullYear()+1,v=function(){return+new Date("".concat(E,"/01/01"))-+new Date};function f(e){var t=e.name,a=e.rate,n=e.money,c=e.dollar,l=e.onChange,o=c===t?n:n*a;return r.a.createElement("div",null,t,r.a.createElement("input",{"data-testid":"HW10Input",name:t,value:o,onChange:l}))}var _=a(17),g=a.n(_);function j(e){var t=e.name,a=e.color,n=e.value,c=e.onChange;return r.a.createElement("div",{className:g.a.colorPicker},r.a.createElement("div",{className:g.a.colorName},"".concat(a,"(").concat(n,")")),r.a.createElement("div",{className:g.a.colorRange},r.a.createElement("input",{"data-testid":"ColorPicker",min:"0",max:"255",type:"range",name:t,value:n,onChange:c})))}var h=["red","green","blue"];var O=a(21),y=a.n(O),N=[{name:"tag1",content:"lorem 1"},{name:"tag2",content:"lorem 2"},{name:"tag3",content:"lorem 3"},{name:"tag4",content:"lorem 4"}];var k=a(5),C=a.n(k),W=a(34),H=a.n(W);var w=a(26),S=a.n(w);var x=a(27),M=a.n(x);function A(e){var t=e.name,a=e.value,n=e.onChange;return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{"data-testid":"LenthInput",name:t,value:a,type:"number",className:"form-control",onChange:n}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon2"},t)))}var I=[{unit:"mm",rate:1},{unit:"cm",rate:10},{unit:"m",rate:1e3},{unit:"km",rate:1e6}],T=function(e,t,a,n){return e===t.unit?a:a*n/t.rate};var R=function(){return~~(10*Math.random())},P=R();var D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return~~(Math.random()*(e-t+1))+t};a(43);var B=a(22),L=a.n(B),F=a(28),q=a.n(F);function G(e){var t=Object(n.useState)(Boolean(Math.round(Math.random()))),a=Object(u.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var e;return function t(){l((function(e){return!e})),e=setTimeout((function(){t()}),2e3+~~(4e3*Math.random()))}(),function(){clearTimeout(e)}}),[]),r.a.createElement("div",{className:"".concat(q.a.Gophers," ").concat(c?q.a.pink:""),onClick:function(){e.setScore(c?1:-1),l(!1)}},c?"G":"-")}var U=Object(n.createRef)(),K=function(){return{min:1,max:1e3,answer:2+~~(998*Math.random()),correct:0}};var J=Object(n.createRef)(),Q=function(){return{answer:Object(m.a)(Array(10).keys()).sort((function(){return Math.random()-.5})).slice(0,4).join(""),correct:!1,replyList:[]}};var X=a(36),Y=a(14),$=a.n(Y);function z(e){var t=Object(n.createRef)(),a=e.name,c=e.price;return r.a.createElement("div",{className:$.a.product},r.a.createElement("div",null,a),r.a.createElement("div",null,"$",c),r.a.createElement("form",{"data-testid":"form",name:a,onSubmit:function(a){a.preventDefault(),e.onSubmit(+t.current.value+e.amount),t.current.value=""}},r.a.createElement("input",{"data-testid":"input",className:$.a.input,name:a,ref:t,type:"number",placeholder:"\u6578\u91cf",min:"0",max:"99"}),r.a.createElement("button",{className:"btn btn-outline-primary btn-sm"},"\u52a0\u5165\u8cfc\u7269\u8eca")))}var V=a(9),Z=a.n(V);var ee=a(12),te=a.n(ee);function ae(e){var t,a=e.header,n=e.position,c=e.isAnimation,l=e.children,o=e.onClose;return r.a.createElement("div",{className:te.a.modalBg},r.a.createElement("div",{className:C()(te.a.allModal,(t={},Object(s.a)(t,te.a.myModal,"center"===n),Object(s.a)(t,te.a.myTop,"top"===n),Object(s.a)(t,te.a.myAnimation,c),Object(s.a)(t,te.a.myAnimation1,c),t))},a&&r.a.createElement("h2",null,a),r.a.createElement("div",{"data-testid":"content"},l),r.a.createElement("button",{className:"btn btn-primary btn-block",onClick:o},"\u95dc\u9589")))}var ne="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ut vel, itaque, pariatur porro ad nihil, tempore nostrum enim natus illo aut voluptatibus. Perferendis maxime fuga doloremque magni, quidem error.";var re=a(18),ce=a.n(re),le=function(e){var t=e.at,a=e.text,n=e.children;return r.a.createElement("span",{className:ce.a.wrapper},n,r.a.createElement("div",{className:C()(ce.a.tooltips,ce.a[t])},a))};var oe=a(15),ie=a.n(oe);function ue(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(0),i=Object(u.a)(o,2),d=i[0],b=i[1],p=Object(n.useState)(e.children),E=Object(u.a)(p,2),v=E[0],f=E[1];return Object(n.useEffect)((function(){var t;return function(){var a=e.time;t=setTimeout((function(){l(!0),b((function(e){return(e+1)%v.length})),setTimeout((function(){f((function(e){return[].concat(Object(m.a)(e.slice(1)),Object(m.a)(e.slice(0,1)))})),l(!1)}),a/3)}),a)}(),function(){clearTimeout(t)}}),[v,e]),r.a.createElement("div",{className:ie.a.wrapper},v.map((function(e,t){var a;return r.a.createElement("div",{key:t,className:C()(ie.a.item,(a={},Object(s.a)(a,ie.a.animationHide,0===t&&c),Object(s.a)(a,ie.a.animationShow,1===t&&c),a))},e)})),e.showDots&&r.a.createElement("div",{className:ie.a.dotsWrapper},Object(m.a)(v.keys()).map((function(e){return r.a.createElement("div",{key:e,className:C()(ie.a.dots,Object(s.a)({},ie.a.dotShow,e===d))})}))))}var me=a(24),se=a.n(me);var de={HW1:function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){c(a+1)}},"counter: ",a))},HW2:function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){c(a+1),s([a+1].concat(Object(m.a)(i)))}},"submit"),r.a.createElement("ul",null,i.map((function(e){return r.a.createElement("li",{key:e},e)}))))},HW3:function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(u.a)(l,2),i=o[0],m=o[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){c(a+1),m(i+a+1)}},"add it"),r.a.createElement("div",null,i))},HW4:function(){var e=Object(n.useState)({cm:"",kg:"",bmi:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target;c(Object(d.a)(Object(d.a)({},a),{},Object(s.a)({},t.name,t.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\u8eab\u9ad8: ",r.a.createElement("input",{"data-testid":"cm",name:"cm",value:a.cm,onChange:l})),r.a.createElement("div",null,"\u9ad4\u91cd: ",r.a.createElement("input",{"data-testid":"kg",name:"kg",value:a.kg,onChange:l})),r.a.createElement("button",{onClick:function(){c(Object(d.a)(Object(d.a)({},a),{},{bmi:Math.round(a.kg/a.cm/a.cm*1e6)/100}))}},"\u8a08\u7b97!"),r.a.createElement("div",null,"BMI: ",a.bmi," "))},HW5:function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=b.current.value;c([t].concat(Object(m.a)(a))),b.current.value=""}},"todo: ",r.a.createElement("input",{"data-testid":"input",ref:b})),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e},e)}))))},HW6:function(){var e=this,t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],l=a[1],o=function(e){l([].concat(Object(m.a)(c.slice(0,e)),Object(m.a)(c.slice(e+1))))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=p.current.value;l([t].concat(Object(m.a)(c))),p.current.value=""}},"todo: ",r.a.createElement("input",{"data-testid":"input",ref:p})),r.a.createElement("ul",null,c.map((function(t,a){return r.a.createElement("li",{key:t},t,r.a.createElement("button",{"data-testid":"button".concat(a),onClick:o.bind(e,a)},"remove"))}))))},HW7:function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=function(){fetch("https://randomuser.me/api/?results=25").then((function(e){return e.json()})).then((function(e){var t=e.results;c(t)}))};return Object(n.useEffect)((function(){l()}),[]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){l()}},"Update List"),r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"picture"),r.a.createElement("th",null,"name"),r.a.createElement("th",null,"gender"),r.a.createElement("th",null,"email"),r.a.createElement("th",null,"age"),r.a.createElement("th",null,"phone"),r.a.createElement("th",null,"country"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.login.uuid},r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.last})),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob.age),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.location.country))}))))))},HW8:function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,Object(m.a)(Array(10).keys()).slice(1).map((function(e){return r.a.createElement("button",{key:e,className:"btn btn-primary",onClick:function(){return function(e){c(a+e)}(e)}},e)}))),r.a.createElement("div",{"data-testid":"sum"},a))},HW9:function(){var e=Object(n.useState)(v()),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(v())}),1e3);return function(){clearInterval(e)}}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"\u96e22021\u8de8\u5e74\u9084\u6709: ",function(e){return"\n      ".concat(~~(e/864e5),"\u5929\n      ").concat(~~(e/36e5)%24,"\u6642\n      ").concat(~~(e/6e4)%60,"\u5206\n      ").concat(~~(e/1e3)%60,"\u79d2\n    ")}(a)))},HW10:function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("ntd"),o=Object(u.a)(l,2),i=o[0],m=o[1],s=function(e){var t=e.target;c(t.value),m(t.name)};return r.a.createElement("div",null,r.a.createElement(f,{dollar:i,money:a,name:"ntd",rate:30,onChange:s}),r.a.createElement(f,{dollar:i,money:a,name:"usd",rate:1/30,onChange:s}))},HW11:function(){var e=Object(n.useState)({red:128,green:128,blue:128}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target;c(Object(d.a)(Object(d.a)({},a),{},Object(s.a)({},t.name,+t.value)))},o=a.red,i=a.green,m=a.blue;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:g.a.box,style:{backgroundColor:"rgb(".concat(o,", ").concat(i,", ").concat(m,")")}})),h.map((function(e){return r.a.createElement(j,Object.assign({key:e,name:e},{color:e,value:a[e],onChange:l}))})))},HW12:function(){var e=this,t=Object(n.useState)(0),a=Object(u.a)(t,2),c=a[0],l=a[1],o=function(e){l(e)};return r.a.createElement("div",{className:y.a.HW12},N.map((function(t,a){return r.a.createElement("div",{key:a,className:"".concat(y.a.tagName," ").concat(a===c?y.a.choice:""),onClick:o.bind(e,a)},t.name)})),r.a.createElement("div",{className:y.a.content},N[c].content))},HW13:function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([{id:Math.random(),content:"\u5f85\u8fa6\u4e8b\u98051",done:!1},{id:Math.random(),content:"\u5f85\u8fa6\u4e8b\u98052",done:!1},{id:Math.random(),content:"\u5f85\u8fa6\u4e8b\u98053",done:!0}]),o=Object(u.a)(l,2),i=o[0],d=o[1];return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.trim()&&(d([{id:Math.random(),content:a,done:!1}].concat(Object(m.a)(i))),c(""))},"data-testid":"form"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{"data-testid":"input",type:"text",value:a,className:"form-control",onChange:function(e){c(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{"data-testid":"button",className:"btn btn-outline-secondary"},"save")))),r.a.createElement("ul",{className:"list-group"},i.map((function(e){return r.a.createElement("li",{key:e.id,onClick:function(){return function(e){var t=Object(m.a)(i),a=t.findIndex((function(t){return t.id===e.id}));t[a].done=!e.done,d(t)}(e)},className:C()("list-group-item",Object(s.a)({},H.a.done,e.done))},e.content)}))))},HW14:function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],m=o[1],s=Object(n.useState)(new RegExp("")),d=Object(u.a)(s,2),b=d[0],p=d[1];return Object(n.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit=100").then((function(e){return e.json()})).then((function(e){var t=e.results;c(t)}))}),[]),r.a.createElement("div",{className:"container ".concat(S.a.HW14)},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"keyword")),r.a.createElement("input",{"data-testid":"input",className:"form-control",value:i,placeholder:"name...",onChange:function(e){var t=e.target;m(t.value),p(new RegExp(t.value,"i"))}})),a.filter((function(e){return b.test(e.name)})).map((function(e){return r.a.createElement("div",{className:S.a.inline,key:e.name},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/",""),".png"),alt:e.name}),r.a.createElement("div",{"data-testid":e.name},e.name))})))},HW15:function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("mm"),o=Object(u.a)(l,2),i=o[0],m=o[1],s=Object(n.useState)(1),d=Object(u.a)(s,2),b=d[0],p=d[1];return r.a.createElement("div",{className:"".concat(M.a.container," ").concat(M.a.HW15)},r.a.createElement("div",null,I.map((function(e){return r.a.createElement(A,{key:e.unit,name:e.unit,value:T(i,e,a,b),onChange:function(t){return function(e,t,a){var n=a.target;m(e),p(t),c(n.value)}(e.unit,e.rate,t)}})}))))},HW16:function(){var e=Object(n.useState)({correct:0,wrong:0}),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h3",null,P),r.a.createElement("input",{"data-testid":"input",type:"text",value:"",onChange:function(e){var t=+e.target.value===P?"correct":"wrong";P=R(),c(Object(d.a)(Object(d.a)({},a),{},Object(s.a)({},t,a[t]+1)))}}),r.a.createElement("div",{"data-testid":"wrong"},"wrong: ",a.wrong),r.a.createElement("div",{"data-testid":"correct"},"correct: ",a.correct))},HW17:function(){var e=Object(n.useState)(D(9)),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e;return function t(){c(D(9)),e=setTimeout((function(){t()}),D(1e3,500))}(),function(){clearTimeout(e)}}),[]),r.a.createElement("div",{"data-testid":"num"},a)},HW18:function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){var e;return function t(){e=setTimeout((function(){m((function(e){return!e})),t()}),500+~~(1500*Math.random()))}(),function(){clearTimeout(e)}}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,i?"Q":"-"),r.a.createElement("div",{"data-testid":"score"},"score: ",a),r.a.createElement("input",{"data-testid":"input",value:"",type:"text",onChange:function(e){var t=e.target.value,n=i&&"Q"===t.toUpperCase();c(a+(n?1:-1)),m(!1)}}))},HW19:function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=function(e){c(a+e)};return r.a.createElement("div",{className:L.a.HW19},r.a.createElement("h1",{"data-testid":L.a.score,className:L.a.score},a),r.a.createElement("div",{className:L.a.wrapper},Object(m.a)(Array(9).keys()).map((function(e){return r.a.createElement(G,{key:e,setScore:l})}))))},HW20:function(){var e=Object(n.useState)(K()),t=Object(u.a)(e,2),a=t[0],c=a.min,l=a.max,o=a.answer,i=a.correct,m=t[1];return r.a.createElement("div",null,r.a.createElement("h2",{"data-testid":"range"},"\u73fe\u5728\u7bc4\u570d: ",c," ~ ",l),r.a.createElement("form",{"data-testid":"form",className:"input-group mb-3",onSubmit:function(e){e.preventDefault();var t=new FormData(e.target),a=parseInt(t.get("guess")),n=o>a?"min":o<a?"max":"correct";m((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},n,a))})),U.current.value=""}},r.a.createElement("input",{"data-testid":"input",name:"guess",disabled:!1,ref:U})),r.a.createElement("h2",null,!!i&&r.a.createElement("div",{"data-testid":"answer"},"\u7b54\u5c0d\u4e86\uff01\u7b54\u6848\u5c31\u662f",o,r.a.createElement("button",{onClick:function(){m(K())}},"\u518d\u4f86\u4e00\u5c40"))))},HW21:function(){var e=Object(n.useState)(Q()),t=Object(u.a)(e,2),a=t[0],c=a.answer,l=a.correct,o=a.replyList,i=t[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"\u731c\u6578\u5b57"),r.a.createElement("div",null,"1. \u4e00\u9032\u5230\u904a\u6232\u96fb\u8166\u96a8\u6a5f\u7522\u751f4\u4f4d\u4e0d\u91cd\u8907\u6578\u5b57"),r.a.createElement("div",null,"2. \u4f7f\u7528\u8005\u9001\u51fa\u7b54\u6848\uff0c\u82e5\u4e0d\u7b26\u5408\u300c\u4e0d\u91cd\u89074\u4f4d\u6578\u5b57\u300d\u5247\u8df3\u932f\u8aa4\u8a0a\u606f"),r.a.createElement("div",null,"3. \u9001\u51fa\u7684\u7b54\u6848\u8ddf\u6b63\u78ba\u7b54\u6848\u6bd4\u8f03\uff0c\u4f4d\u7f6e\u4e00\u6a23\u5247A\uff0c\u4f4d\u7f6e\u4e0d\u540c\u5247B"),r.a.createElement("div",null,"4. \u6703\u7d2f\u7a4d\u904e\u53bb\u731c\u904e\u7684\u7b54\u6848\u8207\u7d50\u679c"),r.a.createElement("div",null,"5. \u5982\u679c\u731c\u5230 4A \u5247\u904a\u6232\u7d50\u675f\uff0c\u4e26\u53ef\u53e6\u958b\u65b0\u5c40"),r.a.createElement("form",{"data-testid":"form",onSubmit:function(e){e.preventDefault();var t=J.current.value.trim();if(function(e){return 4!==e.length||(!!isNaN(Number(e))||4!==Object(m.a)(new Set(e)).length)}(t))return J.current.value="",alert("\u683c\u5f0f\u4e0d\u6b63\u78ba");for(var a=0,n=0,r=0;r<4;r++)for(var l=0;l<4;l++)t[r]===c[l]&&(r===l?a++:n++);i((function(e){return Object(d.a)(Object(d.a)({},e),{},{replyList:[{id:Math.random(),result:"".concat(t,": ").concat(a,"A").concat(n,"B")}].concat(Object(m.a)(o)),correct:t===c})})),J.current.value=""}},r.a.createElement("input",{"data-testid":"input",disabled:l,ref:J}),r.a.createElement("button",null,"\u731c!")),r.a.createElement("ul",{"data-testid":"resultList"},o.map((function(e,t){return r.a.createElement("li",{"data-testid":"result".concat(t),key:t},e.result)}))),r.a.createElement("div",null,l&&r.a.createElement("div",{"data-testid":"4A"},"\u7b54\u5c0d\u4e86\uff01\u904a\u6232\u7d50\u675f\uff0c\u4f60\u8981\u91cd\u65b0\u4e00\u5c40\u55ce\uff1f",r.a.createElement("button",{onClick:function(){i(Q())}},"\u597d!"))))},HW22:function(){var e=this,t=Object(n.useState)([{id:1,name:"\u6a58\u5b50",price:20,amount:0},{id:2,name:"\u84ee\u9727",price:30,amount:0},{id:3,name:"\u54c8\u871c\u74dc",price:40,amount:0},{id:4,name:"\u860b\u679c",price:50,amount:0},{id:5,name:"\u8461\u8404\u67da",price:15,amount:0}]),a=Object(u.a)(t,2),c=a[0],l=a[1],o=function(e,t){var a=Object(m.a)(c),n=a.findIndex((function(t){return t.id===e}));a[n].amount=t,l(a)},i=c.map((function(e){return e.price*e.amount})).reduce((function(e,t){return e+t}));return r.a.createElement("div",{className:$.a.container},r.a.createElement("div",{className:$.a.productArea},c.map((function(t,a){return r.a.createElement(z,{key:a,name:t.name,price:t.price,amount:t.amount,index:a,onSubmit:o.bind(e,t.id)})}))),r.a.createElement("div",{className:$.a.cartArea},c.filter((function(e){return e.amount>0})).map((function(t,a){var n=t.id,c=t.name,l=t.amount,i=Object(X.a)(t,["id","name","amount"]);return r.a.createElement("div",{"data-testid":"subtotal".concat(c),className:$.a.productInCart,key:n},r.a.createElement("span",{className:$.a.subtotal},c," x ",l," = $",i.price*l),r.a.createElement("button",{"data-testid":"".concat(c,"clear"),className:C()($.a.buttonInCart," btn btn-danger btn-sm"),onClick:o.bind(e,n,0)},"clear"),r.a.createElement("button",{"data-testid":"".concat(c,"-1"),className:C()($.a.buttonInCart," btn btn-warning btn-sm"),onClick:o.bind(e,n,l-1)},"-1"))})),!!i&&r.a.createElement("div",null,r.a.createElement("div",null,"==============="),r.a.createElement("div",{"data-testid":"total"},"\u7e3d\u8a08 $",i))))},HW23:function(){var e,t,a,c=Object(n.useState)(!0),l=Object(u.a)(c,2),o=l[0],i=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C()(Z.a.bg,(e={},Object(s.a)(e,Z.a.day,o),Object(s.a)(e,Z.a.night,!o),e))},r.a.createElement("div",null,r.a.createElement("img",{className:C()(Z.a.planet,Z.a.sun,(t={},Object(s.a)(t,Z.a.show,o),Object(s.a)(t,Z.a.hide,!o),t)),src:"https://img.icons8.com/cotton/256/000000/sun--v1.png",alt:"day"})),r.a.createElement("div",null,r.a.createElement("img",{className:C()(Z.a.planet,Z.a.moon,(a={},Object(s.a)(a,Z.a.show,!o),Object(s.a)(a,Z.a.hide,o),a)),src:"https://img.icons8.com/cotton/256/000000/moon-satellite.png",alt:"night"}))),r.a.createElement("div",{className:Z.a.buttonArea},r.a.createElement("button",{className:C()(Z.a.button,"btn btn-primary"),onClick:function(){i(!o)}},"\u5207\u63db\u6210 ",o?"\u665a\u4e0a":"\u767d\u5929")))},HW25:function(){var e=Object(n.useState)(-1),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:te.a.bg},r.a.createElement("button",{className:C()(te.a.button,"btn btn-primary"),onClick:c.bind(this,0)},"Modal"),0===a&&r.a.createElement(ae,{name:"Modal",position:"center",onClose:c.bind(this,-1)},ne),r.a.createElement("button",{className:C()(te.a.button,"btn btn-primary"),onClick:c.bind(this,1)},"top"),1===a&&r.a.createElement(ae,{name:"top",position:"top",onClose:c.bind(this,-1)},ne),r.a.createElement("button",{className:C()(te.a.button,"btn btn-primary"),onClick:c.bind(this,2)},"header"),2===a&&r.a.createElement(ae,{name:"header",header:"Header",position:"center",onClose:c.bind(this,-1)},ne),r.a.createElement("button",{className:C()(te.a.button,"btn btn-primary"),onClick:c.bind(this,3)},"top + animation"),3===a&&r.a.createElement(ae,{name:"top + animation",isAnimation:!0,onClose:c.bind(this,-1)},ne))},HW26:function(){return r.a.createElement("div",{className:ce.a.background},r.a.createElement("div",null,r.a.createElement(le,{at:"top",text:"\u6211\u5728\u4e0a\u9762"},r.a.createElement("button",{className:"btn btn-primary"},"top")),r.a.createElement(le,{at:"right",text:"text"},r.a.createElement("button",{className:"btn btn-primary"},"right"))),r.a.createElement("div",null,r.a.createElement(le,{at:"left",text:"text"},r.a.createElement("button",{className:"btn btn-primary"},"left")),r.a.createElement(le,{at:"bottom",text:"text"},r.a.createElement("button",{className:"btn btn-primary"},"bottom"))))},HW27:function(){return r.a.createElement("div",null,r.a.createElement(ue,{time:1500,showDots:!0},r.a.createElement("div",{className:se.a.content},"1"),r.a.createElement("div",{className:se.a.content},"2"),r.a.createElement("div",{className:se.a.content},"3")))}};function be(){var e=Object(i.f)().no;return r.a.createElement(de[e])}function pe(){return r.a.createElement("div",null,r.a.createElement("h1",null,"React.js"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW27"},"Carousel")," \u8f2a\u64ad\u5668"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW26"},"Tooltips")," \u63d0\u793a\u6587\u5b57"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW25"},"Modal")," \u4e92\u52d5\u8996\u7a97"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW23"},"SunMoon")," \u5716\u7247\u5207\u63db"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW22"},"Cart")," \u8cfc\u7269\u8eca"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW21"},"1A2B")," \u731c\u6578\u5b57"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW20"},"GuessNum")," \u7d42\u6975\u5bc6\u78bc"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW19"},"Gopher")," \u6253\u5730\u9f20"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW18"},"TwinkklingChar")," \u9583\u720d\u5b57\u6bcd"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW17"},"RandomNum")," \u751f\u6210\u96a8\u6a5f\u6578\u5b57"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW16"},"NumberGame")," \u6253\u6578\u5b57\u904a\u6232"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW15"},"LengthConversion")," \u9577\u5ea6\u8f49\u63db"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW14"},"Pokemon")," \u5bf6\u53ef\u5922\u6293\u53d6\u7be9\u9078"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW13"},"TodoList")," \u4ee3\u8fa6\u4e8b\u9805"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW12"},"Tab")," \u6a19\u7c64"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW11"},"ColorPad")," \u8abf\u8272\u76e4"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW10"},"Currency")," \u8ca8\u5e63\u8f49\u63db"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW9"},"CountDown")," \u5012\u6578\u8a08\u6642\u5668"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW8"},"SumForButton")," \u4e0d\u540c\u6309\u9215\u52a0\u7e3d"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW7"},"PersonTable")," \u6293\u53d6\u8cc7\u6599"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW6"},"RemovableList")," \u5217\u8868\u65b0\u589e\u522a\u9664\u529f\u80fd"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW5"},"ItemList")," \u8f38\u5165\u751f\u6210\u5217\u8868"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW4"},"BMI")," \u8a08\u7b97BMI"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW3"},"CounterSum")," \u6309\u9215\u52a0\u7e3d"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW2"},"CounterList")," \u751f\u6210\u5217\u8868"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{to:"/HW1"},"Counter")," +1\u6309\u9215")))}function Ee(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(pe,null)),r.a.createElement(i.a,{exact:!0,path:"/:no"},r.a.createElement(be,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement("div",null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.be0c44da.chunk.js.map