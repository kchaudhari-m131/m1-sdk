import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { AfterViewInit, Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatAutocompleteTrigger, MatAutocomplete } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/material';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'm1-autocomplete',
  templateUrl: './m1-autocomplete.component.html',
  styleUrls: ['./m1-autocomplete.component.scss']
})

export class M1AutoCompleteComponent extends FieldType implements OnInit, AfterViewInit {
  @ViewChild(MatInput) override formFieldControl: MatInput = null!;
  @ViewChild('selectedDs') selectedDs: { nativeElement: { blur: () => void; focus: () => void; }; } = null!;
  @ViewChild('matSuffix') override matSuffix: TemplateRef<any> = null!;

  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger = null!;
  filter: any = null!;
  selectedName: any;

  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    this.filter = this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        startWith(''),
        switchMap(term => this.to['filter'](term))
      );
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    // temporary fix for https://github.com/angular/material2/issues/6728
    const ac: any = this.autocomplete;
    if (ac) {
      ac._formField = this.formField;
    }
    if (this.matSuffix) {
      this.to['suffix'] = this.matSuffix;
    }
  }

  override onContainerClick(event: MouseEvent) {

    
    super.onContainerClick(event);
  }

  onOptionSelected(value: any) {
    this.selectedDs.nativeElement.blur();
  }

  displayFn(selectedObject: any): string {
    return selectedObject && selectedObject.institution_display_name ? selectedObject.institution_display_name : '';
  }

  escapeKeydown(event:any) {
    event.stopPropagation();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event?.keyCode === DOWN_ARROW || event?.keyCode === UP_ARROW) {
      if (this.value.id === null) {
        event.stopPropagation();
      }
    }
  }

  allowSelection(value: any): { [className: string]: boolean } {
    return {
      'no-data': value.id === null
    };
  }

  resetInput(event: any, trigger: MatAutocompleteTrigger, auto: MatAutocomplete) {
    event.stopPropagation();
    this.form.controls[this.field?.key?.toString() || ''].reset();
    trigger.openPanel();
    this.selectedDs.nativeElement.focus();
  }

}
