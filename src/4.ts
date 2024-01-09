class Key {
  private signature: number = Math.random();
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      console.log("Дверь открыта");

      this.door = true;
    }
    this.door = false;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
