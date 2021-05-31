import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* Expresiones regulare */
import {
  regex,
  regexErrors,
  markFormGroupTouched,
} from '../../../shared/utils';
/* Para el select */
import { ControlItem } from 'src/app/models/frontend';
import { Value } from '../../../models/frontend/control-item/index';
/* Servicios */
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline: boolean;
  regexErrors = regexErrors;
  /* Select */
  items!: ControlItem[];
  showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private _notification: NotificationService
  ) {
    this.isInline = true;
    this.items = [
      { label: 'Primero', value: 1 },
      { label: 'Segundo', value: 2 },
      { label: 'Tercero', value: 3 },
      { label: 'Cuarto', value: 4 },
      { label: 'Quinto', value: 5 },
      { label: 'Sexto', value: 6 },
    ];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      autocomplete: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      select: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      radios: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      date: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      dateRange: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({
      input: 'danicode@mail.com',
      password: 'qwerty',
      autocomplete: 1,
      select: 2,
      checkboxes: [3],
      radios: 4,
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2019, 5, 10).getTime(),
        to: new Date(2020, 12, 31).getTime(),
      },
    });
  }

  onSubit(): void {
    if (!this.form.valid) {
      markFormGroupTouched(this.form);
    }
    console.log('Submit', this.form.value['checkboxes']);
  }

  onToggleInline(): void {
    this.isInline = !this.isInline;
  }

  onToggleDisable(): void {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onSuccess(): void {
    this._notification.success('Everything is fine!');
  }

  onError(): void {
    this._notification.error('Oops! Something is wrong');
  }
}
