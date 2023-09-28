import { ReactNode } from "react";

//#region config
export type TypesDotsModel = "default" | "long-rounded";
export interface TypesConfigOptional {
  arrows?: boolean;
  autoWidth?: boolean;
  autoRotate?: boolean;
  clickTransitionCtrl?: boolean;
  dots?: boolean;
  dotsModel?: TypesDotsModel;
  draggable?: boolean;
  fullHeightItems?: boolean;
  hideArrows?: boolean;
  indexInDots?: boolean;
  msPerClicks?: number;
  msPerAutoRotate?: number;
  positionArrowLeft?: number;
  positionArrowRight?: number;
  responsive?: TypesReponsiveSettings[];
  showItems?: number;
  touchThreshold?: number;
  verticalAlign?: boolean;
}

export type TypesConfig = Required<TypesConfigOptional>;

export interface TypesReponsiveSettings {
  breakpoint: number;
  settings: TypesConfigOptional;
}
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
export interface TypesSpinetic {
  children: ReactNode;
  config?: TypesConfigOptional;
}

export interface TypesReturnSpinetic {
  currentConfig: TypesConfig,
  currentIndex: number,
  spineticMain: React.RefObject<HTMLDivElement>,
  spineticContainer: React.RefObject<HTMLDivElement>,
  maxCarouselItems: number,
  remainingIndexes: number[],
  goToItem: (p0: number) => void,
  previousItem: () => void,
  nextItem: () => void,

  start: (p0: TypesEventDragStart | any) => void,
  move: (p0: TypesEventDragMove | any) => void,
  end: (ep0: TypesEventDragEnd) => void 
}

export interface TypesUseSpinetic {
  children: ReactNode, config?: TypesConfigOptional
}

export interface TypesArrows {
  children: ReactNode;
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
//#endregion Components