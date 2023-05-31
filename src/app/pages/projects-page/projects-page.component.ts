import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        height: '25%',
        backgroundColor: '#0A4D68',
        transform: 'translateX(-100%)'
      })),
      transition(':enter', [
        animate('1000ms ease', style({
          transform: 'translateY(0)'
        })),
        animate('1000ms ease', style({
          height: '*'
        }))
      ])
    ])
  ]
})
export class ProjectsPageComponent implements OnInit{
  showModal : boolean = false;
  imgUrl!: string;
  openModal(imageData : string){
    this.showModal = true;
    this.imgUrl = imageData;
  }
  closeModal(){
    this.showModal = false;
    this.imgUrl = '';
  }
  constructor() { }

  ngOnInit(): void {
    
  }
}
