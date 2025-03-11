import { ChangeDetectorRef, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent implements OnInit {
  name: string = '';
  @Input() data: string = '';
  @ContentChild('content') content!: ElementRef;
  viewInitialized = false;
  viewChecked = 0;

  constructor(private cdr: ChangeDetectorRef) {
    console.log('Constructor called');
  }
  ngOnInit(): void {
    console.log('ngOnInit: Component Initialized!');
    this.name = 'ngOnInit: Component Initialized!';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input properties have changed', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection cycle triggered!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called - content has been initialized.');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called - content has been checked.');
  }

  ngAfterViewInit() {
    this.viewInitialized = true;
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    this.viewChecked++;
    // console.log(`ngAfterViewChecked called: ${this.viewChecked} times`);
    // Call detectChanges to ensure Angular runs change detection again
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component is about to be destroyed!');
  }
}
