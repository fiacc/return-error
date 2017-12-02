'use strict';


console.log(`RETURN_EARLY = "${process.env.RETURN_EARLY}"`);
if (process.env.RETURN_EARLY === 'true') {
    module.exports = {
        'do': 'something'
    };
    return;
}

module.exports = {
    'do': 'somethingelse'
};