[![NPM Version](https://badge.fury.io/js/standard-rest-response.svg)](https://badge.fury.io/js/standard-rest-response)
[![CI](https://github.com/justinlettau/standard-rest-response/workflows/CI/badge.svg)](https://github.com/justinlettau/standard-rest-response/actions)
[![codecov](https://codecov.io/gh/justinlettau/standard-rest-response/branch/master/graph/badge.svg)](https://codecov.io/gh/justinlettau/standard-rest-response)
[![Dependency Status](https://david-dm.org/justinlettau/standard-rest-response.svg)](https://david-dm.org/justinlettau/standard-rest-response)
[![Dev Dependency Status](https://david-dm.org/justinlettau/standard-rest-response/dev-status.svg)](https://david-dm.org/justinlettau/standard-rest-response?type=dev)

# Standard REST Response

Tools for building standard responses for REST APIs.

# Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Errors](#errors)
  - [Middleware](#middleware)
- [Development](#development)

# Features

- 💥 Simple **classes** for http status codes.
- 🚀 Middleware to **catch errors**.
- 🔎 Detect http errors with `instanceof`.
- 🏄‍♂️ **Zero** dependencies.
- 🎉 Written in **TypeScript**.

# Installation

```bash
npm install standard-rest-response --save
```

# Usage

## Errors

Predefined classes for common HTTP status codes.

```ts
import { BadRequest } from 'standard-rest-response';

throw new BadRequest(`That doesn't work`);
```

| Status | Class                     |
| ------ | ------------------------- |
| 400    | `BadRequest`              |
| 401    | `Unauthorized`            |
| 403    | `Forbidden`               |
| 404    | `NotFound`                |
| 405    | `MethodNotAllowed`        |
| 406    | `NotAcceptable`           |
| 408    | `RequestTimeout`          |
| 409    | `Conflict`                |
| 410    | `Gone`                    |
| 412    | `PreconditionFailed`      |
| 413    | `PayloadTooLarge`         |
| 415    | `UnsupportedMediaType`    |
| 418    | `ImATeaPotSupported`      |
| 421    | `Misdirected`             |
| 422    | `UnprocessableEntity`     |
| 500    | `InternalServerError`     |
| 501    | `NotImplemented`          |
| 502    | `BadGateway`              |
| 503    | `ServiceUnavailable`      |
| 504    | `GatewayTime`             |
| 505    | `HttpVersionNotSupported` |

You can also use the base `HttpError` class to return any status.

```ts
import { HttpError } from 'standard-rest-response';

throw new HttpError(999, 'Something crazy!');
```

## Middleware

Provide catch and response to HTTP errors with frameworks like [ExpressJS](https://expressjs.com).

> Note: In Express v5, this works with routes that return a promise, like async functions. In older
> versions of Express, use [`express-async-errors`](https://www.npmjs.com/package/express-async-errors).

```ts
import { catchHttpErrors, UnprocessableEntity } from 'standard-rest-response';

app.use(catchHttpErrors);

app.get('/', async (res, req) => {
  if (!res.user) {
    throw new Unauthorized('Nice try');
  }

  // ...
});
```

# Development

```
npm install
npm run build
```
