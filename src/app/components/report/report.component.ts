import { Component, OnInit ,ViewChild} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
