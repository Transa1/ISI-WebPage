import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})


export class NavbarComponent {
  
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
}