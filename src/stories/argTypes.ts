import { _defaultConfig } from "../spinetic/spinetic-config-validation";

export const argTypes = {
    arrows: {
        description: "arrowssssss",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.arrows },
        },
    },

    autoWidth: {
        description: "autoWidth",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.autoWidth },
        },
    },

    autoRotate: {
        description: "autoRotate",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.autoRotate },
        },
    },

    clickTransitionCtrl: {
        description: "clickTransitionCtrl",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.clickTransitionCtrl },
        },
    },

    dots: {
        description: "dots",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.dots },
        },
    },

    dotsModel: {
        description: "dotsModel",
        control: "radio",
        options: ["default", "long-rounded"],
        table: {
            type: { summary: "text" },
            defaultValue: { summary: _defaultConfig.dotsModel },
        },
    },

    draggable: {
        description: "draggable",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.draggable },
        },
    },

    fullHeightItems: {
        description: "fullHeightItems",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.fullHeightItems },
        },
    },

    hideArrows: {
        description: "hideArrows",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.hideArrows },
        },
    },

    indexInDots: {
        description: "indexInDots",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.indexInDots },
        },
    },

    msPerClicks: {
        description: "msPerClicks",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: _defaultConfig.msPerClicks },
        },
    },

    msPerAutoRotate: {
        description: "msPerAutoRotate",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: _defaultConfig.msPerAutoRotate },
        },
    },

    positionArrowLeft: {
        description: "positionArrowLeft",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: _defaultConfig.positionArrowLeft },
        },
    },

    positionArrowRight: {
        description: "positionArrowRight",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: _defaultConfig.positionArrowRight },
        },
    },

    // responsive: { TODO: undefined <<<[so descomentar e olhar o console no storybook]<
    //     description: "responsive",
    //     control: "object",
    //     table: {
    //         type: { summary: "object" },
    //         defaultValue: { summary: '[{ breakpoint: 0, settings: {} }]' },
    //     },
    // },

    showItems: {
        description: "showItems",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: 1 },
        },
    },

    touchThreshold: {
        description: "touchThreshold",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: 100 },
        },
    },

    verticalAlign: {
        description: `<h1 id="test">verticalAlign</h1>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        },
    },

}