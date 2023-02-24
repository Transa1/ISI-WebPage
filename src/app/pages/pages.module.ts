import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AlumnosComponent,
    NoticiasComponent,
    MaestrosComponent,
    PrincipalComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    AlumnosComponent,
    MaestrosComponent,
    NoticiasComponent,
    PrincipalComponent,
  ],
})
export class PagesModule {}
