import { Component, Input, Output, EventEmitter } from '@angular/core';

    @Component({
        selector: 'threshold-item',
        templateUrl: 'dist/app/html/threshold-item.html',
        styleUrls: ['dist/app/css/threshold-item.component.css']
        })

export class ThresholdItemComponent {
    
    @Input() thresholdItem; 
    @Output() select = new EventEmitter(); 
    
    selectable() {
        this.select.emit(this.thresholdItem); 
        return false; 
    }
}