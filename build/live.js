'use strict';

particlesJS.load('particles-js', '/assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
//var schedule = {
//    "1": "9 AM",
//    "2": "10 AM",
//    "3": "10:30 AM",
//    "4": "11:30 AM",
//    "5": "12:00 PM",
//    "6": "12:30 PM",
//    "7": "13:30 PM",
//    "8": "14:00 PM",
//    "9": "14:40 PM",
//    "10": "15:20 PM",
//    "11": "16:30 PM",
//    "12": "17:00 PM",
//    "13": "17:30 PM",
//    "14": "18:00 PM",
//    "15": "18:30 PM",
//    "16": "19:00 PM"
//};
var schedule = {
    "1": "10 AM",
    "2": "10:30 AM",
    "3": "11:30 AM",
    "4": "12:00 AM",
    "5": "12:30 PM",
    "6": "13:30 PM",
    "7": "14:00 PM",
    "8": "14:40 PM",
    "9": "15:20 PM",
    "10": "16:30 PM",
    "11": "17:00 PM",
    "12": "17:30 PM",
    "13": "18:00 PM",
    "14": "18:30 PM",
    "15": "19:00 PM",
    "16": "19:01 PM"
};
//INITIAL RUN
//Clear current
for (var slot in schedule) {
    $('#schedule > tr:nth-child(' + slot + ')').removeClass('current done');
};
for (var slot in schedule) {
    console.log(slot + ' ' + moment(moment()).isAfter(moment(schedule[slot], "HH:mm A")));
    if (moment(moment()).isAfter(moment(schedule[slot], "HH:mm A"))) {
        $('#schedule > tr:nth-child(' + slot + ')').addClass('done');
        current = parseInt(slot) + 1;
    };
};
$('#schedule > tr:nth-child(' + current + ')').addClass('current');
//END OF INITIAL RUN
//Start time
window.setInterval(function () {
    $("#time").text('' + moment().format("hh:mm:ss A | Do MMM YYYY"));
}, 1000);

var current = 0;
window.setInterval(function () {
    //Clear current
    for (var slot in schedule) {
        $('#schedule > tr:nth-child(' + slot + ')').removeClass('current done');
    };
    for (var slot in schedule) {
        console.log(slot + ' ' + moment(moment()).isAfter(moment(schedule[slot], "HH:mm A")));
        if (moment(moment()).isAfter(moment(schedule[slot], "HH:mm A"))) {
            $('#schedule > tr:nth-child(' + slot + ')').addClass('done');
            current = parseInt(slot) + 1;
        };
    };
    $('#schedule > tr:nth-child(' + current + ')').addClass('current');
}, 60000);