import { Component, Output, EventEmitter } from '@angular/core';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'm1-link',
  templateUrl: './m1-link.component.html',
  styleUrls: ['./m1-link.component.scss']
})
export class M1LinkComponent extends FieldType {
  @Output() action = new EventEmitter<any>();
}
