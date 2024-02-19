import{j as e,a as t,F as c,G as l}from"./CardExample-ddb75f59.js";import{M as d}from"./index-30642b5c.js";import{a as i}from"./argTypes-c25653a6.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-9ccc0517.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function o(r){const n=Object.assign({h1:"h1",h2:"h2",code:"code",em:"em",p:"p",pre:"pre",ul:"ul",li:"li",a:"a",strong:"strong",h3:"h3"},a(),r.components);return t(c,{children:[e(l,{}),`
`,e(d,{title:"pages/Props"}),`
`,e(n.h1,{id:"spinetic",children:"Spinetic"}),`
`,e("br",{}),`
`,e(n.h2,{id:"props",children:"Props"}),`
`,t(n.h2,{id:"children-reactnode-or-reactnode",children:[e(n.code,{children:"children"}),": ",e(n.em,{children:"ReactNode"})," or ",e(n.em,{children:"ReactNode[]"})]}),`
`,t(n.p,{children:["Children elements to be rendered inside the Spinetic component. It can be a single ",e(n.code,{children:"ReactNode"})," or an ",e(n.em,{children:"array"})," of ",e(n.code,{children:"ReactNodes"}),"."]}),`
`,t(n.h2,{id:"config-typesconfigoptional",children:[e(n.code,{children:"config"}),": ",e(n.em,{children:"TypesConfigOptional"})]}),`
`,t(n.p,{children:["The ",e(n.code,{children:"config"})," prop accepts an object with optional settings for customizing the Spinetic component. To run tests and explore detailed information about each property and its functionality, navigate by clicking on individual properties and experiment with them in the playground:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`interface TypesConfigOptional {
  arrows?: boolean;
  arrowLeftPosition?: number;
  arrowRightPosition?: number;
  hideArrows?: boolean;

  dots?: boolean;
  dotsStyle?: object;
  dotsStyleActive?: object;
  indexInDots?: boolean;

  autoRotate?: boolean;
  msPerAutoRotate?: number;

  clickTransitionCtrl?: boolean;
  msPerClicks?: number;

  draggable?: boolean;
  touchThreshold?: number;

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
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#arrows",children:e(n.strong,{children:"arrows"})}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.arrows.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#arrowLeftPosition",children:"arrowLeftPosition"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.arrowLeftPosition.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#arrowRightPosition",children:"arrowRightPosition"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.arrowRightPosition.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#hideArrows",children:"hideArrows"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.hideArrows.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#dots",children:"dots"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.dots.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#dotsStyle",children:"dotsStyle"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.dotsStyle.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#dotsStyleActive",children:"dotsStyleActive"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.dotsStyleActive.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#indexInDots",children:"indexInDots"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.indexInDots.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#autoRotate",children:"autoRotate"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.autoRotate.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#msPerAutoRotate",children:"msPerAutoRotate"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.msPerAutoRotate.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#draggable",children:"draggable"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.draggable.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#touchThreshold",children:"touchThreshold"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.touchThreshold.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#showItems",children:"showItems"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.showItems.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#autoWidth",children:"autoWidth"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.autoWidth.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#fullHeightItems",children:"fullHeightItems"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.fullHeightItems.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#groupScroll",children:"groupScroll"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.groupScroll.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#groupItemsScroll",children:"groupItemsScroll"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.groupItemsScroll.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#clickTransitionCtrl",children:"clickTransitionCtrl"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.clickTransitionCtrl.description}})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#msPerClicks",children:"msPerClicks"}),": ",e("span",{dangerouslySetInnerHTML:{__html:i.msPerClicks.description}})]}),`
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
`,e("br",{})]})}function _(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e(n,Object.assign({},r,{children:e(o,r)})):o(r)}export{_ as default};
