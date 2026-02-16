// @ts-nocheck
import { addNumbers } from "./utils/testutil";

console.log('>>>', "Injected script loaded!");
(function(xhr) {

    var XHR = XMLHttpRequest.prototype;

    var open = XHR.open;
    var send = XHR.send;
    var setRequestHeader = XHR.setRequestHeader;

    XHR.open = function(method, url) {
        this._method = method;
        this._url = url;
        this._requestHeaders = {};
        this._startTime = (new Date()).toISOString();

        return open.apply(this, arguments);
    };

    XHR.setRequestHeader = function(header, value) {
        this._requestHeaders[header] = value;
        return setRequestHeader.apply(this, arguments);
    };

    XHR.send = function(postData) {

        this.addEventListener('load', function() {
            var endTime = (new Date()).toISOString();

            var myUrl = this._url ? this._url.toLowerCase() : this._url;
            console.log(">>>", "XHR request to:", myUrl, "with method:", this._method);

            console.log(">>>", "Test utility function addNumbers(2, 3) =", addNumbers(2, 3));
        });

        return send.apply(this, arguments);
    };

})(XMLHttpRequest);
