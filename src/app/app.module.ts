import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './Interceptor/global.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SheardModule } from './sheard/sheard.module';
import { AuthGuard } from './Guards/auth.guard';
import { UserGuard } from './Guards/user.guard';
import { AdminGuard } from './Guards/admin.guard';


@NgModule({
  declarations: [		
    AppComponent, 
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SheardModule,
    
    
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true
    }),

  ],
  providers: [AuthGuard,UserGuard,AdminGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:GlobalInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
