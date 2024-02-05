import React from "react";
import type { Meta, StoryFn } from "@storybook/react";

import "./spinetic.styles.stories.scss";
import "../styles.scss";

import { TypesConfigOptional } from "types";
import { SpineticChangeEvent } from "types";

import Spinetic from "../spinetic";
import SpineticItem from "../spinetic/spinetic-item";

import CardExample, { exampleItems } from "./card-example";

import { argTypes } from "./argTypes";
import documentation from "./docs/Playground.mdx";

export default {
  title: "pages/Playground",
  parameters: { docs: { page: documentation } },
  tags: ["autodocs"],

  component: Spinetic,
  argTypes: argTypes,
} as Meta;

const handleChange = (event: SpineticChangeEvent) => {
  const previousState = event.previous;
  const currentState = event.current;

  alert(
    `Previous State: ${JSON.stringify(
      previousState
    )}\nCurrent State: ${JSON.stringify(currentState)}`
  );
};

const Template: StoryFn = (args: TypesConfigOptional | any) => {
  const change = args.change;

  delete args.change;

  const config = args;
  return (
    <Spinetic config={config} change={change ? handleChange : undefined}>
      {exampleItems.map((text: string, index: number) => (
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

// export const AutoRotate = Template.bind({});
// AutoRotate.args = {
//   autoRotate: true,
//   dotsModel: "long-rounded",
//   hideArrows: true,
//   msPerAutoRotate: 2000,
//   showItems: 3,
// };
