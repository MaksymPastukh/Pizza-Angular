import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardService} from "../../../services/card.service";
import {from, map, Observable, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable!: Observable<number>
  private subject: Subject<number>

  constructor(public cardService: CardService) {
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
    this.subscription = this.subject.subscribe({
      next: (param: number) => {
        console.log(param, ' subscribe : 1')
      },
      error: (error: string) => {
        console.log("ERROR" + error)
      }
    })
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
