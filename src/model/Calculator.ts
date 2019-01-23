export default class Calculator {

    public add(n1: number, n2: number): number | undefined {
        return n1 + n2;
    }

    public subt(n1: number, n2: number): number | undefined {
        return n1 - n2;
    }

    public mul(n1: number, n2: number): number | undefined {
        return n1 * n2;
    }

    public div(n1: number, n2: number): number | undefined  {
        if (n2 === 0) return undefined;
        return n1 / n2;
    }

}