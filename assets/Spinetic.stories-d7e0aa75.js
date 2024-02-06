import{j as l,a as Se,F as Te,g as ke,C as We}from"./CardExample-1e7cc3e5.js";import{r}from"./index-76fb7be0.js";import{v as B,b as Ae,_ as Ee,a as Le,h as Ne}from"./argTypes-039655b7.js";import De from"./Playground-d8f19b7b.js";import"./_commonjsHelpers-de833af9.js";import"./index-2699bcd6.js";import"./iframe-9548ee25.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Re=()=>l("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:l("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:l("g",{transform:"translate(-9.672 -5.234)",children:l("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})}),Pe=()=>l("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:l("g",{transform:"translate(-9.672 -5.234)",children:l("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})}),se=({children:e,currentConfig:t,currentIndex:a,remainingIndexes:s,onClickPreviousItem:h,onClickNextItem:u})=>{const S=t.arrows&&(s==null?void 0:s.length)>1,o=a===0,v=o&&(t==null?void 0:t.hideArrows),p=a===(s==null?void 0:s.length)-1,W=p&&(t==null?void 0:t.hideArrows);return Se("div",{className:"spinetic-container-arrows",children:[S&&l("div",{className:"spinetic-btn-prev",children:l("button",{className:"spinetic-navigation-button",onClick:()=>h(),disabled:o,style:{right:`${t.arrowLeftPosition}px`,display:v?"none":"flex"},children:l(Re,{})})}),e,S&&l("div",{className:"spinetic-btn-next",children:l("button",{className:"spinetic-navigation-button",onClick:()=>u(),disabled:p,style:{left:t.autoWidth?`${t.arrowRightPosition+4}px`:`${t.arrowRightPosition}px`,display:W?"none":"flex"},children:l(Pe,{})})})]})};try{se.displayName="SpineticArrows",se.__docgenInfo={description:"",displayName:"SpineticArrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const ne=({currentConfig:e,currentIndex:t,maxCarouselItems:a,remainingIndexes:s,goToItem:h})=>{const u=e.dots&&(s==null?void 0:s.length)>1;return l(Te,{children:u&&l("div",{className:"spinetic-dots",children:s==null?void 0:s.map((S,o)=>l("span",{className:`${e.dotsModel} ${o===t?`active-${e.dotsModel}`:""}`,onClick:()=>h(o),children:e.indexInDots&&l("span",{children:o+1+(a-(s==null?void 0:s.length))})},o))})})};try{ne.displayName="SpineticDots",ne.__docgenInfo={description:"",displayName:"SpineticDots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}}}}}catch{}const Ce=e=>{let t=e;for(;t&&t!==(document==null?void 0:document.documentElement);){if(t.classList&&t.classList.contains("spinetic-item"))return t;t=t.parentElement}return null},qe=e=>{const t=e==null?void 0:e.reduce((a,s)=>a+s,0);return Math.floor(t)},xe=(e,t)=>{var a;return Math.floor((a=e==null?void 0:e.slice(0,t))==null?void 0:a.reduce((s,h)=>s-h,0))},Xe=({currentConfig:e,remainingIndexes:t,spineticContainer:a,_carouselItemsWidths:s,currentIndex:h,_setCarouselContainerTransform:u,previousItem:S,nextItem:o,_handleItemChange:v})=>{const[p,W]=r.useState(0),[I,E]=r.useState(0),[L,_]=r.useState(0),[C,Y]=r.useState(!1),[b,J]=r.useState(!1),[m,K]=r.useState(null),[y,H]=r.useState(null),N=()=>{const c="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;J(c?!1:!(e!=null&&e.draggable))};return{start:c=>{var A;if((t==null?void 0:t.length)<=1||(N(),b||e.verticalAlign))return;c.stopPropagation();let i=(A=c==null?void 0:c.touches)==null?void 0:A[0];W((c==null?void 0:c.pageX)||(i==null?void 0:i.pageX)),E(i==null?void 0:i.clientX),_(i==null?void 0:i.clientY),Y(!0),K(Ce(c.target)),a==null||a.current.classList.add("spinetic-no-transition")},move:c=>{var z;let i=(z=c==null?void 0:c.touches)==null?void 0:z[0],A=i==null?void 0:i.clientX,U=i==null?void 0:i.clientY,R=Math.abs(A-I),q=Math.abs(U-L),Z=b||!C;if(!(q>30||Z||e.verticalAlign)&&(R>q&&R>20||!i)){c.stopPropagation();const V=((c==null?void 0:c.pageX)||(i==null?void 0:i.pageX)-(a==null?void 0:a.current.scrollLeft))-p;H(V);let F=xe(s,h);F+=V,(R>20||!i)&&u(F),y&&Math.abs(y)>(e==null?void 0:e.touchThreshold)&&m&&m.classList.add("no-click")}},end:c=>{var i;Y(!1),!(b||e.verticalAlign)&&(c.stopPropagation(),a==null||a.current.classList.remove("spinetic-no-transition"),y&&Math.abs(y)>(e==null?void 0:e.touchThreshold)&&(y>0?S():o()),(i=m==null?void 0:m.classList)==null||i.remove("no-click"),H(null),v())}}},Ve=({children:e,config:t=Ee,change:a})=>{var le;const s=r.useRef(null),h=r.useRef(null),[u,S]=r.useState(B(t)),[o,v]=r.useState(0),[p,W]=r.useState([]),[I,E]=r.useState([]),[L,_]=r.useState(!0),[C,Y]=r.useState(window==null?void 0:window.innerWidth),[b,J]=r.useState(void 0),[m,K]=r.useState({previous:{index:o,remainingIndexes:p,totalItems:r.Children.count(e)},current:{index:o,remainingIndexes:p,totalItems:r.Children.count(e)}});r.useEffect(()=>H(),[]),r.useEffect(()=>{b&&N(t)},[t,b]),r.useEffect(()=>N(t),[e,C]),r.useEffect(()=>V(),[p,o]),r.useEffect(()=>{a&&(p==null?void 0:p.length)>0&&a(m)},[o]),r.useEffect(()=>(N(t),window.removeEventListener("resize",y),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[(le=h.current)==null?void 0:le.offsetWidth,C,window==null?void 0:window.innerWidth]),r.useEffect(()=>{if(u.autoRotate){const n=setInterval(()=>{v(d=>{const w=d+1,g=w>=p.length?0:w;return D({current:{...m.current,index:g},previous:{...m.previous,index:d}}),g})},u.msPerAutoRotate);return()=>clearInterval(n)}},[p,u.autoRotate]);const y=()=>{C!==(window==null?void 0:window.innerWidth)&&(Y(window==null?void 0:window.innerWidth),N(t))},H=()=>{var f;const n=(f=window==null?void 0:window.location)==null?void 0:f.href,d=!!(sessionStorage!=null&&sessionStorage.getItem("@storybook/manager/store")),w=!!(localStorage!=null&&localStorage.getItem("@storybook/manager/store")),g=(n==null?void 0:n.includes("docs"))||d||w;return J(g)},N=n=>{const d=B(n),w=d.responsive?[...d.responsive.map(f=>f.breakpoint)]:[],g=window==null?void 0:window.innerWidth;if(w.forEach((f,T)=>{var x;if(g<=f){const k=(x=d==null?void 0:d.responsive[T])==null?void 0:x.settings;Object.keys(k).forEach(P=>{d[P]=k[P]})}}),d.verticalAlign){const f={...d,arrows:!1,dots:!1,draggable:!1,fullHeightItems:!1};S(B(f)),Q()}else S(B(d)),Q()},Q=()=>{var ee,M,ce;ie();const n=qe(I);(ee=s.current)==null||ee.classList.toggle("spinetic-vertical-align",u.verticalAlign);let d=0,w=0,g=0;I.some($=>{if(w+=$,w<=(s==null?void 0:s.current.offsetWidth))d++;else return $}),g=Math.max(0,r.Children.count(e)-d);let f=o,T=0;const x=$=>{$.forEach((te,be)=>{be<f&&(T+=te)})};f>g?(f=g,T=n-(s==null?void 0:s.current.offsetWidth)):x(I);const k=Array.from({length:g+1},($,te)=>te+d);D({current:{index:0,remainingIndexes:k,totalItems:r.Children.count(e)},previous:{index:0,remainingIndexes:k,totalItems:r.Children.count(e)}}),W(k),((M=m==null?void 0:m.current)==null?void 0:M.remainingIndexes)!==k&&v(0);const P=u.draggable&&(p==null?void 0:p.length)>1;(ce=h.current)==null||ce.classList.toggle("hasDraggable",P),n<=(s==null?void 0:s.current.offsetWidth)?X(0):X(T)},ie=()=>{var f,T;const n=((f=h.current)==null?void 0:f.querySelectorAll(".spinetic-item"))??null,d=s.current.offsetWidth,w=(T=h.current)==null?void 0:T.offsetHeight,g=[];return n!==null&&n.forEach((x,k)=>{const P=t.autoWidth??!1;if(b?P:u.autoWidth)g.push(x.offsetWidth),x.style.width="";else{const M=b?Ae(t.showItems??1):u.showItems;g.push(d/M),x.style.width=d/M+"px"}u.fullHeightItems?window==null||window.requestAnimationFrame(()=>{x.style.height=w+"px"}):x.style.height=""}),E(g),g},D=n=>{K(d=>({previous:{...d.previous,...n.previous},current:{...d.current,...n.current}}))},c=n=>u.clickTransitionCtrl?L&&n:n,i=o>0,A=()=>{if(c(i)){const n=o-1;D({current:{...m.current,index:n},previous:{...m.previous,index:o}}),v(n)}},U=o<(p==null?void 0:p.length)-1,R=()=>{if(c(U)){const n=o+1;D({current:{...m.current,index:n},previous:{...m.previous,index:o}}),v(n)}},q=r.Children.count(e),Z=n=>n>=0&&n<q,z=n=>{c(Z(n))&&(D({current:{...m.current,index:n},previous:{...m.previous,index:o}}),v(n))},X=n=>{h.current.style.transform=`translateX(${n}px)`},V=()=>{_(!1);const n=xe(I,o);X(n),setTimeout(()=>{_(!0)},u.msPerClicks)},{start:F,move:ye,end:_e}=Xe({currentConfig:u,remainingIndexes:p,spineticContainer:h,_carouselItemsWidths:I,currentIndex:o,_setCarouselContainerTransform:X,previousItem:A,nextItem:R,_handleItemChange:V});return{currentConfig:u,currentIndex:o,spineticMain:s,spineticContainer:h,maxCarouselItems:q,remainingIndexes:p,goToItem:z,previousItem:A,nextItem:R,start:F,move:ye,end:_e}},re=({children:e,config:t,change:a})=>{const{currentConfig:s,currentIndex:h,spineticMain:u,spineticContainer:S,maxCarouselItems:o,remainingIndexes:v,goToItem:p,previousItem:W,nextItem:I,start:E,move:L,end:_}=Ve({children:e,config:t,change:a});return Se("div",{className:"spinetic-main",ref:u,children:[l("div",{className:"spinetic-wrapper",children:l(se,{currentConfig:s,currentIndex:h,remainingIndexes:v,onClickPreviousItem:W,onClickNextItem:I,children:l("div",{className:"spinetic-container",ref:S,onMouseDown:E,onMouseMove:L,onMouseUp:_,onMouseLeave:_,onTouchStart:E,onTouchMove:L,onTouchEnd:_,children:e})})}),l(ne,{currentConfig:s,currentIndex:h,maxCarouselItems:o,remainingIndexes:v,goToItem:p})]})},Ie=re;try{re.displayName="Spinetic",re.__docgenInfo={description:"",displayName:"Spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const oe=({children:e})=>l("div",{className:"spinetic-item",children:e});try{oe.displayName="SpineticItem",oe.__docgenInfo={description:"",displayName:"SpineticItem",props:{}}}catch{}const Ue={title:"Pages/Playground",parameters:{docs:{page:De,source:{language:"tsx"}}},tags:["autodocs"],component:Ie,argTypes:Le},ae=e=>{const t=ke(e.children),a=e.change;delete e.children,delete e.change;const s={...e};return l(Ie,{config:s,change:a?Ne:void 0,children:t.map((h,u)=>l(oe,{children:l(We,{highlightText:!1,index:u,text:h})},u))})},G=ae.bind({}),O=ae.bind({});O.args={autoWidth:!0,dotsModel:"long-rounded",fullHeightItems:!0};const j=ae.bind({});j.args={autoRotate:!0,dotsModel:"long-rounded",hideArrows:!0,msPerAutoRotate:2e3,showItems:3};var de,ue,pe;G.parameters={...G.parameters,docs:{...(de=G.parameters)==null?void 0:de.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(pe=(ue=G.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,me,ge;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(ge=(me=O.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,ve,we;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(we=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};const Ze=["Default","AutoWidth","AutoRotate"];export{j as AutoRotate,O as AutoWidth,G as Default,Ze as __namedExportsOrder,Ue as default};
