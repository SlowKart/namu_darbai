class HerokuPage {
  thirdRowText() {
    return cy.get('table').find('tr').eq(3).find('td').eq(5);
  }
  seventhRowText() {
    return cy.get('table').find('tr').eq(7).find('td').eq(6);
  }
}
export default HerokuPage;