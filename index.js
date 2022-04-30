const btns = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");

const before = document.querySelector(".before");
const after = document.querySelector(".after");

const rating = document.getElementById("yourRating");

let clickedRating = 0;

btns.forEach(function(btn){
  btn.addEventListener("click", function(){
    clickedRating = parseInt(btn.innerHTML);
    rating.textContent = clickedRating;
  });
});

submit.addEventListener("click", function(){
  if (clickedRating == 0) {
    alert("You didnt submit your rating");
  } else {
    before.classList.add("none");
    after.classList.remove("none");
  }
});
