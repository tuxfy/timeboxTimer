describe('Adding button times to timer', () => {
    it('Adds button time to timer', () => {
        cy.visit('http://localhost:1234');

        const timeArray = [1, 5, 10];

        timeArray.map((value, index) => {
            let number = index+1;
            cy.get('header button:nth-of-type('+number+')').should('contain', '➕'+value+'min');
            cy.get('header button:nth-of-type('+number+')').should('have.value', ''+value+'');
        }); 
        
        let min = 0;
        timeArray.map((value, index) => {
            let number = index+1;
            min += value;
            cy.get('header button:nth-of-type('+number+')').click();
            cy.get('#clock #min').should('contain', ("00" + min).slice(-2));
            cy.get('#clock #sec').should('contain', "00");
        }); 
    });
});
