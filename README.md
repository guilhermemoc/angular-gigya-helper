Angular + TypeScript implementation for Gigya Web-SDK



# Example Usage

---
``AppModule.ts``
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularGigyaHelperModule } from 'angularGigyaHelper';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularGigyaHelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
---
``app.component.ts``
```typescript
import { Component } from '@angular/core';
import { GetAccountInfoResponse, GigyaService, LoginEvent } from 'angularGigyaHelper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  account$:  Observable<GetAccountInfoResponse | LoginEvent | undefined> = this.gigya.account$;

  constructor(private gigya: GigyaService) {
    gigya.accounts.getAccountInfo({
      callback: (accountInfo: GetAccountInfoResponse) => {
        if (!accountInfo?.profile) {
          gigya.accounts?.showScreenSet({
            screenSet: 'Default-RegistrationLogin',
            startScreen: 'gigya-login-screen'
          });
        }
      }
    })
  }
}

```
---
``app.component.html``
```angular2html
<div *ngIf="(account$ | async) as account">Hello, {{account.profile.firstName | titlecase}}!</div>
```
---
# angular Gigya Helper
