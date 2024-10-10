import{j as d,a as G,F as At,g as Ft,S as Jt,C as jt}from"./CardExample-edf23076.js";import{r as o}from"./index-76fb7be0.js";import{_ as X,e as Ht,a as Yt}from"./argTypes-41a615a3.js";import Bt from"./Playground-2fe8de01.js";import"./_commonjsHelpers-de833af9.js";import"./index-b2ab6839.js";import"./iframe-8582f50d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Ut=o.memo(()=>d("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:d("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:d("g",{transform:"translate(-9.672 -5.234)",children:d("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})})),zt=o.memo(()=>d("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:d("g",{transform:"translate(-9.672 -5.234)",children:d("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})),it=({children:e,currentConfig:t,currentIndex:s,remainingIndexes:n,onClickPreviousItem:r,onClickNextItem:a})=>{var g,w,u;const p=t.arrows&&(n==null?void 0:n.length)>1,c=s===0,v=c&&(t==null?void 0:t.hideArrows),i=s===(n==null?void 0:n.length)-1,h=i&&(t==null?void 0:t.hideArrows);return G("div",{className:"spinetic-container-arrows",style:{...(g=t.arrowsStyle)==null?void 0:g.container},children:[p&&d("button",{className:"spinetic-btn-prev",onClick:()=>r(),disabled:c,style:{display:v?"none":"flex",...(w=t.arrowsStyle)==null?void 0:w.btnPrev},children:d(Ut,{})}),e,p&&d("button",{className:"spinetic-btn-next",onClick:()=>a(),disabled:i,style:{display:h?"none":"flex",...(u=t.arrowsStyle)==null?void 0:u.btnNext},children:d(zt,{})})]})};try{it.displayName="Arrows",it.__docgenInfo={description:"",displayName:"Arrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const Gt=()=>{var s;const e=(s=window==null?void 0:window.location)==null?void 0:s.href,t=!!(localStorage!=null&&localStorage.getItem("@storybook/manager/store"));return(e==null?void 0:e.includes("pages-playground"))&&t},yt=e=>{if(!e)return 0;const t=window==null?void 0:window.getComputedStyle(e);return parseFloat(t.width)+parseFloat(t.marginLeft)+parseFloat(t.marginRight)},Kt=e=>{let t=e;for(;t&&t!==(document==null?void 0:document.documentElement);){if(t.classList&&t.classList.contains("spinetic-item"))return t;t=t.parentElement}return null},Qt=e=>{const t=e==null?void 0:e.reduce((s,n)=>s+n,0);return Math.floor(t)},Pt=(e,t)=>{var s;return Math.floor((s=e==null?void 0:e.slice(0,t))==null?void 0:s.reduce((n,r)=>n-r,0))},Zt=(e,t)=>(e==null?void 0:e.length)!==(t==null?void 0:t.length)||!e||!t?!1:e==null?void 0:e.every((s,n)=>s===t[n]);function Ct(e){return typeof e!="number"||isNaN(e)||!isFinite(e)?1:e}function ut(e,t){let s=0;for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){s++;const r=e[n];typeof r=="object"&&r!==null&&!t.has(r)&&(t.add(r),s+=ut(r,t))}return s}function Rt(e,t,s=500,n=new Set){if(!e||!t)return!1;const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;const p=ut(e,n),c=ut(t,n);if(p>s||c>s)return!1;for(const v of r){const i=e[v],h=t[v];if(typeof i=="object"&&i!==null&&typeof h=="object"&&h!==null){if(!Rt(i,h,s,n))return!1}else if(i!==h)return!1}return!0}function te(e,t,s=500){return!e||!t?!1:e.every((r,a)=>{var v,i,h,g,w;const p=(i=(v=r==null?void 0:r.props)==null?void 0:v.children)==null?void 0:i.props,c=(w=(g=(h=t[a])==null?void 0:h.props)==null?void 0:g.children)==null?void 0:w.props;return Rt(p,c,s)})}const ee=({currentConfig:e,remainingIndexes:t,currentIndex:s})=>{const n=o.useRef(null),r=o.useRef(null),a=e.dots&&(t==null?void 0:t.length)>1,p=5,c=Math.floor(p/2),v=(t==null?void 0:t.length)>p&&e.maxDots,[i,h]=o.useState({dotWidth:void 0,dotActiveWidth:void 0,mainDotsWidth:void 0}),g=b=>{var I;const S=(I=n.current)==null?void 0:I.children[0];S&&r.current&&(S.style.paddingLeft=b,r.current.style.transform=`translateX(${-s*(i.dotWidth||0)}px)`)},w=()=>{const b=s===0,S=s===1,I=s>=2,W=s>=(t==null?void 0:t.length)-c||!1;b&&g(""),S&&g(`${i.dotWidth}px`),I&&g(`${c*(i.dotWidth||0)}px`),W&&g(`${c+1+(i.dotActiveWidth||0)}px`)},u=()=>{var W,D;const b=yt((W=r==null?void 0:r.current)==null?void 0:W.children[1]),S=yt((D=r==null?void 0:r.current)==null?void 0:D.children[0]),I=S+(p-1)*(b||0);b>0&&!i.dotWidth&&n.current&&(h({dotWidth:b,dotActiveWidth:S,mainDotsWidth:I}),n.current.style.width=`${I}px`)};return o.useEffect(()=>{n.current&&(u(),w())},[s,t,e.maxDots,e.dots,e.layout]),{visibleDots:a,hasMaxDots:v,dotsMainRef:n,dotsContainerRef:r}},dt=({currentConfig:e,currentIndex:t,maxCarouselItems:s,remainingIndexes:n,goToItem:r,CustomChildrenDots:a})=>{var h,g;const{visibleDots:p,hasMaxDots:c,dotsMainRef:v,dotsContainerRef:i}=ee({currentConfig:e,remainingIndexes:n,currentIndex:t});return G(At,{children:[p&&c&&!a&&d("div",{className:"spinetic-dots-main",ref:v,children:d("div",{className:"spinetic-dots-wrapper",children:d("div",{ref:i,className:"spinetic-dots",style:{...(h=e.dotsStyle)==null?void 0:h.container},children:n==null?void 0:n.map((w,u)=>{var b,S;return d("span",{className:`spinetic-dot ${u===t?"spinetic-dot-active":""}`,style:{...(b=e.dotsStyle)==null?void 0:b.dot,...u===t?(S=e.dotsStyle)==null?void 0:S.dotActive:null},onClick:()=>r(u),children:e.itemNumberInDot&&d("span",{className:"spinetic-dot-item-number",children:u+1+(s-(n==null?void 0:n.length))})},u)})})})}),p&&!c&&!a&&d("div",{className:"spinetic-dots",style:{...(g=e.dotsStyle)==null?void 0:g.container},children:n==null?void 0:n.map((w,u)=>{var b,S;return d("span",{className:`spinetic-dot ${u===t?"spinetic-dot-active":""}`,style:{...(b=e.dotsStyle)==null?void 0:b.dot,...u===t?(S=e.dotsStyle)==null?void 0:S.dotActive:null},onClick:()=>r(u),children:e.itemNumberInDot&&d("span",{className:"spinetic-dot-item-number",children:u+1+(s-(n==null?void 0:n.length))})},u)})}),p&&a&&d(a,{currentIndex:t,remainingIndexes:n})]})};try{dt.displayName="Dots",dt.__docgenInfo={description:"",displayName:"Dots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}},CustomChildrenDots:{defaultValue:null,description:"",name:"CustomChildrenDots",required:!1,type:{name:"((args: { currentIndex: number; remainingIndexes: number[]; }) => ReactNode)"}}}}}catch{}const se=e=>!e||!(e!=null&&e.length)?X.responsive:(e==null?void 0:e.sort((s,n)=>n.breakpoint-s.breakpoint))??X.responsive,ne=e=>{const t=window.innerWidth,s=e>t/2;return e===void 0||s?X.touchThreshold:e},re=e=>!e||e<1?X.showItems:e,oe=e=>typeof e!="boolean"?X.autoWidth:e,ct=e=>{const t=e,s=X;return{arrows:(t==null?void 0:t.arrows)??s.arrows,arrowsStyle:(t==null?void 0:t.arrowsStyle)??s.arrowsStyle,hideArrows:(t==null?void 0:t.hideArrows)??s.hideArrows,progressIndicator:(t==null?void 0:t.progressIndicator)??(s==null?void 0:s.progressIndicator),dots:(t==null?void 0:t.dots)??s.dots,dotsStyle:(t==null?void 0:t.dotsStyle)??s.dotsStyle,itemNumberInDot:(t==null?void 0:t.itemNumberInDot)??s.itemNumberInDot,maxDots:(t==null?void 0:t.maxDots)??s.maxDots,autoRotate:(t==null?void 0:t.autoRotate)??s.autoRotate,msPerAutoRotate:(t==null?void 0:t.msPerAutoRotate)??s.msPerAutoRotate,draggable:(t==null?void 0:t.draggable)??s.draggable,touchThreshold:ne((t==null?void 0:t.touchThreshold)??s.touchThreshold),layout:(t==null?void 0:t.layout)??s.layout,showItems:re((t==null?void 0:t.showItems)??s.showItems),fullHeightItems:(t==null?void 0:t.fullHeightItems)??s.fullHeightItems,autoWidth:oe(t==null?void 0:t.autoWidth),centerSingleItemAW:(t==null?void 0:t.centerSingleItemAW)??s.centerSingleItemAW,groupScroll:(t==null?void 0:t.groupScroll)??s.groupScroll,groupItemsScroll:(t==null?void 0:t.groupItemsScroll)??s.groupItemsScroll,clickTransitionCtrl:(t==null?void 0:t.clickTransitionCtrl)??s.clickTransitionCtrl,msPerClicks:(t==null?void 0:t.msPerClicks)??s.msPerClicks,resetScrollOnUpdateChildrens:(t==null?void 0:t.resetScrollOnUpdateChildrens)??(s==null?void 0:s.resetScrollOnUpdateChildrens),responsive:se(t==null?void 0:t.responsive)}},le=({_sb:e,currentConfig:t,remainingIndexes:s,spineticContainer:n,_carouselItemsWidths:r,currentIndex:a,_setCarouselContainerTransform:p,previousItem:c,nextItem:v,_handleItemChange:i})=>{const[h,g]=o.useState(0),[w,u]=o.useState(0),[b,S]=o.useState(0),[I,W]=o.useState(!1),[D,T]=o.useState(!1),[q,rt]=o.useState(null),[P,K]=o.useState(null),Q=()=>{const k="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;T(k?!1:!(t!=null&&t.draggable))};o.useEffect(()=>{Q()},[Q,window==null?void 0:window.ontouchstart,navigator==null?void 0:navigator.maxTouchPoints]);const _=o.useCallback(k=>{const m=n==null?void 0:n.current;m&&m.classList[k?"add":"remove"]("spinetic-no-transition")},[n]),L=o.useCallback(k=>{var M;if(e&&!t.draggable||(s==null?void 0:s.length)<=1||D||t.layout==="vertical-align")return;k.stopPropagation();const m=(M=k.touches)==null?void 0:M[0];g(k.pageX||(m==null?void 0:m.pageX)||0),u((m==null?void 0:m.clientX)||0),S((m==null?void 0:m.clientY)||0),W(!0),rt(Kt(k.target)),D||_(!0)},[t,e,t.draggable,s==null?void 0:s.length,D,_]),J=o.useCallback(k=>{var H,C;if(e&&!t.draggable||!I||D||t.layout==="vertical-align")return;const m=(H=k.touches)==null?void 0:H[0],M=(m==null?void 0:m.clientX)||0,F=(m==null?void 0:m.clientY)||0,V=Math.abs(M-w),j=Math.abs(F-b);if(!(j>30)&&(V>j&&V>20||!m)){k.stopPropagation();const tt=(k.pageX||((m==null?void 0:m.pageX)||0)-(((C=n==null?void 0:n.current)==null?void 0:C.scrollLeft)||0))-h;K(tt);const l=Pt(r,a)+tt;(V>20||!m)&&p(l),P&&Math.abs(P)>t.touchThreshold&&q&&q.classList.add("no-click")}},[e,t.draggable,I,D,t.layout,w,b,h,P,q,r,a,p]),Z=o.useCallback(k=>{e&&!t.draggable||D||t.layout==="vertical-align"||(W(!1),k.stopPropagation(),P&&Math.abs(P)>t.touchThreshold&&(P>0?c():v()),q&&q.classList.remove("no-click"),K(null),i(),_(!1))},[e,t.draggable,D,t.layout,P,c,v,q,i,_]);return{start:L,move:J,end:Z}},ae=({children:e,config:t=X,change:s})=>{const[n]=o.useState(Gt()),r=o.useRef(null),a=o.useRef(null),p=o.useRef(e),[c,v]=o.useState(ct(t)),[i,h]=o.useState(0),[g,w]=o.useState(1),[u,b]=o.useState([]),[S,I]=o.useState([]),[W,D]=o.useState(!0),[T,q]=o.useState(Ht),rt=(t==null?void 0:t.progressIndicator)||"dots",P=o.useCallback(l=>{const f=a.current,y=r.current;if(!f||!y)return null;const x=f.querySelectorAll(".spinetic-item"),{autoWidth:N,showItems:R,fullHeightItems:$}=l,E=[];return x!==null&&(x==null||x.forEach(A=>{N?(E.push(A.offsetWidth),A.style.width=""):(E.push(y.offsetWidth/R),A.style.width=y.offsetWidth/R+"px"),$?window.requestAnimationFrame(()=>{A.style.height=f.offsetHeight+"px"}):A.style.height=""})),I(E),E},[u,p.current,t,c,r.current,a.current,e]),K=o.useCallback(l=>{var mt,ft,gt,St;if(l.layout==="vertical-align")return;P(l);const f=Qt(S);let y=0,x=0,N=0;const R=((mt=r==null?void 0:r.current)==null?void 0:mt.offsetWidth)??0;S.some(O=>{if(x+=O,x<=R)y++,w(y);else return O}),N=Math.max(0,o.Children.count(e)-y);let $=i,E=0;const A=O=>{O.forEach((at,Mt)=>{Mt<$&&(E+=at)})};$>N?($=N,E=f-R):A(S);const{groupScroll:Y,groupItemsScroll:ot}=l,lt=ot>1&&ot<=y?ot:y,Ot=Math.ceil(Ct(N/lt)),Lt=(e==null?void 0:e.length)>0&&Y?Ot:N,Vt=O=>Y?(O+1)*y:O+y-1,et=Array.from({length:Lt+1},(O,at)=>Vt(at));L({current:{index:0,remainingIndexes:et,totalItems:o.Children.count(e),itemsPerScroll:lt},previous:{index:0,remainingIndexes:et,totalItems:o.Children.count(e),itemsPerScroll:lt}}),b(et),!Zt((ft=T==null?void 0:T.current)==null?void 0:ft.remainingIndexes,et)&&c.resetScrollOnUpdateChildrens&&h(0);const $t=l.draggable&&(u==null?void 0:u.length)>1;(gt=a.current)==null||gt.classList.toggle("hasDraggable",$t);const Xt=((St=r==null?void 0:r.current)==null?void 0:St.offsetWidth)??0;f<=Xt?F(0):F(E)},[u,p.current,t,c,r.current,a.current,e]),Q=o.useCallback(l=>{const f=r.current;if(!f)return;const y=f.children[0],x=l.autoWidth&&l.centerSingleItemAW;return(e==null?void 0:e.length)===1&&x?y.style.justifyContent="center":y.style.justifyContent=""},[e,c.centerSingleItemAW]),_=o.useCallback(l=>{const f=ct(l),y=f.responsive?[...f.responsive.map(R=>R.breakpoint)]:[],x=window==null?void 0:window.innerWidth;y.forEach((R,$)=>{var E;if(x<=R){const A=(E=f==null?void 0:f.responsive[$])==null?void 0:E.settings;Object.keys(A).forEach(Y=>{f[Y]=A[Y]})}});const N=ct(f);v(N),K(N),Q(N)},[p.current,a.current,window.innerWidth,...n?[t,e,c.layout,c.autoWidth,c.centerSingleItemAW,c.fullHeightItems,c.maxDots]:[]]),L=l=>{q(f=>({previous:{...f.previous,...l.previous},current:{...f.current,...l.current}}))},J=l=>c.clickTransitionCtrl?W&&l:l,Z=()=>{if(J(i>0)){const l=i-1;h(l),L({current:{...T.current,index:l},previous:{...T.previous,index:i}})}},k=()=>{if(J(i<(u==null?void 0:u.length)-1)){const l=i+1;h(l),L({current:{...T.current,index:l},previous:{...T.previous,index:i}})}},m=l=>l>=0&&l<o.Children.count(e),M=l=>{J(m(l))&&(h(l),L({current:{...T.current,index:l},previous:{...T.previous,index:i}}))},F=l=>{if(c.layout!=="vertical-align"&&a!=null&&a.current){const{groupScroll:f,groupItemsScroll:y}=c,x=y>1&&y<=g?y:g,N=f?l*x:l;a.current.style.transform=`translateX(${N}px)`}},V=o.useCallback(()=>{D(!1);const l=Pt(S,i);F(l),setTimeout(()=>{D(!0)},c.msPerClicks)},[u,i]),j=o.useCallback(()=>{te(e,p.current)||(_(t),p.current=e)},[t,e]),H=o.useCallback(()=>{if(c.autoRotate){const l=setInterval(()=>{h(f=>{const y=f+1,x=y>=u.length?0:y;return L({current:{...T.current,index:x},previous:{...T.previous,index:f}}),x})},c.msPerAutoRotate);return()=>clearInterval(l)}},[u,c.autoRotate]),{start:C,move:ht,end:tt}=le({_sb:n,config:t,currentConfig:c,remainingIndexes:u,spineticContainer:a,_carouselItemsWidths:S,currentIndex:i,_setCarouselContainerTransform:F,previousItem:Z,nextItem:k,_handleItemChange:V});return o.useEffect(()=>H(),[H]),o.useEffect(()=>V(),[V]),o.useEffect(()=>{_(t)},[_]),o.useEffect(()=>j(),[j]),o.useEffect(()=>{s&&(u==null?void 0:u.length)>1&&s(T)},[i]),o.useEffect(()=>window.addEventListener("resize",()=>_(t)),[window.innerWidth,a.current,t]),o.useEffect(()=>{n&&_(t)},[n,_]),{currentConfig:c,prevChildren:p,currentIndex:i,spineticMain:r,spineticContainer:a,maxCarouselItems:o.Children.count(e),remainingIndexes:u,goToItem:M,previousItem:Z,nextItem:k,start:C,move:ht,end:tt,progressIndicatorType:rt,elementsChange:T}};function ce(e){const{elementsChange:t,remainingIndexes:s,currentIndex:n}=e,r=o.useRef(null),a=o.useRef(null),p=(s==null?void 0:s.length)>1;return o.useEffect(()=>{if(!r.current||!a.current||!(t!=null&&t.current))return;const c=r.current.offsetWidth,v=a.current.offsetWidth,i=c-v,h=t.current.totalItems,g=t.current.itemsPerScroll,w=Math.ceil(h/g)-1,b=n/w*i;a.current.style.transform=`translateX(${b}px)`},[t,n]),{showScroll:p,scrollTrail:r,scrollbar:a}}function pt(e){const{showScroll:t,scrollTrail:s,scrollbar:n}=ce(e);return t?d("div",{ref:s,className:"spinetic-scrollbar",children:d("div",{ref:n,className:"spinetic-scrollbar-scroll"})}):null}try{pt.displayName="Scrollbar",pt.__docgenInfo={description:"",displayName:"Scrollbar",props:{elementsChange:{defaultValue:null,description:"",name:"elementsChange",required:!1,type:{name:"TypesSpineticChangeEvent"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}}}}}catch{}const ie=({children:e,CustomChildrenDots:t,config:s,change:n})=>{const{currentConfig:r,progressIndicatorType:a,currentIndex:p,spineticMain:c,spineticContainer:v,maxCarouselItems:i,elementsChange:h,remainingIndexes:g,goToItem:w,previousItem:u,nextItem:b,start:S,move:I,end:W}=ae({children:e,config:s,change:n});return G(At,{children:[r.layout!=="vertical-align"&&G("div",{className:`spinetic-main spinetic-layout-${r.layout}`,ref:c,children:[d("div",{className:"spinetic-wrapper",children:d("div",{children:d("div",{className:"spinetic-container",ref:v,onMouseDown:S,onMouseMove:I,onMouseUp:W,onMouseLeave:W,onTouchStart:S,onTouchMove:I,onTouchEnd:W,children:e})})}),G(it,{currentConfig:r,currentIndex:p,remainingIndexes:g,onClickPreviousItem:u,onClickNextItem:b,children:[a==="dots"&&d(dt,{currentConfig:r,currentIndex:p,maxCarouselItems:i,remainingIndexes:g,goToItem:w,CustomChildrenDots:t}),a==="scrollbar"&&d(pt,{currentIndex:p,elementsChange:h,remainingIndexes:g})]})]}),r.layout==="vertical-align"&&d("div",{className:"spinetic-layout-vertical-align",children:d("div",{children:e})})]})},qt=ie;try{spinetic.displayName="spinetic",spinetic.__docgenInfo={description:"",displayName:"spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},CustomChildrenDots:{defaultValue:null,description:"",name:"CustomChildrenDots",required:!1,type:{name:"((args: { currentIndex: number; remainingIndexes: number[]; }) => ReactNode)"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const ue=e=>{const t=e.current,s=e.previous;alert(` change
    { 
      current: {
        index: ${JSON.stringify(t.index)},
        remainingIndexes: ${JSON.stringify(s.remainingIndexes)}
        totalItems: ${JSON.stringify(s.totalItems)}
        itemsPerScroll: ${JSON.stringify(s.itemsPerScroll)}
      },
      previous: {
        index: ${JSON.stringify(s.index)},
        remainingIndexes: ${JSON.stringify(s.remainingIndexes)}
        totalItems: ${JSON.stringify(s.totalItems)}
        itemsPerScroll: ${JSON.stringify(s.itemsPerScroll)}
      }
  }
`)},Te={title:"Pages/Playground",component:qt,argTypes:Yt,parameters:{docs:{page:Bt,source:{language:"tsx"}}},tags:["autodocs"]},nt=e=>{const t=Ft(e.children),s=e.change;delete e.children,delete e.change;const n={...e};return d(qt,{config:n,change:s?ue:void 0,children:t.map((r,a)=>d(Jt,{children:d(jt,{highlightText:!1,index:a,text:r})},a))})},st=nt.bind({}),B=nt.bind({});B.args={autoWidth:!0};const U=nt.bind({});U.args={autoRotate:!0,msPerAutoRotate:2e3};const z=nt.bind({});z.args={children:3,showItems:2,layout:"ctrls-in-line-2",responsive:[{breakpoint:768,settings:{layout:"vertical-align"}}]};var bt,vt,wt;st.parameters={...st.parameters,docs:{...(bt=st.parameters)==null?void 0:bt.docs,source:{originalSource:`(args: T.TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };
  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {childrens.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(wt=(vt=st.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var kt,xt,It;B.parameters={...B.parameters,docs:{...(kt=B.parameters)==null?void 0:kt.docs,source:{originalSource:`(args: T.TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };
  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {childrens.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(It=(xt=B.parameters)==null?void 0:xt.docs)==null?void 0:It.source}}};var Tt,Wt,Dt;U.parameters={...U.parameters,docs:{...(Tt=U.parameters)==null?void 0:Tt.docs,source:{originalSource:`(args: T.TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };
  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {childrens.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(Dt=(Wt=U.parameters)==null?void 0:Wt.docs)==null?void 0:Dt.source}}};var Nt,_t,Et;z.parameters={...z.parameters,docs:{...(Nt=z.parameters)==null?void 0:Nt.docs,source:{originalSource:`(args: T.TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };
  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {childrens.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(Et=(_t=z.parameters)==null?void 0:_t.docs)==null?void 0:Et.source}}};const We=["Default","AutoWidth","AutoRotate","Responsive"];export{U as AutoRotate,B as AutoWidth,st as Default,z as Responsive,We as __namedExportsOrder,Te as default};
