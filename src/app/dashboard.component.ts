import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service'; 

@Component({
	//moduleId: module.id.replace("/dist/app", "/"),
	selector: 'my-dashboard',
	templateUrl: './templates/dashboard.component.html',
	styleUrls: ['stylesheets/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	
	heroes: Hero[] = [];
	constructor(private heroService: HeroService ) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1,5));
	} 
}