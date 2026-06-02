// JavaScript logic for Tricolor 2.4 static page with local video (x.mp4) support

// Feature list definitions matching exactly the user requested items
const FEATURES_DATA = [
  {
    id: "1",
    title: "🚀 Быстрее и удобнее",
    tagline: "Сниженная нагрузка и высокая отзывчивость",
    description: "Мы продолжаем делать платформу проще, быстрее и приятнее для использования.",
    longDescription: "Мы продолжаем делать платформу проще, быстрее и приятнее для использования. Многие внутренние механизмы были переработаны для уменьшения нагрузки на устройства и серверы. Страницы открываются быстрее, интерфейс стал отзывчивее, а работа с профилями и проектами — комфортнее на любых устройствах.",
    icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    badge: "Быстрее"
  },
  {
    id: "2",
    title: "🏅 Обновлённая система значков",
    tagline: "Безопасная передача по взаимному согласию",
    description: "Значки становятся полноценной частью профиля пользователя, отражая вклад в проект.",
    longDescription: "Значки становятся полноценной частью профиля пользователя. Теперь они лучше отражают активность, вклад в сообщество и историю участия в проекте. Некоторые значки можно будет передавать другим пользователям по взаимному согласию через удобный интерфейс прямо из профиля. Передача работает безопасно через серверную проверку и не требует ручного ввода идентификаторов или сложных действий.",
    icon: `<svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
    badge: "Значки"
  },
  {
    id: "3",
    title: "🤝 Взаимодействие между пользователями",
    tagline: "Удобная передача значков в один клик",
    description: "В профилях появится удобная кнопка «+» для предложения обмена значком.",
    longDescription: "В профилях появится удобная кнопка «+», которая позволяет быстро предложить передачу доступного значка другому участнику. Система автоматически определяет получателя по открытому профилю и не требует заполнять лишние поля. Это делает взаимодействие между пользователями более живым и понятным.",
    icon: `<svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    badge: "Общение"
  },
  {
    id: "4",
    title: "💻 Новый CLI-клиент",
    tagline: "Управление аккаунтом прямо из терминала",
    description: "Для продвинутых пользователей появится безопасный и быстрый CLI-клиент.",
    longDescription: "Для продвинутых пользователей появится отдельный CLI-клиент. Он позволит: просматривать статистику; получать информацию о профиле; работать со значками; использовать интеграции; получать данные о проектах; быстро выполнять действия без браузера. CLI работает через отдельный защищённый канал доступа и не получает прямого доступа к внутренним механизмам платформы.",
    icon: `<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    badge: "CLI"
  },
  {
    id: "5",
    title: "🔌 Интеграции и автоматизация",
    tagline: "Безопасное подключение сторонних ботов и сервисов",
    description: "Мы готовим надежную основу для подключения внешних проектов без риска для структуры.",
    longDescription: "Мы готовим основу для подключения сторонних сервисов и собственных инструментов пользователей. Благодаря этому можно будет безопасно связывать платформу с собственными проектами, ботами, приложениями и другими сервисами без раскрытия внутренней структуры сайта.",
    icon: `<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>`,
    badge: "API"
  },
  {
    id: "6",
    title: "📊 Статистика и аналитика",
    tagline: "Больше полезных данных об активности проектов",
    description: "Данные об активности и популярности проектов в лаконичном, понятном виде.",
    longDescription: "Пользователи смогут видеть больше полезной информации о своих проектах. Появятся дополнительные данные об активности, популярности, голосовании и развитии проектов. Информация будет отображаться в удобном и понятном виде без перегруженных таблиц и сложных настроек.",
    icon: `<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h-2a2 2 0 00-2-2"/></svg>`,
    badge: "Анализ"
  },
  {
    id: "7",
    title: "🛡️ Усиленная безопасность",
    tagline: "Тотальный контроль за сторонними уязвимостями",
    description: "Множественные улучшения защиты аккаунтов, пользовательских куки и обработки данных.",
    longDescription: "Большая часть обновления посвящена безопасности. Улучшены: защита аккаунтов; обработка пользовательских данных; работа с сессиями; проверка действий пользователей; защита от злоупотреблений; контроль доступа к функциям системы. Все проверки выполняются на стороне сервера и работают автоматически.",
    icon: `<svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    badge: "Защита"
  },
  {
    id: "8",
    title: "🗳️ Голосование за обновления",
    tagline: "Прямое влияние сообщества на приоритеты разработки",
    description: "Голосуйте за новые идеи, модули и функционал прямо на промо-странице.",
    longDescription: "Сообщество сможет напрямую влиять на развитие платформы. На страницах обновлений появится возможность голосовать за новые идеи и изменения. Это позволит лучше понимать, какие функции наиболее востребованы пользователями и какие направления стоит развивать дальше.",
    icon: `<svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>`,
    badge: "Влияние"
  },
  {
    id: "9",
    title: "🎨 Новый визуальный стиль",
    tagline: "Современные контрасты, чистые шрифты и адаптивность",
    description: "Мы сохраняем простоту, делая страницы значительно более читаемыми.",
    longDescription: "Мы постепенно обновляем интерфейс проекта. Основная цель — сохранить простоту, но сделать страницы более современными, удобными и приятными для восприятия. Больше внимания уделяется читаемости, адаптивности и удобству использования на телефонах и планшетах.",
    icon: `<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5"/></svg>`,
    badge: "Облик"
  },
  {
    id: "10",
    title: "🌟 Главная идея обновления",
    tagline: "Целостная, единая и дружелюбная экосистема",
    description: "Гармоничное объединение значков, проектов, CLI, статистики и людей в один союз.",
    longDescription: "Это обновление не про отдельные функции. Оно про создание единой экосистемы, где профиль пользователя, значки, проекты, статистика, голосование, интеграции и инструменты работают вместе и дополняют друг друга. Мы хотим, чтобы платформа была не просто сайтом, а живым пространством для пользователей, авторов проектов и сообщества, которое развивается вместе с ними.",
    icon: `<svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    badge: "Идея"
  }
];

// STATE MANAGEMENT variables
const videoEl = document.getElementById("bg-video-elem");
let currentSelectedFeatId = "1";
let supportCounter = 0;
let userVote = null; // 'up', 'down', null
let upVotes = 0;
let downVotes = 0;

// Setup UI elements pointers
const featuresGrid = document.getElementById("features-grid");
const detailTitle = document.getElementById("detail-title");
const detailDesc = document.getElementById("detail-desc");

const btnTogglePlay = document.getElementById("btn-toggle-play");
const btnToggleMute = document.getElementById("btn-toggle-mute");

const btnCelebrate = document.getElementById("btn-celebrate");
const joyCounter = document.getElementById("joy-counter");
const btnShare = document.getElementById("btn-share");
const btnScrollDown = document.getElementById("btn-scroll-down");

const btnVoteUp = document.getElementById("btn-vote-up");
const btnVoteDown = document.getElementById("btn-vote-down");
const voterTotal = document.getElementById("voter-total");
const voteUpPercent = document.getElementById("vote-up-percent");
const voteUpCount = document.getElementById("vote-up-count");
const voteDownPercent = document.getElementById("vote-down-percent");
const voteDownCount = document.getElementById("vote-down-count");
const progressUpLbl = document.getElementById("progress-up-lbl");
const progressDownLbl = document.getElementById("progress-down-lbl");
const progressBarUp = document.getElementById("progress-bar-up");
const progressBarDown = document.getElementById("progress-bar-down");
const voteStatusDesc = document.getElementById("vote-status-desc");

const toastView = document.getElementById("toast-view");
const toastText = document.getElementById("toast-text");
let toastTimer = null;

// TOAST EMISSION LOGIC
function showToast(message) {
  if (toastTimer) clearTimeout(toastTimer);
  toastText.innerText = message;
  toastView.classList.remove("opacity-0", "pointer-events-none");
  toastView.classList.add("opacity-100");
  
  toastTimer = setTimeout(() => {
    toastView.classList.remove("opacity-100");
    toastView.classList.add("opacity-0", "pointer-events-none");
  }, 3000);
}

// INITIALIZE VIDEO CONTROLS (Initially always unmuted by default!)
if (videoEl) {
  videoEl.muted = false;
  videoEl.volume = 1.0;
  
  // Try to play unmuted. If autoplay with audio is blocked, fallback to muted play.
  videoEl.play().catch(err => {
    console.log("Autoplay unmuted blocked by browser. Retrying muted as safe fallback...");
    videoEl.muted = true;
    btnToggleMute.innerText = "🔇 Звук выключен";
    videoEl.play().catch(e => console.log("Video fail to play: ", e));
  });
}

btnTogglePlay.addEventListener("click", () => {
  if (!videoEl) return;
  if (!videoEl.paused) {
    videoEl.pause();
    btnTogglePlay.innerText = "▶️ Запустить плеер";
    showToast("Фоновое видео приостановлено ⏸️");
  } else {
    videoEl.play().catch(e => console.log(e));
    btnTogglePlay.innerText = "⏸️ Пауза";
    showToast("Воспроизведение фонового видео запущено ▶️");
  }
});

btnToggleMute.addEventListener("click", () => {
  if (!videoEl) return;
  if (videoEl.muted) {
    videoEl.muted = false;
    btnToggleMute.innerText = "🔊 Звук включен";
    showToast("Звук включен! Наслаждайтесь фоновой атмосферой 🔊");
  } else {
    videoEl.muted = true;
    btnToggleMute.innerText = "🔇 Звук выключен";
    showToast("Звук видео отключен 🔇");
  }
});

// INITIALIZE FEATURES GRID
function selectFeature(id) {
  currentSelectedFeatId = id;
  const feat = FEATURES_DATA.find(f => f.id === id);
  if (!feat) return;
  
  // Highlight card
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach(card => {
    if (card.dataset.id === id) {
      card.classList.add("feature-selected");
    } else {
      card.classList.remove("feature-selected");
    }
  });
  
  // Render details
  detailTitle.innerHTML = `<span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>${feat.title} — ${feat.tagline}`;
  detailDesc.innerText = feat.longDescription;
}

function renderFeatures() {
  featuresGrid.innerHTML = "";
  FEATURES_DATA.forEach(feat => {
    const card = document.createElement("button");
    card.dataset.id = feat.id;
    card.className = `feature-card p-4 rounded-xl bg-zinc-900/40 border border-white/5 text-left cursor-pointer transition-all duration-300 w-full flex flex-col justify-between ${feat.id === currentSelectedFeatId ? 'feature-selected' : 'hover:border-white/15 hover:bg-zinc-900/60'}`;
    
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start mb-3">
          <div class="w-9 h-9 rounded-lg bg-black/30 flex items-center justify-center border border-white/5">
            ${feat.icon}
          </div>
          <span class="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.2 rounded font-bold border bg-blue-500/10 text-blue-400 border-blue-500/20">
            ${feat.badge}
          </span>
        </div>
        <h3 class="text-xs font-bold text-white leading-normal">
          ${feat.title}
        </h3>
        <p class="text-[11px] text-gray-400 mt-1 line-clamp-3 leading-relaxed">
          ${feat.description}
        </p>
      </div>
      <div class="mt-3 pt-2.5 border-t border-white/5 flex justify-between items-center text-[9px] font-mono w-full">
        <span class="card-action-lbl text-gray-500">Подробнее</span>
        <svg class="w-3 h-3 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4m11 0h-4M4 16v4m0 0h4m11-1v4m0 0h-4"/></svg>
      </div>
    `;
    
    card.addEventListener("click", () => selectFeature(feat.id));
    featuresGrid.appendChild(card);
  });
  
  // Select initial
  selectFeature("1");
}

// DE-CLUTTERED CHEAT-FREE DEMOCRATIC VOTING
function loadVotes() {
  const savedVote = localStorage.getItem("tricolor_vote");
  const savedUp = localStorage.getItem("tricolor_upvotes_count");
  const savedDown = localStorage.getItem("tricolor_downvotes_count");
  
  // Clear counts to zero initially
  upVotes = savedUp ? parseInt(savedUp, 10) : 0;
  downVotes = savedDown ? parseInt(savedDown, 10) : 0;
  userVote = savedVote || null;
  
  updateVoteUI();
}

function updateVoteUI() {
  const total = upVotes + downVotes;
  const upPercent = total > 0 ? Math.round((upVotes / total) * 100) : 0;
  const downPercent = total > 0 ? Math.round((downVotes / total) * 100) : 0;
  
  voterTotal.innerText = total;
  voteUpPercent.innerText = upPercent + "%";
  voteUpCount.innerText = upVotes + " чел";
  voteDownPercent.innerText = downPercent + "%";
  voteDownCount.innerText = downVotes + " чел";
  
  progressUpLbl.innerText = upPercent + "%";
  progressDownLbl.innerText = downPercent + "%";
  progressBarUp.style.width = upPercent + "%";
  progressBarDown.style.width = downPercent + "%";
  
  // Highlight selected buttons
  btnVoteUp.className = "group text-left relative flex items-center justify-between p-4 px-5 rounded-xl border transition-all cursor-pointer " + 
    (userVote === "up" ? "active-vote-up" : "bg-black/25 border-white/10 hover:bg-white/5 hover:border-white/20 text-gray-300");
    
  btnVoteDown.className = "group text-left relative flex items-center justify-between p-4 px-5 rounded-xl border transition-all cursor-pointer " + 
    (userVote === "down" ? "active-vote-down" : "bg-black/25 border-white/10 hover:bg-white/5 hover:border-white/20 text-gray-300");
    
  if (userVote) {
    voteStatusDesc.innerHTML = `<span class="text-blue-400 font-semibold">✓ Вы успешно проголосовали! Спасибо за честное участие в развитии Триколор.</span>`;
  } else {
    voteStatusDesc.innerText = "Выберите ваш ответ для фиксации мнения";
  }
}

function castVote(type) {
  if (userVote) {
    if (userVote === type) {
      showToast("Вы уже отдали ваш единственный честный голос!");
      return;
    }
    // Switch vote
    if (type === "up") {
      upVotes += 1;
      downVotes = Math.max(0, downVotes - 1);
      userVote = "up";
      showToast("Голос передан ЗА обновление! Спасибо 👍");
    } else {
      downVotes += 1;
      upVotes = Math.max(0, upVotes - 1);
      userVote = "down";
      showToast("Ваше мнение учтено: Против изменений 👎");
    }
  } else {
    // First time vote
    if (type === "up") {
      upVotes += 1;
      userVote = "up";
      showToast("Голос успешно принят: ЗА обновление! 👍");
    } else {
      downVotes += 1;
      userVote = "down";
      showToast("Голос успешно принят: ПРОТИВ изменений 👎");
    }
  }
  
  localStorage.setItem("tricolor_vote", userVote);
  localStorage.setItem("tricolor_upvotes_count", upVotes);
  localStorage.setItem("tricolor_downvotes_count", downVotes);
  
  updateVoteUI();
}

btnVoteUp.addEventListener("click", () => castVote("up"));
btnVoteDown.addEventListener("click", () => castVote("down"));

// CONFETTI PHYSICS CANVAS ENGINE
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let animId = null;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class ConfettiParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 4;
    this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    this.speedX = Math.random() * 8 - 4;
    this.speedY = Math.random() * -10 - 20; // Upward initial velocity
    this.gravity = 0.5;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 10 - 5;
    this.opacity = 1;
  }
  
  update() {
    this.speedY += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
    if (this.y > canvas.height) {
      this.opacity = 0;
    }
  }
  
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.opacity > 0);
  
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  
  if (particles.length > 0) {
    animId = requestAnimationFrame(animateParticles);
  } else {
    cancelAnimationFrame(animId);
    animId = null;
  }
}

function spawnConfetti() {
  const spawnPoints = [
    { x: canvas.width * 0.2, y: canvas.height },
    { x: canvas.width * 0.5, y: canvas.height },
    { x: canvas.width * 0.8, y: canvas.height }
  ];
  
  spawnPoints.forEach(pt => {
    for (let i = 0; i < 40; i++) {
      particles.push(new ConfettiParticle(pt.x, pt.y));
    }
  });
  
  if (!animId) {
    animateParticles();
  }
}

// CELEBRATION COUNTER INCREMENT
btnCelebrate.addEventListener("click", () => {
  supportCounter += 1;
  joyCounter.classList.remove("hidden");
  joyCounter.innerText = `+${supportCounter}`;
  localStorage.setItem("tricolor_joy_counter", supportCounter);
  
  const joyGreetings = [
    "Ура! Вы запустили фейерверк радости! 🎉",
    "Салют из праздничного конфетти! 🌈",
    "Проект наполняется искренней энергией! ⚡",
    "Спасибо за бесконечный позитив! 🔥",
    "Конфетти-машина работает на полную мощность! 💫"
  ];
  
  showToast(joyGreetings[Math.floor(Math.random() * joyGreetings.length)]);
  spawnConfetti();
});

// Load joy contribution from storage
const savedJoy = localStorage.getItem("tricolor_joy_counter");
if (savedJoy) {
  supportCounter = parseInt(savedJoy, 10);
  joyCounter.classList.remove("hidden");
  joyCounter.innerText = `+${supportCounter}`;
}

// COPY PRESENTATION LINK
btnShare.addEventListener("click", () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl)
    .then(() => showToast("Ссылка на презентацию скопирована в буфер! 🔗"))
    .catch(() => showToast(`Скопируйте: ${currentUrl}`));
});

// QUICK NAVIGATION SMOOTH SCROLL DOWN
btnScrollDown.addEventListener("click", () => {
  const el = document.getElementById("features-showcase-section");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
});

// INITIALIZE RUNTIME PROCESSES
document.addEventListener("DOMContentLoaded", () => {
  renderFeatures();
  loadVotes();
});