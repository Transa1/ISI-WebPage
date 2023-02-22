import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass'],
})
export class PrincipalComponent implements OnInit {
  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive
      .observe([Breakpoints.WebLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.WebLandscape]) {
          console.log('screens matches WebLandscape');
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          console.log('screens matches HandsetPortrait');
        }
      });
  }
}
