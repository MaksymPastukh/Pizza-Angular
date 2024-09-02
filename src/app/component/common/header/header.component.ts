import {Component, ContentChild, OnInit} from '@angular/core';
import {CardService} from "../../../services/card.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CardService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.logIn()
  }

  logout() {
    this.authService.logOut()
  }
}
