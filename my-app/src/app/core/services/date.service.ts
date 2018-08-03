import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  public convertDateToISO(arg: any): string {
    arg = new Date(this.ngbDateParserFormatter.format(arg));
    return arg.toISOString();
  }

  public dateToNgbPicker(arg: string): NgbDateStruct {
    const date = new Date(arg);

    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };

  }
}
