import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: 'templates/heroes.component.html',
  styleUrls: ['stylesheets/heroes.component.css']
})


export class HeroesComponent implements OnInit { 
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero : Hero;

	constructor(
    private heroService: HeroService,
    private router: Router
    ) { }

    add(name: string): void {
    	name = name.trim();
    	if(!name) { return; };
    	this.heroService.create(name)
    		.then(hero => {
    			this.heroes.push(hero);
    			this.selectedHero = null;
    		});
    }

    delete(hero: Hero): void {
    	this.heroService
    		.delete(hero.id)
    		.then(() => {
    			this.heroes = this.heroes.filter(h => h !== hero);
    			if (this.selectedHero === hero) { this.selectedHero = null; }
    		});
    }

	onSelect(hero:Hero) : void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail() {
	    this.router.navigate(['/detail', this.selectedHero.id])
	}

	ngOnInit(): void {
		this.getHeroes();
	}

}
