import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CategoryService } from '../../../shared/category.service';
import { ICategory } from '../../../shared/category.model';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, OnDestroy {
    private categorySubscription: Subscription;
    private candidatesSubscription: Subscription;

    category: ICategory;
    candidates = [];
    private categoryAddress: string;

    constructor(private route: ActivatedRoute, private categoryService: CategoryService) {}

    addCandidate(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.categoryService.addCandidate(form.value.name, 'https://infura.ipfs.io/photoHash');
        form.resetForm();
    }

    castVote(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // console.log(form.value);
        this.categoryService.castVote(form.value.candidate);
        form.resetForm();
    }

    ngOnInit() {
        this.categorySubscription =  this.categoryService.getCategoryListener().subscribe(category => {
            this.category = category;
        });

        this.candidatesSubscription = this.categoryService.getCandidatesListener().subscribe(candidates => {
            this.candidates = candidates;
        });

        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            this.categoryAddress = paramMap.get('cAddress');
            // console.log(this.categoryAddress);
            this.categoryService.getCategory(this.categoryAddress);
        });
    }

    ngOnDestroy() {
        this.categorySubscription.unsubscribe();
        this.candidatesSubscription.unsubscribe();
    }
}