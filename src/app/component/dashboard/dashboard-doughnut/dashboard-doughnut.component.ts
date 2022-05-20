import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-doughnut',
  templateUrl: './dashboard-doughnut.component.html',
  styleUrls: ['./dashboard-doughnut.component.css']
})
export class DashboardDoughnutComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.chart = document.getElementById('myChartDoughnut');
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart(): void {
    new Chart(this.chart, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Orange', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Doanh thu'
          }
        }
      },
    });
  }
}
