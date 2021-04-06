import { UserUpdateComponent } from './components/usuario/user-update/user-update.component';
import { ServerUpdateComponent } from './components/server/server-update/server-update.component';


// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Layout
import { MainComponent } from './components/layout/main/main.component';

//Login
import { LoginComponent } from './views/login/login.component';
// import { AuthService } from './views/login/auth/auth.service';

// Servidor
import { ServerFormComponent } from './components/server/server-form/server-form.component';

// Cliente
import{ ClientFormComponent } from './components/cliente/client-form/client-form.component';
import { ClientUpdateComponent } from './components/cliente/client-update/client-update.component';
import { ClientDeleteComponent } from './components/cliente/client-delete/client-delete.component';

// Usuário
import { UserFormComponent } from './components/usuario/user-form/user-form.component';

//Views
import { AlertsComponent } from './views/alerts/alerts.component';
import { TaskComponent } from './views/task/task.component';
import { ServersComponent } from './views/servers/servers.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { UsersComponent } from './views/users/users.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ServerDeleteComponent } from './components/server/server-delete/server-delete.component';


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

      
      {  path: 'new/user', component: UserFormComponent },
      {  path: 'update/user/:id', component: UserUpdateComponent},
      
      
    ],
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    // component: AuthService,
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
