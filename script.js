const confirmBtn = document.querySelector('.confirm-order-btn');
// const confirmBox = document.querySelector('.confirm-box');

const confirmBox = document.querySelector('section');
console.log(confirmBox, confirmBtn);

confirmBtn.addEventListener('click', () => {
  confirmBox.style.display = "block";
})


