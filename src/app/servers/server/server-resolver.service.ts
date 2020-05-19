import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number
    name: string
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private servServ: ServersService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.servServ.getServer(+route.params['id'])
    }
}