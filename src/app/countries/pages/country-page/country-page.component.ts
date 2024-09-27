import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private ar: ActivatedRoute,
    private cs: CountriesService,
    private r: Router
  ) {}

  ngOnInit(): void {
    this.ar.params
      .pipe(switchMap(({ id }) => this.cs.searchCountryByAlphaCode(id)))
      .subscribe((country) => {
        if (!country) return this.r.navigateByUrl('');
        this.country = country;
        return;
      });
  }
}
