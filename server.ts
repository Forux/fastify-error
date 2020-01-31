const port:number = 4010;
const host:string = "0.0.0.0";

import * as fastify from 'fastify';
const app = fastify({
    logger: {
        level: 'warn'
    }
});

(async () => {
	app.addHook('onRequest', async function (request, reply) {
		if (request.query.compress === "br") {
			reply.sendFile(request.params["*"] + "br");
		}
	});

    app.register(require('fastify-static'), {
        root: __dirname,
        prefix: '/'
    });
	
	app.listen(port, host, (err, address) => {
        if (err) throw err;
        console.log(`server listening on ${address}`);
    });
})();