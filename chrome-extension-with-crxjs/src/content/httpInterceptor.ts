
(function(xhr) {

    var XHR = XMLHttpRequest.prototype;

    var open = XHR.open;
    var send = XHR.send;
    var setRequestHeader = XHR.setRequestHeader;

    XHR.open = function(method, url) {
        (this as any)._method = method;
        (this as any)._url = url;
        (this as any)._requestHeaders = {};
        (this as any)._startTime = (new Date()).toISOString();

        return open.apply(this, arguments as any);
    };

    XHR.setRequestHeader = function(header, value) {
        (this as any)._requestHeaders[header] = value;
        return setRequestHeader.apply(this, arguments as any);
    };

    XHR.send = function(postData) {

        console.log(`[CRXJS] Intercepted request to ${(this as any)._url} with method ${(this as any)._method} and post data ${postData}`);
        this.addEventListener('load', function() {
            var endTime = (new Date()).toISOString();

            var myUrl = (this as any)._url ? (this as any)._url.toLowerCase() : (this as any)._url;
           
            console.log(`[CRXJS] Intercepted request to ${myUrl} with method ${(this as any)._method} and status ${this.status}`);
        });

        return send.apply(this, arguments as any);
    };

})(XMLHttpRequest);
