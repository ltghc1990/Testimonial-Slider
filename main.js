const backButton = document.querySelector("#back");
const fowardButton = document.querySelector("#foward");

const portrait = document.querySelector("#portrait");
const quote = document.querySelector("h1");
const name = document.querySelector(".name");
const job = document.querySelector(".job");

class User {
  constructor(name, job, img, quote) {
    this.name = name;
    this.job = job;
    this.img = img;
    this.quote = quote;
  }
}

tanya = new User(
  "Tanya Sinclair",
  "UX Engineer",
  "/images/image-tanya.jpg",
  `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
);

john = new User(
  "John Tarkpor",
  "Junior Front-end Developer",
  "/images/image-john.jpg",
  ` “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`
);

let people = [tanya, john];
let currentIndex = 0;

function setSlideIndex(parameter) {
  if (parameter === "foward") {
    currentIndex++;
    if (currentIndex === people.length) {
      currentIndex = 0;
    }
  } else {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = people.length - 1;
    }
  }
}

function changeSlide(index) {
  portrait.src = people[index].img;
  quote.innerText = people[index].quote;
  name.innerText = people[index].name;
  job.innerText = people[index].job;
}

// apply animation after changeSlide

const applyAnimation = () => {
  portrait.classList.toggle("portrait");
  quote.classList.toggle("fadeToRight");
};

// Event Listeners

window.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector(".background-art").classList.toggle("portrait");
  changeSlide(0);
  applyAnimation();
});

fowardButton.addEventListener("click", (e) => {
  setSlideIndex("foward");
  changeSlide(currentIndex);
  applyAnimation();
});

backButton.addEventListener("click", (e) => {
  setSlideIndex();
  changeSlide(currentIndex);
  applyAnimation();
});

// reset animation when animations end
portrait.addEventListener("animationend", () =>
  portrait.classList.toggle("portrait")
);

quote.addEventListener("animationend", () =>
  quote.classList.toggle("fadeToRight")
);
