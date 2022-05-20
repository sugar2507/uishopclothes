import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css'],
})
export class DashboardChartComponent implements OnInit {
  chart: any;

  constructor() {}

  ngOnInit(): void {
    this.chart = document.getElementById('chart1');
    Chart.register(...registerables);
    this.loadChart();
  }
  loadChart(): void {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Doanh thu',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
        
        labels: ['thứ 2','thứ 3','thứ 4','thứ 5','thứ 6','thứ 7','Chủ nhật'],
      },
      options:{
        scales:{
          y: {
            grid:{
              borderDash:[1,2],
            },
            beginAtZero: true,
          },
        }
      }
    });
  }
}
