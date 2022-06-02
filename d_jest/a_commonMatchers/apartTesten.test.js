/* toBe: test exact equality */
test('two plus two is four',
    () => {
        expect(2 + 2).toBe(4);
    });

/* teEqual: test equality of value */
test('object assignement',
    () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});
    });

/* not.toBe: test inequality */
test('adding possitive numbers is not zero',
    () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    });

/* toThrow(error?): test opgegooide error */
test('throws on octopus',
    () => {
        expect(() => {
            drinkFlavor('octopus');
        }).toThrow();
    });
