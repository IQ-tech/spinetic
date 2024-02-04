const a={arrows:!0,arrowLeftPosition:0,arrowRightPosition:0,hideArrows:!1,dots:!0,dotsModel:"default",indexInDots:!1,autoRotate:!1,msPerAutoRotate:3e3,draggable:!0,touchThreshold:100,showItems:1,autoWidth:!1,fullHeightItems:!0,verticalAlign:!1,clickTransitionCtrl:!1,msPerClicks:1500,responsive:[{breakpoint:0,settings:{}}]},n=o=>(console.log("🚀 ~ responsive:",o==null?void 0:o.length),!o||!(o!=null&&o.length)?a.responsive:(o==null?void 0:o.sort((e,s)=>s.breakpoint-e.breakpoint))??a.responsive),i=o=>{const t=window.innerWidth,e=o>t/2;return o===void 0||e?a.touchThreshold:o},r=o=>o<1?a.showItems:o,l=o=>{const t=o,e=a;return{arrows:(t==null?void 0:t.arrows)??e.arrows,arrowLeftPosition:(t==null?void 0:t.arrowLeftPosition)??e.arrowLeftPosition,arrowRightPosition:(t==null?void 0:t.arrowRightPosition)??e.arrowRightPosition,hideArrows:(t==null?void 0:t.hideArrows)??e.hideArrows,dots:(t==null?void 0:t.dots)??e.dots,dotsModel:(t==null?void 0:t.dotsModel)??e.dotsModel,indexInDots:(t==null?void 0:t.indexInDots)??e.indexInDots,autoRotate:(t==null?void 0:t.autoRotate)??e.autoRotate,msPerAutoRotate:(t==null?void 0:t.msPerAutoRotate)??e.msPerAutoRotate,draggable:(t==null?void 0:t.draggable)??e.draggable,touchThreshold:i((t==null?void 0:t.touchThreshold)??e.touchThreshold),showItems:r((t==null?void 0:t.showItems)??e.showItems),fullHeightItems:(t==null?void 0:t.fullHeightItems)??e.fullHeightItems,autoWidth:(t==null?void 0:t.autoWidth)??e.autoWidth,verticalAlign:(t==null?void 0:t.verticalAlign)??e.verticalAlign,clickTransitionCtrl:(t==null?void 0:t.clickTransitionCtrl)??e.clickTransitionCtrl,msPerClicks:(t==null?void 0:t.msPerClicks)??e.msPerClicks,responsive:n(t==null?void 0:t.responsive)}},d={arrows:{description:'<span id="arrows">Specifies whether to display arrows for navigation</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.arrows}}},arrowLeftPosition:{description:'<span id="arrowLeftPosition">Adjusts the position of the left arrow</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:a.arrowLeftPosition}}},arrowRightPosition:{description:'<span id="arrowRightPosition">Adjusts the position of the right arrow</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:a.arrowRightPosition}}},hideArrows:{description:'<span id="hideArrows">Controls the visibility of arrows</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.hideArrows}}},dots:{description:'<span id="dots">Determines whether to display navigation dots</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.dots}}},dotsModel:{description:'<span id="dotsModel">Defines the model for the dots</span>',control:"radio",options:["default","long-rounded"],table:{type:{summary:"text"},defaultValue:{summary:a.dotsModel}}},indexInDots:{description:'<span id="indexInDots">Specifies whether to show the index in dots</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.indexInDots}}},autoRotate:{description:'<span id="autoRotate">Enables automatic rotation of items</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.autoRotate}}},msPerAutoRotate:{description:'<span id="msPerAutoRotate">Sets the time interval for auto rotation</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:a.msPerAutoRotate}}},clickTransitionCtrl:{description:'<span id="clickTransitionCtrl">Enables control over transitions on clicks</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.clickTransitionCtrl}}},msPerClicks:{description:'<span id="msPerClicks">Sets the time interval for click transitions</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:a.msPerClicks}}},draggable:{description:'<span id="draggable">Enables dragging functionality</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.draggable}}},touchThreshold:{description:'<span id="touchThreshold">Sets the touch threshold for dragging</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:100}}},showItems:{description:'<span id="showItems">Defines the number of items to show</span>',control:"number",table:{type:{summary:"number"},defaultValue:{summary:1}}},autoWidth:{description:'<span id="autoWidth">Automatically adjusts the width of the carousel, has the effect of showing half of the next card</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.autoWidth}}},fullHeightItems:{description:'<span id="fullHeightItems">Adjusts item height to full height</span>',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:a.fullHeightItems}}},verticalAlign:{description:'<span id="verticalAlign">Aligns items vertically.</span>',control:"boolean",table:{type:{summary:"boolean",detail:`
            Responsive settings array controlling configuration changes based on breakpoints.
            Each array element is an object with 'breakpoint' and optional 'settings'.
            `},defaultValue:{summary:!1}}},responsive:{description:`<span id="responsive">
          An array of objects representing responsive settings, controlling configuration changes in the carousel based on specified breakpoints.
          Each object should include a 'breakpoint' and optional 'settings' (refer to individual properties).
        </span>
        `,control:{type:"array",of:{type:"object",controls:{breakpoint:{type:"number",description:"The screen width breakpoint at which the specified settings will take effect."},settings:{type:"object",description:`
                Optional settings to be applied when the screen width is equal to or less than the specified breakpoint.
                These settings will override the default configuration.
                `}}}},table:{type:{summary:"array",detail:`
            Responsive settings array controlling configuration changes based on breakpoints.
            Each array element is an object with 'breakpoint' and optional 'settings'.
            `},defaultValue:{summary:"[{ breakpoint: 0, settings: {} }]"}}},change:{description:'<span id="change">Callback function triggered on a change event in the Spinetic component.</span>',control:"text",table:{category:"Actions",type:{summary:"(event: SpineticChangeEvent) => {}",detail:`
         texto dksksaskak kask aska ksaks aks kas kaks
         
         default value return:
         { 
            previous: {
              index: currentIndex,
              remainingIndexes: remainingIndexes,
              totalItems: Children.count(children)
            },
            current: {
              index: currentIndex,
              remainingIndexes: remainingIndexes,
              totalItems: Children.count(children)
            }
          }.
            `},defaultValue:{summary:"See details"}}}};export{a as _,d as a,l as v};
