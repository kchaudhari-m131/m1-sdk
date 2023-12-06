import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'm1-label',
  templateUrl: './m1-label.component.html',
  styleUrls: ['./m1-label.component.scss'],
})
export class M1LabelComponent extends FieldType<FieldTypeConfig> implements OnInit {
  // public title: string;
  // public linkText: string;
  private readonly destroy$ = new Subject();

  constructor() {
    super();
  }

  ngOnInit(): void {
      //this.title = this.props['staticText'];
  }

}
/**
 *
 * Will map dynamic values to resource text
 * @returns object of replace text to be used in M1TranslatePipe
 */

// ngOnDestroy() {
//   this.destroy$.next();
//   this.destroy$.complete();
// }
