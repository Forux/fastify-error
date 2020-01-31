"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const port = 4010;
const host = "0.0.0.0";
const fastify = require("fastify");
const app = fastify({
    logger: {
        level: 'warn'
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    app.addHook('onRequest', function (request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.query.compress === "br") {
                reply.sendFile(request.params["*"] + "br");
            }
        });
    });
    app.register(require('fastify-static'), {
        root: __dirname,
        prefix: '/'
    });
    app.listen(port, host, (err, address) => {
        if (err)
            throw err;
        console.log(`server listening on ${address}`);
    });
}))();
//# sourceMappingURL=server.js.map