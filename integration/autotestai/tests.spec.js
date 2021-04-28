import TiketaPage from './page-objects/tiketa';
import HerokuPage from './page-objects/herokuapp';
/// <reference types="cypress" />

context('Tiketa page test', function () {

  const herokuPage = new HerokuPage();
  const tiketaPage = new TiketaPage();
  it('Task 2:Find the  cirque du soleil - corteo event', function () {
    cy.visit('https://www.tiketa.lt/EN/search');
    tiketaPage.captionSearchField().focus()
    tiketaPage.captionSearchField().blur();
     cy.on('uncaught:exception', (e, runnable) => {
      console.log('error', e)
      console.log('runnable', runnable)
      if (e.message.includes('Script error.')) {
        return false
      };
    });
    tiketaPage.eventPlaceDropdown().click();
    tiketaPage.eventVenueAvia().click();
    tiketaPage.selectDateFrom().type('2022-01-01');
    tiketaPage.selectDateTo().type('2022-03-31');
    tiketaPage.searchForm().submit();
    cy.task('log', tiketaPage.concertList() );
  });
  it('Task 3', function () {
    cy.visit('http://the-internet.herokuapp.com/challenging_dom');
    herokuPage.thirdRowText().dblclick();
    cy.get('table').find('tr').eq(7).find('td').eq(6);
    cy.get('table').find('tr').eq(3).find('td').eq(6).;
  });
