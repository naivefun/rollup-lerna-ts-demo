import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
const path = require("path");

// 1321d064-489a-450c-afbf-a49301617184
export default [
  {
    input: "./src/index.tsx",
    external: ["react", "react-dom"],
    output: [
      {
        file: "dist/index.js",
        format: "umd",
        name: "PReactColor",
        exports: "named",
        globals: {
          react: "window.React",
          "react-dom": "window.ReactDOM",
        },
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
        globals: {
          react: "window.React",
          "react-dom": "window.ReactDOM",
        },
      },
    ],
    plugins: [
      typescript({}),
      commonjs({}),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      // terser({}),
    ],
  },
];
