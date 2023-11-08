// add class open-box
let iconSetting = document.querySelector(".setting-box .icon-setting");
iconSetting.onclick = () => {
  document.querySelector(".setting-box").classList.toggle("box-open");
};

// switch local storage color
let colorsItem = localStorage.getItem("color-item");
console.log(colorsItem);
if (colorsItem !== null) {
  //change main-color in local storage
  document.documentElement.style.setProperty("--main-color", colorsItem);

  //change tranparent-color in local storage
  document.documentElement.style.setProperty("--transparent-color", colorsItem);

  //remove class active from all li in local storage
  document.querySelectorAll(".colors-list li").forEach((ele) => {
    //remove class active form all li
    ele.classList.remove("active");

    //add class active for main color li
    if (ele.getAttribute("data-color") == colorsItem) {
      ele.classList.add("active");
    }
  });
}


// change colors
let colorsLi = document.querySelectorAll(".colors-list li");
// loop for li
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // chamge main-color and transparent-color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    document.documentElement.style.setProperty(
      "--transparent-color",
      e.target.dataset.color
    );
    // add colors to the local storage
    localStorage.setItem("color-item", e.target.dataset.color);
    // remove class active
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    // add class active
    e.currentTarget.classList.add("active");
  });
});

// change image eveery 10 minutes
let landing = document.querySelector(".landing");
let arrayImages = [
  "shuffle01.jpg",
  "shuffle02.jpeg",
  "shuffle03.jpg",
  "shuffle04.jpg",
];

// backgroundoption value
let backgroundOption = true;


// background random interval control
let backgroundInterval;


// switch local storage random background;
let backgroundItem  = localStorage.getItem("background-item");

if (backgroundItem !== null) {

    if (backgroundItem === "true") {
        backgroundOption = true;
    }else {
        backgroundOption = false ;
    }

    document.querySelectorAll(".random-background span").forEach(ele =>{
        ele.classList.remove("active");

        if (backgroundItem === "true") {
            document.querySelector(".random-background .yes").classList.add("active")
        }else {
            document.querySelector(".random-background .no").classList.add("active")
        }
    })
}

// function for recognized true and yes in random background
function recognized() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      let randomImageIndex = Math.floor(Math.random() * arrayImages.length);
      landing.style.backgroundImage =
        'url("images/' + arrayImages[randomImageIndex] + '")';
    }, 1000);
  }
}
recognized();



//change class active from random background
    let spanbackgroung = document.querySelectorAll(".random-background span");
    spanbackgroung.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
        // remove class active
            ele.classList.remove("active");

        });
        // add class active
            e.target.classList.add("active");
        
        // 
            if (e.target.dataset.background === "yes") {
                backgroundOption = true;
                recognized();
                localStorage.setItem("background-item", true)
            }else {
                backgroundOption = false;
                clearInterval(backgroundInterval);
                localStorage.setItem("background-item", false)
            }
    });
    });


    // function slider for prev and next

    var slider_img = document.querySelector(".sliderImage");
    var images = ['shuffle01.jpg' ,'shuffle02.jpeg' ,'shuffle03.jpg' ,'shuffle04.jpg'];
    var i = 0;

    function prev() {
      if (i <= 0) 
      i = images.length;
      i--;
      return setImg();
    }

    function next() {
      if(i >= images.length-1) i = -1;
      i++;
      return setImg();
    }

    function setImg() {
      return slider_img.setAttribute("src","../images/" + images[i])
    }