(this.webpackJsonphtml=this.webpackJsonphtml||[]).push([[0],{172:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),a=n(30),r=n.n(a),i=(n(64),n(18)),c=n(19),u=n(51),l=n(52),d=n(57),E=n(53),g=n(58),O=(n(31),n(54)),N=n.n(O);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var _,b=function(e){e.addDebugMessage,e.debugMessages,e.content;var t=e.defaultValue,n=e.isReadOnly,o=void 0!==n&&n,a=e.modules,r=void 0===a?{}:a,c=e.onChange,u=e.onChangeSelection,l=e.onFocus,d=e.onBlur,E=e.onKeyPress,g=e.onKeyDown,O=e.onKeyUp,_=e.onQuillRef,b=e.style;return s.a.createElement(s.a.Fragment,null,s.a.createElement(N.a,{defaultValue:t,modules:o?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{toolbar:!1}):r,onChange:c,onChangeSelection:u,onFocus:l,onBlur:d,onKeyPress:E,onKeyDown:g,onKeyUp:O,readOnly:o,ref:function(e){_(e)},style:b}))};n(4);!function(e){e.DOCUMENT_EVENT_LISTENER_ADDED="DOCUMENT_EVENT_LISTENER_ADDED",e.DOCUMENT_EVENT_LISTENER_REMOVED="DOCUMENT_EVENT_LISTENER_REMOVED",e.WINDOW_EVENT_LISTENER_ADDED="WINDOW_EVENT_LISTENER_ADDED",e.WINDOW_EVENT_LISTENER_REMOVED="WINDOW_EVENT_LISTENER_REMOVED",e.QUILL_READY="QUILL_READY",e.GET_CONTENT="GET_CONTENT",e.SET_CONTENT="SET_CONTENT",e.CONTENT_CHANGED="CONTENT_CHANGED",e.UNABLE_TO_ADD_EVENT_LISTENER="UNABLE_TO_ADD_EVENT_LISTENER",e.COMPONENT_MOUNTED="COMPONENT_MOUNTED",e.ON_CHANGE_SELECTION="ON_CHANGE_SELECTION",e.ON_FOCUS="ON_FOCUS",e.ON_BLUR="ON_BLUR",e.ON_KEY_PRESS="ON_KEY_PRESS",e.ON_KEY_DOWN="ON_KEY_DOWN",e.ON_KEY_UP="ON_KEY_UP"}(_||(_={}));var h=n(55),f=n.n(h),p=n(56),T=n.n(p);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var M,w=n(170).detect;!function(e){e.DELTA="DELTA",e.HTML="HTML"}(M||(M={}));var m=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(E.a)(t).call(this,e))).quillRef=null,n.componentDidMount=function(){n.setState({browser:w(),debugMessages:[].concat(Object(c.a)(n.state.debugMessages),["componentDidMount"])},(function(){try{n.sendMessage({instruction:_.QUILL_READY})}catch(e){n.addDebugMessage(e)}document&&(document.addEventListener("message",n.handleMessage),n.addDebugMessage("set document listeners"),n.sendMessage({instruction:_.DOCUMENT_EVENT_LISTENER_ADDED})),window&&(window.addEventListener("message",n.handleMessage),n.addDebugMessage("setting Window"),n.sendMessage({instruction:_.WINDOW_EVENT_LISTENER_ADDED})),document||window||n.sendMessage({error:"UNABLE_TO_ADD_EVENT_LISTENER"})}))},n.componentDidUpdate=function(e,t){var o=n.state,s=o.browser,a=o.debugMessages,r=o.isDesktopBrowser;a!==t.debugMessages&&console.log(a),T()(s,t.browser)||n.setState({isDesktopBrowser:n.isDesktopBrowser()},(function(){console.log(n.state)})),r&&!t.isDesktopBrowser&&n.setState({doShowQuillComponentDebugMessages:!0,height:300})},n.onQuillRef=function(e){var t=n.state.isReadOnly;null===n.quillRef&&(n.quillRef=e,t||n.setQuillContainerHeight(n.quillRef))},n.setQuillContainerHeight=function(e){try{var t=e.editor.theme.modules.toolbar.container.clientHeight,o=f()(".ql-container")[0];o.style&&(o.style.height="".concat(Math.floor(n.state.height-t-1),"px"))}catch(s){n.addDebugMessage(s)}},n.componentWillUnmount=function(){document&&(document.removeEventListener("message",n.handleMessage),n.sendMessage({instruction:_.DOCUMENT_EVENT_LISTENER_REMOVED})),window&&(window.removeEventListener("message",n.handleMessage),n.sendMessage({instruction:_.WINDOW_EVENT_LISTENER_REMOVED}))},n.addDebugMessage=function(e){"object"===typeof e?(n.addDebugMessage("STRINGIFIED"),n.setState({debugMessages:[].concat(Object(c.a)(n.state.debugMessages),[JSON.stringify(e,null,4)])})):n.setState({debugMessages:[].concat(Object(c.a)(n.state.debugMessages),[e])})},n.handleMessage=function(e){n.addDebugMessage(e.data);try{n.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state,{},e.data))}catch(t){n.addDebugMessage({error:JSON.stringify(t)})}},n.sendMessage=function(e){window.ReactNativeWebView&&(window.ReactNativeWebView.postMessage(JSON.stringify(e)),console.log("sendMessage  ",JSON.stringify(e)))},n.onChange=function(e,t,o,s){s.getContents(),n.sendMessage({instruction:_.CONTENT_CHANGED,payload:{html:s.getHTML(),delta:s.getContents(),text:s.getText(),source:o,editor:s}})},n.onChangeSelection=function(e,t,o){n.sendMessage({instruction:_.ON_CHANGE_SELECTION,payload:{range:e,selection:o.getSelection(),html:o.getHTML(),delta:o.getContents(),text:o.getText(),source:t,editor:o}})},n.onFocus=function(e,t,o){n.sendMessage({instruction:_.ON_FOCUS,payload:{range:e,source:t,editor:o}})},n.onBlur=function(e,t,o){n.sendMessage({instruction:_.ON_BLUR,payload:{previousRange:e,source:t,editor:o}})},n.onKeyPress=function(e){n.sendMessage({instruction:_.ON_KEY_PRESS,payload:{event:e}})},n.onKeyDown=function(e){n.sendMessage({instruction:_.ON_KEY_DOWN,payload:{event:e}})},n.onKeyUp=function(e){n.sendMessage({instruction:_.ON_KEY_UP,payload:{event:e}})},n.shouldRenderQuillComponentView=function(){var e=n.state.isReadOnly,t=n.isDesktopBrowser();return null!==e||t},n.isDesktopBrowser=function(){return!!["windows"].find((function(e){var t,o;return null===(t=n.state.browser)||void 0===t?void 0:null===(o=t.os)||void 0===o?void 0:o.toLowerCase().includes(e)}))},n.state={backgroundColor:"aliceblue",browser:null,debugMessages:["test message"],doShowQuillComponentDebugMessages:!1,defaultValue:{ops:[{insert:"Gandalf",attributes:{bold:!0}},{insert:" the "},{insert:"Grey",attributes:{color:"#ccc"}}]},content:"",delta:[],height:300,html:"",isDesktopBrowser:!1,isReadOnly:null,modules:{},toolbarHeight:0},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.backgroundColor,n=e.content,o=e.debugMessages,a=e.defaultValue,r=e.doShowQuillComponentDebugMessages,i=e.height,c=e.isReadOnly;e.toolbarHeight;return s.a.createElement(s.a.Fragment,null,this.shouldRenderQuillComponentView()&&s.a.createElement(b,{addDebugMessage:this.addDebugMessage,content:n,debugMessages:o,defaultValue:a,height:i,onChange:this.onChange,onChangeSelection:this.onChangeSelection,onFocus:this.onFocus,onBlur:this.onBlur,onKeyPress:this.onKeyPress,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,isReadOnly:c,onQuillRef:this.onQuillRef,style:{backgroundColor:t,height:"".concat(i,"px")}}),r&&s.a.createElement("div",{style:{backgroundColor:"orange",maxHeight:"200px",overflow:"auto",padding:5,position:"fixed",bottom:0,left:0,right:0,zIndex:15e3},id:"messages"},s.a.createElement("ul",null,o.map((function(e,t){return s.a.createElement("li",{key:t},e)})))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,n){e.exports=n(172)},64:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.4ad91d18.chunk.js.map