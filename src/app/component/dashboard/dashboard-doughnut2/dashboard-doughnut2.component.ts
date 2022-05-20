import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-doughnut2',
  templateUrl: './dashboard-doughnut2.component.html',
  styleUrls: ['./dashboard-doughnut2.component.css']
})
export class DashboardDoughnut2Component implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.chart = document.getElementById('myChartDoughnut2');
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
            data: [50,200, 70],
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
