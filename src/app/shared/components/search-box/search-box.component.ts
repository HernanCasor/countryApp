import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
