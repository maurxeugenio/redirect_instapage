function redirect_to(params){
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) +
        "/" + currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes();

    var dateAfter = new Date(`${params.year}-${params.month}-${params.day}T${params.hour}:${params.minute}:00`);

    if (currentdate >= dateAfter)
    {
        location.href = `${params.url}`;
    }
}
