describe("sample test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the link text", () => {
    cy.get("a").contains("Go to Vehicle List Page!");
  });
  it("renders the Star Wars image", () => {
    cy.get("img")
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
