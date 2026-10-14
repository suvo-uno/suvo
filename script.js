/* =========================================
   PAGE SYSTEM
========================================= */

const pages = document.querySelectorAll(".page");

const navigation = document.getElementById("navigation");

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

const startScreen = document.getElementById("startScreen");

const startButton = document.getElementById("startButton");

const heartContainer =
    document.getElementById("heartContainer");

let currentPage = 0;


/* =========================================
   NAVIGATION MENU
========================================= */

const pageNames = [
    "Home",
    "Our Story",
    "I'm Sorry",
    "Birthday",
    "You & Me",
    "My Promise",
    "One More Chance",
    "Thank You"
];


pageNames.forEach((name, index) => {

    const button =
        document.createElement("button");

    button.textContent = name;

    button.addEventListener("click", () => {

        showPage(index);

    });

    navigation.appendChild(button);

});


/* =========================================
   SHOW PAGE
========================================= */

function showPage(index) {

    if (index < 0) {
        index = pages.length - 1;
    }

    if (index >= pages.length) {
        index = 0;
    }

    currentPage = index;


    pages.forEach((page, i) => {

        page.classList.toggle(
            "active",
            i === currentPage
        );

    });


    document
        .querySelectorAll("#navigation button")
        .forEach((button, i) => {

            button.classList.toggle(
                "active",
                i === currentPage
            );

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (currentPage === 3) {

        birthdayConfetti();

    }

}


/* =========================================
   NEXT BUTTON
========================================= */

document
    .querySelectorAll(".next-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            showPage(currentPage + 1);

        });

    });


/* =========================================
   BACK BUTTON
========================================= */

document
    .querySelectorAll(".back-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            showPage(currentPage - 1);

        });

    });


/* =========================================
   START EXPERIENCE
========================================= */

startButton.addEventListener(
    "click",
    () => {

        music.play().catch(() => {});

        startScreen.classList.add("hide");

        showPage(0);

        createHearts(12);

    }
);


/* =========================================
   MUSIC BUTTON
========================================= */

musicButton.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play();

            musicButton.textContent = "♫";

        } else {

            music.pause();

            musicButton.textContent = "Ⅱ";

        }

    }
);


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts(amount = 10) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            ["♡", "♥", "❤", "💗", "💕"]
            [
                Math.floor(
                    Math.random() * 5
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            15 + Math.random() * 10 + "px";

        heart.style.animationDelay =
            Math.random() * 1 + "s";

        heartContainer.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 4500);


        
        

    }

}




/* =========================================
   BIRTHDAY WISH
========================================= */

const wishButton =
    document.getElementById("wishButton");

const wishText =
    document.getElementById("wishText");

wishButton.addEventListener(
    "click",
    () => {

        wishText.textContent =
            "✨ Wish made! May every beautiful dream of yours come true. ✨";

        birthdayConfetti();

        createHearts(20);

    }
);


/* =========================================
   BIRTHDAY CONFETTI
========================================= */

function birthdayConfetti() {

    const container =
        document.getElementById("confetti");

    if (!container) return;


    const symbols = [
        "✦",
        "✧",
        "♥",
        "♡",
        "•",
        "🎀"
    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const piece =
            document.createElement("span");

        piece.className =
            "confetti-piece";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            12 + Math.random() * 18 + "px";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        container.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 4500);

    }

}


/* =========================================
   ONE MORE CHANCE ANSWERS
========================================= */

const choices =
    document.querySelectorAll(".choice");

const answerMessage =
    document.getElementById("answerMessage");


choices.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const answer =
                button.dataset.answer;


            if (answer === "yes") {

                answerMessage.textContent =
                    "Then let's take it slowly... and make the next chapter more beautiful. ♡";

                createHearts(25);

            }


            if (answer === "maybe") {

                answerMessage.textContent =
                    "Take all the time you need. I will respect your heart and your space. ♡";

                createHearts(10);

            }


            if (answer === "no") {

                answerMessage.textContent =
                    "I understand. Thank you for listening to everything I wanted to say. ♡";

            }

        }
    );

});


/* =========================================
   RESTART
========================================= */

document
    .getElementById("restartButton")
    .addEventListener(
        "click",
        () => {

            showPage(0);

            createHearts(15);

        }
    );


/* =========================================
   INITIAL PAGE
========================================= */

showPage(0);