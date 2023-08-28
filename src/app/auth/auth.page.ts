import { Component } from '@angular/core';

@Component({
  template: ` <ion-content>
    <shared-header
      color="primary"
      [title]="''"
      [isModal]="false"
      [backButtons]="''"
    >
    </shared-header>
    <shared-logo></shared-logo>
    <div class="content animate__animated animate__fadeIn">
      <router-outlet></router-outlet>
    </div>
  </ion-content>`,
})
export class AuthPage {}
