document.querySelector("#submit_button").onclick=function(){
    var input=document.querySelector("#input-text").value;
    
    // console.log(input);
    // alert("button is clicked");

    document.querySelector("#message").textContent=input;
}