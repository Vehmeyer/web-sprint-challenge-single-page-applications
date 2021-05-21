describe('Pizza Ordering Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza/');
    })

    it('check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    const submitBtn = () => cy.get('button[id="order-button"]')
    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select[name="size"]')
    const sausageCheckBox = () => cy.get('input[name="sausage"]')
    const pepperoniCheckBox = () => cy.get('input[name="pepperoni"]')
    const baconCheckBox = () => cy.get('input[name="bacon"]')
    const hamCheckBox = () => cy.get('input[name="ham"]')
    const specialInput = () => cy.get('input[name="specialText"]')

    it('can type in name input', () => {
        nameInput()
            .should("have.value", "")
            .type("John")
            .should("have.value", "John")
    })

    it('can type in special text input', () => {
        specialInput()
            .should("have.value", "")
            .type("no special instructions")
            .should("have.value", "no special instructions")
    })

    it('can select size in drop down', () => {
        sizeInput()
            .should("have.value", "")
            .select("small")
            .should("have.value", "small")
    })

   it('can check sausage check box', () => {
        sausageCheckBox()
            .check()
            .uncheck()
    })

    it('can check pepperoni check box', () => {
        pepperoniCheckBox()
            .check()
            .uncheck()
    })

    it('can check bacon check box', () => {
        baconCheckBox()
            .check()
            .uncheck()
    })

    it('can check ham check box', () => {
        hamCheckBox()
            .check()
            .uncheck()
    })

    it('can submit form if required fields completed', () => {
        submitBtn()
            .should("be.disabled")
            nameInput().type("John")
            sizeInput().select("small")
            submitBtn().should("not.be.disabled")

    })

    // it('confirm submit button is disabled', () => {
    //     submitBtn()
    //         .should("be.disabled")
    // })

})