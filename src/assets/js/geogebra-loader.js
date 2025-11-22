// assets/js/geogebra-loader.js

export function loadGeoGebraAPI() {
    return new Promise((resolve, reject) => {
        if (window.GGBApplet) {
            resolve();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://www.geogebra.org/apps/deployggb.js"; // Official GeoGebra CDN
        script.onload = () => resolve();
        script.onerror = () => reject("Failed to load GeoGebra API.");
        document.head.appendChild(script);
    });
}
