const Command = require('./command')

module.exports = class Arkhamdb extends Command {

    static match (message) {
        return message.content.startsWith('!ah')
    }

    static action (message){
        let args = message.content.split(' ')
        args.shift()
        var https = require('https')
        var { statusCode } = resp
        var linkUrl

        if (!isNaN(args[0])){ 
            linkUrl = 'https://arkhamdb.com/bundles/cards/'+args[0]+'.png'    
            https.get(linkUrl, (resp) => { 
                if (statusCode !== 200) {
                    linkUrl = 'https://arkhamdb.com/bundles/cards/'+args[0]+'.jpg'   
                }
            })             
        }   
        else
        {      
            linkUrl = 'https://arkhamdb.com/find?q=' +args.join('%20')                 
        }
        
        https.get(linkUrl, (resp) => {
            if (statusCode !== 200) {
                message.reply('désolé le mystère de cette carte reste entier')

            }else
            {
                message.reply(linkUrl)
            }
        })
        
    }

}

