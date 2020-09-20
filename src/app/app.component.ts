import { Component, ViewChild, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { interval, timer } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('cd1', { static: false }) private countdown: CountdownComponent;

  leftTime = 1500;
  notify = "Time to work!";
  constructor(private titleService: Title) {

  }
  ngOnInit(): void {
  }
  setTime(leftTime: number) {
    this.leftTime = leftTime;
  }
}
