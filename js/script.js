var nama = prompt("Masukkan Nama Kamu!");
document.getElementById("nama").innerText = nama

function validateform() {
    var name = document.forms["message-form"]["full-name"].value;
    var email = document.forms["message-form"]["email"].value;
    var phone = document.forms["message-form"]["phone"].value;
    var messages = document.forms["message-form"]["messages"].value;
    
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-email").innerText = email;
    document.getElementById("sender-phone").innerText = phone;
    document.getElementById("sender-messages").innerText = messages;
    return false
}

function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var day = currentTime.toLocaleDateString(undefined, { weekday: 'long' });
    var date = currentTime.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
  
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateTimeString = day + ", " + date;
  
    document.getElementById("current-date").innerHTML = dateTimeString + " " + timeString;
  }
  
  setInterval(updateClock, 1000);
  
  var slideIndex = 1;
          showDivs(slideIndex);
  
          function plusDivs(n) {
              showDivs(slideIndex += n);
          }
  
          function showDivs(n){
              var i;
              var imgList = document.getElementsByClassName("img-slideshow");
              if (n > imgList.length) slideIndex = 1;
              else if (n < 1) slideIndex = imgList.length
              console.log(slideIndex);
  
              for(i = 0;i < imgList.length;i++) {
                  imgList[i].style.display = "none";
              }
  
              imgList[slideIndex - 1].style.display = "flex"
          }
  
          setInterval(() => {
              plusDivs(1);
          }, 5000);