import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const ts2Options = {
  useTsconfigDeclarationDir: true, // emit declarations as per tsconfig
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(), // find node modules
    commonjs(), // ES module node modules where needed
    typescript(ts2Options), // transpile ts and report any errors
  ],
};
