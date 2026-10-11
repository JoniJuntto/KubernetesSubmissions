import { randomBytes } from 'node:crypto';

const port = Number(process.env.PORT) || 3000;
const applicationHash = randomBytes(3).toString('hex');

Bun.serve({
    hostname: '0.0.0.0',
    port,
    fetch(request) {
        const url = new URL(request.url);
        if (request.method !== 'GET' || url.pathname !== '/') {
            return new Response('Not found', { status: 404 });
        }

        const requestHash = randomBytes(3).toString('hex');
        const body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Todo app</title>
</head>
<body style="margin: 2rem; background: white; color: black; font-family: sans-serif;">
    <p>Application ${applicationHash}. Request ${requestHash}</p>
</body>
</html>`;

        return new Response(body, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
    },
});

console.log(`Server started in port ${port}`);