import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        height: '100%',
        backgroundColor: '#0A4D68',
        transform: 'translateX(100%)'
      })),
      transition(':enter', [
        animate('500ms ease', style({
          transform: 'translateX(0%)'
        })),
        animate('1000ms ease', style({
          height: '*'
        }))
      ])
    ])
  ]
})
export class ContactPageComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    
  }

}
