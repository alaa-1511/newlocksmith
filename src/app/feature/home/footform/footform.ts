
import { Component, HostListener, Inject, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { Auth } from '../../../core/service/auth/auth';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { FlowbiteService } from '../../../core/service/service/flowbite-service';
import { initFlowbite } from 'flowbite';
import { TreeModule } from 'primeng/tree';
import { HttpClient } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-footform',
  imports: [ReactiveFormsModule, TreeModule, CommonModule],
  templateUrl: './footform.html',
  styleUrl: './footform.css',
})
export class Footform {

  private httpClient = inject(HttpClient)

  constructor(
    private flowbiteService: FlowbiteService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.subDropdownOpen.set(new Array(this.services.length).fill(false));
  }


  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(Auth)
  flag: WritableSignal<boolean> = signal(false);

  private readonly cookieService = inject(CookieService)

  forminit!: FormGroup;

  ngOnInit(): void {

    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

    this.enterForm();

    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }

  enterForm(): void {
    this.forminit = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      address: [null, [Validators.required]],
      service: [null, [Validators.required]],
      message: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    });
  }

  getValue(control: string) {
    return this.forminit.get(control)?.value;
  }




  onSubmit(e: Event) {
    e.preventDefault();
    const templateParams = {
      name: this.getValue('name'),
      service: this.getValue('service'),
      address: this.getValue('address'),
      phone: this.getValue('phone'),
      message: this.getValue('message'),
    };

    console.log(templateParams);

    if (this.forminit.valid) {
      emailjs.send(
        'service_nrg1sfr',      // Replace with your Service ID
        'template_37el0ov',     // Replace with your Template ID
        templateParams,
        'eoXEh-tCUHuAfQxZV',  // Replace with your Public Key

      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Failed to send email. Please try again.');
        }
      );
    }
  }



  selectedService = signal<string>('');
  mainDropdownOpen = signal<boolean>(false);
  subDropdownOpen = signal<boolean[]>([]);

  services = [
    {
      label: 'Automotive Locksmith Service',
      subServices: ['Digital Door Locks', 'Lock installation', 'Key Extraction', 'Electronic Door Lock']
    },
    {
      label: 'Residential Locksmith Service',
      subServices: ['Car Locksmith']
    },
    {
      label: 'Commercial Locksmith Service',
      subServices: ['Commercial Lock Replacement', 'Rekey Lock', 'Locksmith']
    },
    {
      label: '24/7 Emergency Locksmith Service',
      subServices: ['Emergency Lockouts', 'Lock Out Of Car']
    }
  ];


  toggleDropdown() {
    this.mainDropdownOpen.update(v => !v);
  }

  toggleSubDropdown(index: number) {
    this.subDropdownOpen.update(current =>
      current.map((val, i) => i === index ? !val : false)
    );
  }


  selectService(serviceName: string) {
    this.selectedService.set(serviceName);
    this.mainDropdownOpen.set(false);
    this.subDropdownOpen.set(new Array(this.services.length).fill(false));
    this.forminit.get('service')?.setValue(serviceName);
    const controlservice = this.forminit.get('service');
    if (controlservice) {
      controlservice.markAsTouched()
      controlservice.setErrors(null);
    }
  }
}




















//////////////////







