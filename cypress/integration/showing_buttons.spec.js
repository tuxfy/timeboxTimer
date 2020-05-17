describe('Showing timer buttons', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234');
        cy.fixture('minutes.json').as('minutes');
        cy.fixture('actions.json').as('actions');
    })

    it('shows timer buttons', () => {
        cy.get('@minutes').then((timeArray) => {
            timeArray.map((value, index) => {
                let number = index+1;
                cy.get('header button:nth-of-type('+number+')').should('contain', '➕'+value+'min');
                cy.get('header button:nth-of-type('+number+')').should('have.value', ''+value+'');
            });
        });
    });

    it('shows action buttons', () => {
        cy.get('@actions').then((timeArray) => {
            timeArray.map((value, index) => {
                let number = index+4;
                cy.get('header button:nth-of-type('+number+')').should('contain', ''+value+'');
                cy.get('header button:nth-of-type('+number+')').should('have.value', ''+value+'');
            });
        });
    });
});
