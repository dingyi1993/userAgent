;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        window.UA = factory();
    }
}
(function() {
    var ua = window.navigator.userAgent.toLowerCase();
    console.log(ua);
    alert(ua);
    var result = {
        //os
        isIOS: false,
        isAndroid: false,
        isWindows: false,
        isLinux: false,
        isUnix: false,
        isMac: false,

        //browser
        isSafari: false,
        isChrome: false,
        isIE: false,
        isFirefox: false,
        isOpera: false,

        //app
        isWechat: false,

        //device
        isIPhone: false,
        isIPad: false,
        isIPod: false,
        // isXiaomi: false,

        detail: {
            browser: {
            },
            engine: {
            },
            os: {
            },
            device: {
            }
        }
    };

    // os + device
    if (/iphone/i.test(ua)) {
        result.isIPhone = true;
    } else if (/ipad/i.test(ua)) {
        result.isIPad = true;
    } else if (/ipod/i.test(ua)) {
        result.isIPod = true;
    } else if (/mac os x/i.test(ua)) {
        result.isMac = true;
    } else if (/android/i.test(ua)) {
        result.isAndroid = true;
    } else if (/windows/i.test(ua)) {
        result.isWindows = true;
    } else if (/linux/i.test(ua)) {
        result.isLinux = true;
    } else if (/unix/i.test(ua)) {
        result.isUnix = true;
    }

    if (result.isIPhone || result.isIPad || result.isIPod) {
        result.isIOS = true;
    }

    // browser
    if (result.isIOS && /version\/(\d+)/i.test(ua) && !/chrome/i.test(ua)) {
        result.isSafari = true;
    } else if (/chrome|crios/i.test(ua)) {
        result.isChrome = true;
    } else if (/msie|trident/i.test(ua)) {
        result.isIE = true;
    } else if (/opera/i.test(ua)) {
        result.isOpera = true;
    } else if (/firefox/i.test(ua)) {
        result.isFirefox = true;
    }

    // app
    if (/micromessenger/i.test(ua)) {
        result.isWechat = true;
    }
    alert(result.isChrome);

    return result;
}));
console.log(UA);
