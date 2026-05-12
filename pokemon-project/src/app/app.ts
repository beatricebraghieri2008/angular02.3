import { Component } from '@angular/core';
import { TypeListComponent } from './type-list/type-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TypeListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'pokemon-project';
}