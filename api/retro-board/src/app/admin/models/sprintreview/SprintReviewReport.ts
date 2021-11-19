import { Sprint } from "./Sprint";

export class SprintReviewReport {
  constructor(public sprint:Sprint, public issues: Issue[], public challanges:string[] = []) {}

  addChallange(challangeDescription:string) {
    this.challanges.push(challangeDescription);
  }

  removeChallenge(challenge:string) {
    let foundChallenge = this.challanges.indexOf(challenge);
    if (foundChallenge > -1)
      this.challanges.splice(foundChallenge, 1);
  }

  removeIssue(issue:Issue) {
    let foundIssue = this.issues.indexOf(issue);
    if (foundIssue > -1)
      this.issues.splice(foundIssue, 1);
  }
}

export class Issue {
  constructor(public description:string, public issueType:string, public storyPoints:number, public status:string){}

  isFinished():boolean {
    return this.status === "done" || this.status === "resolved";
  }

  setDescription(description:string) {
    this.description = description;
  }
}
