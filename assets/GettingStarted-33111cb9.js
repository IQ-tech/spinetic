import{j as n,a as i,F as r,G as c}from"./CardExample-d31eb566.js";import{M as s}from"./index-55f3e704.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-fb0732a4.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function o(t){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li",a:"a"},a(),t.components);return i(r,{children:[n(c,{}),`
`,n(s,{title:"Pages/Getting Started"}),`
`,n(e.h1,{id:"spinetic",children:"Spinetic"}),`
`,n("br",{}),`
`,n(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,n(e.p,{children:`Welcome to Spinetic, a simple and customizable React carousel component.
This guide will walk you through the installation process and provide a brief introduction on how to use
Spinetic in your React applications.`}),`
`,n(e.h2,{id:"installation",children:"Installation"}),`
`,n(e.p,{children:"Using npm"}),`
`,n(e.pre,{children:n(e.code,{className:"language-shell",children:`npm i react-spinetic
`})}),`
`,n(e.p,{children:"Using yarn"}),`
`,n(e.pre,{children:n(e.code,{className:"language-shell",children:`yarn add react-spinetic
`})}),`
`,n(e.h3,{id:"example-usage",children:"Example Usage"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Import the styles in your ",n(e.code,{children:"main app.tsx"})," file:"]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import "react-spinetic/styles.css";
`})}),`
`,i(e.ol,{start:"2",children:[`
`,n(e.li,{children:"Import the carousel components wherever you want to use them:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { Spinetic, SpineticItem } from "react-spinetic";
`})}),`
`,i(e.ol,{start:"3",children:[`
`,n(e.li,{children:"Use the following example to understand how to use Spinetic:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`function App() {
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

default App;
`})}),`
`,n(e.p,{children:"This example demonstrates a basic setup of Spinetic. Customize appearance and behavior through configuration options and enjoy a integration of a carousel in your React project."}),`
`,i("div",{class:"nav-previous-next-idx",children:[n(e.p,{children:n(e.a,{href:"?path=/docs/pages-overview--documentation",children:"< Overview "})}),n(e.p,{children:n(e.a,{href:"?path=/docs/pages-props--documentation",children:"Props  > "})})]}),`
`,n("br",{}),`
`,n("br",{}),`
`,n("br",{}),`
`,n("br",{})]})}function S(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?n(e,Object.assign({},t,{children:n(o,t)})):o(t)}export{S as default};
