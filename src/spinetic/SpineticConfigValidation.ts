
import { TypesConfig, TypesReponsiveSettings, TypesConfigOptional } from "types";

const defaultArrowsStyle = {
  container: {},
  btnPrev: {},
  btnNext: {},
};

export const _defaultConfig: TypesConfig = {
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


export const _validResponsive = (responsive?: TypesReponsiveSettings[]) => {
  if (!responsive || !responsive?.length) return _defaultConfig.responsive;

  const sortBreakPoints = responsive?.sort(
    (a: { breakpoint: number }, b: { breakpoint: number }) =>
      b.breakpoint - a.breakpoint
  );
  return sortBreakPoints ?? _defaultConfig.responsive;
}

export const _validTouchLimit = (touchThreshold: number) => {
  const screenWidth = window.innerWidth;
  const greaterThanHalfScreen = touchThreshold > screenWidth / 2;

  return touchThreshold === undefined || greaterThanHalfScreen
    ? _defaultConfig.touchThreshold
    : touchThreshold;
}

export const validShowItems = (showItems: number) => {
  return !showItems || showItems < 1 ? _defaultConfig.showItems : showItems;
}

export const validAutoWidth = (autoWidth: boolean | undefined) => {
  return typeof autoWidth !== "boolean" ? _defaultConfig.autoWidth : autoWidth;
}

export const validConfig = (config?: TypesConfigOptional): TypesConfig => {
  const C = config;
  const DC = _defaultConfig;

  const currentOrDefaultConfig: TypesConfig = {
    arrows: C?.arrows ?? DC.arrows,
    arrowsStyle: C?.arrowsStyle ?? DC.arrowsStyle,
    hideArrows: C?.hideArrows ?? DC.hideArrows,

    dots: C?.dots ?? DC.dots,
    dotsStyle: C?.dotsStyle ?? DC.dotsStyle,
    dotsStyleActive: C?.dotsStyleActive ?? DC.dotsStyleActive,
    indexInDots: C?.indexInDots ?? DC.indexInDots,

    autoRotate: C?.autoRotate ?? DC.autoRotate,
    msPerAutoRotate: C?.msPerAutoRotate ?? DC.msPerAutoRotate,

    draggable: C?.draggable ?? DC.draggable,
    touchThreshold: _validTouchLimit(C?.touchThreshold ?? DC.touchThreshold),

    layout: C?.layout ?? DC.layout,
    showItems: validShowItems(C?.showItems ?? DC.showItems),
    fullHeightItems: C?.fullHeightItems ?? DC.fullHeightItems,
    autoWidth: validAutoWidth(C?.autoWidth),

    groupScroll: C?.groupScroll ?? DC.groupScroll,
    groupItemsScroll: C?.groupItemsScroll ?? DC.groupItemsScroll,

    clickTransitionCtrl: C?.clickTransitionCtrl ?? DC.clickTransitionCtrl,
    msPerClicks: C?.msPerClicks ?? DC.msPerClicks,

    responsive: _validResponsive(C?.responsive)
  };

  return currentOrDefaultConfig;
}