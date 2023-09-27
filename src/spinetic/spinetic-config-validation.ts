
import { TypesConfig, TypesReponsiveSettings, TypesConfigOptional } from "../spinetic-types"

const _defaultConfig: TypesConfig = {
  arrows: true,
  autoWidth: false,
  autoRotate: false,
  clickTransitionCtrl: false,
  dots: true,
  dotsModel: "default",
  draggable: true,
  fullHeightItems: false,
  hideArrows: false,
  indexInDots: false,
  msPerClicks: 500,
  msPerAutoRotate: 3000,
  positionArrowLeft: 0,
  positionArrowRight: 0,
  responsive: [{ breakpoint: 0, settings: {} }],
  showItems: 1,
  touchThreshold: 100,
  verticalAlign: false,
};

export const _validResponsive = (responsive?: TypesReponsiveSettings[]) => {
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

export const validConfig = (config?: TypesConfigOptional): TypesConfig => {
  const C = config;
  const DC = _defaultConfig;

  const currentOrDefaultConfig = {
    arrows: C?.arrows ?? DC.arrows,
    autoWidth: C?.autoWidth ?? DC.autoWidth,
    autoRotate: C?.autoRotate ?? DC.autoRotate,
    clickTransitionCtrl: C?.clickTransitionCtrl ?? DC.clickTransitionCtrl,
    dots: C?.dots ?? DC.dots,
    dotsModel: C?.dotsModel ?? DC.dotsModel,
    draggable: C?.draggable ?? DC.draggable,
    fullHeightItems: C?.fullHeightItems ?? DC.fullHeightItems,
    hideArrows: C?.hideArrows ?? DC.hideArrows,
    indexInDots: C?.indexInDots ?? DC.indexInDots,
    msPerClicks: C?.msPerClicks ?? DC.msPerClicks,
    msPerAutoRotate: C?.msPerAutoRotate ?? DC.msPerAutoRotate,
    positionArrowLeft: C?.positionArrowLeft ?? DC.positionArrowLeft,
    positionArrowRight: C?.positionArrowRight ?? DC.positionArrowRight,
    responsive: _validResponsive(C?.responsive),
    showItems: C?.showItems ?? DC.showItems,
    touchThreshold: _validTouchLimit(C?.touchThreshold ?? DC.touchThreshold),
    verticalAlign: C?.verticalAlign ?? DC.verticalAlign,
  };

  return currentOrDefaultConfig;
}