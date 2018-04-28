function unixToDate(unix_time) {
    return new Date(unix_time*1000);
}

function getTimeString(unix_time) {
    const date = unixToDate(unix_time);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    return hours + ":" + minutes + ":" + seconds; //because timepicker likes it like this
}

function getDateString(unix_time) {
    const date = unixToDate(unix_time);
    const day   = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year  = date.getFullYear();

    return year + "-" + month + "-" + day; //because datepicker likes it like this
}

function dateTimeToUnix(date, time) {
    //date: "yyyy-mm-dd"
    //time: "hh:mm:ss"

    const date_mod = date.replace("-", "/").replace("-","/"); //change to yyyy/mm/dd format
    const complete_date = date_mod + " " + time;
    
    const unix_time = (new Date(complete_date)).getTime() / 1000;
    
    return Math.round(unix_time);
}

export default {
    getDateString,
    getTimeString,
    dateTimeToUnix
};