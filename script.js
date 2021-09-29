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
};

// get current time from moment() and display it every second

function displayDateTime() {
  var displayTime = setInterval(function () {
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    dateTime.text(date);
  }, 1000);
}

// get locally saved data, if any, and deliver it to the schedule object

function getSchedule() {
  var storedSchedule = JSON.parse(localStorage.getItem("dailyPlanner"));

  if (storedSchedule !== null) {
    schedule = storedSchedule;
    $.each(schedule, function (key, value) {
      var display = $("#" + key);
      display.text(value);
    });
  }
}

// get current 24 clock hour from moment() and then add present or future to 
// each hour block - they default to the past color

function colorize() {
  var colorizeTime = moment().format("H");

  if (colorizeTime === "9") {
    $("#nine").addClass("present");
    $("#ten ,#eleven ,#twelve ,#one ,#two ,#three ,#four ,#five").addClass(
      "future"
    );
  }
  if (colorizeTime === "10") {
    $("#ten").addClass("present");
    $("#eleven ,#twelve ,#one ,#two ,#three ,#four ,#five").addClass("future");
  }
  if (colorizeTime === "11") {
    $("#eleven").addClass("present");
    $("#twelve ,#one ,#two ,#three ,#four ,#five").addClass("future");
  }
  if (colorizeTime === "12") {
    $("#twelve").addClass("present");
    $("#one ,#two ,#three ,#four ,#five").addClass("future");
  }
  if (colorizeTime === "13") {
    $("#one").addClass("present");
    $("#two ,#three ,#four ,#five").addClass("future");
  }
  if (colorizeTime === "14") {
    $("#two").addClass("present");
    $("#three ,#four ,#five").addClass("future");
  }
  if (colorizeTime === "15") {
    $("#three").addClass("present");
    $("#four ,#five").addClass("future");
  }
  if (colorizeTime === "16") {
    $("#four").addClass("present");
    $("#five").addClass("future");
  }
  if (colorizeTime === "17") {
    $("#five").addClass("present");
  }
}

// display the time, retrieve the schedule, and color the present and future

displayDateTime();
getSchedule();
colorize();

// listen for clicks on the save button then save the object to localStorage

saveBtn.on("click", function (event) {
  var content = $(event.target).siblings("textarea").val();
  var className = $(event.target).siblings("textarea").attr("id");
  schedule[`${className}`] = content;
  localStorage.setItem("dailyPlanner", JSON.stringify(schedule));
});
