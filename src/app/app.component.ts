import { Component, ViewChild, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

import { Title } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReportComponent } from './components/report/report.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('cd1', { static: false }) private countdown: CountdownComponent;
  bsModalRef: BsModalRef;
  leftTime = 1500;
  notify = "Time to work!";
  constructor(private titleService: Title, private modalService: BsModalService) {

  }
  ngOnInit(): void {
  }
  setTime(leftTime: number) {
    this.leftTime = leftTime;
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ReportComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
