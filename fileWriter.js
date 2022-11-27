const fs = require("fs")
const fileReader = require('./fileReader.js')

module.exports = async (obj) => {
    const data = fileReader();
    
    if(obj.name && obj.email && obj.password && obj.username && obj.age) {
        data.push(obj);
        const stringifiedData = JSON.stringify(data);
        await fs.writeFile('./users.json', stringifiedData, 'utf-8')
        return true
    } else {
        return false;
    }
};
