import{bq as kt,f as S,v as Oe,J as jt,br as ho,bs as bo,bt as yo,c as J,i as Ge,m as oe,h as Se,bu as Ft,al as Ee,z as Dt,K as wo,be as yt,S as Oo,w as Qe,x as wt,bv as Eo,L as To}from"../index-CBSi0O3n.js";import{v as Co,D as R,ae as De,F,z as qe,R as c,B as Ro,C as k,ad as Me,_ as Ot,E as Ao,ag as Re,p as D,ah as ee,y as ue,r as z,s as Ne,ap as Lt,aw as Po,aa as Ze,ax as $t,bv as xo,$ as So,G as Mo,T as _o,bj as Bo,I as Ae,W as Nt,ar as le,as as Y,ai as Xe,ao as He,aQ as Io,ab as ko,aj as we,b0 as jo,az as Fo,ay as Do,Q as Lo,bw as $o,av as No}from"../.pnpm/.pnpm.BAJQU3fl.js";const X=(e,t,{checkForDefaultPrevented:o=!0}={})=>r=>{const a=e==null?void 0:e(r);if(o===!1||!a)return t==null?void 0:t(r)},Gr=e=>t=>t.pointerType==="mouse"?e(t):void 0,Ho=kt({type:S(Boolean),default:null}),Wo=kt({type:S(Function)}),Ht=e=>{const t=`update:${e}`,o=`onUpdate:${e}`,n=[t],r={[e]:Ho,[o]:Wo};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:f,onHide:d})=>{const h=Co(),{emit:g}=h,b=h.props,v=R(()=>De(b[o])),E=R(()=>b[e]===null),p=O=>{i.value!==!0&&(i.value=!0,u&&(u.value=O),De(f)&&f(O))},w=O=>{i.value!==!1&&(i.value=!1,u&&(u.value=O),De(d)&&d(O))},T=O=>{if(b.disabled===!0||De(l)&&!l())return;const P=v.value&&Oe;P&&g(t,!0),(E.value||!P)&&p(O)},m=O=>{if(b.disabled===!0||!Oe)return;const P=v.value&&Oe;P&&g(t,!1),(E.value||!P)&&w(O)},C=O=>{jt(O)&&(b.disabled&&O?v.value&&g(t,!1):i.value!==O&&(O?p():w()))},A=()=>{i.value?m():T()};return F(()=>b[e],C),s&&h.appContext.config.globalProperties.$route!==void 0&&F(()=>({...h.proxy.$route}),()=>{s.value&&i.value&&m()}),qe(()=>{C(b[e])}),{hide:m,show:T,toggle:A,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:n}};Ht("modelValue");var $="top",W="bottom",q="right",N="left",Ye="auto",_e=[$,W,q,N],fe="start",Pe="end",qo="clippingParents",Wt="viewport",ye="popper",zo="reference",Et=_e.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+Pe])},[]),et=[].concat(_e,[Ye]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+Pe])},[]),Ko="beforeRead",Uo="read",Vo="afterRead",Go="beforeMain",Zo="main",Jo="afterMain",Qo="beforeWrite",Xo="write",Yo="afterWrite",en=[Ko,Uo,Vo,Go,Zo,Jo,Qo,Xo,Yo];function Z(e){return e?(e.nodeName||"").toLowerCase():null}function K(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=K(e).Element;return e instanceof t||e instanceof Element}function H(e){var t=K(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function tt(e){if(typeof ShadowRoot>"u")return!1;var t=K(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function tn(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},a=t.elements[o];!H(a)||!Z(a)||(Object.assign(a.style,n),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function on(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],a=t.attributes[n]||{},i=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),u=i.reduce(function(s,l){return s[l]="",s},{});!H(r)||!Z(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var qt={name:"applyStyles",enabled:!0,phase:"write",fn:tn,effect:on,requires:["computeStyles"]};function G(e){return e.split("-")[0]}var se=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var o=e.getBoundingClientRect(),n=1,r=1;if(H(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(n=ve(o.width)/i||1),a>0&&(r=ve(o.height)/a||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function ot(e){var t=ge(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function zt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&tt(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function te(e){return K(e).getComputedStyle(e)}function nn(e){return["table","td","th"].indexOf(Z(e))>=0}function ne(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return Z(e)==="html"?e:e.assignedSlot||e.parentNode||(tt(e)?e.host:null)||ne(e)}function Tt(e){return!H(e)||te(e).position==="fixed"?null:e.offsetParent}function rn(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&H(e)){var n=te(e);if(n.position==="fixed")return null}var r=ze(e);for(tt(r)&&(r=r.host);H(r)&&["html","body"].indexOf(Z(r))<0;){var a=te(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Be(e){for(var t=K(e),o=Tt(e);o&&nn(o)&&te(o).position==="static";)o=Tt(o);return o&&(Z(o)==="html"||Z(o)==="body"&&te(o).position==="static")?t:o||rn(e)||t}function nt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,o){return se(e,We(t,o))}function an(e,t,o){var n=Te(e,t,o);return n>o?o:n}function Kt(){return{top:0,right:0,bottom:0,left:0}}function Ut(e){return Object.assign({},Kt(),e)}function Vt(e,t){return t.reduce(function(o,n){return o[n]=e,o},{})}var sn=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Ut(typeof e!="number"?e:Vt(e,_e))};function ln(e){var t,o=e.state,n=e.name,r=e.options,a=o.elements.arrow,i=o.modifiersData.popperOffsets,u=G(o.placement),s=nt(u),l=[N,q].indexOf(u)>=0,f=l?"height":"width";if(!(!a||!i)){var d=sn(r.padding,o),h=ot(a),g=s==="y"?$:N,b=s==="y"?W:q,v=o.rects.reference[f]+o.rects.reference[s]-i[s]-o.rects.popper[f],E=i[s]-o.rects.reference[s],p=Be(a),w=p?s==="y"?p.clientHeight||0:p.clientWidth||0:0,T=v/2-E/2,m=d[g],C=w-h[f]-d[b],A=w/2-h[f]/2+T,O=Te(m,A,C),P=s;o.modifiersData[n]=(t={},t[P]=O,t.centerOffset=O-A,t)}}function un(e){var t=e.state,o=e.options,n=o.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!zt(t.elements.popper,r)||(t.elements.arrow=r))}var pn={name:"arrow",enabled:!0,phase:"main",fn:ln,effect:un,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var cn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fn(e){var t=e.x,o=e.y,n=window,r=n.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(o*r)/r||0}}function Ct(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,d=e.isFixed,h=i.x,g=h===void 0?0:h,b=i.y,v=b===void 0?0:b,E=typeof f=="function"?f({x:g,y:v}):{x:g,y:v};g=E.x,v=E.y;var p=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),T=N,m=$,C=window;if(l){var A=Be(o),O="clientHeight",P="clientWidth";if(A===K(o)&&(A=ne(o),te(A).position!=="static"&&u==="absolute"&&(O="scrollHeight",P="scrollWidth")),A=A,r===$||(r===N||r===q)&&a===Pe){m=W;var I=d&&A===C&&C.visualViewport?C.visualViewport.height:A[O];v-=I-n.height,v*=s?1:-1}if(r===N||(r===$||r===W)&&a===Pe){T=q;var x=d&&A===C&&C.visualViewport?C.visualViewport.width:A[P];g-=x-n.width,g*=s?1:-1}}var B=Object.assign({position:u},l&&cn),L=f===!0?fn({x:g,y:v}):{x:g,y:v};if(g=L.x,v=L.y,s){var M;return Object.assign({},B,(M={},M[m]=w?"0":"",M[T]=p?"0":"",M.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",M))}return Object.assign({},B,(t={},t[m]=w?v+"px":"",t[T]=p?g+"px":"",t.transform="",t))}function dn(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,a=o.adaptive,i=a===void 0?!0:a,u=o.roundOffsets,s=u===void 0?!0:u,l={placement:G(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ct(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ct(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Gt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:dn,data:{}},Le={passive:!0};function vn(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=r===void 0?!0:r,i=n.resize,u=i===void 0?!0:i,s=K(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",o.update,Le)}),u&&s.addEventListener("resize",o.update,Le),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",o.update,Le)}),u&&s.removeEventListener("resize",o.update,Le)}}var Zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vn,data:{}},gn={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return gn[t]})}var mn={start:"end",end:"start"};function Rt(e){return e.replace(/start|end/g,function(t){return mn[t]})}function rt(e){var t=K(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function at(e){return ge(ne(e)).left+rt(e).scrollLeft}function hn(e){var t=K(e),o=ne(e),n=t.visualViewport,r=o.clientWidth,a=o.clientHeight,i=0,u=0;return n&&(r=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,u=n.offsetTop)),{width:r,height:a,x:i+at(e),y:u}}function bn(e){var t,o=ne(e),n=rt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=se(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=se(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-n.scrollLeft+at(e),s=-n.scrollTop;return te(r||o).direction==="rtl"&&(u+=se(o.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function it(e){var t=te(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function Jt(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:H(e)&&it(e)?e:Jt(ze(e))}function Ce(e,t){var o;t===void 0&&(t=[]);var n=Jt(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),a=K(n),i=r?[a].concat(a.visualViewport||[],it(n)?n:[]):n,u=t.concat(i);return r?u:u.concat(Ce(ze(i)))}function Je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yn(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function At(e,t){return t===Wt?Je(hn(e)):de(t)?yn(t):Je(bn(ne(e)))}function wn(e){var t=Ce(ze(e)),o=["absolute","fixed"].indexOf(te(e).position)>=0,n=o&&H(e)?Be(e):e;return de(n)?t.filter(function(r){return de(r)&&zt(r,n)&&Z(r)!=="body"}):[]}function On(e,t,o){var n=t==="clippingParents"?wn(e):[].concat(t),r=[].concat(n,[o]),a=r[0],i=r.reduce(function(u,s){var l=At(e,s);return u.top=se(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=se(l.left,u.left),u},At(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Qt(e){var t=e.reference,o=e.element,n=e.placement,r=n?G(n):null,a=n?me(n):null,i=t.x+t.width/2-o.width/2,u=t.y+t.height/2-o.height/2,s;switch(r){case $:s={x:i,y:t.y-o.height};break;case W:s={x:i,y:t.y+t.height};break;case q:s={x:t.x+t.width,y:u};break;case N:s={x:t.x-o.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?nt(r):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case fe:s[l]=s[l]-(t[f]/2-o[f]/2);break;case Pe:s[l]=s[l]+(t[f]/2-o[f]/2);break}}return s}function xe(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=n===void 0?e.placement:n,a=o.boundary,i=a===void 0?qo:a,u=o.rootBoundary,s=u===void 0?Wt:u,l=o.elementContext,f=l===void 0?ye:l,d=o.altBoundary,h=d===void 0?!1:d,g=o.padding,b=g===void 0?0:g,v=Ut(typeof b!="number"?b:Vt(b,_e)),E=f===ye?zo:ye,p=e.rects.popper,w=e.elements[h?E:f],T=On(de(w)?w:w.contextElement||ne(e.elements.popper),i,s),m=ge(e.elements.reference),C=Qt({reference:m,element:p,strategy:"absolute",placement:r}),A=Je(Object.assign({},p,C)),O=f===ye?A:m,P={top:T.top-O.top+v.top,bottom:O.bottom-T.bottom+v.bottom,left:T.left-O.left+v.left,right:O.right-T.right+v.right},I=e.modifiersData.offset;if(f===ye&&I){var x=I[r];Object.keys(P).forEach(function(B){var L=[q,W].indexOf(B)>=0?1:-1,M=[$,W].indexOf(B)>=0?"y":"x";P[B]+=x[M]*L})}return P}function En(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=o.boundary,a=o.rootBoundary,i=o.padding,u=o.flipVariations,s=o.allowedAutoPlacements,l=s===void 0?et:s,f=me(n),d=f?u?Et:Et.filter(function(b){return me(b)===f}):_e,h=d.filter(function(b){return l.indexOf(b)>=0});h.length===0&&(h=d);var g=h.reduce(function(b,v){return b[v]=xe(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[G(v)],b},{});return Object.keys(g).sort(function(b,v){return g[b]-g[v]})}function Tn(e){if(G(e)===Ye)return[];var t=$e(e);return[Rt(e),t,Rt(t)]}function Cn(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,u=i===void 0?!0:i,s=o.fallbackPlacements,l=o.padding,f=o.boundary,d=o.rootBoundary,h=o.altBoundary,g=o.flipVariations,b=g===void 0?!0:g,v=o.allowedAutoPlacements,E=t.options.placement,p=G(E),w=p===E,T=s||(w||!b?[$e(E)]:Tn(E)),m=[E].concat(T).reduce(function(ae,Q){return ae.concat(G(Q)===Ye?En(t,{placement:Q,boundary:f,rootBoundary:d,padding:l,flipVariations:b,allowedAutoPlacements:v}):Q)},[]),C=t.rects.reference,A=t.rects.popper,O=new Map,P=!0,I=m[0],x=0;x<m.length;x++){var B=m[x],L=G(B),M=me(B)===fe,U=[$,W].indexOf(L)>=0,j=U?"width":"height",y=xe(t,{placement:B,boundary:f,rootBoundary:d,altBoundary:h,padding:l}),_=U?M?q:N:M?W:$;C[j]>A[j]&&(_=$e(_));var re=$e(_),V=[];if(a&&V.push(y[L]<=0),u&&V.push(y[_]<=0,y[re]<=0),V.every(function(ae){return ae})){I=B,P=!1;break}O.set(B,V)}if(P)for(var Ie=b?3:1,Ke=function(ae){var Q=m.find(function(je){var be=O.get(je);if(be)return be.slice(0,ae).every(function(pe){return pe})});if(Q)return I=Q,"break"},he=Ie;he>0;he--){var ke=Ke(he);if(ke==="break")break}t.placement!==I&&(t.modifiersData[n]._skip=!0,t.placement=I,t.reset=!0)}}var Rn={name:"flip",enabled:!0,phase:"main",fn:Cn,requiresIfExists:["offset"],data:{_skip:!1}};function Pt(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function xt(e){return[$,q,W,N].some(function(t){return e[t]>=0})}function An(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=xe(t,{elementContext:"reference"}),u=xe(t,{altBoundary:!0}),s=Pt(i,n),l=Pt(u,r,a),f=xt(s),d=xt(l);t.modifiersData[o]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}var Pn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:An};function xn(e,t,o){var n=G(e),r=[N,$].indexOf(n)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[N,q].indexOf(n)>=0?{x:u,y:i}:{x:i,y:u}}function Sn(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=r===void 0?[0,0]:r,i=et.reduce(function(f,d){return f[d]=xn(d,t.rects,a),f},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=i}var Mn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Sn};function _n(e){var t=e.state,o=e.name;t.modifiersData[o]=Qt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Xt={name:"popperOffsets",enabled:!0,phase:"read",fn:_n,data:{}};function Bn(e){return e==="x"?"y":"x"}function In(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,u=i===void 0?!1:i,s=o.boundary,l=o.rootBoundary,f=o.altBoundary,d=o.padding,h=o.tether,g=h===void 0?!0:h,b=o.tetherOffset,v=b===void 0?0:b,E=xe(t,{boundary:s,rootBoundary:l,padding:d,altBoundary:f}),p=G(t.placement),w=me(t.placement),T=!w,m=nt(p),C=Bn(m),A=t.modifiersData.popperOffsets,O=t.rects.reference,P=t.rects.popper,I=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,x=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(A){if(a){var M,U=m==="y"?$:N,j=m==="y"?W:q,y=m==="y"?"height":"width",_=A[m],re=_+E[U],V=_-E[j],Ie=g?-P[y]/2:0,Ke=w===fe?O[y]:P[y],he=w===fe?-P[y]:-O[y],ke=t.elements.arrow,ae=g&&ke?ot(ke):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Kt(),je=Q[U],be=Q[j],pe=Te(0,O[y],ae[y]),uo=T?O[y]/2-Ie-pe-je-x.mainAxis:Ke-pe-je-x.mainAxis,po=T?-O[y]/2+Ie+pe+be+x.mainAxis:he+pe+be+x.mainAxis,Ue=t.elements.arrow&&Be(t.elements.arrow),co=Ue?m==="y"?Ue.clientTop||0:Ue.clientLeft||0:0,pt=(M=B==null?void 0:B[m])!=null?M:0,fo=_+uo-pt-co,vo=_+po-pt,ct=Te(g?We(re,fo):re,_,g?se(V,vo):V);A[m]=ct,L[m]=ct-_}if(u){var ft,go=m==="x"?$:N,mo=m==="x"?W:q,ie=A[C],Fe=C==="y"?"height":"width",dt=ie+E[go],vt=ie-E[mo],Ve=[$,N].indexOf(p)!==-1,gt=(ft=B==null?void 0:B[C])!=null?ft:0,mt=Ve?dt:ie-O[Fe]-P[Fe]-gt+x.altAxis,ht=Ve?ie+O[Fe]+P[Fe]-gt-x.altAxis:vt,bt=g&&Ve?an(mt,ie,ht):Te(g?mt:dt,ie,g?ht:vt);A[C]=bt,L[C]=bt-ie}t.modifiersData[n]=L}}var kn={name:"preventOverflow",enabled:!0,phase:"main",fn:In,requiresIfExists:["offset"]};function jn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Fn(e){return e===K(e)||!H(e)?rt(e):jn(e)}function Dn(e){var t=e.getBoundingClientRect(),o=ve(t.width)/e.offsetWidth||1,n=ve(t.height)/e.offsetHeight||1;return o!==1||n!==1}function Ln(e,t,o){o===void 0&&(o=!1);var n=H(t),r=H(t)&&Dn(t),a=ne(t),i=ge(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((Z(t)!=="body"||it(a))&&(u=Fn(t)),H(t)?(s=ge(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=at(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function $n(e){var t=new Map,o=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function r(a){o.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!o.has(u)){var s=t.get(u);s&&r(s)}}),n.push(a)}return e.forEach(function(a){o.has(a.name)||r(a)}),n}function Nn(e){var t=$n(e);return en.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function Hn(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function Wn(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}var St={placement:"bottom",modifiers:[],strategy:"absolute"};function Mt(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function st(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,a=r===void 0?St:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},St,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},f=[],d=!1,h={state:l,setOptions:function(v){var E=typeof v=="function"?v(l.options):v;b(),l.options=Object.assign({},a,l.options,E),l.scrollParents={reference:de(i)?Ce(i):i.contextElement?Ce(i.contextElement):[],popper:Ce(u)};var p=Nn(Wn([].concat(n,l.options.modifiers)));return l.orderedModifiers=p.filter(function(w){return w.enabled}),g(),h.update()},forceUpdate:function(){if(!d){var v=l.elements,E=v.reference,p=v.popper;if(Mt(E,p)){l.rects={reference:Ln(E,Be(p),l.options.strategy==="fixed"),popper:ot(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(P){return l.modifiersData[P.name]=Object.assign({},P.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var T=l.orderedModifiers[w],m=T.fn,C=T.options,A=C===void 0?{}:C,O=T.name;typeof m=="function"&&(l=m({state:l,options:A,name:O,instance:h})||l)}}}},update:Hn(function(){return new Promise(function(v){h.forceUpdate(),v(l)})}),destroy:function(){b(),d=!0}};if(!Mt(i,u))return h;h.setOptions(s).then(function(v){!d&&s.onFirstUpdate&&s.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var E=v.name,p=v.options,w=p===void 0?{}:p,T=v.effect;if(typeof T=="function"){var m=T({state:l,name:E,instance:h,options:w}),C=function(){};f.push(m||C)}})}function b(){f.forEach(function(v){return v()}),f=[]}return h}}st();var qn=[Zt,Xt,Gt,qt];st({defaultModifiers:qn});var zn=[Zt,Xt,Gt,qt,Mn,Rn,kn,pn,Pn],Kn=st({defaultModifiers:zn});const Un=(e,t,o={})=>{const n={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=Vn(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=R(()=>{const{onFirstUpdate:s,placement:l,strategy:f,modifiers:d}=c(o);return{onFirstUpdate:s,placement:l||"bottom",strategy:f||"absolute",modifiers:[...d||[],n,{name:"applyStyles",enabled:!1}]}}),a=Ro(),i=k({styles:{popper:{position:c(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return F(r,s=>{const l=c(a);l&&l.setOptions(s)},{deep:!0}),F([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=Kn(s,l,c(r)))}),Me(()=>{u()}),{state:R(()=>{var s;return{...((s=c(a))==null?void 0:s.state)||{}}}),styles:R(()=>c(i).styles),attributes:R(()=>c(i).attributes),update:()=>{var s;return(s=c(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=c(a))==null?void 0:s.forceUpdate()},instanceRef:R(()=>c(a))}};function Vn(e){const t=Object.keys(e.elements),o=Ot(t.map(r=>[r,e.styles[r]||{}])),n=Ot(t.map(r=>[r,e.attributes[r]]));return{styles:o,attributes:n}}function _t(){let e;const t=(n,r)=>{o(),e=window.setTimeout(n,r)},o=()=>window.clearTimeout(e);return ho(()=>o()),{registerTimeout:t,cancelTimeout:o}}let Bt;const Yt=()=>{const e=bo(),t=yo(),o=R(()=>`${e.value}-popper-container-${t.prefix}`),n=R(()=>`#${o.value}`);return{id:o,selector:n}},Gn=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Zn=()=>{const{id:e,selector:t}=Yt();return Ao(()=>{Oe&&!Bt&&!document.body.querySelector(t.value)&&(Bt=Gn(e.value))}),{id:e,selector:t}},Jn=J({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Qn=({showAfter:e,hideAfter:t,autoClose:o,open:n,close:r})=>{const{registerTimeout:a}=_t(),{registerTimeout:i,cancelTimeout:u}=_t();return{onOpen:f=>{a(()=>{n(f);const d=c(o);Ge(d)&&d>0&&i(()=>{r(f)},d)},c(e))},onClose:f=>{u(),a(()=>{r(f)},c(t))}}},eo=Symbol("elForwardRef"),Xn=e=>{Re(eo,{setForwardRef:o=>{e.value=o}})},Yn=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),lt=Symbol("popper"),to=Symbol("popperContent"),er=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],oo=J({role:{type:String,values:er,default:"tooltip"}}),tr=D({name:"ElPopper",inheritAttrs:!1}),or=D({...tr,props:oo,setup(e,{expose:t}){const o=e,n=k(),r=k(),a=k(),i=k(),u=R(()=>o.role),s={triggerRef:n,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),Re(lt,s),(l,f)=>ee(l.$slots,"default")}});var nr=oe(or,[["__file","popper.vue"]]);const no=J({arrowOffset:{type:Number,default:5}}),rr=D({name:"ElPopperArrow",inheritAttrs:!1}),ar=D({...rr,props:no,setup(e,{expose:t}){const o=e,n=Se("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=ue(to,void 0);return F(()=>o.arrowOffset,u=>{r.value=u}),Me(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(z(),Ne("span",{ref_key:"arrowRef",ref:a,class:Lt(c(n).e("arrow")),style:Po(c(i)),"data-popper-arrow":""},null,6))}});var ir=oe(ar,[["__file","arrow.vue"]]);const sr="ElOnlyChild",lr=D({name:sr,setup(e,{slots:t,attrs:o}){var n;const r=ue(eo),a=Yn((n=r==null?void 0:r.setForwardRef)!=null?n:Ze);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,o);if(!u||u.length>1)return null;const s=ro(u);return s?$t(xo(s,o),[[a]]):null}}});function ro(e){if(!e)return null;const t=e;for(const o of t){if(So(o))switch(o.type){case Bo:continue;case _o:case"svg":return It(o);case Mo:return ro(o.children);default:return o}return It(o)}return null}function It(e){const t=Se("only-child");return Ae("span",{class:t.e("content")},[e])}const ao=J({virtualRef:{type:S(Object)},virtualTriggering:Boolean,onMouseenter:{type:S(Function)},onMouseleave:{type:S(Function)},onClick:{type:S(Function)},onKeydown:{type:S(Function)},onFocus:{type:S(Function)},onBlur:{type:S(Function)},onContextmenu:{type:S(Function)},id:String,open:Boolean}),ur=D({name:"ElPopperTrigger",inheritAttrs:!1}),pr=D({...ur,props:ao,setup(e,{expose:t}){const o=e,{role:n,triggerRef:r}=ue(lt,void 0);Xn(r);const a=R(()=>u.value?o.id:void 0),i=R(()=>{if(n&&n.value==="tooltip")return o.open&&o.id?o.id:void 0}),u=R(()=>{if(n&&n.value!=="tooltip")return n.value}),s=R(()=>u.value?`${o.open}`:void 0);let l;const f=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return qe(()=>{F(()=>o.virtualRef,d=>{d&&(r.value=Ft(d))},{immediate:!0}),F(r,(d,h)=>{l==null||l(),l=void 0,Ee(d)&&(f.forEach(g=>{var b;const v=o[g];v&&(d.addEventListener(g.slice(2).toLowerCase(),v),(b=h==null?void 0:h.removeEventListener)==null||b.call(h,g.slice(2).toLowerCase(),v))}),l=F([a,i,u,s],g=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((b,v)=>{Nt(g[v])?d.removeAttribute(b):d.setAttribute(b,g[v])})},{immediate:!0})),Ee(h)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(g=>h.removeAttribute(g))},{immediate:!0})}),Me(()=>{if(l==null||l(),l=void 0,r.value&&Ee(r.value)){const d=r.value;f.forEach(h=>{const g=o[h];g&&d.removeEventListener(h.slice(2).toLowerCase(),g)}),r.value=void 0}}),t({triggerRef:r}),(d,h)=>d.virtualTriggering?He("v-if",!0):(z(),le(c(lr),Xe({key:0},d.$attrs,{"aria-controls":c(a),"aria-describedby":c(i),"aria-expanded":c(s),"aria-haspopup":c(u)}),{default:Y(()=>[ee(d.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var cr=oe(pr,[["__file","trigger.vue"]]);const fr=["fixed","absolute"],dr=J({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:S(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:et,default:"bottom"},popperOptions:{type:S(Object),default:()=>({})},strategy:{type:String,values:fr,default:"absolute"}}),io=J({...dr,id:String,style:{type:S([String,Array,Object])},className:{type:S([String,Array,Object])},effect:{type:S(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:S([String,Array,Object])},popperStyle:{type:S([String,Array,Object])},referenceEl:{type:S(Object)},triggerTargetEl:{type:S(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...Dt(["ariaLabel"])}),vr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},gr=(e,t=[])=>{const{placement:o,strategy:n,popperOptions:r}=e,a={placement:o,strategy:n,...r,modifiers:[...hr(e),...t]};return br(a,r==null?void 0:r.modifiers),a},mr=e=>{if(Oe)return Ft(e)};function hr(e){const{offset:t,gpuAcceleration:o,fallbackPlacements:n}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:n}},{name:"computeStyles",options:{gpuAcceleration:o}}]}function br(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const yr=0,wr=e=>{const{popperInstanceRef:t,contentRef:o,triggerRef:n,role:r}=ue(lt,void 0),a=k(),i=k(),u=R(()=>({name:"eventListeners",enabled:!!e.visible})),s=R(()=>{var p;const w=c(a),T=(p=c(i))!=null?p:yr;return{name:"arrow",enabled:!Io(w),options:{element:w,padding:T}}}),l=R(()=>({onFirstUpdate:()=>{b()},...gr(e,[c(s),c(u)])})),f=R(()=>mr(e.referenceEl)||c(n)),{attributes:d,state:h,styles:g,update:b,forceUpdate:v,instanceRef:E}=Un(f,o,l);return F(E,p=>t.value=p),qe(()=>{F(()=>{var p;return(p=c(f))==null?void 0:p.getBoundingClientRect()},()=>{b()})}),{attributes:d,arrowRef:a,contentRef:o,instanceRef:E,state:h,styles:g,role:r,forceUpdate:v,update:b}},Or=(e,{attributes:t,styles:o,role:n})=>{const{nextZIndex:r}=wo(),a=Se("popper"),i=R(()=>c(t).popper),u=k(Ge(e.zIndex)?e.zIndex:r()),s=R(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=R(()=>[{zIndex:c(u)},c(o).popper,e.popperStyle||{}]),f=R(()=>n.value==="dialog"?"false":void 0),d=R(()=>c(o).arrow||{});return{ariaModal:f,arrowStyle:d,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Ge(e.zIndex)?e.zIndex:r()}}},Er=(e,t)=>{const o=k(!1),n=k();return{focusStartRef:n,trapped:o,onFocusAfterReleased:l=>{var f;((f=l.detail)==null?void 0:f.focusReason)!=="pointer"&&(n.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!o.value&&(l.target&&(n.value=l.target),o.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),o.value=!1)},onReleaseRequested:()=>{o.value=!1,t("close")}}},Tr=D({name:"ElPopperContent"}),Cr=D({...Tr,props:io,emits:vr,setup(e,{expose:t,emit:o}){const n=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:f}=Er(n,o),{attributes:d,arrowRef:h,contentRef:g,styles:b,instanceRef:v,role:E,update:p}=wr(n),{ariaModal:w,arrowStyle:T,contentAttrs:m,contentClass:C,contentStyle:A,updateZIndex:O}=Or(n,{styles:b,attributes:d,role:E}),P=ue(yt,void 0),I=k();Re(to,{arrowStyle:T,arrowRef:h,arrowOffset:I}),P&&Re(yt,{...P,addInputId:Ze,removeInputId:Ze});let x;const B=(M=!0)=>{p(),M&&O()},L=()=>{B(!1),n.visible&&n.focusOnShow?a.value=!0:n.visible===!1&&(a.value=!1)};return qe(()=>{F(()=>n.triggerTargetEl,(M,U)=>{x==null||x(),x=void 0;const j=c(M||g.value),y=c(U||g.value);Ee(j)&&(x=F([E,()=>n.ariaLabel,w,()=>n.id],_=>{["role","aria-label","aria-modal","id"].forEach((re,V)=>{Nt(_[V])?j.removeAttribute(re):j.setAttribute(re,_[V])})},{immediate:!0})),y!==j&&Ee(y)&&["role","aria-label","aria-modal","id"].forEach(_=>{y.removeAttribute(_)})},{immediate:!0}),F(()=>n.visible,L,{immediate:!0})}),Me(()=>{x==null||x(),x=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:B,contentStyle:A}),(M,U)=>(z(),Ne("div",Xe({ref_key:"contentRef",ref:g},c(m),{style:c(A),class:c(C),tabindex:"-1",onMouseenter:j=>M.$emit("mouseenter",j),onMouseleave:j=>M.$emit("mouseleave",j)}),[Ae(c(Oo),{trapped:c(a),"trap-on-focus-in":!0,"focus-trap-el":c(g),"focus-start-el":c(r),onFocusAfterTrapped:c(u),onFocusAfterReleased:c(i),onFocusin:c(s),onFocusoutPrevented:c(l),onReleaseRequested:c(f)},{default:Y(()=>[ee(M.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16,["onMouseenter","onMouseleave"]))}});var Rr=oe(Cr,[["__file","content.vue"]]);const Ar=Qe(nr),ut=Symbol("elTooltip"),so=J({...Jn,...io,appendTo:{type:S([String,Object])},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:S(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...Dt(["ariaLabel"])}),lo=J({...ao,disabled:Boolean,trigger:{type:S([String,Array]),default:"hover"},triggerKeys:{type:S(Array),default:()=>[wt.enter,wt.space]}}),{useModelToggleProps:Pr,useModelToggleEmits:xr,useModelToggle:Sr}=Ht("visible"),Mr=J({...oo,...Pr,...so,...lo,...no,showArrow:{type:Boolean,default:!0}}),_r=[...xr,"before-show","before-hide","show","hide","open","close"],Br=(e,t)=>ko(e)?e.includes(t):e===t,ce=(e,t,o)=>n=>{Br(c(e),t)&&o(n)},Ir=D({name:"ElTooltipTrigger"}),kr=D({...Ir,props:lo,setup(e,{expose:t}){const o=e,n=Se("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=ue(ut,void 0),f=k(null),d=()=>{if(c(r)||o.disabled)return!0},h=we(o,"trigger"),g=X(d,ce(h,"hover",u)),b=X(d,ce(h,"hover",s)),v=X(d,ce(h,"click",m=>{m.button===0&&l(m)})),E=X(d,ce(h,"focus",u)),p=X(d,ce(h,"focus",s)),w=X(d,ce(h,"contextmenu",m=>{m.preventDefault(),l(m)})),T=X(d,m=>{const{code:C}=m;o.triggerKeys.includes(C)&&(m.preventDefault(),l(m))});return t({triggerRef:f}),(m,C)=>(z(),le(c(cr),{id:c(a),"virtual-ref":m.virtualRef,open:c(i),"virtual-triggering":m.virtualTriggering,class:Lt(c(n).e("trigger")),onBlur:c(p),onClick:c(v),onContextmenu:c(w),onFocus:c(E),onMouseenter:c(g),onMouseleave:c(b),onKeydown:c(T)},{default:Y(()=>[ee(m.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var jr=oe(kr,[["__file","trigger.vue"]]);const Fr=J({to:{type:S([String,Object]),required:!0},disabled:Boolean}),Dr=D({__name:"teleport",props:Fr,setup(e){return(t,o)=>t.disabled?ee(t.$slots,"default",{key:0}):(z(),le(jo,{key:1,to:t.to},[ee(t.$slots,"default")],8,["to"]))}});var Lr=oe(Dr,[["__file","teleport.vue"]]);const $r=Qe(Lr),Nr=D({name:"ElTooltipContent",inheritAttrs:!1}),Hr=D({...Nr,props:so,setup(e,{expose:t}){const o=e,{selector:n}=Yt(),r=Se("tooltip"),a=k(null);let i;const{controlled:u,id:s,open:l,trigger:f,onClose:d,onOpen:h,onShow:g,onHide:b,onBeforeShow:v,onBeforeHide:E}=ue(ut,void 0),p=R(()=>o.transition||`${r.namespace.value}-fade-in-linear`),w=R(()=>o.persistent);Me(()=>{i==null||i()});const T=R(()=>c(w)?!0:c(l)),m=R(()=>o.disabled?!1:c(l)),C=R(()=>o.appendTo||n.value),A=R(()=>{var y;return(y=o.style)!=null?y:{}}),O=R(()=>!c(l)),P=()=>{b()},I=()=>{if(c(u))return!0},x=X(I,()=>{o.enterable&&c(f)==="hover"&&h()}),B=X(I,()=>{c(f)==="hover"&&d()}),L=()=>{var y,_;(_=(y=a.value)==null?void 0:y.updatePopper)==null||_.call(y),v==null||v()},M=()=>{E==null||E()},U=()=>{g(),i=Eo(R(()=>{var y;return(y=a.value)==null?void 0:y.popperContentRef}),()=>{if(c(u))return;c(f)!=="hover"&&d()})},j=()=>{o.virtualTriggering||d()};return F(()=>c(l),y=>{y||i==null||i()},{flush:"post"}),F(()=>o.content,()=>{var y,_;(_=(y=a.value)==null?void 0:y.updatePopper)==null||_.call(y)}),t({contentRef:a}),(y,_)=>(z(),le(c($r),{disabled:!y.teleported,to:c(C)},{default:Y(()=>[Ae(Fo,{name:c(p),onAfterLeave:P,onBeforeEnter:L,onAfterEnter:U,onBeforeLeave:M},{default:Y(()=>[c(T)?$t((z(),le(c(Rr),Xe({key:0,id:c(s),ref_key:"contentRef",ref:a},y.$attrs,{"aria-label":y.ariaLabel,"aria-hidden":c(O),"boundaries-padding":y.boundariesPadding,"fallback-placements":y.fallbackPlacements,"gpu-acceleration":y.gpuAcceleration,offset:y.offset,placement:y.placement,"popper-options":y.popperOptions,strategy:y.strategy,effect:y.effect,enterable:y.enterable,pure:y.pure,"popper-class":y.popperClass,"popper-style":[y.popperStyle,c(A)],"reference-el":y.referenceEl,"trigger-target-el":y.triggerTargetEl,visible:c(m),"z-index":y.zIndex,onMouseenter:c(x),onMouseleave:c(B),onBlur:j,onClose:c(d)}),{default:Y(()=>[ee(y.$slots,"default")]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Do,c(m)]]):He("v-if",!0)]),_:3},8,["name"])]),_:3},8,["disabled","to"]))}});var Wr=oe(Hr,[["__file","content.vue"]]);const qr=D({name:"ElTooltip"}),zr=D({...qr,props:Mr,emits:_r,setup(e,{expose:t,emit:o}){const n=e;Zn();const r=To(),a=k(),i=k(),u=()=>{var p;const w=c(a);w&&((p=w.popperInstanceRef)==null||p.update())},s=k(!1),l=k(),{show:f,hide:d,hasUpdateHandler:h}=Sr({indicator:s,toggleReason:l}),{onOpen:g,onClose:b}=Qn({showAfter:we(n,"showAfter"),hideAfter:we(n,"hideAfter"),autoClose:we(n,"autoClose"),open:f,close:d}),v=R(()=>jt(n.visible)&&!h.value);Re(ut,{controlled:v,id:r,open:Lo(s),trigger:we(n,"trigger"),onOpen:p=>{g(p)},onClose:p=>{b(p)},onToggle:p=>{c(s)?b(p):g(p)},onShow:()=>{o("show",l.value)},onHide:()=>{o("hide",l.value)},onBeforeShow:()=>{o("before-show",l.value)},onBeforeHide:()=>{o("before-hide",l.value)},updatePopper:u}),F(()=>n.disabled,p=>{p&&s.value&&(s.value=!1)});const E=p=>{var w,T;const m=(T=(w=i.value)==null?void 0:w.contentRef)==null?void 0:T.popperContentRef,C=(p==null?void 0:p.relatedTarget)||document.activeElement;return m&&m.contains(C)};return $o(()=>s.value&&d()),t({popperRef:a,contentRef:i,isFocusInsideContent:E,updatePopper:u,onOpen:g,onClose:b,hide:d}),(p,w)=>(z(),le(c(Ar),{ref_key:"popperRef",ref:a,role:p.role},{default:Y(()=>[Ae(jr,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:Y(()=>[p.$slots.default?ee(p.$slots,"default",{key:0}):He("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ae(Wr,{ref_key:"contentRef",ref:i,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:Y(()=>[ee(p.$slots,"content",{},()=>[p.rawContent?(z(),Ne("span",{key:0,innerHTML:p.content},null,8,["innerHTML"])):(z(),Ne("span",{key:1},No(p.content),1))]),p.showArrow?(z(),le(c(ir),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):He("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Kr=oe(zr,[["__file","tooltip.vue"]]);const Zr=Qe(Kr);export{Zr as E,lr as O,$r as a,lo as b,et as c,X as d,so as u,Gr as w};
