import { BaseComponent } from '../../shared/base-component'
import { Editor } from '../editor/editor'
import { Playground } from '../playground/playground'
import { GameElements } from '../game-elements/game-elements'
import { Header } from '../../core/components/header/header'
import { SideBar } from '../../core/components/side-bar/side-bar'
import { levels } from '../../core/constants/levels'

export class Layout {
  public init(parent: HTMLElement): Record<string, BaseComponent | GameElements> {
    const header = new Header(parent)
    const main = new BaseComponent({ tag: 'main', parent })
    const gameBoard = new Playground(main.element)
    const editor = new Editor(main.element)
    const gameElements = new GameElements({ playground: gameBoard.element, editor: editor.element })
    gameElements.createElements(levels[0].structure)
    const sideBar = new SideBar(main.element)
    return { header, main, gameBoard, editor, sideBar, gameElements }
  }
}
