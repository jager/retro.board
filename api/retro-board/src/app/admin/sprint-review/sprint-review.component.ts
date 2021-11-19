import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Sprint } from '../models/sprintreview/Sprint';
import { Issue, SprintReviewReport } from '../models/sprintreview/sprintReviewReport';
import { Team } from '../models/Team';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sprint-review',
  templateUrl: './sprint-review.component.html',
  styleUrls: ['./sprint-review.component.css']
})
export class SprintReviewComponent implements OnInit {

  teams : Team[] = [];
  sprints : Sprint[] = [];
  chosenSprint!:Sprint;
  chosenTeam:Team | null = null;
  sprintReviewReport!:SprintReviewReport | null;
  editedIssue!:Issue | null;
  sprintDataForChart:any =  [
    ["story", 3],
    ["bug", 2],
    ["task", 1],
    ["technical task", 1]
  ];
  chartType:ChartType = ChartType.PieChart
  chartTitle:string = "Wybrany sprint"
  chartOptions:any = {
    is3D: true
  }

  removeIcon = faMinus;

  constructor() { }

  ngOnInit(): void {
    this.teams = [
      new Team(1, "Sprintersi (Z23)", [], [new Sprint("LCMCP 1"),new Sprint("LCMCP 2"), new Sprint("LCMCP 3") ,new Sprint("PLS: 20")]),
      new Team(2, "Kapłani Metryczek (Z3)", [], [new Sprint("Sprint 1"),new Sprint("Inny sprint 2")]),
      new Team(3, "Hoży Doktorzy (Z88)", [], [new Sprint("spr nr 3")]),
      new Team(4, "Freewolni (Z69)", [], []),
    ]

  }

  chooseTeam(teamName:string):void {
    this.chosenTeam = this.teams.filter(x => x.name === teamName)[0];
    this.sprints = this.chosenTeam.sprints;
    this.sprintReviewReport = null;
  }

  chooseSprint(sprintName:string):void {
    this.chosenSprint = this.sprints.filter(x => x.name === sprintName)[0];

    let issues = [
      new Issue("some desc", "story", 13, "done"),
      new Issue("some desc2", "technical task", 1, "done"),
      new Issue("some desc3", "bug", 0, "in progress"),
      new Issue("some desc3", "bug", 0, "resolved"),
      new Issue("some desc4", "task", 0, "done"),
      new Issue("some desc5", "story", 8, "new"),
      new Issue("some desc6", "story", 3, "done"),
    ];

    this.sprintReviewReport = new SprintReviewReport(this.chosenSprint, issues);
    this.sprintDataForChart = [
      ["story", 3],
      ["bug", 2],
      ["task", 1],
      ["technical task", 1]
    ];
  }

  editDescription(issue:Issue) {
    if (this.editedIssue == null)
      this.editedIssue = issue;
  }

  isCurrentIssueInEditMode(issue:Issue) : boolean {
    return this.editedIssue != null && this.editedIssue === issue;
  }

  editDescriptionModeOff(issue:Issue, event:any) : void {
    issue.setDescription(event.target.value);
    this.editedIssue = null;
  }

  prepareChart() {

  }

  addChallangeOrProblem(event:any) {
    if (this.sprintReviewReport != null)
      this.sprintReviewReport.addChallange(event.target.value);

    event.target.value = "";
  }

  removeChallenge(challenge:string) {
    if (this.sprintReviewReport != null)
      this.sprintReviewReport.removeChallenge(challenge);
  }

  removeIssue(issue:Issue) {
    if (this.sprintReviewReport != null) {
      this.sprintReviewReport.removeIssue(issue);
    }
  }

}
