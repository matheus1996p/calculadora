import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  formDrawee: FormGroup;
  phoneNumber = '4699051483';

  isClickBag = true;
  isClickSaco = false;

  calculo: any = {tipoEmb: 'bag'};

  constructor(
      private navController: NavController,
      public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.inicializarTela();
  }

  salvar() {
    if (this.calculo.tipoEmb === 'bag'){
      this.calculo.resultado = ((parseFloat(this.formDrawee.controls.pop.value) / (parseInt(this.formDrawee.controls.germinacao.value) * 10000000)) * parseFloat(this.formDrawee.controls.ha.value)) * 5000000;
    } else {
      this.calculo.resultado = ((parseFloat(this.formDrawee.controls.pop.value) / (parseInt(this.formDrawee.controls.germinacao.value) * 10000000)) * parseFloat(this.formDrawee.controls.ha.value)) * 200000;
    }

  }

  onClick(tipoEmb){
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
