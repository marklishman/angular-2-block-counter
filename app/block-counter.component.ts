import { Component } from '@angular/core';

@Component({
    selector: 'block-counter',
    template:  `
        <button (click)="updateCount(-1)" [disabled]="!count"> - </button>
        <button (click)="updateCount()"> + </button>
        <span [innerHTML]="blocks" class="blocks"></span>
        {{count || 'none'}}`,
    styles: ['.blocks {color: PaleGreen;']
})
export class BlockCounterComponent {

    private count: number = 4;

    private updateCount(adjustment:number = 1) {
        this.count += adjustment;
    }

    private get blocks() {
        return '&#9609;'.repeat(this.count);
    }
}