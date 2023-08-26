import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) type: string = 'text';
  @Input({ required: true }) label: string = 'label';
  @Input({ required: true }) icon: string | null = null;
  @Input({ required: true }) placeholder: string = 'placeholder';
  @Input({ required: true }) autocomplete: 'off' | 'on' = 'off';

  public eye: boolean = true;
}
