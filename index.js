const server = require("./api/server");

const port = process.env.PORT || 6800;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
