class HerokuPage {
  thirdRowText() {
    return cy.get('table').find('tr').eq(3).find('td').eq(5);
  }
}
export default HerokuPage;