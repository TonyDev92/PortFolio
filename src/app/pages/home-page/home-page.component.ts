import { trigger , state , style , transition , animate} from '@angular/animations';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        height: '25%',
        backgroundColor: '#0A4D68',
        transform: 'translateY(100%)'
      })),
      transition(':enter', [
        animate('500ms ease', style({
          transform: 'translateY(0)'
        })),
        animate('1000ms ease', style({
          height: '*'
        }))
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
    
  }

}
