'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "category", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "first_migration",
    "created": "2022-04-02T18:59:58.122Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "category",
        {

        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
