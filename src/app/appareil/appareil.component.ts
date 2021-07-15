import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // @ts-ignore
  @Input() appareilName: string;
  // @ts-ignore
  @Input() appareilStatus: string;
  // @ts-ignore
  @Input() index: number;
  // @ts-ignore
  @Input() id: number;

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  // @ts-ignore
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
