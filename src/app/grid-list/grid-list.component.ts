import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss',
})
export class GridListComponent implements OnInit {
  breakPoint: number = 2;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('HandsetPortrait is on');
          this.breakPoint = 1;
        } else {
          console.log('HandsetPortrait is off');
          this.breakPoint = 2;
        }
      });
  }
}
