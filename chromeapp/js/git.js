var Git = {
    requestFileSystem: function () {
        window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024, Git.gotFileSystem, function (e) {
            console.log("Could not request File System");
        });
    },
    gotFileSystem: function (fileSystem) {
        console.log('onRequestGranted');
        fileSystem.root.getDirectory('forum.git', {create: true}, function (root) {
            Util.log('Filesystem Ready');
            Git.clone(root);
        },
        Util.onError);
    },
    clone: function(directory) {
        var options = {
            dir: directory,
            url: 'https://github.com/ryanackley/git-html5.js.git',
            depth: 1
        };

        GitApi.clone(options, function(){ 
            // clone has completed at this point, do something with the files that have been imported into dir
        });
    }
};