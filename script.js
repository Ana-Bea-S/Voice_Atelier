// ======== TRADUÇÕES ========
const translations = {
  pt: {
    "header.title": "Voice Atelier",
    "header.subtitle":
      "Projeto OBL 4101 – Modificações de voz (tempo, pitch e efeitos especiais)",
    "header.language": "Idioma:",
    "pill.title": "🔊 Interface Web para o Vocodeur.m",

    "step1.title": "1. Carregar áudio",
    "step1.desc":
      "Use os áudios do projeto (Extrait.wav, Diner.wav, Halleluia.wav) ou grave a sua própria voz.",
    "step1.labelFile": "Arquivo de áudio (.wav recomendado)",
    "step1.placeholderFile": "Clique para selecionar um arquivo",
    "step1.recordTitle": "ou grave sua voz",

    "step2.title": "2. Escolher efeito",
    "step2.desc":
      "Os efeitos abaixo correspondem às funções que você implementou no MATLAB.",
    "step2.effectLabel": "Efeito de modificação:",
    "step3.title": "3. Resultado do processamento",
    "step3.desc":
      "Depois de aplicar o efeito, o áudio processado aparece aqui.",

    "effect.none": "Nenhum (som original)",
    "effect.tempo": "Mudança de tempo (PVoc)",
    "effect.pitch": "Mudança de pitch (PVoc + resample)",
    "effect.robot": "Voz robótica",
    "effect.harmonic": "Duo / Trio harmônico",
    "effect.ghost": "Fantasma / Whisper",
    "effect.telephone": "Telefone / Rádio",
    "effect.harmonic-duo-trio": "Duo / Trio harmônico",
    "effect.ghost-whisper": "Fantasma / Whisper",
    "effect.telephone-radio": "Telefone / Rádio",

    "effects.none.note":
      "Nenhum efeito especial – o áudio original será reproduzido.",
    "effects.tempo.note":
      "Modifica a velocidade da fala sem alterar o pitch (usa PVoc).",
    "effects.tempo.factorLabel": "Fator de tempo (rapp)",
    "effects.tempo.help":
      "Valores > 1 deixam o som mais lento; valores < 1 deixam mais rápido.",
    "effects.pitch.note":
      "Modifica o pitch sem alterar a velocidade (PVoc + resample).",
    "effects.pitch.semitonesLabel": "Deslocamento de pitch (semitons)",
    "effects.pitch.help":
      "Valores positivos deixam a voz mais aguda, negativos mais grave.",
    "effects.robot.note":
      "Robotização usando modulação em frequência (função Rob.m).",
    "effects.robot.fcLabel": "Frequência de modulação (fc em Hz)",
    "effects.robot.help":
      "Experimente fc ≈ 200–800 Hz para fala; valores muito altos soam metálicos.",
    "effects.harmonic.note":
      "Gera vozes adicionais (duo ou trio) a partir da voz original (harmonização).",
    "effects.harmonic.voicesLabel": "Número de vozes",
    "effects.harmonic.interval1Label":
      "Intervalo voz 1 (semitons – ex: 7 = quinta)",
    "effects.harmonic.interval2Label":
      "Intervalo voz 2 (semitons – ex: 12 = oitava)",
    "effects.harmonic.mixLabel": "Mistura seco/molhado",
    "effects.harmonic.help":
      "Você pode criar combinações como quinta + oitava para trio harmônico.",
    "effects.ghost.note":
      "Efeito de sussurro/fantasma, baseado em remoção de pitch e reforço de ruído.",
    "effects.ghost.intensityLabel": "Intensidade",
    "effects.ghost.help":
      "Aumente a intensidade para mais efeito de sussurro; ajuste a reverb para profundidade de eco.",
    "effects.ghost.reverbLabel": "Quantidade de reverberação",
    "effects.telephone.note":
      "Simula o som de telefone/rádio: banda limitada e possível ruído.",
    "effects.telephone.lowCutLabel": "Corte de graves (Hz)",
    "effects.telephone.highCutLabel": "Corte de agudos (Hz)",
    "effects.telephone.noiseLabel": "Nível de ruído (0–1)",
    "effects.telephone.noiseHelp":
      "Use um valor pequeno (ex: 0.05–0.15) para simular chiado de linha.",

    "status.selectEffectHint":
      "Selecione um efeito para ver os parâmetros.",
    "status.selectEffect": "Selecione um efeito...",
    "status.noneApplied": "Nenhum efeito aplicado ainda.",
    "status.processing": "Processando áudio... (simulação no front-end)",
    "status.processingDone":
      "Simulação concluída.",
    "status.noFile": "Selecione primeiro um arquivo de áudio.",
    "status.selectAndApply": 'Escolha um efeito e clique em "Aplicar".',

    "buttons.apply": "▶ Aplicar efeito",
    "buttons.reset": "Limpar seleção",
    "buttons.record": "🎤 Gravar",
    "buttons.stop": "⏹ Parar",
    "buttons.clearRecord": "✕ Limpar",

    "recording.title": "Gravação de voz",
    "recording.label": "ou grave a sua própria voz",
    "status.label": "Status:",

    "info.title": "Sobre os efeitos",
    "info.desc":
      "Esta interface foi pensada para se conectar com o código MATLAB do seu projeto.",
    "info.items.tempo": "Tempo – PVoc com fatores <1 ou >1.",
    "info.items.pitch": "Pitch – PVoc + resample.",
    "info.items.robot": "Robot – modulação (Rob.m).",
    "info.items.harmonic": "Duo/Trio – transposição harmônica.",
    "info.items.ghost": "Fantasma – Whisper / Ghost effect.",
    "info.items.telephone":
      "Telefone/Rádio – filtragem em banda e possível ruído.",

    "tags.tfct": "TFCT",
    "tags.pv": "Phase Vocoder",
    "tags.rm": "Ring Modulation",
    "tags.bp": "Bandpass Filter"
  },

  en: {
    "header.title": "Voice Atelier",
    "header.subtitle":
      "OBL 4101 Project – Voice modifications (time, pitch and special effects)",
    "header.language": "Language:",
    "pill.title": "🔊 Web interface for Vocodeur.m",

    "step1.title": "1. Load audio",
    "step1.desc":
      "Use the project audios (Extrait.wav, Diner.wav, Halleluia.wav) or record your own voice.",
    "step1.labelFile": "Audio file (.wav recommended)",
    "step1.placeholderFile": "Click to choose a file",
    "step1.recordTitle": "or record your voice",

    "step2.title": "2. Choose effect",
    "step2.desc":
      "The effects below correspond to the functions you implemented in MATLAB.",
    "step2.effectLabel": "Effect modification:",
    "step3.title": "3. Processing result",
    "step3.desc":
      "After applying the effect, the processed audio appears here.",

    "effect.none": "None (original sound)",
    "effect.tempo": "Time-stretch (PVoc)",
    "effect.pitch": "Pitch-shift (PVoc + resample)",
    "effect.robot": "Robot voice",
    "effect.harmonic": "Harmonic duo / trio",
    "effect.ghost": "Ghost / Whisper",
    "effect.telephone": "Telephone / Radio",
    "effect.harmonic-duo-trio": "Harmonic duo / trio",
    "effect.ghost-whisper": "Ghost / Whisper",
    "effect.telephone-radio": "Telephone / Radio",

    "effects.none.note":
      "No special effect – the original audio will be played.",
    "effects.tempo.note":
      "Changes the speech rate without changing the pitch (PVoc).",
    "effects.tempo.factorLabel": "Time factor (rapp)",
    "effects.tempo.help":
      "Values > 1 make it slower; values < 1 make it faster.",
    "effects.pitch.note":
      "Changes pitch without changing duration (PVoc + resample).",
    "effects.pitch.semitonesLabel": "Pitch shift (semitones)",
    "effects.pitch.help":
      "Positive values make the voice higher, negative lower.",
    "effects.robot.note":
      "Robotisation using frequency modulation (Rob.m function).",
    "effects.robot.fcLabel": "Modulation frequency (fc in Hz)",
    "effects.robot.help":
      "Try fc ≈ 200–800 Hz for speech; very high values sound metallic.",
    "effects.harmonic.note":
      "Creates extra voices (duo or trio) from the original voice (harmonisation).",
    "effects.harmonic.voicesLabel": "Number of voices",
    "effects.harmonic.interval1Label":
      "Voice 1 interval (semitones – e.g. 7 = fifth)",
    "effects.harmonic.interval2Label":
      "Voice 2 interval (semitones – e.g. 12 = octave)",
    "effects.harmonic.mixLabel": "Dry/wet mix",
    "effects.harmonic.help":
      "You can make combinations like fifth + octave for a trio effect.",
    "effects.ghost.note":
      "Whisper/ghost effect, based on pitch removal and noise enhancement.",
    "effects.ghost.intensityLabel": "Intensity",
    "effects.ghost.help":
      "Increase intensity for more whisper effect; adjust reverb for echo depth.",
    "effects.ghost.reverbLabel": "Reverb amount",
    "effects.telephone.note":
      "Simulates telephone/radio sound: band-limited with optional noise.",
    "effects.telephone.lowCutLabel": "Low cut (Hz)",
    "effects.telephone.highCutLabel": "High cut (Hz)",
    "effects.telephone.noiseLabel": "Noise level (0–1)",
    "effects.telephone.noiseHelp":
      "Use a small value (e.g. 0.05–0.15) to simulate line hiss.",

    "status.selectEffectHint": "Select an effect to see its parameters.",
    "status.selectEffect": "Select an effect...",
    "status.noneApplied": "No effect applied yet.",
    "status.processing": "Processing audio... (front-end simulation)",
    "status.processingDone":
      "Simulation finished.",
    "status.noFile": "Please select an audio file first.",
    "status.selectAndApply": 'Select an effect and click "Apply".',

    "buttons.apply": "▶ Apply effect",
    "buttons.reset": "Clear selection",
    "buttons.record": "🎤 Record",
    "buttons.stop": "⏹ Stop",
    "buttons.clearRecord": "✕ Clear",

    "recording.title": "Voice Recording",
    "recording.label": "or record your own voice",
    "status.label": "Status:",

    "info.title": "About the effects",
    "info.desc": "This interface is designed to connect to your MATLAB code.",
    "info.items.tempo": "Time – PVoc with factors <1 or >1.",
    "info.items.pitch": "Pitch – PVoc + resample.",
    "info.items.robot": "Robot – modulation (Rob.m).",
    "info.items.harmonic": "Duo/Trio – harmonic transposition.",
    "info.items.ghost": "Ghost – Whisper / Ghost effect.",
    "info.items.telephone":
      "Telephone/Radio – narrow-band filtering and possible noise.",

    "tags.tfct": "STFT",
    "tags.pv": "Phase Vocoder",
    "tags.rm": "Ring Modulation",
    "tags.bp": "Bandpass Filter"
  },

  fr: {
    "header.title": "Voice Atelier",
    "header.subtitle":
      "Projet OBL 4101 – Modifications de voix (temps, hauteur et effets spéciaux)",
    "header.language": "Langue :",
    "pill.title": "🔊 Interface Web pour Vocodeur.m",

    "step1.title": "1. Charger l’audio",
    "step1.desc":
      "Utilisez les audios du projet (Extrait.wav, Diner.wav, Halleluia.wav) ou enregistrez votre propre voix.",
    "step1.labelFile": "Fichier audio (.wav recommandé)",
    "step1.placeholderFile": "Cliquez pour choisir un fichier",
    "step1.recordTitle": "ou enregistrez votre voix",

    "step2.title": "2. Choisir l’effet",
    "step2.desc":
      "Les effets ci-dessous correspondent aux fonctions implémentées dans MATLAB.",
    "step2.effectLabel": "Effet de modification :",
    "step3.title": "3. Résultat du traitement",
    "step3.desc":
      "Après l’application de l’effet, l’audio traité apparaît ici.",

    "effect.none": "Aucun (son original)",
    "effect.tempo": "Changement de temps (PVoc)",
    "effect.pitch": "Changement de hauteur (PVoc + resample)",
    "effect.robot": "Voix robotisée",
    "effect.harmonic": "Duo / Trio harmonique",
    "effect.ghost": "Fantôme / Whisper",
    "effect.telephone": "Téléphone / Radio",
    "effect.harmonic-duo-trio": "Duo / Trio harmonique",
    "effect.ghost-whisper": "Fantôme / Whisper",
    "effect.telephone-radio": "Téléphone / Radio",

    "effects.none.note":
      "Aucun effet spécial – le son original est reproduit.",
    "effects.tempo.note":
      "Modifie la vitesse sans changer la hauteur (PVoc).",
    "effects.tempo.factorLabel": "Facteur de temps (rapp)",
    "effects.tempo.help":
      "Valeurs > 1 : plus lent ; valeurs < 1 : plus rapide.",
    "effects.pitch.note":
      "Modifie la hauteur sans changer la durée (PVoc + resample).",
    "effects.pitch.semitonesLabel": "Déplacement (demi-tons)",
    "effects.pitch.help":
      "Valeurs positives : plus aigu ; négatives : plus grave.",
    "effects.robot.note":
      "Robotisation par modulation de fréquence (fonction Rob.m).",
    "effects.robot.fcLabel": "Fréquence de modulation (fc en Hz)",
    "effects.robot.help":
      "Essayez fc ≈ 200–800 Hz pour la parole ; très élevé donne un son métallique.",
    "effects.harmonic.note":
      "Crée des voix supplémentaires (duo ou trio) à partir de la voix originale (harmonisation).",
    "effects.harmonic.voicesLabel": "Nombre de voix",
    "effects.harmonic.interval1Label":
      "Intervalle voix 1 (demi-tons – ex : 7 = quinte)",
    "effects.harmonic.interval2Label":
      "Intervalle voix 2 (demi-tons – ex : 12 = octave)",
    "effects.harmonic.mixLabel": "Mix dry/wet",
    "effects.harmonic.help":
      "Vous pouvez combiner quinte + octave pour un effet trio.",
    "effects.ghost.note":
      "Effet chuchoté/fantôme, basé sur la suppression de la hauteur et l’ajout de bruit.",
    "effects.ghost.typeLabel": "Type d’effet",
    "effects.ghost.intensityLabel": "Intensité",
    "effects.ghost.help":
      "Augmentez l'intensité pour plus d'effet de chuchotement; ajustez la réverbération pour la profondeur d'écho.",
    "effects.ghost.reverbLabel": "Quantité de réverbération",
    "effects.telephone.note":
      "Simule un son de téléphone/radio : bande limitée et bruit optionnel.",
    "effects.telephone.lowCutLabel": "Coupure basse (Hz)",
    "effects.telephone.highCutLabel": "Coupure haute (Hz)",
    "effects.telephone.noiseLabel": "Niveau de bruit (0–1)",
    "effects.telephone.noiseHelp":
      "Utilisez une petite valeur (0.05–0.15) pour simuler le souffle de ligne.",

    "status.selectEffectHint":
      "Choisissez un effet pour afficher ses paramètres.",
    "status.noneApplied": "Aucun effet appliqué pour l’instant.",
    "status.processing":
      "Traitement de l’audio... (simulation côté front-end)",
    "status.processingDone":
      "Simulation terminée.",
    "status.noFile": "Sélectionnez d’abord un fichier audio.",
    "status.selectAndApply":
      'Choisissez un effet et cliquez sur « Appliquer ».',

    "buttons.apply": "▶ Appliquer l’effet",
    "buttons.reset": "Effacer la sélection",
    "buttons.record": "🎤 Enregistrer",
    "buttons.stop": "⏹ Arrêter",
    "buttons.clearRecord": "✕ Effacer",

    "recording.title": "Enregistrement vocal",
    "recording.label": "ou enregistrez votre propre voix",
    "status.label": "Statut:",

    "info.title": "À propos des effets",
    "info.desc":
      "Cette interface est conçue pour se connecter à votre code MATLAB.",
    "info.items.tempo": "Temps – PVoc, facteurs <1 ou >1.",
    "info.items.pitch": "Hauteur – PVoc + resample.",
    "info.items.robot": "Robot – modulation (Rob.m).",
    "info.items.harmonic": "Duo/Trio – transposition harmonique.",
    "info.items.ghost": "Fantôme – Whisper / Ghost effect.",
    "info.items.telephone":
      "Téléphone/Radio – filtrage en bande et bruit éventuel.",

    "tags.tfct": "TFCT",
    "tags.pv": "Phase Vocoder",
    "tags.rm": "Ring Modulation",
    "tags.bp": "Bandpass Filter",

    "effects.none.note":
      "Aucun effet spécial – le son original est reproduit."
  }
};

let currentLang = "en";

function t(key) {
  const dict = translations[currentLang] || translations.pt;
  let result = dict[key];
  
  // Valores padrão para chaves que podem não estar no dicionário
  if (!result) {
    const defaults = {
      "status.selectEffect": {
        pt: "Selecione um efeito...",
        en: "Select an effect...",
        fr: "Sélectionnez um efeito..."
      }
    };
    
    if (defaults[key]) {
      result = defaults[key][currentLang];
    }
  }
  
  return result || "";
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = t(key);
    if (!text) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else if (el.tagName === "OPTION") {
      el.textContent = text;
    } else {
      el.textContent = text;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = t(key);
    if (!text) return;
    el.placeholder = text;
  });

  // Traduzir options do select
  document.querySelectorAll("select option").forEach((option) => {
    const key = option.getAttribute("data-i18n");
    if (key) {
      const text = t(key);
      if (text && text !== key) {
        option.textContent = text;
      }
    }
  });

  // Traduzir primeira opção especialmente
  const firstOption = document.querySelector("select option[value='']");
  if (firstOption) {
    const text = t("status.selectEffect");
    if (text && text !== "status.selectEffect") {
      firstOption.textContent = text;
    }
  }
}

// ======== SELETORES ========
const fileInput = document.getElementById("audio-input");
const fileNameSpan = document.getElementById("file-name");
const originalAudio = document.getElementById("original-audio");
const processedAudio = document.getElementById("processed-audio");
const effectSelect = document.getElementById("effect-select");
const parametersContainer = document.getElementById("parameters-container");
const effectNote = document.getElementById("effect-note") || { textContent: "" };
const applyBtn = document.getElementById("apply-effect");
const resetBtn = document.getElementById("reset-effect");
const statusText = document.getElementById("status-text");
const resultLabel = document.getElementById("result-label");
const langSelect = document.getElementById("lang-select");
const langToggle = document.querySelector(".lang-toggle");
const langMenu = document.querySelector(".lang-menu");
const langOptions = document.querySelectorAll(".lang-option");
const currentLangFlag = document.getElementById("current-lang-flag");

// elementos extras usados no upload
const fileInputText = document.getElementById("file-input-text");
const fileWrapper = document.querySelector(".file-input-wrapper") || document.querySelector(".file-input-label");

// Elementos de gravação
const recordBtn = document.getElementById("record-btn");
const stopBtn = document.getElementById("stop-btn");
const clearRecordBtn = document.getElementById("clear-record-btn");
const recordingTimer = document.getElementById("recording-timer");
const timerDisplay = document.getElementById("timer-display");

// Variáveis de gravação
let mediaRecorder;
let recordedChunks = [];
let recordingStartTime;
let recordingTimerInterval;
const recordingConstraints = { audio: true };

// ===== FUNÇÕES DE GRAVAÇÃO DE ÁUDIO =====
async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(recordingConstraints);
    mediaRecorder = new MediaRecorder(stream);
    recordedChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      
      // Decodificar o áudio gravado
      blob.arrayBuffer().then((arrayBuffer) => {
        audioCtx.decodeAudioData(arrayBuffer, (buffer) => {
          originalSamples = buffer.getChannelData(0).slice();
          originalSampleRate = buffer.sampleRate;
          decodedBuffer = buffer;
          
          originalAudio.src = url;
          originalFile = { name: t("recording.title") };
          fileNameSpan.textContent = t("recording.title");
          statusText.textContent = t("status.selectAndApply");
          updateApplyButtonState();
        }, (error) => {
          console.error("Erro ao decodificar áudio:", error);
          statusText.textContent = t("status.recordingError");
        });
      });

      // Parar todas as tracks
      stream.getTracks().forEach(track => track.stop());
    };

    mediaRecorder.start();
    recordBtn.disabled = true;
    stopBtn.disabled = false;
    clearRecordBtn.disabled = true;
    
    recordingStartTime = Date.now();
    recordingTimer.style.display = "block";
    recordingTimerInterval = setInterval(updateRecordingTimer, 100);
  } catch (err) {
    console.error("Erro ao acessar microfone:", err);
    statusText.textContent = t("status.microphoneError");
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    recordBtn.disabled = false;
    stopBtn.disabled = true;
    clearRecordBtn.disabled = false;
    clearInterval(recordingTimerInterval);
    recordingTimer.style.display = "none";
  }
}

function clearRecording() {
  recordedChunks = [];
  originalSamples = null;
  decodedBuffer = null;
  originalFile = null;
  fileNameSpan.textContent = t("step1.placeholderFile");
  originalAudio.src = "";
  processedAudio.src = "";
  statusText.textContent = t("status.noFile");
  recordBtn.disabled = false;
  stopBtn.disabled = true;
  clearRecordBtn.disabled = true;
  updateApplyButtonState();
}

function updateRecordingTimer() {
  const elapsed = Date.now() - recordingStartTime;
  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Event listeners para gravação
if (recordBtn) recordBtn.addEventListener("click", startRecording);
if (stopBtn) stopBtn.addEventListener("click", stopRecording);
if (clearRecordBtn) clearRecordBtn.addEventListener("click", clearRecording);

// ===== CARROSSEL DO TOPO =====
const carouselElement = document.getElementById("carousel-example");

if (carouselElement) {
  const carouselItems = carouselElement.querySelectorAll(".carousel-item");
  const indicators = carouselElement.querySelectorAll(
    ".carousel-indicators li"
  );
  const prevBtn = carouselElement.querySelector(".carousel-control-prev");
  const nextBtn = carouselElement.querySelector(".carousel-control-next");
  const progressDots = carouselElement.querySelectorAll(".carousel-progress-dot");

  let currentSlideIndex = 0;
  const totalSlides = carouselItems.length;
  let autoplayInterval;
  const autoplayDelay = 12000; // 12 segundos

  function updateProgressDots() {
    progressDots.forEach((dot, i) => {
      if (i === currentSlideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function showSlide(index) {
    if (!totalSlides) return;

    currentSlideIndex = (index + totalSlides) % totalSlides;

    carouselItems.forEach((item, i) => {
      if (i === currentSlideIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    indicators.forEach((dot, i) => {
      if (i === currentSlideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    updateProgressDots();
    
    // Reiniciar autoplay
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      showSlide(currentSlideIndex + 1);
    }, autoplayDelay);
  }

  // clique nas bolinhas
  indicators.forEach((dot, i) => {
    dot.addEventListener("click", (event) => {
      event.preventDefault();
      showSlide(i);
    });
  });

  // clique nos dots de progresso
  progressDots.forEach((dot, i) => {
    dot.addEventListener("click", (event) => {
      event.preventDefault();
      showSlide(i);
    });
  });

  // setas de navegação
  if (prevBtn) {
    prevBtn.addEventListener("click", (event) => {
      event.preventDefault();
      showSlide(currentSlideIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (event) => {
      event.preventDefault();
      showSlide(currentSlideIndex + 1);
    });
  }

  // garante que o primeiro slide esteja ativado
  showSlide(0);
}

let originalFile = null;

// ===== BACKEND NO NAVEGADOR  =====
const AudioContextClass =
  window.AudioContext || window.webkitAudioContext || null;
const audioCtx = AudioContextClass ? new AudioContextClass() : null;

let decodedBuffer = null;
let originalSamples = null;
let originalSampleRate = 44100;

// Decodifica o arquivo selecionado em amostras
function decodeFileToSamples(file) {
  if (!audioCtx || !file) return;
  file
    .arrayBuffer()
    .then((buf) => audioCtx.decodeAudioData(buf))
    .then((audioBuffer) => {
      decodedBuffer = audioBuffer;
      originalSampleRate = audioBuffer.sampleRate;
      const ch0 =
        audioBuffer.numberOfChannels > 0
          ? audioBuffer.getChannelData(0)
          : new Float32Array(0);
      originalSamples = new Float32Array(ch0.length);
      originalSamples.set(ch0);
      console.log(
        "Áudio decodificado:",
        originalSamples.length,
        "amostras @",
        originalSampleRate,
        "Hz"
      );
    })
    .catch((err) => {
      console.error("Erro ao decodificar áudio:", err);
    });
}

function cloneSamples(samples) {
  if (!samples) return null;
  const out = new Float32Array(samples.length);
  out.set(samples);
  return out;
}

function normalizeSamples(samples) {
  if (!samples) return null;
  let max = 0;
  for (let i = 0; i < samples.length; i++) {
    const v = Math.abs(samples[i]);
    if (v > max) max = v;
  }
  if (max < 1e-9) return samples;
  const out = new Float32Array(samples.length);
  const g = 0.99 / max;
  for (let i = 0; i < samples.length; i++) {
    out[i] = samples[i] * g;
  }
  return out;
}

// --- Tempo (re-amostragem simples) ---
function resampleTempo(samples, factor) {
  if (!samples || factor <= 0) return cloneSamples(samples);
  if (factor === 1) return cloneSamples(samples);
  const inLen = samples.length;
  const outLen = Math.max(1, Math.floor(inLen * factor));
  const out = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) {
    const pos = i / factor;
    const i0 = Math.floor(pos);
    const i1 = Math.min(inLen - 1, i0 + 1);
    const frac = pos - i0;
    out[i] = samples[i0] * (1 - frac) + samples[i1] * frac;
  }
  return normalizeSamples(out);
}

// --- Pitch-shift simples (mantém o mesmo tamanho) ---
function pitchShiftSimple(samples, semitones) {
  if (!samples || !isFinite(semitones) || semitones === 0) {
    return cloneSamples(samples);
  }
  const factor = Math.pow(2, semitones / 12);
  const inLen = samples.length;
  const outLen = inLen;
  const out = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) {
    const pos = i / factor;
    if (pos >= inLen - 1) {
      out[i] = 0;
    } else {
      const i0 = Math.floor(pos);
      const i1 = i0 + 1;
      const frac = pos - i0;
      out[i] = samples[i0] * (1 - frac) + samples[i1] * frac;
    }
  }
  return normalizeSamples(out);
}

// ===== FUNÇÕES DE PROCESSAMENTO AVANÇADO =====

// Implementação simplificada do Phase Vocoder
function phaseVocoder(samples, rapp, fftSize) {
  if (!samples || rapp <= 0) return cloneSamples(samples);
  if (Math.abs(rapp - 1.0) < 0.001) return cloneSamples(samples);

  const hop = Math.floor(fftSize / 4);
  const numFrames = Math.floor((samples.length - fftSize) / hop) + 1;
  const outLen = Math.max(1, Math.floor(samples.length / rapp));
  const out = new Float32Array(outLen);

  // Hann window
  const window = new Float32Array(fftSize);
  for (let i = 0; i < fftSize; i++) {
    window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (fftSize - 1)));
  }

  let outIdx = 0;
  const phase = new Float32Array(fftSize);
  const phaseAdvance = (2 * Math.PI * hop) / fftSize;

  for (let frameIdx = 0; frameIdx < numFrames && outIdx < outLen; frameIdx++) {
    const offset = frameIdx * hop;
    if (offset + fftSize > samples.length) break;

    // Extrair frame e aplicar janela
    const frame = new Float32Array(fftSize);
    for (let i = 0; i < fftSize; i++) {
      frame[i] = (samples[offset + i] || 0) * window[i];
    }

    // FFT
    const spectrum = fft(frame);

    // Sintetizar com nova taxa
    const synthFrame = new Float32Array(fftSize);
    
    for (let i = 0; i < fftSize; i++) {
      let val = 0;
      for (let k = 1; k < fftSize / 2; k++) {
        const re = spectrum[2 * k];
        const im = spectrum[2 * k + 1];
        const mag = Math.sqrt(re * re + im * im);
        
        phase[k] += phaseAdvance * k * rapp;
        // Unwrap phase
        while (phase[k] > Math.PI) phase[k] -= 2 * Math.PI;
        while (phase[k] < -Math.PI) phase[k] += 2 * Math.PI;
        
        val += 2 * mag * Math.cos((2 * Math.PI * k * i) / fftSize + phase[k]);
      }
      synthFrame[i] = (val / fftSize) * window[i];
    }

    // Sobreposição e adição com taxa reduzida
    const synthHop = Math.floor(hop / rapp);
    for (let i = 0; i < fftSize && outIdx < outLen; i++) {
      if (i % Math.ceil(1 / rapp) === 0) {
        out[outIdx++] = synthFrame[i];
      }
    }
  }

  // Pad com zeros se necessário
  while (outIdx < outLen && outIdx < out.length) {
    out[outIdx++] = 0;
  }

  return normalizeSamples(out);
}

// FFT simplificada (Cooley-Tukey)
function fft(input) {
  const N = input.length;
  
  // Pad para potência de 2
  let size = 1;
  while (size < N) size *= 2;
  
  const padded = new Float32Array(size);
  for (let i = 0; i < N; i++) {
    padded[i] = input[i];
  }

  return fftCore(padded);
}

function fftCore(input) {
  const N = input.length;
  
  if (N <= 1) {
    const output = new Float32Array(N * 2);
    if (N === 1) {
      output[0] = input[0];
      output[1] = 0;
    }
    return output;
  }

  if (N === 2) {
    const output = new Float32Array(4);
    output[0] = input[0] + input[1];
    output[1] = 0;
    output[2] = input[0] - input[1];
    output[3] = 0;
    return output;
  }

  // Bit reversal
  const bitReverse = (x, bits) => {
    let result = 0;
    for (let i = 0; i < bits; i++) {
      result = (result << 1) | (x & 1);
      x >>= 1;
    }
    return result;
  };

  const bits = Math.log2(N);
  const reversed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    reversed[bitReverse(i, bits)] = input[i];
  }

  // Butterfly operations
  const output = new Float32Array(N * 2);
  for (let i = 0; i < N; i++) {
    output[2 * i] = reversed[i];
    output[2 * i + 1] = 0;
  }

  for (let s = 1; s <= bits; s++) {
    const m = 1 << s;
    const mby2 = m >> 1;

    for (let k = 0; k < N; k += m) {
      for (let j = 0; j < mby2; j++) {
        const t = (2 * Math.PI * j) / m;
        const wr = Math.cos(t);
        const wi = -Math.sin(t);

        const t0 = k + j;
        const t1 = k + j + mby2;

        const ar = output[2 * t0];
        const ai = output[2 * t0 + 1];
        const br = output[2 * t1];
        const bi = output[2 * t1 + 1];

        const cr = wr * br - wi * bi;
        const ci = wr * bi + wi * br;

        output[2 * t0] = ar + cr;
        output[2 * t0 + 1] = ai + ci;
        output[2 * t1] = ar - cr;
        output[2 * t1 + 1] = ai - ci;
      }
    }
  }

  return output;
}

// Resample simples usando interpolação linear
function simplexResample(samples, upFactor, downFactor) {
  if (!samples || upFactor <= 0 || downFactor <= 0) return cloneSamples(samples);
  
  const ratio = upFactor / downFactor;
  const outLen = Math.max(1, Math.floor(samples.length * ratio));
  const out = new Float32Array(outLen);

  for (let i = 0; i < outLen; i++) {
    const pos = i / ratio;
    const idx = Math.floor(pos);
    const frac = pos - idx;

    if (idx >= samples.length - 1) {
      out[i] = samples[samples.length - 1] || 0;
    } else {
      out[i] = samples[idx] * (1 - frac) + samples[idx + 1] * frac;
    }
  }

  return out;
}

// ---- EFEITOS ----
function effectTempo(samples, sr, params) {
  const rapp =
    parseFloat(params.rapp != null ? params.rapp : params.factor) || 1.0;
  return resampleTempo(samples, rapp);
}

function effectPitch(samples, sr, params) {
  const semitones = parseFloat(params.semitones || 0) || 0;
  return pitchShiftSimple(samples, semitones);
}

function effectRobot(samples, sr, params) {
  if (!samples) return null;
  const fc = parseFloat(params.fc || 400) || 400;
  const out = new Float32Array(samples.length);
  const twoPiFcOverFs = (2 * Math.PI * fc) / sr;
  for (let n = 0; n < samples.length; n++) {
    out[n] = samples[n] * Math.cos(twoPiFcOverFs * n);
  }
  return normalizeSamples(out);
}

function effectHarmonic(samples, sr, params) {
  if (!samples) return null;
  
  // Criar 3 vozes com pitch-shift simples
  const v1 = cloneSamples(samples);  // voz original
  const v2 = pitchShiftSimple(samples, 7);   // 5ª (7 semitons)
  const v3 = pitchShiftSimple(samples, 12);  // oitava (12 semitons)

  const len = samples.length;
  
  // Normalizar cada voz
  const normalize = (arr) => {
    let max = 0;
    for (let i = 0; i < len; i++) {
      max = Math.max(max, Math.abs(arr[i]));
    }
    if (max === 0) return arr;
    const result = new Float32Array(len);
    for (let i = 0; i < len; i++) {
      result[i] = arr[i] / max;
    }
    return result;
  };

  const v1norm = normalize(v1);
  const v2norm = normalize(v2);
  const v3norm = normalize(v3);

  // Somar as 3 vozes
  const result = new Float32Array(len);
  const gain = 1 / 3;
  for (let i = 0; i < len; i++) {
    result[i] = (v1norm[i] + v2norm[i] + v3norm[i]) * gain;
  }

  return normalizeSamples(result);
}

function effectGhostWhisper(samples, sr, params) {
  if (!samples) return null;
  
  const intensity = parseFloat(params.intensity || 0.8) || 0.8;
  const reverb = parseFloat(params.reverb || 0.3) || 0.3;
  const len = samples.length;
  const out = new Float32Array(len);

  // Criar envoltório de amplitude com média móvel
  const windowSize = Math.max(10, Math.floor(sr * 0.005)); // 5ms
  const envelope = new Float32Array(len);
  
  for (let i = 0; i < len; i++) {
    let sum = 0;
    const start = Math.max(0, i - windowSize / 2);
    const end = Math.min(len, i + windowSize / 2);
    for (let j = start; j < end; j++) {
      sum += Math.abs(samples[j]);
    }
    envelope[i] = sum / (end - start);
  }

  // Misturar sinal original com ruído modulado
  for (let i = 0; i < len; i++) {
    const noise = (Math.random() * 2 - 1) * intensity;
    const noiseModulated = envelope[i] * noise;
    out[i] = samples[i] * (1 - intensity * 0.3) + noiseModulated;
  }

  // Adicionar reverberação simples
  const delayMs = 60;
  const delaySamples = Math.floor((delayMs / 1000) * sr);
  
  for (let i = delaySamples; i < len; i++) {
    out[i] += out[i - delaySamples] * reverb * 0.7;
  }

  return normalizeSamples(out);
}

function effectTelephone(samples, sr, params) {
  if (!samples) return null;

  const lowCut = parseFloat(params.lowCut || 300) || 300;
  const highCut = parseFloat(params.highCut || 3400) || 3400;
  const noiseLevel = parseFloat(params.noise || 0.05) || 0.05;

  const len = samples.length;
  const out = new Float32Array(len);

  // High-pass filter
  const hpAlpha = Math.min(0.99, (2 * Math.PI * lowCut) / sr);
  let hpPrev = 0;
  for (let i = 0; i < len; i++) {
    hpPrev = hpPrev * (1 - hpAlpha) + samples[i] * hpAlpha;
    out[i] = samples[i] - hpPrev;
  }

  // Low-pass filter
  const lpAlpha = Math.min(0.99, (2 * Math.PI * highCut) / sr);
  let lpPrev = 0;
  for (let i = 0; i < len; i++) {
    lpPrev = lpPrev * (1 - lpAlpha) + out[i] * lpAlpha;
    out[i] = lpPrev;
  }

  // Soft saturation
  for (let i = 0; i < len; i++) {
    const x = out[i];
    out[i] = x + 0.2 * x * x * x;
  }

  // Adicionar ruído
  for (let i = 0; i < len; i++) {
    out[i] += (Math.random() * 2 - 1) * noiseLevel;
  }

  return normalizeSamples(out);
}

// Converte Float32Array para WAV (Blob) e toca no <audio>
function float32ToWavBlob(samples, sampleRate) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const byteRate = sampleRate * blockAlign;
  const dataLength = samples.length * 2;
  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  function writeString(offset, str) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }

  let offset = 0;
  writeString(offset, "RIFF");
  offset += 4;
  view.setUint32(offset, 36 + dataLength, true);
  offset += 4;
  writeString(offset, "WAVE");
  offset += 4;
  writeString(offset, "fmt ");
  offset += 4;
  view.setUint32(offset, 16, true);
  offset += 4;
  view.setUint16(offset, 1, true);
  offset += 2;
  view.setUint16(offset, numChannels, true);
  offset += 2;
  view.setUint32(offset, sampleRate, true);
  offset += 4;
  view.setUint32(offset, byteRate, true);
  offset += 4;
  view.setUint16(offset, blockAlign, true);
  offset += 2;
  view.setUint16(offset, bitsPerSample, true);
  offset += 2;
  writeString(offset, "data");
  offset += 4;
  view.setUint32(offset, dataLength, true);
  offset += 4;

  for (let i = 0; i < samples.length; i++) {
    let s = samples[i];
    if (s < -1) s = -1;
    if (s > 1) s = 1;
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }

  return new Blob([buffer], { type: "audio/wav" });
}

// ===== HANDLERS DE PARÂMETROS E BOTÕES =====

// Renderiza os parâmetros dinâmicos para cada efeito
function renderParameters(effectValue) {
  parametersContainer.innerHTML = "";

  if (!effectValue || effectValue === "none") {
    effectNote.textContent = t("effects.none.note");
    return;
  }

  const params = {
    tempo: {
      note: t("effects.tempo.note"),
      help: t("effects.tempo.help"),
      fields: [
        {
          id: "tempo-factor",
          label: t("effects.tempo.factorLabel"),
          type: "number",
          value: "1.0",
          step: "0.1",
          min: "0.5",
          max: "2.0",
        },
      ],
    },
    pitch: {
      note: t("effects.pitch.note"),
      help: t("effects.pitch.help"),
      fields: [
        {
          id: "pitch-semitones",
          label: t("effects.pitch.semitonesLabel"),
          type: "number",
          value: "0",
          step: "1",
          min: "-24",
          max: "24",
        },
      ],
    },
    robot: {
      note: t("effects.robot.note"),
      help: t("effects.robot.help"),
      fields: [
        {
          id: "robot-fc",
          label: t("effects.robot.fcLabel"),
          type: "number",
          value: "400",
          step: "50",
          min: "100",
          max: "1000",
        },
      ],
    },
    "harmonic-duo-trio": {
      note: t("effects.harmonic.note"),
      help: t("effects.harmonic.help"),
      fields: [
        {
          id: "harm-voices",
          label: t("effects.harmonic.voicesLabel"),
          type: "number",
          value: "3",
          step: "1",
          min: "2",
          max: "3",
        },
        {
          id: "harm-interval1",
          label: t("effects.harmonic.interval1Label"),
          type: "number",
          value: "7",
          step: "1",
          min: "-24",
          max: "24",
        },
        {
          id: "harm-interval2",
          label: t("effects.harmonic.interval2Label"),
          type: "number",
          value: "12",
          step: "1",
          min: "-24",
          max: "24",
        },
        {
          id: "harm-mix",
          label: t("effects.harmonic.mixLabel"),
          type: "range",
          value: "0.7",
          step: "0.05",
          min: "0",
          max: "1",
        },
      ],
    },
    "ghost-whisper": {
      note: t("effects.ghost.note"),
      help: t("effects.ghost.help"),
      fields: [
        {
          id: "ghost-intensity",
          label: t("effects.ghost.intensityLabel"),
          type: "range",
          value: "0.8",
          step: "0.05",
          min: "0",
          max: "1",
        },
        {
          id: "ghost-reverb",
          label: t("effects.ghost.reverbLabel"),
          type: "range",
          value: "0.3",
          step: "0.05",
          min: "0",
          max: "1",
        },
      ],
    },
    "telephone-radio": {
      note: t("effects.telephone.note"),
      help: t("effects.telephone.help"),
      fields: [
        {
          id: "tel-lowcut",
          label: t("effects.telephone.lowCutLabel"),
          type: "number",
          value: "300",
          step: "50",
          min: "50",
          max: "1000",
        },
        {
          id: "tel-highcut",
          label: t("effects.telephone.highCutLabel"),
          type: "number",
          value: "3400",
          step: "100",
          min: "2000",
          max: "8000",
        },
        {
          id: "tel-noise",
          label: t("effects.telephone.noiseLabel"),
          type: "range",
          value: "0.15",
          step: "0.01",
          min: "0",
          max: "1",
        },
      ],
    },
  };

  const config = params[effectValue];
  if (!config) return;

  effectNote.textContent = config.note;

  config.fields.forEach((field) => {
    const div = document.createElement("div");
    div.className = "parameter-group";

    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = field.label;

    let input;

    if (field.type === "select") {
      input = document.createElement("select");
      input.id = field.id;
      field.options.forEach((opt) => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.text;
        input.appendChild(option);
      });
    } else {
      input = document.createElement("input");
      input.id = field.id;
      input.type = field.type || "number";
      input.value = field.value || "";
      if (field.step) input.step = field.step;
      if (field.min) input.min = field.min;
      if (field.max) input.max = field.max;
    }

    div.appendChild(label);
    div.appendChild(input);

    if (config.help && field === config.fields[0]) {
      const help = document.createElement("small");
      help.className = "help-text";
      help.textContent = config.help;
      div.appendChild(help);
    }

    parametersContainer.appendChild(div);
  });
}

// usa os inputs que o renderParameters criou
function getCurrentEffectParams() {
  switch (effectSelect.value) {
    case "tempo":
      return {
        factor: parseFloat(document.getElementById("tempo-factor")?.value || 1),
      };
    case "pitch":
      return {
        semitones: parseInt(
          document.getElementById("pitch-semitones")?.value || 0,
          10
        ),
      };
    case "robot":
      return {
        fc: parseFloat(document.getElementById("robot-fc")?.value || 400),
      };
    case "harmonic-duo-trio":
      return {
        voices: parseInt(
          document.getElementById("harm-voices")?.value || 3,
          10
        ),
        interval1: parseFloat(
          document.getElementById("harm-interval1")?.value || 7
        ),
        interval2: parseFloat(
          document.getElementById("harm-interval2")?.value || 12
        ),
        mix: parseFloat(document.getElementById("harm-mix")?.value || 0.7),
      };
    case "ghost-whisper":
      return {
        type: document.getElementById("ghost-type")?.value || "whisper",
        intensity: parseFloat(
          document.getElementById("ghost-intensity")?.value || 0.8
        ),
        reverb: parseFloat(document.getElementById("ghost-reverb")?.value || 0.3),
      };
    case "telephone-radio":
      return {
        mode: document.getElementById("tel-mode")?.value || "telephone",
        lowCut: parseFloat(
          document.getElementById("tel-lowcut")?.value || 300
        ),
        highCut: parseFloat(
          document.getElementById("tel-highcut")?.value || 3400
        ),
        noise: parseFloat(document.getElementById("tel-noise")?.value || 0.15),
      };
    default:
      return {};
  }
}

// aplica o efeito quando clica no botão
applyBtn.addEventListener("click", () => {
  if (!originalFile) {
    statusText.textContent = t("status.noFile");
    statusText.className = "status error";
    return;
  }

  const effect = effectSelect.value;
  if (!effect) {
    statusText.textContent = t("status.selectEffect");
    statusText.className = "status error";
    return;
  }

  if (!originalSamples) {
    statusText.textContent =
      "Espere o áudio terminar de carregar antes de aplicar o efeito.";
    statusText.className = "status error";
    return;
  }

  const params = getCurrentEffectParams();
  console.log("Aplicando efeito:", effect, "com parâmetros:", params);

  statusText.textContent = t("status.processing");
  statusText.className = "status";

  const sr = originalSampleRate || 44100;
  let output = null;

  try {
    switch (effect) {
      case "tempo":
        output = effectTempo(originalSamples, sr, params);
        break;
      case "pitch":
        output = effectPitch(originalSamples, sr, params);
        break;
      case "robot":
        output = effectRobot(originalSamples, sr, params);
        break;
      case "harmonic-duo-trio":
        output = effectHarmonic(originalSamples, sr, params);
        break;
      case "ghost-whisper":
        output = effectGhostWhisper(originalSamples, sr, params);
        break;
      case "telephone-radio":
        output = effectTelephone(originalSamples, sr, params);
        break;
      case "none":
      default:
        output = cloneSamples(originalSamples);
        break;
    }

    if (!output) {
      statusText.textContent = t("status.processing");
      statusText.className = "status error";
      return;
    }

    const blob = float32ToWavBlob(output, sr);
    processedAudio.src = URL.createObjectURL(blob);
    processedAudio.disabled = false;
    processedAudio.play();

    statusText.textContent = t("status.processingDone");
    statusText.className = "status success";

    const key = "effect." + effect;
    resultLabel.textContent = t(key) || t("effect.none");
  } catch (e) {
    console.error(e);
    statusText.textContent = t("status.processing");
    statusText.className = "status error";
  }
});

// reset
resetBtn.addEventListener("click", () => {
  effectSelect.value = "";
  parametersContainer.innerHTML = "";
  effectNote.textContent = t("status.selectEffectHint");
  processedAudio.src = "";
  processedAudio.disabled = true;
  statusText.textContent = t("status.noneApplied");
  resultLabel.textContent = t("status.noneApplied");
  updateApplyButtonState();
});

// habilita / desabilita botão
function updateApplyButtonState() {
  const hasFile = !!originalFile;
  const hasEffect = !!effectSelect.value;
  applyBtn.disabled = !(hasFile && hasEffect);
}

// quando troca o efeito, redesenha os parâmetros
effectSelect.addEventListener("change", () => {
  renderParameters(effectSelect.value);
  updateApplyButtonState();
});

// clique na área de upload
if (fileWrapper && fileInput) {
  fileWrapper.addEventListener("click", (e) => {
    if (
      e.target === fileWrapper ||
      e.target.id === "file-input-text" ||
      e.target.id === "file-name"
    ) {
      fileInput.click();
    }
  });
}

// quando seleciona o arquivo
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    originalFile = null;
    fileNameSpan.textContent = "";
    originalAudio.src = "";
    originalAudio.disabled = true;
    processedAudio.src = "";
    processedAudio.disabled = true;
    statusText.textContent = "";
    updateApplyButtonState();
    return;
  }

  originalFile = file;
  fileNameSpan.textContent = file.name;
  if (fileInputText) {
    fileInputText.textContent = t("step1.placeholderFile");
  }

  const url = URL.createObjectURL(file);
  originalAudio.src = url;
  originalAudio.disabled = false;

  statusText.textContent = "";
  resultLabel.textContent = t("status.selectAndApply");

  decodeFileToSamples(file);
  updateApplyButtonState();
});

// estado inicial
setLanguage("en");
renderParameters("none");
updateApplyButtonState();

// ===== SUPORTE A IDIOMAS =====
function setLanguage(lang) {
  currentLang = lang;
  applyTranslations();
  renderParameters(effectSelect?.value || "none");
  resultLabel.textContent = t("status.selectEffectHint");
  updateCarouselLanguage(lang);
}

function updateCarouselLanguage(lang) {
  const carouselImages = document.querySelectorAll(".carousel-inner img");
  carouselImages.forEach((img) => {
    const srcAttr = `data-src-${lang}`;
    const newSrc = img.getAttribute(srcAttr);
    if (newSrc) {
      img.src = newSrc;
    }
  });
}

// listeners de idioma
if (langToggle && langMenu) {
  // Toggle do dropdown
  langToggle.addEventListener("click", () => {
    langMenu.classList.toggle("active");
    langToggle.classList.toggle("active");
  });

  // Fechar dropdown quando clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".lang-dropdown")) {
      langMenu.classList.remove("active");
      langToggle.classList.remove("active");
    }
  });
}

// Mapa de idiomas para imagens
const flagMap = {
  en: "assets/flag-en.png",
  fr: "assets/flag-fr.png",
  pt: "assets/flag-pt.png"
};

// Event listeners para opções de idioma
if (langOptions && langOptions.length > 0) {
  langOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang) {
        setLanguage(lang);
        
        // Atualizar botão ativo
        langOptions.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        
        // Atualizar imagem da flag no toggle
        if (currentLangFlag && flagMap[lang]) {
          currentLangFlag.src = flagMap[lang];
        }
        
        // Fechar menu
        langMenu.classList.remove("active");
        langToggle.classList.remove("active");
      }
    });
  });
  
  // Definir opção ativa inicial (Inglês - default)
  const initialOption = Array.from(langOptions).find(btn => btn.getAttribute("data-lang") === currentLang);
  if (initialOption) {
    initialOption.classList.add("active");
  }
}

if (langSelect) {
  langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}