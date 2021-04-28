class TiketaPage {
  concertList() {
    return cy.get('[class="col-xs-12 col-sm-6 col-lg-4"]');
  }
  captionSearchField() {
    return cy.get('.search-block > .row > .btn-toolbar > .twitter-typeahead > .typeahead:nth-child(2)');
  }
  eventPlaceDropdown() {
    return cy.get('[id="dropdownMenu4"]');
  }
  eventVenueAvia() {
    return cy.get('.col-xs-12 > .is-open > .dropdown-menu > li:nth-child(14) > a');
  }
  selectDateFrom() {
    return cy.get('[name="sf_DateFrom"]');
  }
  selectDateTo() {
    return cy.get('[name="sf_DateTo"]');
  }
  searchForm() {
    return cy.get('[id="advSearchForm"]')
  }
}
export default TiketaPage;