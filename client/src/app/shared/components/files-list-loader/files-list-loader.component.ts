import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-files-list-loader',
  templateUrl: './files-list-loader.component.html',
  styleUrls: ['./files-list-loader.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilesListLoaderComponent),
    multi: true
  }]
})
export class FilesListLoaderComponent implements ControlValueAccessor {

  @Input() icon: string;
  urlList: string[];

  constructor() { }

  writeValue(values: FileList | string[]) {
    if(values instanceof FileList) {
      this.readFiles(values);
    } else {
      this.urlList = values;
    }
  }

  changeHandler(files: FileList) {
    if(files) {
      this.readFiles(files);
    }
  }


  readFiles(files: FileList) {
    const reader = new FileReader();
    this.urlList = [];
    for(let i = 0; i < files.length; i++) {
      reader.readAsDataURL(files[i]);
    }
    reader.onload = () => {
      this.urlList.push(reader.result);
    };
  }

  registerOnChange(fn) {
    this.changeHandler = fn;
  }

  registerOnTouched() {}


}
