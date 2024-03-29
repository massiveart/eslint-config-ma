/* eslint-disable object-curly-newline */
import { importSingleLine } from 'foo';
import {
    importMultiline1,
    importMultiline2,
} from 'foobar';

var singleLine = { comma: 'dangle' };

var multiLine = {
    comma: 'dangle',
};

var arraySingleLine = [1, 2];

var arrayMultiLine = [
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
