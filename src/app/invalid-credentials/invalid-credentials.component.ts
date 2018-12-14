import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-credentials',
  templateUrl: './invalid-credentials.component.html',
  styleUrls: ['./invalid-credentials.component.css']
})
export class InvalidCredentialsComponent implements OnInit {

  interval;
  timeLeft = 1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft === 0 ) {
        console.log('redirecting to login...');
        this.router.navigateByUrl('/');
        clearInterval(this.interval);
      }
    }, 1000);
  }



}
