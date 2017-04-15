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
    var result = {
        // os
        isIOS: false,
        isAndroid: false,
        isWindows: false,
        isLinux: false,
        isUnix: false,
        isMac: false,

        // browser
        isSafari: false,
        isChrome: false,
        isIE: false,
        isEdge: false,
        isFirefox: false,
        isOpera: false,
        isUC: false,

        // app
        isWechat: false,
        isWeibo: false,
        isQQ: false,

        // device
        isIPhone: false,
        isIPad: false,
        isIPod: false,
        // isXiaomi: false,

        isMobile: false,
        isPC: false,

        detail: {
            browser: {},
            os: {},
            app: {},
            device: {}
        }
    };

    // os + device
    if (/ipad/i.test(ua)) {
        result.detail.device.name = 'iPad';
        result.isIPad = true;
    } else if (/ipod/i.test(ua)) {
        result.detail.device.name = 'iPod';
        result.isIPod = true;
    } else if (/iphone/i.test(ua)) {
        result.detail.device.name = 'iPhone';
        result.isIPhone = true;
    } else if (/mac os x/i.test(ua)) {
        result.detail.device.name = 'Mac';
        result.isMac = true;
    } else if (/android/i.test(ua)) {
        var matchs = ua.match(/android[_ ](\d+)[_\.](\d+)([_\.]\d+)?[; ]/g);
        result.detail.os.name = 'Android';
        result.detail.os.version = matchs ? matchs[0].replace(/;/g, ' ').trim().replace(/_/g, ' ').split(' ')[1] : '0';
        result.isAndroid = true;
    } else if (/windows/i.test(ua)) {
        result.detail.os.name = 'Windows';
        result.isWindows = true;
    } else if (/linux/i.test(ua)) {
        result.detail.os.name = 'Linux';
        result.isLinux = true;
    } else if (/unix/i.test(ua)) {
        result.detail.os.name = 'Unix';
        result.isUnix = true;
    }

    if (result.isIPhone || result.isIPad || result.isIPod) {
        var matchs = ua.match(/os (\d+)[_\.](\d+)([_\.]\d+)? /g);
        result.detail.os.version = matchs ? matchs[0].trim().split(' ')[1].replace(/_/g, '.') : '0';
        result.isIOS = true;
    }

    // browser
    if (/edge/i.test(ua)) {
        result.detail.browser.name = 'Edge';
        result.isEdge = true;
    } else if (/chrome|crios/i.test(ua)) {
        var matchs = ua.match(/(chrome|crios)\/[\d\.]+ /g);
        result.detail.browser.version = matchs ? matchs[0].trim().split('\/')[1] : '0';
        result.detail.browser.name = 'Chrome';
        result.isChrome = true;
    } else if (result.isIOS && /version\/(\d+)/i.test(ua)) {
        var matchs = ua.match(/version\/[\d\.]+ /g);
        result.detail.browser.version = matchs ? matchs[0].trim().split('\/')[1] : '0';
        result.detail.browser.name = 'safari';
        result.isSafari = true;
    } else if (/msie|trident/i.test(ua)) {
        result.detail.browser.name = 'IE';
        result.isIE = true;
    } else if (/ucbrowser/i.test(ua)) {
        result.detail.browser.name = 'UC Browser';
        result.isUC = true;
    } else if (/opera/i.test(ua)) {
        result.detail.browser.name = 'Opera';
        result.isOpera = true;
    } else if (/firefox/i.test(ua)) {
        result.detail.browser.name = 'Firefox';
        result.isFirefox = true;
    }

    // app
    if (/micromessenger/i.test(ua)) {
        result.detail.app.name = 'Wechat';
        result.isWechat = true;
    } else if (/weibo/i.test(ua)) {
        result.detail.app.name = 'Weibo';
        result.isWeibo = true;
    } else if (/qq\//i.test(ua)) {
        result.detail.app.name = 'QQ';
        result.isQQ = true;
    }

    if (/mobile/i.test(ua)) {
        result.isMobile = true;
    } else {
        result.isPC = true;
    }

    result.is = function(keyword) {
        return !!keyword && ua.indexOf(keyword) > -1;
    };

    return result;
}));
