('use strict');

import chalk from 'chalk';
console.log(
    chalk.bold.cyan('************************************************')
);
console.log(
    chalk.bold.cyan('*********Bootstrapping The Application**********')
);

import express from 'express';
import createConfig from './config';
import dumpServerLog from './config/dumpConfig';
import registerMiddleware from './middleware';

const server = express();
server.locals.CFG = createConfig();
registerMiddleware(server);

const ENV = server.locals.CFG.ENV;

server.listen(ENV.PORT, () => {
    dumpServerLog({
        apiEnv: ENV.API_ENV,
        nodeEnv: ENV.NODE_ENV,
        port: ENV.PORT,
        seoEnv: ENV.SEO_ENV
    });
});

export default server;
