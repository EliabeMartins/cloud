import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Views
import { AlertsComponent } from './views/alerts/alerts.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { ServersComponent } from './views/servers/servers.component';
import { TaskComponent } from './views/task/task.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { UsersComponent } from './views/users/users.component';

// Servers

import { ServerFormComponent } from './components/server/server-form/server-form.component';

// Clientes
import { ClientFormComponent } from './components/cliente/client-form/client-form.component';

// Users
import { UserFormComponent } from './components/usuario/user-form/user-form.component';

// Layout
import { MainComponent } from './components/layout/main/main.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';



// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ClientUpdateComponent } from './components/cliente/client-update/client-update.component';
import { ClientDeleteComponent } from './components/cliente/client-delete/client-delete.component';
import { ServerDeleteComponent } from './components/server/server-delete/server-delete.component';
import { ServerUpdateComponent } from './components/server/server-update/server-update.component';
import { UserUpdateComponent } from './components/usuario/user-update/user-update.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { UserDeleteComponent } from './components/usuario/user-delete/user-delete.component';
import { DominioFormComponent } from './components/dominio/dominio-form/dominio-form.component';
import { DominioListComponent } from './components/dominio/dominio-list/dominio-list.component';
import { DominioDeleteComponent } from './components/dominio/dominio-delete/dominio-delete.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { ServerReadComponent } from './components/server/server-read/server-read.component';
import { IpFormComponent } from './components/ips/ip-form/ip-form.component';
import { IpUpdateComponent } from './components/ips/ip-update/ip-update.component';
import { IpDelComponent } from './components/ips/ip-del/ip-del.component';
import { IpListComponent } from './components/ips/ip-list/ip-list.component';
import { ListIpsDomComponent } from './components/dominio/list-ips-dom/list-ips-dom.component';
import { NewIpDomComponent } from './components/dominio/new-ip-dom/new-ip-dom.component';
import { DelIpDomComponent } from './components/dominio/del-ip-dom/del-ip-dom.component';
import { UpdateIpDomComponent } from './components/dominio/update-ip-dom/update-ip-dom.component';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServerFormComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    ServersComponent,
    DashboardComponent,
    TaskComponent,
    AlertsComponent,
    ClientFormComponent,
    ClientesComponent,
    UsersComponent,
    UserFormComponent,
    ClientUpdateComponent,
    ClientDeleteComponent,
    ServerDeleteComponent,
    ServerUpdateComponent,
    UserUpdateComponent,
    AuthenticationComponent,
    UserDeleteComponent,
    DominioFormComponent,
    DominioListComponent,
    DominioDeleteComponent,
    ServerReadComponent,
    IpFormComponent,
    IpUpdateComponent,
    IpDelComponent,
    IpListComponent,
    ListIpsDomComponent,
    NewIpDomComponent,
    DelIpDomComponent,
    UpdateIpDomComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    // MatAutocomplete,
    // MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
