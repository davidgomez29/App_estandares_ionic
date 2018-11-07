import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams, Nav} from 'ionic-angular';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { FiabilidadPage } from '../fiabilidad/fiabilidad';



@Component({
  selector: 'page-funcionalidad',
  templateUrl: 'funcionalidad.html'
})
export class FuncionalidadPage {




  funade1:false;
  funade2:false;
  funade3:false;
  cantobjetivos=0;
  cantobjetivoscumplidos=0;
  tiempoespera=0;

    funpre1:false;
    funpre2:false;
    funpre3:false;
    funpre4:false;
    funpre5:false;
    funpre6:false;
    cantcali=0;

    funint1:false;
    funint2:false;
    funint3:false;
    funint4:false;
    funint5:false;
    funint6:false;
    funint7:false;

    funseg1:false;
    funseg2:false;
    funseg3:false;
    funseg4:false;
    funseg5:false;
    funseg6:false;
    funseg7:false;

  constructor(public navCtrl: NavController) {
    
    this.funade1=false;
    this.funade2=false;
    this.funade3=false;
    this.cantobjetivos=0;
    this.cantobjetivoscumplidos=0;
    this.tiempoespera=0;

    this.funpre1 = false;
    this.funpre2 = false;
    this.funpre3 = false;
    this.funpre4 = false;
    this.funpre5 = false;
    this.funpre6 = false;
    this.cantcali=0;

    this.funint1 = false;
    this.funint2 = false;
    this.funint3 = false;
    this.funint4 = false;
    this.funint5 = false;
    this.funint6 = false;
    this.funint7 = false;

    this.funseg1 = false;
    this.funseg2 = false;
    this.funseg3 = false;
    this.funseg4 = false;
    this.funseg5 = false;
    this.funseg6 = false;
    this.funseg7 = false;
  }

  nivelesCalidad = {
    "0": "Pesimo",
    "1": "Malo",
    "2": "Regular",
    "3": "Aceptable",
    "4": "Excelente" 
  };

  public funcalcular(){

    

    this.navCtrl.push(FiabilidadPage,{funade1:this.funade1, funade2:this.funade2, funade3:this.funade3, cantobjetivos:this.cantobjetivos, cantobjetivoscumplidos:this.cantobjetivoscumplidos, tiempoespera:this.tiempoespera, funpre1:this.funpre1, funpre2:this.funpre2, funpre3:this.funpre3, funpre4:this.funpre4, funpre5:this.funpre5, funpre6:this.funpre6, cantcali:this.cantcali, funint1:this.funint1, funint2:this.funint2, funint3:this.funint3, funint4:this.funint4, funint5:this.funint5, funint6:this.funint6, funint7:this.funint7, funseg1:this.funseg1, funseg2:this.funseg2, funseg3:this.funseg3, funseg4:this.funseg4, funseg5:this.funseg5, funseg6:this.funseg6, funseg7:this.funseg7});

    
  }

}
