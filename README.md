# 🎤 Voice Atelier — Phase Vocoder Project  
**OBL - 4101 • Digital Signal Processing • ESIEE Paris**

Welcome to **Voice Atelier**, a complete project implementing a **Phase Vocoder** and additional **audio effects** in MATLAB, accompanied by a demo website hosted through **GitHub Pages**.

🔗 **Live Demo Website:**  
➡️ https://ana-bea-s.github.io/Voice_Atelier/

---

## 🎯 Project Overview

This project is part of the **OBL - 4101 Digital Signal Processing** course and focuses on the implementation of a **Phase Vocoder**, capable of producing the following audio effects:

### ✅ Mandatory Effects

1.  **Time-stretching** Modify the *speed* of the voice without changing its *pitch*.
2.  **Pitch-shifting** Modify the *pitch* of the voice while preserving the *duration*.
3.  **Robotisation** Apply a **ring modulation** process to transform the voice into a robotic sound.

These effects rely on:
* **Short-Time Fourier Transform (STFT)**
* **Frequency-domain interpolation**
* **Phase tracking**
* **Resampling**
* **Time-domain modulation**

---

## ✨ Additional Custom Effects

Three additional effects were implemented to personalize the project:

### 🎶 Harmonic Duo / Trio

Generates multiple harmonized voices using pitch shifting.

### 👻 Whisper / Ghost Voice

Breaks **phase coherence** to simulate whispered, airy, or spectral voices.

### ☎️ Telephone / Radio Effect

Simulates communication devices using:
* **Band-pass filtering** (300–3400 Hz)
* **Soft distortion**
* **Low-level background noise**

---

## 🧠 Core MATLAB Functions

| File | Description |
| :--- | :--- |
| `PVoc.m` | Main phase vocoder (STFT → interpolation → iSTFT) |
| `TFCT.m` | Short-Time Fourier Transform |
| `TFCTInv.m` | Inverse STFT |
| `TFCT_Interp.m` | Frequency-domain interpolation |
| `Rob.m` | Ring modulation for robotisation |
| `Vocodeur.m` | Main interactive menu and audio processing controller |
| `HarmonicDuoTrio.m` | Additional effect 1 |
| `WhisperGhostVoice.m` | Additional effect 2 |
| `TelephoneRadioEffect.m` | Additional effect 3 |

---

## ▶️ Running the Project

### Requirements

* **MATLAB** 
* **Signal Processing Toolbox** (for `resample`)

### Steps

1.  Open MATLAB
2.  Navigate to the `MATLAB` folder:
    ```matlab
    cd('MATLAB')
    ```
3.  Run the main program:
    ```matlab
    Vocodeur
    ```
4.  Select an audio file
5.  Choose an effect from the menu and listen to the result

---

## 🌐 Website Demo

A small interactive website is included to visually present the project.

🔗 [https://ana-bea-s.github.io/Voice_Atelier/](https://ana-bea-s.github.io/Voice_Atelier/)

---

## 👥 Authors

**Ana Beatriz Santos de Oliveira**

**Larissa Anielle Terrinha de Oliveira**

OBL - 4101 • Digital Signal Processing

ESIEE Paris

---

## 📄 License

This repository is part of an academic project and intended for educational use.



