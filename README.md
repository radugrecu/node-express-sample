
Simple node/express app, built with nodejs v16.
It probably runs on nodejs 18, and other versions, too.

Run it by `node server.js`.

By default, it listens on port 3000. You can override this using environment variable `APP_PORT`.

Once running, it has 2 endpoints you can call:
- `/status`
- `/echo/ARG` where `ARG` can be anything

It will log requests to `stdout`.