it("commands",()=>{
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(".showcart");
    cy.get(".action.more.button");
    cy.get(".field.search .input-text");
    cy.get("#search");
    cy.get("* input");
    cy.get("p.info");
    cy.get("button,input,p")
})