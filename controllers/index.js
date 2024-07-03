import Router from '@koa/router';
const router = new Router();
import IndexController from './indexController';
const indexController = new IndexController();
import ApiController from './ApiController';
const apiController = new ApiController();
import BooksController from './BooksController';
const booksController = new BooksController();

function initController (app) {
    router.get('/', indexController.actionIndex);
    router.get('/books/list', booksController.actionBooksListPage);//页面
    router.get('/api/getDataList', apiController.actionDataList);//api
    app
        .use(router.routes())
        .use(router.allowedMethods());
}

export default initController;