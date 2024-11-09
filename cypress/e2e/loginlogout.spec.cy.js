describe("Log in and then log out", () => {
  beforeEach(() => {
    cy.visit("https://skr3d3.github.io/social-media-client/");
  });

  it("logs in successfully with valid credentials", () => {
    cy.wait(1000);
    cy.get("#registerModal .btn-close").click();

    cy.get("#registerModal").should("not.be.visible");

    cy.get('button[data-auth="login"]').first().click();
    cy.get("#loginModal").should("be.visible");

    // Public profile from documentation
    cy.get('#loginModal input[name="email"]').type(
      "first.last@stud.noroff.no",
      { delay: 0 },
    );
    cy.get('#loginModal input[name="password"]').type("UzI1NiIsInR5cCI", {
      force: true,
    });

    cy.get('#loginModal button[type="submit"]').contains("Login").click();

    cy.url().should("include", "/?view=profile&name=");
    cy.wait(1000);

    // Then logout
    cy.get('button[data-auth="logout"]').click();
    cy.get("#registerModal").should("be.visible");
  });
});
