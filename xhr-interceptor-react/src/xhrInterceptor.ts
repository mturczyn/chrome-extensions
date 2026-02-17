interface ExtendedXMLHttpRequest extends XMLHttpRequest {
    _method?: string
    _url: string | URL
    _requestHeaders: Record<string, string>
    // _startTime?: string;
}

;(function (xhr) {
    let XHR = XMLHttpRequest.prototype

    let open = XHR.open
    let send = XHR.send
    let setRequestHeader = XHR.setRequestHeader

    XHR.open = function (method, url) {
        let extendedThis = this as ExtendedXMLHttpRequest
        extendedThis._method = method
        extendedThis._url = url
        extendedThis._requestHeaders = {}
        // extendedThis._startTime = (new Date()).toISOString();

        return open.apply(this, arguments as any)
    }

    XHR.setRequestHeader = function (header, value) {
        ;(this as ExtendedXMLHttpRequest)._requestHeaders[header] = value
        return setRequestHeader.apply(this, arguments as any)
    }

    XHR.send = function (postData) {
        this.addEventListener('load', function () {
            let extendedThis = this as ExtendedXMLHttpRequest
            let myUrl = extendedThis._url?.toString().toLowerCase()
            console.log(
                '>>>',
                '!!! XHR request to:',
                myUrl,
                'with method:',
                extendedThis._method
            )

            if (myUrl && myUrl.includes('delivery')) {
                console.log('>>>', '!!! XHR request details:', {
                    method: extendedThis._method,
                    url: extendedThis._url,
                })

                alert(
                    '!!! XHR request to delivery endpoint detected! Check console for details.'
                )
            }
        })

        return send.apply(this, arguments as any)
    }
})(XMLHttpRequest)
