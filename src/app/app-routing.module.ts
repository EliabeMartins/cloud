// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Layout
import { MainComponent } from './components/layout/main/main.component';

//Login
import { AccountComponent } from './views/account/account.component';
import { LoginComponent } from './views/login/login.component';
// import { AuthGuard } from './views/shared/auth.guard';

//Servidor
import { ServerFormComponent } from './components/server/server-form/server-form.component';

//import 
import{ ClientFormComponent } from './components/cliente/client-form/client-form.component';

//Views
import { AlertsComponent } from './views/alerts/alerts.component';
import { TaskComponent } from './views/task/task.component';
import { ServersComponent } from './views/servers/servers.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';

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
      {  path: 'new/server', component: ServerFormComponent },
      {  path: 'server/:id', component: ServerFormComponent },
      {  path: 'new/cliente', component: ClientFormComponent },
      {  path: 'cliente/:id', component: ClientFormComponent }
    ],
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'account', component: AccountComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
