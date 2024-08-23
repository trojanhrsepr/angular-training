import { ErrorHandlerService } from './ErrorHandlerService';
import { ProductModule } from './product/product.module';


// import { CartModule } from './cart/cart.module';

import {NgModule, ErrorHandler} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';

import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {Route, RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import {HttpClientModule} from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

const routeConfig: Route[] = [
    {
        path: '', // localhost:4200
        component: HomeComponent
    },
    {
        path: 'about', //localhost:4200/about
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports : [
        // other module dependencies
        BrowserModule,
        FormsModule,
        SharedModule,
        RouterModule.forRoot(routeConfig),
      //   CartModule,
        ProductModule,
        HttpClientModule,
        AuthModule
    ],
    declarations: [
        // components, directives, pipe
        AppComponent,
        HomeComponent,
        CounterComponent,
        ContactComponent,
        AboutComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent,
        // Header, Footer
    ],

    bootstrap: [
        // The first component/app component
        AppComponent
    ],
    providers: [
        
            {
                provide: ErrorHandler,
                useClass: ErrorHandlerService
            } 
    ]
})
export class AppModule {

}