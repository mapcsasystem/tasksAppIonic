import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-custom-input',
  templateUrl: './custom-input.component.html',
})
export class CustomInputComponent {
  @Input({ required: true }) control!: FormControl | any;
  @Input({ required: true }) type: string = 'text';
  @Input({ required: true }) label: string = 'label';
  @Input({ required: true }) icon: string | null = null;
  @Input({ required: true }) placeholder: string = 'placeholder';
  @Input() autocomplete: 'off' | 'on' = 'off';
  @Input({ required: true }) nameControl!: string;

  public eye: boolean = true;
}
