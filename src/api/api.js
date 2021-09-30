const settings = './settings';

// self referencing API 
const self = {
    host: settings.host,
    arbitrary_api_call: async () => { 
        // ....
        
    } 
}

module.exports = self;