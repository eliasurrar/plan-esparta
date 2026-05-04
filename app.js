// Plan Esparta UI logic — vanilla JS, persists to localStorage.

const STORAGE_KEY = "plan-esparta:v1";

const state = (() => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
})();

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function exKey(weekId, dayId, idx) {
  return `${dayId}#${idx}`;
}

function isExDone(weekId, dayId, idx) {
  return Boolean(state[exKey(weekId, dayId, idx)]);
}

function setExDone(weekId, dayId, idx, done) {
  const k = exKey(weekId, dayId, idx);
  if (done) state[k] = true;
  else delete state[k];
  save();
}

function dayCompletedAt(dayId) {
  return state[`${dayId}@done`] || null;
}

function setDayCompletedAt(dayId, ts) {
  if (ts) state[`${dayId}@done`] = ts;
  else delete state[`${dayId}@done`];
  save();
}

function dayCounts(week, day) {
  const total = day.exercises.length;
  const done = day.exercises.reduce(
    (acc, _, idx) => acc + (isExDone(week.id, day.id, idx) ? 1 : 0),
    0,
  );
  return { done, total };
}

function weekCounts(week) {
  let done = 0,
    total = 0;
  for (const day of week.days) {
    const c = dayCounts(week, day);
    done += c.done;
    total += c.total;
  }
  return { done, total };
}

function overallCounts() {
  let done = 0,
    total = 0;
  for (const week of PLAN.weeks) {
    const c = weekCounts(week);
    done += c.done;
    total += c.total;
  }
  return { done, total };
}

// ─── Render ───
let activeWeekIdx = (() => {
  // Resume to first incomplete week
  for (let i = 0; i < PLAN.weeks.length; i++) {
    const c = weekCounts(PLAN.weeks[i]);
    if (c.done < c.total) return i;
  }
  return 0;
})();

function renderTabs() {
  const tabs = document.getElementById("week-tabs");
  tabs.innerHTML = "";
  PLAN.weeks.forEach((week, idx) => {
    const c = weekCounts(week);
    const btn = document.createElement("button");
    btn.className = "week-tab";
    btn.dataset.week = week.id;
    if (idx === activeWeekIdx) btn.classList.add("active");
    if (c.done === c.total && c.total > 0) btn.classList.add("complete");
    btn.innerHTML = `
      <span>${week.name}</span>
      <span class="week-progress">${c.done}/${c.total}</span>
    `;
    btn.addEventListener("click", () => {
      activeWeekIdx = idx;
      renderTabs();
      renderWeek();
      window.scrollTo({ top: 200, behavior: "smooth" });
    });
    tabs.appendChild(btn);
  });
}

function renderOverall() {
  const c = overallCounts();
  const pct = c.total ? Math.round((c.done / c.total) * 100) : 0;
  document.getElementById("overall-fill").style.width = `${pct}%`;
  document.getElementById("overall-label").textContent = `${c.done} / ${c.total} ejercicios · ${pct}%`;
}

function fmtCompletedAt(ts) {
  const d = new Date(ts);
  const days = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  return `Completado · ${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function renderWeek() {
  const app = document.getElementById("app");
  const week = PLAN.weeks[activeWeekIdx];
  const wc = weekCounts(week);
  const wpct = wc.total ? Math.round((wc.done / wc.total) * 100) : 0;

  app.innerHTML = `
    <section class="week-header">
      <h2 style="color: ${week.color}">${week.name} · ${week.tagline}</h2>
      <p>${wc.done}/${wc.total} ejercicios · ${wpct}%</p>
    </section>
  `;

  for (const day of week.days) {
    const c = dayCounts(week, day);
    const pct = c.total ? Math.round((c.done / c.total) * 100) : 0;
    const isDone = c.done === c.total && c.total > 0;
    const completedAt = dayCompletedAt(day.id);
    const isExpanded = !isDone || completedAt === null;

    const dayEl = document.createElement("article");
    dayEl.className = `day${isDone ? " done" : ""}${isExpanded ? " expanded" : ""}`;
    dayEl.dataset.dayId = day.id;

    const exercisesHtml = day.exercises
      .map((ex, idx) => {
        const checked = isExDone(week.id, day.id, idx);
        const yt = youtubeSearchUrl(ex.name);
        const img = exerciseImage(ex.name);
        const thumbHtml = img
          ? `<img class="ex-thumb" src="${img.src}" alt="${ex.name}" loading="lazy" title="${img.pt}"/>`
          : `<div class="ex-thumb ex-thumb--placeholder" title="${ex.name}">${day.emoji}</div>`;
        return `
          <li class="exercise${checked ? " checked" : ""}" data-idx="${idx}">
            <input type="checkbox" ${checked ? "checked" : ""} aria-label="${ex.name} hecho"/>
            ${thumbHtml}
            <div class="ex-info">
              <span class="ex-name">${ex.name}</span>
              <span class="ex-meta">${ex.sets} × ${ex.reps}</span>
              ${ex.cue ? `<span class="ex-cue">${ex.cue}</span>` : ""}
            </div>
            <a class="ex-demo" href="${yt}" target="_blank" rel="noopener" title="Ver demostración en YouTube">▶ Demo</a>
          </li>
        `;
      })
      .join("");

    dayEl.innerHTML = `
      <header class="day-header">
        <span class="day-emoji">${day.emoji}</span>
        <div class="day-title">
          <h3>${day.name} · ${day.focus}</h3>
          <div class="focus">${week.name} · ${week.tagline}</div>
        </div>
        <div class="day-progress-wrap">
          <span class="day-pct">${c.done}/${c.total}</span>
          <div class="day-bar"><div class="day-fill" style="width:${pct}%"></div></div>
        </div>
        <svg class="chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </header>
      <div class="day-body">
        <p class="warmup"><b>Calentamiento:</b> ${day.warmup}</p>
        <ul class="exercises">${exercisesHtml}</ul>
        <button type="button" class="day-done-btn">
          ${isDone ? "✅ Día completado" : "Marcar día completo"}
          ${completedAt ? `<span class="ts">${fmtCompletedAt(completedAt)}</span>` : ""}
        </button>
      </div>
    `;

    // Header click toggles expand
    dayEl.querySelector(".day-header").addEventListener("click", () => {
      dayEl.classList.toggle("expanded");
    });

    // Checkbox handlers
    dayEl.querySelectorAll(".exercise input[type=checkbox]").forEach((cb, idx) => {
      cb.addEventListener("click", (e) => e.stopPropagation());
      cb.addEventListener("change", () => {
        setExDone(week.id, day.id, idx, cb.checked);
        cb.closest(".exercise").classList.toggle("checked", cb.checked);
        updateDayProgress(dayEl, week, day);
        renderTabs();
        renderOverall();
      });
    });

    // Day done button
    dayEl.querySelector(".day-done-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      const c = dayCounts(week, day);
      if (c.done === c.total && c.total > 0) {
        // Already done — toggle off (uncheck all)
        day.exercises.forEach((_, idx) => setExDone(week.id, day.id, idx, false));
        setDayCompletedAt(day.id, null);
      } else {
        // Mark all as done + record timestamp
        day.exercises.forEach((_, idx) => setExDone(week.id, day.id, idx, true));
        setDayCompletedAt(day.id, Date.now());
      }
      renderWeek();
      renderTabs();
      renderOverall();
    });

    app.appendChild(dayEl);
  }
}

function updateDayProgress(dayEl, week, day) {
  const c = dayCounts(week, day);
  const pct = c.total ? Math.round((c.done / c.total) * 100) : 0;
  const isDone = c.done === c.total && c.total > 0;

  dayEl.querySelector(".day-pct").textContent = `${c.done}/${c.total}`;
  dayEl.querySelector(".day-fill").style.width = `${pct}%`;
  dayEl.classList.toggle("done", isDone);

  // Auto-record timestamp when fully done via checkboxes
  if (isDone && !dayCompletedAt(day.id)) {
    setDayCompletedAt(day.id, Date.now());
  } else if (!isDone && dayCompletedAt(day.id)) {
    setDayCompletedAt(day.id, null);
  }

  // Update button label
  const btn = dayEl.querySelector(".day-done-btn");
  const ts = dayCompletedAt(day.id);
  btn.innerHTML = `${isDone ? "✅ Día completado" : "Marcar día completo"}${ts ? `<span class="ts">${fmtCompletedAt(ts)}</span>` : ""}`;
}

// ─── Reset ───
document.getElementById("reset-btn").addEventListener("click", () => {
  const dlg = document.getElementById("confirm-dialog");
  dlg.showModal();
  dlg.addEventListener(
    "close",
    () => {
      if (dlg.returnValue === "confirm") {
        for (const k of Object.keys(state)) delete state[k];
        save();
        renderTabs();
        renderWeek();
        renderOverall();
      }
    },
    { once: true },
  );
});

function renderPrinciples() {
  const grid = document.getElementById("principles-grid");
  if (!grid || !PLAN.principles) return;
  grid.innerHTML = PLAN.principles
    .map(
      (p) => `
        <div class="principle">
          <div class="principle-icon">${p.icon}</div>
          <div class="principle-body">
            <div class="principle-title">${p.title}</div>
            <div class="principle-text">${p.text}</div>
          </div>
        </div>
      `,
    )
    .join("");
}

// ─── Init ───
renderPrinciples();
renderTabs();
renderWeek();
renderOverall();
