d1 = 0;
d2 = 0;

$("#btn-cima").click(() =>{
        d1 -= 10 
        $("#anima-div").animate({ top: d1 + "vh" }, { duration: 200 })
        $("#anima-div").removeClass("anima-div-3").addClass("anima-div")
    }
)

$("#btn-baixo").click(() =>{
        d1 += 10  
        $("#anima-div").animate({ top: d1 + "vh" }, { duration: 200 })
        $("#anima-div").removeClass("anima-div-3").addClass("anima-div")
    }
)

$("#btn-esquerda").click(() =>{
        d2 -= 5
        $("#anima-div").animate({ left:d2 +"vw" }, { duration: 200 })
        $("#anima-div").removeClass("anima-div-3 anima-div").addClass("anima-div-2")
    }
)

$("#btn-direita").click(() =>{
        d2 += 5
        $("#anima-div").animate({ left: d2 + "vw" }, { duration: 200 } )
        $("#anima-div").removeClass("anima-div-3 anima-div-2").addClass("anima-div")
    }
)

$("#btn-meio").click(() => {
    $("#anima-div").removeClass("anima-div").addClass("anima-div-3")
})



