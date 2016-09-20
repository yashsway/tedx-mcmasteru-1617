"use strict";

$(document).ready(function () {
    $("img").unveil(180, function () {
        $(this).load(function () {
            $(this).css("height", "200px");
        });
    });
});