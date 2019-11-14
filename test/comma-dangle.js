/* eslint-disable object-curly-newline, import/no-unresolved */
import { importSingleLine } from 'hello';
import {
    importMultiline1,
    importMultiline2,
} from 'hello2';

const singleLine = { comma: 'dangle' };

const multiLine = {
    comma: 'dangle',
};

const arraySingleLine = [1, 2];

const arrayMultiLine = [
    1,
    2,
];

export {
    importSingleLine,
    importMultiline1,
    importMultiline2,
    singleLine,
    multiLine,
    arraySingleLine,
    arrayMultiLine,
};
