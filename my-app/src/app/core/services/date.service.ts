import { Injectable } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

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
}
