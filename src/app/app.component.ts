import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Material module
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,  
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule
],
providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DataSearchTable';
  filterForm!: FormGroup;
  showFilters = false;
  dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      dropdown: [''],
      inputBox: [''],
      input2: [''],
      input3: [''],
      date: ['']
    });
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
