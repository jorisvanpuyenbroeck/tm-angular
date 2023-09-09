import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../status';
import { StatusService } from '../status.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createOneCapitalLetterValidator } from '../../../shared/one-capital-letter-validator';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css'],
})
export class StatusFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  statusId: number = 0;

  status: Status = { id: 0, name: '', active: false };

  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  status$: Subscription = new Subscription();
  postStatus$: Subscription = new Subscription();
  putStatus$: Subscription = new Subscription();

  // reactive form
  statusForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      createOneCapitalLetterValidator(),
    ]),
    active: new FormControl(false),
  });

  constructor(
    private router: Router,
    private statusService: StatusService,
  ) {
    this.isAdd =
      this.router.getCurrentNavigation()?.extras.state?.['mode'] === 'add';
    this.isEdit =
      this.router.getCurrentNavigation()?.extras.state?.['mode'] === 'edit';
    this.statusId = +this.router.getCurrentNavigation()?.extras.state?.['id'];

    if (!this.isAdd && !this.isEdit) {
      this.isAdd = true;
    }

    if (this.statusId != null && this.statusId > 0) {
      this.status$ = this.statusService
        .getStatusById(this.statusId)
        .subscribe((result) => {
          this.statusForm.setValue({
            name: result.name,
            active: result.active,
          });
        });
    }
  }

  onChanges(): void {
    this.statusForm.get('name')?.valueChanges.subscribe((val) => {
      this.nameChangeMessage = `Value of 'name' changed to: ${val}`;
    });
  }

  ngOnInit(): void {
    this.onChanges();
  }

  ngOnDestroy(): void {
    this.status$.unsubscribe();
    this.postStatus$.unsubscribe();
    this.putStatus$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postStatus$ = this.statusService
        .postStatus(this.statusForm.value as Status)
        .subscribe({
          next: (v) => this.router.navigateByUrl('/admin/status'),
          error: (e) => (this.errorMessage = e.message),
        });
    }
    if (this.isEdit) {
      this.putStatus$ = this.statusService
        .putStatus(this.statusId, this.statusForm.value as Status)
        .subscribe({
          next: (v) => this.router.navigateByUrl('/admin/status'),
          error: (e) => (this.errorMessage = e.message),
        });
    }
  }
}
