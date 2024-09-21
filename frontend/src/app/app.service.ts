import { ElementRef, HostBinding, Injectable, Renderer2 } from "@angular/core";
import { CoreConfigService } from "@core/services/config.service";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import * as Waves from "node-waves";
import { CoreConfig } from "@core/types";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public coreConfig: CoreConfig;
  public defaultTouch = { x: 0, y: 0, time: 0 };

  @HostBinding('@.disabled')
  public animationsDisabled = false;

  public renderer: Renderer2;
  public document: any;
  public elementRef: ElementRef;

  constructor(
    public coreConfigService: CoreConfigService,
    public translateService: TranslateService,
    public router: Router,
  ) {}

  init() {
    Waves.init();

    this.coreConfigService.config.subscribe(config => {
      this.animationsDisabled = !config.layout.enableAnimation;
      this.coreConfig = config;

      let appLanguage = this.coreConfig.app.appLanguage;
      this.translateService.use(appLanguage);

      setTimeout(() => {
        this.translateService.setDefaultLang(appLanguage);
      });

      this.elementRef.nativeElement.classList.remove(
        'vertical-layout',
        'vertical-menu-modern',
        'horizontal-layout',
        'horizontal-menu'
      );

      if (this.coreConfig.layout.type === 'vertical') {
        this.elementRef.nativeElement.classList.add('vertical-layout', 'vertical-menu-modern');
      } else if (this.coreConfig.layout.type === 'horizontal') {
        this.elementRef.nativeElement.classList.add('horizontal-layout');
        if (window.innerWidth > 1199) {
          this.elementRef.nativeElement.classList.add('horizontal-menu');
        }
      }

      this.elementRef.nativeElement.classList.remove(
        'navbar-floating',
        'navbar-static',
        'navbar-sticky',
        'navbar-hidden'
      );

      if (this.coreConfig.layout.navbar.type === 'navbar-static-top') {
        this.elementRef.nativeElement.classList.add('navbar-static');
      } else if (this.coreConfig.layout.navbar.type === 'fixed-top') {
        this.elementRef.nativeElement.classList.add('navbar-sticky');
      } else if (this.coreConfig.layout.navbar.type === 'floating-nav') {
        this.elementRef.nativeElement.classList.add('navbar-floating');
      } else {
        this.elementRef.nativeElement.classList.add('navbar-hidden');
      }
      this.elementRef.nativeElement.classList.remove('footer-fixed', 'footer-static', 'footer-hidden');

      if (this.coreConfig.layout.footer.type === 'footer-sticky') {
        this.elementRef.nativeElement.classList.add('footer-fixed');
      } else if (this.coreConfig.layout.footer.type === 'footer-static') {
        this.elementRef.nativeElement.classList.add('footer-static');
      } else {
        this.elementRef.nativeElement.classList.add('footer-hidden');
      }

      if (
        this.coreConfig.layout.menu.hidden &&
        this.coreConfig.layout.navbar.hidden &&
        this.coreConfig.layout.footer.hidden
      ) {
        this.elementRef.nativeElement.classList.add('blank-page');
        // ! Fix: Transition issue while coming from blank page
        this.renderer.setAttribute(
          this.elementRef.nativeElement.getElementsByClassName('app-content')[0],
          'style',
          'transition:none'
        );
      } else {
        this.elementRef.nativeElement.classList.remove('blank-page');
        // ! Fix: Transition issue while coming from blank page
        setTimeout(() => {
          this.renderer.setAttribute(
            this.elementRef.nativeElement.getElementsByClassName('app-content')[0],
            'style',
            'transition:300ms ease all'
          );
        }, 1000);
        // If navbar hidden
        if (this.coreConfig.layout.navbar.hidden) {
          this.elementRef.nativeElement.classList.add('navbar-hidden');
        }
        // Menu (Vertical menu hidden)
        if (this.coreConfig.layout.menu.hidden) {
          this.renderer.setAttribute(this.elementRef.nativeElement, 'data-col', '1-column');
        } else {
          this.renderer.removeAttribute(this.elementRef.nativeElement, 'data-col');
        }
        // Footer
        if (this.coreConfig.layout.footer.hidden) {
          this.elementRef.nativeElement.classList.add('footer-hidden');
        }
      }

      // Skin Class (Adding to body as it requires highest priority)
      // @ts-ignore
      if (this.coreConfig.layout.skin !== '' && this.coreConfig.layout.skin !== undefined) {
        this.document.body.classList.remove('default-layout', 'bordered-layout', 'dark-layout', 'semi-dark-layout');
        this.document.body.classList.add(this.coreConfig.layout.skin + '-layout');
      }
    });
  }
}
