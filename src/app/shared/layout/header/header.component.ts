import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loggedState: boolean = false

  constructor(private cartService: CardService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLoggedSubject.subscribe((isLoggedIn: boolean) => {
      this.loggedState = isLoggedIn
      console.log('State has been changed : ' + isLoggedIn)
    })
  }

  login() {
    this.authService.logIn()
  }

  logout() {
    this.authService.logOut()
  }
}
