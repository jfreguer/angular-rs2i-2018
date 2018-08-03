import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item';
import { DateService } from '../../../core/services/date.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  public form: FormGroup;
  public states = Object.values(State);

  @Output() nItem: EventEmitter<Item> = new EventEmitter;
  @Input() itemToEdit: Item;

  constructor(
    private fb: FormBuilder,
    private dateService: DateService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: [
        this.itemToEdit ? this.itemToEdit.name : '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        this.itemToEdit ? this.itemToEdit.reference : '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state : this.itemToEdit ? this.itemToEdit.state : State.ALIVRER,
      deliveryDate: this.itemToEdit ? this.dateService.dateToNgbPicker(this.itemToEdit.deliveryDate) : '',
    });
  }

  public process() {
    console.log(this.form.value);
    this.form.get('deliveryDate').setValue(this.dateService.convertDateToISO(this.form.get('deliveryDate').value));

    this.nItem.emit(this.form.value);

    // vide l'ensemble du formulaire
    this.form.reset();

    // Remet la valeur par défaut dans le formulaire
    this.form.get('state').setValue(State.ALIVRER);
  }

  public isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }
}
