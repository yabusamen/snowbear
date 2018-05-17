import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words = ['Grass', 'Planting', 'Brick Work', 'FirePit', 'Tree']
  pics = ['../assets/logo.dms', '../assets/planter.jpg', '../assets/ring.jpg',
  '../assets/pit.jpg', '../assets/tree.jpg']
  title = 'Snow Bear';
}
