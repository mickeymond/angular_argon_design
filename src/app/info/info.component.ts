import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EthService } from '../eth.service';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html'
})
export class InfoComponent {
    constructor(private ethService: EthService) {}

    submitInfo(form: NgForm) {
        if(form.invalid) {
            return;
        }
        const { fullName, email, phoneNumber } = form.value;
        this.ethService.addInfo(fullName, email, phoneNumber);
    }
}
