import{j as e,a as t,F as l,G as c}from"./CardExample-edf23076.js";import{M as d}from"./index-3bf23a3a.js";import{a as r}from"./argTypes-6a4c88d5.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2a55cddb.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function o(i){const n=Object.assign({h1:"h1",h2:"h2",code:"code",em:"em",p:"p",pre:"pre",ul:"ul",li:"li",a:"a",strong:"strong",h3:"h3"},a(),i.components);return t(l,{children:[e(c,{}),`
`,e(d,{title:"pages/Props"}),`
`,e(n.h1,{id:"spinetic",children:"Spinetic"}),`
`,e("br",{}),`
`,e(n.h2,{id:"props",children:"Props"}),`
`,t(n.h2,{id:"children-reactnode-or-reactnode",children:[e(n.code,{children:"children"}),": ",e(n.em,{children:"ReactNode"})," or ",e(n.em,{children:"ReactNode[]"})]}),`
`,t(n.p,{children:["Children elements to be rendered inside the Spinetic component. It can be a single ",e(n.code,{children:"ReactNode"})," or an ",e(n.em,{children:"array"})," of ",e(n.code,{children:"ReactNodes"}),"."]}),`
`,t(n.h2,{id:"config-typesconfigoptional",children:[e(n.code,{children:"config"}),": ",e(n.em,{children:"TypesConfigOptional"})]}),`
`,t(n.p,{children:["The ",e(n.code,{children:"config"})," prop accepts an object with optional settings for customizing the Spinetic component. To run tests and explore detailed information about each property and its functionality, navigate by clicking on individual properties and experiment with them in the playground:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`export interface TypesConfigOptional {
  arrows?: boolean;
  arrowsStyle?: TypesDefaultArrowsStyle;
  hideArrows?: boolean;

  dots?: boolean;
  dotsStyle?: TypesDefaultDotsStyle,
  itemNumberInDot?: boolean;

  autoRotate?: boolean;
  msPerAutoRotate?: number;

  clickTransitionCtrl?: boolean;
  msPerClicks?: number;

  draggable?: boolean;
  touchThreshold?: number;

  layout?: TypesLayout,
  showItems?: number;
  autoWidth?: boolean;
  fullHeightItems?: boolean;

  groupScroll?: boolean;
  groupItemsScroll?: number;

  responsive?: TypesReponsiveSettings[];
}

interface TypesReponsiveSettings {
  breakpoint: number;
  settings: TypesConfigOptional;
}
`})}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#arrows",children:e(n.strong,{children:"arrows"})}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.arrows.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#arrowsStyle",children:"arrowsStyle"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.arrowsStyle.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#hideArrows",children:"hideArrows"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.hideArrows.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#dots",children:"dots"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.dots.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#dotsStyle",children:"dotsStyle"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.dotsStyle.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#itemNumberInDot",children:"itemNumberInDot"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.itemNumberInDot.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#autoRotate",children:"autoRotate"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.autoRotate.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#msPerAutoRotate",children:"msPerAutoRotate"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.msPerAutoRotate.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#draggable",children:"draggable"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.draggable.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#touchThreshold",children:"touchThreshold"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.touchThreshold.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#showItems",children:"showItems"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.showItems.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#fullHeightItems",children:"fullHeightItems"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.fullHeightItems.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#autoWidth",children:"autoWidth"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.autoWidth.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#centerSingleItemAW",children:"centerSingleItemAW"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.centerSingleItemAW.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#groupScroll",children:"groupScroll"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.groupScroll.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#groupItemsScroll",children:"groupItemsScroll"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.groupItemsScroll.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#clickTransitionCtrl",children:"clickTransitionCtrl"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.clickTransitionCtrl.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#msPerClicks",children:"msPerClicks"}),": ",e("span",{dangerouslySetInnerHTML:{__html:r.msPerClicks.description}})]}),`
`]}),`
`]}),`
`,t(n.h2,{id:"change-function",children:[e(n.code,{children:"change"}),": ",e(n.em,{children:"function"})]}),`
`,t(n.p,{children:["Callback function triggered on a change event in the Spinetic component. The ",e(n.code,{children:"change"})," function is called every time an item in the carousel is changed, providing information about the previous and current state."]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.strong,{children:"Callback Signature"}),":"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`(event: SpineticChangeEvent) => void
`})}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.strong,{children:e(n.code,{children:"previous"})}),": Object containing information about the previous state."]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[e(n.code,{children:"index"}),": The index of the previously active item."]}),`
`,t(n.li,{children:[e(n.code,{children:"remainingIndexes"}),": The number of remaining items in the carousel."]}),`
`,t(n.li,{children:[e(n.code,{children:"totalItems"}),": The total number of items in the carousel."]}),`
`]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.strong,{children:e(n.code,{children:"current"})}),": Object containing information about the current state."]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[e(n.code,{children:"index"}),": The index of the currently active item."]}),`
`,t(n.li,{children:[e(n.code,{children:"remainingIndexes"}),": The number of remaining items in the carousel."]}),`
`,t(n.li,{children:[e(n.code,{children:"totalItems"}),": The total number of items in the carousel."]}),`
`]}),`
`]}),`
`]}),`
`,e(n.h3,{id:"example-usage",children:"Example Usage:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`function App() {
  const exampleItems = [
    "content-1",
    "content-2",
    "content-3",
    "content-4",
    "content-5",
    "content-6",
    "content-7",
    "content-8",
  ];

  const handleChange = (event: SpineticChangeEvent) => {
  console.log('Previous State:', event.previous);
  console.log('Current State:', event.current);
};

  return (
    <Spinetic change={handleChange}>
      {exampleItems.map((content, index) => (
        <SpineticItem key={index}>
          <div
            style={{ height: 200, width: 250, background: "blue", margin: 10 }}
          >
            {content}
          </div>
        </SpineticItem>
      ))}
    </Spinetic>
  );
}

default App;

`})}),`
`,e(n.p,{children:"The SpineticChangeEvent object is used within the change callback function, offering a structured way to access details about the previous and current states of the carousel during a change event."}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`interface SpineticChangeEvent = {
  previous: {
    index: number;
    remainingIndexes: number[];
    totalItems: number;
  };
  current: {
    index: number;
    remainingIndexes: number[];
    totalItems: number;
  };
};
`})}),`
`,e(n.p,{children:"Feel free to explore the various features and configurations available. Utilize the Spinetic playground for a customized carousel experience tailored to your preferences. Explore and enjoy!"}),`
`,t("div",{class:"nav-previous-next-idx",children:[e(n.p,{children:e(n.a,{href:"?path=/docs/pages-getting-started--documentation",children:"< Getting Started"})}),e(n.p,{children:e(n.a,{href:"?path=/docs/pages-playground--documentation",children:"Playground >"})})]}),`
`,e("br",{}),`
`,e("br",{}),`
`,e("br",{}),`
`,e("br",{})]})}function _(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e(n,Object.assign({},i,{children:e(o,i)})):o(i)}export{_ as default};
