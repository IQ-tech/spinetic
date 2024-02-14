import React, { useEffect, useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";

import "./Spinetic.styles.stories.scss";
import "../styles.scss";

import { TypesConfigOptional } from "types";

import Spinetic from "../Spinetic";

import CardExample, { generateItems, SpineticItem } from "./CardExample";

import { argTypes, handleChange } from "./argTypes";
import documentation from "./docs/Playground.mdx";

export default {
  title: "Pages/Playground",
  component: Spinetic,
  argTypes: argTypes,
  parameters: {
    docs: {
      page: documentation,
      source: {
        language: "tsx",
      },
    },
  },
  tags: ["autodocs"]
} as Meta;

const Template: StoryFn = (args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);
  const change = args.change;

  delete args.children;
  delete args.change;

  const config = { ...args };

  return (
    <Spinetic config={config} change={change ? handleChange : undefined}>
      {childrens.map((text: string, index: number) => (
        <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>
      ))}
    </Spinetic>
  );
};

export const Default = Template.bind({});

export const AutoWidth = Template.bind({});
AutoWidth.args = {
  autoWidth: true,
};

export const AutoRotate = Template.bind({});
AutoRotate.args = {
  autoRotate: true,
  msPerAutoRotate: 2000
};

// export const Responsive = Template.bind({});
// Responsive.args = {
//   autoWidth: true,
//   dotsModel: "long-rounded",
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         dots: false,
//         verticalAlign: true,
//       },
//     },
//   ],
// };
