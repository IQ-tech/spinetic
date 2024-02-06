(() => {
  const store = sessionStorage.getItem("@storybook/manager/store");
  
  if (!store) {
    const defaultStore = JSON.stringify({ 
      "layout": { 
        "initialActive": "canvas", 
        "showToolbar": false, 
        "isFullscreen": true, 
        "showPanel": true, 
        "showNav": true, 
        "panelPosition": "bottom", 
        "showTabs": true 
      } 
    });

    sessionStorage.setItem('@storybook/manager/store', defaultStore);
    location.reload();
  }
})();
