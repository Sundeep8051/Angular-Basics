import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bot-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  inputVal = 'test';
}
