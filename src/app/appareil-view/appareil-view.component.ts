import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth: boolean = false;
  // @ts-ignore
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) { }

  appareils: any[] | undefined;

  ngOnInit(){
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      });
    this.appareilService.emitAppareilSubject();
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  // @ts-ignore
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}
