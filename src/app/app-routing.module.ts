




// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Layout
import { MainComponent } from './components/layout/main/main.component';

//Login
import { LoginComponent } from './views/login/login.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';

// Servidor
import { ServerFormComponent } from './components/server/server-form/server-form.component';
import { ServerUpdateComponent } from './components/server/server-update/server-update.component';

// Cliente
import { ClientFormComponent } from './components/cliente/client-form/client-form.component';
import { ClientUpdateComponent } from './components/cliente/client-update/client-update.component';
import { ClientDeleteComponent } from './components/cliente/client-delete/client-delete.component';

// Usuário
import { UserFormComponent } from './components/usuario/user-form/user-form.component';
import { UserUpdateComponent } from './components/usuario/user-update/user-update.component';
import { UserDeleteComponent } from './components/usuario/user-delete/user-delete.component';

//Views
import { AlertsComponent } from './views/alerts/alerts.component';
import { TaskComponent } from './views/task/task.component';
import { ServersComponent } from './views/servers/servers.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { UsersComponent } from './views/users/users.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ServerDeleteComponent } from './components/server/server-delete/server-delete.component';
import { AuthGuard } from './views/account/auth.guard';

import { DominioFormComponent } from './components/dominio/dominio-form/dominio-form.component';
import { DominioListComponent } from './components/dominio/dominio-list/dominio-list.component';
import { DominioDeleteComponent } from './components/dominio/dominio-delete/dominio-delete.component';


const routes: Routes = [
  {  
    path: '', 
    component: MainComponent,
    children: [
      {  path: '', component: DashboardComponent },
      {  path: 'servers', component: ServersComponent },
      {  path: 'clientes', component: ClientesComponent },
      {  path: 'tarefas', component: TaskComponent },
      {  path: 'alerts', component: AlertsComponent },
      {  path: 'users', component: UsersComponent },


      {  path: 'new/server', component: ServerFormComponent },
      {  path: 'update/server/:id', component: ServerUpdateComponent },
      {  path: 'delete/server/:id', component: ServerDeleteComponent },
      
      {  path: 'new/cliente', component: ClientFormComponent },
      {  path: 'update/cliente/:id', component: ClientUpdateComponent },
      {  path: 'delete/cliente/:id', component: ClientDeleteComponent },

      { path: 'dominios', component: DominioListComponent },
      { path: 'new/dominio', component: DominioFormComponent },
      { path: 'delete/dominio/:id', component: DominioDeleteComponent },
      
      {  path: 'new/user', component: UserFormComponent },
      {  path: 'update/user/:id', component: UserUpdateComponent },
      {  path: 'delete/user/:id', component: UserDeleteComponent },


      
      
    ]
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
