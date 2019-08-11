export function getToday(){
    let today = new Date();
    let timeStamp = new Date().getTime();
    var weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const day = weekday[today.getDay()];
    today =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      return [day, today, timeStamp]
}