import Controller from './Controller';
import BooksModel from '../models/BooksModel'
class BooksController extends Controller {
    constructor() {
        super()
    }
    async actionBooksListPage(ctx) {
        const booksModel = new BooksModel()
        const result = await booksModel.getBooksList();
        ctx.body = await ctx.render('books/list', {
            data: result.data
        });
    }
    async actionBooksCreatePage(ctx) {
        const booksModel = new BooksModel()
        const result = await booksModel.getBooksList();
        ctx.body = await ctx.render('books/create', {
            data: result.data
        });
    }
}
export default BooksController;