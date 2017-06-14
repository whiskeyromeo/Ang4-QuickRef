import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import  { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';


@Component({
	selector: 'hero-detail',
	templateUrl: 'templates/hero-detail.component.html',
	styleUrls: ['stylesheets/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

    delete(hero: Hero): void {
		this.heroService
			.delete(hero.id)
			.then(() => this.goBack());
    }

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) =>
				this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}

	save(): void {
		this.heroService.update(this.hero)
			.then(() => this.goBack());
	}
	
	goBack(): void {
		this.location.back();
	}

}