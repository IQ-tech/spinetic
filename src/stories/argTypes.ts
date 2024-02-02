export const argTypes = {
    arrows: {
        description: "arrowssssss",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: true },
        },
    },

    autoWidth: {
        description: "autoWidth",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        },
    },

    autoRotate: {
        description: "autoRotate",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        },
    },

    clickTransitionCtrl: {
        description: "clickTransitionCtrl",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        },
    },

    dots: {
        description: "dots",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: true },
        },
    },

    dotsModel: {
        description: "dotsModel",
        control: "radio",
        options: ["default", "long-rounded"],
        table: {
            type: { summary: "text" },
            defaultValue: { summary: "default" },
        },
    },

    draggable: {
        description: "draggable",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: true },
        },
    },

    fullHeightItems: {
        description: "fullHeightItems",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: true },
        },
    },

    hideArrows: {
        description: "hideArrows",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        },
    },

    indexInDots: {
        description: "indexInDots",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        },
    },

    msPerClicks: {
        description: "msPerClicks",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: 500 },
        },
    },

    msPerAutoRotate: {
        description: "msPerAutoRotate",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: 3000 },
        },
    },

    positionArrowLeft: {
        description: "positionArrowLeft",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: 0 },
        },
    },

    positionArrowRight: {
        description: "positionArrowRight",
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: 0 },
        },
    },

    // responsive: { TODO: undefined
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
        description: "verticalAlign",
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        },
    },
}