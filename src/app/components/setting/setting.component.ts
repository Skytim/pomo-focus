import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  statusMapping: any = {};
  constructor(public bsModalRef: BsModalRef, public settingsService: SettingsService) {
    this.statusMapping = this.settingsService.getSetting();
  }

  ngOnInit() {
  }

}
