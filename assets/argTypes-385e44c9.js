const e={container:{},btnPrev:{},btnNext:{}},t={container:{},dot:{},dotActive:{}},_={arrows:!0,arrowsStyle:e,hideArrows:!1,dots:!0,dotsStyle:t,itemNumberInDot:!1,autoRotate:!1,msPerAutoRotate:3e3,draggable:!0,touchThreshold:30,layout:"default",showItems:1,autoWidth:!1,fullHeightItems:!1,groupScroll:!1,groupItemsScroll:1,clickTransitionCtrl:!1,msPerClicks:1500,responsive:[{breakpoint:0,settings:{}}]},i={previous:{index:0,remainingIndexes:[0],totalItems:0,itemsPerScroll:0},current:{index:0,remainingIndexes:[0],totalItems:0,itemsPerScroll:0}},o={children:{description:'<span id="children">Children elements to be rendered inside the Spinetic component.</span>',control:"number",table:{type:{summary:"ReactNode | ReactNode[]",detail:`
                
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
`}}},config:{description:`The config prop accepts an object with optional settings to customize the Spinetic component. 
        Here are the available types:`,control:" ",table:{type:{summary:"TypesConfigOptional",detail:`
types:

export interface TypesConfigOptional {
    arrows?: boolean;
    arrowsStyle?: TypesDefaultArrowsStyle;
    hideArrows?: boolean;
  
    dots?: boolean;
    dotsStyle?: TypesDefaultDotsStyle,
    itemNumberInDot?: boolean;
  
    autoRotate?: boolean;
    msPerAutoRotate?: number;
  
    clickTransitionCtrl?: boolean;
    msPerClicks?: number;
  
    draggable?: boolean;
    touchThreshold?: number;
  
    layout?: TypesLayout,
    showItems?: number;
    autoWidth?: boolean;
    fullHeightItems?: boolean;
  
    groupScroll?: boolean;
    groupItemsScroll?: number;
  
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
`}}},arrows:{description:'<span id="arrows">Specifies whether to display arrows for navigation</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:_.arrows}}},arrowsStyle:{description:'<span id="arrowsStyle">Defines the styles for the arrows</span>',control:{},table:{type:{summary:"object",detail:`
Object that receives styles to be applied to the arrows
Example:
{
    container: {
      background: "red",
    },
    btnPrev: {
      background: "yellow",
    },
    btnNext: {
      background: "blue",
    },
}



_________________________________________________________________________________________________`},defaultValue:{summary:"See default",detail:`
{
    container: {},
    btnPrev: {},
    btnNext: {},
}`}}},hideArrows:{description:'<span id="hideArrows">Controls the visibility of arrows</span>',control:"boolean",table:{type:{summary:"boolean",detail:`
The hideArrows property determines whether the navigation arrows are visible or hidden. 
When set to true, the arrows disappear when there is no possibility of navigation, providing
a clean and intuitive user interface. This feature enhances the user experience by
dynamically adjusting the arrow visibility based on the availability of navigation options.


_________________________________________________________________________________________________
`},defaultValue:{summary:_.hideArrows}}},dots:{description:'<span id="dots">Determines whether to display navigation dots</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:_.dots}}},dotsStyle:{description:'<span id="dotsStyle">Defines the styles for the dots</span>',control:{},table:{type:{summary:"object",detail:`
Object that receives styles to be applied to the dots

Example:
{
    container: { 
        background: 'purple',
        gap: 2
    },
    dot: {
        height: 40,
        width: 20,
        background: 'black'
    },
    dotActive: {
        width: 60
    }
}



_________________________________________________________________________________________________`},defaultValue:{summary:"See default",detail:`
{
    container: {},
    dot: {},
    dotActive: {},
}`}}},itemNumberInDot:{description:'<span id="itemNumberInDot">Specifies whether the item number should be displayed in the dot</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:_.itemNumberInDot}}},autoRotate:{description:'<span id="autoRotate">Enables automatic rotation of items</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:_.autoRotate}}},msPerAutoRotate:{description:'<span id="msPerAutoRotate">Sets the time interval for auto rotation</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:_.msPerAutoRotate}}},draggable:{description:'<span id="draggable">Enables dragging functionality</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:_.draggable}}},touchThreshold:{description:'<span id="touchThreshold">Sets the touch threshold for dragging</span>',control:{type:"range",min:1,max:400},table:{type:{summary:"number",detail:`
The touchThreshold property establishes the area that is recognized as a change of item when navigating 
through dragging. Specifically, it defines the threshold for the drag gesture, ensuring that only 
movements beyond this designated threshold are interpreted as intended item changes. Fine-tuning this 
threshold allows for a responsive and controlled dragging experience, preventing accidental item switches 
during minor touch movements.


_________________________________________________________________________________________________
                `},defaultValue:{summary:_.touchThreshold}}},layout:{description:'<span id="layout">The layout property is responsible for specifying which layout should be rendered.</span>',control:"radio",options:["default","ctrls-in-line","ctrls-in-line-2","vertical-align"],table:{type:{summary:"string"},defaultValue:{summary:_.layout}}},showItems:{description:'<span id="showItems">Defines the number of items to show</span>',control:{type:"number"},table:{type:{summary:"number",detail:`
The "showItems" property determines the number of items to be displayed simultaneously in the carousel. 
However, it is important to note that this property is not valid when the "autoWidth" option is enabled.
When the "autoWidth" property is enabled, the count of items displayed is automatically adjusted based 
on the size of the carousel, bypassing the manual setting of "showItems".
                

_________________________________________________________________________________________________
                `},defaultValue:{summary:1}}},autoWidth:{description:'<span id="autoWidth">Automatically adjusts the width of the carousel, has the effect of showing half of the next card</span>',control:"boolean",table:{type:{summary:"boolean",detail:`
autoWidth is a boolean property that, when set to true, dynamically adjusts the width of the 
carousel, eliminating the ability to manually specify the number of visible items. In this 
mode, the carousel automatically calculates and allocates the available width to showcase 
consecutive items side by side. If the total width is not entirely filled by the cards, the 
subsequent card will be displayed with half of its content, creating a visually seamless 
transition between items. This feature provides a fluid and responsive carousel experience,
 optimizing the use of available space for a more dynamic presentation of content.
 
 
 _________________________________________________________________________________________________
 `},defaultValue:{summary:_.autoWidth}}},fullHeightItems:{description:'<span id="fullHeightItems">Adjusts item height to full height</span>',control:"boolean",table:{type:{summary:"boolean",detail:`
When fullHeightItems is set to true, SpineticItem adapts its height to occupy 100% of the 
carousel's height. This allows users to utilize the CSS property height: 100%, providing 
flexibility for a variety of layout designs. It's essential to note that enabling this
property only adjusts the SpineticItem's height, and users must ensure that their 
component structure supports this behavior to achieve the desired full-height carousel items.


_________________________________________________________________________________________________
                `},defaultValue:{summary:_.fullHeightItems}}},groupScroll:{description:'<span id="groupScroll">Simplifies carousel navigation by allowing precise definition of the number of items moved at a time.</span>',control:"boolean",table:{type:{summary:"boolean",detail:`
The groupScroll feature considerably increases the flexibility of navigation in the carousel, allowing 
precise control over the number of items moved during scrolling.

When set to true and no item number is specified for scrolling in "groupItemsScroll", the scroll value 
becomes the number of items currently visible in the carousel.
                
For example, if there are 3 items visible in the carousel and no specific item number is provided, the 
carousel will scroll consistently every 3 items. In addition, the pagination points will be organized 
based on the total number of items divided by 3, ensuring a simple and easy-to-use scrolling experience.


_________________________________________________________________________________________________
            `},defaultValue:{summary:_.groupScroll}}},groupItemsScroll:{description:'<span id="groupItemsScroll">The quantity of items scrolled simultaneously when the groupScroll feature is enabled.</span>',control:{type:"number"},table:{type:{summary:"number",detail:`
The "groupItemsScroll" property specifies the number of items that will be scrolled when the "groupScroll"
feature is enabled. If a scroll number greater than the count of visible items is provided, the count of
visible items is automatically assigned as the scroll value.
  
  
  _________________________________________________________________________________________________
  `},defaultValue:{summary:_.groupItemsScroll}}},clickTransitionCtrl:{description:'<span id="clickTransitionCtrl">Enables control over transitions on clicks</span>',control:"boolean",table:{type:{summary:"boolean",detail:`
When set to true, this property allows users to switch between items only after a specific duration
defined by the msPerClicks property. The msPerClicks property determines the time interval a user
must wait before being allowed to transition to the next item. On the other hand, if set to false 
(default), the transition between items is immediate upon clicking, without any enforced delay.

_________________________________________________________________________________________________
`},defaultValue:{summary:_.clickTransitionCtrl}}},msPerClicks:{description:'<span id="msPerClicks">Sets the time interval for click transitions</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:_.msPerClicks}}},responsive:{description:`<span id="responsive">
          An array of objects representing responsive settings, controlling configuration changes in the carousel based on specified breakpoints.
          Each object should include a 'breakpoint' and optional 'settings' (refer to individual properties).
        </span>
        `,control:{},table:{type:{summary:"TypesReponsiveSettings[]",detail:`
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
            `},defaultValue:{summary:"See default",detail:`
[
    {  
        breakpoint: 0, 
        settings: {}
    }
]`}}},change:{description:'<span id="change">Callback function triggered on a change event in the Spinetic component.</span>',control:"boolean",table:{category:"Actions",type:{summary:"(event: SpineticChangeEvent) => void",detail:`
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
           `},defaultValue:{summary:"See default",detail:` 
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
                `}}}};export{_,o as a,i as e};
