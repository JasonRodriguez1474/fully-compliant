import { createApp } from 'vue';
import { invoke } from "@tauri-apps/api/core";
import { message } from '@tauri-apps/plugin-dialog';
import App from './App.vue';

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
  const warningText = "Please practice caution when storing U.S. Government data on this GRC Platform. Access might be controlled by your organization or partners, and unauthorized use potentially prohibited. Always consult your IT or Cybersecurity department before introducing new apps to a secure network.";
  await message(warningText, { title: "FEDERAL DATA WARNING", kind: "info" });
}

window.addEventListener("DOMContentLoaded", async () => {
  // Show federal warning on every app open
  await showFederalWarning();
  
  // Check if this is first run and show welcome message if it is
  await checkFirstRun();
  
  // Mount Vue app
  createApp(App).mount('#app');
});
