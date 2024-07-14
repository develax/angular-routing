import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {

  heroId: string | null;

  constructor(private _route: ActivatedRoute){
    this.heroId = _route.snapshot.paramMap.get('id');
  }
}
