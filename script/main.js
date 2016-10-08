var time = $(".time");
var date = $(".date");
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(function() {

    var tm = new Date();
    var curent = tm.getHours() + ":" + ((tm.getMinutes() < 10 ? '0' : '') + tm.getMinutes());
    time.text(curent);
    var day = (days[tm.getDay()]).substring(0, 3);
    var month = months[tm.getMonth()];
    var dateString = day + ",  " + month + "  " + tm.getDate();
    date.text(dateString);

}, 1000);

// control panel

var control_show = $(".control-sh");
var control_menu = $(".control-main");

$(function() {
    control_show.on("click", function() {
        control_menu.toggleClass("control-vis");
    });
});

Draggable.create(".slide-b-bar", {
    type: "x",
    edgeResistance: 1,
    bounds: ".slide-w",
    throwProps: true,
    liveSnap: true,
    snap: {
        x: function(endValue) {
            $(".phone-wrapper").height(735);
            $(".phone-wrapper").height($(".phone-wrapper").height() + endValue);
            $(".bazel").height(729);
            $(".bazel").height($(".bazel").height() + endValue);
            $(".bazel-cov").height(726);
            $(".bazel-cov").height($(".bazel-cov").height() + endValue);
            $(".top-plate").height(718);
            $(".top-plate").height($(".top-plate").height() + endValue);
            return Math.round(endValue / 1) * 1;
        }
    }
});

Draggable.create(".slide-w-bar", {
    type: "x",
    edgeResistance: 1,
    bounds: ".slide-w",
    throwProps: true,
    liveSnap: true,
    snap: {
        x: function(endValue) {
            $(".phone-wrapper").width(365);
            $(".phone-wrapper").width($(".phone-wrapper").width() + endValue * 2);
            $(".bazel").width(359);
            $(".bazel").width($(".bazel").width() + endValue * 2);
            $(".bazel-cov").width(356);
            $(".bazel-cov").width($(".bazel-cov").width() + endValue * 2);
            $(".top-plate").width(348);
            $(".top-plate").width($(".top-plate").width() + endValue * 2);
            return Math.round(endValue / 1) * 1;
        }
    }
});

var wrap_b = $(".phone-wrapper").css("border-radius").slice(0, -2);
var bazel_b = $(".bazel").css("border-radius").substring(0, 2);
var bazel_cov_b = $(".bazel-cov").css("border-radius").substring(0, 2);
var plate_b = $(".top-plate").css("border-radius").substring(0, 2);

Draggable.create(".slide-h-bar", {
    type: "x",
    edgeResistance: 1,
    bounds: ".slide-w",
    throwProps: true,
    liveSnap: true,
    snap: {
        x: function(endValue) {
            $(".phone-wrapper").css("border-radius", parseInt(wrap_b));
            $(".phone-wrapper").css("border-radius", parseInt(wrap_b) + endValue / 3 + "px");
            $(".bazel").css("border-radius", parseInt(bazel_b));
            $(".bazel").css("border-radius", parseInt(bazel_b) + endValue / 3 + "px");
            $(".bazel-cov").css("border-radius", parseInt(bazel_cov_b));
            $(".bazel-cov").css("border-radius", parseInt(bazel_cov_b) + endValue / 3 + "px");
            $(".top-plate").css("border-radius", parseInt(plate_b));
            $(".top-plate").css("border-radius", parseInt(plate_b) + endValue / 3 + "px");
            return Math.round(endValue / 1) * 1;
        }
    }
});
