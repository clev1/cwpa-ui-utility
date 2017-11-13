import { Component } from '@angular/core'; 

    @Component({
        selector: 'main-content',
        templateUrl: './html/app.component.html',
styleUrls: []
        })
export class AppComponent {
    
onThresholdItemSelected(thresholdItem) {
    //TODO: Code that will show which item has been selected. 
}
    
    initialItem = {
        name: "Rule 1",
        type: "Long",
        fromValue: 0,
        toValue: 10000,
        comments: "DRP Audit Rule 1"
    }

    onImport() {
        console.log('The import button was clicked!'); 
    }

    onExport() {
        console.log('The export button was clicked!'); 
    }
    
}
