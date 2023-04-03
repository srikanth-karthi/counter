var endDate;
   function myfunction ()
{
   endDate = document.getElementById("res").value;
   document.getElementById("end-date").innerText = endDate ;
   
}


const inputs = document.querySelectorAll("input")




function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0)return;
    {
      
    inputs[1].value = Math.floor(diff / 3600 / 24);
    inputs[2].value = Math.floor(diff / 3600) % 24;
    inputs[3].value = Math.floor(diff / 60) % 60;
    inputs[4].value = Math.floor(diff) % 60;
    }
   
    

}




clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
        myfunction()
    },
    1000
)