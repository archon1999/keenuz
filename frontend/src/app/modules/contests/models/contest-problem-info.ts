import { Contest } from "@app/modules/contests/interfaces/contest";

export class ContestProblemInfo {
  constructor(
    public problemSymbol: string,
    public points: number,
    public penalties: number,
    public attemptsCount: number,
    public firstAcceptedTime: string,
    public theBest: boolean,
    public contestTime: string,
  ) {
  }

  static fromJSON(data: any) {
    return new ContestProblemInfo(
      data.problemSymbol,
      data.points,
      data.penalties,
      data.attemptsCount,
      data.firstAcceptedTime,
      data.theBest,
      data.contestTime,
    );
  }

  solved(): boolean {
    return this.firstAcceptedTime != null;
  }

  getHTML(contest: Contest): string {
    let html = '';
    if (this.solved()) {
      let badgeClass: string;
      if (this.theBest) {
        badgeClass = 'badge badge-glow badge-success the-best';
      } else {
        badgeClass = 'badge badge-light-success';
      }
      html = `<span class="${badgeClass}">`;
      html += `<div class="mb-25">+${this.attemptsCount > 0 ? this.attemptsCount : ''}</div>`;
      html += this.contestTime;
      html += '</span>';
    } else if (this.attemptsCount > 0) {
      let badgeClass: string;
      if (this.attemptsCount > 0) {
        badgeClass = 'badge badge-light-danger';
      } else {
        badgeClass = 'badge badge-light-warning';
      }
      html += `<span class="${badgeClass}">`;
      html += '-';
      if (this.attemptsCount > 0) {
        html += this.attemptsCount;
      }
      html += '</span>';
    }
    return html;
  }

}
