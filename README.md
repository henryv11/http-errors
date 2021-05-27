# http-errors

```ts
import httpErrors from 'http-errors';
```

```ts
const data = {}; // optional
const err = new httpErrors.Unauthorized(data);

err.code; // 401
err.message; // "Unauthorized"
err.type; // "Unauthorized"
err.data; // data
```

```ts
new httpErrors.GatewayTimeout().message; // "Gateway Timeout"
```
