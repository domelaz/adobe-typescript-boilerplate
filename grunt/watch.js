"use strict";

module.exports = {
  lint: {
    files: ["<%= tslint.base.files.src %>"],
    tasks: ["tslint", "ts"],
  },
  references: {
    files: ["typings/**/*.d.ts"],
    tasks: ["ts"],
  },
  sync: {
    files: ["<%= webpack.options.output.path %>/**/*.*"],
    tasks: ["exec:sync"],
  },
  webpack: {
    files: ["<%= ts.adobejsx.outDir %>/**/*.js"],
    tasks: ["webpack:dev"],
  },
};
