import { invoke } from "@tauri-apps/api/core";
import { message } from '@tauri-apps/plugin-dialog';

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

function showStartupMessage() {
  if (greetMsgEl) {
    greetMsgEl.textContent = "Welcome to the app! Please enter your name.";
  }
}

async function checkFirstRun() {
  const isFirstRun = await invoke("is_first_run");
  if (isFirstRun) {
    await message(
      "Welcome to Fully-Compliant, a Tauri-based compliance tool designed to help you manage and track your organization's compliance frameworks.",
      { title: "Welcome to Fully-Compliant", kind: "info" }
    );
  }
}

async function showFederalWarning() {
  const warningText = await invoke("show_federal_warning");
  await message(warningText, { title: "FEDERAL SYSTEM WARNING", kind: "warning" });
}

window.addEventListener("DOMContentLoaded", async () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  
  // Show federal warning on every app open
  await showFederalWarning();
  
  // Check if this is first run and show welcome message if it is
  await checkFirstRun();
  
  // Show regular startup message in the UI
  showStartupMessage();
  
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});
