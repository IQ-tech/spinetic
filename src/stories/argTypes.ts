import { _defaultConfig } from "../spinetic/spinetic-config-validation";

export const argTypes = {
    arrows: {
        description: `<span id="arrows">Specifies whether to display arrows for navigation</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.arrows },
        },
    },

    arrowLeftPosition: {
        description: `<span id="arrowLeftPosition">Adjusts the position of the left arrow</span>`,
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: _defaultConfig.arrowLeftPosition },
        },
    },

    arrowRightPosition: {
        description: `<span id="arrowRightPosition">Adjusts the position of the right arrow</span>`,
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: _defaultConfig.arrowRightPosition },
        },
    },

    hideArrows: {
        description: `<span id="hideArrows">Controls the visibility of arrows</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.hideArrows },
        },
    },



    dots: {
        description: `<span id="dots">Determines whether to display navigation dots</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.dots },
        },
    },

    dotsModel: {
        description: `<span id="dotsModel">Defines the model for the dots</span>`,
        control: "radio",
        options: ["default", "long-rounded"],
        table: {
            type: { summary: "text" },
            defaultValue: { summary: _defaultConfig.dotsModel },
        },
    },

    indexInDots: {
        description: `<span id="indexInDots">Specifies whether to show the index in dots</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.indexInDots },
        },
    },



    autoRotate: {
        description: `<span id="autoRotate">Enables automatic rotation of items</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.autoRotate },
        },
    },

    msPerAutoRotate: {
        description: `<span id="msPerAutoRotate">Sets the time interval for auto rotation</span>`,
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: _defaultConfig.msPerAutoRotate },
        },
    },




    clickTransitionCtrl: {
        description: `<span id="clickTransitionCtrl">Enables control over transitions on clicks</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.clickTransitionCtrl },
        },
    },

    msPerClicks: {
        description: `<span id="msPerClicks">Sets the time interval for click transitions</span>`,
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: _defaultConfig.msPerClicks },
        },
    },



    draggable: {
        description: `<span id="draggable">Enables dragging functionality</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.draggable },
        },
    },

    touchThreshold: {
        description: `<span id="touchThreshold">Sets the touch threshold for dragging</span>`,
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: 100 },
        },
    },



    showItems: {
        description: `<span id="showItems">Defines the number of items to show</span>`,
        control: "number",
        table: {
            type: { summary: "number" },
            defaultValue: { summary: 1 },
        },
    },

    autoWidth: {
        description: `<span id="autoWidth">Automatically adjusts the width of the carousel, has the effect of showing half of the next card</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.autoWidth },
        },
    },

    fullHeightItems: {
        description: `<span id="fullHeightItems">Adjusts item height to full height</span>`,
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: _defaultConfig.fullHeightItems },
        },
    },


    verticalAlign: {
        description: `<span id="verticalAlign">Aligns items vertically.</span>`,
        control: "boolean",

        table: {
            type: {
                summary: "boolean",
                detail: `
            Responsive settings array controlling configuration changes based on breakpoints.
            Each array element is an object with 'breakpoint' and optional 'settings'.
            `,
            },
            defaultValue: { summary: false },

        },
    },



    // responsive: { 
    //     description: `<span id="responsive">An array of objects representing responsive settings, each containing a breakpoint and optional settings (refer to individual properties)</span>`,
    //     control: "object",
    //     table: {
    //         type: { summary: "object" },
    //         defaultValue: { summary: '[{ breakpoint: 0, settings: {} }]' },
    //     },
    // }, 

    responsive: {
        description: `<span id="responsive">
          An array of objects representing responsive settings, controlling configuration changes in the carousel based on specified breakpoints.
          Each object should include a 'breakpoint' and optional 'settings' (refer to individual properties).
        </span>
        `,
        control: {
            type: 'array',
            of: {
                type: 'object',
                controls: {
                    breakpoint: {
                        type: 'number',
                        description: 'The screen width breakpoint at which the specified settings will take effect.',
                    },
                    settings: {
                        type: 'object',
                        description: `
                Optional settings to be applied when the screen width is equal to or less than the specified breakpoint.
                These settings will override the default configuration.
                `,
                    },
                },
            },
        },
        table: {
            type: {
                summary: 'array',
                detail: `
            Responsive settings array controlling configuration changes based on breakpoints.
            Each array element is an object with 'breakpoint' and optional 'settings'.
            `,
            },
            defaultValue: {
                summary: '[{ breakpoint: 0, settings: {} }]',
            },
        },
    },


    change: {
        description: `<span id="change">Callback function triggered on a change event in the Spinetic component.</span>`,
        control: 'boolean',

        table: {
            category: 'Actions',
            type: {
                summary: "(event: SpineticChangeEvent) => void",
                detail: `
            The \`change\` function is a callback triggered whenever a change event occurs in the Spinetic 
        component. It receives an event object of type SpineticChangeEvent, providing information 
        about the previous and current states of the carousel.
      
              - Callback Signature**:
                (event: SpineticChangeEvent) => void
      
              - Event Object: SpineticChangeEvent:
                - \`previous\` Object:
                  - \`index\`: The index of the previously active item.
                  - \`remainingIndexes\`: The number of remaining items in the carousel.
                  - \`totalItems\`: The total number of items in the carousel.
      
                - \`current\` Object:
                  - \`index\`: The index of the currently active item.
                  - \`remainingIndexes\`: The number of remaining items in the carousel.
                  - \`totalItems\`: The total number of items in the carousel.
      
            `,
            },

            defaultValue: {
                summary: `See default`,
                detail: ` { 
previous: {
    index: 0,
    remainingIndexes: [],
    totalItems: 0
  },
current: {
    index: 0,
    remainingIndexes: [],
    totalItems: 0
  }
}
                `,
            },
        },
    },


}