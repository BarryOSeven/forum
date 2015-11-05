var Forum = {
    init: function () {
        console.log('init');
        document.addEventListener("DOMContentLoaded", this.onReady);
    },
    onReady: function () {
        Util.log('Document Ready');
        
        Git.requestFileSystem();
    }
};

Forum.init();