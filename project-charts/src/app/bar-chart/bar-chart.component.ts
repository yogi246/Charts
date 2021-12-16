import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'];
  public barChartType:any = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [75, 49, 89, 31, 86, 35, 50], label: 'Profit'},
    {data: [48, 38, 65, 39, 66, 17, 80], label: 'Loss'}
  ];

  ngOnInit(): void {
  }

}
