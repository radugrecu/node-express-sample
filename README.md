## Intro
Simple node/express app.

### How to run it
You will need Node.js to run this.
The app was tested with Node.js 16 but it probably works with other versions, too.

Once you have Node.js installed, `cd` into the app directory and run `npm install`.

Then you can run the actual app via `node server.js`.

---

By default, it listens on port 3000. You can override this using environment variable `APP_PORT`.

Once running, it has 2 endpoints you can call:
- `/status`
- `/echo/ARG` where `ARG` can be anything

It will log requests to `stdout`.