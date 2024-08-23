import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// bootstrap file
// first file, to be executed in the browser

console.log('starting angualr application');
 platformBrowserDynamic()
    .bootstrapModule(AppModule);
    