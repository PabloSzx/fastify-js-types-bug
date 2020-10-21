// this fixes it
// const fastify = require("fastify").default;

// way of using requiring "fastify" in most docs
const fastify = require("fastify");

// app ~= any
const app = fastify({
  logger: true,
});

app.all("/", (_req, reply) => {
  // reply ~= any => no autocomplete
  reply;

  return "hello world";
});

app.listen(8000);
