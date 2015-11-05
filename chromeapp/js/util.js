var Util = {
    isDebug: true,
    onError: function (error) {
        if (Util.isDebug) {
            if(error.message) {
                console.log('[ERROR] ' + error.message);
            } else {
                console.log('[ERROR] ' + error);
            }
        }
    },
    log: function (message) {
        if (Util.isDebug) {
            console.log('[LOG] ' + message);
        }
    }
};