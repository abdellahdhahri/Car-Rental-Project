import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ServicesService } from '../service/services.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
/**
 *
 */
constructor(private sr:ServicesService) {
  
}
ngOnInit(){
  this.renderChart();
}
renderChart(){
  const ctx = document.getElementById('myChart');

  new Chart("piechart", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
}
