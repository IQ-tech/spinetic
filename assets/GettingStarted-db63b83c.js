import{j as e,a as i,F as c,G as r}from"./card-example-a1cc0bc4.js";import{M as s}from"./index-c5f9cf19.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-935a1566.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function o(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li",a:"a"},a(),t.components);return i(c,{children:[e(r,{}),`
`,e(s,{title:"Pages/Getting Started"}),`
`,e(n.h1,{id:"spinetic",children:"Spinetic"}),`
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

default App;
`})}),`
`,e(n.p,{children:"This example demonstrates a basic setup of Spinetic. Customize appearance and behavior through configuration options and enjoy a integration of a carousel in your React project."}),`
`,i("div",{class:"nav-previous-next-idx",children:[e(n.p,{children:e(n.a,{href:"?path=/docs/pages-overview--documentation",children:"< Overview "})}),e(n.p,{children:e(n.a,{href:"?path=/docs/pages-props--documentation",children:"Props  > "})})]})]})}function v(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,Object.assign({},t,{children:e(o,t)})):o(t)}export{v as default};
