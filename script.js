var dateTime = $("#dateTime");
var saveBtn = $(".saveBtn");

var schedule = {
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
    }


function displayDateTime() {
  var displayTime = setInterval(function () {
    var date = new Date();
    var time = (new Date()).toTimeString().substr(0,8);
    var fullDate =
      date.toLocaleString("default", { weekday: "long" }) +
      ", " +
      date.toLocaleString("default", { month: "long" }) +
      " " +
      date.getDate() +
      " " +
      date.getFullYear();
    dateTime.text(fullDate + " " + time);
  }, 1000);
}

function getSchedule() {
    var storedSchedule = JSON.parse(localStorage.getItem("dailyPlanner"));

    if (storedSchedule !== null) {
        schedule = storedSchedule;
        $.each(schedule, function(key, value) {
            var display = $('.' + key);
            display.text(value);
        })
    }
}

displayDateTime();
getSchedule();


saveBtn.on('click', function(event) {
    var content = $(event.target).siblings("textarea").val();
    var className = $(event.target).siblings("textarea").attr('class');
    schedule[`${className}`] = content;
    localStorage.setItem("dailyPlanner", JSON.stringify(schedule));
})

