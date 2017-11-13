import { Component, Input, Output, EventEmitter } from '@angular/core';

    @Component({
        selector: 'threshold-item',
        templateUrl: '../html/threshold-item.html'
        })

export class ThresholdItemComponent {
    
    @Input() thresholdItem; 
    @Output() select = new EventEmitter(); 
    
    selectable() {
        this.select.emit(this.thresholdItem); 
        return false; 
    }
}