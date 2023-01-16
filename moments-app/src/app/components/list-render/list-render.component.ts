import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-render',
    templateUrl: './list-render.component.html',
    styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
    animals = [
        {name: 'Lina', type: 'Dog'},
        {name: 'Luke', type: 'Cat'},
        {name: 'Belinha', type: 'Dog'},
        {name: 'Jerry', type: 'Mouse'}
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
