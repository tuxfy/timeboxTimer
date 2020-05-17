describe('Adding button times to timer', () => {

      beforeEach(() => {
        cy.visit('http://localhost:1234');
        cy.fixture('minutes.json').as('minutes');
        cy.fixture('actions.json').as('actions');
      })

    it('Adds time to timer', () => {
        let min = 0;
        cy.get('@minutes').then((minutes) => {
            minutes.map((value) => {
                min += value;
                cy.get('header button[value='+value+']').click();
                cy.get('#clock #min').should('contain', ("00" + min).slice(-2));
                cy.get('#clock #sec').should('contain', "00");
            });
        });
    });

    it('Limits timer values', () => {
        cy.get('@minutes').then((minutes) => {
            const value = minutes[2];
            let min = 0;
            for(let i = 0; i < 7; i++){
                min = min + value >= 60 ? 0 : min + value;
                cy.get('header button[value='+value+']').click();
                cy.get('#clock #min').should('contain', ("00" + min).slice(-2));
                cy.get('#clock #sec').should('contain', "00");
            };
        });
    });


    it('Resets timer', () => {
        cy.get('@minutes').then((minutes) => {
            const minutes = minutes[2];
            cy.get('header button[value='+minutes+']').click();
            cy.get('#clock #min').should('contain', ("00" + minutes).slice(-2));
            cy.get('#clock #sec').should('contain', "00");
            cy.get('@actions').then((actions) => {
                const buttonVal = actions[2];
                cy.get('button[value='+buttonVal+']').click();
                cy.get('#clock #min').should('contain', "00");
                cy.get('#clock #sec').should('contain', "00");
            });            
        });
    })
});
