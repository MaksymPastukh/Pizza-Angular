import {Component, OnInit} from '@angular/core';
import {CardService} from "../../../services/card.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor( public cardService: CardService) {
  }
  ngOnInit() {
  }
}
