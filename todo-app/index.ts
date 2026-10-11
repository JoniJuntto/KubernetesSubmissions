const port = Number(process.env.PORT) || 3000;

Bun.serve({
    hostname: '0.0.0.0',
    port,
    fetch() {
        return new Response('Hello World');
    },
});

console.log(`Server started in port ${port}`);