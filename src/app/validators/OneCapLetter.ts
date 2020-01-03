import { ValidatorFn, AbstractControl } from '@angular/forms';

export function oneCapLetterValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        let regex = /[A-Z]+/g;
        var test = regex.test(control.value);
        return test === true ?
            null : {
                'oneCapLetter':
                {
                    value: control.value,
                    message: "One Capital letter minimum"
                }
            };
    }
}