import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { DateService } from '../../../core/services/date.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public newItem: Item;
  public states = Object.values(State);

  @Output() nItem: EventEmitter<Item> = new EventEmitter;

  constructor(
    private dateService: DateService
  ) { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER,
      deliveryDate: ''
    };
  }

  public process() {
    this.newItem.deliveryDate = this.dateService.convertDateToISO(this.newItem.deliveryDate);
    console.log(this.newItem);

    this.nItem.emit(this.newItem);

    // Vider l'objet
    this.init();
  }
}
