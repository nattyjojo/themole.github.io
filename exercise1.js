export const exercise1 = () =>{

    // creat elements to display result
    const displayProut = document.createElement("p")
    Object.assign(displayProut.style,{
        display: "inline-block"
    })
    const displayTimeElasped = document.createElement("p")
    Object.assign(displayTimeElasped.style,{
        display: "inline-block"
    })
    const displaycontainer = document.createElement("section")
    /*style displaycontainer */
    Object.assign(displaycontainer.style,{
        width: "50vw",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyContent: "space-between",
        padding: "20px",
        fontSize: "20px",
        textAlign: "center",
        marginLeft: "33%",
    })
    displaycontainer.append(displayProut, displayTimeElasped)

    const display = document.querySelector(".displayIntervals")
    display.append(displaycontainer)
    
    /*
        Exercise 1

        Write a function that mimics the behaviour of a typewriter.
        Using setInterval display the word prout one character at a time (one letter per second). 
        Once the word is written on the screen clear the interval.
        
    */
    let indexProut = 0;
    let Prout = "prout";
    const typewriter = () => {
        displayProut.textContent=Prout[indexProut]
        indexProut ++;
        if(indexProut === Prout.length){
            clearInterval(interval)
            setTimeout(() => displayProut.textContent = Prout, 2000);    


        }
    }
    let interval =  setInterval(typewriter, 1000);

    /*
    Exercise 2

    Write a function that displays every second that has passed on the page since it was opened. 
    The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed",
    then "2 minutes have passed" (for 120 seconds and more), etc.
    */

    let seconds = 0;
    let minutes = 0;
    const milSec = 1000;
    const timeSpent = () =>{    
        if(minutes > 0){
            displayTimeElasped.textContent=`${minutes} minutes ${seconds} Second has passed`;
            if(seconds===60){
                seconds = 0;
                minutes ++
            }
        }else{
            seconds <= 60
            displayTimeElasped.textContent=`${seconds} Second has passed`;
            if(seconds===60){
                seconds = 0;
                minutes ++

            }
        }
    
        seconds ++;
    }
    const addinterval = setInterval(timeSpent, milSec);
}
