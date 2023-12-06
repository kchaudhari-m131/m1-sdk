import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { FieldType } from '@ngx-formly/material';
import { startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'm1-search',
  templateUrl: './m1-search.component.html',
  styleUrls: ['./m1-search.component.scss']
})

export class M1SearchComponent extends FieldType implements OnInit, AfterViewInit {
  @ViewChild('selectedDs') selectedDs: { nativeElement: { value : ' ', blur: () => void; focus: () => void; }; } = null!;

  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger = null!;
  filter: any = null!;
  selectedFilter: Array<any> = [];

  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    this.filter = this.formControl.valueChanges.pipe(startWith(''), switchMap(term => this.to['filter'](term)));
  }

  override onContainerClick(event: MouseEvent) {
    super.onContainerClick(event);
  }

  onOptionSelected(value: any) {
    
    if((value?.searchText?.length) < (this.to['minLength'] || 0)) {
      this.selectedDs.nativeElement.blur();
      this.formControl.setErrors({minlength:true}); 
      return;
    }

    this.selectedDs.nativeElement['value'] = ' ';
    this.selectedFilter.push(value);
  }

  displayFn(user: any): string {
    return user && user.searchText ? user.searchText : '';
  }

  escapeKeydown(event: any) {
    event.stopPropagation();
  }

  removeFilter(filterObj: any) {
    const index = this.selectedFilter.indexOf(filterObj);

    if (index >= 0) {
      this.selectedFilter.splice(index, 1);
    }
    this.form.controls[this.field?.key?.toString() || ''].reset();
  }

}
