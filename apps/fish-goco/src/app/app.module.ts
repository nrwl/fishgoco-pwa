import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { NavModule } from '@fishgoco-pwa/nav';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CartStateModule } from '@fishgoco-pwa/cart-state';

const routes: Route[] = [
  { path: '', loadChildren: '@fishgoco-pwa/feed/src/feed.module.ts#FeedModule' },
  { path: 'order', loadChildren: '@fishgoco-pwa/order/src/order.module.ts#OrderModule' },
  { path: 'stores', loadChildren: '@fishgoco-pwa/stores/src/stores.module.ts#StoresModule' },
  { path: 'cart', loadChildren: '@fishgoco-pwa/cart/src/cart.module.ts#CartModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NavModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CartStateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
