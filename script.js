// script.js (als Modul)
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

(function() {
  const ADMIN_PW = "wfa2026";

  // --- Bestehender Code (Theater, Dialoge, Vokabeln usw.) ---
  // Hier muss der gesamte bisherige Code aus der vorherigen script.js-Datei eingefügt werden.
  // Der Einfachheit halber wird auf die vorherige vollständige Version verwiesen.
  // Wichtig: Alle Variablen (scenes, vocabulary, pronouns, adjectives, wordMap, currentStudent, currentSceneIndex, selectedWord, showExplanation, showingFlashcard) und Funktionen (saveStudent, loadStudent, addGold, animateGold, createClickableDialogue, renderStageContent, updateStage, nextScene, prevScene, selectWord, flipFlashcard, closeFlashcard) sowie Event-Listener für Admin und startBtn müssen hier definiert sein.

  // Aus Platzgründen kann ich hier nicht den gesamten Code wiederholen, aber Sie müssen den Code aus Ihrer vorherigen funktionierenden script.js an dieser Stelle einfügen.
  // Der Code sollte alle benötigten Definitionen enthalten, insbesondere:
  // - scenes
  // - vocabulary, pronouns, adjectives
  // - wordMap
  // - currentStudent, currentSceneIndex, selectedWord, showExplanation, showingFlashcard
  // - saveStudent, loadStudent, addGold, animateGold
  // - createClickableDialogue, renderStageContent, updateStage, nextScene, prevScene
  // - selectWord, flipFlashcard, closeFlashcard
  // - Admin-Event-Listener und startBtn-Listener (modifiziert weiter unten)

  // Beispielhafte Platzhalter (müssen durch echten Code ersetzt werden):
  const scenes = [ /* ... */ ];
  const vocabulary = [ /* ... */ ];
  const pronouns = { /* ... */ };
  const adjectives = { /* ... */ };
  const wordMap = {};
  let currentStudent = { name: '', level: 1, gold: 180, lastActive: '', completedLevels: [] };
  let currentSceneIndex = 0;
  let selectedWord = null;
  let showExplanation = false;
  let showingFlashcard = false;
  function saveStudent() {}
  function loadStudent() {}
  function addGold(amount) {}
  function animateGold() {}
  function createClickableDialogue(text) { return text; }
  function renderStageContent() {}
  function updateStage() {}
  function nextScene() {}
  function prevScene() {}
  function selectWord(word) {}
  function flipFlashcard() {}
  function closeFlashcard(event) {}

  // --- 3D-Szene ---
  let threeScene, threeCamera, threeRenderer, threeLabelRenderer, threeControls;
  let threeCubes = [];
  let threeContainer = document.getElementById('threeContainer');
  let stageContainer = document.getElementById('stageContainer');
  let show3DBtn = document.getElementById('show3DBtn');
  let showStageBtn = document.getElementById('showStageBtn');

  function initThreeScene() {
    if (threeScene) return;

    threeScene = new THREE.Scene();
    threeScene.background = new THREE.Color(0x1a1a2e);

    threeCamera = new THREE.PerspectiveCamera(45, threeContainer.clientWidth / threeContainer.clientHeight, 0.1, 1000);
    threeCamera.position.set(0, 2, 8);
    threeCamera.lookAt(0, 0, 0);

    threeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    threeRenderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);
    threeRenderer.shadowMap.enabled = true;
    threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('three-canvas').appendChild(threeRenderer.domElement);

    threeLabelRenderer = new CSS2DRenderer();
    threeLabelRenderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);
    threeLabelRenderer.domElement.style.position = 'absolute';
    threeLabelRenderer.domElement.style.top = '0';
    threeLabelRenderer.domElement.style.left = '0';
    threeLabelRenderer.domElement.style.pointerEvents = 'none';
    document.getElementById('three-canvas').appendChild(threeLabelRenderer.domElement);

    threeControls = new OrbitControls(threeCamera, threeRenderer.domElement);
    threeControls.enableDamping = true;
    threeControls.dampingFactor = 0.05;
    threeControls.autoRotate = true;
    threeControls.autoRotateSpeed = 1.0;
    threeControls.enableZoom = true;
    threeControls.maxPolarAngle = Math.PI / 2;

    const ambientLight = new THREE.AmbientLight(0x404060);
    threeScene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(2, 5, 3);
    dirLight.castShadow = true;
    dirLight.receiveShadow = true;
    threeScene.add(dirLight);

    const backLight = new THREE.PointLight(0x4466cc, 0.5);
    backLight.position.set(-2, 1, -2);
    threeScene.add(backLight);

    const groundGeometry = new THREE.CircleGeometry(5, 32);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x2a2a4a, roughness: 0.5, metalness: 0.1 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    threeScene.add(ground);

    const levels = [
      { name: '🏥 Im Krankenhaus', color: 0xC62828, posX: -1.5, posY: 0.5, posZ: 0 },
      { name: '🛏️ Station', color: 0x1565C0, posX: 1.5, posY: 0.5, posZ: 0 },
      { name: '🔪 OP', color: 0x7CB342, posX: 0, posY: 1.2, posZ: -1.5 },
      { name: '💓 Intensivstation', color: 0xFFD700, posX: 0, posY: 0.2, posZ: 1.8 }
    ];

    levels.forEach((level, index) => {
      const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
      const material = new THREE.MeshStandardMaterial({ color: level.color, emissive: 0x222222 });
      const cube = new THREE.Mesh(geometry, material);
      cube.castShadow = true;
      cube.receiveShadow = true;
      cube.position.set(level.posX, level.posY, level.posZ);
      
      const pointLight = new THREE.PointLight(level.color, 0.8, 3);
      pointLight.position.set(level.posX, level.posY + 0.3, level.posZ);
      threeScene.add(pointLight);

      const div = document.createElement('div');
      div.textContent = level.name;
      div.style.color = 'white';
      div.style.fontSize = '20px';
      div.style.fontWeight = 'bold';
      div.style.textShadow = '2px 2px 4px black';
      div.style.background = 'rgba(0,0,0,0.7)';
      div.style.padding = '5px 15px';
      div.style.borderRadius = '30px';
      div.style.border = '2px solid gold';
      div.style.whiteSpace = 'nowrap';
      const label = new CSS2DObject(div);
      label.position.set(level.posX, level.posY + 1.0, level.posZ);

      threeScene.add(cube);
      threeScene.add(label);

      threeCubes.push({ cube, label, levelIndex: index, name: level.name });
    });

    function animate() {
      requestAnimationFrame(animate);
      threeControls.update();
      threeRenderer.render(threeScene, threeCamera);
      threeLabelRenderer.render(threeScene, threeCamera);
    }
    animate();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    threeRenderer.domElement.addEventListener('click', (event) => {
      const rect = threeRenderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, threeCamera);
      const intersects = raycaster.intersectObjects(threeCubes.map(item => item.cube));

      if (intersects.length > 0) {
        const hitCube = intersects[0].object;
        const cubeData = threeCubes.find(item => item.cube === hitCube);
        if (cubeData) {
          currentLevel = cubeData.levelIndex + 1;
          showingFlashcard = false;
          showStageBtn.click();
          // Hier loadLevel aufrufen (muss definiert sein)
          if (typeof loadLevel === 'function') {
            loadLevel(currentLevel);
          } else {
            console.warn('loadLevel ist nicht definiert');
          }
        }
      }
    });

    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
      threeCamera.aspect = threeContainer.clientWidth / threeContainer.clientHeight;
      threeCamera.updateProjectionMatrix();
      threeRenderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);
      threeLabelRenderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);
    }
  }

  // Umschaltlogik
  show3DBtn.addEventListener('click', () => {
    threeContainer.style.display = 'block';
    stageContainer.style.display = 'none';
    show3DBtn.classList.add('active');
    showStageBtn.classList.remove('active');
    if (!threeScene) {
      initThreeScene();
    } else {
      threeControls.autoRotate = true;
    }
  });

  showStageBtn.addEventListener('click', () => {
    threeContainer.style.display = 'none';
    stageContainer.style.display = 'block';
    showStageBtn.classList.add('active');
    show3DBtn.classList.remove('active');
    if (threeControls) threeControls.autoRotate = false;
    renderStageContent(); // Aktualisiert Theater
  });

  // --- Modifizierter startBtn-Listener (aus dem bestehenden Code) ---
  // Achtung: Der ursprüngliche startBtn-Listener muss durch diesen ersetzt werden,
  // oder wir müssen sicherstellen, dass beide existieren und sich nicht überschreiben.
  // Hier wird angenommen, dass der ursprüngliche Listener durch diesen ersetzt wird.
  const originalStartListener = startBtn.onclick; // falls vorhanden
  startBtn.addEventListener('click', function() {
    const name = studentNameInput.value.trim();
    if (!name) return;
    currentStudent.name = name;
    saveStudent();
    goldAmount.innerText = currentStudent.gold;
    studentNameHeader.innerText = name;

    stageCurtainLeft.classList.add('open-left');
    stageCurtainRight.classList.add('open-right');

    // Crash-Animation (falls gewünscht)
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
      if (threeContainer.style.display === 'block') {
        initThreeScene();
      } else {
        updateStage();
      }
    }, 3500);
  });

  // Restlicher Code (Admin, loadStudent, Event-Listener für prev/next) bleibt unverändert
  // aus dem bestehenden Code. Hier müssen die entsprechenden Definitionen vorhanden sein.

  // Beispiel: Admin-Events (müssen aus bestehendem Code übernommen werden)
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

  // Vorhandenen Schüler laden
  loadStudent();
  if (currentStudent.name) {
    stageCurtainLeft.classList.add('open-left');
    stageCurtainRight.classList.add('open-right');
    setTimeout(() => {
      loginArea.style.display = 'none';
      mainApp.classList.add('active');
      if (threeContainer.style.display === 'block') {
        initThreeScene();
      } else {
        updateStage();
      }
    }, 1500);
    studentNameHeader.innerText = currentStudent.name;
  }

  nextSceneBtn.addEventListener('click', nextScene);
  prevSceneBtn.addEventListener('click', prevScene);
})();
