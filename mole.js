export const moleExercise = () =>{
        // Exercise 3 - Whack-A-Mole

    const moleSection = () => {
        let mole = undefined;
        const Whack_A_Mole_Container = document.createElement("main");
        Whack_A_Mole_Container.setAttribute("class", "Whack_A_Mole_Container");
        for(let i = 0; i < 12; i++){
            mole = document.createElement("button")
            mole.setAttribute("class", "mole")
            Whack_A_Mole_Container.append(mole)

        }
        
        const loss = document.createElement("p")
        loss.setAttribute("class", "loss")
        loss.innerHTML = `0 <br> LOSS`
        Object.assign(loss.style,{
            backgroundColor: "red",
            color: "white",
            display: "inline-block",
            width: "50px",
            padding: "10px 20px",
            border: "1px solid grey",
            borderRadius: "10px",
            textAlign: "center",
        })
        const start = document.createElement("p")
        start.setAttribute("class", "start");
        start.textContent= "START";
        Object.assign(start.style,{
            margin: "0% 18%",
            backgroundColor: "blue",
            color: "white",
            display: "inline-block",
            width: "50px",
            padding: "10px 20px",
            border: "1px solid grey",
            borderRadius: "10px",
            cursor: "pointer",
            textAlign: "center",
        })

        const win = document.createElement("p")
        win.setAttribute("class", "win")
        win.innerHTML = `0 <br> win`
        Object.assign(win.style,{
            width: "50px",
            padding: "10px 20px",
            border: "1px solid grey",
            borderRadius: "10px",
            backgroundColor: "green",
            color: "white",
            display: "inline-block",
            textAlign: "center",
        })


        const details = document.createElement("section")
        Object.assign(details.style,{
            padding: "20px",
            backgroundColor: "orange",
            marginTop: "10px",
            border: "2px solid orange",
            borderRadius: "10px",
        })
        details.append(loss, start, win)


        const Whack_A_Mole_wrapper = document.createElement("section");
        Whack_A_Mole_wrapper.setAttribute("class", "Whack_A_Mole_wrapper");
        Whack_A_Mole_wrapper.append(Whack_A_Mole_Container,details)
        const display = document.querySelector(".displayIntervals")
        Object.assign(display.style,{
            margin: "0",
            padding: "10px",
        })
        display.appendChild(Whack_A_Mole_wrapper)
        
    }
    moleSection()

    // styling for moleSection

    const moleSectionStyle = () =>{
        const Whack_A_Mole_wrapper = document.querySelector(".Whack_A_Mole_wrapper");
        Object.assign(Whack_A_Mole_wrapper.style,{
            borderRadius: "1px solid black",
            padding: "20px",
            width: "90vw",
            display: "grid",
            justifyContent: "space-around",

        })

        const moles = document.querySelectorAll(".mole")
        moles.forEach((mole, index) =>{
            Object.assign(mole.style,{
                border: "2px solid white",
                borderRadius: "100%",
                width: "100px",
                height: "100px",
                margin: "10px",
                cursor: "pointer",
            })
        })
    }
    moleSectionStyle()

    const Whack_A_Mole_ContainerStyle = () =>{
        const Whack_A_Mole_Container = document.querySelector(".Whack_A_Mole_Container")
        Object.assign(Whack_A_Mole_Container.style,{
            borderRadius: "1px solid darkgrey",
            borderRadius: "10px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyContent: "space-between",
            backgroundColor: "#f0e7e7"
        })
    }
    Whack_A_Mole_ContainerStyle()

}