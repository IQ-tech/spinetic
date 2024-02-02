import React from "react";
import type { Meta, StoryFn } from "@storybook/react";

import { TypesConfigOptional } from "types";

import "./spinetic.styles.stories.scss";
import "../styles.scss";

import SpineticComp from "../spinetic";
import SpineticItem from "../spinetic/spinetic-item";

import CardExample, { exampleItems } from "./card-example";
import { argTypes } from "./argTypes";

const Spinetic = ({ config }: { config: TypesConfigOptional }) => {
  console.log("🚀 ~ Spinetic ~ config:>>>[STORYBOOK]>>", config);

  return (
    <SpineticComp config={config}>
      {exampleItems.map((text: string, index: number) => (
        <SpineticItem key={index}>
          <CardExample highlightText={false} index={index} text={text} />
        </SpineticItem>
      ))}
    </SpineticComp>
  );
};

export default {
  title: "Spinetic",
  component: Spinetic,
  tags: ["autodocs"],
  
  argTypes: argTypes,
} as Meta;

const Template: StoryFn = (args: TypesConfigOptional) => {
  return <Spinetic config={args} />;
};

export const Default = Template.bind({});
Default.args = {};

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
  fullHeightItems: true,
  hideArrows: true,
  msPerAutoRotate: 2000,
  positionArrowLeft: 30,
  positionArrowRight: 30,
  showItems: 3,
};
