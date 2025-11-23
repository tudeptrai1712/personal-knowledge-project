// src/assets/js/geogebra-loader.js

(function() {
    function loadGeoGebraApplets() {
        const appletContainers = document.querySelectorAll('[data-ggb-id]');
        if (appletContainers.length === 0) {
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://www.geogebra.org/apps/deployggb.js';
        script.onload = function () {
            appletContainers.forEach(function (container) {
                const materialId = container.getAttribute('data-ggb-id');
                const parameters = {
                    "id": "ggbApplet_" + materialId,
                    "material_id": materialId,
                    "width": container.clientWidth,
                    "height": container.clientHeight || 500, // Default height if not set
                    "showToolBar": true,
                    "showAlgebraInput": true,
                    "showMenuBar": false,
                    "enableShiftDragZoom": true,
                    "useBrowserForJS": true,
                    "appletOnLoad": function() {
                        // Optional: Callback when applet is loaded
                    }
                };

                const applet = new GGBApplet(parameters, '5.0', container);
                applet.inject();
            });
        };
        document.head.appendChild(script);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadGeoGebraApplets);
    } else {
        loadGeoGebraApplets();
    }
})();