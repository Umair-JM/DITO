/**
 * Cosmic Ascension App Controller
 * Integrates CosmicSDK and builds the interactive hand-drawn mobile interface.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize SDK
  const sdk = new CosmicSDK();

  // --- DOM Elements ---
  const introScreen = document.getElementById("intro-screen");
  const dashboardScreen = document.getElementById("dashboard-screen");
  const btnEnter = document.getElementById("btn-enter");
  const summaryInput = document.getElementById("summary-input");
  const wordCountLbl = document.getElementById("word-count");
  const wordWarning = document.getElementById("word-warning");
  const btnEvaluate = document.getElementById("btn-evaluate");
  const presetBtns = document.querySelectorAll(".preset-btn");

  // Settings Controls
  const btnSettings = document.getElementById("btn-settings");
  const settingsModal = document.getElementById("settings-modal");
  const btnCloseSettings = document.getElementById("btn-close-settings");
  const btnSaveSettings = document.getElementById("btn-save-settings");
  const onlineToggle = document.getElementById("online-toggle");

  // Results views
  const resultsIdle = document.getElementById("results-idle");
  const resultsActive = document.getElementById("results-active");
  const lblScore = document.getElementById("lbl-score");
  const lblControlPct = document.getElementById("lbl-control-pct");
  const lblMatchedCount = document.getElementById("lbl-matched-count");
  const axesContainer = document.getElementById("axes-container");
  const gaugeBar = document.getElementById("gauge-bar");
  const disciplineContainer = document.getElementById("discipline-container");
  const timelineContainer = document.getElementById("timeline-container");
  const tagsContainer = document.getElementById("tags-container");

  // Create drop animation area element in Results Panel
  let animationArea = null;
  let carvingsContainer = null;

  // --- Local Data & History ---
  let totalDrops = parseInt(localStorage.getItem("manj_total_drops") || "0");
  let submissionsLog = JSON.parse(localStorage.getItem("manj_submissions_log") || "[]");

  // --- Preset Texts ---
  const presets = {
    dyson: "A mega-engineering Dyson swarm collector consisting of self-replicating solar sails orbiting the host star. It captures raw stellar flux, converting electromagnetic radiation into high-frequency laser power beams directed at terrestrial receivers to power planetary supergrids.",
    warp: "An Alcubierre warp drive metric stabilizer utilizing Casimir-vacuum fields and negative mass-energy distributions to compress spacetime in front of a spacecraft while expanding it behind. It maintains field coherence under high-velocity drift constraints.",
    bridge: "A quantum-neural interface array that maps human synaptic pathways onto qubits. It uses decoherence-shielded superconducting chips to achieve high-fidelity bio-digital telepathic telemetry and instant cloud cognitive recall.",
    weaver: "A scanning-tunneling atomic assembly system that fabricates carbon-nanotube diamondoid structures atom-by-atom. It achieves high structural tensile strength for space elevators and deep-sea pressure hulls, minimizing lattice defects.",
    decoder: "An autonomous multi-modal translator that parses non-human communications, from whale vocalizations to deep-space electromagnetic waves. It maps linguistic syntactic structures into high-dimensional semantic vector spaces for real-time translation."
  };

  // --- Step 1: Initialize App Setup ---
  _setupAnimationsHTML();
  _renderCarvingsLog();

  // Screen transition
  btnEnter.addEventListener("click", () => {
    introScreen.classList.add("hidden");
    introScreen.classList.remove("active");
    dashboardScreen.classList.remove("hidden");
  });

  // Modal open/close actions
  btnSettings.addEventListener("click", () => {
    onlineToggle.checked = localStorage.getItem("dito_use_online_ai") === "true";
    settingsModal.classList.remove("hidden");
  });

  btnCloseSettings.addEventListener("click", () => {
    settingsModal.classList.add("hidden");
  });

  btnSaveSettings.addEventListener("click", () => {
    localStorage.setItem("dito_use_online_ai", String(onlineToggle.checked));
    settingsModal.classList.add("hidden");
  });

  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.add("hidden");
    }
  });

  // Event listener for presets
  presetBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const type = e.target.getAttribute("data-preset");
      if (presets[type]) {
        summaryInput.value = presets[type];
        _validateInput();
      }
    });
  });

  // Event listener for textarea input
  summaryInput.addEventListener("input", _validateInput);

  // Event listener for evaluation
  btnEvaluate.addEventListener("click", _handleEvaluation);

  // --- Step 2: Core Helper Functions ---

  /**
   * Inject Animation Area and Cave Carvings structure inside UI
   */
  function _setupAnimationsHTML() {
    // Inject the animated drop canvas inside the active results screen
    const resultsActiveDiv = document.getElementById("results-active");
    
    // Create animation viewport
    animationArea = document.createElement("div");
    animationArea.className = "drops-animation-area";
    animationArea.innerHTML = `
      <div class="basin-overlay">
        <!-- SVG Stone Basin / Fluid level indicators with perfect containment -->
        <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="none" style="position:absolute; bottom:0;">
          <defs>
            <clipPath id="basin-clip">
              <path d="M 16 17 L 84 17 L 79 53 L 21 53 Z"></path>
            </clipPath>
          </defs>
          
          <!-- Outer stone tray body -->
          <path d="M 12 15 L 88 15 L 82 55 L 18 55 Z" fill="#e2dcd3" stroke="#2c251d" stroke-width="4" stroke-linejoin="round"></path>
          
          <!-- Clipped fluid inside the tray -->
          <g clip-path="url(#basin-clip)">
            <path d="M -10 30 Q 25 25, 50 30 T 110 30 L 110 60 L -10 60 Z" fill="#70b3e6" opacity="0.5" id="basin-fluid-back" style="transition: transform 0.5s ease;"></path>
            <path d="M -10 35 Q 25 40, 50 35 T 110 35 L 110 60 L -10 60 Z" fill="#50a0dc" opacity="0.75" id="basin-fluid-front" style="transition: transform 0.5s ease;"></path>
          </g>
          
          <!-- Inner depth rim -->
          <path d="M 16 17 L 84 17" stroke="#2c251d" stroke-width="3" stroke-linecap="round"></path>
          <path d="M 15 35 L 20 38 M 85 35 L 80 38" stroke="#2c251d" stroke-width="2" stroke-linecap="round" opacity="0.4"></path>
        </svg>
      </div>
      <div class="water-stats" style="position:absolute; top:8px; left:12px; font-family:var(--font-mono); font-size:0.75rem; font-weight:bold; z-index:15;">
        DITO DROPS (Drops in the Ocean of Knowledge): <span id="manj-drops-counter">0</span>
      </div>
    `;

    // Insert animation area before the Discipline Section
    resultsActiveDiv.insertBefore(animationArea, resultsActiveDiv.querySelector(".discipline-section"));

    // Set initial drops display
    document.getElementById("manj-drops-counter").textContent = totalDrops.toLocaleString();

    // Create the carvings section at the bottom of the results active
    const carvingsSection = document.createElement("div");
    carvingsSection.className = "carvings-section";
    carvingsSection.innerHTML = `
      <h3 class="section-title">CAVE CARVINGS (LOG)</h3>
      <div class="carvings-list" id="carvings-list">
        <!-- populated offline items -->
      </div>
    `;
    resultsActiveDiv.appendChild(carvingsSection);
    carvingsContainer = document.getElementById("carvings-list");
  }

  /**
   * Monitor input text, word counts, and toggle evaluate buttons
   */
  function _validateInput() {
    const text = summaryInput.value;
    const wordCount = sdk.getWordCount(text);
    wordCountLbl.textContent = wordCount;

    if (wordCount > 400) {
      wordWarning.classList.remove("hidden");
      btnEvaluate.classList.add("disabled");
      btnEvaluate.setAttribute("disabled", "true");
    } else if (wordCount >= 1) {
      wordWarning.classList.add("hidden");
      btnEvaluate.classList.remove("disabled");
      btnEvaluate.removeAttribute("disabled");
    } else {
      wordWarning.classList.add("hidden");
      btnEvaluate.classList.add("disabled");
      btnEvaluate.setAttribute("disabled", "true");
    }
  }

  /**
   * Main submit logic (supporting asynchronous Gemini LLM fetch)
   */
  async function _handleEvaluation() {
    const text = summaryInput.value;

    const useOnlineAI = localStorage.getItem("dito_use_online_ai") === "true";

    // Start Loading State
    btnEvaluate.textContent = "CONSULTING MANJ'S MIND...";
    btnEvaluate.classList.add("disabled");
    btnEvaluate.setAttribute("disabled", "true");

    resultsIdle.classList.add("hidden");
    resultsIdle.classList.remove("active");
    resultsActive.classList.remove("hidden");

    const loadingEl = document.getElementById("evaluation-loading");
    loadingEl.classList.remove("hidden");

    // The offline engine ALWAYS runs — it is the real, honest baseline.
    let results = sdk.analyzeInnovation(text);

    // Optionally enrich the wisdom/notes with a free, keyless public AI.
    if (useOnlineAI) {
      try {
        const boost = await _evaluateWithFreeLLM(text, results);
        results = boost; // merged payload (offline numbers + AI commentary)
      } catch (err) {
        console.error("Free online AI unavailable, staying fully offline:", err);
        _showAPIWarning("Free AI busy — using Manj's offline cave mind instead!");
      }
    }

    // Stop Loading State
    loadingEl.classList.add("hidden");
    btnEvaluate.textContent = "ANALYZE KNOWLEDGE IMPACT";
    btnEvaluate.classList.remove("disabled");
    btnEvaluate.removeAttribute("disabled");

    _displayResults(results, text);
  }

  /**
   * Performs the display drawing logic for a results payload
   */
  function _displayResults(results, text) {
    // Draw results values
    lblScore.textContent = String(results.cosmicProgressScore).padStart(3, "0");
    lblControlPct.textContent = results.universeControlPercentage.toFixed(2);
    lblMatchedCount.textContent = results.totalMatchedCount;

    // Multi-scale placement across the whole human story
    _renderScale(results.scale);

    // Honest breakdown of what the score is made of
    _renderAxes(results.axes);

    // Update Manj motivation message (+ optional online-AI critique)
    const motivationText = results.motivationText || _getManjMotivation(results.cosmicProgressScore);
    document.getElementById("lbl-motivation").textContent = motivationText;
    _renderAICritique(results.aiCritique, results.aiBoosted);

    // Update radial gauge stroke offset
    const maxStroke = 251.2;
    const progressRatio = results.cosmicProgressScore / 1000;
    const offset = maxStroke - (maxStroke * progressRatio);
    gaugeBar.style.strokeDashoffset = offset;

    // Update disciplines
    _renderDisciplines(results.disciplineBreakdown);

    // Render timeline
    _renderTimeline(results.timeline);

    // Render tags
    _renderTags(results.matchedDomains);

    // Save submission locally
    _saveSubmission(text, results.cosmicProgressScore);

    // Trigger drops animation
    _triggerDropsAnimation(results.cosmicProgressScore);
  }

  /**
   * Optional enrichment via a FREE, KEYLESS public AI (Pollinations.ai).
   * No API key, no account — anyone can call it. It does NOT override the
   * honest offline numbers; it only contributes a richer "cave wisdom" note
   * and an expert critique. If anything fails we throw and stay fully offline.
   *
   * @param {string} text   The user's innovation summary
   * @param {object} local  The offline SDK result (kept as the source of truth)
   */
  async function _evaluateWithFreeLLM(text, local) {
    const url = "https://text.pollinations.ai/openai";

    const systemPrompt =
      "You are Manj, a wise caveman engineer who evaluates technical innovations for the app " +
      "DITO (Drop In The Ocean). You will be given an innovation summary plus an offline engine's " +
      "scores. Respond with ONLY a JSON object, no markdown, of the form:\n" +
      '{ "wisdom": <caveman-voice motivational line starting with "Manj say: ", referencing the actual idea>, ' +
      '"critique": <one or two plain-English sentences: the single biggest strength and the single biggest ' +
      'weakness or missing detail of this innovation> }';

    const userPrompt =
      `INNOVATION SUMMARY:\n"${text}"\n\n` +
      `OFFLINE ENGINE SAID: score ${local.cosmicProgressScore}/1000, ` +
      `landing between ${local.scale.below.name} and ${local.scale.above.name} on the ` +
      `human-history capability scale. Top field: ` +
      `${local.matchedDomains[0] ? local.matchedDomains[0].name : "none matched"}.`;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000); // don't hang the UI

    let data;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          model: "openai",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ]
        })
      });
      if (!response.ok) throw new Error(`Free AI HTTP ${response.status}`);
      data = await response.json();
    } finally {
      clearTimeout(timer);
    }

    const raw = data?.choices?.[0]?.message?.content;
    if (!raw) throw new Error("Empty response from free AI");

    // Be defensive: extract the JSON object even if the model wraps it.
    const match = raw.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match ? match[0] : raw);

    // Merge: offline numbers stay authoritative; AI only enriches the words.
    return Object.assign({}, local, {
      motivationText: (parsed.wisdom && String(parsed.wisdom).trim()) || local.motivationText,
      aiCritique: parsed.critique ? String(parsed.critique).trim() : null,
      aiBoosted: true
    });
  }

  /**
   * Helper warning toast popup when API fails
   */
  function _showAPIWarning(message) {
    const warningDiv = document.createElement("div");
    warningDiv.className = "api-warning-toast sketch-border";
    warningDiv.innerHTML = `⚠️ ${message}`;
    document.body.appendChild(warningDiv);
    
    setTimeout(() => {
      warningDiv.classList.add("fade-out");
      setTimeout(() => warningDiv.remove(), 500);
    }, 4500);
  }

  /**
   * Generates a caveman style motivational quote based on the evaluation score.
   */
  function _getManjMotivation(score) {
    if (score < 150) {
      return "Manj say: every small pebble build big cave. You make drop, ocean of knowledge get bigger. Keep building tools, make tribe proud!";
    } else if (score < 400) {
      return "Manj say: you make smart tool! Like first stone wheel. Manj tribe pleased. Keep coding, mammoth hunt get much easier!";
    } else if (score < 750) {
      return "Manj say: cosmic brain! You make fire in sky. Manj tribe strong, look at stars now. Keep climbing Manj Scale of Innovation!";
    } else {
      return "Manj say: galaxy leader! Universe bow to your logic. You transcend cave, conquer space-time. Manj salute your brain!";
    }
  }

  /**
   * Render Discipline Progress Grid
   */
  function _renderDisciplines(disciplines) {
    disciplineContainer.innerHTML = "";
    disciplines.forEach(disc => {
      const item = document.createElement("div");
      item.className = "disc-item";
      item.innerHTML = `
        <div class="disc-name" title="${disc.name}">${disc.name}</div>
        <div class="disc-bar-container">
          <div class="disc-bar-fill" style="width: ${disc.percentage}%"></div>
        </div>
        <div class="disc-pct">${disc.percentage}%</div>
      `;
      disciplineContainer.appendChild(item);
    });
  }

  /**
   * Render Vertical Chronological Timeline
   */
  function _renderTimeline(timeline) {
    timelineContainer.innerHTML = "";
    timeline.forEach(node => {
      const cls = [
        "timeline-row",
        node.isUserInnovation ? "user-node" : "",
        node.projected ? "future-node" : ""
      ].filter(Boolean).join(" ");

      const row = document.createElement("div");
      row.className = cls;
      row.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-year">${_esc(node.when)}</div>
          <div class="timeline-name">${_esc(node.name)}${node.projected ? ' <span class="proj-tag">projected</span>' : ""}</div>
          <div class="timeline-desc">${_esc(node.blurb || "")}</div>
        </div>
      `;
      timelineContainer.appendChild(row);
    });
  }

  /**
   * Render the multi-scale civilizational placement card.
   */
  function _renderScale(scale) {
    if (!scale) return;
    document.getElementById("lbl-scale-below").textContent = scale.below.name;
    document.getElementById("lbl-scale-above").textContent = scale.above.name;

    const fmt = (v) => (v >= 100 ? Math.round(v) : v < 1 ? v.toFixed(2) : v.toFixed(1));
    document.getElementById("anc-stone").textContent = fmt(scale.anchors.stone) + "×";
    document.getElementById("anc-wheel").textContent = fmt(scale.anchors.wheel) + "×";
    document.getElementById("anc-transistor").textContent = fmt(scale.anchors.transistor) + "×";
    document.getElementById("anc-genai").textContent = fmt(scale.anchors.genai) + "×";
  }

  /**
   * Render the five honest scoring axes as labelled bars.
   */
  function _renderAxes(axes) {
    if (!axesContainer || !axes) return;
    const defs = [
      ["Specificity", axes.pct.specificity, "Concrete technical detail vs. vague hand-waving"],
      ["Depth", axes.pct.depth, "How strongly it engages its core field"],
      ["Breadth", axes.pct.breadth, "How many disciplines it genuinely spans"],
      ["Novelty", axes.pct.novelty, "Reach toward frontier / ambitious ideas"],
      ["Coherence", axes.pct.coherence, "Real writing vs. keyword stuffing"]
    ];
    axesContainer.innerHTML = "";
    defs.forEach(([name, pct, tip]) => {
      const item = document.createElement("div");
      item.className = "axis-item";
      item.innerHTML = `
        <div class="axis-name" title="${_esc(tip)}">${name}</div>
        <div class="axis-bar-container">
          <div class="axis-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="axis-pct">${pct}</div>
      `;
      axesContainer.appendChild(item);
    });
  }

  /**
   * Render the optional online-AI critique line beneath Manj's wisdom.
   */
  function _renderAICritique(critique, boosted) {
    const existing = document.getElementById("ai-critique");
    if (existing) existing.remove();
    if (!critique) return;

    const motivationCard = document.querySelector(".motivation-card");
    if (!motivationCard) return;

    const el = document.createElement("p");
    el.id = "ai-critique";
    el.style.cssText = "font-size:0.85rem; margin-top:0.6rem; opacity:0.85; font-style:italic;";
    el.innerHTML = `🤖 <strong>Free AI second opinion:</strong> ${_esc(critique)}`;
    motivationCard.appendChild(el);
  }

  /**
   * Minimal HTML escaper to keep user/AI text out of the DOM as markup.
   */
  function _esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Render Relevancy Tags
   */
  function _renderTags(domains) {
    tagsContainer.innerHTML = "";
    if (domains.length === 0) {
      tagsContainer.innerHTML = `<span style="font-size:0.8rem; opacity:0.7;">No direct scientific domains matched. Try adding terms like 'fusion', 'graphene', or 'quantum'.</span>`;
      return;
    }
    domains.forEach(d => {
      const badge = document.createElement("span");
      badge.className = `tag-badge ${d.weight >= 8 ? "high-weight" : ""}`;
      badge.textContent = d.name;
      tagsContainer.appendChild(badge);
    });
  }

  /**
   * Store submission detail in local storage
   */
  function _saveSubmission(text, score) {
    // Generate a simple title from the first 5 words
    const title = text.split(/\s+/).slice(0, 5).join(" ") + "...";
    const date = new Date().toLocaleDateString();

    const entry = {
      title,
      score,
      date
    };

    submissionsLog.unshift(entry);
    // Limit to 5 logs for aesthetic simplicity
    if (submissionsLog.length > 5) submissionsLog.pop();

    localStorage.setItem("manj_submissions_log", JSON.stringify(submissionsLog));
    _renderCarvingsLog();
  }

  /**
   * Render carvings log in DOM
   */
  function _renderCarvingsLog() {
    if (!carvingsContainer) return;
    
    if (submissionsLog.length === 0) {
      carvingsContainer.innerHTML = `<div style="font-size:0.9rem; opacity:0.7;">No carvings on cave wall yet. Build tools to record.</div>`;
      return;
    }

    carvingsContainer.innerHTML = "";
    submissionsLog.forEach(item => {
      const div = document.createElement("div");
      div.className = "carving-item";
      div.innerHTML = `
        <div class="carving-details">
          <span class="carving-title">${_esc(item.title)}</span>
          <span class="carving-meta">Carved on ${_esc(item.date)}</span>
        </div>
        <div class="carving-score">${_esc(item.score)}</div>
      `;
      carvingsContainer.appendChild(div);
    });
  }

  /**
   * Run the drop animation physics
   */
  function _triggerDropsAnimation(score) {
    // Determine how many drops to spawn based on score (e.g. 1 drop per 35 points, min 2, max 15)
    const dropCount = Math.max(2, Math.min(15, Math.round(score / 35)));
    let index = 0;

    // Increment local state drops
    totalDrops += dropCount;
    localStorage.setItem("manj_total_drops", String(totalDrops));
    document.getElementById("manj-drops-counter").textContent = totalDrops.toLocaleString();

    // Adjust water fluid path levels inside SVG based on score progress to simulate filling up
    const fillPercent = Math.min(50, 10 + (score / 25)); // Visual height offset
    const fluidBack = document.getElementById("basin-fluid-back");
    const fluidFront = document.getElementById("basin-fluid-front");
    
    if (fluidBack && fluidFront) {
      fluidBack.style.transform = `translateY(-${fillPercent / 4}px)`;
      fluidFront.style.transform = `translateY(-${fillPercent / 4}px)`;
    }

    // Spawn physical drop elements with staggered timeouts
    const interval = setInterval(() => {
      if (index >= dropCount) {
        clearInterval(interval);
        return;
      }

      const drop = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      drop.setAttribute("viewBox", "0 0 30 42");
      drop.setAttribute("class", "drop-element falling");
      
      // Inline hand-drawn drop SVG path
      drop.innerHTML = `<path d="M15 3 Q11 25, 4 33 Q15 42, 26 33 Q19 25, 15 3 Z" />`;
      
      // Randomize horizontal landing points inside basin tray (21% to 79%)
      const leftPos = Math.random() * 58 + 21; 
      drop.style.left = `${leftPos}%`;
      
      animationArea.appendChild(drop);

      // Remove element once the falling animation completes
      setTimeout(() => {
        drop.remove();
      }, 800);

      index++;
    }, 120);
  }
});
