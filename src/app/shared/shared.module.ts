import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, ThumbnailComponent],
  imports: [CommonModule],
  exports: [FooterComponent, NavbarComponent, ThumbnailComponent],
})
export class SharedModule {}
