const cards = document.getElementById("cards");
const button = document.getElementById("button");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3= document.getElementById("card3");
const card4 = document.getElementById("card4");

const partOne = ["assets/img/1_1.jpg",
    "assets/img/1_2.jpg",
    "assets/img/1_3.jpg",
    "assets/img/1_4.jpg",
    "assets/img/1_5.jpg",
    "assets/img/1_6.jpg",
    "assets/img/1_7.jpg",
    "assets/img/1_8.jpg",
    "assets/img/1_9.jpg",
    "assets/img/1_10.jpg",];

const partTwo = ["assets/img/2_1.jpg",
    "assets/img/2_2.jpg",
    "assets/img/2_3.jpg",
    "assets/img/2_4.jpg",
    "assets/img/2_5.jpg",
    "assets/img/2_6.jpg",
    "assets/img/2_7.jpg",
    "assets/img/2_8.jpg",
    "assets/img/2_9.jpg",
    "assets/img/2_10.jpg",];

const partThree = ["assets/img/3_1.jpg",
    "assets/img/3_2.jpg",
    "assets/img/3_3.jpg",
    "assets/img/3_4.jpg",
    "assets/img/3_5.jpg",
    "assets/img/3_6.jpg",
    "assets/img/3_7.jpg",
    "assets/img/3_8.jpg",
    "assets/img/3_9.jpg",
    "assets/img/3_10.jpg",];
    
const partFour = ["assets/img/4_1.jpg",
    "assets/img/4_2.jpg",
    "assets/img/4_3.jpg",
    "assets/img/4_4.jpg",
    "assets/img/4_5.jpg",
    "assets/img/4_6.jpg",
    "assets/img/4_7.jpg",
    "assets/img/4_8.jpg",
    "assets/img/4_9.jpg",
    "assets/img/4_10.jpg",];

window.onload = () => generateRandomPicture();

button.addEventListener("click", () => generateRandomPicture());

function generateRandomPicture() {
    let randomNum = Math.floor(Math.random() * partOne.length);
    let randomNum2 = Math.floor(Math.random() * partTwo.length);
    let randomNum3 = Math.floor(Math.random() * partThree.length);
    let randomNum4 = Math.floor(Math.random() * partFour.length);
    card1.setAttribute("src", partOne[randomNum]);
    card2.setAttribute("src", partTwo[randomNum2]);
    card3.setAttribute("src", partThree[randomNum3]);
    card4.setAttribute("src", partFour[randomNum4]);

}






