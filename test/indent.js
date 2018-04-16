/**
 * Test function for indention.
 *
 * @return {string}
 */
export default function test() {
    let test = 'hello';

    for (let i = 0; i < 5; i++) {
        ++i;

        test += test;
    }

    return test;
}
