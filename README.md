## To reproduce error with docz@next

```
$ yarn
$ yarn workspace test-lib-1 start:docz
```

You should see errors similar to this

```
....

ERROR in ../lib/esm/components/Button.js
Module not found: Error: Can't resolve 'react' in '/home/mefu/playground/docz-error-reproduce/packages/test-lib-1/lib/esm/components'
 @ ../lib/esm/components/Button.js 1:644-669 1:814-819
 @ ../lib/esm/lib-index.js
 @ ../docs/Button.mdx
 @ ./.cache/sync-requires.js
 @ ./.cache/app.js
 @ multi /home/mefu/playground/docz-error-reproduce/node_modules/event-source-polyfill/src/eventsource.js (webpack)-hot-middleware/client.js?path=/__webpack_hmr&reload=true&overlay=false ./.cache/app
ℹ ｢wdm｣: Failed to compile.


App ready on http://localhost:3000
```

## To see that it is working correctly with docz 1.3.2

```
$ yarn
$ yarn workspace test-lib-2 start:docz
```
