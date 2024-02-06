import{j as d,a as be,F as Le,g as Ne,C as qe}from"./CardExample-47265fcd.js";import{r as o}from"./index-76fb7be0.js";import{v as M,_ as Q,a as De,h as Me}from"./argTypes-ec8699a8.js";import Re from"./Playground-e9e90253.js";import"./_commonjsHelpers-de833af9.js";import"./index-5f6c14fb.js";import"./iframe-b312796a.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Ce=()=>d("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:d("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:d("g",{transform:"translate(-9.672 -5.234)",children:d("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})}),Pe=()=>d("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:d("g",{transform:"translate(-9.672 -5.234)",children:d("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})}),re=({children:e,currentConfig:t,currentIndex:r,remainingIndexes:n,onClickPreviousItem:l,onClickNextItem:u})=>{const I=t.arrows&&(n==null?void 0:n.length)>1,i=r===0,h=i&&(t==null?void 0:t.hideArrows),a=r===(n==null?void 0:n.length)-1,_=a&&(t==null?void 0:t.hideArrows);return be("div",{className:"spinetic-container-arrows",children:[I&&d("div",{className:"spinetic-btn-prev",children:d("button",{className:"spinetic-navigation-button",onClick:()=>l(),disabled:i,style:{right:`${t.arrowLeftPosition}px`,display:h?"none":"flex"},children:d(Ce,{})})}),e,I&&d("div",{className:"spinetic-btn-next",children:d("button",{className:"spinetic-navigation-button",onClick:()=>u(),disabled:a,style:{left:t.autoWidth?`${t.arrowRightPosition+4}px`:`${t.arrowRightPosition}px`,display:_?"none":"flex"},children:d(Pe,{})})})]})};try{re.displayName="SpineticArrows",re.__docgenInfo={description:"",displayName:"SpineticArrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const ie=({currentConfig:e,currentIndex:t,maxCarouselItems:r,remainingIndexes:n,goToItem:l})=>{const u=e.dots&&(n==null?void 0:n.length)>1;return d(Le,{children:u&&d("div",{className:"spinetic-dots",children:n==null?void 0:n.map((I,i)=>d("span",{className:`${e.dotsModel} ${i===t?`active-${e.dotsModel}`:""}`,onClick:()=>l(i),children:e.indexInDots&&d("span",{children:i+1+(r-(n==null?void 0:n.length))})},i))})})};try{ie.displayName="SpineticDots",ie.__docgenInfo={description:"",displayName:"SpineticDots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}}}}}catch{}const Xe=e=>{let t=e;for(;t&&t!==(document==null?void 0:document.documentElement);){if(t.classList&&t.classList.contains("spinetic-item"))return t;t=t.parentElement}return null},Ve=e=>{const t=e==null?void 0:e.reduce((r,n)=>r+n,0);return Math.floor(t)},ye=(e,t)=>{var r;return Math.floor((r=e==null?void 0:e.slice(0,t))==null?void 0:r.reduce((n,l)=>n-l,0))},$e=(e,t)=>(e==null?void 0:e.length)!==(t==null?void 0:t.length)||!e||!t?!1:e==null?void 0:e.every((r,n)=>r===t[n]),He=({_sb:e,config:t,currentConfig:r,remainingIndexes:n,spineticContainer:l,_carouselItemsWidths:u,currentIndex:I,_setCarouselContainerTransform:i,previousItem:h,nextItem:a,_handleItemChange:_})=>{const[b,q]=o.useState(0),[D,k]=o.useState(0),[R,U]=o.useState(0),[S,Y]=o.useState(!1),[g,Z]=o.useState(!1),[y,ee]=o.useState(null),[T,z]=o.useState(null),C=e?M(t):Q,W=()=>{const m="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;Z(m?!1:!(r!=null&&r.draggable))};return{start:m=>{var L;if(!C.draggable||(n==null?void 0:n.length)<=1||(W(),g||r.verticalAlign))return;m.stopPropagation();let c=(L=m==null?void 0:m.touches)==null?void 0:L[0];q((m==null?void 0:m.pageX)||(c==null?void 0:c.pageX)),k(c==null?void 0:c.clientX),U(c==null?void 0:c.clientY),Y(!0),ee(Xe(m.target)),l==null||l.current.classList.add("spinetic-no-transition")},move:m=>{var G;if(!C.draggable)return;let c=(G=m==null?void 0:m.touches)==null?void 0:G[0],L=c==null?void 0:c.clientX,ne=c==null?void 0:c.clientY,P=Math.abs(L-D),N=Math.abs(ne-R),B=g||!S;if(!(N>30||B||r.verticalAlign)&&(P>N&&P>20||!c)){m.stopPropagation();const J=((m==null?void 0:m.pageX)||(c==null?void 0:c.pageX)-(l==null?void 0:l.current.scrollLeft))-b;z(J);let X=ye(u,I);X+=J,(P>20||!c)&&i(X),T&&Math.abs(T)>(r==null?void 0:r.touchThreshold)&&y&&y.classList.add("no-click")}},end:m=>{var c;C.draggable&&(Y(!1),!(g||r.verticalAlign)&&(m.stopPropagation(),l==null||l.current.classList.remove("spinetic-no-transition"),T&&Math.abs(T)>(r==null?void 0:r.touchThreshold)&&(T>0?h():a()),(c=y==null?void 0:y.classList)==null||c.remove("no-click"),z(null),_()))}}},Oe=({children:e,config:t=Q,change:r})=>{var X;const n=o.useRef(null),l=o.useRef(null),[u,I]=o.useState(M(t)),[i,h]=o.useState(0),[a,_]=o.useState([]);o.useState([]);const[b,q]=o.useState([]),[D,k]=o.useState(!0),[R,U]=o.useState(window==null?void 0:window.innerWidth),[S,Y]=o.useState(void 0),[g,Z]=o.useState({previous:{index:i,remainingIndexes:a,totalItems:o.Children.count(e)},current:{index:i,remainingIndexes:a,totalItems:o.Children.count(e)}});o.useEffect(()=>ee(),[]),o.useEffect(()=>{S&&T(t)},[t,S]),o.useEffect(()=>T(t),[e,R]),o.useEffect(()=>B(),[a,i]),o.useEffect(()=>{r&&(a==null?void 0:a.length)>1&&r(g)},[i]),o.useEffect(()=>{if(u.autoRotate){const s=setInterval(()=>{h(p=>{const w=p+1,f=w>=a.length?0:w;return W({current:{...g.current,index:f},previous:{...g.previous,index:p}}),f})},u.msPerAutoRotate);return()=>clearInterval(s)}},[a,u.autoRotate]),o.useEffect(()=>(T(t),window.removeEventListener("resize",y),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[(X=l.current)==null?void 0:X.offsetWidth,R,window==null?void 0:window.innerWidth]);const y=()=>{R!==(window==null?void 0:window.innerWidth)&&(U(window==null?void 0:window.innerWidth),T(t))},ee=()=>{var v;const s=(v=window==null?void 0:window.location)==null?void 0:v.href,p=!!(sessionStorage!=null&&sessionStorage.getItem("@storybook/manager/store")),w=!!(localStorage!=null&&localStorage.getItem("@storybook/manager/store")),f=(s==null?void 0:s.includes("docs"))||p||w;return Y(f)},T=s=>{const p=M(s),w=p.responsive?[...p.responsive.map(v=>v.breakpoint)]:[],f=window==null?void 0:window.innerWidth;w.forEach((v,E)=>{var A;if(f<=v){const x=(A=p==null?void 0:p.responsive[E])==null?void 0:A.settings;Object.keys(x).forEach(V=>{p[V]=x[V]})}}),I(M(p)),z()},z=()=>{var me,pe,he;C();const s=Ve(b),p=S?M(t):Q,w=S?p.verticalAlign:u.verticalAlign;(me=n.current)==null||me.classList.toggle("spinetic-vertical-align",w);let f=0,v=0,E=0;b.some(H=>{if(v+=H,v<=(n==null?void 0:n.current.offsetWidth))f++;else return H}),E=Math.max(0,o.Children.count(e)-f);let A=i,x=0;const V=H=>{H.forEach((oe,We)=>{We<A&&(x+=oe)})};A>E?(A=E,x=s-(n==null?void 0:n.current.offsetWidth)):V(b);const $=Array.from({length:E+1},(H,oe)=>oe+f);W({current:{index:0,remainingIndexes:$,totalItems:o.Children.count(e)},previous:{index:0,remainingIndexes:$,totalItems:o.Children.count(e)}}),_($),$e((pe=g==null?void 0:g.current)==null?void 0:pe.remainingIndexes,$)||h(0);const ke=(S?p.draggable:u.draggable)&&(a==null?void 0:a.length)>1;(he=l.current)==null||he.classList.toggle("hasDraggable",ke),s<=(n==null?void 0:n.current.offsetWidth)?N(0):N(x)},C=()=>{var E,A;const s=((E=l.current)==null?void 0:E.querySelectorAll(".spinetic-item"))??null,p=n.current.offsetWidth,w=(A=l.current)==null?void 0:A.offsetHeight,f=[],v=S?M(t):Q;return s!==null&&s.forEach((x,V)=>{if(S?v.autoWidth:u.autoWidth)f.push(x.offsetWidth),x.style.width="";else{const se=S?v.showItems:u.showItems;f.push(p/se),x.style.width=p/se+"px"}(S?v.fullHeightItems:u.fullHeightItems)?window.requestAnimationFrame(()=>{x.style.height=w+"px"}):x.style.height=""}),q(f),f},W=s=>{Z(p=>({previous:{...p.previous,...s.previous},current:{...p.current,...s.current}}))},F=s=>u.clickTransitionCtrl?D&&s:s,de=i>0,te=()=>{if(F(de)){const s=i-1;W({current:{...g.current,index:s},previous:{...g.previous,index:i}}),h(s)}},m=i<(a==null?void 0:a.length)-1,c=()=>{if(F(m)){const s=i+1;W({current:{...g.current,index:s},previous:{...g.previous,index:i}}),h(s)}},L=o.Children.count(e),ne=s=>s>=0&&s<L,P=s=>{F(ne(s))&&(W({current:{...g.current,index:s},previous:{...g.previous,index:i}}),h(s))},N=s=>{l.current.style.transform=`translateX(${s}px)`},B=()=>{k(!1);const s=ye(b,i);N(s),setTimeout(()=>{k(!0)},u.msPerClicks)},{start:G,move:ue,end:J}=He({_sb:S,config:t,currentConfig:u,remainingIndexes:a,spineticContainer:l,_carouselItemsWidths:b,currentIndex:i,_setCarouselContainerTransform:N,previousItem:te,nextItem:c,_handleItemChange:B});return{currentConfig:u,currentIndex:i,spineticMain:n,spineticContainer:l,maxCarouselItems:L,remainingIndexes:a,goToItem:P,previousItem:te,nextItem:c,start:G,move:ue,end:J}},ae=({children:e,config:t,change:r})=>{const{currentConfig:n,currentIndex:l,spineticMain:u,spineticContainer:I,maxCarouselItems:i,remainingIndexes:h,goToItem:a,previousItem:_,nextItem:b,start:q,move:D,end:k}=Oe({children:e,config:t,change:r});return be("div",{className:"spinetic-main",ref:u,children:[d("div",{className:"spinetic-wrapper",children:d(re,{currentConfig:n,currentIndex:l,remainingIndexes:h,onClickPreviousItem:_,onClickNextItem:b,children:d("div",{className:"spinetic-container",ref:I,onMouseDown:q,onMouseMove:D,onMouseUp:k,onMouseLeave:k,onTouchStart:q,onTouchMove:D,onTouchEnd:k,children:e})})}),d(ie,{currentConfig:n,currentIndex:l,maxCarouselItems:i,remainingIndexes:h,goToItem:a})]})},Ee=ae;try{ae.displayName="Spinetic",ae.__docgenInfo={description:"",displayName:"Spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const le=({children:e})=>d("div",{className:"spinetic-item",children:e});try{le.displayName="SpineticItem",le.__docgenInfo={description:"",displayName:"SpineticItem",props:{}}}catch{}const nt={title:"Pages/Playground",parameters:{docs:{page:Re,source:{language:"tsx"}}},tags:["autodocs"],component:Ee,argTypes:De},ce=e=>{const t=Ne(e.children),r=e.change;delete e.children,delete e.change;const n={...e},[l,u]=o.useState(t),I=10*60*1e3,i=5*1e3;return o.useEffect(()=>{let h=0;const a=setInterval(()=>{h<I?(u(_=>[..._]),h+=i):clearInterval(a)},i);return()=>clearInterval(a)},[I,i]),d(Ee,{config:n,change:r?Me:void 0,children:l.map((h,a)=>d(le,{children:d(qe,{highlightText:!1,index:a,text:h})},a))})},K=ce.bind({}),O=ce.bind({});O.args={autoWidth:!0,dotsModel:"long-rounded",fullHeightItems:!0};const j=ce.bind({});j.args={autoRotate:!0,dotsModel:"long-rounded",hideArrows:!0,msPerAutoRotate:2e3,showItems:3};var ge,fe,ve;K.parameters={...K.parameters,docs:{...(ge=K.parameters)==null?void 0:ge.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };
  const [items, setItems] = useState<any>(childrens);
  const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  const intervalTime = 5 * 1000; // 10 segundos

  useEffect(() => {
    let elapsedTime = 0;
    const addItemInterval = setInterval(() => {
      if (elapsedTime < totalTimeInMilliseconds) {
        // Adiciona um novo item ao array
        //setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);
        setItems((prevItems: any) => [...prevItems]);
        elapsedTime += intervalTime;
      } else {
        // Se o tempo total for atingido, limpa o intervalo
        clearInterval(addItemInterval);
      }
    }, intervalTime);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(addItemInterval);
  }, [totalTimeInMilliseconds, intervalTime]);
  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {items.map((text: string, index: number) => <SpineticItem key={index}>
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
  const [items, setItems] = useState<any>(childrens);
  const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  const intervalTime = 5 * 1000; // 10 segundos

  useEffect(() => {
    let elapsedTime = 0;
    const addItemInterval = setInterval(() => {
      if (elapsedTime < totalTimeInMilliseconds) {
        // Adiciona um novo item ao array
        //setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);
        setItems((prevItems: any) => [...prevItems]);
        elapsedTime += intervalTime;
      } else {
        // Se o tempo total for atingido, limpa o intervalo
        clearInterval(addItemInterval);
      }
    }, intervalTime);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(addItemInterval);
  }, [totalTimeInMilliseconds, intervalTime]);
  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {items.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(xe=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Te,we,_e;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;
  delete args.children;
  delete args.change;
  const config = {
    ...args
  };
  const [items, setItems] = useState<any>(childrens);
  const totalTimeInMilliseconds = 10 * 60 * 1000; // 10 minutos
  const intervalTime = 5 * 1000; // 10 segundos

  useEffect(() => {
    let elapsedTime = 0;
    const addItemInterval = setInterval(() => {
      if (elapsedTime < totalTimeInMilliseconds) {
        // Adiciona um novo item ao array
        //setItems((prevItems: any) => [...prevItems, \`Novo Item \${prevItems.length + 1}\`]);
        setItems((prevItems: any) => [...prevItems]);
        elapsedTime += intervalTime;
      } else {
        // Se o tempo total for atingido, limpa o intervalo
        clearInterval(addItemInterval);
      }
    }, intervalTime);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(addItemInterval);
  }, [totalTimeInMilliseconds, intervalTime]);
  return <Spinetic config={config} change={change ? handleChange : undefined}>
      {items.map((text: string, index: number) => <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>)}
    </Spinetic>;
}`,...(_e=(we=j.parameters)==null?void 0:we.docs)==null?void 0:_e.source}}};const st=["Default","AutoWidth","AutoRotate"];export{j as AutoRotate,O as AutoWidth,K as Default,st as __namedExportsOrder,nt as default};
