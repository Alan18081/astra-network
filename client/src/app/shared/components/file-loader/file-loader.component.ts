import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-file-loader',
  template: `
    <div class="container" fxLayout>
      <div class="image" [ngStyle]="{
	      backgroundImage: 'url(' + url + ')'
      }"></div>
      <div class="input">
        <button mat-icon-button>
          <mat-icon>{{ icon }}</mat-icon>
        </button>
        <input
          type="file"
          #file
          (change)="changeHandler(file.files)"
        >
      </div>
    </div>
  `,
  styleUrls: ['./file-loader.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FileLoaderComponent),
    multi: true
  }]
})
export class FileLoaderComponent implements ControlValueAccessor {
  @Input() icon: string;
  url: string;

  constructor() { }

  writeValue(value: FileList | string) {
    if(value instanceof FileList) {
      this.readFile(value[0]);
    } else {
      this.url = value;
    }
  }

  changeHandler(files: FileList) {
    if(files && files[0]) {
      this.readFile(files[0]);
      this.formChanged(files[0]);
    }
  }

  formChanged(file) {}

  readFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.url = reader.result;
    };
    // this.cd.markForCheck();
  }

  registerOnChange(fn) {
    this.formChanged = fn;
  }

  registerOnTouched() {}

}
