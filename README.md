# fastify-js-types

Minimal reproducible example for showing type definitions bug for simple Javascript usage.

> Tested in [vscode](https://code.visualstudio.com/)

```sh
npm i
```
## Code

[here](./app.js)

## Solution

As mentioned in the pull request, modify manually in `node_modules/fastify/fastify.d.ts`:

```ts
// ...
export { fastify }

declare module 'fastify' {
  export = fastify;
}
```