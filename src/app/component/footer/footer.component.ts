import { Component, OnInit } from '@angular/core';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public cardService: CardService) { }

  ngOnInit(): void {
  }

}
