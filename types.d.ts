import { ReactNode } from "react";

//#region config
export interface TypesDefaultArrowsStyle {
  container: object,
  btnPrev: object,
  btnNext: object,
}

export interface TypesDefaultDotsStyle {
  container: object,
  dot: object,
  dotActive: object
}

type TypesLayout = "default" | "ctrls-in-line" | "ctrls-in-line-2" | "vertical-align";
type TypesProgressIndicator = "dots" | "scrollbar"
export interface TypesConfigOptional {
  arrows?: boolean;
  arrowsStyle?: TypesDefaultArrowsStyle;
  hideArrows?: boolean;

  progressIndicator?: TypesProgressIndicator;
  dots?: boolean;
  dotsStyle?: TypesDefaultDotsStyle,
  itemNumberInDot?: boolean;
  maxDots?: boolean;

  autoRotate?: boolean;
  msPerAutoRotate?: number;

  clickTransitionCtrl?: boolean;
  msPerClicks?: number;

  draggable?: boolean;
  touchThreshold?: number;

  layout?: TypesLayout,
  showItems?: number;
  fullHeightItems?: boolean;
  
  autoWidth?: boolean;
  centerSingleItemAW?:  boolean;

  groupScroll?: boolean;
  groupItemsScroll?: number;

  responsive?: TypesReponsiveSettings[];
}

export type TypesConfig = Required<TypesConfigOptional>;

export interface TypesReponsiveSettings {
  breakpoint: number;
  settings: TypesConfigOptional;
}

// export interface TypesReponsiveSettings {
//   breakpoint: number;
//   settings?: Omit<TypesConfigOptional, 'responsive'>;
// }
//#endregion config

//#region Drag
export interface TypesEventDragStart {
  stopPropagation: () => void;
  target: HTMLElement;
  pageX: number;
  pageY: number;
  touches: {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
  }[];
}

export interface TypesEventDragMove {
  stopPropagation: () => void;
  pageX: number;
  pageY: number;
  touches: {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
  }[];
}

export interface TypesEventDragEnd {
  stopPropagation: () => void
}

export interface TypesUseDragSpinetic {
  _sb: boolean | undefined;
  config: TypesConfigOptional,
  currentConfig: TypesConfig,
  remainingIndexes: number[],
  spineticContainer: React.RefObject<HTMLDivElement>,
  _carouselItemsWidths: number[],
  currentIndex: number;
  _setCarouselContainerTransform: (key: number) => void;
  previousItem: () => void;
  nextItem: () => void;
  _handleItemChange: () => void;
}
//#endregion Drag

//#region Components
type TypeChildren = ReactNode | ReactNode[] | object | null | undefined | any;
export interface TypesSpinetic {
  children: TypeChildren;
  config?: TypesConfigOptional;
  change?: (e: SpineticChangeEvent) => void;
}

export interface TypesReturnSpinetic {
  currentConfig: TypesConfig;
  prevChildren: TypeChildren;
  currentIndex: number;
  spineticMain: React.RefObject<HTMLDivElement>;
  spineticContainer: React.RefObject<HTMLDivElement>;
  maxCarouselItems: number;
  remainingIndexes: number[];
  progressIndicatorType: TypesProgressIndicator;
  goToItem: (p0: number) => void;
  previousItem: () => void;
  nextItem: () => void;

  start: (p0: TypesEventDragStart | any) => void;
  move: (p0: TypesEventDragMove | any) => void;
  end: (ep0: TypesEventDragEnd) => void
}

export interface TypesUseSpinetic {
  children: TypeChildren
  config?: TypesConfigOptional;
  change?: (e: SpineticChangeEvent) => void;
}

export interface TypesArrows {
  children?: TypeChildren;
  currentConfig: TypesConfig;
  currentIndex: number;
  remainingIndexes: number[];
  onClickPreviousItem: () => void;
  onClickNextItem: () => void;
}
export interface TypesDots {
  currentConfig: TypesConfig;
  currentIndex: number;
  maxCarouselItems: number;
  remainingIndexes: number[];
  goToItem: (p0: number) => void;
}

export type TypesDotsConfig = {
  dotWidth: number | undefined;
  dotActiveWidth: number | undefined;
  mainDotsWidth: number | undefined;
};

export interface TypesUseDots {
  currentConfig: TypesConfig;
  remainingIndexes: number[];
  currentIndex: number
}
export interface TypesSpineticChangeEvent {
  previous: {
    index: number;
    remainingIndexes: number[];
    totalItems: number;
    itemsPerScroll: nuember;
  };
  current: {
    index: number;
    remainingIndexes: number[];
    totalItems: number;
    itemsPerScroll: number
  };
};

//#endregion Components
