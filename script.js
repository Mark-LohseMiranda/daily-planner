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
            var display = $('#' + key);
            display.text(value);

        })
    }
}

function colorize() {
    // var colorizeTime = (new Date()).toTimeString().substr(0,2);
    // var test = new Date();
    // console.log(test.toLocaleString('en-GB'));
    // var colorizeTime = 10;
    // console.log(colorizeTime);

    var colorizeTime = new Date();
    var hours = colorizeTime.getHours();
    console.log(hours);
    
    if (colorizeTime === '09') {
        $('#nine').addClass('present');
        $('#ten ,#eleven ,#twelve ,#one ,#two ,#three ,#four ,#five').addClass('future');
    };
    if (colorizeTime === '10') {
        $('#ten').addClass('present');
        $('#eleven ,#twelve ,#one ,#two ,#three ,#four ,#five').addClass('future');
    };
    if (colorizeTime === '11') {
        $('#eleven').addClass('present');
        $('#twelve ,#one ,#two ,#three ,#four ,#five').addClass('future');
    };
    if (colorizeTime === '12') {
        $('#twelve').addClass('present');
        $('#one ,#two ,#three ,#four ,#five').addClass('future');
    };
    if (colorizeTime === '01') {
        $('#one').addClass('present');
        $('#two ,#three ,#four ,#five').addClass('future');
    };
    if (colorizeTime === '02') {
        $('#two').addClass('present');
        $('#three ,#four ,#five').addClass('future');
    };
    if (colorizeTime === '03') {
        $('#three').addClass('present');
        $('#four ,#five').addClass('future');
    };
    if (colorizeTime === '04') {
        $('#four').addClass('present');
        $('#five').addClass('future');
    };
    if (colorizeTime === '05') {
        $('#five').addClass('present');
    };
   
    }


displayDateTime();
getSchedule();
colorize();


saveBtn.on('click', function(event) {
    var content = $(event.target).siblings("textarea").val();
    var className = $(event.target).siblings("textarea").attr('id');
    schedule[`${className}`] = content;
    localStorage.setItem("dailyPlanner", JSON.stringify(schedule));
})

