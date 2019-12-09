const car = (name, model, year, owner, phone, image) => ({name, model, year, owner, phone, image});

const cars = [
    car("Ford", "Focus", "Max", 2016, "89231325421", "static/img/ford-focus.png"),
    car("Ford", "MONDEO", "Andree", 2014, "89462513521", "static/img/ford-MONDEO.png"),
    car("Ford", "FIESTA", "Anna", 2012, "89324125213", "static/img/ford-FIESTA.png")
];

new Vue({
    el: "#app",
    data: {
        cars: cars,
        carActive: cars[0],
        selectActive: 0,
        phoneVisibility: false,
        search: "",
        modalVisibility: false
    },
    methods: {
        selectCar: function(index) {
            this.carActive = cars[index]
            this.selectActive = index
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? "Hide phone" : "Show phone";
        },
        filteredCars() {
            return filtered = this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1; 
            });
        }
    }
});