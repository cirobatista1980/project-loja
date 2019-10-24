import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    library.add(fas, far, fab);
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required ],
      senha: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.loginForm.value);
  }
}
