import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  private _fb = inject(FormBuilder);
  private _v = inject(ValidatorsService);
  public _m = inject(MessageService);
  private _router = inject(Router);
  public form = this._fb.group(
    {
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this._v.notSpaceStartEndStringPattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this._v.emailPattern)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this._v.notSpaceStartEndStringPattern),
        ],
      ],
      password2: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this._v.notSpaceStartEndStringPattern),
        ],
      ],
    },
    {
      validators: [this._v.isField1EqualsField2('password', 'password2')],
    }
  );

  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }

  public isValidField(field: string): boolean | null {
    return this._v.isValidField(this.form, field);
  }

  public field(field: string): AbstractControl<any, any> | null {
    return this._v.field(this.form, field);
  }
}
