import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SeventhPage } from '../seventh/seventh';
import { SportsPage } from '../sports/sports';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SeventhPage;
  tab3Root = SportsPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
