export default function parseNumbers(string) {

    function subParser(current, hash) {

        if (Object.keys(hash).length === 0) {
            return current;
        }



        let elements = current.split(' ');
        let numbers = [];

        for (var i = 0; i < elements.length; i++) {
            if (parseInt(elements[i])) {
                numbers.push(parseFloat(elements[i]))
            }
        }




        //the replace is messing up

        for (var i = 0; i < numbers.length; i++) {
            let number = numbers[i];

            if (hash[number]) {

                let replaced = number.toString();

                if (replaced.indexOf('.') === -1) {
                    replaced += '.0';
                }


                current = current.replace(replaced, hash[number]);
                delete hash[number];
                return subParser(current, hash)
            }
        }



    }

    function reduce(num1, num2, operation) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);


        if (operation === "*") {
            return num1 * num2;
        }
        if (operation === "+") {
            return num1 + num2;
        }

        if (operation === "/") {
            return num1 / num2;
        }

        if (operation === "-") {
            return num1 - num2;
        }



    }

    let hash = {};

    let array = string.split(" , ");


    for (var i = 0; i < array.length; i++) {

        let elements = array[i].split(" ");
        let num1 = elements[0];
        let operation = elements[1];
        let num2 = elements[2];
        let output = reduce(num1, num2, operation);

        hash[output] = "( " + array[i] + " )";



    }

    let current = hash[24];
    delete hash[24];

    return subParser(current, hash);


}

