import { iComponent } from '../interfaces/component.js';
import { Component } from './component.js';

export class Header extends Component implements iComponent {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate(): string {
        return `<header>
        <h1>TODO LIST</h1>
        <slot class="menu"></slot>
        </header>`;
    }
}
