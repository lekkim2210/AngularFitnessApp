import { Component } from '@angular/core';

@Component({
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent {

    workoutTitle: string;
    workoutDescription: string;

    loginClicked($event: Event): void {
    }

    createNewUserClicked($event: Event): void {
    }
}
