let background = document.querySelector(".background");
let slidebtn = document.querySelector(".slidebtns");
let slideHeader = document.querySelector(".textheader");
let description = document.querySelector(".subtext");

let clas = ["background1", "background2", "background3"];

let head = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

let subtext = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

slidebtn.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.className == "slidebtn" || e.target.id == "hey") {
    while (background.classList[1]) {
      background.classList.remove(background.classList[1]);
      clas.push(clas[0]);
      head.push(head[0]);
      subtext.push(subtext[0]);
      clas.shift();
      head.shift();
      subtext.shift();
    }

    background.classList.add(clas[0]);
    slideHeader.innerText = head[0];
    description.innerText = subtext[0];
  }
});
