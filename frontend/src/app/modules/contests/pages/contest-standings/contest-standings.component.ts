import { Component, ViewEncapsulation } from '@angular/core';
import { Contest } from "@app/modules/contests/interfaces/contest";
import { BaseLoadComponent } from "@app/common/classes/base-load.component";
import { Observable, of } from "rxjs";
import { ContentHeaderModule } from "@layout/components/content-header/content-header.module";
import { KeenIconComponent } from "@shared/keen-icon/keen-icon.component";
import { KeenTableComponent } from "@shared/keen-table/keen-table.component";
import { CoreCommonModule } from "@core/common.module";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { ContestProblemInfo } from "@app/modules/contests/models/contest-problem-info";

@Component({
  selector: 'app-contest-standings',
  templateUrl: './contest-standings.component.html',
  styleUrls: ['./contest-standings.component.scss'],
  animations: [],
  standalone: true,
  imports: [
    ContentHeaderModule,
    KeenIconComponent,
    KeenTableComponent,
    CoreCommonModule,
    NgbTooltipModule
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ContestStandingsComponent extends BaseLoadComponent<any[]> {

  public contest: Contest;
  public contestProblems = [
    {
      "problem": {
        "id": 1,
        "title": "A+B",
      },
      "attemptsCount": 51,
      "solved": 22,
      "attemptUsersCount": 23,
      "symbol": "A",
    },
    {
      "problem": {
        "id": 2,
        "title": "HTML #1",
      },
      "attemptsCount": 51,
      "solved": 22,
      "attemptUsersCount": 23,
      "symbol": "B",
    },
    {
      "problem": {
        "id": 3,
        "title": "Django ORM",
      },
      "attemptsCount": 51,
      "solved": 22,
      "attemptUsersCount": 23,
      "symbol": "C",
    },
    {
      "problem": {
        "id": 4,
        "title": "Qism massivlar",
      },
      "attemptsCount": 51,
      "solved": 22,
      "attemptUsersCount": 23,
      "symbol": "D",
    },
  ];

  get contestants(): any[] {
    return this.data || [];
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.api.get(`contests/${params.id}`).subscribe(
          (contest) => {
            this.contest = contest;
          }
        )
      }
    )
    super.ngOnInit();
  }

  getData(): Observable<any[]> {
    return of([
      {
        "rank": 1,
        "username": "Nazarbek Baltabaev",
        "team": null,
        "type": 1,
        "rating": 1565,
        "ratingTitle": "Liktor",
        "newRating": 1723,
        "newRatingTitle": "Legat",
        "perfomance": 3499,
        "perfomanceTitle": "Ridwan",
        "points": 4,
        "penalties": 66,
        "delta": 158,
        "seed": 11.241448909412064,
        "isVirtual": false,
        "isUnrated": false,
        "isOfficial": null,
        "virtualTime": null,
        "doubleRatingPurchased": false,
        "saveRatingPurchased": false,
        "problemsInfo": [
          {
            "problemSymbol": "B",
            "points": 1,
            "penalties": 21,
            "attemptsCount": 1,
            "firstAcceptedTime": "2024-09-08T20:01:54.606087+05:00",
            "theBest": true,
            "contestTime": "00:05"
          },
          {
            "problemSymbol": "C",
            "points": 1,
            "penalties": 3,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:03:02.400441+05:00",
            "theBest": false,
            "contestTime": "00:15"
          },
          {
            "problemSymbol": "D",
            "points": 1,
            "penalties": 4,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:04:15.369445+05:00",
            "theBest": false,
            "contestTime": "00:24"
          },
          {
            "problemSymbol": "A",
            "points": 1,
            "penalties": 0,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:00:44.254997+05:00",
            "theBest": true,
            "contestTime": "00:02"
          }
        ]
      },
      {
        "rank": 2,
        "username": "Murodjon Davronov",
        "team": null,
        "type": 1,
        "rating": 1200,
        "ratingTitle": "Ritor",
        "newRating": 1423,
        "newRatingTitle": "Liktor",
        "perfomance": 2103,
        "perfomanceTitle": "Magistr",
        "points": 4,
        "penalties": 80,
        "delta": 223,
        "seed": 30.807890137767576,
        "isVirtual": false,
        "isUnrated": false,
        "isOfficial": null,
        "virtualTime": null,
        "doubleRatingPurchased": false,
        "saveRatingPurchased": false,
        "problemsInfo": [
          {
            "problemSymbol": "A",
            "points": 1,
            "penalties": 21,
            "attemptsCount": 1,
            "firstAcceptedTime": "2024-09-08T20:01:27.149597+05:00",
            "theBest": false,
            "contestTime": "00:06"
          },
          {
            "problemSymbol": "B",
            "points": 1,
            "penalties": 1,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:01:56.959424+05:00",
            "theBest": false,
            "contestTime": "00:10"
          },
          {
            "problemSymbol": "C",
            "points": 1,
            "penalties": 4,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:04:11.581469+05:00",
            "theBest": false,
            "contestTime": "00:14"
          },
          {
            "problemSymbol": "D",
            "points": 1,
            "penalties": 6,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:06:37.998627+05:00",
            "theBest": true,
            "contestTime": "00:30"
          }
        ]
      },
      {
        "rank": 3,
        "username": "Olimboy Shavkatov",
        "team": null,
        "type": 1,
        "rating": 1200,
        "ratingTitle": "Ritor",
        "newRating": 1423,
        "newRatingTitle": "Liktor",
        "perfomance": 2103,
        "perfomanceTitle": "Magistr",
        "points": 3,
        "penalties": 61,
        "delta": 223,
        "seed": 30.807890137767576,
        "isVirtual": false,
        "isUnrated": false,
        "isOfficial": null,
        "virtualTime": null,
        "doubleRatingPurchased": false,
        "saveRatingPurchased": false,
        "problemsInfo": [
          {
            "problemSymbol": "A",
            "points": 1,
            "penalties": 21,
            "attemptsCount": 1,
            "firstAcceptedTime": "2024-09-08T20:01:27.149597+05:00",
            "theBest": false,
            "contestTime": "00:06"
          },
          {
            "problemSymbol": "B",
            "points": 1,
            "penalties": 1,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:01:56.959424+05:00",
            "theBest": false,
            "contestTime": "00:25"
          },
          {
            "problemSymbol": "C",
            "points": 1,
            "penalties": 4,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:04:11.581469+05:00",
            "theBest": true,
            "contestTime": "00:10"
          },
          {
            "problemSymbol": "D",
            "points": 1,
            "penalties": 0,
            "attemptsCount": 2,
            "firstAcceptedTime": null,
            "theBest": false,
            "contestTime": "00:30"
          }
        ]
      },
      {
        "rank": 4,
        "username": "Ruzmat Jumaniyazov",
        "team": null,
        "type": 1,
        "rating": 1200,
        "ratingTitle": "Ritor",
        "newRating": 1423,
        "newRatingTitle": "Liktor",
        "perfomance": 2103,
        "perfomanceTitle": "Magistr",
        "points": 2,
        "penalties": 71,
        "delta": 223,
        "seed": 30.807890137767576,
        "isVirtual": false,
        "isUnrated": false,
        "isOfficial": null,
        "virtualTime": null,
        "doubleRatingPurchased": false,
        "saveRatingPurchased": false,
        "problemsInfo": [
          {
            "problemSymbol": "A",
            "points": 1,
            "penalties": 21,
            "attemptsCount": 1,
            "firstAcceptedTime": "2024-09-08T20:01:27.149597+05:00",
            "theBest": false,
            "contestTime": "00:16"
          },
          {
            "problemSymbol": "B",
            "points": 1,
            "penalties": 3,
            "attemptsCount": 0,
            "firstAcceptedTime": "2024-09-08T20:01:56.959424+05:00",
            "theBest": false,
            "contestTime": "00:35"
          },
        ]
      }
    ].map((obj) => {
      obj.problemsInfo = obj.problemsInfo.map(
        obj => ContestProblemInfo.fromJSON(obj)
      )
      return obj;
    }));
  }

  getProblemInfoBySymbol(
    problemsInfo: Array<any>,
    problemSymbol: string
  ): any | undefined {
    return problemsInfo.find(problemInfo => problemInfo.problemSymbol === problemSymbol);
  }

  protected getContentHeader() {
    return {
      headerTitle: 'CONTESTS.STANDINGS',
      breadcrumb: {
        links: [
          {
            name: 'Menu.Contests',
            isLink: true,
            link: '/contests'
          },
        ]
      }
    };
  }
}
