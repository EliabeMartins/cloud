import { NewIpDomComponent } from './components/dominio/new-ip-dom/new-ip-dom.component';

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

import { IpListComponent } from './components/ips/ip-list/ip-list.component';
import { IpFormComponent } from './components/ips/ip-form/ip-form.component';
import { IpDelComponent } from './components/ips/ip-del/ip-del.component';
import { IpUpdateComponent } from './components/ips/ip-update/ip-update.component';

import { ListIpsDomComponent } from './components/dominio/list-ips-dom/list-ips-dom.component';
import { DelIpDomComponent } from './components/dominio/del-ip-dom/del-ip-dom.component';
import { UpdateIpDomComponent } from './components/dominio/update-ip-dom/update-ip-dom.component';



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
      
      {  path: 'ips/server/:idd', component: IpListComponent },
      {  path: 'ips/adc/:id', component: IpFormComponent},
      {  path: ':idd/update/ip/:id', component: IpUpdateComponent},
      {  path: ':idd/del/:id', component: IpDelComponent},

      {  path: ':id/:idd/ips', component: ListIpsDomComponent}, //lista os ips validos do dominio
      {  path: ':id/:idd/new/ip', component: NewIpDomComponent}, //adiciona ips validos ao dominio selecionado
      {  path: ':id/:idd/update/:iddd', component: UpdateIpDomComponent}, //ATUALIZAR IP PO ID DE DOMINIO
      {  path: ':id/:idd/del/:iddd', component: DelIpDomComponent}, //DELETA IP DE DOMINIO POR ID

      { path: ':idd/dominios', component: DominioListComponent },
      { path: ':id/new/dominio', component: DominioFormComponent },
      { path: ':idd/delete/dominio/:id', component: DominioDeleteComponent }, 
      
      {  path: 'new/cliente', component: ClientFormComponent },
      {  path: 'update/cliente/:id', component: ClientUpdateComponent },
      {  path: 'delete/cliente/:id', component: ClientDeleteComponent },
      
      {  path: 'new/user', component: UserFormComponent },
      {  path: 'update/user/:id', component: UserUpdateComponent },
      {  path: 'delete/user/:id', component: UserDeleteComponent },


      
      
    ],
    canActivate: [AuthGuard]
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
