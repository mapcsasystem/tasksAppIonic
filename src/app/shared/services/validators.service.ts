import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  public emailPattern: RegExp =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,4}))$/;
  public notSpaceStartEndStringPattern: RegExp = /^[^\s].+[^\s]$/;

  public isValidField(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].invalid &&
      (form.controls[field].dirty || form.controls[field].touched)
    );
  }

  public field(
    form: AbstractControl,
    field: string
  ): AbstractControl<any, any> | null {
    return form.get(field);
  }

  public isField1EqualsField2(
    field1: string,
    field2: string
  ): (fb: AbstractControl) => ValidationErrors | null {
    return (fb: AbstractControl): ValidationErrors | null => {
      const field1Value = this.field(fb, field1)?.value;
      const field2Value = this.field(fb, field2)?.value;
      if (field1Value !== field2Value) {
        this.field(fb, field2)?.setErrors({ notEquals: true });
        return { notEquals: true };
      }
      this.field(fb, field2)?.setErrors(null);
      return null;
    };
  }
}
