import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';
import {NgxMaskIonicModule} from 'ngx-mask-ionic';
import {BrMaskerModule} from 'br-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalculatorPageRoutingModule,
        ReactiveFormsModule,
        NgxMaskIonicModule,
        BrMaskerModule
    ],
  declarations: [CalculatorPage]
})
export class CalculatorPageModule {}
