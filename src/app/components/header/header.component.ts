import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authStatus$: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.authStatus$ = this.authService.authStatus;
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  throwError() {
    console.log("error");
    throw new Error("Boom");
  }

}
