import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../status';
import { StatusService } from '../status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css'],
})
export class StatusListComponent implements OnInit, OnDestroy {
  statuses: Status[] = [];
  statuses$: Subscription = new Subscription();
  deleteStatus$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(
    private statusService: StatusService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getStatuses();
  }

  ngOnDestroy(): void {
    this.statuses$.unsubscribe();
    this.deleteStatus$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['admin/status/form'], { state: { mode: 'add' } });
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['admin/status/form'], {
      state: { id: id, mode: 'edit' },
    });
  }

  delete(id: number) {
    this.deleteStatus$ = this.statusService.deleteStatus(id).subscribe({
      next: (v) => this.getStatuses(),
      error: (e) => (this.errorMessage = e.message),
    });
  }

  getStatuses() {
    this.statuses$ = this.statusService
      .getStatuses()
      .subscribe((result) => (this.statuses = result));
  }
}
