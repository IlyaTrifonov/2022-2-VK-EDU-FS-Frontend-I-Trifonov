/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {

    if (bytes >= 0 && Number.isInteger(bytes)) {

        let inputData = Number.parseInt(bytes);

        const dataUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        let unit = 0;

        for (; unit < dataUnits.length - 1; unit++) {
            if (inputData / 1024 >= 1)
                inputData /= 1024;
            else break;
        }

        if (inputData % 1 === 0)
            return `${Math.trunc(inputData)} ${dataUnits[unit]}`
        else
            return `${inputData.toFixed(2)} ${dataUnits[unit]}`

    } else
        return false;
}
