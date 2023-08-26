import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public $darkMode = new BehaviorSubject<boolean>(false);

  public setInitialTheme(): void {
    const darkMode = JSON.parse(localStorage.getItem('darkMode') as string);
    this.setTheme(darkMode);
  }

  public setTheme(darkMode: boolean): void {
    if (darkMode) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
    this.$darkMode.next(darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }
}
