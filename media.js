
export const responsive = () =>{
    const moles =  document.querySelectorAll(".mole")
    const mobile = window.matchMedia("(max-width: 500px)")
    const check = () =>{
        if(mobile.matches){
            document.body.style.backgroundColor="red";
           
            moles.forEach((mole, index) =>{
                Object.assign(mole.style,{
                    width:"70px",
                    height: "70px",
                })
            
           })
        }else{
            document.body.style.backgroundColor="green";
            moles.forEach((mole, index) =>{
                Object.assign(mole.style,{
                    width:"100px",
                    height: "100px",
                })
            
           })
        }

    }
   
    mobile.addEventListener("change", check)
}

