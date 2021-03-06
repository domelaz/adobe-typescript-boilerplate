"use strict";

module.exports = {
  adobejsx: {
    options: {
      module: "commonjs",
      noImplicitAny: false,
      noLib: true,
      sourceMap: false,
      target: "<%= jsxTarget %>",
    },
    src: ["references.ts", "typings/**/*.d.ts", "<%= tslint.base.files.src %>"],
    reference: "references.ts",
    outDir: "<%= build %>",
  },
};
