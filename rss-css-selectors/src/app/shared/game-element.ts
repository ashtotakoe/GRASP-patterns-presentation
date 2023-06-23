import { BaseComponent } from './base-component'
import { GameElementConstructor } from '../core/types/interfaces'

export class GameElement extends BaseComponent {
  public id: number

  constructor({ parent, id, attribute, tag = 'div' }: GameElementConstructor) {
    super({ parent, attribute, tag })
    this.id = id
  }
}
