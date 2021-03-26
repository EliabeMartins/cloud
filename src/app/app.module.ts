import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Views
import { AccountComponent } from './views/account/account.component';
import { AlertsComponent } from './views/alerts/alerts.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { ServersComponent } from './views/servers/servers.component';
import { TaskComponent } from './views/task/task.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { UsersComponent } from './views/users/users.component';

// Servers
import { ServerListComponent } from './components/server/server-list/server-list.component';
import { ServerFormComponent } from './components/server/server-form/server-form.component';

// Clientes
import { ClientFormComponent } from './components/cliente/client-form/client-form.component';
import { ClientListComponent } from './components/cliente/client-list/client-list.component';


// Users
import { UserFormComponent } from './components/usuario/user-form/user-form.component';
import { UserListComponent } from './components/usuario/user-list/user-list.component';


// Layout
import { MainComponent } from './components/layout/main/main.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';


// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
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











@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServerListComponent,
    ServerFormComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    AuthenticationComponent,
    ServersComponent,
    DashboardComponent,
    TaskComponent,
    AlertsComponent,
    AccountComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientesComponent,
    UsersComponent,
    UserFormComponent,
    UserListComponent
 
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
