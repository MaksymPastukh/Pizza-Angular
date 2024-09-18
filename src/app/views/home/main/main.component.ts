import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {map, Subject, Subscription} from "rxjs";
import {CardService} from "../../../shared/services/card.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/component/popup/popup.component";


// Используя declare мы предупреждаем компилятор об использовании существующе глобальной перемеренной на странице
// declare var bootstrap: any

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private subject: Subject<number>


  constructor(public cardService: CardService, private modalService: NgbModal) {
    this.subject = new Subject<number>()
    let count = 0
    const interval = setInterval(() => {
      this.subject.next(count++)
    }, 1000)
    const timeOutComplete = setTimeout(() => {
      this.subject.complete()
    }, 5000)


    // this.observable = from([1, 2, 3, 4, 5])
    // this.observable = new Observable((observer) => {
    //   let count = 0
    //   const interval = setInterval(() => {
    //     observer.next(count++)
    //   }, 1000)
    //   const timeOutComplete = setTimeout(() => {
    //     observer.complete()
    //   }, 4000)
    //   const timeOutError = setTimeout(() => {
    //     observer.error('Error')
    //   }, 6000)
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval)
    //       clearInterval(timeOutComplete)
    //       clearInterval(timeOutError)
    //     }
    //   }
    // })


  }

  private subscription: Subscription | null = null


  ngOnInit() {
    // const myModalAlternative = new bootstrap.Modal('#myModal', {})
    // myModalAlternative.show()
    this.subscription = this.subject.subscribe({
      next: (param: number) => {
        console.log(param, ' subscribe : 1')
      },
      error: (error: string) => {
        console.log("ERROR" + error)
      }
    })
  }

  @ViewChild(PopupComponent) private popupComponent!: PopupComponent

  ngAfterViewInit() {
    this.popupComponent.open()
    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'Main Component';
    // this.modalService.open(this.popup, {})
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  test() {
    this.subject
      .pipe(
        map((num) => {
          return 'Number: ' + num * 10
        })
      )
      .subscribe((param: string) => {
        console.log(param, ' subscribe : 2')
      })
  }

}
