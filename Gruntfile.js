"use strict";

const env = process.env;

module.exports = function(grunt) {
  require("load-grunt-config")(grunt, {
    data: {
      /**
       * `main()` JavaScript entry and soruces folder
       *
       * Here resides modern code which will turn into a legacy es3
       */
      jsEntry: "index.js",
      src: env.ADTS_ROOT || "src",

      /**
       * Transpiled (but not bundled) sources folder
       *
       * Analogue is tsconfig `outRoot` option. Useful in troubleshooting
       */
      build: env.ADTS_BUILD || "build",

      /**
       * Holy Graal: single valid `.jsx` bundle
       * This bundle runs on host application (Illustrator or others)
       *
       * Path (relative to `this.build`) and name of final `.jsx` bundle
       */
      jsxBuild: "dist",
      jsxBundle: "bundle.jsx",

      /**
       * Misc
       */
      jsxTarget: "es3",
      pkg: grunt.file.readJSON("package.json"),
    }
  });
};
