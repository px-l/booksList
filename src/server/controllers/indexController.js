import Controller from'./Controller';
class IndexController extends Controller {
    constructor() {
        super()
    }
    async actionIndex(ctx) {
        // throw new Error('1')
        ctx.body = await ctx.render('index', {
            message: '后台传参'
        })
    }
}
export default IndexController;