/**
 * Created by Saron on 2016/4/19.
 */

/*
 * async method shell, provider the error catch of the async callback etc
 */
function SandBox(fn, arg1, arg2, arg3, arg4, arg5, arg6, arg7, callback) {

    var d = require('domain').create();

    d.on("error", function (err) {
        console.log(err);
    });

    d.run(function () {
        fn(arg1, arg2, arg3, arg4, arg5, arg6, arg7, callback);
    });

    return {
        Release: function release() {
            fn = null;
            d = null;
        },
        Include: function include(asyncObj){
            "use strict";

            d.add(asyncObj);
        }
    }
}

module.exports = SandBox;
