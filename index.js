function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".material-icons")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// modal functionality //
let modal;
let img;
let modalImg;
let captionText;

function showModal1() {
  modal = document.getElementById("modal1");
  modal.style.display = "block";

  img = document.getElementById("img1");
  modalImg = document.getElementById("imgm1");
  modalImg.src = img.src;
}

function showModal2() {
  modal = document.getElementById("modal2");
  modal.style.display = "block";

  img = document.getElementById("img2");
  modalImg = document.getElementById("imgm2");
  modalImg.src = img.src;
}

function showModal3() {
  modal = document.getElementById("modal3");
  modal.style.display = "block";

  img = document.getElementById("img3");
  modalImg = document.getElementById("imgm3");
  modalImg.src = img.src;
}

const span = document.getElementsByClassName("close")[0];

function closeModal1() {
  const modal = document.getElementById("modal1");

  modal.style.display = "none";
}

function closeModal2() {
  const modal = document.getElementById("modal2");

  modal.style.display = "none";
}

function closeModal3() {
  const modal = document.getElementById("modal3");

  modal.style.display = "none";
}
