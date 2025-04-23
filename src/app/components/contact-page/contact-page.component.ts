import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-contact-page',
  imports: [FooterComponent, FormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
