import { AccountConfiguration } from './../../../core/models/account-configuration.model';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  styleUrls: ['./setup-form.component.css']
})
export class SetupFormComponent implements OnChanges {

  @Input()
  config: AccountConfiguration | undefined | null;

  @Output()
  onSave: EventEmitter<AccountConfiguration> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  submit(): void {
    if(this.form.valid) {
      this.onSave.emit(this.form.value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']?.currentValue) {

      this.form.patchValue({
        'userName': this.config?.userName,
        'password': this.config?.password,
      });
    }
  }

}
