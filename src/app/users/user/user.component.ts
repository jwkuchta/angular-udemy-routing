import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription

  // currently loaded route, so we can go to the user by id
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // snapshot is ok for the first render
    this.user = {
      id: this.route.snapshot.params['id'], 
      name: this.route.snapshot.params['name']
    }
    // Observable - gets executed when the user object changes
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'],
        this.user.name = params['name']
      }
    )
  }

  //  optional. Angular cleans up Observables, unless they are your own
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
  }

}
