const n={arrows:!0,arrowLeftPosition:0,arrowRightPosition:0,hideArrows:!1,dots:!0,dotsModel:"default",indexInDots:!1,autoRotate:!1,msPerAutoRotate:3e3,draggable:!0,touchThreshold:100,showItems:1,autoWidth:!1,fullHeightItems:!0,verticalAlign:!1,clickTransitionCtrl:!1,msPerClicks:1500,responsive:[{breakpoint:0,settings:{}}]},a=o=>!o||!(o!=null&&o.length)?n.responsive:(o==null?void 0:o.sort((t,i)=>i.breakpoint-t.breakpoint))??n.responsive,s=o=>{const e=window.innerWidth,t=o>e/2;return o===void 0||t?n.touchThreshold:o},r=o=>!o||o<1?n.showItems:o,l=o=>typeof o!="boolean"?n.autoWidth:o,d=o=>{const e=o,t=n,i={arrows:(e==null?void 0:e.arrows)??t.arrows,arrowLeftPosition:(e==null?void 0:e.arrowLeftPosition)??t.arrowLeftPosition,arrowRightPosition:(e==null?void 0:e.arrowRightPosition)??t.arrowRightPosition,hideArrows:(e==null?void 0:e.hideArrows)??t.hideArrows,dots:(e==null?void 0:e.dots)??t.dots,dotsModel:(e==null?void 0:e.dotsModel)??t.dotsModel,indexInDots:(e==null?void 0:e.indexInDots)??t.indexInDots,autoRotate:(e==null?void 0:e.autoRotate)??t.autoRotate,msPerAutoRotate:(e==null?void 0:e.msPerAutoRotate)??t.msPerAutoRotate,draggable:(e==null?void 0:e.draggable)??t.draggable,touchThreshold:s((e==null?void 0:e.touchThreshold)??t.touchThreshold),showItems:r((e==null?void 0:e.showItems)??t.showItems),fullHeightItems:(e==null?void 0:e.fullHeightItems)??t.fullHeightItems,autoWidth:l(e==null?void 0:e.autoWidth),verticalAlign:(e==null?void 0:e.verticalAlign)??t.verticalAlign,clickTransitionCtrl:(e==null?void 0:e.clickTransitionCtrl)??t.clickTransitionCtrl,msPerClicks:(e==null?void 0:e.msPerClicks)??t.msPerClicks,responsive:a(e==null?void 0:e.responsive)};return i.verticalAlign?{...i,arrows:!1,dots:!1,draggable:!1,fullHeightItems:!1}:i},u={children:{description:'<span id="children">Children elements to be rendered inside the Spinetic component.</span>',control:"number",table:{type:{summary:"ReactNode | ReactNode[]",detail:`
                
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


.
`}}},config:{description:`The config prop accepts an object with optional settings to customize the Spinetic component. 
        Here are the available types:`,control:" ",table:{type:{summary:"TypesConfigOptional",detail:`
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

.
`}}},arrows:{description:'<span id="arrows">Specifies whether to display arrows for navigation</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.arrows}}},arrowLeftPosition:{description:'<span id="arrowLeftPosition">Adjusts the position of the left arrow</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:n.arrowLeftPosition}}},arrowRightPosition:{description:'<span id="arrowRightPosition">Adjusts the position of the right arrow</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:n.arrowRightPosition}}},hideArrows:{description:'<span id="hideArrows">Controls the visibility of arrows</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.hideArrows}}},dots:{description:'<span id="dots">Determines whether to display navigation dots</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.dots}}},dotsModel:{description:'<span id="dotsModel">Defines the model for the dots</span>',control:"radio",options:["default","long-rounded"],table:{type:{summary:"string"},defaultValue:{summary:n.dotsModel}}},indexInDots:{description:'<span id="indexInDots">Specifies whether to show the index in dots</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.indexInDots}}},autoRotate:{description:'<span id="autoRotate">Enables automatic rotation of items</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.autoRotate}}},msPerAutoRotate:{description:'<span id="msPerAutoRotate">Sets the time interval for auto rotation</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:n.msPerAutoRotate}}},clickTransitionCtrl:{description:'<span id="clickTransitionCtrl">Enables control over transitions on clicks</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.clickTransitionCtrl}}},msPerClicks:{description:'<span id="msPerClicks">Sets the time interval for click transitions</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:n.msPerClicks}}},draggable:{description:'<span id="draggable">Enables dragging functionality</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.draggable}}},touchThreshold:{description:'<span id="touchThreshold">Sets the touch threshold for dragging</span>',control:{type:"range",min:1,max:400},table:{type:{summary:"number"},defaultValue:{summary:50}}},showItems:{description:'<span id="showItems">Defines the number of items to show</span>',control:{type:"number",min:1,max:15},table:{type:{summary:"number"},defaultValue:{summary:1}}},autoWidth:{description:'<span id="autoWidth">Automatically adjusts the width of the carousel, has the effect of showing half of the next card</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.autoWidth}}},fullHeightItems:{description:'<span id="fullHeightItems">Adjusts item height to full height</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:n.fullHeightItems}}},verticalAlign:{description:'<span id="verticalAlign">Aligns items vertically.</span>',control:"boolean",table:{type:{summary:"boolean",detail:`
The "verticalAlign" property ensures vertical alignment for all carousel items. 
When set to true, the following properties are automatically configured:

{    
    arrows: false,
    dots: false,
    draggable: false,
    fullHeightItems: false,
}

.
            `},defaultValue:{summary:!1}}},responsive:{description:`<span id="responsive">
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


.
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
                `}}}},c=o=>{const e=o.current,t=o.previous;alert(` change
      { 
        current: {
          index: ${JSON.stringify(e.index)},
          remainingIndexes: ${JSON.stringify(t.remainingIndexes)}
          totalItems: ${JSON.stringify(t.totalItems)}
        },
        previous: {
            index: ${JSON.stringify(t.index)},
            remainingIndexes: ${JSON.stringify(t.remainingIndexes)}
            totalItems: ${JSON.stringify(t.totalItems)}
        }
    }
  `)};export{n as _,u as a,c as h,d as v};
