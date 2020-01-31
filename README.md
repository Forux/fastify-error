# fastify-error
Error example in fastify

npm i
node server.js

in browser open:
1. http://localhost:4010/test.txt
you will see "1234"

2. http://localhost:4010/test.txt?compress=br
browser will download file with "12345678"
but in console you will see this error

```json

{"level":40,"time":1580490660677,"pid":22972,"hostname":"DESKTOP-NACQR8C","reqId":1,"err":{"type":"FastifyError","message":"FST_ERR_REP_ALREADY_SENT: Reply was already sent.","stack":"FastifyError [FST_ERR_REP_ALREADY_SENT]: FST_ERR_REP_ALREADY_SENT: Reply was already sent.\n    at _Reply.Reply.send (C:\\VRNET\\example\\node_modules\\fastify\\lib\\reply.js:104:26)\n    at PassThrough.<anonymous> (C:\\VRNET\\example\\node_modules\\fastify-static\\index.js:79:13)\n    at PassThrough.emit (events.js:209:13)\n    at ReadStream.Readable.pipe (_stream_readable.js:779:8)\n    at SendStream.stream (C:\\VRNET\\example\\node_modules\\send\\index.js:799:10)\n    at SendStream.send (C:\\VRNET\\example\\node_modules\\send\\index.js:708:8)\n    at onstat (C:\\VRNET\\example\\node_modules\\send\\index.js:730:10)\n    at FSReqCallback.oncomplete (fs.js:167:5)","name":"FastifyError [FST_ERR_REP_ALREADY_SENT]","code":"FST_ERR_REP_ALREADY_SENT","statusCode":500},"msg":"Reply already sent","v":1}

```
