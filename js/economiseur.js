// Icônes SVG intégrées : aucun CDN ni connexion Internet nécessaire.
    window.lucide = {
      createIcons() {
        const paths = {
          "sliders-horizontal": '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3"/><path d="M1 14h6m2-6h6m2 8h6"/>',
          "minimize": '<path d="M8 3v5H3M21 8h-5V3M3 16h5v5M16 21v-5h5"/>',
          "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3"/>',
          "x": '<path d="m18 6-12 12M6 6l12 12"/>'
        };
        document.querySelectorAll('[data-lucide]').forEach(el => {
          const name = el.getAttribute('data-lucide');
          el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (paths[name] || paths['sliders-horizontal']) + '</svg>';
          el.setAttribute('aria-hidden', 'true');
        });
      }
    };

    // Le viewport mobile change avec la barre d'adresse et le clavier.
    function updateViewportHeight() {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    }
    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight, { passive: true });
    window.addEventListener("orientationchange", () => setTimeout(updateViewportHeight, 120), { passive: true });
    if (window.visualViewport) window.visualViewport.addEventListener("resize", updateViewportHeight, { passive: true });

    const shell = document.getElementById("screenShell");
    const clockStage = document.getElementById("clockStage");
    const clockStack = document.getElementById("clockStack");
    const timeDisplay = document.getElementById("timeDisplay");
    const dateDisplay = document.getElementById("dateDisplay");
    const batteryWrap = document.getElementById("batteryWrap");
    const batteryText = document.getElementById("batteryText");
    const batteryIcon = document.getElementById("batteryIcon");
    const batteryDetail = document.getElementById("batteryDetail");
    const batteryMeterFill = document.getElementById("batteryMeterFill");
    const batteryCircle = document.getElementById("batteryCircle");
    const batteryCircleValue = document.getElementById("batteryCircleValue");
    const batteryVerticalFill = document.getElementById("batteryVerticalFill");
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");
    const utilityBar = document.getElementById("utilityBar");
    const settingsPanel = document.getElementById("settingsPanel");
    const settingsButton = document.getElementById("settingsButton");
    const closeSettingsButton = document.getElementById("closeSettingsButton");
    const exitFullscreenButton = document.getElementById("exitFullscreenButton");
    const statusMessage = document.getElementById("statusMessage");
    const wakeLockHelp = document.getElementById("wakeLockHelp");

    const controls = {
      theme: document.getElementById("themeSelect"),
      clockStyle: document.getElementById("clockStyleSelect"),
      batteryStyle: document.getElementById("batteryStyleSelect"),
      effects: document.getElementById("effectsRange"),
      speed: document.getElementById("speedRange"),
      breathing: document.getElementById("breathingToggle"),
      orbit: document.getElementById("orbitToggle"),
      particles: document.getElementById("particlesToggle"),
      waves: document.getElementById("wavesToggle"),
      pulse: document.getElementById("pulseToggle"),
      reducedMotion: document.getElementById("reducedMotionToggle"),
      wakeLock: document.getElementById("wakeLockToggle"),
      format: document.getElementById("formatSelect"),
      date: document.getElementById("dateToggle"),
      battery: document.getElementById("batteryToggle"),
      brightness: document.getElementById("brightnessRange")
    };

    const themes = {
      ocean: { accent: "#7dd3fc", accentSoft: "rgba(125,211,252,.22)", orbOne: "#155e75", orbTwo: "#312e81" },
      violet: { accent: "#c4b5fd", accentSoft: "rgba(196,181,253,.22)", orbOne: "#4c1d95", orbTwo: "#1e3a8a" },
      ember: { accent: "#fbbf24", accentSoft: "rgba(251,191,36,.2)", orbOne: "#7c2d12", orbTwo: "#701a75" },
      forest: { accent: "#6ee7b7", accentSoft: "rgba(110,231,183,.2)", orbOne: "#064e3b", orbTwo: "#164e63" },
      rose: { accent: "#f9a8d4", accentSoft: "rgba(249,168,212,.22)", orbOne: "#831843", orbTwo: "#581c87" },
      crimson: { accent: "#f87171", accentSoft: "rgba(248,113,113,.22)", orbOne: "#7f1d1d", orbTwo: "#450a0a" },
      amber: { accent: "#fcd34d", accentSoft: "rgba(252,211,77,.2)", orbOne: "#78350f", orbTwo: "#713f12" },
      mint: { accent: "#5eead4", accentSoft: "rgba(94,234,212,.2)", orbOne: "#134e4a", orbTwo: "#164e63" },
      ice: { accent: "#bae6fd", accentSoft: "rgba(186,230,253,.22)", orbOne: "#334155", orbTwo: "#0c4a6e" },
      mono: { accent: "#e2e8f0", accentSoft: "rgba(226,232,240,.18)", orbOne: "#334155", orbTwo: "#111827" },
      matrix: { accent: "#4ade80", accentSoft: "rgba(74,222,128,.2)", orbOne: "#14532d", orbTwo: "#052e16" },
      sunset: { accent: "#fb923c", accentSoft: "rgba(251,146,60,.22)", orbOne: "#9a3412", orbTwo: "#701a75" },
      aurora: { accent: "#5eead4", accentSoft: "rgba(94,234,212,.24)", orbOne: "#166534", orbTwo: "#6d28d9" },
      cyberpunk: { accent: "#f0abfc", accentSoft: "rgba(240,171,252,.25)", orbOne: "#701a75", orbTwo: "#1d4ed8" },
      galaxy: { accent: "#c4b5fd", accentSoft: "rgba(196,181,253,.24)", orbOne: "#581c87", orbTwo: "#172554" },
      deepsea: { accent: "#22d3ee", accentSoft: "rgba(34,211,238,.23)", orbOne: "#164e63", orbTwo: "#064e3b" },
      sakura: { accent: "#fda4af", accentSoft: "rgba(253,164,175,.23)", orbOne: "#9d174d", orbTwo: "#6b21a8" },
      gold: { accent: "#fcd34d", accentSoft: "rgba(252,211,77,.22)", orbOne: "#854d0e", orbTwo: "#422006" },
      lava: { accent: "#fb7185", accentSoft: "rgba(251,113,133,.23)", orbOne: "#991b1b", orbTwo: "#431407" },
      cotton: { accent: "#f9a8d4", accentSoft: "rgba(249,168,212,.23)", orbOne: "#a5b4fc", orbTwo: "#fbcfe8" },
      plasma: { accent: "#a3e635", accentSoft: "rgba(163,230,53,.23)", orbOne: "#4c1d95", orbTwo: "#0e7490" },
      eclipse: { accent: "#d1d5db", accentSoft: "rgba(209,213,219,.2)", orbOne: "#374151", orbTwo: "#111827" },
      arctic: { accent: "#a5f3fc", accentSoft: "rgba(165,243,252,.23)", orbOne: "#155e75", orbTwo: "#1e3a8a" },
      toxic: { accent: "#bef264", accentSoft: "rgba(190,242,100,.22)", orbOne: "#365314", orbTwo: "#3f6212" }
    };

    let battery = null;
    let wakeLockSentinel = null;
    let inactivityTimer = null;
    let statusTimer = null;

    const STORAGE_KEY = "economiseur-ecran-settings-v2";
    const settingNames = Object.keys(controls);

    function saveSettings() {
      try {
        const saved = {};
        settingNames.forEach(name => {
          const control = controls[name];
          saved[name] = control.type === "checkbox" ? control.checked : control.value;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      } catch (_) {
        // Le stockage peut être bloqué en navigation privée ou via certains fichiers locaux.
      }
    }

    function loadSettings() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (!saved || typeof saved !== "object") return;
        settingNames.forEach(name => {
          if (!(name in saved)) return;
          const control = controls[name];
          if (control.type === "checkbox") control.checked = Boolean(saved[name]);
          else if ([...control.options].some(option => option.value === String(saved[name])) ||
                   control.type === "range") control.value = String(saved[name]);
        });
      } catch (_) {}
    }



    function showStatus(message) {
      statusMessage.textContent = message;
      statusMessage.classList.add("show");
      clearTimeout(statusTimer);
      statusTimer = setTimeout(() => statusMessage.classList.remove("show"), 3200);
    }

    function updateClock() {
      const now = new Date();
      const hour12 = controls.format.value === "12";

      const timeOptions = { hour: "2-digit", minute: "2-digit", hour12 };
      if (controls.clockStyle.value === "seconds") timeOptions.second = "2-digit";
      timeDisplay.textContent = new Intl.DateTimeFormat("fr-FR", timeOptions).format(now);

      dateDisplay.textContent = new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(now);

      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      hourHand.style.transform = `translateX(-50%) rotate(${hours * 30 + minutes * .5}deg)`;
      minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6 + seconds * .1}deg)`;
      secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    }

    function setBatteryVisual(percent, charging, available) {
      const safePercent = Math.max(0, Math.min(100, percent));
      batteryMeterFill.style.width = `${safePercent}%`;
      batteryVerticalFill.style.height = `${safePercent}%`;
      batteryVerticalFill.style.width = "auto";
      batteryIcon.style.background = `linear-gradient(90deg, var(--accent) ${safePercent}%, transparent ${safePercent}% 100%)`;
      batteryCircle.style.background = `conic-gradient(${charging ? "#86efac" : "var(--accent)"} ${safePercent}%, rgba(226,232,240,.13) 0)`;
      batteryCircleValue.textContent = available ? `${safePercent}%` : "—";
      batteryWrap.classList.toggle("is-charging", charging);
      const circleBolt = document.getElementById("batteryCircleBolt");
      if (circleBolt) circleBolt.style.display = charging && controls.batteryStyle.value === "ring" ? "flex" : "none";
    }

    function updateBattery() {
      if (!battery) {
        batteryText.textContent = "Batterie indisponible";
        batteryDetail.classList.add("hidden");
        batteryIcon.removeAttribute("data-lucide");
        setBatteryVisual(0, false, false);
      } else {
        const percent = Math.round(battery.level * 100);
        const charging = battery.charging;
        batteryText.textContent = `${percent} %`;
        batteryDetail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 11-13h-7z"/></svg>';
        batteryDetail.classList.toggle("hidden", !charging || controls.batteryStyle.value === "classic");
        setBatteryVisual(percent, charging, true);
      }
    }

    async function initialiseBattery() {
      if (!("getBattery" in navigator)) {
        updateBattery();
        return;
      }
      try {
        battery = await navigator.getBattery();
        updateBattery();
        ["levelchange", "chargingchange"].forEach(eventName => battery.addEventListener(eventName, updateBattery));
      } catch (_) {
        updateBattery();
      }
    }

    function applySettings() {
      const theme = themes[controls.theme.value] || themes.ocean;
      shell.style.setProperty("--accent", theme.accent);
      shell.style.setProperty("--accent-soft", theme.accentSoft);
      shell.style.setProperty("--orb-one", theme.orbOne);
      shell.style.setProperty("--orb-two", theme.orbTwo);
      shell.style.setProperty("--glow-opacity", String(Number(controls.effects.value) / 100));
      shell.style.setProperty("--effect-intensity", String(Number(controls.effects.value) / 100));
      shell.style.setProperty("--motion-speed", controls.speed.value);
      shell.style.setProperty("--screen-brightness", controls.brightness.value);

      shell.classList.toggle("breathing-on", controls.breathing.checked);
      shell.classList.toggle("orbit-off", !controls.orbit.checked);
      shell.classList.toggle("particles-off", !controls.particles.checked);
      shell.classList.toggle("waves-off", !controls.waves.checked);
      shell.classList.toggle("interface-pulse", controls.pulse.checked);
      shell.classList.toggle("reduced-motion", controls.reducedMotion.checked);
      shell.classList.toggle("motion-override", !controls.reducedMotion.checked);

      clockStack.classList.toggle("pulse-on", controls.pulse.checked);
      clockStack.classList.remove("clock-minimal", "clock-neon", "clock-circle", "clock-analog", "clock-retro", "clock-terminal", "clock-soft", "clock-seconds", "clock-glitch", "clock-outline", "clock-serif", "clock-lcd", "clock-mono", "clock-shadow", "clock-rainbow", "clock-thin");
      clockStack.classList.add(`clock-${controls.clockStyle.value}`);

      batteryWrap.classList.remove("battery-classic", "battery-horizontal", "battery-ring", "battery-vertical", "battery-segmented", "battery-compact", "battery-pill", "battery-glass", "battery-neon", "battery-bars", "battery-hex", "battery-stack", "battery-orbit");
      batteryWrap.classList.add(`battery-${controls.batteryStyle.value}`);

      dateDisplay.classList.toggle("hidden", !controls.date.checked);
      batteryWrap.classList.toggle("hidden", !controls.battery.checked);


      updateClock();
      updateBattery();
      saveSettings();
    }

    function updateWakeLockAvailability() {
      const supported = "wakeLock" in navigator && typeof navigator.wakeLock?.request === "function";
      controls.wakeLock.disabled = false;
      if (supported) {
        wakeLockHelp.textContent = "Disponible : activez l’option. Le navigateur peut demander une page sécurisée (HTTPS) et un écran visible.";
      } else {
        wakeLockHelp.textContent = "Ce navigateur ne propose pas le maintien actif ici. Essayez d’ouvrir cette page dans Chrome via HTTPS.";
        controls.wakeLock.checked = false;
      }
    }

    async function releaseWakeLock() {
      if (!wakeLockSentinel) return;
      try {
        await wakeLockSentinel.release();
      } catch (_) {
        // The browser can release Wake Lock when the page is no longer active.
      }
      wakeLockSentinel = null;
    }

    async function setWakeLock() {
      if (!controls.wakeLock.checked) {
        await releaseWakeLock();
        showStatus("Le maintien de l’écran est désactivé.");
        return;
      }

      if (!("wakeLock" in navigator) || typeof navigator.wakeLock?.request !== "function") {
        controls.wakeLock.checked = false;
        showStatus("Le navigateur ne permet pas de maintenir l’écran actif dans ce contexte.");
        return;
      }

      try {
        wakeLockSentinel = await navigator.wakeLock.request("screen");
        wakeLockSentinel.addEventListener("release", () => {
          wakeLockSentinel = null;
          if (controls.wakeLock.checked && document.visibilityState === "visible") {
            showStatus("Le maintien de l’écran a été relâché.");
          }
        });
        showStatus("Le maintien de l’écran est activé.");
      } catch (_) {
        controls.wakeLock.checked = false;
        showStatus("Impossible d’activer le maintien de l’écran.");
      }
    }

    function openSettings() {
      settingsPanel.classList.add("is-open");
      settingsPanel.setAttribute("aria-hidden", "false");
      settingsButton.setAttribute("aria-expanded", "true");
      showControls();
    }

    function closeSettings() {
      settingsPanel.classList.remove("is-open");
      settingsPanel.setAttribute("aria-hidden", "true");
      settingsButton.setAttribute("aria-expanded", "false");
      settingsButton.focus();
    }

    function showControls() {
      utilityBar.classList.remove("is-hidden");
      clearTimeout(inactivityTimer);
      if (!settingsPanel.classList.contains("is-open")) {
        inactivityTimer = setTimeout(() => utilityBar.classList.add("is-hidden"), 4000);
      }
    }

    async function toggleFullscreen() {
      try {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        } else if (document.fullscreenEnabled && shell.requestFullscreen) {
          await shell.requestFullscreen();
        } else {
          showStatus("Le plein écran est bloqué par ce navigateur ou ce mode d’ouverture.");
        }
      } catch (_) {
        showStatus("Impossible de changer le plein écran ici. Essayez d’ouvrir la page dans Chrome.");
      }
    }

    function syncFullscreenButton() {
      const active = Boolean(document.fullscreenElement);
      exitFullscreenButton.setAttribute("aria-label", active ? "Quitter le plein écran" : "Activer le plein écran");
      exitFullscreenButton.title = active ? "Quitter le plein écran" : "Activer le plein écran";
      const icon = exitFullscreenButton.querySelector("[data-lucide]");
      if (icon) icon.setAttribute("data-lucide", active ? "minimize" : "maximize");
      if (window.lucide && typeof window.lucide.createIcons === "function") window.lucide.createIcons();
    }

    settingsButton.addEventListener("click", (event) => {
      event.stopPropagation();
      settingsPanel.classList.contains("is-open") ? closeSettings() : openSettings();
    });

    closeSettingsButton.addEventListener("click", closeSettings);

    document.addEventListener("pointerdown", event => {
      if (settingsPanel.classList.contains("is-open") &&
          !settingsPanel.contains(event.target) &&
          !settingsButton.contains(event.target)) {
        closeSettings();
      }
    });

    exitFullscreenButton.addEventListener("click", async (event) => {
      event.stopPropagation();
      await toggleFullscreen();
    });

    controls.wakeLock.addEventListener("change", setWakeLock);

    document.getElementById("settingsForm").addEventListener("submit", event => event.preventDefault());

    Object.entries(controls).forEach(([name, control]) => {
      if (name !== "wakeLock") {
        control.addEventListener("input", applySettings);
        control.addEventListener("change", applySettings);
      }
    });

    document.addEventListener("fullscreenchange", syncFullscreenButton);
    window.addEventListener("pagehide", () => {
      clearTimeout(inactivityTimer);
      clearTimeout(statusTimer);
      releaseWakeLock();
    });

    document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState !== "visible") {
        if (wakeLockSentinel) await releaseWakeLock();
      } else if (controls.wakeLock.checked && !wakeLockSentinel) {
        try {
          wakeLockSentinel = await navigator.wakeLock.request("screen");
          wakeLockSentinel.addEventListener("release", () => { wakeLockSentinel = null; });
        } catch (_) {
          // Le navigateur peut refuser la reprise après un changement d’application.
        }
      }
    });

    ["pointerdown", "keydown"].forEach(eventName => {
      document.addEventListener(eventName, event => {
        if (settingsPanel.contains(event.target)) return;
        showControls();
      }, { passive: eventName !== "keydown" });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && settingsPanel.classList.contains("is-open")) {
        closeSettings();
      }
    });

    if (window.lucide && typeof window.lucide.createIcons === "function") window.lucide.createIcons();
    syncFullscreenButton();
    updateWakeLockAvailability();
    loadSettings();
    applySettings();
    initialiseBattery();
    updateClock();
    setInterval(updateClock, 1000);
    showControls();
