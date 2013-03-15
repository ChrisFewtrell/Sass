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
            console.log("prettyprint");
            prettyPrint();
            //$el.html(html);
        });
        return promise;
    };

    var loadCssAndScss = function () {
        var elementsToLoad = $("[" + loadfileAttribute + "]");
        
        console.log("load all files:" + elementsToLoad.length);
        $.each(elementsToLoad, function () {
            loadFile.apply(this);
        });
    };
    var displayHtmlSnippet = function () {
        var $source = $("#html-source");
        if ($source.length === 0) {
            return;
        }
        var html = $source.html().trim();
        var $pre = $("<pre class='prettyprint lang-html' />").text(html);
        var $code = $("<code/>").append($pre);
        $("#html-snippet").append($code);
    };
    $(displayHtmlSnippet);
    $(loadCssAndScss);
})(jQuery);