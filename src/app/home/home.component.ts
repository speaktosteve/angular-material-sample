import { Component } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';
import { GridListComponent } from '../grid-list/grid-list.component';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PanelComponent, GridComponent, GridListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
