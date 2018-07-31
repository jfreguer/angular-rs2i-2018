import { Item } from '../shared/interfaces/item';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
{
  id: '1',
  name: 'Jean-Francois',
  reference: '1234',
  deliveryDate: '2018-07-28T22:14:59.000Z',
  state: State.ALIVRER
},
{
  id: '2',
  name: 'Maëlle',
  reference: '1235',
  deliveryDate: '2018-07-29T22:17:20.000Z',
  state: State.ENCOURS
},
{
  id: '3',
  name: 'Dominique',
  reference: '1236',
  deliveryDate: '2018-07-30T22:09:10.000Z',
  state: State.LIVREE
}
];
