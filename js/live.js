'use strict';
particlesJS.load('particles-js', '/assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
var schedule = {
    "1": "9 AM",
    "2": "10 AM",
    "3": "10:30 AM",
    "4": "11:30 AM",
    "5": "12:00 PM",
    "6": "12:30 PM",
    "7": "13:30 PM",
    "8": "14:00 PM",
    "9": "14:40 PM",
    "10": "15:20 PM",
    "11": "16:30 PM",
    "12": "17:00 PM",
    "13": "17:30 PM",
    "14": "18:00 PM",
    "15": "18:30 PM",
    "16": "19:00 PM"
};

window.setInterval(function() {
    $("#time").text(`${moment().format("hh:mm:ss A | Do MMM YYYY")}`);
}, 1000);
for(var slot in schedule){
    if(moment(moment()).isAfter(moment(schedule[slot],"HH:mm A"))) {
        $(`#schedule > tr:nth-child(${slot})`).addClass('done');
        $(`#schedule > tr:nth-child(${slot+1})`).addClass('current');
    }

};
