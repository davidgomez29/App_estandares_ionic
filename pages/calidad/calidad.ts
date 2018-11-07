import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams} from 'ionic-angular';
import { EvaluacionPage } from '../evaluacion/evaluacion';

@Component({
  selector: 'page-calidad',
  templateUrl: 'calidad.html'
})
export class CalidadPage {

              efic1:false;
              efic2:false;
              efic3:false;
              efic4:false;
              efic5:false;

              frecumant=0;
              mant2:false;
              mant3:false;
              ajustfu=0;
              mant5:false;
              calidi=0;

              porta1:false;
              plat=0;
              porta3:false;
              considerac=0;
              porta5:false;

                facomp1=null;
                facomp2=null;
                facomp3=null;
                facomp4=null;
                facomp5=null;

                capapre1=null;
                capapre2=null;
                capapre3=null;
                capapre4=null;
                capapre5=null;

                intgraf1=null;
                intgraf2=null;
                intgraf3=null;
                intgraf4=null;
                calivisiapli=0;

                usaop1=null;
                usaop2=null;
                usaop3=null;
                usaop4=null;
                usaop5=null;

                conest1=null;
                estandocu=0;
                optiapli=0;
                cantcali2=0;
                conest5=null;

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

          funmad1=null;
          funmad2=null;
          funmad3=null;
          funmad4=null;
          funmad5=null;

          tolfa1=null;
          tolfa2=null;
          tolfa3=null;
          tolfa4=null;
          tolfa5=null;

          fiarec1=null;
          fiarec2=null;
          fiarec3=null;
          calrecu=0;
          cantfacabr=0;


  constructor(public navCtrl: NavController,   public navParams: NavParams) {

                  this.efic1=false;
                  this.efic2=false;
                  this.efic3=false;
                  this.efic4=false;
                  this.efic5=false;

                  this.frecumant=0;
                  this.mant2=false;
                  this.mant3=false;
                  this.ajustfu=0;
                  this.mant5=false;
                  this.calidi=0;

                  this.porta1=false;
                  this.plat=0;
                  this.porta3=false;
                  this.considerac=0;
                  this.porta5=false;


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
        this.tolfa2 = navParams.get('tolfa2');
        this.tolfa3 = navParams.get('tolfa3');
        this.tolfa4 = navParams.get('tolfa4');
        this.tolfa5 = navParams.get('tolfa5');


        this.fiarec1 = navParams.get('fiarec1');
        this.fiarec2 = navParams.get('fiarec2');
        this.fiarec3 = navParams.get('fiarec3');
        this.calrecu = navParams.get('calrecu');
        this.cantfacabr = navParams.get('cantfacabr');

            this.facomp1 = navParams.get('facomp1');
            this.facomp2 = navParams.get('facomp2');
            this.facomp3 = navParams.get('facomp3');
            this.facomp4 = navParams.get('facomp4');
            this.facomp5 = navParams.get('facomp5');

            this.capapre1 = navParams.get('capapre1');
            this.capapre2 = navParams.get('capapre2');
            this.capapre3 = navParams.get('capapre3');
            this.capapre4 = navParams.get('capapre4');
            this.capapre5 = navParams.get('capapre5');

            this.intgraf1 = navParams.get('intgraf1');
            this.intgraf2 = navParams.get('intgraf2');
            this.intgraf3 = navParams.get('intgraf3');
            this.intgraf4 = navParams.get('intgraf4');
            this.calivisiapli = navParams.get('calivisiapli');

            this.usaop1 = navParams.get('usaop1');
            this.usaop2 = navParams.get('usaop2');
            this.usaop3 = navParams.get('usaop3');
            this.usaop4 = navParams.get('usaop4');
            this.usaop5 = navParams.get('usaop5');
            
            this.conest1 = navParams.get('conest1');
            this.estandocu = navParams.get('estandocu');
            this.optiapli = navParams.get('optiapli'); 
            this.cantcali2 = navParams.get('cantcali2') ;
            this.conest5 = navParams.get('conest5');





  }

  public calicalcular(){



    this.navCtrl.push(EvaluacionPage,{funade1:this.funade1, funade2:this.funade2, funade3:this.funade3, cantobjetivos:this.cantobjetivos, cantobjetivoscumplidos:this.cantobjetivoscumplidos, tiempoespera:this.tiempoespera, funpre1:this.funpre1, funpre2:this.funpre2, funpre3:this.funpre3, funpre4:this.funpre4, funpre5:this.funpre5, funpre6:this.funpre6, cantcali:this.cantcali, funint1:this.funint1, funint2:this.funint2, funint3:this.funint3, funint4:this.funint4, funint5:this.funint5, funint6:this.funint6, funint7:this.funint7, funseg1:this.funseg1, funseg2:this.funseg2, funseg3:this.funseg3, funseg4:this.funseg4, funseg5:this.funseg5, funseg6:this.funseg6, funseg7:this.funseg7, funmad1:this.funmad1, funmad2:this.funmad2, funmad3:this.funmad3, funmad4:this.funmad4, funmad5:this.funmad5, tolfa1:this.tolfa1, tolfa2:this.tolfa2, tolfa3:this.tolfa3, tolfa4:this.tolfa4, tolfa5:this.tolfa5, fiarec1:this.fiarec1, fiarec2:this.fiarec2, fiarec3:this.fiarec3, calrecu:this.calrecu, cantfacabr:this.cantfacabr, facomp1:this.facomp1, facomp2:this.facomp2, facomp3:this.facomp3, facomp4:this.facomp4, facomp5:this.facomp5, capapre1:this.capapre1, capapre2:this.capapre2, capapre3:this.capapre3, capapre4:this.capapre4, capapre5:this.capapre5, intgraf1:this.intgraf1, intgraf2:this.intgraf2, intgraf3:this.intgraf3, intgraf4:this.intgraf4, calivisiapli:this.calivisiapli, usaop1:this.usaop1, usaop2:this.usaop2, usaop3:this.usaop3, usaop4:this.usaop4, usaop5:this.usaop5, conest1:this.conest1, estandocu:this.estandocu, optiapli:this.optiapli, cantcali2:this.cantcali2, conest5:this.conest5, efic1:this.efic1, efic2:this.efic2, efic3:this.efic3, efic4:this.efic4, efic5:this.efic5, frecumant:this.frecumant, mant2:this.mant2, mant3:this.mant3, ajustfu:this.ajustfu, mant5:this.mant5, calidi:this.calidi, porta1:this.porta1, plat:this.plat, porta3:this.porta3, considerac:this.considerac, porta5:this.porta5 });
   
  }

  public changuacodesmell(){
    for(){
    }
  }
  




nivelesCalidad = {
    "1": "Pesimo",
    "2": "Malo",
    "3": "Regular",
    "4": "Aceptable",
    "5": "Excelente"
  };
}
