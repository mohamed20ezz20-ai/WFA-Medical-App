(function() {
  const ADMIN_PW = "wfa2026";

  // مشاهد المحادثة الكاملة بين الشخصيات الثلاث
  const scenes = [
    { character: 'arzt', emoji: '👨‍⚕️', name: 'Dr. Weber', text: 'Guten Tag, Herr Klein. Was fehlt Ihnen?' },
    { character: 'patient', emoji: '👴', name: 'Herr Klein', text: 'Ich habe starke Kopfschmerzen und Fieber.' },
    { character: 'schwester', emoji: '👩‍⚕️', name: 'Frau Schmidt', text: 'Ich werde Ihre Temperatur messen. Bitte halten Sie still.' },
    { character: 'arzt', emoji: '👨‍⚕️', name: 'Dr. Weber', text: 'Die Temperatur ist erhöht. Sie haben wahrscheinlich eine Grippe.' },
    { character: 'arzt', emoji: '👨‍⚕️', name: 'Dr. Weber', text: 'Ich verschreibe Ihnen Medikamente. Nehmen Sie sie dreimal täglich ein.' },
    { character: 'schwester', emoji: '👩‍⚕️', name: 'Frau Schmidt', text: 'Hier ist Ihr Rezept. Gehen Sie damit zur Apotheke.' },
    { character: 'patient', emoji: '👴', name: 'Herr Klein', text: 'Vielen Dank, Herr Doktor. Vielen Dank, Frau Schmidt.' },
    { character: 'arzt', emoji: '👨‍⚕️', name: 'Dr. Weber', text: 'Gute Besserung! Und schonen Sie sich.' }
  ];

  // قائمة المفردات (أسماء وأفعال)
  const vocabulary = [
    { type: 'noun', word: 'Kopfschmerzen', article: 'die', plural: '-', bedeutung: 'Schmerzen im Kopf', synonyme: 'Kopfweh', beispiel: 'Ich habe starke Kopfschmerzen.', emoji: '🤕' },
    { type: 'noun', word: 'Fieber', article: 'das', plural: '-', bedeutung: 'Erhöhte Körpertemperatur', synonyme: 'Temperatur', beispiel: 'Das Fieber steigt auf 39 Grad.', emoji: '🌡️' },
    { type: 'noun', word: 'Temperatur', article: 'die', plural: 'Temperaturen', bedeutung: 'Messung der Körperwärme', synonyme: 'Fieber', beispiel: 'Die Temperatur wird gemessen.', emoji: '🌡️' },
    { type: 'noun', word: 'Grippe', article: 'die', plural: '-', bedeutung: 'Ansteckende Viruserkrankung', synonyme: 'Influenza', beispiel: 'Er hat sich mit Grippe angesteckt.', emoji: '😷' },
    { type: 'noun', word: 'Medikamente', article: 'die', plural: 'Medikamente', bedeutung: 'Arzneimittel zur Heilung', synonyme: 'Tabletten', beispiel: 'Nehmen Sie die Medikamente regelmäßig ein.', emoji: '💊' },
    { type: 'noun', word: 'Rezept', article: 'das', plural: 'Rezepte', bedeutung: 'Ärztliche Verschreibung', synonyme: 'Verordnung', beispiel: 'Das Rezept muss in der Apotheke eingelöst werden.', emoji: '📝' },
    { type: 'noun', word: 'Apotheke', article: 'die', plural: 'Apotheken', bedeutung: 'Geschäft für Medikamente', synonyme: 'Pharmazie', beispiel: 'Gehen Sie in die Apotheke.', emoji: '💊' },
    { type: 'verb', word: 'messen', bedeutung: 'die Temperatur bestimmen', beispiel: 'Ich messe die Temperatur.', emoji: '🌡️',
      conjugation: {
        praesens: 'misst (er misst)',
        praeteritum: 'maß',
        perfekt: 'hat gemessen',
        beispiel_praesens: 'Der Arzt misst das Fieber.',
        beispiel_praeteritum: 'Gestern maß er 39 Grad.',
        beispiel_perfekt: 'Er hat die Temperatur gemessen.'
      }
    },
    { type: 'verb', word: 'verschreiben', bedeutung: 'ein Rezept ausstellen', beispiel: 'Der Arzt verschreibt Medikamente.', emoji: '📝',
      conjugation: {
        praesens: 'verschreibt',
        praeteritum: 'verschrieb',
        perfekt: 'hat verschrieben',
        beispiel_praesens: 'Dr. Weber verschreibt ihm Tabletten.',
        beispiel_praeteritum: 'Er verschrieb letzte Woche ein Antibiotikum.',
        beispiel_perfekt: 'Er hat schon viele Rezepte verschrieben.'
      }
    },
    { type: 'verb', word: 'nehmen', bedeutung: 'einnehmen (Medikamente)', beispiel: 'Nehmen Sie die Tabletten.', emoji: '💊',
      conjugation: {
        praesens: 'nimmt',
        praeteritum: 'nahm',
        perfekt: 'hat genommen',
        beispiel_praesens: 'Er nimmt die Medikamente dreimal täglich.',
        beispiel_praeteritum: 'Er nahm die Tabletten mit Wasser.',
        beispiel_perfekt: 'Er hat die Medikamente genommen.'
      }
    },
    { type: 'verb', word: 'gehen', bedeutung: 'sich begeben', beispiel: 'Ich gehe zur Apotheke.', emoji: '🚶',
      conjugation: {
        praesens: 'geht',
        praeteritum: 'ging',
        perfekt: 'ist gegangen',
        beispiel_praesens: 'Sie geht in die Praxis.',
        beispiel_praeteritum: 'Er ging gestern zum Arzt.',
        beispiel_perfekt: 'Sie ist schon zur Apotheke gegangen.'
      }
    },
    { type: 'verb', word: 'einnehmen', bedeutung: 'Medikamente schlucken', beispiel: 'Nehmen Sie die Tabletten ein.', emoji: '💊',
      conjugation: {
        praesens: 'nimmt ein',
        praeteritum: 'nahm ein',
        perfekt: 'hat eingenommen',
        beispiel_praesens: 'Er nimmt die Tabletten nach dem Essen ein.',
        beispiel_praeteritum: 'Er nahm sie gestern Abend ein.',
        beispiel_perfekt: 'Er hat die Medikamente regelmäßig eingenommen.'
      }
    }
  ];

  // قائمة الضمائر
  const pronouns = {
    ich: { type: 'pronoun', word: 'ich', emoji: '🙋', nominativ: 'ich', akkusativ: 'mich', dativ: 'mir', possessiv: 'mein', beispiel: 'Ich gehe zum Arzt.' },
    du: { type: 'pronoun', word: 'du', emoji: '🧑', nominativ: 'du', akkusativ: 'dich', dativ: 'dir', possessiv: 'dein', beispiel: 'Du hast Fieber.' },
    er: { type: 'pronoun', word: 'er', emoji: '👨', nominativ: 'er', akkusativ: 'ihn', dativ: 'ihm', possessiv: 'sein', beispiel: 'Er ist krank.' },
    sie: { type: 'pronoun', word: 'sie', emoji: '👩', nominativ: 'sie', akkusativ: 'sie', dativ: 'ihr', possessiv: 'ihr', beispiel: 'Sie hat Kopfschmerzen.' },
    es: { type: 'pronoun', word: 'es', emoji: '🧸', nominativ: 'es', akkusativ: 'es', dativ: 'ihm', possessiv: 'sein', beispiel: 'Das Kind ist krank. Es weint.' },
    wir: { type: 'pronoun', word: 'wir', emoji: '👥', nominativ: 'wir', akkusativ: 'uns', dativ: 'uns', possessiv: 'unser', beispiel: 'Wir warten auf den Arzt.' },
    ihr: { type: 'pronoun', word: 'ihr', emoji: '👤👤', nominativ: 'ihr', akkusativ: 'euch', dativ: 'euch', possessiv: 'euer', beispiel: 'Ihr seid die Patienten.' },
    siePlural: { type: 'pronoun', word: 'sie (Plural)', emoji: '👥👥', nominativ: 'sie', akkusativ: 'sie', dativ: 'ihnen', possessiv: 'ihr', beispiel: 'Sie (die Patienten) warten.' },
    Sie: { type: 'pronoun', word: 'Sie (formell)', emoji: '🧑‍⚕️', nominativ: 'Sie', akkusativ: 'Sie', dativ: 'Ihnen', possessiv: 'Ihr', beispiel: 'Wie geht es Ihnen?' }
  };

  // قائمة الصفات
  const adjectives = {
    krank: {
      type: 'adjective', word: 'krank', bedeutung: 'nicht gesund; leidend', emoji: '🤒',
      forms: {
        nominativ: { maskulin: 'kranker', feminin: 'kranke', neutral: 'krankes', plural: 'kranke' },
        akkusativ: { maskulin: 'kranken', feminin: 'kranke', neutral: 'krankes', plural: 'kranke' },
        dativ: { maskulin: 'kranken', feminin: 'kranker', neutral: 'kranken', plural: 'kranken' },
        genitiv: { maskulin: 'kranken', feminin: 'kranker', neutral: 'kranken', plural: 'kranker' }
      },
      beispiele: {
        nominativ: 'Der kranke Mann liegt im Bett.',
        akkusativ: 'Ich besuche den kranken Freund.',
        dativ: 'Ich helfe dem kranken Patienten.',
        genitiv: 'Die Symptome des kranken Kindes sind stark.'
      }
    },
    gesund: {
      type: 'adjective', word: 'gesund', bedeutung: 'frei von Krankheit; wohlauf', emoji: '💪',
      forms: {
        nominativ: { maskulin: 'gesunder', feminin: 'gesunde', neutral: 'gesundes', plural: 'gesunde' },
        akkusativ: { maskulin: 'gesunden', feminin: 'gesunde', neutral: 'gesundes', plural: 'gesunde' },
        dativ: { maskulin: 'gesunden', feminin: 'gesunder', neutral: 'gesunden', plural: 'gesunden' },
        genitiv: { maskulin: 'gesunden', feminin: 'gesunder', neutral: 'gesunden', plural: 'gesunder' }
      },
      beispiele: {
        nominativ: 'Ein gesunder Lebensstil ist wichtig.',
        akkusativ: 'Er lebt einen gesunden Lebensstil.',
        dativ: 'Mit gesunder Ernährung bleibt man fit.',
        genitiv: 'Die Vorteile gesunder Ernährung sind bekannt.'
      }
    },
    stark: {
      type: 'adjective', word: 'stark', bedeutung: 'von großer körperlicher Kraft; intensiv', emoji: '💪',
      forms: {
        nominativ: { maskulin: 'starker', feminin: 'starke', neutral: 'starkes', plural: 'starke' },
        akkusativ: { maskulin: 'starken', feminin: 'starke', neutral: 'starkes', plural: 'starke' },
        dativ: { maskulin: 'starken', feminin: 'starker', neutral: 'starken', plural: 'starken' },
        genitiv: { maskulin: 'starken', feminin: 'starker', neutral: 'starken', plural: 'starker' }
      },
      beispiele: {
        nominativ: 'Der starke Schmerz lässt nicht nach.',
        akkusativ: 'Ich habe starke Kopfschmerzen.',
        dativ: 'Bei starkem Husten hilft dieser Sirup.',
        genitiv: 'Die Ursache starker Schmerzen muss gefunden werden.'
      }
    },
    schwach: {
      type: 'adjective', word: 'schwach', bedeutung: 'nicht stark; kraftlos', emoji: '😓',
      forms: {
        nominativ: { maskulin: 'schwacher', feminin: 'schwache', neutral: 'schwaches', plural: 'schwache' },
        akkusativ: { maskulin: 'schwachen', feminin: 'schwache', neutral: 'schwaches', plural: 'schwache' },
        dativ: { maskulin: 'schwachen', feminin: 'schwacher', neutral: 'schwachen', plural: 'schwachen' },
        genitiv: { maskulin: 'schwachen', feminin: 'schwacher', neutral: 'schwachen', plural: 'schwacher' }
      },
      beispiele: {
        nominativ: 'Der schwache Patient braucht Ruhe.',
        akkusativ: 'Wir unterstützen den schwachen Kreislauf.',
        dativ: 'Bei schwachem Puls muss man handeln.',
        genitiv: 'Die Anzeichen schwacher Gesundheit sind deutlich.'
      }
    },
    akut: {
      type: 'adjective', word: 'akut', bedeutung: 'plötzlich auftretend; dringend', emoji: '🚨',
      forms: {
        nominativ: { maskulin: 'akuter', feminin: 'akute', neutral: 'akutes', plural: 'akute' },
        akkusativ: { maskulin: 'akuten', feminin: 'akute', neutral: 'akutes', plural: 'akute' },
        dativ: { maskulin: 'akuten', feminin: 'akuter', neutral: 'akuten', plural: 'akuten' },
        genitiv: { maskulin: 'akuten', feminin: 'akuter', neutral: 'akuten', plural: 'akuter' }
      },
      beispiele: {
        nominativ: 'Der akute Notfall muss sofort behandelt werden.',
        akkusativ: 'Wir haben einen akuten Patienten aufgenommen.',
        dativ: 'Bei akuter Atemnot hilft Sauerstoff.',
        genitiv: 'Die Symptome einer akuten Erkrankung sind eindeutig.'
      }
    },
    chronisch: {
      type: 'adjective', word: 'chronisch', bedeutung: 'lang anhaltend; dauerhaft', emoji: '⏳',
      forms: {
        nominativ: { maskulin: 'chronischer', feminin: 'chronische', neutral: 'chronisches', plural: 'chronische' },
        akkusativ: { maskulin: 'chronischen', feminin: 'chronische', neutral: 'chronisches', plural: 'chronische' },
        dativ: { maskulin: 'chronischen', feminin: 'chronischer', neutral: 'chronischen', plural: 'chronischen' },
        genitiv: { maskulin: 'chronischen', feminin: 'chronischer', neutral: 'chronischen', plural: 'chronischer' }
      },
      beispiele: {
        nominativ: 'Chronische Krankheiten erfordern Geduld.',
        akkusativ: 'Er leidet an chronischen Schmerzen.',
        dativ: 'Bei chronischem Husten zum Arzt gehen.',
        genitiv: 'Die Behandlung chronischer Leiden ist langwierig.'
      }
    }
  };

  // إنشاء خريطة للوصول السريع للكلمات
  const wordMap = {};
  vocabulary.forEach(item => { wordMap[item.word.toLowerCase()] = item; });
  Object.keys(pronouns).forEach(key => { const p = pronouns[key]; wordMap[p.word.toLowerCase()] = p; });
  Object.keys(adjectives).forEach(key => { const adj = adjectives[key]; wordMap[adj.word.toLowerCase()] = adj; });

  let currentStudent = {
    name: '',
    level: 1,
    gold: 180,
    lastActive: new Date().toISOString(),
    completedLevels: []
  };

  let currentSceneIndex = 0;
  let selectedWord = null;
  let showExplanation = false;
  let showingFlashcard = false;

  // عناصر DOM
  const loginArea = document.getElementById('loginArea');
  const mainApp = document.getElementById('mainApp');
  const startBtn = document.getElementById('startBtn');
  const studentNameInput = document.getElementById('studentNameInput');
  const goldAmount = document.getElementById('goldAmount');
  const adminOverlay = document.getElementById('adminOverlay');
  const adminHeaderBtn = document.getElementById('adminHeaderBtn');
  const closeAdminBtn = document.getElementById('closeAdminBtn');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminContent = document.getElementById('adminContent');
  const adminPassword = document.getElementById('adminPassword');
  const adminLoginSubmit = document.getElementById('adminLoginSubmit');
  const studentNameHeader = document.getElementById('studentNameHeader');
  const stageCurtainLeft = document.getElementById('stageCurtainLeft');
  const stageCurtainRight = document.getElementById('stageCurtainRight');
  const stageContent = document.getElementById('stageContent');
  const stageDialogue = document.getElementById('stageDialogue');
  const man = document.getElementById('man');
  const prevSceneBtn = document.getElementById('prevSceneBtn');
  const nextSceneBtn = document.getElementById('nextSceneBtn');

  function saveStudent() {
    localStorage.setItem('wfaStudent', JSON.stringify(currentStudent));
  }

  function loadStudent() {
    const saved = localStorage.getItem('wfaStudent');
    if (saved) {
      currentStudent = JSON.parse(saved);
      goldAmount.innerText = currentStudent.gold;
      studentNameHeader.innerText = currentStudent.name;
    }
  }

  function addGold(amount) {
    currentStudent.gold += amount;
    goldAmount.innerText = currentStudent.gold;
    saveStudent();
    animateGold();
  }

  function animateGold() {
    const coin = document.querySelector('.gold-coin');
    coin.style.transform = 'scale(1.5)';
    setTimeout(() => coin.style.transform = 'scale(1)', 200);
  }

  function createClickableDialogue(text) {
    const parts = text.split(/(\s+|[.,!?])/);
    return parts.map((part) => {
      if (part.match(/^\s+$/) || part.match(/^[.,!?]$/)) return part;
      const cleanWord = part.replace(/[.,!?]/g, '');
      const lowerWord = cleanWord.toLowerCase();
      if (wordMap[lowerWord]) {
        const item = wordMap[lowerWord];
        let wordClass = '';
        if (item.type === 'noun') {
          if (item.article === 'der') wordClass = 'noun-m';
          else if (item.article === 'die') wordClass = 'noun-f';
          else if (item.article === 'das') wordClass = 'noun-n';
          if (item.plural && item.plural !== '-') wordClass = 'plural-word';
        } else if (item.type === 'verb') {
          wordClass = 'verb-word';
        } else if (item.type === 'adjective') {
          wordClass = 'adjective-word';
        } else if (item.type === 'pronoun') {
          wordClass = 'pronoun-word';
        }
        return `<span class="clickable-word ${wordClass}" onclick="selectWord('${cleanWord}')">${part}</span>`;
      }
      return part;
    }).join('');
  }

  function renderStageContent() {
    const scene = scenes[currentSceneIndex];
    if (showingFlashcard && selectedWord) {
      let cardHtml = '';
      if (!showExplanation) {
        if (selectedWord.type === 'verb') {
          cardHtml = `
            <div class="card-emoji">${selectedWord.emoji}</div>
            <div class="word-display verb-word">${selectedWord.word}</div>
            <p style="margin-top:15px; color:#00bcd4;">👆 Tippen für Konjugation</p>
          `;
        } else if (selectedWord.type === 'pronoun') {
          cardHtml = `
            <div class="card-emoji">${selectedWord.emoji}</div>
            <div class="word-display pronoun-word">${selectedWord.word}</div>
            <p style="margin-top:15px; color:#00bcd4;">👆 Tippen für Deklination</p>
          `;
        } else if (selectedWord.type === 'adjective') {
          cardHtml = `
            <div class="card-emoji">${selectedWord.emoji}</div>
            <div class="word-display adjective-word">${selectedWord.word}</div>
            <p style="margin-top:15px; color:#00bcd4;">👆 Tippen für Deklination</p>
          `;
        } else {
          let artikelClass = '';
          if (selectedWord.article === 'der') artikelClass = 'noun-m';
          else if (selectedWord.article === 'die') artikelClass = 'noun-f';
          else if (selectedWord.article === 'das') artikelClass = 'noun-n';
          cardHtml = `
            <div class="card-emoji">${selectedWord.emoji}</div>
            <div class="word-display">
              ${selectedWord.article ? `<span class="${artikelClass}">${selectedWord.article}</span> ` : ''}
              <span>${selectedWord.word}</span>
            </div>
            ${selectedWord.plural ? `<div class="plural-word">Plural: ${selectedWord.plural}</div>` : ''}
            <p style="margin-top:15px; color:#00bcd4;">👆 Tippen für Erklärung</p>
          `;
        }
      } else {
        if (selectedWord.type === 'verb') {
          const conj = selectedWord.conjugation;
          cardHtml = `
            <div class="explanation">
              <strong>Bedeutung:</strong> ${selectedWord.bedeutung}<br><br>
              <strong>Konjugation:</strong>
              <table class="conjugation-table">
                <tr><td class="tense">Präsens:</td><td>${conj.praesens}</td><td>${conj.beispiel_praesens}</td></tr>
                <tr><td class="tense">Präteritum:</td><td>${conj.praeteritum}</td><td>${conj.beispiel_praeteritum}</td></tr>
                <tr><td class="tense">Perfekt:</td><td>${conj.perfekt}</td><td>${conj.beispiel_perfekt}</td></tr>
              </table>
            </div>
            <p style="margin-top:15px; color:#00bcd4;">👆 Zurück</p>
          `;
        } else if (selectedWord.type === 'pronoun') {
          cardHtml = `
            <div class="explanation">
              <strong>Personalpronomen:</strong> ${selectedWord.word}<br><br>
              <table class="conjugation-table">
                <tr><td class="tense">Nominativ:</td><td>${selectedWord.nominativ}</td></tr>
                <tr><td class="tense">Akkusativ:</td><td>${selectedWord.akkusativ}</td></tr>
                <tr><td class="tense">Dativ:</td><td>${selectedWord.dativ}</td></tr>
                <tr><td class="tense">Possessiv:</td><td>${selectedWord.possessiv}</td></tr>
              </table>
              <p><strong>Beispiel:</strong> ${selectedWord.beispiel}</p>
            </div>
            <p style="margin-top:15px; color:#00bcd4;">👆 Zurück</p>
          `;
        } else if (selectedWord.type === 'adjective') {
          const f = selectedWord.forms;
          cardHtml = `
            <div class="explanation">
              <strong>Bedeutung:</strong> ${selectedWord.bedeutung}<br><br>
              <strong>Deklination:</strong>
              <table class="conjugation-table">
                <tr><td class="tense">Nominativ:</td><td>m: ${f.nominativ.maskulin}, f: ${f.nominativ.feminin}, n: ${f.nominativ.neutral}, Pl: ${f.nominativ.plural}</td></tr>
                <tr><td class="tense">Akkusativ:</td><td>m: ${f.akkusativ.maskulin}, f: ${f.akkusativ.feminin}, n: ${f.akkusativ.neutral}, Pl: ${f.akkusativ.plural}</td></tr>
                <tr><td class="tense">Dativ:</td><td>m: ${f.dativ.maskulin}, f: ${f.dativ.feminin}, n: ${f.dativ.neutral}, Pl: ${f.dativ.plural}</td></tr>
                <tr><td class="tense">Genitiv:</td><td>m: ${f.genitiv.maskulin}, f: ${f.genitiv.feminin}, n: ${f.genitiv.neutral}, Pl: ${f.genitiv.plural}</td></tr>
              </table>
              <p><strong>Beispiele:</strong><br>${selectedWord.beispiele.nominativ}<br>${selectedWord.beispiele.akkusativ}<br>${selectedWord.beispiele.dativ}<br>${selectedWord.beispiele.genitiv}</p>
            </div>
            <p style="margin-top:15px; color:#00bcd4;">👆 Zurück</p>
          `;
        } else {
          cardHtml = `
            <div class="explanation">
              <strong>Bedeutung:</strong> ${selectedWord.bedeutung}<br><br>
              <strong>Synonyme:</strong> ${selectedWord.synonyme || '–'}<br><br>
              <strong>Beispiel:</strong> "${selectedWord.beispiel}"
            </div>
            <p style="margin-top:15px; color:#00bcd4;">👆 Zurück</p>
          `;
        }
      }

      stageContent.innerHTML = `
        <div class="stage-character small">
          <div class="character-emoji">${scene.emoji}</div>
          <div class="character-name">${scene.name}</div>
        </div>
        <div class="stage-flashcard" id="stageFlashcard" onclick="flipFlashcard()">
          <button class="close-flashcard" onclick="closeFlashcard(event)">✕</button>
          ${cardHtml}
        </div>
      `;
    } else {
      stageContent.innerHTML = `
        <div class="stage-character">
          <div class="character-emoji">${scene.emoji}</div>
          <div class="character-name">${scene.name}</div>
        </div>
      `;
    }
  }

  function updateStage() {
    const scene = scenes[currentSceneIndex];
    stageDialogue.innerHTML = createClickableDialogue(scene.text);
    prevSceneBtn.disabled = (currentSceneIndex === 0);
    nextSceneBtn.disabled = (currentSceneIndex === scenes.length - 1);
    renderStageContent();
  }

  function nextScene() {
    if (currentSceneIndex < scenes.length - 1) {
      currentSceneIndex++;
      showingFlashcard = false;
      updateStage();
      addGold(5);
    }
  }

  function prevScene() {
    if (currentSceneIndex > 0) {
      currentSceneIndex--;
      showingFlashcard = false;
      updateStage();
      addGold(5);
    }
  }

  window.selectWord = function(word) {
    const lowerWord = word.toLowerCase();
    if (wordMap[lowerWord]) {
      selectedWord = wordMap[lowerWord];
      showExplanation = false;
      showingFlashcard = true;
      renderStageContent();
      addGold(3);
    }
  };

  window.flipFlashcard = function() {
    if (selectedWord) {
      showExplanation = !showExplanation;
      renderStageContent();
      addGold(2);
    }
  };

  window.closeFlashcard = function(event) {
    event.stopPropagation();
    showingFlashcard = false;
    renderStageContent();
  };

  adminHeaderBtn.addEventListener('click', function() {
    adminOverlay.classList.add('visible');
    adminLoginForm.style.display = 'flex';
    adminContent.style.display = 'none';
    adminPassword.value = '';
  });

  closeAdminBtn.addEventListener('click', () => adminOverlay.classList.remove('visible'));

  adminLoginSubmit.addEventListener('click', function() {
    if (adminPassword.value === ADMIN_PW) {
      adminLoginForm.style.display = 'none';
      adminContent.style.display = 'block';
      document.getElementById('adminStats').innerHTML = `<div class="stat-card">Gold: ${currentStudent.gold}</div><div class="stat-card">Level: ${currentStudent.level}</div><div class="stat-card">Letzte Aktivität: ${new Date(currentStudent.lastActive).toLocaleString()}</div>`;
      document.getElementById('adminUserBody').innerHTML = `<tr><td>${currentStudent.name}</td><td>${currentStudent.level}</td><td>${currentStudent.gold}</td><td>${new Date(currentStudent.lastActive).toLocaleString()}</td></tr>`;
      let vocabHtml = '<ul>';
      vocabulary.slice(0,10).forEach(v => vocabHtml += `<li>${v.artikel ? v.artikel+' ' : ''}${v.word}</li>`);
      vocabHtml += '</ul>';
      document.getElementById('adminVocabList').innerHTML = vocabHtml;
    } else alert('Falsches Passwort!');
  });

  startBtn.addEventListener('click', function() {
    const name = studentNameInput.value.trim();
    if (!name) return;
    currentStudent.name = name;
    saveStudent();
    goldAmount.innerText = currentStudent.gold;
    studentNameHeader.innerText = name;

    stageCurtainLeft.classList.add('open-left');
    stageCurtainRight.classList.add('open-right');

    setTimeout(() => {
      const stage = document.querySelector('.stage-container');
      stage.classList.add('crash-animation');
      setTimeout(() => {
        document.querySelectorAll('.car').forEach(car => car.style.display = 'none');
      }, 900);
      setTimeout(() => {
        man.style.display = 'block';
        man.classList.add('man-run');
      }, 1000);
      setTimeout(() => {
        man.style.display = 'none';
        currentSceneIndex = 0;
        showingFlashcard = false;
        updateStage();
      }, 2000);
    }, 500);

    setTimeout(() => {
      loginArea.style.display = 'none';
      mainApp.classList.add('active');
    }, 3500);
  });

  loadStudent();
  if (currentStudent.name) {
    stageCurtainLeft.classList.add('open-left');
    stageCurtainRight.classList.add('open-right');
    setTimeout(() => {
      loginArea.style.display = 'none';
      mainApp.classList.add('active');
      document.querySelectorAll('.car').forEach(car => car.style.display = 'none');
      man.style.display = 'none';
      currentSceneIndex = 0;
      showingFlashcard = false;
      updateStage();
    }, 1500);
    studentNameHeader.innerText = currentStudent.name;
  }

  nextSceneBtn.addEventListener('click', nextScene);
  prevSceneBtn.addEventListener('click', prevScene);
})();
