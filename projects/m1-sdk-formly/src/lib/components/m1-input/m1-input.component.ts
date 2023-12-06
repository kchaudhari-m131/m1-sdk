import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'm1-input',
  templateUrl: './m1-input.component.html',
  styleUrls: ['./m1-input.component.scss']
})
export class M1InputComponent extends FieldType implements OnInit {

  labelText: any;

  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();

    this.labelText = this.to?.['labelResourceText'] ?  this.to?.['labelResourceText'] : this.to?.['updatedLabel'] ;
    
    this.to.label = !this.model[this.field?.key ? this.field?.key.toString() : ''] ? this.labelText : this.labelText?.toUpperCase();
    this.to.placeholder = this.to?.['placeholderResourceText'] ? this.to?.['placeholderResourceText'] : this.to?.['placeholderPrepend'];
   
    console.log("this.to?.['placeholderResourceText']", this.to?.['placeholderResourceText']);
    console.log("this.to?.['labelResourceText']", this.to?.['labelResourceText']);
    
  }

  onFocusIn(){
    this.to.label = this.labelText.toUpperCase();
  }

  onFocusOut(){
    if (!this.model[this.field?.key ? this.field?.key.toString() : '']){
      this.to.label = this.labelText;
    }
  }

  onPaste(event: Event) {
    const selection: any = window.getSelection();
    if (!selection.rangeCount) { return false; }
    return event.preventDefault();
  }
}
