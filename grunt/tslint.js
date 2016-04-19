"use strict";

module.exports = {
  options: {
    configuration: "tslint.json",
  },
  base: {
    files: {
      src: [
        "<%= src %>/**/*.ts",
      ]
    }
  },
};
