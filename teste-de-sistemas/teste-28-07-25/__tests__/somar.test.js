import {somar} from '../src/somar';

describe('funcao somar', () => {
    test('espero que a soma de dois números esteja correta', () => {
        expect(somar(1, 2)).toBe(3);
    });
});

describe('funcao somar', () => {
    test('espero que a soma de dois números esteja correta', () => {
        expect(somar(1.5, 2.5)).toBe(4);
    });
});

describe('funcao somar', () => {
    test('espero que a soma de dois números esteja correta', () => {
        expect(somar(-2, -3)).toBe(-5);
    });
});

describe('funcao somar', () => {
    test('espero que ao tentar somar letras, retorne uma mensagem de erro', () => {
        expect(somar("a", "b")).toThrow('buro');
    });
});