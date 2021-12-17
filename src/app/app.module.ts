import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ModalComponent } from './modules/shared/components/modal/modal.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { Endpoints } from './modules/core/constants/endpoints';
import { CoreModule } from './modules/core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavService } from './modules/core/services/sidenav.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterSerializer } from './reducers/router-serializer';
import { CustomersModule } from './modules/features/customers/customers.module';
import { AccountsPageComponent } from './modules/features/accounts/pages/accounts-page/accounts-page.component';
import { AccountsComponent } from './modules/features/accounts/components/accounts/accounts.component';
import { Search360Module } from './modules/features/search360/search360.module';
import { Search360OverviewModule } from './modules/features/search360-overview/search360-overview.module';
import { ObligationsModule } from './modules/features/obligations/obligations.module';
import { TodoModule } from './modules/features/todo/todo.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AccountsPageComponent,
    AccountsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CustomersModule,
    Search360Module,
    ObligationsModule,
    Search360OverviewModule,
    TodoModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    CoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    FlexLayoutModule,
    MatSidenavModule,
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
    }),
  ],
  providers: [Endpoints, SidenavService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
