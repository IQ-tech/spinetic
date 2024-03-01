import * as D from "./defaults";
import * as T from "types";

export const _validResponsive = (responsive?: T.TypesReponsiveSettings[]) => {
  if (!responsive || !responsive?.length) return D._defaultConfig.responsive;

  const sortBreakPoints = responsive?.sort(
    (a: { breakpoint: number }, b: { breakpoint: number }) =>
      b.breakpoint - a.breakpoint
  );
  return sortBreakPoints ?? D._defaultConfig.responsive;
}

export const _validTouchLimit = (touchThreshold: number) => {
  const screenWidth = window.innerWidth;
  const greaterThanHalfScreen = touchThreshold > screenWidth / 2;

  return touchThreshold === undefined || greaterThanHalfScreen
    ? D._defaultConfig.touchThreshold
    : touchThreshold;
}

export const validShowItems = (showItems: number) => {
  return !showItems || showItems < 1 ? D._defaultConfig.showItems : showItems;
}

export const validAutoWidth = (autoWidth: boolean | undefined) => {
  return typeof autoWidth !== "boolean" ? D._defaultConfig.autoWidth : autoWidth;
}

export const validConfig = (config?: T.TypesConfigOptional): T.TypesConfig => {
  const C = config;
  const DC = D._defaultConfig;

  const currentOrDefaultConfig: T.TypesConfig = {
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