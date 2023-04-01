var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            console.log("This ".concat(this.make, " ").concat(this.model, " is already rented."));
        }
        else {
            this.setRented(true);
            console.log("You have rented this ".concat(this.make, " ").concat(this.model, "."));
        }
    };
    Vehicle.prototype.return = function () {
        if (!this.rented) {
            console.log("This ".concat(this.make, " ").concat(this.model, " has not been rented yet."));
        }
        else {
            this.setRented(false);
            console.log("You have returned this ".concat(this.make, " ").concat(this.model, "."));
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, numSeats) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.numSeats = numSeats;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        // calculate rental rate for a car
        return 50;
    };
    Car.prototype.getNumSeats = function () {
        return this.numSeats;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, cargoCapacity) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.cargoCapacity = cargoCapacity;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        // calculate rental rate for a truck
        return 100;
    };
    Truck.prototype.getCargoCapacity = function () {
        return this.cargoCapacity;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, numWheels) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.numWheels = numWheels;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        // calculate rental rate for a motorcycle
        return 30;
    };
    Motorcycle.prototype.getNumWheels = function () {
        return this.numWheels;
    };
    return Motorcycle;
}(Vehicle));
// Example usage
var car = new Car('Toyota', 'Camry', 2022, false, 5);
car.rent();
console.log(car.isRented()); // true
console.log(car.rentalRate()); // 50
car.return();
console.log(car.isRented()); // false
var truck = new Truck('Ford', 'F-150', 2021, false, 2000);
truck.rent();
console.log(truck.isRented()); // true
console.log(truck.rentalRate()); // 100
truck.return();
console.log(truck.isRented()); // false
var motorcycle = new Motorcycle('Harley-Davidson', 'Iron 883', 2023, false, 2);
motorcycle.rent;
