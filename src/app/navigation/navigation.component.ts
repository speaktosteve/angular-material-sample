import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';

/**
 * @title Basic menu
 */
@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  styleUrls: ['./navigation.component.scss'],
})
export class Navigation {}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
