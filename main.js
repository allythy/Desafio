$(document).ready(


    $("#btn").on("click", function()
    {
      if($("#pergunta").val() == "pizza"){
        Materialize.toast('47697a 2D 323A3037', 8000)
      }
      else{
        Materialize.toast('Tente novamente', 4000)
      }
    })

);
