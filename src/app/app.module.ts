import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [AppComponent, TimelineComponent],
  imports: [BrowserModule, PagesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
