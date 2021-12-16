import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:any = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: [75, 49, 89, 31, 86, 35, 50], label: 'Profit'},
    {data: [48, 38, 65, 39, 66, 17, 80], label: 'Loss'}
  ];

  ngOnInit(): void {
  }

  
 
}
