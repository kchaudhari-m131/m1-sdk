import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-m1-chiplist',
  templateUrl: './m1-chiplist.component.html',
  styleUrls: ['./m1-chiplist.component.scss']
})
export class M1ChiplistComponent extends FieldType implements OnInit, OnDestroy, AfterViewInit {

  onDestroy$ = new Subject<void>();

  itemControl = new FormControl();
  selectable = true;
  removable = true;
  addOnBlur = true;

  constructor(){
    super();

  }

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  chipsArr: Array<any> = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.chipsArr.push(value);
      this.to['chipsAddRemove'](this.chipsArr);
    }

    this.handleFormControl();
    event.chipInput!.clear();
  }

  remove(chip: string): void {
    const index = this.chipsArr.indexOf(chip);

    if (index >= 0) {
      this.chipsArr.splice(index, 1);
      this.to['chipsAddRemove'](this.chipsArr);
      this.handleFormControl();
    }
  }

  override ngOnInit(): void {
    this.chipsArr = this.to['chipsData'];
  }

  handleFormControl() {
    this.formControl.setValue(this.chipsArr);
    this.formControl.updateValueAndValidity();
    this.formControl.markAsTouched()
  }
}
