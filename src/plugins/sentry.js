
const Raven = require('raven')

if (process.env.SENTRY_DSN) {
  Raven.config(process.env.SENTRY_DSN, {
    autoBreadcrumbs: true
  }).install()
}
