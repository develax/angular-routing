import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  // @Input()
  // set id (heroId: string){
  //   this.hero$ = this.service.getHero(heroId);
  // }
}
