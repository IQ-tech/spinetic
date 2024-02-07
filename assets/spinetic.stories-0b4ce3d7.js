import{j as c,a as _e,F as Le,g as qe,C as Ce}from"./CardExample-d31eb566.js";import{r}from"./index-76fb7be0.js";import{v as q,_ as U,a as Re,h as Me}from"./argTypes-ec8699a8.js";import Pe from"./Playground-b7028ffa.js";import"./_commonjsHelpers-de833af9.js";import"./index-85a9039d.js";import"./iframe-807f1476.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Xe=()=>c("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:c("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:c("g",{transform:"translate(-9.672 -5.234)",children:c("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})}),Ve=()=>c("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:c("g",{transform:"translate(-9.672 -5.234)",children:c("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})}),ie=({children:e,currentConfig:t,currentIndex:o,remainingIndexes:n,onClickPreviousItem:i,onClickNextItem:d})=>{const w=t.arrows&&(n==null?void 0:n.length)>1,a=o===0,v=a&&(t==null?void 0:t.hideArrows),u=o===(n==null?void 0:n.length)-1,_=u&&(t==null?void 0:t.hideArrows);return _e("div",{className:"spinetic-container-arrows",children:[w&&c("div",{className:"spinetic-btn-prev",children:c("button",{className:"spinetic-navigation-button",onClick:()=>i(),disabled:a,style:{right:`${t.arrowLeftPosition}px`,display:v?"none":"flex"},children:c(Xe,{})})}),e,w&&c("div",{className:"spinetic-btn-next",children:c("button",{className:"spinetic-navigation-button",onClick:()=>d(),disabled:u,style:{left:t.autoWidth?`${t.arrowRightPosition+4}px`:`${t.arrowRightPosition}px`,display:_?"none":"flex"},children:c(Ve,{})})})]})};try{ie.displayName="SpineticArrows",ie.__docgenInfo={description:"",displayName:"SpineticArrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const ae=({currentConfig:e,currentIndex:t,maxCarouselItems:o,remainingIndexes:n,goToItem:i})=>{const d=e.dots&&(n==null?void 0:n.length)>1;return c(Le,{children:d&&c("div",{className:"spinetic-dots",children:n==null?void 0:n.map((w,a)=>c("span",{className:`${e.dotsModel} ${a===t?`active-${e.dotsModel}`:""}`,onClick:()=>i(a),children:e.indexInDots&&c("span",{children:a+1+(o-(n==null?void 0:n.length))})},a))})})};try{ae.displayName="SpineticDots",ae.__docgenInfo={description:"",displayName:"SpineticDots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}}}}}catch{}const $e=e=>{let t=e;for(;t&&t!==(document==null?void 0:document.documentElement);){if(t.classList&&t.classList.contains("spinetic-item"))return t;t=t.parentElement}return null},He=e=>{const t=e==null?void 0:e.reduce((o,n)=>o+n,0);return Math.floor(t)},Ae=(e,t)=>{var o;return Math.floor((o=e==null?void 0:e.slice(0,t))==null?void 0:o.reduce((n,i)=>n-i,0))},ge=(e,t)=>(e==null?void 0:e.length)!==(t==null?void 0:t.length)||!e||!t?!1:e==null?void 0:e.every((o,n)=>o===t[n]),Oe=({_sb:e,config:t,currentConfig:o,remainingIndexes:n,spineticContainer:i,_carouselItemsWidths:d,currentIndex:w,_setCarouselContainerTransform:a,previousItem:v,nextItem:u,_handleItemChange:_})=>{const[C,D]=r.useState(0),[S,A]=r.useState(0),[Z,Y]=r.useState(0),[R,F]=r.useState(!1),[g,ee]=r.useState(!1),[h,te]=r.useState(null),[E,W]=r.useState(null),M=e?q(t):U,ne=()=>{const m="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;ee(m?!1:!(o!=null&&o.draggable))};return{start:m=>{var k;if(e&&!M.draggable||(n==null?void 0:n.length)<=1||(ne(),g||o.verticalAlign))return;m.stopPropagation();let l=(k=m==null?void 0:m.touches)==null?void 0:k[0];D((m==null?void 0:m.pageX)||(l==null?void 0:l.pageX)),A(l==null?void 0:l.clientX),Y(l==null?void 0:l.clientY),F(!0),te($e(m.target)),i==null||i.current.classList.add("spinetic-no-transition")},move:m=>{var X;if(e&&!M.draggable)return;let l=(X=m==null?void 0:m.touches)==null?void 0:X[0],k=l==null?void 0:l.clientX,B=l==null?void 0:l.clientY,P=Math.abs(k-S),G=Math.abs(B-Z),L=g||!R;if(!(G>30||L||o.verticalAlign)&&(P>G&&P>20||!l)){m.stopPropagation();const J=((m==null?void 0:m.pageX)||(l==null?void 0:l.pageX)-(i==null?void 0:i.current.scrollLeft))-C;W(J);let K=Ae(d,w);K+=J,(P>20||!l)&&a(K),E&&Math.abs(E)>(o==null?void 0:o.touchThreshold)&&h&&h.classList.add("no-click")}},end:m=>{var l;e&&!M.draggable||(F(!1),!(g||o.verticalAlign)&&(m.stopPropagation(),E&&Math.abs(E)>(o==null?void 0:o.touchThreshold)&&(E>0?v():u()),(l=h==null?void 0:h.classList)==null||l.remove("no-click"),W(null),_(),i==null||i.current.classList.remove("spinetic-no-transition")))}}},je=({children:e,config:t=U,change:o})=>{const n=r.useRef(null),i=r.useRef(null),[d,w]=r.useState(q(t)),[a,v]=r.useState(0),[u,_]=r.useState([]),[C,D]=r.useState([]),[S,A]=r.useState([]),[Z,Y]=r.useState(!0),[R,F]=r.useState(window==null?void 0:window.innerWidth),[g,ee]=r.useState(void 0),[h,te]=r.useState({previous:{index:a,remainingIndexes:u,totalItems:r.Children.count(e)},current:{index:a,remainingIndexes:u,totalItems:r.Children.count(e)}}),E=()=>{var x;const s=(x=window==null?void 0:window.location)==null?void 0:x.href;sessionStorage!=null&&sessionStorage.getItem("@storybook/manager/store"),localStorage!=null&&localStorage.getItem("@storybook/manager/store");const p=s==null?void 0:s.includes("docs");return ee(p)},W=s=>{const p=q(s),x=p.responsive?[...p.responsive.map(T=>T.breakpoint)]:[],f=window==null?void 0:window.innerWidth;x.forEach((T,y)=>{var b;if(f<=T){const I=(b=p==null?void 0:p.responsive[y])==null?void 0:b.settings;Object.keys(I).forEach(V=>{p[V]=I[V]})}}),w(q(p)),M()},M=()=>{var me,pe,he;ne();const s=He(S),p=g?q(t):U,x=g?p.verticalAlign:d.verticalAlign;(me=n.current)==null||me.classList.toggle("spinetic-vertical-align",x);let f=0,T=0,y=0;S.some(H=>{if(T+=H,T<=(n==null?void 0:n.current.offsetWidth))f++;else return H}),y=Math.max(0,r.Children.count(e)-f);let b=a,I=0;const V=H=>{H.forEach((re,Ne)=>{Ne<b&&(I+=re)})};b>y?(b=y,I=s-(n==null?void 0:n.current.offsetWidth)):V(S);const $=Array.from({length:y+1},(H,re)=>re+f);N({current:{index:0,remainingIndexes:$,totalItems:r.Children.count(e)},previous:{index:0,remainingIndexes:$,totalItems:r.Children.count(e)}}),_($),ge((pe=h==null?void 0:h.current)==null?void 0:pe.remainingIndexes,$)||v(0);const We=(g?p.draggable:d.draggable)&&(u==null?void 0:u.length)>1;(he=i.current)==null||he.classList.toggle("hasDraggable",We),s<=(n==null?void 0:n.current.offsetWidth)?L(0):L(I)},ne=()=>{var y,b;const s=((y=i.current)==null?void 0:y.querySelectorAll(".spinetic-item"))??null,p=n.current.offsetWidth,x=(b=i.current)==null?void 0:b.offsetHeight,f=[],T=g?q(t):U;return s!==null&&s.forEach((I,V)=>{if(g?T.autoWidth:d.autoWidth)f.push(I.offsetWidth),I.style.width="";else{const oe=g?T.showItems:d.showItems;f.push(p/oe),I.style.width=p/oe+"px"}(g?T.fullHeightItems:d.fullHeightItems)?window.requestAnimationFrame(()=>{I.style.height=x+"px"}):I.style.height=""}),A(f),f},N=s=>{te(p=>({previous:{...p.previous,...s.previous},current:{...p.current,...s.current}}))},z=s=>d.clickTransitionCtrl?Z&&s:s,ue=a>0,m=()=>{if(z(ue)){const s=a-1;v(s),N({current:{...h.current,index:s},previous:{...h.previous,index:a}})}},l=a<(u==null?void 0:u.length)-1,k=()=>{if(z(l)){const s=a+1;v(s),N({current:{...h.current,index:s},previous:{...h.previous,index:a}})}},B=r.Children.count(e),P=s=>s>=0&&s<B,G=s=>{z(P(s))&&(v(s),N({current:{...h.current,index:s},previous:{...h.previous,index:a}}))},L=s=>{i.current.style.transform=`translateX(${s}px)`},X=()=>{Y(!1);const s=Ae(S,a);L(s),setTimeout(()=>{Y(!0)},d.msPerClicks)},se=()=>{R!==(window==null?void 0:window.innerWidth)&&(F(window==null?void 0:window.innerWidth),W(t))},{start:J,move:K,end:ke}=Oe({_sb:g,config:t,currentConfig:d,remainingIndexes:u,spineticContainer:i,_carouselItemsWidths:S,currentIndex:a,_setCarouselContainerTransform:L,previousItem:m,nextItem:k,_handleItemChange:X});return r.useEffect(()=>(E(),W(t),X(),window.addEventListener("resize",se),()=>{window.removeEventListener("resize",se)}),[R,t,u,a,g]),r.useEffect(()=>{o&&(u==null?void 0:u.length)>1&&o(h)},[a,o,h,u]),r.useEffect(()=>{ge(C,e)||(D(e),W(t))},[R,e,t]),r.useEffect(()=>{if(d.autoRotate){const s=setInterval(()=>{v(p=>{const x=p+1,f=x>=u.length?0:x;return N({current:{...h.current,index:f},previous:{...h.previous,index:p}}),f})},d.msPerAutoRotate);return()=>clearInterval(s)}},[u,d.autoRotate,d.msPerAutoRotate,h]),{currentConfig:d,currentIndex:a,spineticMain:n,spineticContainer:i,maxCarouselItems:B,remainingIndexes:u,goToItem:G,previousItem:m,nextItem:k,start:J,move:K,end:ke}},le=({children:e,config:t,change:o})=>{const{currentConfig:n,currentIndex:i,spineticMain:d,spineticContainer:w,maxCarouselItems:a,remainingIndexes:v,goToItem:u,previousItem:_,nextItem:C,start:D,move:S,end:A}=je({children:e,config:t,change:o});return _e("div",{className:"spinetic-main",ref:d,children:[c("div",{className:"spinetic-wrapper",children:c(ie,{currentConfig:n,currentIndex:i,remainingIndexes:v,onClickPreviousItem:_,onClickNextItem:C,children:c("div",{className:"spinetic-container",ref:w,onMouseDown:D,onMouseMove:S,onMouseUp:A,onMouseLeave:A,onTouchStart:D,onTouchMove:S,onTouchEnd:A,children:e})})}),c(ae,{currentConfig:n,currentIndex:i,maxCarouselItems:a,remainingIndexes:v,goToItem:u})]})},Ee=le;try{le.displayName="Spinetic",le.__docgenInfo={description:"",displayName:"Spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const ce=({children:e})=>c("div",{className:"spinetic-item",children:e});try{ce.displayName="SpineticItem",ce.__docgenInfo={description:"",displayName:"SpineticItem",props:{}}}catch{}const st={title:"Pages/Playground",parameters:{docs:{page:Pe,source:{language:"tsx"}}},tags:["autodocs"],component:Ee,argTypes:Re},de=e=>{const t=qe(e.children),o=e.change;delete e.children,delete e.change;const n={...e};return c(Ee,{config:n,change:o?Me:void 0,children:t.map((i,d)=>c(ce,{children:c(Ce,{highlightText:!1,index:d,text:i})},d))})},Q=de.bind({}),O=de.bind({});O.args={autoWidth:!0,dotsModel:"long-rounded",fullHeightItems:!0};const j=de.bind({});j.args={autoRotate:!0,dotsModel:"long-rounded",hideArrows:!0,msPerAutoRotate:2e3,showItems:3,responsive:[{breakpoint:450,settings:{showItems:1}}]};var fe,ve,Ie;Q.parameters={...Q.parameters,docs:{...(fe=Q.parameters)==null?void 0:fe.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(Ie=(ve=Q.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var xe,Se,Te;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(Te=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var we,ye,be;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(be=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const ot=["Default","AutoWidth","AutoRotate"];export{j as AutoRotate,O as AutoWidth,Q as Default,ot as __namedExportsOrder,st as default};
