import { Component } from '@angular/core';

import { FiabilidadPage } from '../fiabilidad/fiabilidad';
import { UsabilidadPage } from '../usabilidad/usabilidad';
import { FuncionalidadPage } from '../funcionalidad/funcionalidad';
import { CalidadPage } from '../calidad/calidad';
import { EvaluacionPage } from '../evaluacion/evaluacion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FuncionalidadPage;
  tab2Root = FiabilidadPage;
  tab3Root = UsabilidadPage;
  tab4Root = CalidadPage;
  tab5Root = EvaluacionPage;

  constructor() {

  }
}
