import {Page} from 'ionic-framework/ionic';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  directives: [CHART_DIRECTIVES]
})
export class Page1 {
  constructor() {

  }
}
