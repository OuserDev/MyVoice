const db = require('./database');

module.exports = {
    FindAllTask: async function() {
        try {
            const result = await db.query('SELECT * FROM signup');
            // 결과가 배열 형태로 반환되기 때문에 첫 번째 요소만 추출
            return { data: result[0], error: null };
        } catch (error) {
            console.error('FindAllTask 오류:', error);
            return { data: null, error: error };
        }
    },
};
