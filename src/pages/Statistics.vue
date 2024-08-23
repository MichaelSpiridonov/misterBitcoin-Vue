<template>
  <section class="statistics">
    <h1>Market Price History</h1>
    <section class="charts">
      <Line
        v-if="chartData.labels && chartData.datasets[0].data"
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
      <Line
        v-if="avgBlockSizeData.labels && avgBlockSizeData.datasets[0].data"
        id="my-chart-id"
        :options="chartOptions"
        :data="avgBlockSizeData"
      />
    </section>
  </section>
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
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
          {
            label: 'Market Price History',
            data: null,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      avgBlockSizeData: {
        labels: null,
        datasets: [
          {
            label: 'Market Avg Block History',
            data: null,
            fill: false,
            borderColor: 'rgb(75, 192, 100)',
            tension: 0.1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    }
  },
  async created() {
    const history = await bitcoinService.getMarketPriceHistory()
    const avgBlockSize = await bitcoinService.getAvgBlockSize()
    this.avgBlockSizeData.labels = avgBlockSize.map(
      (item) => new Date(item.x * 1000).toISOString().split('T')[0]
    )
    this.avgBlockSizeData.datasets[0].data = avgBlockSize.map((item) => item.y)

    this.chartData.labels = history.map(
      (item) => new Date(item.x * 1000).toISOString().split('T')[0]
    )
    this.chartData.datasets[0].data = history.map((item) => item.y)
    console.log(this.chartData)
  },
}
</script>

<style lang="scss">
.statistics {
  display: flex;
  flex-direction: column;
  .charts {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: 100%;
  }
}
</style>
