// assets/js/math-init.js

import { loadGeoGebraAPI } from "./geogebra-loader.js";

loadGeoGebraAPI().then(() => {
    const parameters = {
        appName: "classic",
        width: 720,
        height: 480,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false
    };

    const app = new GGBApplet(parameters, true);
    app.inject("ggb-container");
});
