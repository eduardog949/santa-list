let buttEl = document.getElementById("butt-el");
let myInput = document.getElementById("myinput");

let words = [
  "Oof, too soon to tell! Come back later with milk and cookies.",  
  "Santa hasn't decided yet, make sure to listen to your parents!",
  "Santa is working on it, keep being good!",
  "Come back closer to Christmas to see what Santa says!"
];

function refresh(){
  buttEl.textContent = "Find out if you are on the naughty or nice list!";
  }

function random() {
  const input = document.getElementById("myInput");
  const value = input.value.trim();
  const randomIndex = Math.floor(Math.random() * words.length);
  buttEl.textContent = words[randomIndex];
  
  if (value === "") {
    buttEl.textContent = "Please enter a valid name"
  } else if (value === "Eden Gutierrez") {
    buttEl.textContent = "Congratulations Eden, you have made it on Santa's nice list!"
  } else if (value === "David Marquez") {
    buttEl.textContent = "Congrats dude, you are on the nice list!"
  } else if (value === "Lucy Gutierrez") {
    buttEl.textContent = "Congratulations Lucy, you have made it on Santa's nice list!"
  } else if (value === "Bella Gutierrez") {
    buttEl.textContent = "Congratulations Bella, you have made it on Santa's nice list!"
  } else if (value === "Jacob Marquez") {
    buttEl.textContent = "Congratulations, word around the North Pole is.. you made it on the nice list!"
  } else {
    buttEl.textContent = "We all do some things we aren't supposed to! You barely made the cut this year but make sure you are extra good next year!"
  }
}

  
  

//adding snowfall//


document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector(".snow-container");

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 1.25;
    const pauseWhenNotActive = true;
    const maxSnowflakes = 200;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
        const size = Math.random() * 5 + 1;
        const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
        const viewportHeight = window.innerHeight;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
        snowflake.style.top = `-${size}px`;

        const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = "linear";
        snowflake.style.animationName =
            Math.random() < 0.5 ? "fall" : "diagonal-fall";

        setTimeout(() => {
            if (parseInt(snowflake.style.top, 10) < viewportHeight) {
                resetSnowflake(snowflake);
            } else {
                snowflake.remove(); // Remove when it goes off the bottom edge
            }
        }, animationDuration * 1000);
    }

    function createSnowflake() {
        if (snowflakes.length < maxSnowflakes) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflakes.push(snowflake);
            snowContainer.appendChild(snowflake);
            resetSnowflake(snowflake);
        }
    }

    function generateSnowflakes() {
        const numberOfParticles =
            Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
            particlesPerThousandPixels;
        const interval = 5000 / numberOfParticles;

        clearInterval(snowflakeInterval);
        snowflakeInterval = setInterval(() => {
            if (isTabActive && snowflakes.length < maxSnowflakes) {
                requestAnimationFrame(createSnowflake);
            }
        }, interval);
    }

    function handleVisibilityChange() {
        if (!pauseWhenNotActive) return;

        isTabActive = !document.hidden;
        if (isTabActive) {
            generateSnowflakes();
        } else {
            clearInterval(snowflakeInterval);
        }
    }

    generateSnowflakes();

    window.addEventListener("resize", () => {
        clearInterval(snowflakeInterval);
        setTimeout(generateSnowflakes, 1000);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
});




Resources