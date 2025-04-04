<template>
  <div class="app-container">
    <aside class="sidebar">
      <div class="logo">Fully-Compliant</div>
      <nav class="nav-menu">
        <ul>
          <li class="active"><a href="#">Dashboard</a></li>
          <li>
            <a href="#">Frameworks</a>
            <ul class="submenu">
              <li><a href="#">NIST 800-171</a></li>
              <li><a href="#">CMMC Level 2</a></li>
              <li><a href="#">CIS CSC v8.1</a></li>
            </ul>
          </li>
          <li><a href="#">Generate SSP</a></li>
        </ul>
      </nav>
      <div class="sidebar-footer">
        <div class="sync-status">
          <div class="status-indicator offline"></div>
          <span>Sync: Offline</span>
        </div>
        <button class="login-button">Login</button>
      </div>
    </aside>
    <main class="main-content">
      <header class="content-header">
        <h1>Dashboard</h1>
      </header>
      <div class="dashboard-content">
        <section class="overview-section">
          <h2>Compliance Overview</h2>
          <div class="chart-container">
            <CompliancePieChart />
          </div>
        </section>
        <section class="recent-section">
          <h2>Recent Activity</h2>
          <ul class="activity-list">
            <li>Updated NIST 800-171 assessment</li>
            <li>Created new CIS CSC framework mapping</li>
            <li>Generated SSP document</li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import CompliancePieChart from './components/CompliancePieChart.vue';
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.sidebar {
  width: 250px;
  background-color: #1a1a2e;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 20px 20px;
  border-bottom: 1px solid #2a2a3e;
}

.nav-menu {
  flex: 1;
  padding: 20px 0;
}

.nav-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu li {
  padding: 10px 20px;
  margin-bottom: 5px;
}

.nav-menu li.active {
  background-color: #2a2a3e;
  border-left: 4px solid #4361ee;
}

.nav-menu a {
  color: #fff;
  text-decoration: none;
  display: block;
}

.submenu {
  padding-left: 15px !important;
  font-size: 0.9rem;
}

.submenu li {
  padding: 8px 15px;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid #2a2a3e;
}

.sync-status {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
}

.status-indicator.offline {
  background-color: #ff6b6b;
}

.status-indicator.online {
  background-color: #51cf66;
}

.login-button {
  width: 100%;
  padding: 8px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.main-content {
  flex: 1;
  background-color: #f5f5f7;
  overflow-y: auto;
}

.content-header {
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.dashboard-content {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.overview-section, .recent-section {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.chart-container {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px; /* Ensure minimum height */
  width: 100%;       /* Ensure full width */
}

.activity-list {
  list-style: none;
  padding: 0;
}

.activity-list li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.activity-list li:last-child {
  border-bottom: none;
}

h1, h2 {
  margin-top: 0;
  color: #333;
}
</style>