import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  user: User = null;


  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  registerUser() {
    this.authenticationService.RegisterUser(User.name, this.user.email, this.user.password)
      .subscribe(
        data => { this.router.navigate(['/']); },
        error => {
          console.log('Error happend: ', error);
        });
  }

}
