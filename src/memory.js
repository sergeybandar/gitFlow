/**
 * @description 
 * @param {number} memory memory
 * @returns {string}
 */
function getMemory(memory) {
    if (memory <= 0 || memory > 10 ** 10) {
        throw new Error('Кривые данные');
    }

    if (memory < 10 ** 3) {
        return `${memory}Б`;
    } else if (memory < 10 ** 6) {
        return `${Math.floor(memory / 10 ** 3)}кБ`;
    } else if (memory < 10 ** 9) {
        return `${Math.floor(memory / 10 ** 6)}МБ`;
    } else if (memory < 10 ** 10) {
        return `${Math.floor(memory / 10 ** 9)}ГБ`;
    }
}
module.exports = getMemory;
