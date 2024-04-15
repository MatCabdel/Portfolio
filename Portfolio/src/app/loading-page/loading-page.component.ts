import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('4s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class LoadingPageComponent implements OnInit {
  constructor() { }
  showText: boolean = false;
 

  ngOnInit(): void {
    setTimeout(() => {
      this.showText = true;
    }, 4000); // délai en millisecondes
  }
}
