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
  title = 'pomo-focus';
  public intervallTimer = interval(500);
  private subscription;
  constructor(private titleService: Title) {

  }
  ngOnInit(): void {
  }
  handleEvent($event) {
    console.log($event);
    const timer$ = timer(5000);
    if ($event.action === "resume") {
      this.subscription = this.intervallTimer.pipe(takeUntil(timer$)).subscribe(x => {
        console.log(this.countdown);
        this.titleService.setTitle(this.countdown.i.text);
      });
    }
    if ($event.action === "stop" || $event.action === "done") {
      this.subscription.unsubscribe();
      this.titleService.setTitle('Finish');
    }
  }
}
