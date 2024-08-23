import { Component, OnInit } from '@angular/core';

// component defines html-tags
@Component({
    // meta data about component
    // selector, html tag name
    selector: "app-root", // <app-root>
    templateUrl: 'app.component.html', // VIEW
    styleUrls: [ // SCOPPED STYLE
        'app.component.scss'
    ]
})
export class AppComponent implements OnInit {
    // MODELS
    title = 'Product app'

    constructor() {
        console.log('AppComponent created')
    }

    // after view initialized/rendered first time
    ngOnInit() { // called automatically by framework when view is loaded
        console.log('AppComponent init')
    }
}
