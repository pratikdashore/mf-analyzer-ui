import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GenericValidator } from '../../../../shared';
import { NavSearchForm } from '../../models';
import { NavSearchService } from '../../services';

@Component({
  selector: 'mfa-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {

  @Output() searchNav = new EventEmitter<NavSearchForm>();

  searchForm: FormGroup;
  errorMessages: { [key: string]: string };
  genericValidator: GenericValidator;


  constructor(private fb: FormBuilder, private navSearchService: NavSearchService) {
    this.genericValidator = new GenericValidator(navSearchService.validationMessages);
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      fundCode: ['', [Validators.required, Validators.minLength(3)]],
      horizon: ['', [Validators.required, Validators.min(1)]],
      period: ['', [Validators.required, Validators.min(1)]]
    });

    this.searchForm.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(
        (event) =>
          (this.errorMessages = this.genericValidator.processMessages(this.searchForm))
      );
  }

  onSearch(){
    this.searchNav.emit(this.searchForm.value);
  }
}


