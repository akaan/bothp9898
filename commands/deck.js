//const jsdom = require("jsdom");
const { JSDOM } = require('jsdom');

exports.run = (client, message, args) => {

    console.log(args);

    //si la recherche est basé sur un numéro
    if (!isNaN(args[0])) {
     
        let Url = 'https://arkhamdb.com/deck/view/' + args[0]
        console.log(Url)
        
        let jsdom = JSDOM.fromURL(Url).then(dom => {

            let { window } = dom;
            let { document } = window;
            const $ = global.jQuery = require('jquery')(window);

            global.window = window;
            global.document = document;

            $(document).ready(function() {
                //recuperation du deck
                let deck = document.getElementById('deck')
                console.log(deck);            
            })

        })

    }
}


exports.help = {
    name: "deck"
};