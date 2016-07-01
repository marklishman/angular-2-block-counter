import {Component} from '@angular/core';

@Component({
    selector: 'block-counter',
    template:  `<button (click)="updateCount(-1)" [disabled]="!count"> - </button>
                <button (click)="updateCount()"> + </button>
                <span [innerHtml]="blocks" class="blocks"></span>
                {{count || 'none'}}`,
    styles: ['.blocks {color: palegreen;']
})

export class BlockCounterComponent {

    count: number = 4;

    updateCount(adjustment:number = 1) {
        this.count += adjustment;
    }

    get blocks() {
        return '&#9609;'.repeat(this.count);
    }
}