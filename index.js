// Create a style element and add it to the document head
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  #alertBox {
    font-family: 'Inter', sans-serif;
    user-select: none;
    position: fixed;
    top: -100px;
    left: 50%;
    height: 40px;
    width: 40px;
    padding: 10px 15px 10px 55px;
    transform: translate(-50%, 0);
    border-radius: 13px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: all 300ms, color 500ms;
  }
  #alertIcon {
    height: 30px;
    width: 30px;
    background-color: transparent;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #alertIcon i {
    color: white;
    font-size: 17px;
  }
  #alertText {
    color: transparent;
    font-size: 14px;
    font-weight: 200;
  }
`;
document.head.appendChild(style);

// Create the alert box and add it to the document body
const alertBox = document.createElement('div');
alertBox.id = 'alertBox';
alertBox.innerHTML = `
  <div id="alertIcon"></div>
  <div id="alertText"></div>
`;
document.body.appendChild(alertBox);

const alertText = document.querySelector('#alertText');
const alertIcon = document.querySelector('#alertIcon');

let delay = 500;
let notificationAllowance = true;

function notify(text, type, duration) {
  if (notificationAllowance) {
    notificationAllowance = false;
    alertText.innerText = text;
    alertBox.style.top = '20px';
    alertBox.style.padding = '10px 15px 10px 15px';
    if (type === 'error') {
      alertBox.style.backgroundColor = 'hsla(0, 100%, 40%, 0.6)';
      alertIcon.style.backgroundColor = 'hsla(0, 80%, 50%, 0.6)';
      alertIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    } else if (type === 'success') {
      alertBox.style.backgroundColor = 'hsla(120, 100%, 40%, 0.6)';
      alertIcon.style.backgroundColor = 'hsla(120, 80%, 50%, 0.6)';
      alertIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
    } else if (type === 'info') {
      alertBox.style.backgroundColor = 'hsla(200, 100%, 40%, 0.6)';
      alertIcon.style.backgroundColor = 'hsla(200, 80%, 50%, 0.6)';
      alertIcon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
    }
    setTimeout(() => {
      alertBox.style.width = '30vw';
      alertBox.style.padding = '10px 15px 10px 55px';
      setTimeout(() => {
        alertText.style.color = 'white';
      }, delay/2);
    }, delay);
    setTimeout(() => {
      alertText.style.color = 'transparent';
    }, duration * 1000 + delay/3*2);
    setTimeout(() => {
      alertBox.style.width = '40px';
      alertBox.style.padding = '10px 15px 10px 15px';
    }, duration * 1000 + delay);
    setTimeout(() => {
      alertBox.style.top = '-100px';
      notificationAllowance = true;
    }, duration * 1000 + delay * 2);
  } else {
    return;
  }
}

module.exports = { notify };