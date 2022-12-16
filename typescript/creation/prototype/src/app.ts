import {Circle} from "./circle";

class App {

    static execute() {
        const circle1 = new Circle();
        circle1.x = 5;
        circle1.y = 10;
        circle1.component = [1, 2, 3];

        const circle2 = circle1.clone();

        console.log(circle1.x === circle2.x);
        console.log(circle1.y === circle2.y);

        console.log(circle1.component !== circle2.component);
        console.log(circle1 !== circle2);
    }
}

App.execute();