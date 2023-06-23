
export const moleAlgorithm = () =>{
 
    // get clicked element and verify if its a win
    let win = 0;
    let loss = 0;
    const clicked = (btnclicked) => {
        const computedStyle = window.getComputedStyle(btnclicked.target);
        const clickedBgColor = computedStyle.backgroundColor
        let winElement = document.querySelector(".win");
        let lossElement = document.querySelector(".loss")
        if(clickedBgColor === "rgb(0, 128, 0)"){
            win ++;
            winElement.innerHTML= `${win} WIN`;
        }else{
            loss ++;
            lossElement.innerHTML= `${loss} LOSS`;

        };
    };
      
    // add event listerner to all moles
    const allMoles = document.querySelectorAll(".mole")
    allMoles.forEach((mole, index) => {
        mole.addEventListener("click", clicked);
    });
    const moles = [...document.querySelectorAll(".mole")]
    const game = () => {
        let moleDisplay = Math.floor(Math.random() * moles.length);
        let generatedDisplay = moles[moleDisplay];
        Object.assign(generatedDisplay.style,{
            backgroundColor: "rgb(0, 128, 0)",
        })
         setTimeout(() =>{
            Object.assign(generatedDisplay.style,{
                backgroundColor: "",
            })
        }, 2000);
     
    };
    const startGame = () =>{
        setInterval(game, 3000);
      
    }
    let startElement = document.querySelector(".start")
    console.log(startElement)
    startElement.addEventListener("click", startGame);
    console.log(startElement)
   
    
}
