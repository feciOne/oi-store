module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["9rPAwR5yNQ/0E2DEWU68qg==","pjyTp8RSjodcgQEzH95UQg==","qPPkxv+DNYinVeb5/rMpSw==","lPQVCP/Fcmq68wepaOGqPA=="],
  },
});
