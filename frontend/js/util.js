var Util = {
isDebug: true,
    onError: function(error) {
        if (Util.isDebug) {
            console.log('[ERROR] ' + error);
        }
    },
    onStorageError: function(error) {
        var msg = '';
                
        switch (error.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
                msg = 'QUOTA_EXCEEDED_ERR';
                break;
            case FileError.NOT_FOUND_ERR:
                msg = 'NOT_FOUND_ERR';
                break;
            case FileError.SECURITY_ERR:
                msg = 'SECURITY_ERR';
                break;
            case FileError.INVALID_MODIFICATION_ERR:
                msg = 'INVALID_MODIFICATION_ERR';
                break;
            case FileError.INVALID_STATE_ERR:
                msg = 'INVALID_STATE_ERR';
                break;
            default:
                msg = 'Unknown Error Code: ' + error.code;
                break;
        }
        
        Util.onError(msg);
    },
    log: function(message) {
        if (Util.isDebug) {
            console.log('[LOG] ' + message);
        }
    }
};