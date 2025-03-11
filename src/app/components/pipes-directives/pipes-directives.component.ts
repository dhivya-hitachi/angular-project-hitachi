import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { HoverColorDirective } from '../../directives/hover-color.directive';

@Component({
  selector: 'app-pipes-directives',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe, ReversePipe, CommonModule, HoverColorDirective],
  templateUrl: './pipes-directives.component.html',
  styleUrl: './pipes-directives.component.css'
})
export class PipesDirectivesComponent {
  amount = 123.45;
  company = 'hitachi digital service';
  purchasedOn = '2024-07-08';
  isVisible: boolean = true;
  items: string[] = ['Apple', 'Banana', 'Cherry'];
  bgColor: string = 'lightblue';
  fontSize: string = '20px';
  isHighlighted: boolean = true;
  isBold: boolean = false;
}
