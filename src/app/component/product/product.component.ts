import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() product: ProductType
  @Output() addToCardEvent: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent

  @ViewChild('elem')
  private elem!: ElementRef

  constructor() {
    this.product = {
      image: '',
      title: '',
      subTitle: '',
      dateTime:  ''

    }
  }

  ngOnInit(): void {
    // console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges', changes)
  }

  ngAfterViewInit(): void {
    // console.log(this.elem)
  }

  addProductToCard(): void {
    this.addToCardEvent.emit(this.titleComponent.toUpper())
  }
}
