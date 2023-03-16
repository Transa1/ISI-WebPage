import { Component, OnInit, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})


export class NavbarComponent implements OnInit{
  
  printMsg() {
    console.log('Icon Clicked');
  }
  isNavbarScrolled = false ;

  @HostListener('window:scroll', [])
  onWindowScroll = () => {
    console.log(document.documentElement.scrollTop);
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     this.isNavbarScrolled=true;
    } else {
      this.isNavbarScrolled= false;
    }

  }
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
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.currentBreakpoint = Breakpoints.XSmall;
      console.log('sm');
    }
    if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
      console.log('med');
    }
    if (
      this.breakpointObserver.isMatched(Breakpoints.Large) ||
      this.breakpointObserver.isMatched(Breakpoints.XLarge)
    ) {
      this.currentBreakpoint = Breakpoints.Large;
      console.log('large');
    }
  }
}
