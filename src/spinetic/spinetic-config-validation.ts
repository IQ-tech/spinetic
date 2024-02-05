
import { TypesConfig, TypesReponsiveSettings, TypesConfigOptional } from "types"

export const _defaultConfig: TypesConfig = {
  arrows: true,
  arrowLeftPosition: 0,
  arrowRightPosition: 0,
  hideArrows: false,

  dots: true,
  dotsModel: "default",
  indexInDots: false,

  autoRotate: false,
  msPerAutoRotate: 3000,

  draggable: true,
  touchThreshold: 100,

  showItems: 1,
  autoWidth: false,
  fullHeightItems: true,
  verticalAlign: false,

  clickTransitionCtrl: false,
  msPerClicks: 1500,

  responsive: [{ breakpoint: 0, settings: {} }],
};


export const _validResponsive = (responsive?: TypesReponsiveSettings[]) => {
  if (!responsive|| !responsive?.length) return _defaultConfig.responsive;

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
  return typeof autoWidth !== "boolean" ?? _defaultConfig.autoWidth;
}

export const validConfig = (config?: TypesConfigOptional): TypesConfig => {
  const C = config;
  const DC = _defaultConfig;

  const currentOrDefaultConfig = {
    arrows: C?.arrows ?? DC.arrows,
    arrowLeftPosition: C?.arrowLeftPosition ?? DC.arrowLeftPosition,
    arrowRightPosition: C?.arrowRightPosition ?? DC.arrowRightPosition,
    hideArrows: C?.hideArrows ?? DC.hideArrows,

    dots: C?.dots ?? DC.dots,
    dotsModel: C?.dotsModel ?? DC.dotsModel,
    indexInDots: C?.indexInDots ?? DC.indexInDots,

    autoRotate: C?.autoRotate ?? DC.autoRotate,
    msPerAutoRotate: C?.msPerAutoRotate ?? DC.msPerAutoRotate,

    draggable: C?.draggable ?? DC.draggable,
    touchThreshold: _validTouchLimit(C?.touchThreshold ?? DC.touchThreshold),

    showItems: validShowItems(C?.showItems ?? DC.showItems),
    fullHeightItems: C?.fullHeightItems ?? DC.fullHeightItems,
    autoWidth: validAutoWidth(C?.autoWidth),
    verticalAlign: C?.verticalAlign ?? DC.verticalAlign,

    clickTransitionCtrl: C?.clickTransitionCtrl ?? DC.clickTransitionCtrl,
    msPerClicks: C?.msPerClicks ?? DC.msPerClicks,

    responsive: _validResponsive(C?.responsive)
  };

  return currentOrDefaultConfig;
}