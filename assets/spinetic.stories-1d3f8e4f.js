import{j as c,a as be,F as Le,g as Ne,C as qe}from"./CardExample-d31eb566.js";import{r}from"./index-76fb7be0.js";import{v as M,_ as Q,a as De,h as Me}from"./argTypes-ec8699a8.js";import Re from"./Playground-369a6211.js";import"./_commonjsHelpers-de833af9.js";import"./index-17c6f9e9.js";import"./iframe-031a8f0d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Ce=()=>c("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:c("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:c("g",{transform:"translate(-9.672 -5.234)",children:c("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})}),Pe=()=>c("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:c("g",{transform:"translate(-9.672 -5.234)",children:c("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})}),re=({children:e,currentConfig:t,currentIndex:o,remainingIndexes:n,onClickPreviousItem:i,onClickNextItem:d})=>{const T=t.arrows&&(n==null?void 0:n.length)>1,a=o===0,v=a&&(t==null?void 0:t.hideArrows),u=o===(n==null?void 0:n.length)-1,k=u&&(t==null?void 0:t.hideArrows);return be("div",{className:"spinetic-container-arrows",children:[T&&c("div",{className:"spinetic-btn-prev",children:c("button",{className:"spinetic-navigation-button",onClick:()=>i(),disabled:a,style:{right:`${t.arrowLeftPosition}px`,display:v?"none":"flex"},children:c(Ce,{})})}),e,T&&c("div",{className:"spinetic-btn-next",children:c("button",{className:"spinetic-navigation-button",onClick:()=>d(),disabled:u,style:{left:t.autoWidth?`${t.arrowRightPosition+4}px`:`${t.arrowRightPosition}px`,display:k?"none":"flex"},children:c(Pe,{})})})]})};try{re.displayName="SpineticArrows",re.__docgenInfo={description:"",displayName:"SpineticArrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const ie=({currentConfig:e,currentIndex:t,maxCarouselItems:o,remainingIndexes:n,goToItem:i})=>{const d=e.dots&&(n==null?void 0:n.length)>1;return c(Le,{children:d&&c("div",{className:"spinetic-dots",children:n==null?void 0:n.map((T,a)=>c("span",{className:`${e.dotsModel} ${a===t?`active-${e.dotsModel}`:""}`,onClick:()=>i(a),children:e.indexInDots&&c("span",{children:a+1+(o-(n==null?void 0:n.length))})},a))})})};try{ie.displayName="SpineticDots",ie.__docgenInfo={description:"",displayName:"SpineticDots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}}}}}catch{}const Xe=e=>{let t=e;for(;t&&t!==(document==null?void 0:document.documentElement);){if(t.classList&&t.classList.contains("spinetic-item"))return t;t=t.parentElement}return null},Ve=e=>{const t=e==null?void 0:e.reduce((o,n)=>o+n,0);return Math.floor(t)},ye=(e,t)=>{var o;return Math.floor((o=e==null?void 0:e.slice(0,t))==null?void 0:o.reduce((n,i)=>n-i,0))},$e=(e,t)=>(e==null?void 0:e.length)!==(t==null?void 0:t.length)||!e||!t?!1:e==null?void 0:e.every((o,n)=>o===t[n]),He=({_sb:e,config:t,currentConfig:o,remainingIndexes:n,spineticContainer:i,_carouselItemsWidths:d,currentIndex:T,_setCarouselContainerTransform:a,previousItem:v,nextItem:u,_handleItemChange:k})=>{const[_,q]=r.useState(0),[D,A]=r.useState(0),[R,U]=r.useState(0),[I,Y]=r.useState(!1),[h,Z]=r.useState(!1),[b,ee]=r.useState(null),[x,z]=r.useState(null),C=e?M(t):Q,W=()=>{const m="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;Z(m?!1:!(o!=null&&o.draggable))};return{start:m=>{var L;if(!C.draggable||(n==null?void 0:n.length)<=1||(W(),h||o.verticalAlign))return;m.stopPropagation();let l=(L=m==null?void 0:m.touches)==null?void 0:L[0];q((m==null?void 0:m.pageX)||(l==null?void 0:l.pageX)),A(l==null?void 0:l.clientX),U(l==null?void 0:l.clientY),Y(!0),ee(Xe(m.target)),i==null||i.current.classList.add("spinetic-no-transition")},move:m=>{var G;if(!C.draggable)return;let l=(G=m==null?void 0:m.touches)==null?void 0:G[0],L=l==null?void 0:l.clientX,ne=l==null?void 0:l.clientY,P=Math.abs(L-D),N=Math.abs(ne-R),B=h||!I;if(!(N>30||B||o.verticalAlign)&&(P>N&&P>20||!l)){m.stopPropagation();const J=((m==null?void 0:m.pageX)||(l==null?void 0:l.pageX)-(i==null?void 0:i.current.scrollLeft))-_;z(J);let X=ye(d,T);X+=J,(P>20||!l)&&a(X),x&&Math.abs(x)>(o==null?void 0:o.touchThreshold)&&b&&b.classList.add("no-click")}},end:m=>{var l;C.draggable&&(Y(!1),!(h||o.verticalAlign)&&(m.stopPropagation(),i==null||i.current.classList.remove("spinetic-no-transition"),x&&Math.abs(x)>(o==null?void 0:o.touchThreshold)&&(x>0?v():u()),(l=b==null?void 0:b.classList)==null||l.remove("no-click"),z(null),k()))}}},Oe=({children:e,config:t=Q,change:o})=>{var X;const n=r.useRef(null),i=r.useRef(null),[d,T]=r.useState(M(t)),[a,v]=r.useState(0),[u,k]=r.useState([]);r.useState([]);const[_,q]=r.useState([]),[D,A]=r.useState(!0),[R,U]=r.useState(window==null?void 0:window.innerWidth),[I,Y]=r.useState(void 0),[h,Z]=r.useState({previous:{index:a,remainingIndexes:u,totalItems:r.Children.count(e)},current:{index:a,remainingIndexes:u,totalItems:r.Children.count(e)}});r.useEffect(()=>ee(),[]),r.useEffect(()=>{I&&x(t)},[t,I]),r.useEffect(()=>x(t),[e,R]),r.useEffect(()=>B(),[u,a]),r.useEffect(()=>{o&&(u==null?void 0:u.length)>1&&o(h)},[a]),r.useEffect(()=>{if(d.autoRotate){const s=setInterval(()=>{v(p=>{const w=p+1,g=w>=u.length?0:w;return W({current:{...h.current,index:g},previous:{...h.previous,index:p}}),g})},d.msPerAutoRotate);return()=>clearInterval(s)}},[u,d.autoRotate]),r.useEffect(()=>(x(t),window.removeEventListener("resize",b),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)),[(X=i.current)==null?void 0:X.offsetWidth,R,window==null?void 0:window.innerWidth]);const b=()=>{R!==(window==null?void 0:window.innerWidth)&&(U(window==null?void 0:window.innerWidth),x(t))},ee=()=>{var f;const s=(f=window==null?void 0:window.location)==null?void 0:f.href,p=!!(sessionStorage!=null&&sessionStorage.getItem("@storybook/manager/store")),w=!!(localStorage!=null&&localStorage.getItem("@storybook/manager/store")),g=(s==null?void 0:s.includes("docs"))||p||w;return Y(g)},x=s=>{const p=M(s),w=p.responsive?[...p.responsive.map(f=>f.breakpoint)]:[],g=window==null?void 0:window.innerWidth;w.forEach((f,y)=>{var E;if(g<=f){const S=(E=p==null?void 0:p.responsive[y])==null?void 0:E.settings;Object.keys(S).forEach(V=>{p[V]=S[V]})}}),T(M(p)),z()},z=()=>{var me,pe,he;C();const s=Ve(_),p=I?M(t):Q,w=I?p.verticalAlign:d.verticalAlign;(me=n.current)==null||me.classList.toggle("spinetic-vertical-align",w);let g=0,f=0,y=0;_.some(H=>{if(f+=H,f<=(n==null?void 0:n.current.offsetWidth))g++;else return H}),y=Math.max(0,r.Children.count(e)-g);let E=a,S=0;const V=H=>{H.forEach((oe,We)=>{We<E&&(S+=oe)})};E>y?(E=y,S=s-(n==null?void 0:n.current.offsetWidth)):V(_);const $=Array.from({length:y+1},(H,oe)=>oe+g);W({current:{index:0,remainingIndexes:$,totalItems:r.Children.count(e)},previous:{index:0,remainingIndexes:$,totalItems:r.Children.count(e)}}),k($),$e((pe=h==null?void 0:h.current)==null?void 0:pe.remainingIndexes,$)||v(0);const ke=(I?p.draggable:d.draggable)&&(u==null?void 0:u.length)>1;(he=i.current)==null||he.classList.toggle("hasDraggable",ke),s<=(n==null?void 0:n.current.offsetWidth)?N(0):N(S)},C=()=>{var y,E;const s=((y=i.current)==null?void 0:y.querySelectorAll(".spinetic-item"))??null,p=n.current.offsetWidth,w=(E=i.current)==null?void 0:E.offsetHeight,g=[],f=I?M(t):Q;return s!==null&&s.forEach((S,V)=>{if(I?f.autoWidth:d.autoWidth)g.push(S.offsetWidth),S.style.width="";else{const se=I?f.showItems:d.showItems;g.push(p/se),S.style.width=p/se+"px"}(I?f.fullHeightItems:d.fullHeightItems)?window.requestAnimationFrame(()=>{S.style.height=w+"px"}):S.style.height=""}),q(g),g},W=s=>{Z(p=>({previous:{...p.previous,...s.previous},current:{...p.current,...s.current}}))},F=s=>d.clickTransitionCtrl?D&&s:s,de=a>0,te=()=>{if(F(de)){const s=a-1;W({current:{...h.current,index:s},previous:{...h.previous,index:a}}),v(s)}},m=a<(u==null?void 0:u.length)-1,l=()=>{if(F(m)){const s=a+1;W({current:{...h.current,index:s},previous:{...h.previous,index:a}}),v(s)}},L=r.Children.count(e),ne=s=>s>=0&&s<L,P=s=>{F(ne(s))&&(W({current:{...h.current,index:s},previous:{...h.previous,index:a}}),v(s))},N=s=>{i.current.style.transform=`translateX(${s}px)`},B=()=>{A(!1);const s=ye(_,a);N(s),setTimeout(()=>{A(!0)},d.msPerClicks)},{start:G,move:ue,end:J}=He({_sb:I,config:t,currentConfig:d,remainingIndexes:u,spineticContainer:i,_carouselItemsWidths:_,currentIndex:a,_setCarouselContainerTransform:N,previousItem:te,nextItem:l,_handleItemChange:B});return{currentConfig:d,currentIndex:a,spineticMain:n,spineticContainer:i,maxCarouselItems:L,remainingIndexes:u,goToItem:P,previousItem:te,nextItem:l,start:G,move:ue,end:J}},ae=({children:e,config:t,change:o})=>{const{currentConfig:n,currentIndex:i,spineticMain:d,spineticContainer:T,maxCarouselItems:a,remainingIndexes:v,goToItem:u,previousItem:k,nextItem:_,start:q,move:D,end:A}=Oe({children:e,config:t,change:o});return be("div",{className:"spinetic-main",ref:d,children:[c("div",{className:"spinetic-wrapper",children:c(re,{currentConfig:n,currentIndex:i,remainingIndexes:v,onClickPreviousItem:k,onClickNextItem:_,children:c("div",{className:"spinetic-container",ref:T,onMouseDown:q,onMouseMove:D,onMouseUp:A,onMouseLeave:A,onTouchStart:q,onTouchMove:D,onTouchEnd:A,children:e})})}),c(ie,{currentConfig:n,currentIndex:i,maxCarouselItems:a,remainingIndexes:v,goToItem:u})]})},Ee=ae;try{ae.displayName="Spinetic",ae.__docgenInfo={description:"",displayName:"Spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const le=({children:e})=>c("div",{className:"spinetic-item",children:e});try{le.displayName="SpineticItem",le.__docgenInfo={description:"",displayName:"SpineticItem",props:{}}}catch{}const nt={title:"Pages/Playground",parameters:{docs:{page:Re,source:{language:"tsx"}}},tags:["autodocs"],component:Ee,argTypes:De},ce=e=>{const t=Ne(e.children),o=e.change;delete e.children,delete e.change;const n={...e};return c(Ee,{config:n,change:o?Me:void 0,children:t.map((i,d)=>c(le,{children:c(qe,{highlightText:!1,index:d,text:i})},d))})},K=ce.bind({}),O=ce.bind({});O.args={autoWidth:!0,dotsModel:"long-rounded",fullHeightItems:!0};const j=ce.bind({});j.args={autoRotate:!0,dotsModel:"long-rounded",hideArrows:!0,msPerAutoRotate:2e3,showItems:3};var ge,fe,ve;K.parameters={...K.parameters,docs:{...(ge=K.parameters)==null?void 0:ge.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };

  // const [items, setItems] = useState<any>(childrens);
  // const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  // const intervalTime = 5 * 1000; // 10 segundos

  // useEffect(() => {
  //   let elapsedTime = 0;

  //   const addItemInterval = setInterval(() => {
  //     if (elapsedTime < totalTimeInMilliseconds) {
  //       // Adiciona um novo item ao array
  //       //setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);
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
}`,...(ve=(fe=K.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Ie,Se,xe;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };

  // const [items, setItems] = useState<any>(childrens);
  // const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  // const intervalTime = 5 * 1000; // 10 segundos

  // useEffect(() => {
  //   let elapsedTime = 0;

  //   const addItemInterval = setInterval(() => {
  //     if (elapsedTime < totalTimeInMilliseconds) {
  //       // Adiciona um novo item ao array
  //       //setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);
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
}`,...(xe=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var we,Te,_e;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };

  // const [items, setItems] = useState<any>(childrens);
  // const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  // const intervalTime = 5 * 1000; // 10 segundos

  // useEffect(() => {
  //   let elapsedTime = 0;

  //   const addItemInterval = setInterval(() => {
  //     if (elapsedTime < totalTimeInMilliseconds) {
  //       // Adiciona um novo item ao array
  //       //setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);
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
}`,...(_e=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};const st=["Default","AutoWidth","AutoRotate"];export{j as AutoRotate,O as AutoWidth,K as Default,st as __namedExportsOrder,nt as default};
