import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from 'store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/subscription';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
	selector: 'meals',
	styleUrls: ['meals.component.scss'],
	template: `
		<div>
			{{ meals$ | async | json }}
		</div>
	`
})
export class MealsComponent implements OnInit, OnDestroy {

	meals$: Observable<Meal[]>;
	subscription: Subscription;

	constructor(
		private store: Store,
		private mealsService: MealsService
	) {}

	ngOnInit() {
		console.log('ngOnInit');
		this.meals$ = this.store.select<Meal[]>('meals');
		this.subscription = this.mealsService.meals$.subscribe();
	}

	ngOnDestroy() {
		console.log('ngOnDestroy');
		this.subscription.unsubscribe();
	}
}