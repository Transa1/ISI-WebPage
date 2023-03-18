import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit{
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(
      tap((value) => console.log(value)),
      distinctUntilChanged()
    );

  constructor(public breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }
  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall) ||
        this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)
    ) {
      this.currentBreakpoint = Breakpoints.XSmall;
    }
    if (this.breakpointObserver.isMatched(Breakpoints.Small) ||
        this.breakpointObserver.isMatched(Breakpoints.TabletPortrait) ||
        this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)
    ) {
      this.currentBreakpoint = Breakpoints.Small;
    }
    if (this.breakpointObserver.isMatched(Breakpoints.Medium) ||
    this.breakpointObserver.isMatched(Breakpoints.TabletLandscape)
    ) {
      this.currentBreakpoint = Breakpoints.Medium;
    }
    if (
      this.breakpointObserver.isMatched(Breakpoints.Large) ||
      this.breakpointObserver.isMatched(Breakpoints.XLarge)
    ) {
      this.currentBreakpoint = Breakpoints.Large;
    }
  }
}
