import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  SimpleChanges,OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,OnDestroy
{
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();
  constructor() {
    console.log('Constrctor called', this.postImg);
  }
  ngOnInit() {
    console.log('NgonInit called', this.postImg);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }
  ngDoCheck(): void {
    console.log('NgDoCheck called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');

  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    
  }
}
