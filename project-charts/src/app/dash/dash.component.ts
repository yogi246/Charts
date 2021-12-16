import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Total Views', cols: 1, rows: 1 },
        { title: 'Product Sold', cols: 1, rows: 1 },        
      ];
    })
  );

  
  constructor(private breakpointObserver: BreakpointObserver) {}
}
