// assets/js/mathjax-loader.js

/**
 * Load MathJax v3 dynamically with correct configuration.
 * Ensures MathJax is only loaded once.
 */

export function loadMathJax() {
    return new Promise((resolve, reject) => {
        // Already loaded?
        if (window.MathJax && window.MathJax.typesetPromise) {
            resolve();
            return;
        }

        // Inject MathJax configuration BEFORE loading script
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']]
            },
            svg: {
                fontCache: 'global'
            }
        };

        const script = document.createElement("script");
        script.src = "/libs/mathjax/MathJax-master/es5/tex-chtml.js"; // local path
        script.async = true;

        script.onload = () => {
            // MathJax is ready
            if (window.MathJax && window.MathJax.typesetPromise) {
                resolve();
            } else {
                reject("MathJax loaded but typesetPromise is missing. Check version.");
            }
        };

        script.onerror = () => reject("Failed to load MathJax from local libs folder.");

        document.head.appendChild(script);
    });
}
