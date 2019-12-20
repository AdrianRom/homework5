$(document).ready(function(){
    ///////////////////////
    var time_slots = $(".time-block");
    var today = moment();
    var right_now = today.hours();

    for(var i = 0; i < time_slots.length; i++){
        var description = $(time_slots[i]).find(".description");
        var hour = getHour($(time_slots[i]).find(".hour").text());
        if(localStorage[time_slots[i].id] != undefined){
            console.log(time_slots[i], description, localStorage[time_slots[i].id], hour);
            description.text(localStorage[time_slots[i].id]);
        }
        if(right_now == hour) description.addClass("present");
        else if(hour < right_now) description.addClass("past");
        else description.addClass("future");



    }
 
    function getHour(hourString) {

        if(hourString.includes("AM")){
            return parseInt(hourString.replace("AM",""));
        }else{
            var h = parseInt(hourString.replace("PM",""));

            if(h < 12) return h + 12;
            else return h;
        }
        
    }

    $(".saveBtn").on("click", function() {
      console.log(this);
      var value = $(this).siblings(".description").val();
      //var time = $(this).siblings(".hour").text();
      var time = $(this).parent().attr("id");
      
      localStorage.setItem(time, value);
    });
    $("#currentDay").text(moment().format('dddd, MMM Do YY'));
    ///////////////////////
});
//to get the value back?
// localStorage.setItem(value);