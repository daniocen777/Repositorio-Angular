import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() displayResponsive: boolean;
  @Output() hideDialog = new EventEmitter<boolean>();

  constructor() {
    this.displayResponsive = false;
  }

  ngOnInit(): void {
  }

  hideResponsiveDialog(): void {
    this.hideDialog.emit(false);
  }

}
