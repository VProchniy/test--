const button = document.querySelector('button');
let input = document.querySelector('.age');
button.onclick = () => {
  // => соответсвует function(анонимная финкция)
  let num = +input.value;
  if (num >= 16 && num < 60) {
    alert('welcom!!');
  } else if (num >= 60) {
    alert('yu fak!!');
  } else {
    alert('No!!');
  }
};
