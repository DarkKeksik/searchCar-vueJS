const car = (name, model, year, owner, phone, image) => ({name, model, year, owner, phone, image});

const cars = [
    car("Ford", "Focus", "Max", 2016, "89231325421", "static/img/ford-focus.png"),
    car("Ford", "MONDEO", "Max", 2016, "89231325421", "static/img/ford-MONDEO.png"),
    car("Ford", "FIESTA", "Max", 2016, "89231325421", "static/img/ford-FIESTA.png")
];

new Vue({
    el: "#app",
    data: {
        cars: cars,
        carActive: cars[0]
    },
    methods: {
        selectCar: function(index) {
            this.carActive = cars[index];
        }
    }
});