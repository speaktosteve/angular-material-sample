import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Navigation } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, Navigation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
