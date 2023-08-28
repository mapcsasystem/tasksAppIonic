import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  errorsFields = {
    required: 'Campo <strong>requerido.</strong> ',
    fullName: {
      minLength: 'Campo debe tener menos <strong>3 digitos.</strong> ',
      pattern:
        'Campo no debe tener <strong>espacios en blanco al inicio y final</strong> ',
    },
    email: {
      emailExists: 'El correo electrónico <strong>ya existe.</strong> ',
      pattern: 'Correo electrónico no <strong>valido.</strong>',
      sameInvalidEmail: `Los correos electrónicos no son <strong>iguales.</strong> `,
    },
    password: {
      minLength:
        'La contraseña debe tener al menos <strong>6 digitos.</strong> ',
      notEquals: 'Las contraseñas no son <strong>iguales.</strong> ',
      pattern:
        'Campo no debe tener <strong>espacios en blanco al inicio y final</strong> ',
    },
  };
}
