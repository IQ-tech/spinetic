import{j as c,a as be,F as Ee,g as Le,C as Ne}from"./CardExample-1e7cc3e5.js";import{r}from"./index-76fb7be0.js";import{v as C,_ as U,a as De,h as Re}from"./argTypes-ec8699a8.js";import Ce from"./Playground-978c797f.js";import"./_commonjsHelpers-de833af9.js";import"./index-c70b6957.js";import"./iframe-010ca532.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Pe=()=>c("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:c("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:c("g",{transform:"translate(-9.672 -5.234)",children:c("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})}),qe=()=>c("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:c("g",{transform:"translate(-9.672 -5.234)",children:c("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})}),oe=({children:t,currentConfig:s,currentIndex:o,remainingIndexes:e,onClickPreviousItem:a,onClickNextItem:d})=>{const y=s.arrows&&(e==null?void 0:e.length)>1,i=o===0,v=i&&(s==null?void 0:s.hideArrows),u=o===(e==null?void 0:e.length)-1,W=u&&(s==null?void 0:s.hideArrows);return be("div",{className:"spinetic-container-arrows",children:[y&&c("div",{className:"spinetic-btn-prev",children:c("button",{className:"spinetic-navigation-button",onClick:()=>a(),disabled:i,style:{right:`${s.arrowLeftPosition}px`,display:v?"none":"flex"},children:c(Pe,{})})}),t,y&&c("div",{className:"spinetic-btn-next",children:c("button",{className:"spinetic-navigation-button",onClick:()=>d(),disabled:u,style:{left:s.autoWidth?`${s.arrowRightPosition+4}px`:`${s.arrowRightPosition}px`,display:W?"none":"flex"},children:c(qe,{})})})]})};try{oe.displayName="SpineticArrows",oe.__docgenInfo={description:"",displayName:"SpineticArrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const ae=({currentConfig:t,currentIndex:s,maxCarouselItems:o,remainingIndexes:e,goToItem:a})=>{const d=t.dots&&(e==null?void 0:e.length)>1;return c(Ee,{children:d&&c("div",{className:"spinetic-dots",children:e==null?void 0:e.map((y,i)=>c("span",{className:`${t.dotsModel} ${i===s?`active-${t.dotsModel}`:""}`,onClick:()=>a(i),children:t.indexInDots&&c("span",{children:i+1+(o-(e==null?void 0:e.length))})},i))})})};try{ae.displayName="SpineticDots",ae.__docgenInfo={description:"",displayName:"SpineticDots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}}}}}catch{}const Xe=t=>{let s=t;for(;s&&s!==(document==null?void 0:document.documentElement);){if(s.classList&&s.classList.contains("spinetic-item"))return s;s=s.parentElement}return null},Ve=t=>{const s=t==null?void 0:t.reduce((o,e)=>o+e,0);return Math.floor(s)},Te=(t,s)=>{var o;return Math.floor((o=t==null?void 0:t.slice(0,s))==null?void 0:o.reduce((e,a)=>e-a,0))},Me=({_sb:t,config:s,currentConfig:o,remainingIndexes:e,spineticContainer:a,_carouselItemsWidths:d,currentIndex:y,_setCarouselContainerTransform:i,previousItem:v,nextItem:u,_handleItemChange:W})=>{const[_,D]=r.useState(0),[R,A]=r.useState(0),[P,Z]=r.useState(0),[w,Y]=r.useState(!1),[m,ee]=r.useState(!1),[b,te]=r.useState(null),[S,z]=r.useState(null),q=t?C(s):U,E=()=>{const p="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;ee(p?!1:!(o!=null&&o.draggable))};return{start:p=>{var L;if(!q.draggable||(e==null?void 0:e.length)<=1||(E(),m||o.verticalAlign))return;p.stopPropagation();let l=(L=p==null?void 0:p.touches)==null?void 0:L[0];D((p==null?void 0:p.pageX)||(l==null?void 0:l.pageX)),A(l==null?void 0:l.clientX),Z(l==null?void 0:l.clientY),Y(!0),te(Xe(p.target)),a==null||a.current.classList.add("spinetic-no-transition")},move:p=>{var G;if(!q.draggable)return;let l=(G=p==null?void 0:p.touches)==null?void 0:G[0],L=l==null?void 0:l.clientX,ne=l==null?void 0:l.clientY,X=Math.abs(L-R),N=Math.abs(ne-P),B=m||!w;if(!(N>30||B||o.verticalAlign)&&(X>N&&X>20||!l)){p.stopPropagation();const J=((p==null?void 0:p.pageX)||(l==null?void 0:l.pageX)-(a==null?void 0:a.current.scrollLeft))-_;z(J);let V=Te(d,y);V+=J,(X>20||!l)&&i(V),S&&Math.abs(S)>(o==null?void 0:o.touchThreshold)&&b&&b.classList.add("no-click")}},end:p=>{var l;q.draggable&&(Y(!1),!(m||o.verticalAlign)&&(p.stopPropagation(),a==null||a.current.classList.remove("spinetic-no-transition"),S&&Math.abs(S)>(o==null?void 0:o.touchThreshold)&&(S>0?v():u()),(l=b==null?void 0:b.classList)==null||l.remove("no-click"),z(null),W()))}}},$e=({children:t,config:s=U,change:o})=>{var V;const e=r.useRef(null),a=r.useRef(null),[d,y]=r.useState(C(s)),[i,v]=r.useState(0),[u,W]=r.useState([]),[_,D]=r.useState([]),[R,A]=r.useState(!0),[P,Z]=r.useState(window==null?void 0:window.innerWidth),[w,Y]=r.useState(void 0),[m,ee]=r.useState({previous:{index:i,remainingIndexes:u,totalItems:r.Children.count(t)},current:{index:i,remainingIndexes:u,totalItems:r.Children.count(t)}});r.useEffect(()=>te(),[]),r.useEffect(()=>{w&&S(s)},[s,w]),r.useEffect(()=>S(s),[t,P]),r.useEffect(()=>B(),[u,i]),r.useEffect(()=>{o&&(u==null?void 0:u.length)>1&&o(m)},[i]),r.useEffect(()=>(S(s),window.removeEventListener("resize",b),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)),[(V=a.current)==null?void 0:V.offsetWidth,P,window==null?void 0:window.innerWidth]),r.useEffect(()=>{if(d.autoRotate){const n=setInterval(()=>{v(h=>{const I=h+1,g=I>=u.length?0:I;return E({current:{...m.current,index:g},previous:{...m.previous,index:h}}),g})},d.msPerAutoRotate);return()=>clearInterval(n)}},[u,d.autoRotate]);const b=()=>{P!==(window==null?void 0:window.innerWidth)&&(Z(window==null?void 0:window.innerWidth),S(s))},te=()=>{var f;const n=(f=window==null?void 0:window.location)==null?void 0:f.href,h=!!(sessionStorage!=null&&sessionStorage.getItem("@storybook/manager/store")),I=!!(localStorage!=null&&localStorage.getItem("@storybook/manager/store")),g=(n==null?void 0:n.includes("docs"))||h||I;return Y(g)},S=n=>{const h=C(n),I=h.responsive?[...h.responsive.map(f=>f.breakpoint)]:[],g=window==null?void 0:window.innerWidth;I.forEach((f,T)=>{var k;if(g<=f){const x=(k=h==null?void 0:h.responsive[T])==null?void 0:k.settings;Object.keys(x).forEach(M=>{h[M]=x[M]})}}),y(C(h)),z()},z=()=>{var pe,he,me;q();const n=Ve(_),h=w?C(s):U,I=w?h.verticalAlign:d.verticalAlign;(pe=e.current)==null||pe.classList.toggle("spinetic-vertical-align",I);let g=0,f=0,T=0;_.some(H=>{if(f+=H,f<=(e==null?void 0:e.current.offsetWidth))g++;else return H}),T=Math.max(0,r.Children.count(t)-g);let k=i,x=0;const M=H=>{H.forEach((re,We)=>{We<k&&(x+=re)})};k>T?(k=T,x=n-(e==null?void 0:e.current.offsetWidth)):M(_);const $=Array.from({length:T+1},(H,re)=>re+g);E({current:{index:0,remainingIndexes:$,totalItems:r.Children.count(t)},previous:{index:0,remainingIndexes:$,totalItems:r.Children.count(t)}}),W($),((he=m==null?void 0:m.current)==null?void 0:he.remainingIndexes)!==$&&v(0);const K=(w?h.draggable:d.draggable)&&(u==null?void 0:u.length)>1;(me=a.current)==null||me.classList.toggle("hasDraggable",K),n<=(e==null?void 0:e.current.offsetWidth)?N(0):N(x)},q=()=>{var T,k;const n=((T=a.current)==null?void 0:T.querySelectorAll(".spinetic-item"))??null,h=e.current.offsetWidth,I=(k=a.current)==null?void 0:k.offsetHeight,g=[],f=w?C(s):U;return n!==null&&n.forEach((x,M)=>{if(w?f.autoWidth:d.autoWidth)g.push(x.offsetWidth),x.style.width="";else{const K=w?f.showItems:d.showItems;g.push(h/K),x.style.width=h/K+"px"}(w?f.fullHeightItems:d.fullHeightItems)?window==null||window.requestAnimationFrame(()=>{x.style.height=I+"px"}):x.style.height=""}),D(g),g},E=n=>{ee(h=>({previous:{...h.previous,...n.previous},current:{...h.current,...n.current}}))},F=n=>d.clickTransitionCtrl?R&&n:n,de=i>0,se=()=>{if(F(de)){const n=i-1;E({current:{...m.current,index:n},previous:{...m.previous,index:i}}),v(n)}},p=i<(u==null?void 0:u.length)-1,l=()=>{if(F(p)){const n=i+1;E({current:{...m.current,index:n},previous:{...m.previous,index:i}}),v(n)}},L=r.Children.count(t),ne=n=>n>=0&&n<L,X=n=>{F(ne(n))&&(E({current:{...m.current,index:n},previous:{...m.previous,index:i}}),v(n))},N=n=>{a.current.style.transform=`translateX(${n}px)`},B=()=>{A(!1);const n=Te(_,i);N(n),setTimeout(()=>{A(!0)},d.msPerClicks)},{start:G,move:ue,end:J}=Me({_sb:w,config:s,currentConfig:d,remainingIndexes:u,spineticContainer:a,_carouselItemsWidths:_,currentIndex:i,_setCarouselContainerTransform:N,previousItem:se,nextItem:l,_handleItemChange:B});return{currentConfig:d,currentIndex:i,spineticMain:e,spineticContainer:a,maxCarouselItems:L,remainingIndexes:u,goToItem:X,previousItem:se,nextItem:l,start:G,move:ue,end:J}},ie=({children:t,config:s,change:o})=>{const{currentConfig:e,currentIndex:a,spineticMain:d,spineticContainer:y,maxCarouselItems:i,remainingIndexes:v,goToItem:u,previousItem:W,nextItem:_,start:D,move:R,end:A}=$e({children:t,config:s,change:o});return be("div",{className:"spinetic-main",ref:d,children:[c("div",{className:"spinetic-wrapper",children:c(oe,{currentConfig:e,currentIndex:a,remainingIndexes:v,onClickPreviousItem:W,onClickNextItem:_,children:c("div",{className:"spinetic-container",ref:y,onMouseDown:D,onMouseMove:R,onMouseUp:A,onMouseLeave:A,onTouchStart:D,onTouchMove:R,onTouchEnd:A,children:t})})}),c(ae,{currentConfig:e,currentIndex:a,maxCarouselItems:i,remainingIndexes:v,goToItem:u})]})},ke=ie;try{ie.displayName="Spinetic",ie.__docgenInfo={description:"",displayName:"Spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const le=({children:t})=>c("div",{className:"spinetic-item",children:t});try{le.displayName="SpineticItem",le.__docgenInfo={description:"",displayName:"SpineticItem",props:{}}}catch{}const et={title:"Pages/Playground",parameters:{docs:{page:Ce,source:{language:"tsx"}}},tags:["autodocs"],component:ke,argTypes:De},ce=t=>{const s=Le(t.children),o=t.change;delete t.children,delete t.change;const e={...t};return c(ke,{config:e,change:o?Re:void 0,children:s.map((a,d)=>c(le,{children:c(Ne,{highlightText:!1,index:d,text:a})},d))})},Q=ce.bind({}),O=ce.bind({});O.args={autoWidth:!0,dotsModel:"long-rounded",fullHeightItems:!0};const j=ce.bind({});j.args={autoRotate:!0,dotsModel:"long-rounded",hideArrows:!0,msPerAutoRotate:2e3,showItems:3};var ge,fe,ve;Q.parameters={...Q.parameters,docs:{...(ge=Q.parameters)==null?void 0:ge.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(ve=(fe=Q.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,xe,Se;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(Se=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ie,ye,_e;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(_e=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:_e.source}}};const tt=["Default","AutoWidth","AutoRotate"];export{j as AutoRotate,O as AutoWidth,Q as Default,tt as __namedExportsOrder,et as default};
