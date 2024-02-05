try{
(()=>{(()=>{if(!sessionStorage.getItem("@storybook/manager/store")){let o=JSON.stringify({layout:{initialActive:"canvas",showToolbar:!1,isFullscreen:!0,showPanel:!0,showNav:!0,panelPosition:"bottom",showTabs:!0}});sessionStorage.setItem("@storybook/manager/store",o),location.reload()}})();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
