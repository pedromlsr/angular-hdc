import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    userName = 'pedromlsr'

    userData = {
        email: 'pedromlsr@gmail.com',
        role: 'Admin'
    }

    title = 'moments-app'
}
