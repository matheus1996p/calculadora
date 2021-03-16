import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})

export class CalculatorPage implements OnInit {

  formDrawee: FormGroup;
  phoneNumber = '62999274912';

  isClickBag = true;
  isClickSaco = false;

  calculo: any = {tipoEmb: 'bag'};

  constructor(
      private navController: NavController,
      public formBuilder: FormBuilder,
      private fileOpener: FileOpener
  ) { }

  ngOnInit() {
    this.inicializarTela();
  }

  salvar() {
    if (this.calculo.tipoEmb === 'bag'){
      this.calculo.resultado = ((parseFloat(this.formDrawee.controls.pop.value) / (parseInt(this.formDrawee.controls.germinacao.value) * 10000000)) * parseFloat(this.formDrawee.controls.ha.value)) * 200000;
    } else {
      this.calculo.resultado = ((parseFloat(this.formDrawee.controls.pop.value) / (parseInt(this.formDrawee.controls.germinacao.value) * 10000000)) * parseFloat(this.formDrawee.controls.ha.value)) * 5000000;
    }

  }

  onClick(tipoEmb){
    this.calculo.resultado = undefined;
    this.calculo.tipoEmb = tipoEmb;
    if(tipoEmb === 'bag'){
      this.isClickBag = true;
      this.isClickSaco = false;
    } else {
      this.isClickSaco = true;
      this.isClickBag = false;
    }
  }

  call() {
    window.open(`tel:${this.phoneNumber}`, '_system');
  }

  calculadora() {
    this.navController.navigateForward(['/home']);
  }

  whatsapp() {
    window.open('whatsapp://send?phone=5562999274912', '_system');
  }

  site() {
    window.open("http://www.sementescampea.com.br/",'_system', 'location=yes');
  }

  portfolio() {
    window.open(encodeURI('https://drive.google.com/file/d/1c-qtrESEOnQD56wEeM10Sd7B7bIf8Jax/view?usp=sharing'), '_blank', 'location=yes,EnableViewPortScale=yes');
  }

  updateValue(ev){
    console.log(ev.target.value.toString().toFixed(2));
  }

  async inicializarTela() {
    this.formDrawee = this.formBuilder.group({
      ha: new FormControl(0, Validators.compose([Validators.required])),
      pop: new FormControl('', Validators.compose([Validators.required])),
      germinacao: new FormControl('', Validators.compose([Validators.required]))
    });
  }
}
