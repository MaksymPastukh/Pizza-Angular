import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {

  @ContentChild('second')
  private second!: ElementRef

  @Input() title: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }


  toUpper() {
    return this.title.toUpperCase()
  }

}
