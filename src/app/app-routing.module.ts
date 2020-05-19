import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service'
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent}
    ]},
    { 
        path: 'servers', 
        canActivateChild: [ AuthGuard ], 
        component: ServersComponent, 
        children: [
      { path: ':id', component: ServerComponent},
      { 
        path: ':id/edit',
        canDeactivate: [CanDeactivateGuard],
        component: EditServerComponent
      }
    ]},
    { path: 'not-found', component: PageNotFoundComponent},
    // this wildcard route needs to be at the bottom of our list of routes
    { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
  ]

@NgModule({
    // no need to re-declare them here cause we have already done so in the app.module.ts
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    // to add this module to the imports of another module what should be accessible to 
    // the module that imports this module. We then import it in app.module.ts
    exports: [RouterModule]

})
export class AppRoutingModule {

}