import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams} from 'ionic-angular';
import { CalidadPage } from '../calidad/calidad';

@Component({
  selector: 'page-usabilidad',
  templateUrl: 'usabilidad.html'
})
export class UsabilidadPage {

                facomp1:false;
                facomp2:false;
                facomp3:false;
                facomp4:false;
                facomp5:false;

                capapre1:false;
                capapre2:false;
                capapre3:false;
                capapre4:false;
                capapre5:false;

                intgraf1:false;
                intgraf2:false;
                intgraf3:false;
                intgraf4:false;
                calivisiapli=0;

                usaop1:false;
                usaop2:false;
                usaop3:false;
                usaop4:false;
                usaop5:false;

                conest1:false;
                optiapli=0;
                estandocu=0;
                cantcali2=0;
                conest5:false;

  funade1=null;
  funade2=null;
  funade3=null;
  cantobjetivos=0;
  cantobjetivoscumplidos=0;
  tiempoespera=null;

  funpre1=null;
  funpre2=null;
  funpre3=null;
  funpre4=null;
  funpre5=null;
  funpre6=null;
  cantcali=0;

  funint1=null;
  funint2=null;
  funint3=null;
  funint4=null;
  funint5=null;
  funint6=null;
  funint7=null;

  funseg1=null;
  funseg2=null;
  funseg3=null;
  funseg4=null;
  funseg5=null;
  funseg6=null;
  funseg7=null;

          funmad1:false;
          funmad2:false;
          funmad3:false;
          funmad4:false;
          funmad5:false;

          tolfa1:false;
          tolfa2:false;
          tolfa3:false;
          tolfa4:false;
          tolfa5:false;

          fiarec1:false;
          fiarec2:false;
          fiarec3:false;
          calrecu=0;
          cantfacabr=0;

  constructor(public navCtrl: NavController,   public navParams: NavParams) {

                  this.facomp1=false;
                  this.facomp2=false;
                  this.facomp3=false;
                  this.facomp4=false;
                  this.facomp5=false;

                  this.capapre1=false;
                  this.capapre2=false;
                  this.capapre3=false;
                  this.capapre4=false;
                  this.capapre5=false;

                  this.intgraf1=false;
                  this.intgraf2=false;
                  this.intgraf3=false;
                  this.intgraf4=false;
                  this.calivisiapli = 0;

                  this.usaop1=false;
                  this.usaop2=false;
                  this.usaop3=false;
                  this.usaop4=false;
                  this.usaop5=false;

                  this.conest1=false;
                  this.estandocu=0;
                  this.optiapli=0; 
                  this.cantcali2=0;
                  this.conest5=false;

    this.funade1 = navParams.get('funade1');
    this.funade2 = navParams.get('funade2');
    this.funade3 = navParams.get('funade3');
    this.cantobjetivos = navParams.get('cantobjetivos');
    this.cantobjetivoscumplidos = navParams.get('cantobjetivoscumplidos');
    this.tiempoespera=navParams.get('tiempoespera');

    this.funpre1 = navParams.get('funpre1');
    this.funpre2 = navParams.get('funpre2');
    this.funpre3 = navParams.get('funpre3');
    this.funpre4 = navParams.get('funpre4');
    this.funpre5 = navParams.get('funpre5');
    this.funpre6 = navParams.get('funpre6');
    this.cantcali = navParams.get('cantcali');

    this.funint1 = navParams.get('funint1');
    this.funint2 = navParams.get('funint2');
    this.funint3 = navParams.get('funint3');
    this.funint4 = navParams.get('funint4');
    this.funint5 = navParams.get('funint5');
    this.funint6 = navParams.get('funint6');
    this.funint7 = navParams.get('funint7');

    this.funseg1 = navParams.get('funseg1');
    this.funseg2 = navParams.get('funseg2');
    this.funseg3 = navParams.get('funseg3');
    this.funseg4 = navParams.get('funseg4');
    this.funseg5 = navParams.get('funseg5');
    this.funseg6 = navParams.get('funseg6');
    this.funseg7 = navParams.get('funseg7');

        this.funmad1 = navParams.get('funmad1');
        this.funmad2 = navParams.get('funmad2');
        this.funmad3 = navParams.get('funmad3');
        this.funmad4 = navParams.get('funmad4');
        this.funmad5 = navParams.get('funmad5');

        this.tolfa1 = navParams.get('tolfa1');
        this.tolfa2 = navParams.get('tolfa1');
        this.tolfa3 = navParams.get('tolfa1');
        this.tolfa4 = navParams.get('tolfa1');
        this.tolfa5 = navParams.get('tolfa1');


        this.fiarec1 = navParams.get('fiarec1');
        this.fiarec2 = navParams.get('fiarec1');
        this.fiarec3 = navParams.get('fiarec1');
        this.calrecu = navParams.get('calrecu');
        this.cantfacabr = navParams.get('cantfacabr');


  }

public usabcalcular(){



    this.navCtrl.push(CalidadPage,{funade1:this.funade1, funade2:this.funade2, funade3:this.funade3, cantobjetivos:this.cantobjetivos, cantobjetivoscumplidos:this.cantobjetivoscumplidos, tiempoespera:this.tiempoespera, funpre1:this.funpre1, funpre2:this.funpre2, funpre3:this.funpre3, funpre4:this.funpre4, funpre5:this.funpre5, funpre6:this.funpre6, cantcali:this.cantcali, funint1:this.funint1, funint2:this.funint2, funint3:this.funint3, funint4:this.funint4, funint5:this.funint5, funint6:this.funint6, funint7:this.funint7, funseg1:this.funseg1, funseg2:this.funseg2, funseg3:this.funseg3, funseg4:this.funseg4, funseg5:this.funseg5, funseg6:this.funseg6, funseg7:this.funseg7, funmad1:this.funmad1, funmad2:this.funmad2, funmad3:this.funmad3, funmad4:this.funmad4, funmad5:this.funmad5, tolfa1:this.tolfa1, tolfa2:this.tolfa2, tolfa3:this.tolfa3, tolfa4:this.tolfa4, tolfa5:this.tolfa5, fiarec1:this.fiarec1, fiarec2:this.fiarec2, fiarec3:this.fiarec3, calrecu:this.calrecu, cantfacabr:this.cantfacabr, facomp1:this.facomp1, facomp2:this.facomp2, facomp3:this.facomp3, facomp4:this.facomp4, facomp5:this.facomp5, capapre1:this.capapre1, capapre2:this.capapre2, capapre3:this.capapre3, capapre4:this.capapre4, capapre5:this.capapre5, intgraf1:this.intgraf1, intgraf2:this.intgraf2, intgraf3:this.intgraf3, intgraf4:this.intgraf4, calivisiapli:this.calivisiapli, usaop1:this.usaop1, usaop2:this.usaop2, usaop3:this.usaop3, usaop4:this.usaop4, usaop5:this.usaop5, conest1:this.conest1, estandocu:this.estandocu, optiapli:this.optiapli, cantcali2:this.cantcali2, conest5:this.conest5 });
   
  }


nivelesCalidad = {
    "1": "Pesimo",
    "2": "Malo",
    "3": "Regular",
    "4": "Aceptable",
    "5": "Excelente"
  };

}
