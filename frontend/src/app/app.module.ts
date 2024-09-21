import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import 'hammerjs';
import { ToastrModule } from '@shared/third-part-modules/toastr/toastr.module';

import { CoreCommonModule } from 'core/common.module';
import { CoreSidebarModule } from 'core/components';
import { CoreModule } from 'core/core.module';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { coreConfig } from './app.config';

import { AppComponent } from 'app/app.component';
import { WebsocketModule } from '@shared/services/websocket';

import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'environments/environment';

import { NgxSpinnerModule } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BS_BREAKPOINTS, CustomBreakPointsProvider } from '@layout/custom-breakpoints';

import { register } from 'swiper/element/bundle';
import { LayoutComponent } from '@layout/layout.component';
import { appRoutes } from "@app/app.routing";
import { AuthService } from "@app/modules/pages/authentication/auth.service";
import { of } from "rxjs";
import { ErrorInterceptor } from "@app/modules/pages/authentication/error.interceptor";

register();

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    public translateService: TranslateService,
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      const key = `PageTitle.${title}`;
      this.translateService.get(key).subscribe((value: any) => {
        this.title.setTitle(`${value} - ${coreConfig.app.appTitle}`);
      });
    }
  }
}

export function authFactory(authService: AuthService) {
  return () => {
    if (localStorage.getItem('token')) {
      return authService.getMe().pipe(
        map(user => {
          return true;
        })
      )
    }
    return of(null);
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
      anchorScrolling: 'enabled'
    }),
    TranslateModule.forRoot(),
    ToastrModule,

    WebsocketModule.config({
      url: environment.wsUrl,
    }),

    FlexLayoutModule.withConfig({ disableDefaultBps: true }, BS_BREAKPOINTS),

    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    NgxSpinnerModule,
    // NgxCountriesModule.forRoot({
    //   defaultLocale: 'en',
    // }),
    LayoutComponent
  ],
  providers: [
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    CustomBreakPointsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
