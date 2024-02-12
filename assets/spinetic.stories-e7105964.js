import{j as a,a as le,F as We,g as Ve,C as Xe}from"./CardExample-d31eb566.js";import{r as o,R as O}from"./index-76fb7be0.js";import{v as H,_ as te,a as $e,h as Oe}from"./argTypes-9a51d947.js";import He from"./Playground-02436429.js";import"./_commonjsHelpers-de833af9.js";import"./index-8f132c5d.js";import"./iframe-a1f00d79.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a1cf9e47.js";const Ye=()=>a("svg",{style:{marginRight:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:a("g",{transform:"matrix(-1 0 0 -1 12.828 21.657)",children:a("g",{transform:"translate(-9.672 -5.234)",children:a("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})})}),Fe=o.memo(Ye),je=()=>a("svg",{style:{marginLeft:"2px"},xmlns:"http://www.w3.org/2000/svg",height:"21",width:"13",viewBox:"0 0 13 21",children:a("g",{transform:"translate(-9.672 -5.234)",children:a("path",{d:"M12.5,24.062l8-8-8-8",fill:"none",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})})}),ze=o.memo(je),ce=({children:e,currentConfig:t,currentIndex:s,remainingIndexes:n,onClickPreviousItem:i,onClickNextItem:p})=>{const c=t.arrows&&(n==null?void 0:n.length)>1,f=s===0,l=f&&(t==null?void 0:t.hideArrows),m=s===(n==null?void 0:n.length)-1,d=m&&(t==null?void 0:t.hideArrows);return le("div",{className:"spinetic-container-arrows",children:[c&&a("div",{className:"spinetic-btn-prev",children:a("button",{className:"spinetic-navigation-button",onClick:()=>i(),disabled:f,style:{right:`${t.arrowLeftPosition}px`,display:l?"none":"flex"},children:a(Fe,{})})}),e,c&&a("div",{className:"spinetic-btn-next",children:a("button",{className:"spinetic-navigation-button",onClick:()=>p(),disabled:m,style:{left:t.autoWidth?`${t.arrowRightPosition+4}px`:`${t.arrowRightPosition}px`,display:d?"none":"flex"},children:a(ze,{})})})]})};try{ce.displayName="SpineticArrows",ce.__docgenInfo={description:"",displayName:"SpineticArrows",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},onClickPreviousItem:{defaultValue:null,description:"",name:"onClickPreviousItem",required:!0,type:{name:"() => void"}},onClickNextItem:{defaultValue:null,description:"",name:"onClickNextItem",required:!0,type:{name:"() => void"}}}}}catch{}const ue=({currentConfig:e,currentIndex:t,maxCarouselItems:s,remainingIndexes:n,goToItem:i})=>{const p=e.dots&&(n==null?void 0:n.length)>1;return a(We,{children:p&&a("div",{className:"spinetic-dots",children:n==null?void 0:n.map((c,f)=>a("span",{className:`${e.dotsModel} ${f===t?`active-${e.dotsModel}`:""}`,onClick:()=>i(f),children:e.indexInDots&&a("span",{children:f+1+(s-(n==null?void 0:n.length))})},f))})})};try{ue.displayName="SpineticDots",ue.__docgenInfo={description:"",displayName:"SpineticDots",props:{currentConfig:{defaultValue:null,description:"",name:"currentConfig",required:!0,type:{name:"Required<TypesConfigOptional>"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},maxCarouselItems:{defaultValue:null,description:"",name:"maxCarouselItems",required:!0,type:{name:"number"}},remainingIndexes:{defaultValue:null,description:"",name:"remainingIndexes",required:!0,type:{name:"number[]"}},goToItem:{defaultValue:null,description:"",name:"goToItem",required:!0,type:{name:"(p0: number) => void"}}}}}catch{}const Be=e=>{let t=e;for(;t&&t!==(document==null?void 0:document.documentElement);){if(t.classList&&t.classList.contains("spinetic-item"))return t;t=t.parentElement}return null},Ge=e=>{const t=e==null?void 0:e.reduce((s,n)=>s+n,0);return Math.floor(t)},qe=(e,t)=>{var s;return Math.floor((s=e==null?void 0:e.slice(0,t))==null?void 0:s.reduce((n,i)=>n-i,0))},Je=(e,t)=>(e==null?void 0:e.length)!==(t==null?void 0:t.length)||!e||!t?!1:e==null?void 0:e.every((s,n)=>s===t[n]);function De(e,t,s=500){if(!e||!t)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;const p=de(e),c=de(t);if(p>s||c>s)return!1;for(const f of n){const l=e[f],m=t[f];if(typeof l=="object"&&l!==null&&typeof m=="object"&&m!==null){if(!De(l,m,s))return!1}else if(l!==m)return!1}return!0}function de(e){let t=0;for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t++,typeof e[s]=="object"&&e[s]!==null&&(t+=de(e[s])));return t}function Ke(e,t,s=5,n=10,i=500){if(!e||!t)return!1;let p=0,c=0;return(()=>{for(;p<s&&c<n;){if(p++,(e==null?void 0:e.every((m,d)=>{var _,A,y,w,V;const D=(A=(_=m==null?void 0:m.props)==null?void 0:_.children)==null?void 0:A.props,b=(V=(w=(y=t[d])==null?void 0:y.props)==null?void 0:w.children)==null?void 0:V.props;return De(D,b,i)}))||!1)return!0;c++}return!1})()}const Qe=({_sb:e,config:t,currentConfig:s,remainingIndexes:n,spineticContainer:i,_carouselItemsWidths:p,currentIndex:c,_setCarouselContainerTransform:f,previousItem:l,nextItem:m,_handleItemChange:d})=>{const[D,b]=o.useState(0),[_,A]=o.useState(0),[y,w]=o.useState(0),[V,S]=o.useState(!1),[C,I]=o.useState(!1),[N,ne]=o.useState(null),[T,K]=o.useState(null),R=e?H(t):te,L=()=>{const g="ontouchstart"in window||(navigator==null?void 0:navigator.maxTouchPoints)>0;I(g?!1:!(s!=null&&s.draggable))};o.useEffect(()=>{L()},[L,window==null?void 0:window.ontouchstart,navigator==null?void 0:navigator.maxTouchPoints]);const P=o.useCallback(g=>{const u=i==null?void 0:i.current;u&&u.classList[g?"add":"remove"]("spinetic-no-transition")},[i]),se=o.useCallback(g=>{var $;if(e&&!R.draggable||(n==null?void 0:n.length)<=1||C||s.verticalAlign)return;g.stopPropagation();const u=($=g.touches)==null?void 0:$[0];b(g.pageX||(u==null?void 0:u.pageX)||0),A((u==null?void 0:u.clientX)||0),w((u==null?void 0:u.clientY)||0),S(!0),ne(Be(g.target)),C||P(!0)},[s,e,R.draggable,n==null?void 0:n.length,C,P]),Q=o.useCallback(g=>{var F,j;if(e&&!R.draggable||!V||C||s.verticalAlign)return;const u=(F=g.touches)==null?void 0:F[0],$=(u==null?void 0:u.clientX)||0,re=(u==null?void 0:u.clientY)||0,M=Math.abs($-_),Y=Math.abs(re-y);if(!(Y>30)&&(M>Y&&M>20||!u)){g.stopPropagation();const U=(g.pageX||((u==null?void 0:u.pageX)||0)-(((j=i==null?void 0:i.current)==null?void 0:j.scrollLeft)||0))-D;K(U);const ie=qe(p,c)+U;(M>20||!u)&&f(ie),T&&Math.abs(T)>s.touchThreshold&&N&&N.classList.add("no-click")}},[e,R.draggable,V,C,s.verticalAlign,_,y,D,T,N,p,c,f]),oe=o.useCallback(g=>{e&&!R.draggable||C||s.verticalAlign||(S(!1),g.stopPropagation(),T&&Math.abs(T)>s.touchThreshold&&(T>0?l():m()),N&&N.classList.remove("no-click"),K(null),d(),P(!1))},[e,R.draggable,C,s.verticalAlign,T,l,m,N,d,P]);return{start:se,move:Q,end:oe}},Ue=({children:e,config:t=te,change:s})=>{var ge;const n=o.useRef(null),i=o.useRef(null),p=o.useRef(e),[c,f]=o.useState(H(t)),[l,m]=o.useState(0),[d,D]=o.useState([]),[b,_]=o.useState([]),[A,y]=o.useState(!0),[w,V]=o.useState(0),[S,C]=o.useState(void 0),[I,N]=o.useState({previous:{index:l,remainingIndexes:d,totalItems:o.Children.count(e)},current:{index:l,remainingIndexes:d,totalItems:o.Children.count(e)}}),ne=()=>{var v;const r=(v=window==null?void 0:window.location)==null?void 0:v.href,h=!!(localStorage!=null&&localStorage.getItem("@storybook/manager/store")),x=(r==null?void 0:r.includes("pages-playground"))&&h;return C(x)},T=r=>{const h=H(r),x=h.responsive?[...h.responsive.map(E=>E.breakpoint)]:[],v=window==null?void 0:window.innerWidth;x.forEach((E,X)=>{var W;if(v<=E){const q=(W=h==null?void 0:h.responsive[X])==null?void 0:W.settings;Object.keys(q).forEach(k=>{h[k]=q[k]})}}),f(H(h)),K()},K=()=>{var ve,Ie,we,ye;if(c.verticalAlign)return;R();const r=Ge(b),h=S?H(t):te;let x=0,v=0,E=0;const X=((ve=n==null?void 0:n.current)==null?void 0:ve.offsetWidth)??0;b.some(B=>{if(v+=B,v<=X)x++;else return B}),E=Math.max(0,o.Children.count(e)-x);let W=l,q=0;const k=B=>{B.forEach((ae,Me)=>{Me<W&&(q+=ae)})};W>E?(W=E,q=r-X):k(b);const z=Array.from({length:E+1},(B,ae)=>ae+x);L({current:{index:0,remainingIndexes:z,totalItems:o.Children.count(e)},previous:{index:0,remainingIndexes:z,totalItems:o.Children.count(e)}}),D(z),Je((Ie=I==null?void 0:I.current)==null?void 0:Ie.remainingIndexes,z)||m(0);const Z=(S?h.draggable:c.draggable)&&(d==null?void 0:d.length)>1;(we=i.current)==null||we.classList.toggle("hasDraggable",Z);const Pe=((ye=n==null?void 0:n.current)==null?void 0:ye.offsetWidth)??0;r<=Pe?M(0):M(q)},R=()=>{var X,W,q;const r=((X=i.current)==null?void 0:X.querySelectorAll(".spinetic-item"))??null,h=((W=n==null?void 0:n.current)==null?void 0:W.offsetWidth)??0,x=(q=i==null?void 0:i.current)==null?void 0:q.offsetHeight,v=[],E=S?H(t):te;return r!==null&&r.forEach((k,z)=>{if(S?E.autoWidth:c.autoWidth)v.push(k.offsetWidth),k.style.width="";else{const Z=S?E.showItems:c.showItems;v.push(h/Z),k.style.width=h/Z+"px"}(S?E.fullHeightItems:c.fullHeightItems)?window.requestAnimationFrame(()=>{k.style.height=x+"px"}):k.style.height=""}),_(v),v},L=r=>{N(h=>({previous:{...h.previous,...r.previous},current:{...h.current,...r.current}}))},P=r=>c.clickTransitionCtrl?A&&r:r,se=l>0,Q=()=>{if(P(se)){const r=l-1;m(r),L({current:{...I.current,index:r},previous:{...I.previous,index:l}})}},oe=l<(d==null?void 0:d.length)-1,g=()=>{if(P(oe)){const r=l+1;m(r),L({current:{...I.current,index:r},previous:{...I.previous,index:l}})}},u=o.Children.count(e),$=r=>r>=0&&r<u,re=r=>{P($(r))&&(m(r),L({current:{...I.current,index:r},previous:{...I.previous,index:l}}))},M=r=>{c.verticalAlign||i!=null&&i.current&&(i.current.style.transform=`translateX(${r}px)`)},Y=()=>{y(!1);const r=qe(b,l);M(r),setTimeout(()=>{y(!0)},c.msPerClicks)},F=o.useCallback(()=>{w!==(window==null?void 0:window.innerWidth)&&(V(window==null?void 0:window.innerWidth),T(t))},[window==null?void 0:window.innerWidth,window==null?void 0:window.innerHeight,t]),j=o.useCallback(()=>{Ke(e,p.current)||(p.current=e,T(t))},[e,t]),{start:fe,move:U,end:ie}=Qe({_sb:S,config:t,currentConfig:c,remainingIndexes:d,spineticContainer:i,_carouselItemsWidths:b,currentIndex:l,_setCarouselContainerTransform:M,previousItem:Q,nextItem:g,_handleItemChange:Y});return o.useEffect(()=>ne(),[]),o.useEffect(()=>Y(),[d,l]),o.useEffect(()=>{s&&(d==null?void 0:d.length)>1&&s(I)},[l]),o.useEffect(()=>(T(t),window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)),[(ge=i.current)==null?void 0:ge.offsetWidth,w,window==null?void 0:window.innerWidth]),o.useEffect(()=>{if(c.autoRotate){const r=setInterval(()=>{m(h=>{const x=h+1,v=x>=d.length?0:x;return L({current:{...I.current,index:v},previous:{...I.previous,index:h}}),v})},c.msPerAutoRotate);return()=>clearInterval(r)}},[d,c.autoRotate]),o.useEffect(()=>j(),[j]),o.useEffect(()=>{S&&T(t)},[t,S,e,p.current]),{currentConfig:c,currentIndex:l,spineticMain:n,prevChildren:p,spineticContainer:i,maxCarouselItems:u,remainingIndexes:d,goToItem:re,previousItem:Q,nextItem:g,start:fe,move:U,end:ie}},me=({children:e,config:t,change:s})=>{const{currentConfig:n,currentIndex:i,spineticMain:p,spineticContainer:c,prevChildren:f,maxCarouselItems:l,remainingIndexes:m,goToItem:d,previousItem:D,nextItem:b,start:_,move:A,end:y}=Ue({children:e,config:t,change:s});return le(We,{children:[n.verticalAlign&&a("div",{className:"spinetic-vertical-align",children:a("div",{children:O.Children.map(f.current,w=>O.isValidElement(w)?O.cloneElement(w):a("h1",{children:"Not a React component"}))})}),!n.verticalAlign&&le("div",{className:"spinetic-main",ref:p,children:[a("div",{className:"spinetic-wrapper",children:a(ce,{currentConfig:n,currentIndex:i,remainingIndexes:m,onClickPreviousItem:D,onClickNextItem:b,children:a("div",{className:"spinetic-container",ref:c,onMouseDown:_,onMouseMove:A,onMouseUp:y,onMouseLeave:y,onTouchStart:_,onTouchMove:A,onTouchEnd:y,children:O.Children.map(f.current,w=>O.isValidElement(w)?O.cloneElement(w):a("h1",{children:"Not a React component"}))})})}),a(ue,{currentConfig:n,currentIndex:i,maxCarouselItems:l,remainingIndexes:m,goToItem:d})]})]})},Ne=me;try{me.displayName="Spinetic",me.__docgenInfo={description:"",displayName:"Spinetic",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TypesConfigOptional"}},change:{defaultValue:null,description:"",name:"change",required:!1,type:{name:"((e: SpineticChangeEvent) => void)"}}}}}catch{}const pe=({children:e})=>a("div",{className:"spinetic-item",children:e}),Ze=o.memo(pe);try{pe.displayName="SpineticItem",pe.__docgenInfo={description:"",displayName:"SpineticItem",props:{}}}catch{}const pt={title:"Pages/Playground",parameters:{docs:{page:He,source:{language:"tsx"}}},tags:["autodocs"],component:Ne,argTypes:$e},he=e=>{const t=Ve(e.children),s=e.change;delete e.children,delete e.change;const n={...e};return a(Ne,{config:n,change:s?Oe:void 0,children:t.map((i,p)=>a(Ze,{children:a(Xe,{highlightText:!1,index:p,text:i})},p))})},ee=he.bind({}),G=he.bind({});G.args={autoWidth:!0,dotsModel:"long-rounded",fullHeightItems:!0};const J=he.bind({});J.args={autoRotate:!0,dotsModel:"long-rounded",hideArrows:!0,msPerAutoRotate:2e3,showItems:1};var Se,Te,xe;ee.parameters={...ee.parameters,docs:{...(Se=ee.parameters)==null?void 0:Se.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(xe=(Te=ee.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Ee,be,_e;G.parameters={...G.parameters,docs:{...(Ee=G.parameters)==null?void 0:Ee.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(_e=(be=G.parameters)==null?void 0:be.docs)==null?void 0:_e.source}}};var ke,Ae,Ce;J.parameters={...J.parameters,docs:{...(ke=J.parameters)==null?void 0:ke.docs,source:{originalSource:`(args: TypesConfigOptional | any) => {
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
}`,...(Ce=(Ae=J.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};const ht=["Default","AutoWidth","AutoRotate"];export{J as AutoRotate,G as AutoWidth,ee as Default,ht as __namedExportsOrder,pt as default};
