import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() displayResponsive: boolean;
  @Output() hideDialog = new EventEmitter<boolean>();

  myForm: FormGroup;
  isUpdateEnable: boolean = false;

  constructor(private _fb: FormBuilder) {
    this.displayResponsive = false;
    this.myForm = this._fb.group({

    });
  }

  ngOnInit(): void {
  }

  hideResponsiveDialog(): void {
    this.hideDialog.emit(false);
  }

  cancel(): void {
    this.displayResponsive = false;
  }

}
