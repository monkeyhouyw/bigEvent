var article = ({
    getCate: function(options) {
        $.ajax({
            url: TYPE_SEARCH,
            success: options.callback
        })
    }
})