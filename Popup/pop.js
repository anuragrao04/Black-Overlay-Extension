var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var apply_checkbox = document.getElementById("apply-checkbox");
var opacity_div = document.getElementById("Black-Overlay");
output.innerHTML = slider.value * 100 + "%"; // Display the default slider value

if (!apply_checkbox.checked) {
  opacity_div.style.opacity = 0;
}


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  let val = this.value;
  if (!apply_checkbox.checked) {
    val = 1;
  }
  let params = {
    active: true,
    currentWindow: true
  }

  function gotTabs(tabs) {
    let msg = {
      value: val
    }
    chrome.tabs.sendMessage(tabId = tabs[0].id, message = msg);
  }

  chrome.tabs.query(params, gotTabs);

}


apply_checkbox.oninput = function() {
  if (!apply_checkbox.checked) {
    output.innerHTML = "0";
    let val = 1;
    let params = {
      active: true,
      currentWindow: true
    }

    function gotTabs(tabs) {
      let msg = {
        value: val
      }
      chrome.tabs.sendMessage(tabId = tabs[0].id, message = msg);
    }

    chrome.tabs.query(params, gotTabs);

  }
}
