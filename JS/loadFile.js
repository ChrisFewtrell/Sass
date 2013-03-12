(function ($) {
    var loadfileAttribute = "loadFile";

    var loadFile = function () {
        var $el = $(this);
        var filename = $el.attr(loadfileAttribute);
        console.log("Load file:" + filename);
        var promise = $.get(filename, null, function (data) {
            if (typeof prettyPrint === "undefined") {
                console.log("Prettyprint not loaded");
                $el.text(data);
                return;
            }
            $el.text(data);
            //console.log("prettyPrint");
            //var html = prettyPrintOne(data);
            //$el.html(html);
        });
        return promise;
    };

    var loadAllFiles = function () {
        var elementsToLoad = $("[" + loadfileAttribute + "]");

        console.log("load all files:" + elementsToLoad.length);
        $.each(elementsToLoad, function () {
            loadFile.apply(this);
        });
    };
    
    $(loadAllFiles);
})(jQuery);