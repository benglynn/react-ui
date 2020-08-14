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

