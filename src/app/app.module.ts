import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponentComponent } from './error-page-component/error-page-component.component';
import { ServerResolver } from './servers/server/server-resolver.service';

// MOVED TO APP-ROUTING.MODULE.TS

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent},
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UserComponent}
//   ]},
//   { path: 'servers', component: ServersComponent, children: [
//     { path: ':id', component: ServerComponent},
//     { path: ':id/edit', component: EditServerComponent}
//   ]},
//   { path: 'not-found', component: PageNotFoundComponent},
//   // this wildcard route needs to be at the bottom of our list of routes
//   { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // removed when routes moved to a separate module
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [ServersService, AuthGuard, AuthService, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
