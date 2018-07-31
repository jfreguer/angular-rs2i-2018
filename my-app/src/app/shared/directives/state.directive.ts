import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})

export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;

  constructor() {
  }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  /**
   * Génère le nom de la classe CSS à appliquer en fonction de l'état de la commande :
   * A livrer -> state-alivrer
   * En Cours -> state-encours
   * Livree -> state-livre
   * @param state
   */
  private formatClass(state: State): string {
    return `state-${state.normalize('NFD')
      .replace(/[\u0300-\u036f\s]/g, '')
      .toLowerCase()
    }`;
  }
}
