import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '@app/modules/pages/authentication/auth.service';
import { CoreSidebarService } from 'core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from 'core/services/config.service';
import { CoreMediaService } from 'core/services/media.service';

import { User } from '@app/modules/pages/authentication/user';

import { Router } from '@angular/router';

import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'app/shared/services/api.service';
import { CoreCommonModule } from '@core/common.module';
import { KeenIconComponent } from '@shared/keen-icon/keen-icon.component';
import { CoreConfig } from "@core/types";
import { Subject } from "rxjs";
import { BaseComponent } from "@app/common/classes/base.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CoreCommonModule,
    KeenIconComponent,
    NgbDropdownModule,
  ]
})
export class NavbarComponent extends BaseComponent implements OnInit, OnDestroy {
  public horizontalMenu: boolean;
  public hiddenMenu: boolean;

  public coreConfig: any;
  public currentSkin: string;
  public prevSkin: string;

  public currentUser: User;

  public languageOptions: any;
  public navigation: any;
  public selectedLanguage: any;

  @HostBinding('class.fixed-top')
  public isFixed = false;

  constructor(
    private _router: Router,
    private _authenticationService: AuthService,
    private _coreConfigService: CoreConfigService,
    private _coreMediaService: CoreMediaService,
    private _coreSidebarService: CoreSidebarService,
    private _mediaObserver: MediaObserver,
    public _translateService: TranslateService,
    public modalService: NgbModal,
    public api: ApiService,
  ) {
    super();

    this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));

    this.languageOptions = {
      en: {
        title: 'English',
        flag: 'us'
      },
      ru: {
        title: 'Русский язык',
        flag: 'ru'
      },
      uz: {
        title: 'O`zbek tili',
        flag: 'uz'
      }
    };
  }

  toggleSidebar(key: string): void {
    this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
  }

  refreshPage() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.navigate([this._router.url], { skipLocationChange: true });
  }

  setLanguage(language: string): void {
    this.api.post('set-language/', { language: language }).subscribe(() => {
      this.selectedLanguage = language;
      this._translateService.use(language);
      this._coreConfigService.setConfig({ app: { appLanguage: language } }, { emitEvent: true });
      location.reload();
      // this.refreshPage();
    });
  }

  toggleDarkSkin() {
    // Get the current skin
    this._coreConfigService
      .getConfig()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(config => {
        this.currentSkin = config.layout.skin;
      });

    // Toggle Dark skin with prevSkin skin
    this.prevSkin = localStorage.getItem('prevSkin');

    if (this.currentSkin === 'dark') {
      this._coreConfigService.setConfig(
        { layout: { skin: this.prevSkin ? this.prevSkin : 'default' } },
        { emitEvent: true }
      );
    } else {
      localStorage.setItem('prevSkin', this.currentSkin);
      this._coreConfigService.setConfig({ layout: { skin: 'dark' } }, { emitEvent: true });
    }
  }

  loginModalOpenForm() {
  }

  logout() {
    this._authenticationService.logout();
    // this._router.navigateByUrl('/login');
    window.location.href = '/login';
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to the config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe((config: CoreConfig) => {
      this.coreConfig = config;
      this.horizontalMenu = config.layout.type === 'horizontal';
      this.hiddenMenu = config.layout.menu.hidden === true;
      this.currentSkin = config.layout.skin;

      // Fix: for vertical layout if default navbar fixed-top than set isFixed = true
      if (this.coreConfig.layout.type === 'vertical') {
        setTimeout(() => {
          if (this.coreConfig.layout.navbar.type === 'fixed-top') {
            this.isFixed = true;
          }
        }, 0);
      }
    });

    // Horizontal Layout Only: Add class fixed-top to navbar below large screen
    if (this.coreConfig.layout.type === 'horizontal') {
      // On every media(screen) change
      this._coreMediaService.onMediaUpdate.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
        const isFixedTop = this._mediaObserver.isActive('bs-gt-xl');
        this.isFixed = !isFixedTop;
      });
    }

    // Set the selected language from default languageOptions
    // this.selectedLanguage = _.find(this.languageOptions, {
    //   id: this._translateService.currentLang
    // });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
