import{j as e,a as i,F as c,G as d}from"./CardExample-1e7cc3e5.js";import{M as l}from"./index-c70b6957.js";import{a as t}from"./argTypes-ec8699a8.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-010ca532.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function o(r){const n=Object.assign({h1:"h1",h2:"h2",code:"code",em:"em",p:"p",pre:"pre",ul:"ul",li:"li",a:"a",strong:"strong",h3:"h3"},a(),r.components);return i(c,{children:[e(d,{}),`
`,e(l,{title:"pages/Props"}),`
`,e(n.h1,{id:"spinetic",children:"Spinetic"}),`
`,e("br",{}),`
`,e(n.h2,{id:"props",children:"Props"}),`
`,i(n.h2,{id:"children-reactnode-or-reactnode",children:[e(n.code,{children:"children"}),": ",e(n.em,{children:"ReactNode"})," or ",e(n.em,{children:"ReactNode[]"})]}),`
`,i(n.p,{children:["Children elements to be rendered inside the Spinetic component. It can be a single ",e(n.code,{children:"ReactNode"})," or an ",e(n.em,{children:"array"})," of ",e(n.code,{children:"ReactNodes"}),"."]}),`
`,i(n.h2,{id:"config-typesconfigoptional",children:[e(n.code,{children:"config"}),": ",e(n.em,{children:"TypesConfigOptional"})]}),`
`,i(n.p,{children:["The ",e(n.code,{children:"config"})," prop accepts an object with optional settings for customizing the Spinetic component. To run tests and explore detailed information about each property and its functionality, navigate by clicking on individual properties and experiment with them in the playground:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`interface TypesConfigOptional {
  arrows?: boolean;
  arrowLeftPosition?: number;
  arrowRightPosition?: number;
  hideArrows?: boolean;

  dots?: boolean;
  dotsModel?: TypesDotsModel;
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
  verticalAlign?: boolean;

  responsive?: TypesReponsiveSettings[];
}

interface TypesReponsiveSettings {
  breakpoint: number;
  settings: TypesConfigOptional;
}
`})}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#arrows",children:e(n.strong,{children:"arrows"})}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.arrows.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#arrowLeftPosition",children:"arrowLeftPosition"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.arrowLeftPosition.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#arrowRightPosition",children:"arrowRightPosition"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.arrowRightPosition.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#hideArrows",children:"hideArrows"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.hideArrows.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#dots",children:"dots"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.dots.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#dotsModel",children:"dotsModel"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.dotsModel.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#indexInDots",children:"indexInDots"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.indexInDots.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#autoRotate",children:"autoRotate"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.autoRotate.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#msPerAutoRotate",children:"msPerAutoRotate"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.msPerAutoRotate.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#clickTransitionCtrl",children:"clickTransitionCtrl"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.clickTransitionCtrl.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#msPerClicks",children:"msPerClicks"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.msPerClicks.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#draggable",children:"draggable"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.draggable.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#touchThreshold",children:"touchThreshold"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.touchThreshold.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#showItems",children:"showItems"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.showItems.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#autoWidth",children:"autoWidth"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.autoWidth.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#fullHeightItems",children:"fullHeightItems"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.fullHeightItems.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#verticalAlign",children:"verticalAlign"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.verticalAlign.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/pages-playground--documentation#verticalAlign",children:"responsive"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.responsive.description}})]}),`
`]}),`
`]}),`
`,i(n.h2,{id:"change-function",children:[e(n.code,{children:"change"}),": ",e(n.em,{children:"function"})]}),`
`,i(n.p,{children:["Callback function triggered on a change event in the Spinetic component. The ",e(n.code,{children:"change"})," function is called every time an item in the carousel is changed, providing information about the previous and current state."]}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.strong,{children:"Callback Signature"}),":"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`(event: SpineticChangeEvent) => void
`})}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.strong,{children:e(n.code,{children:"previous"})}),": Object containing information about the previous state."]}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"index"}),": The index of the previously active item."]}),`
`,i(n.li,{children:[e(n.code,{children:"remainingIndexes"}),": The number of remaining items in the carousel."]}),`
`,i(n.li,{children:[e(n.code,{children:"totalItems"}),": The total number of items in the carousel."]}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.strong,{children:e(n.code,{children:"current"})}),": Object containing information about the current state."]}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"index"}),": The index of the currently active item."]}),`
`,i(n.li,{children:[e(n.code,{children:"remainingIndexes"}),": The number of remaining items in the carousel."]}),`
`,i(n.li,{children:[e(n.code,{children:"totalItems"}),": The total number of items in the carousel."]}),`
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
`,i("div",{class:"nav-previous-next-idx",children:[e(n.p,{children:e(n.a,{href:"?path=/docs/pages-getting-started--documentation",children:"< Getting Started"})}),e(n.p,{children:e(n.a,{href:"?path=/docs/pages-playground--documentation",children:"Playground >"})})]})]})}function _(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e(n,Object.assign({},r,{children:e(o,r)})):o(r)}export{_ as default};
