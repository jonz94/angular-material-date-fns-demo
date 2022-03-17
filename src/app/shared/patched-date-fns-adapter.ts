import { Inject, Injectable, Optional } from '@angular/core';
import { DateFnsAdapter } from '@angular/material-date-fns-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { format } from 'date-fns';

/** Creates an array and fills it with values. */
function range<T>(length: number, valueFunction: (index: number) => T): T[] {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}

@Injectable()
export class PatchedDateFnsAdapter extends DateFnsAdapter {
  constructor(@Optional() @Inject(MAT_DATE_LOCALE) matDateLocale: {}) {
    super(matDateLocale);
  }

  override getDateNames(): string[] {
    console.log('locale:', this.locale);

    return range(31, (i) =>
      format(new Date(2017, 0, i + 1), 'd', { locale: this.locale })
    );
  }
}
