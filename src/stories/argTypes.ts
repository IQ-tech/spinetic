import { SpineticChangeEvent } from "types";
import { _defaultConfig } from "../Spinetic/SpineticConfigValidation";


export const argTypes = {
    children: {
        description: `<span id="children">Children elements to be rendered inside the Spinetic component.</span>`,
        control: "number",
        table: {
            type: {
                summary: "ReactNode | ReactNode[]",
                detail: `
                
The "children" property represents the child items of the Spinetic component to be rendered.
 For example:

<Spinetic>
    <SpineticItem>
    <div style={{ height: 200, width: 250, background: "blue", margin: 10 }}>
        Content 1
    </div>
    </SpineticItem>
    <SpineticItem>
    <div style={{ height: 200, width: 250, background: "blue", margin: 10 }}>
        Content 2
    </div>
    </SpineticItem>
</Spinetic>
                
This is an example of how you can render two children within the Spinetic component.
Another example is as follows:

const exampleItems = [
    "content-1",
    "content-2",
    "content-3"
];
    
<Spinetic >
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
                
Always remember to wrap your component with a SpineticItem.


_________________________________________________________________________________________________
`
            },
        },
    },


    config: {
        description: `The config prop accepts an object with optional settings to customize the Spinetic component. 
        Here are the available types:`,
        control: " ",
        table: {
            type: {
                summary: "TypesConfigOptional",
                detail: `
types:

interface TypesConfigOptional {
    arrows?: boolean;
    arrowLeftPosition?: number;
    arrowRightPosition?: number;
    hideArrows?: boolean;
  
    dots?: boolean;
    dotsModel?: TypesDotsModel;
    indexInDots?: boolean;
  
    autoRotate?: boolean;
    msPerAutoRotate?: number;
  
    clickTransitionCtrl?: boolean;
    msPerClicks?: number;
  
    draggable?: boolean;
    touchThreshold?: number;
  
    showItems?: number;
    autoWidth?: boolean;
    fullHeightItems?: boolean;
    verticalAlign?: boolean;
  
    responsive?: TypesReponsiveSettings[];
  }
  
interface TypesReponsiveSettings {
breakpoint: number;
settings: TypesConfigOptional;
}


  Example to config:
{
autoWidth: true,
responsive: [
    {
    breakpoint: 768,
    settings: {
        arrows: false,
        dots: false,
        autoWidth: false,
        fullHeightItems: false,
        },
    },
  ]
}

The provided example showcases how to use the config prop to enable auto-width and define 
responsive settings for different breakpoints, including adjusting arrow and 
dot visibility, auto-width behavior, and full-height item display.

_________________________________________________________________________________________________
`
            },

        }
    },



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
            type: {
                summary: "boolean",
                detail: `
The hideArrows property determines whether the navigation arrows are visible or hidden. 
When set to true, the arrows disappear when there is no possibility of navigation, providing
a clean and intuitive user interface. This feature enhances the user experience by
dynamically adjusting the arrow visibility based on the availability of navigation options.


_________________________________________________________________________________________________
`
            },
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
            type: { summary: "string" },
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
            type: {
                summary: "boolean",
                detail: `
When set to true, this property allows users to switch between items only after a specific duration
defined by the msPerClicks property. The msPerClicks property determines the time interval a user
must wait before being allowed to transition to the next item. On the other hand, if set to false 
(default), the transition between items is immediate upon clicking, without any enforced delay.

_________________________________________________________________________________________________
`
            },
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
        control: {
            type: 'range',
            min: 1,
            max: 400,
        },
        table: {
            type: {
                summary: "number",
                detail: `
The touchThreshold property establishes the area that is recognized as a change of item when navigating 
through dragging. Specifically, it defines the threshold for the drag gesture, ensuring that only 
movements beyond this designated threshold are interpreted as intended item changes. Fine-tuning this 
threshold allows for a responsive and controlled dragging experience, preventing accidental item switches 
during minor touch movements.


_________________________________________________________________________________________________
                `
            },
            defaultValue: { summary: 50 },
        },
    },



    showItems: {
        description: `<span id="showItems">Defines the number of items to show</span>`,
        control: {type: 'number' },
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
            type: {
                summary: "boolean",
                detail: `
When fullHeightItems is set to true, SpineticItem adapts its height to occupy 100% of the 
carousel's height. This allows users to utilize the CSS property height: 100%, providing 
flexibility for a variety of layout designs. It's essential to note that enabling this
property only adjusts the SpineticItem's height, and users must ensure that their 
component structure supports this behavior to achieve the desired full-height carousel items.


_________________________________________________________________________________________________
                `
            },
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
The "verticalAlign" property ensures vertical alignment for all carousel items. 
When set to true, the following properties are automatically configured:

{    
    arrows: false,
    dots: false,
    draggable: false,
    fullHeightItems: false,
}

_________________________________________________________________________________________________
            `,
            },
            defaultValue: { summary: false },

        },
    },


    
    responsive: {
        description: `<span id="responsive">
          An array of objects representing responsive settings, controlling configuration changes in the carousel based on specified breakpoints.
          Each object should include a 'breakpoint' and optional 'settings' (refer to individual properties).
        </span>
        `,
        control: {
            // type: 'array',
        },
        table: {
            type: {
                summary: 'TypesReponsiveSettings[]',
                detail: `
Types:
        
    TypesReponsiveSettings {
        breakpoint: number;
        settings: TypesConfigOptional;
    }
      
Reactive definitions array that manages configuration changes based on breakpoints.
Each array element is an object with optional "breakpoint" and "settings."

Example:

[
    {  
        breakpoint: 800, 
        settings: {
            arrows: false,
            autoRotate: true,
            dots: false
        }
    },
    {  
        breakpoint: 400, 
        settings: {
            verticalAlign: true
        }
    }
]

Breakpoint validation is performed from largest to smallest screen size. For 
instance, the carousel applies the configuration based on the screen size,
checking if it is  greater than 800 to apply the default configuration. Using 
the example, if the screen size is less than 800 and greater than 400, the 
following configuration will be applied:

{
    arrows: false,
    autoRotate: true,
    dots: false
}

If the screen size is less than 400, the configuration applied is:

{
    verticalAlign: true
}            


_________________________________________________________________________________________________
            `,
            },
            defaultValue: {
                summary: 'See default',
                detail: `
[
    {  
        breakpoint: 0, 
        settings: {}
    }
]`
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
      
              - Callback Signature
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

       ------------------------------------------------------------------------------------------

[WARNING] The property has been set as boolean solely for testing purposes in the playground.
 When setting the change property to true, the following function will be assigned to the change event:

    const handleChange = (event: SpineticChangeEvent) => {
        const previousState = event.previous;
        const currentState = event.current;
      
        alert('
            Previous State: JSON.stringify(previousState)
            Current State: JSON.stringify(currentState)}
        ');
      };

_________________________________________________________________________________________________
           `,
            },

            defaultValue: {
                summary: `See default`,
                detail: ` 
{ 
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

_________________________________________________________________________________________________
                `,
            },
        },
    },

}



export const handleChange = (event: SpineticChangeEvent) => {
    const currentState = event.current;
    const previousState = event.previous;

    alert(
        ` change
      { 
        current: {
          index: ${JSON.stringify(currentState.index)},
          remainingIndexes: ${JSON.stringify(previousState.remainingIndexes)}
          totalItems: ${JSON.stringify(previousState.totalItems)}
        },
        previous: {
            index: ${JSON.stringify(previousState.index)},
            remainingIndexes: ${JSON.stringify(previousState.remainingIndexes)}
            totalItems: ${JSON.stringify(previousState.totalItems)}
        }
    }
  `
    );
};
