import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
      exports: "named",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ["react", "react-dom"],
  },
];
