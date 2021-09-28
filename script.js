var dateTime = $("#dateTime");

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

displayDateTime();
