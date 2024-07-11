(function () {
    // 判断环境
    var root = (typeof self == 'object' && self.self === self && self) ||
          (typeof global == 'object' && global.global === global && global) ||
          Function('return this')() ||
          {};
    function _(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    }
    var isFunction = function(obj) {
        return typeof obj == 'function' || false;
    };
    var ArrayProto = Array.prototype, ObjProto = Object.prototype;
    var push = ArrayProto.push;
    _.throttle = function(cb, t) {
        let isFirst = true;
        let timer = null;
        let prevTime = null;
        return function() {
            if(isFirst) {
                cb();
                prevTime = new Date();
                isFirst = false;
            } else {
                timer && clearTimeout(timer);
                let currentDate = new Date();
                let timeR = + currentDate - prevTime;
                if (timeR >= t) {
                    cb();
                    prevTime = new Date();
                } else {
                    timer = setTimeout(()=>{
                        cb();
                        prevTime = new Date();
                    }, timeR)
                }
            }
        }
    }
    _.each = function(arr, fn) {
        for(let i=0;i<arr.length;i++) {
            fn(arr[i], i);
        }
        return arr;
    }
    _.mixin = function(obj) {
        _.each(functions(obj), function(name) {
          var func = _[name] = obj[name];
          _.prototype[name] = function() {
            var args = [this._wrapped];
            push.apply(args, arguments);
            console.log(args, 333)
            // return chainResult(this, func.apply(_, args));
            return func.apply(_, args)
          };
        });
        return _;
    }

    _.mixin(_);
    function functions(obj) {
        var names = [];
        for (var key in obj) {
          if (isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    }
    
    root._ = _
})()