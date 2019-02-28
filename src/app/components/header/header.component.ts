import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentLanguage: string

  constructor(private translate: TranslateService) { }

  switchLanguage() {
    this.translate.use(this.translate.currentLang === 'th' ? 'en' : 'th')
  }
}
