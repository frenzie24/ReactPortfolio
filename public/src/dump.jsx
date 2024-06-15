const code = `return var sh=Object.definePropertyvar ch=(e,t,n)=>t in e?sh(e,t,enumerable:!0,configurable:!0,writable:!0,value:n):e[t]=nvar Qe=(e,t,n)=>(ch(e,typeof t!=symbol?t+:t,n),n)function sc(e,t)for(var n=0n<t.lengthn++)const r=t[n]if(typeof r!=string&&!Array.isArray(r))for(const l in r)if(l!==default&&!(l in e))const i=Object.getOwnPropertyDescriptor(r,l)i&&Object.defineProperty(e,l,i.get?i:enumerable:!0,get:()=>r[l])return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,value:Module))(function()const t=document.createElement(link).relListif(t&&t.supports&&t.supports(modulepreload))returnfor(const l of document.querySelectorAll(link[rel=modulepreload]))r(l)new MutationObserver(l=>for(const i of l)if(i.type===childList)for(const o of i.addedNodes)o.tagName===LINK&&o.rel===modulepreload&&r(o)).observe(document,childList:!0,subtree:!0)function n(l)const i=return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin===use-credentials?i.credentials=include:l.crossOrigin===anonymous?i.credentials=omit:i.credentials=same-origin,ifunction r(l)if(l.ep)returnl.ep=!0const i=n(l)fetch(l.href,i))()function ya(e)return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,default)?e.default:evar cc=exports:,Ei=,dc=exports:,K license Reactreact.production.min.js Copyright (c) Facebook, Inc. and its affiliates.  This source code is licensed under the MIT license found in the  LICENSE file in the root directory of this source tree. var hl=Symbol.for(react.element),dh=Symbol.for(react.portal),fh=Symbol.for(react.fragment),hh=Symbol.for(react.strict_mode),ph=Symbol.for(react.profiler),mh=Symbol.for(react.provider),vh=Symbol.for(react.context),gh=Symbol.for(react.forward_ref),yh=Symbol.for(react.suspense),wh=Symbol.for(react.memo),xh=Symbol.for(react.lazy),Mu=Symbol.iteratorfunction Sh(e)return e===null||typeof e!=object?null:(e=Mu&&e[Mu]||e[iterator],typeof e==function?e:null)var fc=isMounted:function()return!1,enqueueForceUpdate:function(),enqueueReplaceState:function(),enqueueSetState:function(),hc=Object.assign,pc=function hr(e,t,n)this.props=e,this.context=t,this.refs=pc,this.updater=n||fchr.prototype.isReactComponent=hr.prototype.setState=function(e,t)if(typeof e!=object&&typeof e!=function&&e!=null)throw Error(setState(...): takes an object of state variables to update or a function which returns an object of state variables.)this.updater.enqueueSetState(this,e,t,setState)hr.prototype.forceUpdate=function(e)this.updater.enqueueForceUpdate(this,e,forceUpdate)function mc()mc.prototype=hr.prototypefunction wa(e,t,n)this.props=e,this.context=t,this.refs=pc,this.updater=n||fcvar xa=wa.prototype=new mcxa.constructor=wahc(xa,hr.prototype)xa.isPureReactComponent=!0var zu=Array.isArray,vc=Object.prototype.hasOwnProperty,Sa=current:null,gc=key:!0,ref:!0,__self:!0,__source:!0function yc(e,t,n)var r,l=,i=null,o=nullif(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=+t.key),t)vc.call(t,r)&&!gc.hasOwnProperty(r)&&(l[r]=t[r])var a=arguments.length-2if(a===1)l.children=nelse if(1<a)for(var u=Array(a),s=0s<as++)u[s]=arguments[s+2]l.children=uif(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r])return$$typeof:hl,type:e,key:i,ref:o,props:l,_owner:Sa.currentfunction kh(e,t)return$$typeof:hl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._ownerfunction ka(e)return typeof e==object&&e!==null&&e.$$typeof===hlfunction Eh(e)var t==:=0,::=2return$+e.replace([=:]g,function(n)return t[n])var Fu=\+gfunction $i(e,t)return typeof e==object&&e!==null&&e.key!=null?Eh(+e.key):t.toString(36)function Al(e,t,n,r,l)var i=typeof e(i===undefined||i===boolean)&&(e=null)var o=!1if(e===null)o=!0else switch(i)casestring:casenumber:o=!0breakcaseobject:switch(e.$$typeof)case hl:case dh:o=!0if(o)return o=e,l=l(o),e=r===?.+$i(o,0):r,zu(l)?(n=,e!=null&&(n=e.replace(Fu,$&)+),Al(l,t,n,,function(s)return s)):l!=null&&(ka(l)&&(l=kh(l,n+(!l.key||o&&o.key===l.key?:(+l.key).replace(Fu,$&)+)+e)),t.push(l)),1if(o=0,r=r===?.:r+:,zu(e))for(var a=0a<e.lengtha++)i=e[a]var u=r+$i(i,a)o+=Al(i,t,n,u,l)else if(u=Sh(e),typeof u==function)for(e=u.call(e),a=0!(i=e.next()).done)i=i.value,u=r+$i(i,a++),o+=Al(i,t,n,u,l)else if(i===object)throw t=String(e),Error(Objects are not valid as a React child (found: +(t===[object Object]?object with keys +Object.keys(e).join(, )+:t)+). If you meant to render a collection of children, use an array instead.)return ofunction Cl(e,t,n)if(e==null)return evar r=[],l=0return Al(e,r,,,function(i)return t.call(n,i,l++)),rfunction Ch(e)if(e._status===-1)var t=e._resultt=t(),t.then(function(n)(e._status===0||e._status===-1)&&(e._status=1,e._result=n),function(n)(e._status===0||e._status===-1)&&(e._status=2,e._result=n)),e._status===-1&&(e._status=0,e._result=t)if(e._status===1)return e._result.defaultthrow e._resultvar Fe=current:null,Bl=transition:null,Rh=ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:Safunction wc()throw Error(act(...) is not supported in production builds of React.)K.Children=map:Cl,forEach:function(e,t,n)Cl(e,function()t.apply(this,arguments),n),count:function(e)var t=0return Cl(e,function()t++),t,toArray:function(e)return Cl(e,function(t)return t)||[],only:function(e)if(!ka(e))throw Error(React.Children.only expected to receive a single React element child.)return eK.Component=hrK.Fragment=fhK.Profiler=phK.PureComponent=waK.StrictMode=hhK.Suspense=yhK.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RhK.act=wcK.cloneElement=function(e,t,n)if(e==null)throw Error(React.cloneElement(...): The argument must be a React element, but you passed +e+.)var r=hc(,e.props),l=e.key,i=e.ref,o=e._ownerif(t!=null)if(t.ref!==void 0&&(i=t.ref,o=Sa.current),t.key!==void 0&&(l=+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultPropsfor(u in t)vc.call(t,u)&&!gc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])var u=arguments.length-2if(u===1)r.children=nelse if(1<u)a=Array(u)for(var s=0s<us++)a[s]=arguments[s+2]r.children=areturn$$typeof:hl,type:e.type,key:l,ref:i,props:r,_owner:oK.createContext=function(e)return e=$$typeof:vh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null,e.Provider=$$typeof:mh,_context:e,e.Consumer=eK.createElement=ycK.createFactory=function(e)var t=yc.bind(null,e)return t.type=e,tK.createRef=function()returncurrent:nullK.forwardRef=function(e)return$$typeof:gh,render:eK.isValidElement=kaK.lazy=function(e)return$$typeof:xh,_payload:_status:-1,_result:e,_init:ChK.memo=function(e,t)return$$typeof:wh,type:e,compare:t===`;

export default code;