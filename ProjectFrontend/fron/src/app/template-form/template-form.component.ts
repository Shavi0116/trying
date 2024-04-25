import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  onSubmit(form:NgForm) {
    if (form.valid) {
      // Here you can handle form submission logic
      console.log('Form submitted successfully!');
      console.log('Form data:', form.value);
      // You can send the form data to a backend server, perform validation, etc.
    } else {
      console.error('Form is invalid. Please check the fields.');
      // Optionally, you can display a message to the user indicating that the form is invalid.
    }
  }
}
