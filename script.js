// script.js - Vollständige Skriptdatei

(function() {
  // ========== DATENBANK ==========
  const vocabulary = [
    // Level 1 (A1) – Grundwortschatz
    { level: 1, type: 'noun', word: 'Arzt', article: 'der', plural: 'Ärzte', meaning: 'medizinische Fachperson', synonyms: 'Doktor', example: 'Der Arzt untersucht den Patienten.', emoji: '👨‍⚕️' },
    { level: 1, type: 'noun', word: 'Krankenschwester', article: 'die', plural: 'Krankenschwestern', meaning: 'Pflegekraft', synonyms: 'Schwester', example: 'Die Krankenschwester hilft dem Arzt.', emoji: '👩‍⚕️' },
    { level: 1, type: 'noun', word: 'Krankenhaus', article: 'das', plural: 'Krankenhäuser', meaning: 'Einrichtung für medizinische Versorgung', synonyms: 'Klinik', example: 'Das Krankenhaus hat eine Notaufnahme.', emoji: '🏥' },
    { level: 1, type: 'noun', word: 'Fieber', article: 'das', plural: '-', meaning: 'erhöhte Körpertemperatur', synonyms: 'Temperatur', example: 'Das Fieber steigt auf 39 Grad.', emoji: '🌡️' },
    { level: 1, type: 'noun', word: 'Husten', article: 'der', plural: '-', meaning: 'Reflex zum Luftausstoß', synonyms: 'Hustenreiz', example: 'Trockener Husten kann reizend sein.', emoji: '😷' },
    // Level 2 (A2) – Praxis/Dialoge
    { level: 2, type: 'noun', word: 'Rezept', article: 'das', plural: 'Rezepte', meaning: 'ärztliche Verordnung', synonyms: 'Verschreibung', example: 'Das Rezept muss in der Apotheke eingelöst werden.', emoji: '📝' },
    { level: 2, type: 'noun', word: 'Apotheke', article: 'die', plural: 'Apotheken', meaning: 'Geschäft für Medikamente', synonyms: 'Pharmazie', example: 'Gehen Sie in die Apotheke.', emoji: '💊' },
    { level: 2, type: 'verb', word: 'nehmen', meaning: 'einnehmen', synonyms: 'schlucken', example: 'Nehmen Sie die Medikamente.', emoji: '💊',
      conjugation: { praesens: 'nimmt', praeteritum: 'nahm', perfekt: 'hat genommen', beispiel_praesens: 'Er nimmt die Tablette.', beispiel_praeteritum: 'Er nahm sie gestern.', beispiel_perfekt: 'Er hat sie genommen.' } },
    { level: 2, type: 'noun', word: 'Schmerz', article: 'der', plural: 'Schmerzen', meaning: 'körperliche Empfindung', synonyms: 'Weh', example: 'Ich habe starke Schmerzen.', emoji: '🤕' },
    // Level 3 (B1) – Notaufnahme
    { level: 3, type: 'noun', word: 'Notaufnahme', article: 'die', plural: 'Notaufnahmen', meaning: 'Abteilung für Notfälle', synonyms: 'ER', example: 'Die Notaufnahme ist 24h geöffnet.', emoji: '🚑' },
    { level: 3, type: 'verb', word: 'operieren', meaning: 'chirurgisch behandeln', synonyms: 'eingreifen', example: 'Der Chirurg operiert das Herz.', emoji: '👨‍⚕️',
      conjugation: { praesens: 'operiert', praeteritum: 'operierte', perfekt: 'hat operiert', beispiel_praesens: 'Der Arzt operiert heute.', beispiel_praeteritum: 'Er operierte gestern.', beispiel_perfekt: 'Er hat erfolgreich operiert.' } },
    { level: 3, type: 'noun', word: 'Blutdruck', article: 'der', plural: '-', meaning: 'Druck des Blutes', synonyms: 'arterieller Druck', example: 'Der Blutdruck ist zu hoch.', emoji: '🩸' },
    // Level 4 (B2) – Innere Medizin
    { level: 4, type: 'noun', word: 'Intensivstation', article: 'die', plural: 'Intensivstationen', meaning: 'Station für Schwerstkranke', synonyms: 'ICU', example: 'Die Intensivstation ist im 3. Stock.', emoji: '🏥' },
    { level: 4, type: 'noun', word: 'Herzinfarkt', article: 'der', plural: 'Herzinfarkte', meaning: 'Myokardinfarkt', synonyms: 'Herzattacke', example: 'Bei einem Herzinfarkt zählt jede Minute.', emoji: '💔' },
    { level: 4, type: 'noun', word: 'Diagnose', article: 'die', plural: 'Diagnosen', meaning: 'Feststellung einer Krankheit', synonyms: 'Befund', example: 'Die Diagnose lautet Grippe.', emoji: '🔬' },
    { level: 4, type: 'noun', word: 'Therapie', article: 'die', plural: 'Therapien', meaning: 'Behandlung', synonyms: 'Heilverfahren', example: 'Die Therapie dauert zwei Wochen.', emoji: '💊' }
  ];

  const dialogues = [
    { level: 1, character: 'Dr. Weber', emoji: '👨‍⚕️', text: 'Guten Tag, Herr Klein. Was fehlt Ihnen?' },
    { level: 1, character: 'Herr Klein', emoji: '👴', text: 'Ich habe starke Kopfschmerzen und Fieber.' },
    { level: 2, character: 'Schwester Margot', emoji: '👩‍⚕️', text: 'Ich werde Ihre Temperatur messen.' },
    { level: 2, character: 'Dr. Weber', emoji: '👨‍⚕️', text: 'Ich verschreibe Ihnen Medikamente.' },
    { level: 3, character: 'Apotheker', emoji: '🧑‍🔬', text: 'Hier sind Ihre Tabletten.' }
  ];

  const testQuestions = [
    { level: 1, question: 'Was ist der Artikel von "Arzt"?', options: ['der', 'die', 'das'], correct: 'der' },
    { level: 1, question: 'Was ist der Artikel von "Krankenschwester"?', options: ['der', 'die', 'das'], correct: 'die' },
    { level: 2, question: 'Was ist die Bedeutung von "Rezept"?', options: ['ärztliche Verordnung', 'Medikament', 'Krankenhaus'], correct: 'ärztliche Verordnung' },
    { level: 2, question: 'Konjugiere "nehmen" im Präsens (er/sie/es):', options: ['nimmt', 'nahm', 'genommen'], correct: 'nimmt' },
    { level: 3, question: 'Was ist "Notaufnahme"?', options: ['Abteilung für Notfälle', 'Intensivstation', 'OP-Saal'], correct: 'Abteilung für Notfälle' },
    { level: 4, question: 'Was bedeutet "Herzinfarkt"?', options: ['Herzattacke', 'Herzrasen', 'Herzstillstand'], correct: 'Herzattacke' }
  ];

  // ========== SPIELERZUSTAND ==========
  let currentUser = {
    name: '',
    age: '',
    gold: 0,
    xp: 0,
    level: 1,
    completedLevels: [],
    badges: [],
    lastActive: new Date().toISOString()
  };

  let currentTab = 'home';
  let currentWordIndex = 0;
  let currentDialogIndex = 0;
  let currentTestIndex = 0;
  let selectedWord = null;
  let showCardBack = false;

  // Zustände für Szenenablauf
  let scene = 'curtain'; // mögliche Werte: curtain, welcome, askAge, ageInput, introduceSecond, showBoth, assistantIntro, medicalExamination, home
  let typewriterInterval = null;
  let typewriterFinished = false;

  // Audio Context
  let audioCtx = null;
  function playSound(freq = 200, duration = 0.05, gainVal = 0.03) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.value = freq;
      gain.gain.value = gainVal;
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }
  function playCoinSound() { playSound(600, 0.1, 0.1); }
  function playTypeSound() { playSound(200, 0.05, 0.03); }
  function playCuffSound() { playSound(300, 0.3, 0.1); } // für Manschette

  // DOM-Elemente
  const loginScreen = document.getElementById('loginScreen');
  const mainApp = document.getElementById('mainApp');
  const nameInput = document.getElementById('nameInput');
  const startBtn = document.getElementById('startBtn');
  const userNameDisplay = document.getElementById('userNameDisplay');
  const xpSpan = document.getElementById('xpAmount');
  const goldSpan = document.getElementById('goldAmount');
  const stageContent = document.getElementById('stageContent');
  const navItems = document.querySelectorAll('.nav-item');
  const adminTrigger = document.getElementById('adminTrigger');
  const adminOverlay = document.getElementById('adminOverlay');
  const adminPass = document.getElementById('adminPass');
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminCloseBtn = document.getElementById('adminCloseBtn');
  const adminDashboard = document.getElementById('adminDashboard');
  const adminName = document.getElementById('adminName');
  const adminGold = document.getElementById('adminGold');
  const adminXP = document.getElementById('adminXP');
  const adminLevel = document.getElementById('adminLevel');
  const adminLastActive = document.getElementById('adminLastActive');
  const adminCompleted = document.getElementById('adminCompleted');
  const adminBadges = document.getElementById('adminBadges');
  const certificateModal = document.getElementById('certificateModal');
  const closeCert = document.getElementById('closeCert');
  const certificateInner = document.getElementById('certificateInner');
  const downloadCert = document.getElementById('downloadCert');
  const leaderboardModal = document.getElementById('leaderboardModal');
  const closeLeaderboard = document.getElementById('closeLeaderboard');
  const leaderboardList = document.getElementById('leaderboardList');
  const curtainLeft = document.getElementById('curtainLeft');
  const curtainRight = document.getElementById('curtainRight');
  const actionBtn = document.getElementById('actionBtn');
  const leaderboardBtn = document.getElementById('leaderboardBtn');

  // ========== HILFSFUNKTIONEN ==========
  function saveUser() {
    localStorage.setItem('wfaUser', JSON.stringify(currentUser));
  }

  function loadUser() {
    const saved = localStorage.getItem('wfaUser');
    if (saved) {
      try {
        currentUser = JSON.parse(saved);
        userNameDisplay.textContent = currentUser.name;
        xpSpan.textContent = currentUser.xp;
        goldSpan.textContent = currentUser.gold;
        if (currentUser.name) {
          loginScreen.classList.remove('active');
          mainApp.classList.add('active');
          scene = 'curtain';
          renderScene();
        }
      } catch (e) {}
    }
  }

  function addXP(amount) {
    currentUser.xp += amount;
    if (currentUser.xp < 0) currentUser.xp = 0;
    xpSpan.textContent = currentUser.xp;
    saveUser();
    checkLevelUp();
    refreshAdminDashboard();
  }

  function addGold(amount) {
    currentUser.gold += amount;
    goldSpan.textContent = currentUser.gold;
    saveUser();
    if (amount > 0) playCoinSound();
    refreshAdminDashboard();
  }

  function checkLevelUp() {
    let newLevel = Math.floor(currentUser.xp / 100) + 1;
    if (newLevel > 4) newLevel = 4;
    if (newLevel > currentUser.level) {
      currentUser.level = newLevel;
      const badgeNames = ['A1-Anfänger', 'A2-Fortgeschritten', 'B1-Profi', 'B2-Experte'];
      const badge = badgeNames[newLevel-1];
      if (!currentUser.badges.includes(badge)) {
        currentUser.badges.push(badge);
      }
      stageContent.classList.add('level-up-effect');
      setTimeout(() => stageContent.classList.remove('level-up-effect'), 1000);
    }
    saveUser();
  }

  function colorizeText(text) {
    const parts = text.split(/(\s+|[.,!?])/);
    return parts.map(part => {
      if (part.match(/^\s+$/) || part.match(/^[.,!?]$/)) return part;
      const clean = part.replace(/[.,!?]/g, '');
      const lower = clean.toLowerCase();
      const found = vocabulary.find(v => v.word.toLowerCase() === lower);
      if (found) {
        let colorClass = '';
        if (found.type === 'noun') {
          if (found.article === 'der') colorClass = 'noun-m';
          else if (found.article === 'die') colorClass = 'noun-f';
          else if (found.article === 'das') colorClass = 'noun-n';
        } else if (found.type === 'verb') {
          colorClass = 'verb-word';
        }
        return `<span class="${colorClass}">${part}</span>`;
      }
      return part;
    }).join('');
  }

  function startTypeWriter(element, text, callback) {
    stopTypeWriter();
    let index = 0;
    element.innerHTML = '';
    typewriterInterval = setInterval(() => {
      if (index < text.length) {
        const currentSubstring = text.substring(0, index + 1);
        element.innerHTML = colorizeText(currentSubstring);
        playTypeSound();
        index++;
      } else {
        stopTypeWriter();
        typewriterFinished = true;
        if (callback) callback();
      }
    }, 50);
  }

  function stopTypeWriter() {
    if (typewriterInterval) {
      clearInterval(typewriterInterval);
      typewriterInterval = null;
    }
  }

  // ========== SZENEN ==========
  function renderScene() {
    stopTypeWriter();
    typewriterFinished = false;

    if (scene === 'curtain') {
      stageContent.innerHTML = '';
      actionBtn.textContent = 'Start';
      actionBtn.classList.remove('ja-button');
      actionBtn.disabled = false;
      curtainLeft.classList.remove('open-left');
      curtainRight.classList.remove('open-right');
    } else if (scene === 'welcome') {
      curtainLeft.classList.add('open-left');
      curtainRight.classList.add('open-right');
      stageContent.innerHTML = '<div class="typing-text-container" id="typingWelcome"></div>';
      const typing = document.getElementById('typingWelcome');
      const intro = `Herzlich willkommen, ${currentUser.name}! Heute tauchen wir ein in die Welt der medizinischen Fachbegriffe. Dr. Weber und sein Team warten schon auf dich. Bist du bereit?`;
      startTypeWriter(typing, intro, () => {
        actionBtn.textContent = 'Ja';
        actionBtn.classList.add('ja-button');
        actionBtn.disabled = false;
      });
    } else if (scene === 'askAge') {
      stageContent.innerHTML = `
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👨‍⚕️</div>
          <div class="character-name">Dr. Weber</div>
        </div>
        <div class="typing-text-container" id="typingAge"></div>
      `;
      const typing = document.getElementById('typingAge');
      const msg = `Hallo ${currentUser.name}! Ich bin Dr. Weber. Schön, dass du hier bist. Bevor wir beginnen, verrate mir bitte dein Alter.`;
      startTypeWriter(typing, msg, () => {
        actionBtn.textContent = 'Weiter';
        actionBtn.classList.remove('ja-button');
        actionBtn.disabled = false;
      });
    } else if (scene === 'ageInput') {
      stageContent.innerHTML = `
        <div class="input-form">
          <h3>Bitte gib dein Alter ein:</h3>
          <input type="number" id="ageInput" placeholder="Dein Alter" min="1" max="120">
          <button id="submitAgeBtn">Bestätigen</button>
        </div>
      `;
      const submitAge = document.getElementById('submitAgeBtn');
      const ageInput = document.getElementById('ageInput');
      // Alte Listener durch Klonen entfernen
      const newSubmit = submitAge.cloneNode(true);
      submitAge.parentNode.replaceChild(newSubmit, submitAge);
      newSubmit.addEventListener('click', function() {
        const age = ageInput.value.trim();
        if (age && !isNaN(age) && age > 0) {
          currentUser.age = age;
          saveUser();
          scene = 'introduceSecond';
          renderScene();
        }
      });
      actionBtn.disabled = true;
    } else if (scene === 'introduceSecond') {
      stageContent.innerHTML = `
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👨‍⚕️</div>
          <div class="character-name">Dr. Weber</div>
        </div>
        <div class="typing-text-container" id="typingIntro2"></div>
      `;
      const typing = document.getElementById('typingIntro2');
      const msg = `Danke, ${currentUser.name} (${currentUser.age || '?'} Jahre)! Jetzt beginnen wir mit der medizinischen Untersuchung. Aber ich bin nicht allein – das ist meine Kollegin, Dr. Schmidt.`;
      startTypeWriter(typing, msg, () => {
        actionBtn.textContent = 'Weiter';
        actionBtn.classList.remove('ja-button');
        actionBtn.disabled = false;
      });
    } else if (scene === 'showBoth') {
      stageContent.innerHTML = `
        <div style="display: flex; gap: 30px; justify-content: center;">
          <div class="stage-character">
            <div class="character-emoji heartbeat-emoji">👨‍⚕️</div>
            <div class="character-name">Dr. Weber</div>
          </div>
          <div class="stage-character">
            <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
            <div class="character-name">Dr. Schmidt</div>
          </div>
        </div>
        <div class="stage-dialogue">
          Dr. Weber: Und das ist Dr. Schmidt, unsere Spezialistin für Innere Medizin. Sie wird dich durch die Untersuchung führen.
        </div>
      `;
      actionBtn.textContent = 'Los geht\'s';
      actionBtn.classList.remove('ja-button');
      actionBtn.disabled = false;
    } else if (scene === 'assistantIntro') {
      stageContent.innerHTML = `
        <div class="spotlight"></div>
        <div class="stage-character" id="assistantChar">
          <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
          <div class="character-name">Dr. Schmidt</div>
        </div>
        <div id="assistantDialogueContainer" class="typing-text-container"></div>
        <div id="assistantQuestion" style="display: none;" class="assistant-question"></div>
      `;

      const dialogueContainer = document.getElementById('assistantDialogueContainer');
      const questionContainer = document.getElementById('assistantQuestion');

      const lines = [
        "Vielen Dank, Herr Dr. Weber. Es ist mir eine große Freude, heute hier zu sein.",
        "Ich bin spezialisiert auf Innere Medizin und unterstütze Sie bei der medizinischen Untersuchung.",
        "Gemeinsam werden wir wichtige medizinische Begriffe Schritt für Schritt lernen."
      ];

      let lineIndex = 0;
      const typeNextLine = () => {
        if (lineIndex < lines.length) {
          startTypeWriter(dialogueContainer, lines[lineIndex], () => {
            lineIndex++;
            setTimeout(typeNextLine, 800);
          });
        } else {
          dialogueContainer.style.display = 'none';
          questionContainer.style.display = 'flex';
          questionContainer.innerHTML = `
            <p style="color:gold; margin-bottom:10px; width:100%;">Sind Sie bereit, mit der Untersuchung zu beginnen?</p>
            <div style="display:flex; gap:20px; justify-content:center;">
              <button class="assistant-btn" id="assistantYes">Ja, ich bin bereit.</button>
              <button class="assistant-btn secondary" id="assistantNo">Noch nicht.</button>
            </div>
          `;
          // Entferne alte Listener durch Klonen
          const yesBtn = document.getElementById('assistantYes');
          const noBtn = document.getElementById('assistantNo');
          if (yesBtn) {
            const newYes = yesBtn.cloneNode(true);
            yesBtn.parentNode.replaceChild(newYes, yesBtn);
            newYes.addEventListener('click', () => {
              addXP(10);
              scene = 'medicalExamination'; // Weiter zum neuen medizinischen Untersuchungsszene
              renderScene();
            });
          }
          if (noBtn) {
            const newNo = noBtn.cloneNode(true);
            noBtn.parentNode.replaceChild(newNo, noBtn);
            newNo.addEventListener('click', () => {
              alert('Kein Problem – nimm dir Zeit!');
            });
          }
        }
      };
      typeNextLine();
    } else if (scene === 'medicalExamination') {
      // Neue medizinische Untersuchungsszene
      stageContent.innerHTML = `
        <div class="spotlight"></div>
        <div class="stage-character">
          <div class="character-emoji heartbeat-emoji">👩‍⚕️</div>
          <div class="character-name">Dr. Schmidt</div>
        </div>
        <div id="medicalContainer" class="typing-text-container" style="min-height: 150px;"></div>
        <div id="medicalTools" class="medical-tools" style="display: none;"></div>
        <div id="bloodPressureDisplay" style="display: none;" class="blood-pressure">
          <div>Blutdruckmessung</div>
          <div class="blood-pressure-value" id="bpValue">120/80</div>
          <div class="heartbeat-effect">💓</div>
        </div>
        <div id="bodyPartsDisplay" style="display: none;" class="body-parts-container"></div>
        <div id="medicalQuestion" style="display: none;" class="medical-question"></div>
      `;

      const medicalContainer = document.getElementById('medicalContainer');
      const toolsDiv = document.getElementById('medicalTools');
      const bpDiv = document.getElementById('bloodPressureDisplay');
      const bodyPartsDiv = document.getElementById('bodyPartsDisplay');
      const questionDiv = document.getElementById('medicalQuestion');

      // Szene Schritt für Schritt aufbauen
      let step = 0;
      const tools = [
        { article: 'das', name: 'Blutdruckmessgerät', emoji: '🩺', desc: 'Es misst den Blutdruck.' },
        { article: 'die', name: 'Manschette', emoji: '🔄', desc: 'Sie wird um den Arm gelegt.' },
        { article: 'der', name: 'Stethoskop', emoji: '🩺', desc: 'Man hört damit den Herzschlag.' },
        { article: 'das', name: 'Thermometer', emoji: '🌡️', desc: 'Es misst die Temperatur.' }
      ];

      const bodyParts = [
        { article: 'der', name: 'Kopf', emoji: '👤' },
        { article: 'der', name: 'Arm', emoji: '💪' },
        { article: 'der', name: 'Bauch', emoji: '🤰' },
        { article: 'die', name: 'Hand', emoji: '✋' },
        { article: 'die', name: 'Nase', emoji: '👃' },
        { article: 'das', name: 'Herz', emoji: '❤️' },
        { article: 'das', name: 'Bein', emoji: '🦵' }
      ];

      const runScene = () => {
        if (step === 0) {
          startTypeWriter(medicalContainer, 'Wir beginnen jetzt mit der Untersuchung.', () => {
            step++;
            setTimeout(runScene, 1000);
          });
        } else if (step === 1) {
          medicalContainer.style.display = 'none';
          toolsDiv.style.display = 'flex';
          let toolIndex = 0;
          const showNextTool = () => {
            if (toolIndex < tools.length) {
              const tool = tools[toolIndex];
              const toolHtml = `
                <div class="tool-item" style="animation: fadeScale 0.5s ease;">
                  <div class="tool-emoji">${tool.emoji}</div>
                  <div class="tool-name ${tool.article === 'der' ? 'noun-m' : tool.article === 'die' ? 'noun-f' : 'noun-n'}">${tool.article} ${tool.name}</div>
                  <div class="tool-desc">${tool.desc}</div>
                </div>
              `;
              toolsDiv.innerHTML += toolHtml;
              toolIndex++;
              setTimeout(showNextTool, 1500);
            } else {
              // Alle Tools gezeigt, weiter zu Blutdruckmessung
              setTimeout(() => {
                toolsDiv.style.display = 'none';
                bpDiv.style.display = 'block';
                playCuffSound();
                let bpValue = 120;
                const interval = setInterval(() => {
                  bpValue += Math.floor(Math.random() * 5) - 2;
                  if (bpValue > 130) bpValue = 130;
                  if (bpValue < 110) bpValue = 110;
                  document.getElementById('bpValue').innerText = bpValue + '/80';
                }, 200);
                setTimeout(() => {
                  clearInterval(interval);
                  document.getElementById('bpValue').innerText = '120/80';
                  step++;
                  setTimeout(runScene, 2000);
                }, 4000);
              }, 1000);
            }
          };
          showNextTool();
        } else if (step === 2) {
          bpDiv.style.display = 'none';
          startTypeWriter(medicalContainer, 'Ihr Blutdruck ist stabil.', () => {
            step++;
            setTimeout(runScene, 1000);
          });
        } else if (step === 3) {
          medicalContainer.style.display = 'none';
          bodyPartsDiv.style.display = 'block';
          let partIndex = 0;
          const showNextPart = () => {
            if (partIndex < bodyParts.length) {
              const part = bodyParts[partIndex];
              const partHtml = `
                <div class="body-part ${part.article === 'der' ? 'der' : part.article === 'die' ? 'die' : 'das'}" style="animation: fadeScale 0.5s ease;">
                  <div class="body-part-large">${part.emoji}</div>
                  <div class="body-part-name">${part.article} ${part.name}</div>
                </div>
              `;
              bodyPartsDiv.innerHTML = partHtml;
              partIndex++;
              setTimeout(showNextPart, 2000);
            } else {
              // Alle Körperteile gezeigt, dann Frage
              setTimeout(() => {
                bodyPartsDiv.style.display = 'none';
                questionDiv.style.display = 'block';
                questionDiv.innerHTML = `
                  <p><strong>Welches Organ pumpt das Blut?</strong></p>
                  <div class="medical-options">
                    <div class="medical-option der" data-answer="der Kopf">der Kopf</div>
                    <div class="medical-option das" data-answer="das Herz">das Herz</div>
                    <div class="medical-option die" data-answer="die Hand">die Hand</div>
                  </div>
                `;
                document.querySelectorAll('.medical-option').forEach(opt => {
                  opt.addEventListener('click', (e) => {
                    if (e.target.dataset.answer === 'das Herz') {
                      addXP(10);
                      addGold(5);
                      scene = 'home';
                      renderScene();
                    } else {
                      alert('Falsch! Versuche es nochmal.');
                    }
                  });
                });
              }, 1000);
            }
          };
          showNextPart();
        }
      };
      runScene();
    } else if (scene === 'home') {
      const levelNames = ['A1', 'A2', 'B1', 'B2'];
      let cards = '';
      for (let lvl = 1; lvl <= 4; lvl++) {
        cards += `
          <div class="level-card" data-level="${lvl}">
            <div class="level-number">${lvl}</div>
            <div class="level-name">Level ${lvl} (${levelNames[lvl-1]})</div>
            <div class="level-count">${vocabulary.filter(v => v.level === lvl).length} Wörter</div>
          </div>
        `;
      }
      stageContent.innerHTML = `
        <h3 style="color:gold; margin-bottom:10px;">Willkommen, ${currentUser.name}!</h3>
        <div class="level-grid">${cards}</div>
      `;
      document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
          currentUser.level = parseInt(card.dataset.level);
          saveUser();
          currentTab = 'words';
          renderTab('words');
        });
      });
    }
  }

  // ========== TAB-RENDERING ==========
  function renderTab(tab) {
    currentTab = tab;
    navItems.forEach(item => item.classList.remove('active'));
    document.getElementById(`nav${tab.charAt(0).toUpperCase() + tab.slice(1)}`).classList.add('active');

    if (tab === 'home') {
      scene = 'home';
      renderScene();
    } else if (tab === 'words') {
      showWords();
    } else if (tab === 'dialogs') {
      showDialogs();
    } else if (tab === 'tests') {
      showTests();
    }
  }

  function showWords() {
    const words = vocabulary.filter(v => v.level === currentUser.level);
    if (!words.length) {
      stageContent.innerHTML = '<p style="color:white;">Keine Wörter für dieses Level.</p>';
      return;
    }
    const word = words[currentWordIndex] || words[0];
    let farbe = '';
    if (word.type === 'noun') {
      if (word.article === 'der') farbe = '#1565C0';
      else if (word.article === 'die') farbe = '#C62828';
      else if (word.article === 'das') farbe = '#7CB342';
    } else farbe = '#00bcd4';

    stageContent.innerHTML = `
      <div class="stage-flashcard" id="flashcard">
        <div class="front">
          <div class="word-emoji heartbeat-emoji">${word.emoji}</div>
          <div class="word-title" style="color:${farbe}">${word.article ? word.article + ' ' : ''}${word.word}</div>
          ${word.plural ? `<div class="plural">Plural: ${word.plural}</div>` : ''}
        </div>
        <div class="back">
          <div class="back-section"><span class="section-label">Bedeutung</span><div class="section-content">${word.meaning}</div></div>
          <div class="back-section"><span class="section-label">Synonyme</span><div class="section-content">${word.synonyms || '-'}</div></div>
          <div class="back-section"><span class="section-label">Beispiel</span><div class="section-content">"${word.example}"</div></div>
          ${word.type === 'verb' ? `
            <div class="back-section">
              <span class="section-label">Konjugation</span>
              <div class="section-content">
                Präsens: ${word.conjugation.praesens}<br>
                Präteritum: ${word.conjugation.praeteritum}<br>
                Perfekt: ${word.conjugation.perfekt}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
      <div style="display:flex; justify-content:center; gap:20px; margin-top:10px;">
        <button class="primary-btn" id="prevWordBtn" style="padding:8px 16px;">◀</button>
        <button class="primary-btn" id="nextWordBtn" style="padding:8px 16px;">▶</button>
      </div>
    `;
    const card = document.getElementById('flashcard');
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      addGold(1);
    });
    document.getElementById('prevWordBtn').addEventListener('click', (e) => { e.stopPropagation(); prevWord(); });
    document.getElementById('nextWordBtn').addEventListener('click', (e) => { e.stopPropagation(); nextWord(); });
  }

  function prevWord() {
    const words = vocabulary.filter(v => v.level === currentUser.level);
    if (words.length) {
      currentWordIndex = (currentWordIndex - 1 + words.length) % words.length;
      showWords();
    }
  }
  function nextWord() {
    const words = vocabulary.filter(v => v.level === currentUser.level);
    if (words.length) {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      showWords();
    }
  }

  function showDialogs() {
    const dials = dialogues.filter(d => d.level === currentUser.level);
    if (!dials.length) {
      stageContent.innerHTML = '<p style="color:white;">Keine Dialoge für dieses Level.</p>';
      return;
    }
    const d = dials[currentDialogIndex] || dials[0];
    stageContent.innerHTML = `
      <div class="stage-character">
        <div class="character-emoji heartbeat-emoji">${d.emoji}</div>
        <div class="character-name">${d.character}</div>
      </div>
      <div class="stage-dialogue">${makeClickable(d.text)}</div>
      <div style="display:flex; justify-content:center; gap:20px; margin-top:10px;">
        <button class="primary-btn" id="prevDialogBtn" style="padding:8px 16px;">◀</button>
        <button class="primary-btn" id="nextDialogBtn" style="padding:8px 16px;">▶</button>
      </div>
    `;
    document.getElementById('prevDialogBtn').addEventListener('click', prevDialog);
    document.getElementById('nextDialogBtn').addEventListener('click', nextDialog);
  }

  function prevDialog() {
    const dials = dialogues.filter(d => d.level === currentUser.level);
    if (dials.length) {
      currentDialogIndex = (currentDialogIndex - 1 + dials.length) % dials.length;
      showDialogs();
    }
  }
  function nextDialog() {
    const dials = dialogues.filter(d => d.level === currentUser.level);
    if (dials.length) {
      currentDialogIndex = (currentDialogIndex + 1) % dials.length;
      showDialogs();
    }
  }

  function showTests() {
    const tests = testQuestions.filter(t => t.level === currentUser.level);
    if (!tests.length) {
      stageContent.innerHTML = '<p style="color:white;">Keine Tests für dieses Level.</p>';
      return;
    }
    const t = tests[currentTestIndex] || tests[0];
    stageContent.innerHTML = `
      <div class="stage-test">
        <div class="question">${t.question}</div>
        <div class="options">
          ${t.options.map(opt => `<div class="option" data-opt="${opt}" data-correct="${t.correct}">${opt}</div>`).join('')}
        </div>
      </div>
      <div style="display:flex; justify-content:center; gap:20px; margin-top:10px;">
        <button class="primary-btn" id="prevTestBtn" style="padding:8px 16px;">◀</button>
        <button class="primary-btn" id="nextTestBtn" style="padding:8px 16px;">▶</button>
      </div>
    `;
    document.querySelectorAll('.option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        const selected = e.target.dataset.opt;
        const correct = e.target.dataset.correct;
        if (selected === correct) {
          addXP(10);
          addGold(5);
          const tests = testQuestions.filter(t => t.level === currentUser.level);
          if (currentTestIndex === tests.length - 1) {
            if (!currentUser.completedLevels.includes(currentUser.level)) {
              currentUser.completedLevels.push(currentUser.level);
              saveUser();
              showCertificate(currentUser.level);
            }
          } else {
            currentTestIndex++;
            showTests();
          }
        } else {
          addGold(-2);
          e.target.style.background = '#f44336';
          setTimeout(() => e.target.style.background = '#C62828', 300);
        }
      });
    });
    document.getElementById('prevTestBtn').addEventListener('click', prevTest);
    document.getElementById('nextTestBtn').addEventListener('click', nextTest);
  }

  function prevTest() {
    const tests = testQuestions.filter(t => t.level === currentUser.level);
    if (tests.length) {
      currentTestIndex = (currentTestIndex - 1 + tests.length) % tests.length;
      showTests();
    }
  }
  function nextTest() {
    const tests = testQuestions.filter(t => t.level === currentUser.level);
    if (tests.length) {
      currentTestIndex = (currentTestIndex + 1) % tests.length;
      showTests();
    }
  }

  function makeClickable(text) {
    return text.split(' ').map(word => {
      const clean = word.replace(/[.,!?]/g, '');
      const found = vocabulary.find(v => v.word.toLowerCase() === clean.toLowerCase());
      if (found) {
        return `<span class="clickable-word" onclick="window.selectWord('${clean}')">${word}</span>`;
      }
      return word;
    }).join(' ');
  }

  window.selectWord = function(word) {
    const found = vocabulary.find(v => v.word.toLowerCase() === word.toLowerCase());
    if (found) {
      selectedWord = found;
      addXP(2);
      alert(`Wort: ${found.word} – Bedeutung: ${found.meaning}`);
    }
  };

  function showCertificate(level) {
    const levelNames = ['A1', 'A2', 'B1', 'B2'];
    const moduleName = `Medizinisches Deutsch – Level ${level} (${levelNames[level-1]})`;
    certificateInner.innerHTML = `
      <h2>🏅 Zertifikat</h2>
      <p class="cert-name">${currentUser.name}</p>
      <p class="cert-level">Level ${level} – ${levelNames[level-1]}</p>
      <p>hat erfolgreich das Modul</p>
      <p class="cert-module">${moduleName}</p>
      <p>abgeschlossen.</p>
      <p class="cert-date">${new Date().toLocaleDateString('de-DE')}</p>
      <div class="cert-signature">Prof. Dr. WFA · Akademieleitung</div>
    `;
    certificateModal.classList.add('active');
  }

  closeCert.addEventListener('click', () => certificateModal.classList.remove('active'));
  downloadCert.addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const levelNames = ['A1', 'A2', 'B1', 'B2'];
    const levelName = levelNames[currentUser.level-1] || 'A1';
    doc.setFontSize(24);
    doc.setTextColor(198, 40, 40);
    doc.text('WFA Akademie', 20, 30);
    doc.setTextColor(255, 215, 0);
    doc.setFontSize(20);
    doc.text('Zertifikat', 20, 50);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(`Hiermit wird bestätigt, dass`, 20, 70);
    doc.setFontSize(18);
    doc.setTextColor(0, 188, 212);
    doc.text(currentUser.name, 20, 90);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(`das Modul "Medizinisches Deutsch – Level ${currentUser.level} (${levelName})"`, 20, 110);
    doc.text(`erfolgreich abgeschlossen hat.`, 20, 120);
    doc.text(`Datum: ${new Date().toLocaleDateString('de-DE')}`, 20, 140);
    doc.text('Prof. Dr. WFA', 20, 170);
    doc.save(`Zertifikat_${currentUser.name}_Level${currentUser.level}.pdf`);
  });

  // ========== LEADERBOARD ==========
  function updateLeaderboard() {
    let leaderboard = [];
    const saved = localStorage.getItem('wfaLeaderboard');
    if (saved) {
      leaderboard = JSON.parse(saved);
    } else {
      leaderboard = [
        { name: 'Max', xp: 450 },
        { name: 'Anna', xp: 320 },
        { name: 'Lisa', xp: 210 }
      ];
    }
    const existingIndex = leaderboard.findIndex(u => u.name === currentUser.name);
    if (existingIndex >= 0) {
      leaderboard[existingIndex].xp = currentUser.xp;
    } else {
      leaderboard.push({ name: currentUser.name, xp: currentUser.xp });
    }
    leaderboard.sort((a,b) => b.xp - a.xp);
    if (leaderboard.length > 10) leaderboard = leaderboard.slice(0,10);
    localStorage.setItem('wfaLeaderboard', JSON.stringify(leaderboard));

    let html = '';
    leaderboard.forEach((entry, index) => {
      html += `<li><span class="rank">${index+1}.</span> ${entry.name} <span>${entry.xp} XP</span></li>`;
    });
    leaderboardList.innerHTML = html;
  }

  leaderboardBtn.addEventListener('click', () => {
    updateLeaderboard();
    leaderboardModal.classList.add('active');
  });

  closeLeaderboard.addEventListener('click', () => {
    leaderboardModal.classList.remove('active');
  });

  // ========== ADMIN ==========
  function refreshAdminDashboard() {
    if (adminDashboard.style.display === 'block') {
      adminName.textContent = currentUser.name || '-';
      adminGold.textContent = currentUser.gold;
      adminXP.textContent = currentUser.xp;
      adminLevel.textContent = currentUser.level;
      adminLastActive.textContent = new Date(currentUser.lastActive).toLocaleString();
      adminCompleted.innerHTML = currentUser.completedLevels.map(l => `<li>Level ${l}</li>`).join('');
      adminBadges.innerHTML = currentUser.badges.map(b => `<span class="badge-item">${b}</span>`).join(' ');
    }
  }

  adminTrigger.addEventListener('click', () => {
    adminOverlay.classList.add('visible');
    adminPass.value = '';
    adminDashboard.style.display = 'none';
  });
  adminCloseBtn.addEventListener('click', () => adminOverlay.classList.remove('visible'));
  adminLoginBtn.addEventListener('click', () => {
    if (adminPass.value === 'wfa2026') {
      adminDashboard.style.display = 'block';
      refreshAdminDashboard();
    } else alert('Falsches Passwort!');
  });

  // ========== EVENT-LISTENER ==========
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.dataset.tab;
      renderTab(tab);
    });
  });

  actionBtn.addEventListener('click', () => {
    if (currentTab !== 'home') return;
    if (scene === 'curtain') {
      scene = 'welcome';
      renderScene();
    } else if (scene === 'welcome' && typewriterFinished) {
      scene = 'askAge';
      renderScene();
      typewriterFinished = false;
    } else if (scene === 'askAge' && typewriterFinished) {
      scene = 'ageInput';
      renderScene();
      typewriterFinished = false;
    } else if (scene === 'introduceSecond' && typewriterFinished) {
      scene = 'showBoth';
      renderScene();
      typewriterFinished = false;
    } else if (scene === 'showBoth') {
      scene = 'assistantIntro';
      renderScene();
    }
    // medicalExamination wird durch Button im assistantIntro gesteuert
  });

  startBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) return;
    currentUser.name = name;
    userNameDisplay.textContent = name;
    xpSpan.textContent = currentUser.xp;
    goldSpan.textContent = currentUser.gold;
    loginScreen.classList.remove('active');
    mainApp.classList.add('active');
    scene = 'curtain';
    renderScene();
    saveUser();
  });

  // ========== INITIALISIERUNG ==========
  loadUser();
  if (!currentUser.name) {
    loginScreen.classList.add('active');
  }
  updateLeaderboard();
})();
