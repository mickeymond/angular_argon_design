import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CategoryService } from './category.service';
import { ICategory } from './category.model';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html'
})
export class CategoryDetailComponent implements OnInit, OnDestroy {
    private categorySubscription: Subscription;

    category: ICategory;
    private categoryAddress: string;

    constructor(private route: ActivatedRoute, private categoryService: CategoryService) {}

    addCandidate(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.categoryService.addCandidate(form.value.name, 'https://infura.ipfs.io/photoHash');
    }

    castVote(form: NgForm) {
        if (form.invalid) {
            return;
        }
        console.log(form.value);
    }

    ngOnInit() {
        this.categorySubscription =  this.categoryService.getCategoryListener().subscribe(category => {
            this.category = category;
        });

        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            this.categoryAddress = paramMap.get('cAddress');
            // console.log(this.categoryAddress);
            this.categoryService.getCategory(this.categoryAddress);
        });
    }

    ngOnDestroy() {}
}
