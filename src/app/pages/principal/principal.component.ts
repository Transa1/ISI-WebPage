import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass'],
})
export class PrincipalComponent implements OnInit {
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Medium, Breakpoints.Large])
    .pipe(tap((value) => console.log(value)));

  constructor(public breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }
  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
      console.log('large');
    }
    if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
      console.log('med');
    }
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.currentBreakpoint = Breakpoints.XSmall;
      console.log('sm');
    }
  }
  // this.responsive
  //   .observe([Breakpoints.XSmall, Breakpoints.Medium, Breakpoints.Large])
  //   .subscribe((result) => {
  //     const breakpoints = result.breakpoints;
  //     if (breakpoints[Breakpoints.XSmall]) {
  //       this.currentBreakpoint = Breakpoints.XSmall;
  //       console.log('MAMAWBO small');
  //     } else if (breakpoints[Breakpoints.Medium]) {
  //       console.log('MAMAWBO medium');
  //     } else if (breakpoints[Breakpoints.Large]) {
  //       console.log('MAMAWBO large');
  //     }
  //   });
}
