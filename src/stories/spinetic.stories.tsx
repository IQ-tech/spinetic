import React, { useEffect, useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";

import "./styles.stories.scss";
import "../styles.scss";

import * as T from "types";

import Spinetic from "../Spinetic";

import CardExample, { generateItems, SpineticItem } from "./CardExample";

import { argTypes } from "./argTypes";
import documentation from "./docs/Playground.mdx";

const handleChange = (event: T.TypesSpineticChangeEvent) => {
  const currentState = event.current;
  const previousState = event.previous;

  alert(
      ` change
    { 
      current: {
        index: ${JSON.stringify(currentState.index)},
        remainingIndexes: ${JSON.stringify(previousState.remainingIndexes)}
        totalItems: ${JSON.stringify(previousState.totalItems)}
        itemsPerScroll: ${JSON.stringify(previousState.itemsPerScroll)}
      },
      previous: {
        index: ${JSON.stringify(previousState.index)},
        remainingIndexes: ${JSON.stringify(previousState.remainingIndexes)}
        totalItems: ${JSON.stringify(previousState.totalItems)}
        itemsPerScroll: ${JSON.stringify(previousState.itemsPerScroll)}
      }
  }
`
  );
};

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

const Template: StoryFn = (args: T.TypesConfigOptional | any) => {
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

export const Responsive = Template.bind({});
Responsive.args = {
  children: 3,
  showItems: 2,
  layout: "ctrls-in-line-2",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        layout: "vertical-align",
      },
    },
  ],
};
