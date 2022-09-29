import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';
  menuItems:MenuItem[] = [{
    Item:'ChickenFingers',
    Category:'dinner',
    Price:11.99
  },
  {
    Item:'Pizza',
    Category:'dinner',
    Price:11.99
  },
  {
    Item:'Wings',
    Category:'sides',
    Price:8.99
  },
  {
    Item:'Breadsticks',
    Category:'sides',
    Price:4.99
  }
]
}
