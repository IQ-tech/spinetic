import { ReactNode } from "react";

//#region config
type TypesLayout = 'default' | 'controlsInLine' | 'verticalAlign' ;
export interface TypesConfigOptional {
  arrows?: boolean;
  arrowLeftPosition?: number;
  arrowRightPosition?: number;
  hideArrows?: boolean;

  dots?: boolean;
  dotsStyle?: object,
  dotsStyleActive?: object,
  indexInDots?: boolean;

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
  currentIndex: number;
  spineticMain: React.RefObject<HTMLDivElement>;
  spineticContainer: React.RefObject<HTMLDivElement>;
  maxCarouselItems: number;
  remainingIndexes: number[];
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
export interface SpineticChangeEvent {
  previous: {
    index: number;
    remainingIndexes: number[];
    totalItems: number;
  };
  current: {
    index: number;
    remainingIndexes: number[];
    totalItems: number;
  };
};

//#endregion Components
