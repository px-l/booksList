import axios from "axios";

class HttpRequest {
    static fetch (url) {
        let result = {
            code: 0,
            message: 'ok',
            data: null
        }
        return new Promise(resolve => {
            axios(url).then(
                res=>{
                    result.data = res.data;
                    resolve(result);
                }
            ).catch(err=>{
                result.message=err.message;
                result.code=-1;
                resolve(result);
            })
        })
    }
}
export default HttpRequest;