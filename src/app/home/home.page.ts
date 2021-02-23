import { Component } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController,
              private navController: NavController) {}

  phoneNumber = '4699051483';

  openFirst(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  call() {
    window.open(`tel:${this.phoneNumber}`, '_system');
  }

  whatsapp() {
    window.open('whatsapp://send?phone=5546999051483', '_system');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  calculadora() {
    this.navController.navigateForward(['/calculator']);
  }

  site() {
    window.open("http://www.sementescampea.com.br/",'_system', 'location=yes');
  }

  portfolio() {

  }

}
