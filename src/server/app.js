import koa from 'koa';
const app = new koa();
import path from 'path';
import config from './config';
import render from 'koa-swig';
import { historyApiFallback } from 'koa2-connect-history-api-fallback';
import initController from './controllers';
import errorHandler from './midleware/ErrorHandler';
import co from 'co';
import log4js from "log4js";
const logger = log4js.getLogger("cheese");
log4js.configure({
    appenders: { cheese: { type: "file", filename: "./logs/error.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } },
});

app.use(historyApiFallback({ index: '/', whiteList: ['/api', '/books'] }));
errorHandler.error(app, logger);
app.use(require('koa-static')(config.staticDir));
app.context.render = co.wrap(render({
    root: config.viewDir,
    varControls: ["[[","]]"],
    cache: config.cache // disable, set to false
}));
initController(app);
app.listen(config.port, ()=>{
    console.log(`server is running at http://localhost:${config.port}`)
})