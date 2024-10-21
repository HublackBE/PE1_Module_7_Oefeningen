let rekenmachine = {
    optellen: function(num1, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        return num1 + num2;
    },
    aftrekken: function(num1, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        return num1 - num2;
    },
    vermenigvuldigen: function(num1, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        return num1 * num2;
    },
    delen: function(num1, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        return num1 / num2;
    }
}

rekenmachine.optellen(42, 42);
rekenmachine.aftrekken(42, 42);
rekenmachine.vermenigvuldigen(42, 2);
rekenmachine.delen(42, 2);