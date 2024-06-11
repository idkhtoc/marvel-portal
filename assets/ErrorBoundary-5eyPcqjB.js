var G=Object.defineProperty;var W=(n,s,o)=>s in n?G(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o;var A=(n,s,o)=>(W(n,typeof s!="symbol"?s+"":s,o),o);import{R as f,a as S,r as d,j as C,S as y}from"./index-DA4AbAyB.js";import{E as w}from"./ErrorMessage-DXRTcyHz.js";import{P as T}from"./MarvelService-D-f8CMb0.js";function O(){return O=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var t in o)({}).hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},O.apply(null,arguments)}function j(n,s){if(n==null)return{};var o={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(s.indexOf(t)>=0)continue;o[t]=n[t]}return o}function M(n,s){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},M(n,s)}function P(n,s){n.prototype=Object.create(s.prototype),n.prototype.constructor=n,M(n,s)}function X(n,s){return n.classList?!!s&&n.classList.contains(s):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+s+" ")!==-1}function q(n,s){n.classList?n.classList.add(s):X(n,s)||(typeof n.className=="string"?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s))}function $(n,s){return n.replace(new RegExp("(^|\\s)"+s+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function z(n,s){n.classList?n.classList.remove(s):typeof n.className=="string"?n.className=$(n.className,s):n.setAttribute("class",$(n.className&&n.className.baseVal||"",s))}const k={disabled:!1},R=f.createContext(null);var V=function(s){return s.scrollTop},b="unmounted",E="exited",m="entering",N="entered",_="exiting",h=function(n){P(s,n);function s(t,r){var e;e=n.call(this,t,r)||this;var i=r,a=i&&!i.isMounting?t.enter:t.appear,l;return e.appearStatus=null,t.in?a?(l=E,e.appearStatus=m):l=N:t.unmountOnExit||t.mountOnEnter?l=b:l=E,e.state={status:l},e.nextCallback=null,e}s.getDerivedStateFromProps=function(r,e){var i=r.in;return i&&e.status===b?{status:E}:null};var o=s.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(r){var e=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==m&&i!==N&&(e=m):(i===m||i===N)&&(e=_)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var r=this.props.timeout,e,i,a;return e=i=a=r,r!=null&&typeof r!="number"&&(e=r.exit,i=r.enter,a=r.appear!==void 0?r.appear:i),{exit:e,enter:i,appear:a}},o.updateStatus=function(r,e){if(r===void 0&&(r=!1),e!==null)if(this.cancelNextCallback(),e===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this);i&&V(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:b})},o.performEnter=function(r){var e=this,i=this.props.enter,a=this.context?this.context.isMounting:r,l=this.props.nodeRef?[a]:[S.findDOMNode(this),a],u=l[0],p=l[1],c=this.getTimeouts(),v=a?c.appear:c.enter;if(!r&&!i||k.disabled){this.safeSetState({status:N},function(){e.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:m},function(){e.props.onEntering(u,p),e.onTransitionEnd(v,function(){e.safeSetState({status:N},function(){e.props.onEntered(u,p)})})})},o.performExit=function(){var r=this,e=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:S.findDOMNode(this);if(!e||k.disabled){this.safeSetState({status:E},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:_},function(){r.props.onExiting(a),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:E},function(){r.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(r,e){e=this.setNextCallback(e),this.setState(r,e)},o.setNextCallback=function(r){var e=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,e.nextCallback=null,r(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(r,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=l[0],p=l[1];this.props.addEndListener(u,p)}r!=null&&setTimeout(this.nextCallback,r)},o.render=function(){var r=this.state.status;if(r===b)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=j(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement(R.Provider,{value:null},typeof i=="function"?i(r,a):f.cloneElement(f.Children.only(i),a))},s}(f.Component);h.contextType=R;h.propTypes={};function g(){}h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g};h.UNMOUNTED=b;h.EXITED=E;h.ENTERING=m;h.ENTERED=N;h.EXITING=_;var B=function(s,o){return s&&o&&o.split(" ").forEach(function(t){return q(s,t)})},D=function(s,o){return s&&o&&o.split(" ").forEach(function(t){return z(s,t)})},I=function(n){P(s,n);function s(){for(var t,r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];return t=n.call.apply(n,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(a,l){var u=t.resolveArguments(a,l),p=u[0],c=u[1];t.removeClasses(p,"exit"),t.addClass(p,c?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(a,l)},t.onEntering=function(a,l){var u=t.resolveArguments(a,l),p=u[0],c=u[1],v=c?"appear":"enter";t.addClass(p,v,"active"),t.props.onEntering&&t.props.onEntering(a,l)},t.onEntered=function(a,l){var u=t.resolveArguments(a,l),p=u[0],c=u[1],v=c?"appear":"enter";t.removeClasses(p,v),t.addClass(p,v,"done"),t.props.onEntered&&t.props.onEntered(a,l)},t.onExit=function(a){var l=t.resolveArguments(a),u=l[0];t.removeClasses(u,"appear"),t.removeClasses(u,"enter"),t.addClass(u,"exit","base"),t.props.onExit&&t.props.onExit(a)},t.onExiting=function(a){var l=t.resolveArguments(a),u=l[0];t.addClass(u,"exit","active"),t.props.onExiting&&t.props.onExiting(a)},t.onExited=function(a){var l=t.resolveArguments(a),u=l[0];t.removeClasses(u,"exit"),t.addClass(u,"exit","done"),t.props.onExited&&t.props.onExited(a)},t.resolveArguments=function(a,l){return t.props.nodeRef?[t.props.nodeRef.current,a]:[a,l]},t.getClassNames=function(a){var l=t.props.classNames,u=typeof l=="string",p=u&&l?l+"-":"",c=u?""+p+a:l[a],v=u?c+"-active":l[a+"Active"],F=u?c+"-done":l[a+"Done"];return{baseClassName:c,activeClassName:v,doneClassName:F}},t}var o=s.prototype;return o.addClass=function(r,e,i){var a=this.getClassNames(e)[i+"ClassName"],l=this.getClassNames("enter"),u=l.doneClassName;e==="appear"&&i==="done"&&u&&(a+=" "+u),i==="active"&&r&&V(r),a&&(this.appliedClasses[e][i]=a,B(r,a))},o.removeClasses=function(r,e){var i=this.appliedClasses[e],a=i.base,l=i.active,u=i.done;this.appliedClasses[e]={},a&&D(r,a),l&&D(r,l),u&&D(r,u)},o.render=function(){var r=this.props;r.classNames;var e=j(r,["classNames"]);return f.createElement(h,O({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},s}(f.Component);I.defaultProps={classNames:""};I.propTypes={};function H(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function L(n,s){var o=function(e){return s&&d.isValidElement(e)?s(e):e},t=Object.create(null);return n&&d.Children.map(n,function(r){return r}).forEach(function(r){t[r.key]=o(r)}),t}function J(n,s){n=n||{},s=s||{};function o(p){return p in s?s[p]:n[p]}var t=Object.create(null),r=[];for(var e in n)e in s?r.length&&(t[e]=r,r=[]):r.push(e);var i,a={};for(var l in s){if(t[l])for(i=0;i<t[l].length;i++){var u=t[l][i];a[t[l][i]]=o(u)}a[l]=o(l)}for(i=0;i<r.length;i++)a[r[i]]=o(r[i]);return a}function x(n,s,o){return o[s]!=null?o[s]:n.props[s]}function Q(n,s){return L(n.children,function(o){return d.cloneElement(o,{onExited:s.bind(null,o),in:!0,appear:x(o,"appear",n),enter:x(o,"enter",n),exit:x(o,"exit",n)})})}function Y(n,s,o){var t=L(n.children),r=J(s,t);return Object.keys(r).forEach(function(e){var i=r[e];if(d.isValidElement(i)){var a=e in s,l=e in t,u=s[e],p=d.isValidElement(u)&&!u.props.in;l&&(!a||p)?r[e]=d.cloneElement(i,{onExited:o.bind(null,i),in:!0,exit:x(i,"exit",n),enter:x(i,"enter",n)}):!l&&a&&!p?r[e]=d.cloneElement(i,{in:!1}):l&&a&&d.isValidElement(u)&&(r[e]=d.cloneElement(i,{onExited:o.bind(null,i),in:u.props.in,exit:x(i,"exit",n),enter:x(i,"enter",n)}))}}),r}var Z=Object.values||function(n){return Object.keys(n).map(function(s){return n[s]})},K={component:"div",childFactory:function(s){return s}},U=function(n){P(s,n);function s(t,r){var e;e=n.call(this,t,r)||this;var i=e.handleExited.bind(H(e));return e.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},e}var o=s.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},s.getDerivedStateFromProps=function(r,e){var i=e.children,a=e.handleExited,l=e.firstRender;return{children:l?Q(r,a):Y(r,i,a),firstRender:!1}},o.handleExited=function(r,e){var i=L(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(e),this.mounted&&this.setState(function(a){var l=O({},a.children);return delete l[r.key],{children:l}}))},o.render=function(){var r=this.props,e=r.component,i=r.childFactory,a=j(r,["component","childFactory"]),l=this.state.contextValue,u=Z(this.state.children).map(i);return delete a.appear,delete a.enter,delete a.exit,e===null?f.createElement(R.Provider,{value:l},u):f.createElement(R.Provider,{value:l},f.createElement(e,a,u))},s}(f.Component);U.propTypes={};U.defaultProps=K;const it=(n,s,o)=>{switch(n){case"waiting":return C.jsx(y,{});case"loading":return o?C.jsx(s,{}):C.jsx(y,{});case"confirmed":return C.jsx(s,{});case"error":return C.jsx(w,{});default:throw new Error("Unexpected process state")}};class tt extends d.Component{constructor(){super(...arguments);A(this,"state",{error:!1})}componentDidCatch(){this.setState({error:!0})}render(){return this.state.error?C.jsx(w,{}):this.props.children}}tt.propTypes={children:T.oneOfType([T.arrayOf(T.node),T.node]).isRequired};export{I as C,tt as E,U as T,it as s};
