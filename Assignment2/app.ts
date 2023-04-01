abstract class Vehicle {
    private make: string;
    private model: string;
    private year: number;
    private rented: boolean;

    constructor(make: string, model: string, year: number, rented: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }

    public getMake(): string {
        return this.make;
    }

    public getModel(): string {
        return this.model;
    }

    public getYear(): number {
        return this.year;
    }

    public isRented(): boolean {
        return this.rented;
    }

    public setRented(rented: boolean): void {
        this.rented = rented;
    }

    public abstract rentalRate(): number;

    public rent(): void {
        if (this.rented) {
            console.log(`This ${this.make} ${this.model} is already rented.`);
        } else {
            this.setRented(true);
            console.log(`You have rented this ${this.make} ${this.model}.`);
        }
    }

    public return(): void {
        if (!this.rented) {
            console.log(`This ${this.make} ${this.model} has not been rented yet.`);
        } else {
            this.setRented(false);
            console.log(`You have returned this ${this.make} ${this.model}.`);
        }
    }
}

class Car extends Vehicle {
    private numSeats: number;

    constructor(make: string, model: string, year: number, rented: boolean, numSeats: number) {
        super(make, model, year, rented);
        this.numSeats = numSeats;
    }

    public rentalRate(): number {
        // calculate rental rate for a car
        return 50;
    }

    public getNumSeats(): number {
        return this.numSeats;
    }
}

class Truck extends Vehicle {
    private cargoCapacity: number;

    constructor(make: string, model: string, year: number, rented: boolean, cargoCapacity: number) {
        super(make, model, year, rented);
        this.cargoCapacity = cargoCapacity;
    }

    public rentalRate(): number {
        // calculate rental rate for a truck
        return 100;
    }

    public getCargoCapacity(): number {
        return this.cargoCapacity;
    }
}

class Motorcycle extends Vehicle {
    private numWheels: number;

    constructor(make: string, model: string, year: number, rented: boolean, numWheels: number) {
        super(make, model, year, rented);
        this.numWheels = numWheels;
    }

    public rentalRate(): number {
        // calculate rental rate for a motorcycle
        return 30;
    }

    public getNumWheels(): number {
        return this.numWheels;
    }
}

// Example usage
const car = new Car('Toyota', 'Camry', 2022, false, 5);
car.rent();
console.log(car.isRented()); // true
console.log(car.rentalRate()); // 50
car.return();
console.log(car.isRented()); // false

const truck = new Truck('Ford', 'F-150', 2021, false, 2000);
truck.rent();
console.log(truck.isRented()); // true
console.log(truck.rentalRate()); // 100
truck.return();
console.log(truck.isRented()); // false

const motorcycle = new Motorcycle('Harley-Davidson', 'Iron 883', 2023, false, 2);
motorcycle.rent
