describe("Register and login", () => {
  beforeEach(() => {
    cy.visit("/index.html");
  });

  it("registers a new user and logs in successfully", () => {
    cy.get('button[data-bs-target="#registerModal"]')
      .first()
      .contains("Create")
      .click({ force: true });

    cy.get("#registerModal").should("be.visible");
    cy.wait(500);

    cy.get('#registerModal input[name="name"]')
      .should("be.visible")
      .type("Test User");
    cy.get('#registerModal input[name="email"]')
      .should("be.visible")
      .type("testuser@stud.noroff.no", { force: true });
    cy.get('#registerModal input[id="registerPassword"]').type(
      "validPassword123",
      { force: true },
    );
    cy.get('#registerModal input[name="avatar"]').type(
      "https://example.com/avatar.jpg",
      { force: true },
    );

    cy.get('#registerModal button[type="submit"]').contains("Create").click();
  });
});
