import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'bot-type-checker',
  imports: [CommonModule],
  templateUrl: './type-checker.component.html',
  styleUrl: './type-checker.component.css',
})
export class TypeCheckerComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInput(value: Event) {
    this.enteredText = (value.target as HTMLInputElement)?.value;
  }

  onComplete() {
    return this.randomText === this.enteredText ? 'Success' : '';
  }

  onChange(letter: string, text: string) {
    if (!text) {
      return 'pending';
    }

    return letter === text ? 'correct' : 'incorrect';
  }
}
