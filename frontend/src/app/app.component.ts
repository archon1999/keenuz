import { DOCUMENT, registerLocaleData } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

import { CoreMenuService } from 'core/components/core-menu/core-menu.service';
import { CoreConfigService } from 'core/services/config.service';
import { CoreTranslationService } from 'core/services/translation.service';

import { locale as menuEnglish } from 'app/i18n/en';
import { locale as menuRussian } from 'app/i18n/ru';
import { locale as menuUzbek } from 'app/i18n/uz';
import localeEn from '@angular/common/locales/en';
import localeRu from '@angular/common/locales/ru';
import localeUz from '@angular/common/locales/uz';

import { menu } from '@app/menu';
import { Router } from '@angular/router';
import { AppService } from "@app/app.service";
import { coreConfig } from './app.config';
import { CoreLoadingScreenService } from "@core/services/loading-screen.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    public title: Title,
    public coreConfigService: CoreConfigService,
    public coreMenuService: CoreMenuService,
    public coreTranslationService: CoreTranslationService,
    public coreLoadingService: CoreLoadingScreenService,
    public translateService: TranslateService,
    public router: Router,
    public appService: AppService,
  ) {
    this.coreMenuService.register('main', menu);
    this.coreMenuService.setCurrentMenu('main');

    this.translateService.addLangs(['en', 'ru', 'uz']);

    let browserLang = this.translateService.getBrowserLang();
    if (!translateService.langs.includes(browserLang)) {
      browserLang = 'en';
    }
    this.translateService.setDefaultLang(browserLang);

    this.coreTranslationService.translate(menuEnglish, menuRussian, menuUzbek);

    this.title.setTitle(coreConfig.app.appTitle);

    registerLocaleData(localeUz, 'uz');
    registerLocaleData(localeRu, 'ru');
    registerLocaleData(localeEn, 'en');
  }

  ngOnInit(): void {
    this.appService.renderer = this._renderer;
    this.appService.document = this.document;
    this.appService.elementRef = this._elementRef;
    this.appService.init();
    this.coreConfigService.config = {
      layout: {
        footer: {
          hidden: false,
        }
      }
    };
  }
}
