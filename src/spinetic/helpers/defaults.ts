import * as T from "types";

const defaultArrowsStyle: T.defaultArrowsStyle = {
    container: {},
    btnPrev: {},
    btnNext: {},
};

export const _defaultConfig: T.TypesConfig = {
    arrows: true,
    arrowsStyle: defaultArrowsStyle,
    hideArrows: false,

    dots: true,
    dotsStyle: {},
    dotsStyleActive: {},
    indexInDots: false,

    autoRotate: false,
    msPerAutoRotate: 3000,

    draggable: true,
    touchThreshold: 30,

    layout: "default",
    showItems: 1,
    autoWidth: false,
    fullHeightItems: false,

    groupScroll: false,
    groupItemsScroll: 1,

    clickTransitionCtrl: false,
    msPerClicks: 1500,

    responsive: [{ breakpoint: 0, settings: {} }],
};


export const elementsChangeDefault: T.SpineticChangeEvent = {
    previous: {
        index: 0,
        remainingIndexes: [0],
        totalItems: 0,
        itemsPerScroll: 0
    },
    current: {
        index: 0,
        remainingIndexes: [0],
        totalItems: 0,
        itemsPerScroll: 0
    }
}