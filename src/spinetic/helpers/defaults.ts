import * as T from "types";

const defaultArrowsStyle: T.TypesDefaultArrowsStyle = {
    container: {},
    btnPrev: {},
    btnNext: {},
};

const defaultDotsStyle: T.TypesDefaultDotsStyle = {
    container: {},
    dot: {},
    dotActive: {}
}

export const _defaultConfig: T.TypesConfig = {
    arrows: true,
    arrowsStyle: defaultArrowsStyle,
    hideArrows: false,

    progressIndicator: "dots",
    dots: true,
    dotsStyle: defaultDotsStyle,
    itemNumberInDot: false,
    maxDots: false,

    autoRotate: false,
    msPerAutoRotate: 3000,

    draggable: true,
    touchThreshold: 30,

    layout: "default",
    showItems: 1,
    fullHeightItems: false,

    autoWidth: false,
    centerSingleItemAW: false,

    groupScroll: false,
    groupItemsScroll: 1,

    clickTransitionCtrl: false,
    msPerClicks: 1500,

    resetScrollOnUpdateChildrens: true,

    responsive: [{ breakpoint: 0, settings: {} }],
};


export const elementsChangeDefault: T.TypesSpineticChangeEvent = {
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