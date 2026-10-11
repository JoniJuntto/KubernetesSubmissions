const port = Number(process.env.PORT) || 3000;
const randomString = Math.random().toString(36).substring(2, 15);

const status = () => `${new Date().toISOString()}: ${randomString}`;

const logStatus = () => {
    console.log(status());
};

logStatus();
setInterval(logStatus, 5000);

Bun.serve({
    hostname: '0.0.0.0',
    port,
    fetch(request) {
        const url = new URL(request.url);
        if (request.method !== 'GET' || url.pathname !== '/') {
            return new Response('Not found', { status: 404 });
        }

        return new Response(`${status()}\n`, { status: 200 });
    },
});

console.log(`Server started in port ${port}`);
