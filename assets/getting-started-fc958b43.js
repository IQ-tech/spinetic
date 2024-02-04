import{j as e,a as i,F as a}from"./jsx-runtime-29545a09.js";import{M as l}from"./index-afffe84a.js";import{a as t}from"./argTypes-17183219.js";import{u as c}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-17e44a1f.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function o(r){const n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li",em:"em",ul:"ul",strong:"strong"},c(),r.components);return i(a,{children:[e(l,{title:"Getting Started"}),`
`,i(n.h1,{id:"spinetic---overview",children:["Spinetic - ",e(n.a,{href:"?path=/docs/spinetic--documentation",children:"Overview"})]}),`
`,e("br",{}),`
`,e(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e(n.p,{children:`Welcome to Spinetic, a simple and customizable React carousel component.
This guide will walk you through the installation process and provide a brief introduction on how to use
Spinetic in your React applications.`}),`
`,e(n.h2,{id:"installation",children:"Installation"}),`
`,e(n.p,{children:"Using npm"}),`
`,e(n.pre,{children:e(n.code,{className:"language-shell",children:`npm i react-spinetic
`})}),`
`,e(n.p,{children:"Using yarn"}),`
`,e(n.pre,{children:e(n.code,{className:"language-shell",children:`yarn add react-spinetic
`})}),`
`,e(n.h3,{id:"example-usage",children:"Example Usage"}),`
`,i(n.ol,{children:[`
`,i(n.li,{children:["Import the styles in your ",e(n.code,{children:"main app.tsx"})," file:"]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`import "react-spinetic/styles.css";
`})}),`
`,i(n.ol,{start:"2",children:[`
`,e(n.li,{children:"Import the carousel components wherever you want to use them:"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`import { Spinetic, SpineticItem } from "react-spinetic";
`})}),`
`,i(n.ol,{start:"3",children:[`
`,e(n.li,{children:"Use the following example to understand how to use Spinetic:"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`function App() {
  const exampleItems = [
    "content-1",
    "content-2",
    "content-3",
    "content-4",
    "content-5",
  ];

  return (
    <Spinetic config={{ autoRotate: true }}>
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

export default App;
`})}),`
`,e(n.p,{children:"This example demonstrates a basic setup of Spinetic. Customize appearance and behavior through configuration options and enjoy a integration of a carousel in your React project."}),`
`,e(n.h2,{id:"props",children:"Props"}),`
`,i(n.h2,{id:"children-reactnode-or-reactnode",children:[e(n.code,{children:"children"}),": ",e(n.em,{children:"ReactNode"})," or ",e(n.em,{children:"ReactNode[]"})]}),`
`,i(n.p,{children:["Children elements to be rendered inside the Spinetic component. It can be a single ",e(n.code,{children:"ReactNode"})," or an ",e(n.em,{children:"array"})," of ",e(n.code,{children:"ReactNodes"}),"."]}),`
`,i(n.h2,{id:"config-typesconfigoptional",children:[e(n.code,{children:"config"}),": ",e(n.em,{children:"TypesConfigOptional"})]}),`
`,i(n.p,{children:["The ",e(n.code,{children:"config"})," prop accepts an object with optional settings for customizing the Spinetic component. To run tests and explore detailed information about each property and its functionality, navigate by clicking on individual properties and experiment with them in the playground:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`export interface TypesConfigOptional {
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

export interface TypesReponsiveSettings {
  breakpoint: number;
  settings: TypesConfigOptional;
}
`})}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#arrows",children:e(n.strong,{children:"arrows"})}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.arrows.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#arrowLeftPosition",children:"arrowLeftPosition"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.arrowLeftPosition.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#arrowRightPosition",children:"arrowRightPosition"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.arrowRightPosition.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#hideArrows",children:"hideArrows"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.hideArrows.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#dots",children:"dots"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.dots.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#dotsModel",children:"dotsModel"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.dotsModel.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#indexInDots",children:"indexInDots"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.indexInDots.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#autoRotate",children:"autoRotate"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.autoRotate.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#msPerAutoRotate",children:"msPerAutoRotate"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.msPerAutoRotate.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#clickTransitionCtrl",children:"clickTransitionCtrl"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.clickTransitionCtrl.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#msPerClicks",children:"msPerClicks"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.msPerClicks.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#draggable",children:"draggable"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.draggable.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#touchThreshold",children:"touchThreshold"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.touchThreshold.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#showItems",children:"showItems"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.showItems.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#autoWidth",children:"autoWidth"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.autoWidth.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#fullHeightItems",children:"fullHeightItems"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.fullHeightItems.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#verticalAlign",children:"verticalAlign"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.verticalAlign.description}})]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[e(n.a,{href:"?path=/docs/spinetic--documentation#verticalAlign",children:"responsive"}),": ",e("span",{dangerouslySetInnerHTML:{__html:t.responsive.description}})]}),`
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
`,e(n.h3,{id:"example-usage-1",children:"Example Usage:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`const handleChange = (event: SpineticChangeEvent) => {
  console.log('Previous State:', event.previous);
  console.log('Current State:', event.current);
};
`})}),`
`,e(n.p,{children:"The SpineticChangeEvent object is used within the change callback function, offering a structured way to access details about the previous and current states of the carousel during a change event."}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`export type SpineticChangeEvent = {
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
`,i(n.p,{children:["Feel free to explore the various features and configurations available. Utilize ",e(n.a,{href:"?path=/docs/spinetic--documentation#the-spinetic-playground",children:"the Spinetic playground"})," for a customized carousel experience tailored to your preferences. Explore and enjoy!"]})]})}function x(r={}){const{wrapper:n}=Object.assign({},c(),r.components);return n?e(n,Object.assign({},r,{children:e(o,r)})):o(r)}export{x as default};
