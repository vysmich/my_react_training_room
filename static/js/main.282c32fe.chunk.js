(this.webpackJsonpmy_react_training_room=this.webpackJsonpmy_react_training_room||[]).push([[0],[,,,,,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_michal_Desktop_React_learning_my_react_training_room_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),_home_michal_Desktop_React_learning_my_react_training_room_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17),_home_michal_Desktop_React_learning_my_react_training_room_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(22),_home_michal_Desktop_React_learning_my_react_training_room_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_CalculatorApp_scss__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(29),_CalculatorApp_scss__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_CalculatorApp_scss__WEBPACK_IMPORTED_MODULE_5__),_components_CalculatorApp_Screen_Screen__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20),_components_CalculatorApp_KeyPad_KeyPad__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(21),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),CalculatorApp=function(_React$Component){Object(_home_michal_Desktop_React_learning_my_react_training_room_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(CalculatorApp,_React$Component);var _super=Object(_home_michal_Desktop_React_learning_my_react_training_room_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(CalculatorApp);function CalculatorApp(){var _this;Object(_home_michal_Desktop_React_learning_my_react_training_room_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorApp);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={equation:"",result:0},_this.onButtonPress=function(event){var equation=_this.state.equation,pressedButton=event.target.innerHTML;if("C"===pressedButton)return _this.clear();if(pressedButton>="0"&&pressedButton<="9"||"."===pressedButton)equation+=pressedButton;else if(-1!==["+","-","*","/","%"].indexOf(pressedButton))equation+=" "+pressedButton+" ";else if("="===pressedButton)try{var evalResult=eval(equation),result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2);_this.setState({result:result})}catch(error){alert("Invalid Matematical Equation")}else equation=equation.trim(),equation=equation.substr(0,equation.length-1);_this.setState({equation:equation})},_this}return Object(_home_michal_Desktop_React_learning_my_react_training_room_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorApp,[{key:"clear",value:function(){this.setState({equation:"",result:0})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("main",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1",{children:"Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_CalculatorApp_Screen_Screen__WEBPACK_IMPORTED_MODULE_6__.a,{equation:this.state.equation,result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_CalculatorApp_KeyPad_KeyPad__WEBPACK_IMPORTED_MODULE_7__.a,{onButtonPress:this.onButtonPress})]})]})}}]),CalculatorApp}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=CalculatorApp},,,,,function(e,t,_){"use strict";_(1),_(30),_(31);var n=_(0),r=function(e){return Object(n.jsx)("div",{className:"result-screen",children:e.children})},s=(_(32),function(e){return Object(n.jsx)("div",{className:"computation-screen",children:e.children})});t.a=function(e){return Object(n.jsxs)("section",{className:"screen",children:[Object(n.jsx)(r,{children:e.result}),Object(n.jsx)(s,{children:e.equation})]})}},function(e,t,_){"use strict";_(1),_(33),_(34);var n=_(0),r=function(e){return Object(n.jsx)("div",{className:"keypad-row",children:e.children})},s=(_(35),function(e){var t=["btn"];return"undefined"!==typeof e&&"undefined"!==typeof e.type&&t.push("btn--"+e.type),Object(n.jsx)("button",{className:t.join(" "),onClick:e.onButtonPress,children:e.children})});t.a=function(e){return Object(n.jsxs)("section",{className:"keypad",children:[Object(n.jsxs)(r,{children:[Object(n.jsx)(s,{type:"primary",onButtonPress:e.onButtonPress,children:"C"}),Object(n.jsx)(s,{type:"primary",onButtonPress:e.onButtonPress,children:"\u2190"}),Object(n.jsx)(s,{type:"operator",onButtonPress:e.onButtonPress,children:"%"}),Object(n.jsx)(s,{type:"operator",onButtonPress:e.onButtonPress,children:"/"})]}),Object(n.jsxs)(r,{children:[Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"9"}),Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"8"}),Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"7"}),Object(n.jsx)(s,{type:"operator",onButtonPress:e.onButtonPress,children:"*"})]}),Object(n.jsxs)(r,{children:[Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"6"}),Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"5"}),Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"4"}),Object(n.jsx)(s,{type:"operator",onButtonPress:e.onButtonPress,children:"-"})]}),Object(n.jsxs)(r,{children:[Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"3"}),Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"2"}),Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"1"}),Object(n.jsx)(s,{type:"operator",onButtonPress:e.onButtonPress,children:"+"})]}),Object(n.jsxs)(r,{children:[Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"0"}),Object(n.jsx)(s,{onButtonPress:e.onButtonPress,children:"."}),Object(n.jsx)(s,{type:"large",onButtonPress:e.onButtonPress,children:"="})]})]})}},,,,,,function(e,t,_){},,function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},,,,,,,,,function(e,t,_){"use strict";_.r(t);var n=_(1),r=_.n(n),s=_(14),c=_.n(s),o=(_(27),_(6)),i=_(2),a=_(0),l=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress...."})})},j=_(15),u=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress..."})})},h=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress...."})})},p=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress...."})})})},b=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress...."})})},d=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress...."})})},O=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress...."})})},x=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress...."})})},m=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"In progress...."})})},P=_.p+"static/media/gif.63bfff66.gif",E=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:"Home"}),Object(a.jsx)("p",{children:"This page was created for purpose to increase my react skill"}),Object(a.jsx)("p",{children:"For more information or check my code look at my LinkedIn or Github profile"}),Object(a.jsx)("img",{src:P,alt:""}),Object(a.jsx)("a",{href:"https://github.com/vysmich"}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/vysmich/"})]})},B=(_(36),function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("nav",{className:"nav-bar",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/CalculatorApp",children:"Calculator"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/WeatherApp",children:"Actual weather"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/ToDoApp",children:"To do"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/CryptoApp",children:"Cryptocurrency rates"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/SpotifyApp",children:"Spotify"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/SocialApp",children:"Social Network"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/EshopApp",children:"Eshop"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/DasboardApp",children:"Dashboard"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/ChatApp",children:"Chat"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/BlogApp",children:"Blog"})})]})}),Object(a.jsxs)(i.c,{children:[Object(a.jsx)(i.a,{path:"/",exact:!0,children:Object(a.jsx)(E,{})}),Object(a.jsx)(i.a,{path:"/ToDoApp",children:Object(a.jsx)(l,{})}),Object(a.jsx)(i.a,{path:"/CalculatorApp",children:Object(a.jsx)(j.a,{})}),Object(a.jsx)(i.a,{path:"/WeatherApp",children:Object(a.jsx)(u,{})}),Object(a.jsx)(i.a,{path:"/CryptoApp",children:Object(a.jsx)(h,{})}),Object(a.jsx)(i.a,{path:"/SpotifyApp",children:Object(a.jsx)(m,{})}),Object(a.jsx)(i.a,{path:"/SocialApp",children:Object(a.jsx)(p,{})}),Object(a.jsx)(i.a,{path:"/EshopApp",children:Object(a.jsx)(x,{})}),Object(a.jsx)(i.a,{path:"/DasboardApp",children:Object(a.jsx)(b,{})}),Object(a.jsx)(i.a,{path:"/ChatApp",children:Object(a.jsx)(d,{})}),Object(a.jsx)(i.a,{path:"/BlogApp",children:Object(a.jsx)(O,{})})]})]})})}),D=function(){return Object(a.jsx)(B,{})};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}],[[45,1,2]]]);
//# sourceMappingURL=main.282c32fe.chunk.js.map