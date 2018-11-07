import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicPage, NavParams} from 'ionic-angular';
import {  } from '../../../Repositorios/Variables.json';

@IonicPage()
@Component({
  selector: 'page-evaluacion',
  templateUrl: 'evaluacion.html'
})
export class EvaluacionPage {

  finalfun=null;
  finalpre=null;
  finalint=null;
  finalseg=null;

  finalmad=null;
  finaltolfa=null;
  finalrecu=null;

  finalfacomp=null;
  finalcapapre=null;
  finalintgraf=null;
  finalopera=null;
  finalconfest=null;

  finalefic=null;
  finalmantenibi=null;
  finalportabi=null;




              efic1=null;
              efic2=null;
              efic3=null;
              efic4=null;
              efic5=null;

              frecumant=0;
              mant2=null;
              mant3=null;
              ajustfu=0;
              mant5=null;
              calidi=0;

              porta1=null;
              plat=0;
              porta3=null;
              considerac=0;
              porta5=null;

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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

            this.efic1 = navParams.get('efic1');
            this.efic2 = navParams.get('efic2');
            this.efic3 = navParams.get('efic3');
            this.efic4 = navParams.get('efic4');
            this.efic5 = navParams.get('efic5');

            this.frecumant = navParams.get('frecumant');
            this.mant2=navParams.get('mant2');
            this.mant3=navParams.get('mant3');
            this.ajustfu=navParams.get('ajustfu');
            this.mant5=navParams.get('mant5');
            this.calidi=navParams.get('calidi');                             
         
            this.porta1 = navParams.get('porta1');
            this.plat = navParams.get('plat');
            this.porta3 = navParams.get('porta3');
            this.considerac = navParams.get('considerac');
            this.porta5 = navParams.get('porta5');          
            


       
  }

  calcularfun(){
    
    this.cantobjetivoscumplidos >= this.cantobjetivos/2 && this.cantobjetivos != 0 ? this.cantobjetivos = 1 : this.cantobjetivos = 0;

   

     let resultado = 0;
     resultado = this.funade1 ? resultado+1 : 0;
     resultado = this.funade2 ? resultado+1 : resultado;
     resultado = this.funade3 ? resultado+1 : resultado;
     resultado = this.cantobjetivos ? resultado+1 : resultado;
     resultado = this.tiempoespera ? resultado+this.tiempoespera : resultado;
     this.finalfun = resultado;


this.cantcali = this.cantcali == 1 ? 0 : this.cantcali;
    this.cantcali = this.cantcali == 2 ? 0 : this.cantcali;
    this.cantcali = this.cantcali == 3 ? 1 : this.cantcali;
    this.cantcali = this.cantcali == 4 ? 1 : this.cantcali;
    this.cantcali = this.cantcali == 5 ? 2 : this.cantcali;
    this.cantcali = this.cantcali == 6 ? 2 : this.cantcali;
    this.cantcali = this.cantcali == 7 ? 3 : this.cantcali;
    this.cantcali = this.cantcali == 8 ? 4 : this.cantcali;
    this.cantcali = this.cantcali == 9 ? 4 : this.cantcali;
    this.cantcali = this.cantcali == 10 ? 5 : this.cantcali;


     let resultado2 = 0;
     resultado2 = this.funpre1 ? resultado2+1 : 0;
     resultado2 = this.funpre2 ? resultado2+1 : resultado2;
     resultado2 = this.funpre3 ? resultado2+1 : resultado2;
     resultado2 = this.funpre4 ? resultado2+1 : resultado2;
     resultado2 = this.funpre5 ? resultado2+1 : resultado2;
     resultado2 = this.funpre6 ? resultado2+1 : resultado2;
     resultado2 = this.cantcali ? resultado2+this.cantcali : resultado2;
     this.finalpre = resultado2;

      let resultado3 = 0;
     resultado3 = this.funint1 ? resultado3+1 : 0;
     resultado3 = this.funint2 ? resultado3+1 : resultado3;
     resultado3 = this.funint3 ? resultado3+1 : resultado3;
     resultado3 = this.funint4 ? resultado3+1 : resultado3;
     resultado3 = this.funint5 ? resultado3+1 : resultado3;
     resultado3 = this.funint6 ? resultado3+1 : resultado3;
     resultado3 = this.funint7 ? resultado3+1 : resultado3;
     this.finalint = resultado3;

      let resultado4 = 0;
     resultado4 = this.funseg1 ? resultado4+1 : 0;
     resultado4 = this.funseg2 ? resultado4+1 : resultado4;
     resultado4 = this.funseg3 ? resultado4+1 : resultado4;
     resultado4 = this.funseg4 ? resultado4+1 : resultado4;
     resultado4 = this.funseg5 ? resultado4+1 : resultado4;
     resultado4 = this.funseg6 ? resultado4+1 : resultado4;
     resultado4 = this.funseg7 ? resultado4+1 : resultado4;
     this.finalseg = resultado4;

//fiabilidad

     let resultado5 = 0;
     resultado5 = this.funmad1 ? resultado5+1 : 0;
     resultado5 = this.funmad2 ? resultado5+1 : resultado5;
     resultado5 = this.funmad3 ? resultado5+1 : resultado5;
     resultado5 = this.funmad4 ? resultado5+1 : resultado5;
     resultado5 = this.funmad5 ? resultado5+1 : resultado5;
     this.finalmad = resultado5;

     let resultado6 = 0;
     resultado6 = this.tolfa1 ? resultado6+1 : 0;
     resultado6 = this.tolfa2 ? resultado6+1 : resultado6;
     resultado6 = this.tolfa3 ? resultado6+1 : resultado6;
     resultado6 = this.tolfa4 ? resultado6+1 : resultado6;
     resultado6 = this.tolfa5 ? resultado6+1 : resultado6;
     this.finaltolfa = resultado6;


    this.cantfacabr = this.cantfacabr == 1 ? 0 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 2 ? 0 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 3 ? 1 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 4 ? 1 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 5 ? 2 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 6 ? 2 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 7 ? 3 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 8 ? 4 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 9 ? 5 : this.cantfacabr;
    this.cantfacabr = this.cantfacabr == 10 ? 5 : this.cantfacabr;

    


     let resultado7= 0;
     resultado7 = this.fiarec1 ? resultado7+1 : 0;
     resultado7 = this.fiarec2 ? resultado7+1 : resultado7;
     resultado7 = this.fiarec3 ? resultado7+1 : resultado7;
     resultado7 = this.calrecu ? resultado7+this.calrecu : resultado7;
     resultado7 = this.cantfacabr ? resultado7+this.cantfacabr : resultado7;
     this.finalrecu = resultado7;

//Usabilidad

    let resultado8 = 0;
    resultado8 = this.facomp1 ? resultado8+1 : 0;
    resultado8 = this.facomp2 ? resultado8+1 : resultado8;
    resultado8 = this.facomp3 ? resultado8+1 : resultado8;
    resultado8 = this.facomp4 ? resultado8+1 : resultado8;
    resultado8 = this.facomp5 ? resultado8+1 : resultado8;
    this.finalfacomp = resultado8;

    let resultado9 = 0;
    resultado9 = this.capapre1 ? resultado9+1 : 0;
    resultado9 = this.capapre2 ? resultado9+1 : resultado9;
    resultado9 = this.capapre3 ? resultado9+1 : resultado9;
    resultado9 = this.capapre4 ? resultado9+1 : resultado9;
    resultado9 = this.capapre5 ? resultado9+1 : resultado9;
    this.finalcapapre = resultado9;

    this.calivisiapli = this.calivisiapli == 1 ? 0 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 2 ? 0 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 3 ? 1 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 4 ? 1 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 5 ? 2 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 6 ? 2 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 7 ? 3 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 8 ? 4 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 9 ? 4 : this.calivisiapli;
    this.calivisiapli = this.calivisiapli == 10 ? 5 : this.calivisiapli;

    let resultado10 = 0;
    resultado10 = this.intgraf1 ? resultado10+1 : 0;
    resultado10 = this.intgraf2 ? resultado10+1 : resultado10;
    resultado10 = this.intgraf3 ? resultado10+1 : resultado10;
    resultado10 = this.intgraf4 ? resultado10+1 : resultado10;
    resultado10 = this.calivisiapli ? resultado10+this.calivisiapli : resultado10;
    this.finalintgraf = resultado10;

    let resultado11 = 0;
    resultado11 = this.usaop1 ? resultado11+1 : 0;
    resultado11 = this.usaop2 ? resultado11+1 : resultado11;
    resultado11 = this.usaop3 ? resultado11+1 : resultado11;
    resultado11 = this.usaop4 ? resultado11+1 : resultado11;
    resultado11 = this.usaop5 ? resultado11+1 : resultado11;
    this.finalopera = resultado11;

    this.cantcali2 = this.cantcali2 == 1 ? 0 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 2 ? 0 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 3 ? 1 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 4 ? 1 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 5 ? 2 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 6 ? 2 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 7 ? 3 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 8 ? 4 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 9 ? 4 : this.cantcali2;
    this.cantcali2 = this.cantcali2 == 10 ? 5 : this.cantcali2;

    

    let resultado12 = 0;
    resultado12 = this.conest1 ? resultado12+1 : 0;
    resultado12 = this.optiapli ? resultado12+this.optiapli : resultado12;
    resultado12 = this.estandocu ? resultado12+this.estandocu : resultado12;
    resultado12 = this.cantcali2 ? resultado12+this.cantcali2 : resultado12;
    resultado12 = this.conest5 ? resultado12+1 : resultado12;
    this.finalconfest = resultado12;

    let resultado13 = 0;
    resultado13 = this.efic1 ? resultado13+1 : 0;
    resultado13 = this.efic2 ? resultado13+1 : resultado13;
    resultado13 = this.efic3 ? resultado13+1 : resultado13;
    resultado13 = this.efic4 ? resultado13+1 : resultado13;
    resultado13 = this.efic5 ? resultado13+1 : resultado13;
    this.finalefic = resultado13;

    this.frecumant = this.frecumant == 1 ? 0 : this.frecumant;
    this.frecumant = this.frecumant == 2 ? 0 : this.frecumant;
    this.frecumant = this.frecumant == 3 ? 1 : this.frecumant;
    this.frecumant = this.frecumant == 4 ? 1 : this.frecumant;
    this.frecumant = this.frecumant == 5 ? 2 : this.frecumant;
    this.frecumant = this.frecumant == 6 ? 2 : this.frecumant;
    this.frecumant = this.frecumant == 7 ? 3 : this.frecumant;
    this.frecumant = this.frecumant == 8 ? 4 : this.frecumant;
    this.frecumant = this.frecumant == 9 ? 5 : this.frecumant;
    this.frecumant = this.frecumant == 10 ? 5 : this.frecumant;


    let resultado14 = 0;
    resultado14 = this.frecumant ? resultado14+this.frecumant : 0;
    resultado14 = this.mant2 ? resultado14+1 : resultado14;
    resultado14 = this.mant3 ? resultado14+1 : resultado14;
    resultado14 = this.ajustfu ? resultado14+this.ajustfu : resultado14;
    resultado14 = this.mant5 ? resultado14+1 : resultado14;
    resultado14 = this.calidi ? resultado14+this.calidi : resultado14;
    this.finalmantenibi = resultado14;

    this.plat = this.plat == 1 ? 0 : this.plat;
    this.plat = this.plat == 2 ? 0 : this.plat;
    this.plat = this.plat == 3 ? 1 : this.plat;
    this.plat = this.plat == 4 ? 1 : this.plat;
    this.plat = this.plat == 5 ? 2 : this.plat;
    this.plat = this.plat == 6 ? 2 : this.plat;
    this.plat = this.plat == 7 ? 3 : this.plat;
    this.plat = this.plat == 8 ? 4 : this.plat;
    this.plat = this.plat == 9 ? 5 : this.plat;
    this.plat = this.plat == 10 ? 5 : this.plat;

    this.considerac = this.considerac == 1 ? 0 : this.considerac;
    this.considerac = this.considerac == 2 ? 0 : this.considerac;
    this.considerac = this.considerac == 3 ? 1 : this.considerac;
    this.considerac = this.considerac == 4 ? 1 : this.considerac;
    this.considerac = this.considerac == 5 ? 2 : this.considerac;
    this.considerac = this.considerac == 6 ? 2 : this.considerac;
    this.considerac = this.considerac == 7 ? 3 : this.considerac;
    this.considerac = this.considerac == 8 ? 4 : this.considerac;
    this.considerac = this.considerac == 9 ? 5 : this.considerac;
    this.considerac = this.considerac == 10 ? 5 : this.considerac;
    

    let resultado15 = 0;
    resultado15 = this.porta1 ? resultado15+1 : 0;
    resultado15 = this.plat ? resultado15+this.plat : resultado15;
    resultado15 = this.porta3 ? resultado15+1 : resultado15;
    resultado15 = this.considerac ? resultado15+this.considerac : resultado15;
    resultado15 = this.porta5 ? resultado15+1 : resultado15;
    this.finalportabi = resultado15;




    



  }

   
 //ver https://www.youtube.com/watch?v=p8LcqjCeZO4
}