var mt=Object.defineProperty;var yt=(o,t,e)=>t in o?mt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var g=(o,t,e)=>(yt(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,q=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),G=new WeakMap;let nt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=G.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&G.set(e,t))}return t}toString(){return this.cssText}};const vt=o=>new nt(typeof o=="string"?o:o+"",void 0,K),$=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new nt(e,o,K)},bt=(o,t)=>{if(q)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},X=q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return vt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:_t,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:At,getPrototypeOf:St}=Object,b=globalThis,Y=b.trustedTypes,Et=Y?Y.emptyScript:"",z=b.reactiveElementPolyfillSupport,M=(o,t)=>o,I={toAttribute(o,t){switch(t){case Boolean:o=o?Et:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},rt=(o,t)=>!$t(o,t),J={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&_t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=xt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const c=i==null?void 0:i.call(this);n.call(this,r),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,s=[...wt(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:I).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:I;this._$Em=i,this[i]=c.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??rt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[M("elementProperties")]=new Map,A[M("finalized")]=new Map,z==null||z({ReactiveElement:A}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,j=k.trustedTypes,Z=j?j.createPolicy("lit-html",{createHTML:o=>o}):void 0,at="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,lt="?"+v,Ct=`<${lt}>`,w=document,P=()=>w.createComment(""),U=o=>o===null||typeof o!="object"&&typeof o!="function",ct=Array.isArray,Mt=o=>ct(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",L=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,tt=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,st=/"/g,dt=/^(?:script|style|textarea|title)$/i,kt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),f=kt(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),it=new WeakMap,x=w.createTreeWalker(w,129);function ht(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const Pt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":"",r=C;for(let c=0;c<e;c++){const a=o[c];let d,p,l=-1,m=0;for(;m<a.length&&(r.lastIndex=m,p=r.exec(a),p!==null);)m=r.lastIndex,r===C?p[1]==="!--"?r=Q:p[1]!==void 0?r=tt:p[2]!==void 0?(dt.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=_):p[3]!==void 0&&(r=_):r===_?p[0]===">"?(r=i??C,l=-1):p[1]===void 0?l=-2:(l=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?_:p[3]==='"'?st:et):r===st||r===et?r=_:r===Q||r===tt?r=C:(r=_,i=void 0);const y=r===_&&o[c+1].startsWith("/>")?" ":"";n+=r===C?a+Ct:l>=0?(s.push(d),a.slice(0,l)+at+a.slice(l)+v+y):a+v+(l===-2?c:y)}return[ht(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class H{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const c=t.length-1,a=this.parts,[d,p]=Pt(t,e);if(this.el=H.createElement(d,s),x.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=x.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(at)){const m=p[r++],y=i.getAttribute(l).split(v),T=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:T[2],strings:y,ctor:T[1]==="."?Ht:T[1]==="?"?Ot:T[1]==="@"?Tt:R}),i.removeAttribute(l)}else l.startsWith(v)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(dt.test(i.tagName)){const l=i.textContent.split(v),m=l.length-1;if(m>0){i.textContent=j?j.emptyScript:"";for(let y=0;y<m;y++)i.append(l[y],P()),x.nextNode(),a.push({type:2,index:++n});i.append(l[m],P())}}}else if(i.nodeType===8)if(i.data===lt)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(v,l+1))!==-1;)a.push({type:7,index:n}),l+=v.length-1}n++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function E(o,t,e=o,s){var r,c;if(t===S)return t;let i=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const n=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=E(o,i._$AS(o,t.values),i,s)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??w).importNode(e,!0);x.currentNode=i;let n=x.nextNode(),r=0,c=0,a=s[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new O(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new Nt(n,this,t)),this._$AV.push(d),a=s[++c]}r!==(a==null?void 0:a.index)&&(n=x.nextNode(),r++)}return x.currentNode=w,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(ht(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const r=new Ut(i,this),c=r.u(this.options);r.p(e),this.T(c),this._$AH=r}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new H(t)),e}k(t){ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new O(this.S(P()),this.S(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=E(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const c=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=E(this,c[s+a],e,a),d===S&&(d=this._$AH[a]),r||(r=!U(d)||d!==this._$AH[a]),d===h?t=h:t!==h&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}r&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ht extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Ot extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Tt extends R{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??h)===S)return;const s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const B=k.litHtmlPolyfillSupport;B==null||B(H,O),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.1.3");const jt=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new O(t.insertBefore(P(),n),n,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}}var ot;u._$litElement$=!0,u.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:u});const F=globalThis.litElementPolyfillSupport;F==null||F({LitElement:u});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const Rt=async()=>{const o="https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry",t={method:"GET",headers:{"X-RapidAPI-Key":"e5b9911b98msh911243acdf5e21dp1f37e9jsn39f4c8b5f857","X-RapidAPI-Host":"spotify23.p.rapidapi.com"}};let e;try{return e=await(await fetch(o,t)).json(),e}catch(s){console.error(s)}},zt=async()=>{const t=(await Rt()).tracks;return t.sort((e,s)=>s.popularity-e.popularity),console.log(t),t},Lt=o=>{const t=o.album.release_date;return new Date(t).getFullYear()};class D extends u{constructor(){super(),this.container="container",this.imgSrc="",this.textSongClass="ArtistSong",this.textArtistClass="ArtistCompositor"}async connectedCallback(){super.connectedCallback(),this.dataMusic=await zt()}render(){return console.log(this.dataMusic),f`
            <div class=${this.container}>
                ${this.dataMusic.map(t=>f`
                <div class="boxMusic">
                    <img src=${t.album.images[1].url} class="boxMusic__img" />
                    <div class="boxMusic__text">
                        <p class="${this.textSongClass}">${t.name} <br><small class="${this.textArtistClass}">${t.artists[0].name} ${Lt(t)}</small></p>
                    </div>
                </div>
            `)}
            </div>
        `}}g(D,"properties",{container:{typeof:String},imgSrc:{typeof:String},textSong:{typeof:String},textArtist:{typeof:String},dataMusic:{typeof:Array}}),g(D,"styles",$`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            overflow-x: scroll;
            flex-direction: row;
            flex: 1; 
            height: 100%;
            width: 100%;
            gap: 5px;
        }
        .container::-webkit-scrollbar {
            display:none
        }
        .boxMusic {
            display: flex;
            flex-direction: column;
            background: #fff;
            width: 48%;
            cursor: pointer;
        }
        .boxMusic__img { 
            display: flex;
            align-items: center;
            justify-content: center; 
            justify-content: center;
            width: 98%;
            height: 45%;
            border-radius: 10px;
        }
        .boxMusic__text { 
            width: 95%; 
            height: 25%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            padding: 0 5px; 
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow-y: hidden;
        }
        .boxMusic__text::-webkit-scrollbar{
            display: none; 
        }
        .boxMusic__text p {
            font-size: 0.8em;
            text-transform: capitalize;
            font-weight: 600;
        }
        .boxMusic__text p small {
            text-transform: capitalize;
            font-weight: 480;
            color: #4F4F4F;
        }
        `);customElements.define("new-music",D);class V extends u{constructor(){super(),this.classText="container_text",this.classTitle="container_title"}render(){return f`
            <div class="container">
                <h2 class="${this.classTitle}">discover new music</h2>
                <div class="${this.classText}">
                    <h3 class="title_1">Top-chart</h3> 
                    <h3 class="title_2">Week</h3>
                </div> 
            </div>
        `}}g(V,"properties",{classText:{typeof:String},classTitle:{typeof:String}}),g(V,"styles",$`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .container{
            width: 95%;
            display: flex;
            flex-direction: column;
            justify-content: space-between
        }
        .container_title {
            text-transform: capitalize;
            font-size: 1.5em;
            margin-block-start: 0em;
            margin-block-end: 0em
        }
        .container_text {
            display:flex;
            justify-content: space-between;
        }
        .title_2 {
            color: #d1cfcf
        }
    `);customElements.define("top-chart",V);class pt extends u{constructor(){super()}render(){return f`
            <h3 class="title">
                Now Playing
            </h3>
        `}}g(pt,"styles",$`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        :host {
            display:flex; 
            align-items: center;
            justify-content: center; 
        }
    `);customElements.define("now-playing",pt);class ut extends u{constructor(){super()}render(){return f`
            <h1 class="title">Track List</h1>
            <div class="container_icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
                </svg>
            </div>
            <h4 class="playing">Playing next</h4>
        `}}g(ut,"styles",$`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .title {
            font-weight: 700;
            font-size: 2em; 
            margin-block-start: 0em;
            margin-block-end: 0em
        }
        :host {
            display: flex;
            flex-direction: column; 
            justify-content: space-around
        }
        .container_icons {
            display: flex; 
            align-items: center; 
            gap: 15px; 
        }
        svg {
            height: 20px; 
            width: 20px; 
            color: #d1cfcf; 
        }
        .playing {
            color: #d1cfcf; 
        }
    `);customElements.define("track-list",ut);class gt extends u{render(){return f`
            <body class="body">
            <div class="SongInfo">
            <div class="SongImage">
                <img src="src/assets/image.png" alt="">
            </div>
            <div class="UserOptions">
                <div>
                <box-icon name='plus' color='#9bd8b5'></box-icon>
                </div>
                <div class="songName">
                <h3>
                    Money Machine
                </h3>
                <h6>
                    1000 Gecks
                </h6>
                </div>
                <div>
                <box-icon name='heart' color='#9bd8b5' ></box-icon>
                </div>
            </div>
            </div>
            <div class="mediaOptions">
            <div class="musicTimeline">
                <div class="musicTime">
                <p>2:14</p>
                <p>-1:15</p>
                </div>
                <div class="progressMusic">
                <progress class="progress" value="214" max="329"></progress>
                </div>
                </div>
            <div class="mediaControl">
                <box-icon name='shuffle' flip='vertical' color='#828282' ></box-icon>
                <box-icon name='rewind' flip='vertical' color='#27ae60' size='lg' ></box-icon>
                <box-icon name='play-circle' color='#27ae60' size='lg'></box-icon>
                <box-icon name='rewind' rotate='180' color='#27ae60' size='lg'></box-icon>
                <box-icon name='repeat' color='#828282'></box-icon>
            </div>
            <div class="volumeControl">
                <box-icon name='volume-low' color='#828282'></box-icon>
                <progress class="progress" value="214" max="329"></progress>
                <box-icon name='volume-full' color='#828282' ></box-icon>
            </div>
            <div class="deviceOutput">
                <div><box-icon name='headphone' color='#828282' ></box-icon>
                </div>
            </div>
            </div>
        </body>
        `}}g(gt,"styles",$`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .body{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .UserOptions{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .songName{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .mediaOptions{
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-left: 3vh;
            padding-right: 3vh;
            height: 25vh;
            justify-content: space-around;
        }
        
        .musicTime{
            display: flex;
            justify-content: space-between;

        }
        .progressMusic{
            display: flex;
            justify-content: center;
        }
        .progressMusic progress{
            width: 100%;
            height: 0.5vh;
            background-color: #ddd;
        }
        progress::-webkit-progress-value{
            background-color: #27AE60;
        }
        progress::-webkit-progress-bar {

            background-color: #ececec;
        }
        .mediaControl{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .volumeControl{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .volumeControl progress{
            width: 50%;
            height: 0.3vh;
            background-color: #ddd;
        }
        .deviceOutput{
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: center;
        }
        .deviceOutput div{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background: #6fcf9752;
            width: 18vh;
            border-radius: 1vh;
        }
        .SongImage{
            display: flex;
            justify-content: center
        }`);customElements.define("my-reproductor",gt);class W extends u{constructor(){super(),this.song=[],this.loadSong()}async loadSong(){const t="https://spotify23.p.rapidapi.com/artist_singles/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=20",e={method:"GET",headers:{"X-RapidAPI-Key":"e5b9911b98msh911243acdf5e21dp1f37e9jsn39f4c8b5f857","X-RapidAPI-Host":"spotify23.p.rapidapi.com"}};try{const i=await(await fetch(t,e)).json();this.songs=i.data.artist.discography.singles.items,this.requestUpdate()}catch(s){console.error("Error fetching songs:",s)}}render(){return f`
        <div>
            ${Array.isArray(this.songs)&&this.songs.length>0?this.songs.map(t=>f`
            <div class="card">
            <div class="cards">
                <div class="cards_info">
                    <div class="aling"><button  type="button"> <box-icon name='menu'></box-icon></button></div>
                    <div class="img"><img src="${t.releases.items[0].coverArt.sources[0].url}"></div>
                    <div class="Titule_and_artis">
                        <h3>${t.releases.items[0].name}</h3>
                    </div>
                    </div>
                    <div class="minutes_and_date">
                    <h5>${t.releases.items[0].date.year}</h5>
                </div>
            </div>
        </div>  `):f`<p>No hay canciones disponibles</p>`}
        </div>
    `}}g(W,"properties",{songs:{type:Array}}),g(W,"styles",$`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .card {
        margin: 10px;
        padding: 0;
    }

    .cards{
        background: white;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden; 
        margin-bottom: 10px
    }

    .cards h3{
        margin: 5px;
        font-size: 15px ;
    }

    .cards h5{
        margin: 0;
        color: rgb(124, 124, 124);
    }

    .cards button{
        background: none;
        border: none;
    }

    .card button:hover{
        cursor: pointer;
    }

    .cards .cards_info{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .cards .cards_info .img{
        height: 50px;
        width: 50px
    }

    .cards .cards_info .img img{
        height: 50px;
        width: 50px;
        object-fit: cover;
    }

    .cards .minutes_and_date{
        padding-right: 10px
    }
        `);customElements.define("my-track",W);class Bt extends u{constructor(){super()}render(){return f`
            <div class="container">
                <div class="icons1">
                    <button class="buton"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-soundwave" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
                        </svg>
                    </button>
                    <button class="buton"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </button>
                </div>
                <div class="icons2">
                    <button class="buton"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                        </svg>
                    </button>
                    <button class="buton"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                        <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
                        </svg>
                    </button>
                    <button class="buton"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </button>
                    <button class="buton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                        </svg>
                    </button>
                </div>

                <div class="icons3">
                    <button class="buton-config">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                        </svg>
                    </button>
                    <button class="buton-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        `}static get styles(){return $`
            .container  {
                width: 100%;
                height: 100vh; 
            }
            .icons1 {
                height: 20%; 
                display:flex;
                flex-direction: column; 
                gap: 10px; 
                justify-content: start;
            }
            .buton {
                background: transparent;
                border: none;
            }
            .buton svg {
                color: #27AE60;
                width: 25px;
                height: 25px;
            }
            .icons2 {
                height: 60%;
                display:flex;
                flex-direction: column; 
                gap: 15px; 
                justify-content: center; 
            }
            .icons3 {
                height: 20%;
                display:flex;
                flex-direction: column; 
                gap: 10px;
                justify-content: end; 
            }
            .buton-config, .buton-out {
                background: transparent; 
                border: none; 
                
            }
            .buton-config svg, .buton-out svg {
                color: #d1cfcf;
                width: 25px;
                height: 25px;
            }
        `}}customElements.define("my-nav",Bt);class ft extends u{constructor(){super()}render(){return f`
            <main class="main">
                <top-chart class="top-chart"></top-chart>
                <new-music class="new-music"></new-music>
                <my-track class="my-track-section"></my-track>
                <now-playing class="now-playing"></now-playing>
                <my-reproductor class="my-reproductor"></my-reproductor>
                <track-list class="track-list"></track-list>
                <my-track class="my-track"></my-track>
                <my-nav class="my-nav"></my-nav>
            </main>
        `}}g(ft,"styles",$`
        .main {
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: repeat(10, 1fr);
        }
        .top-chart { 
            grid-area: 1 / 2 / 3 / 5; 
            padding: 5px; 
        }
        .new-music {
            grid-area: 3 / 2 / 8 / 5;
            padding: 5px; 
        }
        .my-track-section { 
            overflow: hidden; 
            grid-area: 8 / 2 / 11 / 5; 
            padding: 5px; 
        }
        .now-playing { 
            grid-area: 1 / 5 / 2 / 9; 
            background-color: #FAFAFA;
            padding: 5px; 
        }
        .my-reproductor {
            grid-area: 2 / 5 / 11 / 9; 
            overflow: hidden; 
            background-color: #FAFAFA;
            padding: 5px; 
        }
        .track-list { 
            grid-area: 1 / 9 / 3 / 11; 
            padding: 5px; 
        }
        .my-track { 
            grid-area: 3 / 9 / 11 / 11; 
            padding: 5px; 
            overflow-x: scroll; 
        }
        .my-nav { 
            grid-area: 1 / 1 / 11 / 2; 
            background-color: #FAFAFA;
            padding: 5px; 
        }
    `);customElements.define("grid-spotify",ft);
