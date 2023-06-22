let win = 0;
    let loss = 0;
export const moleAlgorithm = () =>{
    // get clicked element and verify if its a win
    
    const clicked = (btnclicked) => {
        const computedStyle = window.getComputedStyle(btnclicked);
        const clickedBgColor = computedStyle.backgroundColor
        let winElement = document.querySelector(".win");
        let lossElement = document.querySelector(".loss")
        if(clickedBgColor === "rgb(0, 128, 0)"){
            win ++;
            winElement.innerHTML= `${win} WIN`;
        }else{
            loss ++;
            lossElement.innerHTML= `${loss} LOSS`;

        }
    }
    const moles = document.querySelectorAll(".mole")
    const game = () => {
        const moleDisplay = Math.floor(Math.random() * moles.length);
        for(let i = 0; i < moles.length; i++){
            moles[i].addEventListener("click", function(event){
                clicked(event.target)
            })
            Object.assign(moles[moleDisplay].style,{
                backgroundColor: "rgb(0, 128, 0)",
            })
            setTimeout(() =>{
                Object.assign(moles[moleDisplay].style,{
                    backgroundColor: "",
                })
            }, 1500) 
        }
     
    }
    setInterval(game, 2000);


}
moleAlgorithm()
/*

 
*/