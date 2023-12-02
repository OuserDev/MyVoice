const db = require('./database');

module.exports = {
    FindAllTask: async function() {
        try {
            const result = await db.query('SELECT * from myvoice');
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
}