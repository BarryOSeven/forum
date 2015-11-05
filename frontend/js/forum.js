var Forum = {
    init: function () {
        document.addEventListener("DOMContentLoaded", this.onReady);
    },
    onReady: function () {
        Util.log('Document Ready');
        
        //Git.requestFileSystem();
    }
};

Forum.init();