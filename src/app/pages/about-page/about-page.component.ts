import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        height: '85vh',
        backgroundColor: 'black',
        transform: 'translate(-50%, -50%) perspective(800px) rotateX(90deg) rotateY(45deg) scale3d(0, 0, 1)',
        transformOrigin: 'center center'
      })),
      transition(':enter', [
        animate('1000ms ease', style({
          transform: 'translate(0%, 0%) perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformOrigin: 'center center'
        })),
        animate('1000ms ease', style({
          height: '*'
        }))
      ])
    ])
  ]
})
export class AboutPageComponent {

}
