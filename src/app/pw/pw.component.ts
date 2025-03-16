import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bot-pw',
  imports: [CommonModule, RouterModule],
  templateUrl: './pw.component.html',
  styleUrl: './pw.component.css',
})
export class PwComponent {
  title;
  password;
  isNumbersChecked;
  isWordsChecked;
  isSymbolsChecked;

  length;
  passGenKeys;

  numbers = '0123456789';
  words = 'abcdefghijklmnopqrstuvwxyz';
  symbols = '~!@#$%^&*()';

  constructor() {
    this.title = 'Password Generator';
    this.password = '';
    this.isNumbersChecked = false;
    this.isWordsChecked = false;
    this.isSymbolsChecked = false;

    this.length = 0;
    this.passGenKeys = '';
  }

  areNumbersUsed() {
    this.isNumbersChecked = !this.isNumbersChecked;
    if (this.isNumbersChecked) {
      this.passGenKeys += this.numbers;
    }
  }

  areWordsUsed() {
    this.isWordsChecked = !this.isWordsChecked;
    if (this.isWordsChecked) {
      this.passGenKeys += this.words;
    }
  }

  areSymbolsUsed() {
    this.isSymbolsChecked = !this.isSymbolsChecked;
    if (this.isSymbolsChecked) {
      this.passGenKeys += this.symbols;
    }
  }

  onChangeLength(value: Event) {
    this.length = parseInt((value.target as HTMLInputElement)?.value);
  }

  enableButton() {
    return (
      this.length &&
      (this.isNumbersChecked || this.isWordsChecked || this.isSymbolsChecked)
    );
  }

  generatePassword() {
    let password = '';

    for (let i = 0; i < this.length; i++) {
      let randomKey = Math.floor(Math.random() * this.passGenKeys.length);
      password += this.passGenKeys[randomKey];
    }

    this.password = password;
  }
}
