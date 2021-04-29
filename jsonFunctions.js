const fs = require('fs');
// const error = require('http-error')
const readJson = (file, cb) => {
    
        fs.readFile(file, 'utf-8', (err, jsonString) => {
        if(err) return cb && cb(err);
            try{
                return cb && cb(null, jsonString);
            } catch (err) {
                return cb && cb(err);
            }
        })
    
}

const writeJson = (file, data, cb) => {
    let jsonString = JSON.stringify(data, null, 2);
    fs.writeFile(file, jsonString, err => cb(err));
}

module.exports.writeJson = writeJson;
module.exports.readJson = readJson;