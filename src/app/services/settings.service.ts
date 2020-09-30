import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultStatusMapping = {
    Pomodoro: { leftTime: 1500, notify: 'Time to work!' },
    ShortBreak: { leftTime: 600, notify: 'Time for a break!' },
    LongBreak: { leftTime: 900, notify: 'Time for a tea!' },
  };

  constructor() { }

  getSetting: void(){
    // if is login
    // else if localStorage data
    // get default setting
  }

}
