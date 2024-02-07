import{j as c,a as Ee,F as qe,g as Ce,C as Me}from"./CardExample-d31eb566.js";import{r as o}from"./index-76fb7be0.js";import{v as C,_ as Z,a as Re,h as Pe}from"./argTypes-ec8699a8.js";import Xe from"./Playground-34f182ba.js";import"./_commonjsHelpers-de833af9.js";import"./index-fd99717f.js";import"./iframe-0d3a898c.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Ve=()=>c("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:c("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:c("g",{transform:"translate(-9.672 -5.234)",children:c("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})}),$e=()=>c("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:c("g",{transform:"translate(-9.672 -5.234)",children:c("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})}),ie=({children:e,currentConfig:t,currentIndex:r,remainingIndexes:n,onClickPreviousItem:i,onClickNextItem:d})=>{const T=t.arrows&&(n==null?void 0:n.length)>1,a=r===0,v=a&&(t==null?void 0:t.hideArrows),u=r===(n==null?void 0:n.length)-1,E=u&&(t==null?void 0:t.hideArrows);return Ee("div",{className:"spinetic-container-arrows",children:[T&&c("div",{className:"spinetic-btn-prev",children:c("button",{className:"spinetic-navigation-button",onClick:()=>i(),disabled:a,style:{right:`${t.arrowLeftPosition}px`,display:v?"none":"flex"},children:c(Ve,{})})}),e,T&&c("div",{className:"spinetic-btn-next",children:c("button",{className:"spinetic-navigation-button",onClick:()=>d(),disabled:u,style:{left:t.autoWidth?`${t.arrowRightPosition+4}px`:`${t.arrowRightPosition}px`,display:E?"none":"flex"},children:c($e,{})})})]})};try{ie.displayName="SpineticArrows",ie.__docgenInfo={description:"",displayName:"SpineticArrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const ae=({currentConfig:e,currentIndex:t,maxCarouselItems:r,remainingIndexes:n,goToItem:i})=>{const d=e.dots&&(n==null?void 0:n.length)>1;return c(qe,{children:d&&c("div",{className:"spinetic-dots",children:n==null?void 0:n.map((T,a)=>c("span",{className:`${e.dotsModel} ${a===t?`active-${e.dotsModel}`:""}`,onClick:()=>i(a),children:e.indexInDots&&c("span",{children:a+1+(r-(n==null?void 0:n.length))})},a))})})};try{ae.displayName="SpineticDots",ae.__docgenInfo={description:"",displayName:"SpineticDots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}}}}}catch{}const He=e=>{let t=e;for(;t&&t!==(document==null?void 0:document.documentElement);){if(t.classList&&t.classList.contains("spinetic-item"))return t;t=t.parentElement}return null},Oe=e=>{const t=e==null?void 0:e.reduce((r,n)=>r+n,0);return Math.floor(t)},ke=(e,t)=>{var r;return Math.floor((r=e==null?void 0:e.slice(0,t))==null?void 0:r.reduce((n,i)=>n-i,0))},fe=(e,t)=>(e==null?void 0:e.length)!==(t==null?void 0:t.length)||!e||!t?!1:e==null?void 0:e.every((r,n)=>r===t[n]),je=({_sb:e,config:t,currentConfig:r,remainingIndexes:n,spineticContainer:i,_carouselItemsWidths:d,currentIndex:T,_setCarouselContainerTransform:a,previousItem:v,nextItem:u,_handleItemChange:E})=>{const[M,W]=o.useState(0),[S,k]=o.useState(0),[ee,Y]=o.useState(0),[N,z]=o.useState(!1),[g,te]=o.useState(!1),[h,ne]=o.useState(null),[A,y]=o.useState(null),R=e?C(t):Z,se=()=>{const m="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;te(m?!1:!(r!=null&&r.draggable))};return{start:m=>{var D;if(!R.draggable||(n==null?void 0:n.length)<=1||(se(),g||r.verticalAlign))return;m.stopPropagation();let l=(D=m==null?void 0:m.touches)==null?void 0:D[0];W((m==null?void 0:m.pageX)||(l==null?void 0:l.pageX)),k(l==null?void 0:l.clientX),Y(l==null?void 0:l.clientY),z(!0),ne(He(m.target)),i==null||i.current.classList.add("spinetic-no-transition")},move:m=>{var X;if(!R.draggable)return;let l=(X=m==null?void 0:m.touches)==null?void 0:X[0],D=l==null?void 0:l.clientX,B=l==null?void 0:l.clientY,P=Math.abs(D-S),G=Math.abs(B-ee),q=g||!N;if(!(G>30||q||r.verticalAlign)&&(P>G&&P>20||!l)){m.stopPropagation();const K=((m==null?void 0:m.pageX)||(l==null?void 0:l.pageX)-(i==null?void 0:i.current.scrollLeft))-M;y(K);let Q=ke(d,T);Q+=K,(P>20||!l)&&a(Q),A&&Math.abs(A)>(r==null?void 0:r.touchThreshold)&&h&&h.classList.add("no-click")}},end:m=>{var l;R.draggable&&(z(!1),!(g||r.verticalAlign)&&(m.stopPropagation(),i==null||i.current.classList.remove("spinetic-no-transition"),A&&Math.abs(A)>(r==null?void 0:r.touchThreshold)&&(A>0?v():u()),(l=h==null?void 0:h.classList)==null||l.remove("no-click"),y(null),E()))}}},Ye=({children:e,config:t=Z,change:r})=>{var me;const n=o.useRef(null),i=o.useRef(null),[d,T]=o.useState(C(t)),[a,v]=o.useState(0),[u,E]=o.useState([]),[M,W]=o.useState([]),[S,k]=o.useState([]),[ee,Y]=o.useState(!0),[N,z]=o.useState(window==null?void 0:window.innerWidth),[g,te]=o.useState(void 0),[h,ne]=o.useState({previous:{index:a,remainingIndexes:u,totalItems:o.Children.count(e)},current:{index:a,remainingIndexes:u,totalItems:o.Children.count(e)}}),A=()=>{var x;const s=(x=window==null?void 0:window.location)==null?void 0:x.href;sessionStorage!=null&&sessionStorage.getItem("@storybook/manager/store"),localStorage!=null&&localStorage.getItem("@storybook/manager/store");const p=s==null?void 0:s.includes("docs");return console.log("🚀 ~ checkIsSb ~ isSb:",p),te(p)},y=s=>{const p=C(s),x=p.responsive?[...p.responsive.map(w=>w.breakpoint)]:[],f=window==null?void 0:window.innerWidth;x.forEach((w,b)=>{var _;if(f<=w){const I=(_=p==null?void 0:p.responsive[b])==null?void 0:_.settings;Object.keys(I).forEach(V=>{p[V]=I[V]})}}),T(C(p)),R()},R=()=>{var pe,he,ge;se();const s=Oe(S),p=g?C(t):Z,x=g?p.verticalAlign:d.verticalAlign;(pe=n.current)==null||pe.classList.toggle("spinetic-vertical-align",x);let f=0,w=0,b=0;S.some(H=>{if(w+=H,w<=(n==null?void 0:n.current.offsetWidth))f++;else return H}),b=Math.max(0,o.Children.count(e)-f);let _=a,I=0;const V=H=>{H.forEach((re,Le)=>{Le<_&&(I+=re)})};_>b?(_=b,I=s-(n==null?void 0:n.current.offsetWidth)):V(S);const $=Array.from({length:b+1},(H,re)=>re+f);L({current:{index:0,remainingIndexes:$,totalItems:o.Children.count(e)},previous:{index:0,remainingIndexes:$,totalItems:o.Children.count(e)}}),E($),fe((he=h==null?void 0:h.current)==null?void 0:he.remainingIndexes,$)||v(0);const Ne=(g?p.draggable:d.draggable)&&(u==null?void 0:u.length)>1;(ge=i.current)==null||ge.classList.toggle("hasDraggable",Ne),s<=(n==null?void 0:n.current.offsetWidth)?q(0):q(I)},se=()=>{var b,_;const s=((b=i.current)==null?void 0:b.querySelectorAll(".spinetic-item"))??null,p=n.current.offsetWidth,x=(_=i.current)==null?void 0:_.offsetHeight,f=[],w=g?C(t):Z;return s!==null&&s.forEach((I,V)=>{if(g?w.autoWidth:d.autoWidth)f.push(I.offsetWidth),I.style.width="";else{const oe=g?w.showItems:d.showItems;f.push(p/oe),I.style.width=p/oe+"px"}(g?w.fullHeightItems:d.fullHeightItems)?window.requestAnimationFrame(()=>{I.style.height=x+"px"}):I.style.height=""}),k(f),f},L=s=>{ne(p=>({previous:{...p.previous,...s.previous},current:{...p.current,...s.current}}))},F=s=>d.clickTransitionCtrl?ee&&s:s,ue=a>0,m=()=>{if(F(ue)){const s=a-1;v(s),L({current:{...h.current,index:s},previous:{...h.previous,index:a}})}},l=a<(u==null?void 0:u.length)-1,D=()=>{if(F(l)){const s=a+1;v(s),L({current:{...h.current,index:s},previous:{...h.previous,index:a}})}},B=o.Children.count(e),P=s=>s>=0&&s<B,G=s=>{if(F(P(s)))return v(s),L({current:{...h.current,index:s},previous:{...h.previous,index:a}})},q=s=>{i.current.style.transform=`translateX(${s}px)`},X=()=>{Y(!1);const s=ke(S,a);q(s),setTimeout(()=>{Y(!0)},d.msPerClicks)},J=()=>{N!==(window==null?void 0:window.innerWidth)&&(z(window==null?void 0:window.innerWidth),y(t))},{start:K,move:Q,end:De}=je({_sb:g,config:t,currentConfig:d,remainingIndexes:u,spineticContainer:i,_carouselItemsWidths:S,currentIndex:a,_setCarouselContainerTransform:q,previousItem:m,nextItem:D,_handleItemChange:X});return o.useEffect(()=>A(),[]),o.useEffect(()=>y(t),[N]),o.useEffect(()=>X(),[u,a]),o.useEffect(()=>{g&&y(t)},[t,g]),o.useEffect(()=>{r&&(u==null?void 0:u.length)>1&&r(h)},[a]),o.useEffect(()=>{fe(M,e)||(W(e),y(t))},[N,e]),o.useEffect(()=>(y(t),window.removeEventListener("resize",J),window.addEventListener("resize",J),()=>window.removeEventListener("resize",J)),[(me=i.current)==null?void 0:me.offsetWidth,N,window==null?void 0:window.innerWidth]),o.useEffect(()=>{if(d.autoRotate){const s=setInterval(()=>{v(p=>{const x=p+1,f=x>=u.length?0:x;return L({current:{...h.current,index:f},previous:{...h.previous,index:p}}),f})},d.msPerAutoRotate);return()=>clearInterval(s)}},[u,d.autoRotate]),{currentConfig:d,currentIndex:a,spineticMain:n,spineticContainer:i,maxCarouselItems:B,remainingIndexes:u,goToItem:G,previousItem:m,nextItem:D,start:K,move:Q,end:De}},le=({children:e,config:t,change:r})=>{const{currentConfig:n,currentIndex:i,spineticMain:d,spineticContainer:T,maxCarouselItems:a,remainingIndexes:v,goToItem:u,previousItem:E,nextItem:M,start:W,move:S,end:k}=Ye({children:e,config:t,change:r});return Ee("div",{className:"spinetic-main",ref:d,children:[c("div",{className:"spinetic-wrapper",children:c(ie,{currentConfig:n,currentIndex:i,remainingIndexes:v,onClickPreviousItem:E,onClickNextItem:M,children:c("div",{className:"spinetic-container",ref:T,onMouseDown:W,onMouseMove:S,onMouseUp:k,onMouseLeave:k,onTouchStart:W,onTouchMove:S,onTouchEnd:k,children:e})})}),c(ae,{currentConfig:n,currentIndex:i,maxCarouselItems:a,remainingIndexes:v,goToItem:u})]})},Ae=le;try{le.displayName="Spinetic",le.__docgenInfo={description:"",displayName:"Spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const ce=({children:e})=>c("div",{className:"spinetic-item",children:e});try{ce.displayName="SpineticItem",ce.__docgenInfo={description:"",displayName:"SpineticItem",props:{}}}catch{}const ot={title:"Pages/Playground",parameters:{docs:{page:Xe,source:{language:"tsx"}}},tags:["autodocs"],component:Ae,argTypes:Re},de=e=>{const t=Ce(e.children),r=e.change;delete e.children,delete e.change;const n={...e};return c(Ae,{config:n,change:r?Pe:void 0,children:t.map((i,d)=>c(ce,{children:c(Me,{highlightText:!1,index:d,text:i})},d))})},U=de.bind({}),O=de.bind({});O.args={autoWidth:!0,dotsModel:"long-rounded",fullHeightItems:!0};const j=de.bind({});j.args={autoRotate:!0,dotsModel:"long-rounded",hideArrows:!0,msPerAutoRotate:2e3,showItems:3,responsive:[{breakpoint:450,settings:{showItems:1}}]};var ve,Ie,xe;U.parameters={...U.parameters,docs:{...(ve=U.parameters)==null?void 0:ve.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };

  // const [items, setItems] = useState<any>(childrens);
  // console.log("🚀 ~ items:", items)
  // const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  // const intervalTime = 5 * 1000; // 10 segundos

  // useEffect(() => {
  //   let elapsedTime = 0;

  //   const addItemInterval = setInterval(() => {
  //     if (elapsedTime < totalTimeInMilliseconds) {
  //       // Adiciona um novo item ao array
  //      // setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);// add
  //       setItems((prevItems: any) => [...prevItems]);
  //       elapsedTime += intervalTime;
  //     } else {
  //       // Se o tempo total for atingido, limpa o intervalo
  //       clearInterval(addItemInterval);
  //     }
  //   }, intervalTime);

  //   // Limpa o intervalo quando o componente é desmontado
  //   return () => clearInterval(addItemInterval);
  // }, [totalTimeInMilliseconds, intervalTime]);

  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {childrens.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(xe=(Ie=U.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var Se,we,Te;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };

  // const [items, setItems] = useState<any>(childrens);
  // console.log("🚀 ~ items:", items)
  // const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  // const intervalTime = 5 * 1000; // 10 segundos

  // useEffect(() => {
  //   let elapsedTime = 0;

  //   const addItemInterval = setInterval(() => {
  //     if (elapsedTime < totalTimeInMilliseconds) {
  //       // Adiciona um novo item ao array
  //      // setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);// add
  //       setItems((prevItems: any) => [...prevItems]);
  //       elapsedTime += intervalTime;
  //     } else {
  //       // Se o tempo total for atingido, limpa o intervalo
  //       clearInterval(addItemInterval);
  //     }
  //   }, intervalTime);

  //   // Limpa o intervalo quando o componente é desmontado
  //   return () => clearInterval(addItemInterval);
  // }, [totalTimeInMilliseconds, intervalTime]);

  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {childrens.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(Te=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var be,_e,ye;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };

  // const [items, setItems] = useState<any>(childrens);
  // console.log("🚀 ~ items:", items)
  // const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  // const intervalTime = 5 * 1000; // 10 segundos

  // useEffect(() => {
  //   let elapsedTime = 0;

  //   const addItemInterval = setInterval(() => {
  //     if (elapsedTime < totalTimeInMilliseconds) {
  //       // Adiciona um novo item ao array
  //      // setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);// add
  //       setItems((prevItems: any) => [...prevItems]);
  //       elapsedTime += intervalTime;
  //     } else {
  //       // Se o tempo total for atingido, limpa o intervalo
  //       clearInterval(addItemInterval);
  //     }
  //   }, intervalTime);

  //   // Limpa o intervalo quando o componente é desmontado
  //   return () => clearInterval(addItemInterval);
  // }, [totalTimeInMilliseconds, intervalTime]);

  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {childrens.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(ye=(_e=j.parameters)==null?void 0:_e.docs)==null?void 0:ye.source}}};const rt=["Default","AutoWidth","AutoRotate"];export{j as AutoRotate,O as AutoWidth,U as Default,rt as __namedExportsOrder,ot as default};
