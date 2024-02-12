import{j as l,a as le,F as Ae,g as Me,C as Pe}from"./CardExample-d31eb566.js";import{r as s,R as $}from"./index-76fb7be0.js";import{v as O,_ as ne,a as Ve,h as Xe}from"./argTypes-9a51d947.js";import $e from"./Playground-4f03216d.js";import"./_commonjsHelpers-de833af9.js";import"./index-38ccc76b.js";import"./iframe-f8efc6df.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Oe=()=>l("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:l("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:l("g",{transform:"translate(-9.672 -5.234)",children:l("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})}),He=s.memo(Oe),je=()=>l("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:l("g",{transform:"translate(-9.672 -5.234)",children:l("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})}),Ye=s.memo(je),ce=({children:e,currentConfig:t,currentIndex:o,remainingIndexes:n,onClickPreviousItem:r,onClickNextItem:m})=>{const a=t.arrows&&(n==null?void 0:n.length)>1,h=o===0,u=h&&(t==null?void 0:t.hideArrows),g=o===(n==null?void 0:n.length)-1,d=g&&(t==null?void 0:t.hideArrows);return le("div",{className:"spinetic-container-arrows",children:[a&&l("div",{className:"spinetic-btn-prev",children:l("button",{className:"spinetic-navigation-button",onClick:()=>r(),disabled:h,style:{right:`${t.arrowLeftPosition}px`,display:u?"none":"flex"},children:l(He,{})})}),e,a&&l("div",{className:"spinetic-btn-next",children:l("button",{className:"spinetic-navigation-button",onClick:()=>m(),disabled:g,style:{left:t.autoWidth?`${t.arrowRightPosition+4}px`:`${t.arrowRightPosition}px`,display:d?"none":"flex"},children:l(Ye,{})})})]})};try{ce.displayName="SpineticArrows",ce.__docgenInfo={description:"",displayName:"SpineticArrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const de=({currentConfig:e,currentIndex:t,maxCarouselItems:o,remainingIndexes:n,goToItem:r})=>{const m=e.dots&&(n==null?void 0:n.length)>1;return l(Ae,{children:m&&l("div",{className:"spinetic-dots",children:n==null?void 0:n.map((a,h)=>l("span",{className:`${e.dotsModel} ${h===t?`active-${e.dotsModel}`:""}`,onClick:()=>r(h),children:e.indexInDots&&l("span",{children:h+1+(o-(n==null?void 0:n.length))})},h))})})};try{de.displayName="SpineticDots",de.__docgenInfo={description:"",displayName:"SpineticDots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}}}}}catch{}const Fe=e=>{let t=e;for(;t&&t!==(document==null?void 0:document.documentElement);){if(t.classList&&t.classList.contains("spinetic-item"))return t;t=t.parentElement}return null},ze=e=>{const t=e==null?void 0:e.reduce((o,n)=>o+n,0);return Math.floor(t)},Ce=(e,t)=>{var o;return Math.floor((o=e==null?void 0:e.slice(0,t))==null?void 0:o.reduce((n,r)=>n-r,0))},Be=(e,t)=>(e==null?void 0:e.length)!==(t==null?void 0:t.length)||!e||!t?!1:e==null?void 0:e.every((o,n)=>o===t[n]);function We(e,t){if(!e||!t)return!1;const o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(const r of o){const m=e[r],a=t[r];if(typeof m=="object"&&m!==null&&typeof a=="object"&&a!==null){if(!We(m,a))return!1}else if(m!==a)return!1}return!0}function Ge(e,t){return!e||!t?!1:(e==null?void 0:e.every((o,n)=>{var a,h,u,g,d;const r=(h=(a=o==null?void 0:o.props)==null?void 0:a.children)==null?void 0:h.props,m=(d=(g=(u=t[n])==null?void 0:u.props)==null?void 0:g.children)==null?void 0:d.props;return We(r,m)}))||!1}const Je=({_sb:e,config:t,currentConfig:o,remainingIndexes:n,spineticContainer:r,_carouselItemsWidths:m,currentIndex:a,_setCarouselContainerTransform:h,previousItem:u,nextItem:g,_handleItemChange:d})=>{const[P,E]=s.useState(0),[L,V]=s.useState(0),[_,y]=s.useState(0),[G,w]=s.useState(!1),[k,I]=s.useState(!1),[W,se]=s.useState(null),[S,J]=s.useState(null),D=e?O(t):ne,N=()=>{const f="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;I(f?!1:!(o!=null&&o.draggable))};s.useEffect(()=>{N()},[N,window==null?void 0:window.ontouchstart,navigator==null?void 0:navigator.maxTouchPoints]);const R=s.useCallback(f=>{const c=r==null?void 0:r.current;c&&c.classList[f?"add":"remove"]("spinetic-no-transition")},[r]),oe=s.useCallback(f=>{var X;if(e&&!D.draggable||(n==null?void 0:n.length)<=1||k||o.verticalAlign)return;f.stopPropagation();const c=(X=f.touches)==null?void 0:X[0];E(f.pageX||(c==null?void 0:c.pageX)||0),V((c==null?void 0:c.clientX)||0),y((c==null?void 0:c.clientY)||0),w(!0),se(Fe(f.target)),k||R(!0)},[o,e,D.draggable,n==null?void 0:n.length,k,R]),K=s.useCallback(f=>{var j,Q;if(e&&!D.draggable||!G||k||o.verticalAlign)return;const c=(j=f.touches)==null?void 0:j[0],X=(c==null?void 0:c.clientX)||0,ie=(c==null?void 0:c.clientY)||0,q=Math.abs(X-L),H=Math.abs(ie-_);if(!(H>30)&&(q>H&&q>20||!c)){f.stopPropagation();const U=(f.pageX||((c==null?void 0:c.pageX)||0)-(((Q=r==null?void 0:r.current)==null?void 0:Q.scrollLeft)||0))-P;J(U);const Z=Ce(m,a)+U;(q>20||!c)&&h(Z),S&&Math.abs(S)>o.touchThreshold&&W&&W.classList.add("no-click")}},[e,D.draggable,G,k,o.verticalAlign,L,_,P,S,W,m,a,h]),re=s.useCallback(f=>{e&&!D.draggable||k||o.verticalAlign||(w(!1),f.stopPropagation(),S&&Math.abs(S)>o.touchThreshold&&(S>0?u():g()),W&&W.classList.remove("no-click"),J(null),d(),R(!1))},[e,D.draggable,k,o.verticalAlign,S,u,g,W,d,R]);return{start:oe,move:K,end:re}},Ke=({children:e,config:t=ne,change:o})=>{var Z;const n=s.useRef(null),r=s.useRef(null),m=s.useRef(e),[a,h]=s.useState(O(t)),[u,g]=s.useState(0),[d,P]=s.useState([]),[E,L]=s.useState([]),[V,_]=s.useState(!0),[y,G]=s.useState(0),[w,k]=s.useState(void 0),[I,W]=s.useState({previous:{index:u,remainingIndexes:d,totalItems:s.Children.count(e)},current:{index:u,remainingIndexes:d,totalItems:s.Children.count(e)}}),se=()=>{var v;const i=(v=window==null?void 0:window.location)==null?void 0:v.href,p=!!(localStorage!=null&&localStorage.getItem("@storybook/manager/store")),T=(i==null?void 0:i.includes("pages-playground"))&&p;return k(T)},S=i=>{const p=O(i),T=p.responsive?[...p.responsive.map(x=>x.breakpoint)]:[],v=window==null?void 0:window.innerWidth;T.forEach((x,M)=>{var A;if(v<=x){const C=(A=p==null?void 0:p.responsive[M])==null?void 0:A.settings;Object.keys(C).forEach(b=>{p[b]=C[b]})}}),h(O(p)),J()},J=()=>{var ge,fe,ve,Ie;if(a.verticalAlign)return;D();const i=ze(E),p=w?O(t):ne;let T=0,v=0,x=0;const M=((ge=n==null?void 0:n.current)==null?void 0:ge.offsetWidth)??0;E.some(F=>{if(v+=F,v<=M)T++;else return F}),x=Math.max(0,s.Children.count(e)-T);let A=u,C=0;const b=F=>{F.forEach((ae,Le)=>{Le<A&&(C+=ae)})};A>x?(A=x,C=i-M):b(E);const Y=Array.from({length:x+1},(F,ae)=>ae+T);N({current:{index:0,remainingIndexes:Y,totalItems:s.Children.count(e)},previous:{index:0,remainingIndexes:Y,totalItems:s.Children.count(e)}}),P(Y),Be((fe=I==null?void 0:I.current)==null?void 0:fe.remainingIndexes,Y)||g(0);const ee=(w?p.draggable:a.draggable)&&(d==null?void 0:d.length)>1;(ve=r.current)==null||ve.classList.toggle("hasDraggable",ee);const qe=((Ie=n==null?void 0:n.current)==null?void 0:Ie.offsetWidth)??0;i<=qe?q(0):q(C)},D=()=>{var M,A,C;const i=((M=r.current)==null?void 0:M.querySelectorAll(".spinetic-item"))??null,p=((A=n==null?void 0:n.current)==null?void 0:A.offsetWidth)??0,T=(C=r==null?void 0:r.current)==null?void 0:C.offsetHeight,v=[],x=w?O(t):ne;return i!==null&&i.forEach((b,Y)=>{if(w?x.autoWidth:a.autoWidth)v.push(b.offsetWidth),b.style.width="";else{const ee=w?x.showItems:a.showItems;v.push(p/ee),b.style.width=p/ee+"px"}(w?x.fullHeightItems:a.fullHeightItems)?window.requestAnimationFrame(()=>{b.style.height=T+"px"}):b.style.height=""}),L(v),v},N=i=>{W(p=>({previous:{...p.previous,...i.previous},current:{...p.current,...i.current}}))},R=i=>a.clickTransitionCtrl?V&&i:i,oe=u>0,K=()=>{if(R(oe)){const i=u-1;g(i),N({current:{...I.current,index:i},previous:{...I.previous,index:u}})}},re=u<(d==null?void 0:d.length)-1,f=()=>{if(R(re)){const i=u+1;g(i),N({current:{...I.current,index:i},previous:{...I.previous,index:u}})}},c=s.Children.count(e),X=i=>i>=0&&i<c,ie=i=>{R(X(i))&&(g(i),N({current:{...I.current,index:i},previous:{...I.previous,index:u}}))},q=i=>{a.verticalAlign||r!=null&&r.current&&(r.current.style.transform=`translateX(${i}px)`)},H=()=>{_(!1);const i=Ce(E,u);q(i),setTimeout(()=>{_(!0)},a.msPerClicks)},j=s.useCallback(()=>{y!==(window==null?void 0:window.innerWidth)&&(G(window==null?void 0:window.innerWidth),S(t))},[window==null?void 0:window.innerWidth,window==null?void 0:window.innerHeight,t]),{start:Q,move:he,end:U}=Je({_sb:w,config:t,currentConfig:a,remainingIndexes:d,spineticContainer:r,_carouselItemsWidths:E,currentIndex:u,_setCarouselContainerTransform:q,previousItem:K,nextItem:f,_handleItemChange:H});return s.useEffect(()=>se(),[]),s.useEffect(()=>H(),[d,u]),s.useEffect(()=>{o&&(d==null?void 0:d.length)>1&&o(I)},[u]),s.useEffect(()=>(S(t),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)),[(Z=r.current)==null?void 0:Z.offsetWidth,y,window==null?void 0:window.innerWidth]),s.useEffect(()=>{if(a.autoRotate){const i=setInterval(()=>{g(p=>{const T=p+1,v=T>=d.length?0:T;return N({current:{...I.current,index:v},previous:{...I.previous,index:p}}),v})},a.msPerAutoRotate);return()=>clearInterval(i)}},[d,a.autoRotate]),s.useEffect(()=>{Ge(e,m.current)||(m.current=e,S(t))},[e,t]),s.useEffect(()=>{w&&S(t)},[t,w,e,m.current]),{currentConfig:a,currentIndex:u,spineticMain:n,prevChildren:m,spineticContainer:r,maxCarouselItems:c,remainingIndexes:d,goToItem:ie,previousItem:K,nextItem:f,start:Q,move:he,end:U}},ue=({children:e,config:t,change:o})=>{const{currentConfig:n,currentIndex:r,spineticMain:m,spineticContainer:a,prevChildren:h,maxCarouselItems:u,remainingIndexes:g,goToItem:d,previousItem:P,nextItem:E,start:L,move:V,end:_}=Ke({children:e,config:t,change:o});return le(Ae,{children:[n.verticalAlign&&l("div",{className:"spinetic-vertical-align",children:l("div",{children:$.Children.map(h.current,y=>$.isValidElement(y)?$.cloneElement(y):l("h1",{children:"Not a React component"}))})}),!n.verticalAlign&&le("div",{className:"spinetic-main",ref:m,children:[l("div",{className:"spinetic-wrapper",children:l(ce,{currentConfig:n,currentIndex:r,remainingIndexes:g,onClickPreviousItem:P,onClickNextItem:E,children:l("div",{className:"spinetic-container",ref:a,onMouseDown:L,onMouseMove:V,onMouseUp:_,onMouseLeave:_,onTouchStart:L,onTouchMove:V,onTouchEnd:_,children:$.Children.map(h.current,y=>$.isValidElement(y)?$.cloneElement(y):l("h1",{children:"Not a React component"}))})})}),l(de,{currentConfig:n,currentIndex:r,maxCarouselItems:u,remainingIndexes:g,goToItem:d})]})]})},De=ue;try{ue.displayName="Spinetic",ue.__docgenInfo={description:"",displayName:"Spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const me=({children:e})=>l("div",{className:"spinetic-item",children:e}),Qe=s.memo(me);try{me.displayName="SpineticItem",me.__docgenInfo={description:"",displayName:"SpineticItem",props:{}}}catch{}const ut={title:"Pages/Playground",parameters:{docs:{page:$e,source:{language:"tsx"}}},tags:["autodocs"],component:De,argTypes:Ve},pe=e=>{const t=Me(e.children),o=e.change;delete e.children,delete e.change;const n={...e};return l(De,{config:n,change:o?Xe:void 0,children:t.map((r,m)=>l(Qe,{children:l(Pe,{highlightText:!1,index:m,text:r})},m))})},te=pe.bind({}),z=pe.bind({});z.args={autoWidth:!0,dotsModel:"long-rounded",fullHeightItems:!0};const B=pe.bind({});B.args={autoRotate:!0,dotsModel:"long-rounded",hideArrows:!0,msPerAutoRotate:2e3,showItems:1};var we,Se,Te;te.parameters={...te.parameters,docs:{...(we=te.parameters)==null?void 0:we.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(Te=(Se=te.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var xe,ye,be;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(be=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Ee,_e,ke;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(ke=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};const mt=["Default","AutoWidth","AutoRotate"];export{B as AutoRotate,z as AutoWidth,te as Default,mt as __namedExportsOrder,ut as default};
