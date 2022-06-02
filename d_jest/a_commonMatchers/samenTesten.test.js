describe('samenstelling van testen',
    () => {
        it('should be four for two plus two',
            () => {
                expect(2 + 2).toBe(4);
            }
        )
        it('should be an object assignement',
            () => {
                const data = {one: 1};
                data['two'] = 2;
                expect(data).toEqual({one: 1, two: 2});
            })
        it('should not be zero for adding possitive numbers',
            () => {
                for (let a = 1; a < 10; a++) {
                    for (let b = 1; b < 10; b++) {
                        expect(a + b).not.toBe(0);
                    }
                }
            })
        it('should throw on octopus',
            () => {
                expect(() => {
                    drinkFlavor('octopus');
                }).toThrow();
            })
    }
);
