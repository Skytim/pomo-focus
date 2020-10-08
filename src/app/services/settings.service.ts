import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultStatusMapping = {
    Pomodoro: { leftTime: 25 },
    ShortBreak: { leftTime: 10 },
    LongBreak: { leftTime: 15 },
  };
  statusMapping: any = {};

  constructor(private userService: UserService, private db: AngularFirestore) { }

  getSetting() {
    this.statusMapping = Object.assign({}, this.defaultStatusMapping);
    if (this.userService.hasLogin()) {

      this.db.collection('user_settings').doc(this.userService.getUserId()).get().subscribe(settings => {
        if (settings.data() !== undefined) {
          this.statusMapping.Pomodoro.leftTime = settings.data().pomo_doro_left_time / 60;
          this.statusMapping.LongBreak.leftTime = settings.data().long_break_left_time / 60;
          this.statusMapping.ShortBreak.leftTime = settings.data().short_break_left_time / 60;
        }
      });
    }
    return this.statusMapping;
  }

  setSetting() {

  }

}
