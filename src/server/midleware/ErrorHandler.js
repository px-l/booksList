class ErrorHandler {
    static error(app, logger) {
         app.use( async(ctx, next) => {
            try {
                await next()
                if(ctx.status === 404) {
                    ctx.body = '<script src="https://volunteer.cdn-go.cn/404/latest/404.js"></script>'
                }
            } catch (err) {
                logger.error(err.message);
                ctx.body = '500, 正在修复中'
            }
         })
    }
}
module.exports = ErrorHandler;