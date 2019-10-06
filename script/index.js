window.onload = function(){
  var mobile_button = document.getElementById("mobile-button");
  mobile_button.addEventListener("click", function() {
    var mobile_text = mobile_button.children[1];
    if (mobile_text.style.maxWidth){
      mobile_text.style.maxWidth = null;
      mobile_text.style.visibility = "hidden";
      mobile_text.style.paddingLeft = null;
    } else {
      mobile_text.style.visibility = null;
      mobile_text.style.paddingLeft = 18 + "px";
      mobile_text.style.maxWidth = mobile_text.scrollWidth + "px";
    } 
  });
};