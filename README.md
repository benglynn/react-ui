# react-ui

Work in progress. A Storybook of shared library of React UI
components written with TypeScript.

## The story so far...

```bash
# let's get going
git init
npm init
npm -i -D react react-dom @types/react
echo "node_modules" > .gitignore
```

Let consumers know they need to have these dependencies – in
`package.json`:
```json
"peerDependencies": {
  "react": ">=116.13.1",
  "react-dom": ">=16.13.1"
}
````

Install and configure TypeScript.
```bash
npm i -D typescript
```json
In `tsconfig.json`:
```json{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "declaration": true,
    "declarationDir": "build",
    "esModuleInterop": true,
    "jsx": "react",
    "lib": ["es6", "dom", "es2016", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es5"
  },
  "include": ["src/**/*"],
  "exclude": [
    "src/**/*.test.tsx"
  ]
}
```