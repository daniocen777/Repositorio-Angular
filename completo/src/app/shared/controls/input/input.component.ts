import {
  Component,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder?: string;
  @Output() changed = new EventEmitter<string>();

  value: string = '';
  isDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    console.log('**** registerOnChange ****');
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('**** registerOnTouched ****');
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('**** setDisabledState ****');
    this.isDisabled = isDisabled;
  }

  onKeyup(value: string): void {
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onBlur(): void {
    console.log('**** onBlur ****');
    this.propagateTouched();
  }
}
