<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: {
    maxValue: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'top'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                precision: 0,
                max: this.maxValue
              }
            }
          ],
          xAxes: [
            {
              barPercentage: 1
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: ['Users', 'Inactive users', 'Manager', 'Vendor'],
        datasets: [
          {
            type: 'bar',
            label: 'Number of users',
            backgroundColor: '#9B30FF',
            data: [27, 0, 2, 0]
          }
        ]
      },
      this.options
    );
  }
};
</script>