const form =document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display="block";

  let xhr=new XMLHttpsRequest();
  xhr.open("POST","message.php",true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let respone = xhr.response;
      if(response.indexOf("Email and Name field is required") != -1 || response.indexOf("Ender a valid email address") || response.indexOf("Sorry, faild to send your message!") ){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeoute(()=>{
          statusTxt.style.display="none";
        }, 3000);
      }
      statusTxt.innerText = respone;
    }
  }
  let firmData = new FormData();
  xhr.send();

}