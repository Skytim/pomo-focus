import { Component, ViewChild, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

import { Title } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReportComponent } from './components/report/report.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { SettingComponent } from './components/setting/setting.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('cd1', { static: false }) countdown: CountdownComponent;
  bsModalRef: BsModalRef;
  leftTime = 1500;

  statusMapping = {
    Pomodoro: { leftTime: 1500, notify: 'Time to work!' },
    ShortBreak: { leftTime: 600, notify: 'Time for a break!' },
    LongBreak: { leftTime: 900, notify: 'Time for a tea!' },
  };
  notify = 'Time to work!';

  isLoggedIn: Observable<boolean>;
  displayAddTaskCard = false;
  constructor(private titleService: Title, private modalService: BsModalService, public userService: UserService,
    private db: AngularFirestore) {
    this.isLoggedIn = userService.isLoggedIn();
    this.isLoggedIn.subscribe(x => {
      const userId = localStorage.getItem('UserID');
      if (userId !== null) {
        this.db.collection('user_settings').doc(userId).get().subscribe(settings => {
          if (settings.data() !== undefined) {
            this.statusMapping.Pomodoro.leftTime = settings.data().pomo_doro_left_time;
            this.statusMapping.LongBreak.leftTime = settings.data().long_break_left_time;
            this.statusMapping.ShortBreak.leftTime = settings.data().short_break_left_time;
          }
        });
      }
    });
  }
  ngOnInit(): void {
  }
  setTime(status: string) {
    this.leftTime = this.statusMapping[status].leftTime;
    this.notify = this.statusMapping[status].notify;
    this.setTitle();
  }

  openModalWithComponent(type: string) {
    if (type === 'Report') {
      this.bsModalRef = this.modalService.show(ReportComponent);
    }
    else {
      this.bsModalRef = this.modalService.show(SettingComponent);
    }
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  setTitle() {
    const countdownNode = document.querySelector('countdown');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.titleService.setTitle(document.querySelector('span').innerText + ' ' + this.notify);
      }
      );
    });

    observer.observe(countdownNode, {
      subtree: true,
      characterDataOldValue: true,
      attributes: true
    });
  }

  begin() {
    this.countdown.begin();
    this.setTitle();
  }

  pause() {
    this.countdown.pause();
    this.setTitle();
  }

  restart() {
    this.countdown.restart();
    this.setTitle();
  }


}
