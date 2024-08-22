<template>
  <div v-if="chartData">
    <LineChart :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'
import { bitcoinService } from '@/services/bitcoin.service'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

export default {
  components: {
    LineChart: Line,
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Bitcoin Price',
            borderColor: '#42A5F5',
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
            fill: true,
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'DD MMM YYYY',
              displayFormats: {
                day: 'DD MMM',
              },
            },
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Price (USD)',
            },
          },
        },
      },
      isDataLoaded: false,
    }
  },
  async created() {
    try {
      const history = await bitcoinService.getMarketPriceHistory()
      this.chartData.labels = history.map((item) => new Date(item.x * 1000).toISOString().split('T')[0])
      this.chartData.datasets[0].data = history.map((item) => item.y)
      this.isDataLoaded = true
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error)
    }
  },
}
</script>

<style scoped>
/* Add your component styles here */
</style>
