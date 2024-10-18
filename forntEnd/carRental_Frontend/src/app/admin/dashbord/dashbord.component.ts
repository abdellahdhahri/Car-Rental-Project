import { Component } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { map } from 'rxjs/operators';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
//import { Chart } from 'chart.js';
import { Chart } from 'chart.js/auto';



@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  rentedCarsData: any[] = [];
  view: [number, number] = [500, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Vehicle Model';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Rentals';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  /**
   *
   */
  constructor( private ser:ServicesService) {
    
  }
  ngOnInit(): void {
   /* this.ser.getAllAggrementTab().pipe(
      map((data: any[]) => data.map(car => ({
        name: car.vehicleModel,
        value: car.count
      })))
    ).subscribe((formattedData: any[]) => {
      this.rentedCarsData = formattedData;
    });
  }*/
  this.ser.getAllAggrementTab().pipe(
    map((data: any[]) => data.map(car => ({
      name: car.vehicleModel,
      value: car.count
    })))
  ).subscribe((formattedData: any[]) => {
    this.rentedCarsData = formattedData;
    this.createChart();
  });
}

createChart(): void {
  const canvas = document.getElementById('bar-chart') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.rentedCarsData.map(car => car.name),
        datasets: [{
          label: 'Number of Rentals',
          data: this.rentedCarsData.map(car => car.value),
          backgroundColor: '#5AA454', // Green color
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

}


