var Git = {
    requestFileSystem: function () {
        var requestedBytes = 1024 * 1024; // 10MB
        
        console.log('requesting bytes');
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;     
        window.webkitStorageInfo.requestQuota( 
                    window.PERSISTENT,
                    requestedBytes,
                    function( bytes ) {
                        alert( "Quota is available: " + bytes );
                    },
                    function( e ) {
                        alert( "Error allocating quota: " + e );
                    }

        );
        
        
        
//        navigator.webkitPersistentStorage.requestQuota(
//            requestedBytes, function (grantedBytes) {
//                console.log(grantedBytes);
//                //window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
//                //window.requestFileSystem(PERSISTENT, grantedBytes, Git.onRequestGranted, Util.onError);
//            }, Util.onStorageError
//        );
//        navigator.webkitPersistentStorage.requestQuota (1024*1024, function(grantedBytes) {
//            console.log ('requestQuota: ', arguments);
//            //requestFS(grantedBytes);
//          }, Util.onStorageError);
    },
    onRequestGranted: function (fileSystem) {
        console.log('onRequestGranted');
        fileSystem.root.getDirectory('forum.git', {create: true}, function (root) {
            Forum.log('Filesystem Ready');
        });
    }
};