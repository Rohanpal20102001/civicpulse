import Fastify from "fastify";

const app = Fastify({
    logger: true
});

app.get("/health", async () => {
    return {
        status: "healthy",
        service: "civicpulse-realtime"
    };
});

const start = async () => {
    try {
        await app.listen({
            port: 3001,
            host: "0.0.0.0"
        });
        app.log.info("Realtime service started");
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    } 
};

start();