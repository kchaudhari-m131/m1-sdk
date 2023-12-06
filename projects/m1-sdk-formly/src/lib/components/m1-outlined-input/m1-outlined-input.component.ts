import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'm1-m1-outlined-input',
  templateUrl: './m1-outlined-input.component.html',
  styleUrls: ['./m1-outlined-input.component.scss']
})
export class M1OutlinedInputComponent extends FieldType implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
