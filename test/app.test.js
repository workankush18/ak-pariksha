const assert = require('node:assert/strict');
const { before, after, test } = require('node:test');
const { once } = require('node:events');
const app = require('../app');

let server;
let baseUrl;

before(async () => {
  console.log("Starting server for tests...");
  server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  console.log(`Server started on port ${server.address().port}`);
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  console.log("Stopping server after tests...");
  if (server && server.listening) {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test('GET / returns the welcome message', async () => {
  console.log("Testing GET / endpoint...");
  const response = await fetch(`${baseUrl}/`);

  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'Jai mata Shaliii');
});

test('GET /health returns a healthy JSON response', async () => {
  const response = await fetch(`${baseUrl}/health`);

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /application\/json/);
  assert.deepEqual(await response.json(), { status: 'ok' });
});

test('GET /missing returns 404 for an unknown route', async () => {
  const response = await fetch(`${baseUrl}/missing`);

  assert.equal(response.status, 404);
  await response.text();

});
