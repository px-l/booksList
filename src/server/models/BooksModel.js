import axios from 'axios';
import HttpRequest from '../utils/http';


class BooksModel {
    getBooksList() {
        return HttpRequest.fetch('http://localhost/basic/web/index.php?r=books')
    }
    findBook(id) {
        return axios.get('')
    }
}
export default BooksModel;