import React from "react";
import type { Meta, StoryFn } from "@storybook/react";

import "./spinetic.styles.stories.scss";
import "../styles.scss";

import { TypesConfigOptional } from "types";

import Spinetic from "../spinetic";
import SpineticItem from "../spinetic/spinetic-item";

import CardExample, { exampleItems, generateItems } from "./card-example";

import { argTypes, handleChange } from "./argTypes";
import documentation from "./docs/Playground.mdx";

export default {
  title: "Pages/Playground",
  parameters: {
    docs: {
      page: documentation,
      source: {
        language: "tsx",
      },
    },
  },
  tags: ["autodocs"],

  component: Spinetic,
  argTypes: argTypes,
} as Meta;

const Template: StoryFn = (args: TypesConfigOptional | any) => {
  const childrens = generateItems(args.children);

  const change = args.change;

  delete args.children;
  delete args.change;

  const config = { ...args };

  return (
    <Spinetic config={{ ...config }} change={change ? handleChange : undefined}>
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
  dotsModel: "long-rounded",
  fullHeightItems: true,
};

export const AutoRotate = Template.bind({});
AutoRotate.args = {
  autoRotate: true,
  dotsModel: "long-rounded",
  hideArrows: true,
  msPerAutoRotate: 2000,
  showItems: 3,
};
