import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }
  showText: boolean = false;
 

  ngOnInit(): void {
    setTimeout(() => {
      this.showText = true;
      this.router.navigate(['/home']);
    }, 4000); // délai en millisecondes
  }
}
