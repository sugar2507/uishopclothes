import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AdminModule } from './component/admin/admin.module';
import { UserModule } from './component/user/user.module';
import { AngularFireModule } from '@angular/fire/compat';

import { FirebaseService } from './service/firebase.service';
import { HotToastModule } from '@ngneat/hot-toast';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthComponent } from './component/auth/auth.component';
import { AuthModule } from './component/auth/auth.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AdminModule,
    UserModule,
    AuthModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
