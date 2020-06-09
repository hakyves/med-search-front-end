import { Component } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedicineSearch';
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
     
    }
  

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
}

}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { User } from './_models/User';
// import { AuthService } from './service/auth.service';



// @Component({ selector: 'app', templateUrl: 'app.component.html' })
// export class AppComponent {
//     currentUser: User;

//     constructor(
//         private router: Router,
//         private authenticationService: AuthService
//     ) {
//         this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
//     }

//     logout() {
//         this.authenticationService.logout();
//         this.router.navigate(['/login']);
//     }
// }
