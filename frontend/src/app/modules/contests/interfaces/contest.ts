import { ContestStatus } from "@app/modules/contests/constants/contest-status";

export class Contest {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public status: number,
    public problemsCount: number,
    public contestantsCount: number,
    public startTime: Date,
    public finishTime: Date,
    public logo: string,
    public category: number,
    public categoryTitle: string,
  ) {}

  isFinished(): boolean {
    return this.status === ContestStatus.FINISHED;
  }

  isAlready(): boolean {
    return this.status === ContestStatus.ALREADY;
  }

  isNotStarted(): boolean {
    return this.status === ContestStatus.NOT_STARTED;
  }
}
