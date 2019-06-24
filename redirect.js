function redirect_to(params){
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) +
        "/" + currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes();
    var dateAfter = new Date('2018-10-25T18:53:00'); // Altere a data Ano-Mes-Dia-Horario.

    if (currentdate >= dateAfter)
    {
        location.href = `${params.url}`;
    }

}
