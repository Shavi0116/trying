import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  based:boolean=true;
  public col=["red","blue","yellow"];
  public colors="Let color of col";
}

