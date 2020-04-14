describe('Showing timer buttons', () => {
    it('shows timer buttons', () => {
        cy.visit('http://localhost:1234');

        const timeArray = [1, 5, 10];

        timeArray.map((value, index) => {
            let number = index+1;
            cy.get('header button:nth-of-type('+number+')').should('contain', '➕'+value+'min');
            cy.get('header button:nth-of-type('+number+')').should('have.value', ''+value+'');
        }); 
        
        timeArray.map((value, index) => {
            let number = index+1;
            cy.get('header button:nth-of-type('+number+')').click();
        }); 
    });
});
