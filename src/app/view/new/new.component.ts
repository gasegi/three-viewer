import { Component, OnInit , OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';

import { UserListFilter } from '../../state';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit , OnDestroy {
  @Input() set value(value: UserListFilter) {
    this.setFormValue(value);
  }
  @Output() valueChange = new EventEmitter<UserListFilter>();

  form: FormGroup;

  private onDestroy = new EventEmitter();

  ngOnInit() {
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nameFilter: ['']
    });
    this.form.valueChanges.pipe(takeUntil(this.onDestroy)).subscribe(value => {
      this.valueChange.emit(value);
    });
  }

  ngOnDestroy() {
    this.onDestroy.complete();
  }

  private setFormValue(value: UserListFilter) {
    this.form.setValue(value);
  }
}
