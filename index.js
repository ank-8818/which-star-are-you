//screens
const frontPage = document.getElementById("front-page");
const quizPage = document.getElementById("quiz");
const resultPage = document.getElementById("result");

//Elements
const questionNumberEl = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const progressFill = document.getElementById("progress-fill");
const progressBar = document.getElementById("progress");
const nextBtn = document.getElementById("next");
const startBtn = document.getElementById("start-button");
const restart = document.getElementById("restart");

const footerEl = document.querySelector("footer");

//for result page
const resultImage = document.querySelector("#result-image");
const resultTitle = document.querySelector("#result-content h2");
const resultCoreIdeal = document.querySelector(".core-ideal");
const resultText = document.querySelector(".result-text p");
const resultQuote = document.querySelector(".result-quote");
const scientificFact = document.querySelector("#scientific-fact");
const scientificToggle = document.getElementById("scientific-toggle");


//cursor
const cursorGlow = document.getElementById("cursor-glow");


//array of questions

const questions = [
     {
    text: "Your group project is falling apart two days before the deadline. What's your move?",
    options: [
      { label: "Clear my schedule and go all in. I'll push through the night if that's what it takes.", points: { betelgeuse: 2, pulsar: 1 } },
      { label: "Quietly pick up the unfinished pieces and keep working steadily until they're done.", points: { proxima: 2, polaris: 1 } },
      { label: "Scrap the broken plan, rebuild it from scratch, and set a strict schedule.", points: { pulsar: 2, betelgeuse: 1 } },
      { label: "Call everyone together, lift the mood, and get the team excited again.", points: { sirius: 2, sun: 1 } },
    ],
  },
  {
    text: "A friend calls you late at night, upset and unsure what to do. You...",
    options: [
      { label: "Offer to come over, make them something warm, and take care of them.", points: { sun: 2, proxima: 1 } },
      { label: "Help them sort out the situation and lay out clear steps to take.", points: { polaris: 2, sun: 1 } },
      { label: "Lighten the mood, make them laugh, and remind them how great they are.", points: { sirius: 2, betelgeuse: 1 } },
      { label: "Mostly listen, say little, and simply stay on the line as long as they need.", points: { proxima: 2, sun: 1 } },
    ],
  },
  {
    text: "You got a disappointing result on something you worked hard for. What happens next?",
    options: [
      { label: "Step back, remember why I started, and adjust my direction.", points: { polaris: 2, proxima: 1 } },
      { label: "Take some time, then rebuild my approach from the ground up.", points: { pulsar: 2, proxima: 1 } },
      { label: "Shrug it off quietly and keep working at my own pace. The long game is what matters.", points: { proxima: 2, pulsar: 1 } },
      { label: "Feel it fully, then turn that fire into something even bigger.", points: { betelgeuse: 2, pulsar: 1 } },
    ],
  },
  {
    text: "It's a free Saturday with nothing planned. What sounds best?",
    options: [
      { label: "Head out where people are: a new place, new faces, good conversation.", points: { sirius: 2, betelgeuse: 1 } },
      { label: "Cook a big meal and have family or friends over.", points: { sun: 2, sirius: 1 } },
      { label: "Try something new and thrilling that I've never done before.", points: { betelgeuse: 2, sirius: 1 } },
      { label: "Stick to my routine and practice: workout, hobby, whatever I'm working on.", points: { pulsar: 2, polaris: 1 } },
    ],
  },
  {
    text: "You've just been asked to lead a new team. Where do you begin?",
    options: [
      { label: "Build a clear rhythm: regular check-ins and a process that runs like clockwork.", points: { pulsar: 2, polaris: 1 } },
      { label: "Get everyone energized with a vision that makes people want to be part of it.", points: { sirius: 2, betelgeuse: 1 } },
      { label: "Make sure every person feels supported, heard, and has what they need.", points: { sun: 2, proxima: 1 } },
      { label: "Set clear goals and principles so everyone knows where we're headed.", points: { polaris: 2, pulsar: 1 } },
    ],
  },
  {
    text: "A storm knocks out the power at home for the whole night. What do you do?",
    options: [
      { label: "Light a candle, settle in with a book, and enjoy the calm.", points: { proxima: 2, polaris: 1 } },
      { label: "Turn it into an adventure with flashlights, stories, and a bit of drama.", points: { betelgeuse: 2, sirius: 1 } },
      { label: "Check that everyone's okay and make a plan for the night.", points: { polaris: 2, sun: 1 } },
      { label: "Gather everyone together and share food and blankets.", points: { sun: 2, sirius: 1 } },
    ],
  },
];


//order of stars matters here

const starKeys = ["sun", "polaris", "proxima", "betelgeuse", "pulsar", "sirius"];


const stars = {
  sun: {
    name: "the Sun",
    image: "./images/sun.png",
    title: "You are the Steady Giver.",
    coreIdeal: "Generosity · Reliability · Nourishment",
    description: "You may be the person others quietly rely on: the one who shows up, keeps things moving, and gives more than you realize. But being dependable doesn't mean carrying everything. Your worth doesn't grow by burning yourself out.",
    quote: "You are allowed to save some light for yourself.",
    fact: "The Sun contains about 99.8% of the mass of our Solar System—and its energy makes life on Earth possible.",
    glowColor: "rgba(255, 176, 59, 0.35)"
  },

  polaris: {
    name: "Polaris",
    image: "./images/polaris.png",
    title: "You are the Guide.",
    coreIdeal: "Guidance · Perspective · Adaptability",
    description: "You may be the person others turn to for perspective, direction, or reassurance. But a guide doesn't need to know the whole journey—or stay on the same path forever.",
    quote: "You can change direction without losing your ability to guide.",
    fact: "Polaris lies very close to Earth's north celestial pole, so it appears almost fixed in the northern sky and has long helped people find their way. But Earth's axis slowly shifts over a cycle of about 26,000 years, so Polaris won't always be the North Star.",
    glowColor: "rgba(180, 210, 255, 0.35)" 
  },

  proxima: {
    name: "Proxima Centauri",
    image: "./images/proxima.png",
    title: "You are the Quiet Endurer.",
    coreIdeal: "Patience · Persistence · Quiet strength",
    description: "You don't need to be noticed to be moving forward. Your path may be slower, quieter, or less obvious than someone else's—but that doesn't make it less meaningful.",
    quote: "Not all strength is spectacular. Some of it simply lasts.",
    fact: "Proxima Centauri is a faint red dwarf, our closest known stellar neighbor, yet it is too dim to see with the naked eye. As a low-mass star, it is expected to remain on the main sequence for trillions of years.",
    glowColor: "rgba(216, 92, 65, 0.35)"
  },

  betelgeuse: {
    name: "Betelgeuse",
    image: "./images/betelgeuse.png",
    title: "You are the Bold Blazer.",
    coreIdeal: "Audacity · Expression · Wholeheartedness",
    description: "You feel deeply, dream boldly, and aren't afraid to throw yourself into what matters. You don't have to make yourself smaller just to be easier to understand.",
    quote: "Be bold—but let your boldness have something worth burning for.",
    fact: "Betelgeuse is a red supergiant so enormous that, if it replaced the Sun, its outer atmosphere would extend beyond Jupiter's orbit. It's highly luminous, variable, and in an advanced stage of stellar evolution.",
    glowColor: "rgba(255, 122, 138, 0.35)"
  },

  pulsar: {
    name: "the Crab Pulsar",
    image: "./images/crabpulsar.png",
    title: "You are the Phoenix.",
    coreIdeal: "Rebirth · Recovery · Reinvention",
    description: "You understand that starting again doesn't always mean rebuilding what was lost. Sometimes the old form ends, and something entirely different emerges.",
    quote: "You are allowed to become something new.",
    fact: "The Crab Pulsar is the collapsed neutron-star core left behind by the supernova observed in 1054 CE. Today, it spins about 30 times each second, sending pulses of radiation into space.",
    glowColor: "rgba(147, 112, 219, 0.35)"
  },

  sirius: {
    name: "Sirius",
    image: "./images/sirius.png",
    title: "You are the Brilliant One.",
    coreIdeal: "Confidence · Brilliance · Partnership",
    description: "You may naturally catch the eye—through your talent, presence, curiosity, or energy. But shining brightly doesn't mean standing alone. Sirius A and Sirius B are part of the same system, even though one is far easier to see.",
    quote: "You don't have to dim your light to make room for someone else's.",
    fact: "Sirius is the brightest star in Earth's night sky, about 8.6 light-years away. It is part of a binary system with Sirius B, a much fainter white dwarf companion.",
    glowColor: "rgba(127, 178, 255, 0.35)"
  }

};


//cursor glow

document.addEventListener("mousemove", function(e) {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});


// hover state via delegation — catches buttons even if created later
document.addEventListener("mouseover", function(e) {
    if (e.target.tagName === "BUTTON") cursorGlow.classList.add("hovering");
});
document.addEventListener("mouseout", function(e) {
    if (e.target.tagName === "BUTTON") cursorGlow.classList.remove("hovering");
});

// click feedback
document.addEventListener("mousedown", () => cursorGlow.classList.add("clicking"));
document.addEventListener("mouseup", () => cursorGlow.classList.remove("clicking"));



//Scoring state

const scores = {};
const reachedAt = {};   //the answer number at which each star last gained points

for (let i=0; i<starKeys.length; i++) {
  const key = starKeys[i];
  scores[key] = 0;
  reachedAt[key] = 0;
};

let answerCount = 0;

//to be called when user picks an option

function addPoints(points) {
  answerCount++;
  for (const star of Object.keys(points)) {
    scores[star] += points[star];
    reachedAt[star] = answerCount;
  }
};

//FCFS
function getResult() {
  const ranked = [...starKeys].sort((a,b) => {
    if (scores[b] !== scores[a])
      return scores[b] - scores[a];
    if (reachedAt[a] !== reachedAt[b]) 
      return reachedAt[a] - reachedAt[b];

    return starKeys.indexOf(a) - starKeys.indexOf(b);
  });

  return {winner: ranked[0], runnerUp: ranked[1]};
};




//state
let currentQuestion = 0;
let selectedIndex = null;


//write the question text, clear and rebuild the four option buttons, and update the progress bar

const optionClasses = ["one", "two", "three", "four"];

function renderQuestion() {
  const q = questions[currentQuestion];

  questionNumberEl.textContent = "Q" + (currentQuestion + 1) + ":";
  questionEl.textContent = q.text;

  //clear old options
  optionEl.innerHTML = "";
  selectedIndex = null;
  nextBtn.disabled = true;


  for (let i=0; i<q.options.length; i++) {
    const opt = q.options[i];
    const btn = document.createElement("button");
    btn.textContent = opt.label;
    btn.classList.add("option", optionClasses[i]);
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", "false");

    btn.addEventListener("click", function() {
      selectOption(i, btn, opt);
    });
     optionEl.appendChild(btn);
  }

  updateProgress();
};


//to track progress of the progress bar

function updateProgress() {
  const pct = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = pct + "%";
  progressBar.setAttribute("aria-valuenow", Math.round(pct));
};


startBtn.addEventListener("click", function() {
  frontPage.style.display = "none";
  quizPage.style.display = "block";

  footerEl.style.display = "block";
  renderQuestion();
});


//selected option

let selectedBtn = null;
function selectOption (index, btn, opt) {
  //if something else was selected, undo its score and visual state
  if (selectedIndex !== null && selectedBtn !== btn) {
    const prevOpt = questions[currentQuestion].options[selectedIndex];
    undoPoints(prevOpt.points);
    selectedBtn.classList.remove("selected");
    selectedBtn.setAttribute("aria-checked", "false");
  }

  selectedIndex = index;
  selectedBtn = btn;
  
  addPoints(opt.points);
  btn.classList.add("selected");
  btn.setAttribute("aria-checked", "true");

  nextBtn.disabled = false;
  playOptionSound(index)

};


function undoPoints(points) {
  for (const star of Object.keys(points)) {
    scores[star] -= points[star];
  }
}


//next-button functionality

nextBtn.addEventListener("click", function() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});


//result page

function showResult() {
  const { winner } = getResult();
  const star = stars[winner];
  quizPage.style.display = "none";
  resultPage.style.display = "block";

  footerEl.style.display = "none";


  resultImage.src = star.image;
  resultImage.alt = "Illustration of " + star.name;
  resultTitle.textContent = star.title;
  resultCoreIdeal.textContent = star.coreIdeal;
  resultText.textContent = star.description;
  resultQuote.textContent = star.quote;
  scientificFact.textContent = star.fact;
  resultImage.style.boxShadow = `0 0 50px ${star.glowColor}, 0 0 100px ${star.glowColor.replace("0.35", "0.12")}`;

  scientificFact.hidden = true;
  scientificToggle.setAttribute("aria-expanded", "false");
  scientificToggle.textContent = "Want to be scientific?";
};




//sounds

const soundChime = [
  new Audio ("./sounds/option-1.mp3"),
  new Audio ("./sounds/option-2.mp3"),
  new Audio ("./sounds/option-3.mp3"),
  new Audio ("./sounds/option-4.mp3")
];

function playOptionSound(index) {
  const sound = soundChime[index];
  sound.currentTime = 0;
  sound.play().catch(() => {});
}



//scientific toggle
scientificToggle.addEventListener("click", function() {
  const isHidden = scientificFact.hidden;

  scientificFact.hidden = !isHidden;
  scientificToggle.setAttribute("aria-expanded", String(!isHidden));
  scientificToggle.textContent = isHidden ? "Hide the science" : "Want to be scientific?";
});




//restart the quiz

restart.addEventListener("click", function() {
  currentQuestion = 0;
  selectedIndex = null;
  selectedBtn = null;

  footerEl.style.display = "block";

  starKeys.forEach(function(key) {
    scores[key] = 0;
    reachedAt[key] = 0;
  });
  answerCount = 0;

  resultPage.style.display = "none";
  frontPage.style.display = "block";
});
