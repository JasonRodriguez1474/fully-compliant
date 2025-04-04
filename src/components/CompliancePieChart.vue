<template>
  <div class="chart-container">
    <DoughnutChart 
      :chartData="chartData" 
      :options="chartOptions" 
      :height="250"
      :width="250"
      cssClasses="chart-class"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register the required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// This would be dynamic in the future, connected to actual framework status
const complianceData = ref({
  compliant: 65,
  nonCompliant: 15,
  inProgress: 20
});

const chartData = computed<ChartData<'doughnut'>>(() => {
  return {
    labels: ['Compliant', 'Non-Compliant', 'In Progress'],
    datasets: [
      {
        data: [
          complianceData.value.compliant,
          complianceData.value.nonCompliant,
          complianceData.value.inProgress
        ],
        backgroundColor: [
          '#4caf50', // green for compliant
          '#f44336', // red for non-compliant
          '#ff9800'  // orange for in progress
        ],
        borderColor: [
          '#388e3c',
          '#d32f2f',
          '#f57c00'
        ],
        borderWidth: 1
      }
    ]
  };
});

const chartOptions = computed<ChartOptions<'doughnut'>>(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Control Implementation Status',
        font: {
          size: 16
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw as number;
            const total = complianceData.value.compliant + 
                        complianceData.value.nonCompliant + 
                        complianceData.value.inProgress;
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${percentage}% (${value} controls)`;
          }
        }
      }
    },
    cutout: '70%'
  };
});

// Function to update chart data - can be exposed for dynamic updates later
function updateComplianceData(data: { compliant: number, nonCompliant: number, inProgress: number }) {
  complianceData.value = data;
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.chart-class {
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  height: 100% !important;
}

/* Target canvas element directly */
:deep(canvas) {
  max-height: 100%;
  max-width: 100%;
}

/* Ensure chart wrappers are properly sized */
:deep(.chart-js-render-monitor) {
  height: 100% !important;
  width: 100% !important;
}
</style>
