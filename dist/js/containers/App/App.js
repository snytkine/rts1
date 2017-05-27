"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var KanbanBoard_1 = require("../../components/KanbanBoard");
var cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I Should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write Some Code",
        description: "Code along with the sample in the book",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    }
];
exports.default = function () { return React.createElement(KanbanBoard_1.KanbanBoards, { cards: cardsList }); };
//# sourceMappingURL=App.js.map