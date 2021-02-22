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
    window.open('whatsapp://send?phone=554688266644', '_system');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  calculadora() {
    this.navController.navigateForward(['/calculator']);
  }

  site() {

  }

  portfolio() {

  }

}
