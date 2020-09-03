import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabbed',
  templateUrl: './tabbed.page.html',
  styleUrls: ['./tabbed.page.scss'],
})
export class TabbedPage implements OnInit {
  mobile = false;

  constructor(private readonly platform: Platform) {}

  ngOnInit() {
    this.mobile = this.platform.is('mobile') || this.platform.is('mobileweb');
  }
}
