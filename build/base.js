'use strict';

$(document).ready(function () {
    //Foundation
    $(document).foundation();
    //Flowtype
    $('body').flowtype({
        minimum: 500,
        maximum: 1200,
        minFont: 7,
        maxFont: 15,
        fontRatio: 45
    });
    //Main Menu functionality
    //Trigger dropdown
    $("#main-menu").on('click', function () {
        $("#myDropdown").toggleClass("show");
    });
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('#main-menu')) {
            var dropdowns = $(".dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});