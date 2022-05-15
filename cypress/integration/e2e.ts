import { MockChannelData } from "../../src/mock/mockChannelData"
import { MockUserSelectOptions } from "../../src/mock/mockUserData"

describe("render all the components inside the homepage ⚙️", () => {
    it("renders main app", () => {
        cy.visit("/")
        cy.get("#anymindChatApp").should("exist")
    })
    it("renders top nav", () => {
        cy.visit("/")
        cy.get("#topNav").should("exist")
    })
    it("renders side nav", () => {
        cy.visit("/")
        cy.get("#sideNav").should("exist")
        cy.get("#userNavLabel").should(($div) => {
            expect($div.text().trim()).equal("1. Choose your user");
        });
        cy.get("#selectUserInput").should("exist")
        cy.get("#channelNavLabel").should(($div) => {
            expect($div.text().trim()).equal("2. Choose your Channel");
        });
        cy.get("#channelNavLists").should("exist")
        MockChannelData.map(c =>
            cy.get(`#channel${c.id}`).should(($div) => {
                expect($div.text().trim()).equal(`${c.name} Channel`);
            })
        )
    })
    it("renders messages content", () => {
        cy.visit("/")
        cy.get("#messagesContent").should("exist")
        cy.get("#sendMessageContainer").should("exist")
        cy.get("#messageInput").should("exist")
        cy.get("#sendMessageButton").should("exist")
    })
})

describe("changing the user", () => {
    it("changing the user should be reflected in the select user sections", () => {
        cy.visit("/")
        const newUser = MockUserSelectOptions[1].name
        cy.get("#selectUserInput").select(newUser)
        cy.get("#selectUserInput").contains(newUser)
    })
})
describe("changing the channel", () => {
    it("changing the channel should be reflected in the message sections", () => {
        cy.visit("/")
        MockChannelData.map(c => {
            cy.get(`#channel${c.id}`).click()
            return cy.get("#messageHeader").should(($div) => {
                expect($div.text().trim()).equal(`${c.name} Channel`);
            })
        })
    })
})
describe("sending message", () => {
    it("send message should be shown in the message section", () => {
        cy.visit("/")
        let testMessage = `test message; ${(Math.random() + 1).toString(36).substring(7)}`
        cy.get("#messageInput").type(testMessage)
        cy.get("#sendMessageButton").click()
        cy.get("#messagesContent").contains(testMessage)
    })

})
