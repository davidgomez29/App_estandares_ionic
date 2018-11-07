import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FiabilidadPage } from '../pages/fiabilidad/fiabilidad';
import { UsabilidadPage } from '../pages/usabilidad/usabilidad';
import { FuncionalidadPage } from '../pages/funcionalidad/funcionalidad';
import { CalidadPage } from '../pages/calidad/calidad';
import { TabsPage } from '../pages/tabs/tabs';
import { EvaluacionPage } from '../pages/evaluacion/evaluacion';

@NgModule({
  declarations: [
    MyApp,
    FiabilidadPage,
    UsabilidadPage,
    FuncionalidadPage,
    CalidadPage,
    EvaluacionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FiabilidadPage,
    UsabilidadPage,
    FuncionalidadPage,
    CalidadPage,
    EvaluacionPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
