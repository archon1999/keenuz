import { Route } from '@angular/router';
import { ContestsComponent } from "@app/modules/contests/contests.component";
import { ContestStandingsComponent } from "@app/modules/contests/pages/contest-standings/contest-standings.component";

export default [
  {
    path: 'contests',
    component: ContestsComponent,
    title: 'Contests',
  },
  {
    path: 'contests/:id',
    component: ContestStandingsComponent,
    title: 'ContestStandings',
  },
] satisfies Route[];
