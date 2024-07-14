import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  // @Input()
  // set id (heroId: string){
  //   this.hero$ = this.service.getHero(heroId);
  // }
}
