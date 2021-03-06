import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { interceptorProvider } from './interceptors/rejilla-interceptor.service';
import { ConstructosComponent } from './constructos/constructos.component';
import { PuntuarRejillaComponent } from './puntuar-rejilla/puntuar-rejilla.component';
import { ElementosComponent } from './elementos/elementos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MostrarPuntuacionesComponent } from './mostrar-puntuaciones/mostrar-puntuaciones.component';
import { MostrarRejillasComponent } from './mostrar-rejillas/mostrar-rejillas.component'
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaPacienteComponent } from './pagina-paciente/pagina-paciente.component';
import { PaginaPsicologoComponent } from './pagina-psicologo/pagina-psicologo.component';


@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      ConstructosComponent,
      PuntuarRejillaComponent,
      ElementosComponent,
      MostrarPuntuacionesComponent,
      MostrarRejillasComponent,
      PaginaLoginComponent,
      PaginaPacienteComponent,
      PaginaPsicologoComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      MatIconModule,
      MatTreeModule,
      MatButtonModule,
      BrowserAnimationsModule
   ],
   providers: [interceptorProvider],
   bootstrap: [AppComponent]
})
export class AppModule { }