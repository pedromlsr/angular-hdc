import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
    selector: 'app-list-render',
    templateUrl: './list-render.component.html',
    styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
    animals: Animal[] = [
        {name: 'Lina', type: 'Dog', age: 1},
        {name: 'Luke', type: 'Cat', age: 5},
        {name: 'Belinha', type: 'Dog', age: 1},
        {name: 'Jerry', type: 'Mouse', age: 20}
    ]

    animal: Animal = {
        name: 'Lisboa',
        type: 'Cat',
        age: 3
    }

    animalDetails = ''

    constructor() { }

    ngOnInit(): void {
    }

    showAge(animal: Animal): void {
        this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)!`
    }

}
