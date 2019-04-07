import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EthService } from 'src/app/eth.service';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
    constructor(private ethService: EthService) {}

    createEvent(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // console.log(form.value);
        const { title, description, startDate, endDate } = form.value;
        this.ethService.createEvent(title, description, this.getTime(startDate), this.getTime(endDate));
    }

    getTime(dateString: string) {
        return new Date(dateString).getTime() / 1000;
    }
}
