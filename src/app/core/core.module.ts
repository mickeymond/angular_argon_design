import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        InfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AppRoutingModule
    ]
})
export class CoreModule {}
