import { Component, Input, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input({ required: true }) title: string | null = null;
  @Input({ required: true }) backButtons: string | null = null;
  @Input({ required: true }) color: string = 'primary';
  @Input({ required: true }) isModal: boolean = false;
  @Input({ required: true }) centerTitle: boolean = false;

  private _themeService = inject(ThemeService);
  $darkMode: BehaviorSubject<boolean> = this._themeService.$darkMode;

  public setTheme(darkMode: boolean) {
    this._themeService.setTheme(darkMode);
  }
}
