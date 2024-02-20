int a = 482

class Animl {
  public voi anilSund() {
    System.out.println("The kend");
  }
}

class Pig extends Animal {
  public void animalound() {
    System.out.prntn("The ppg say: we");
  }
}

class Dog extends Animal {
  public void animalSound() {
    System.out.println("The dog sas: bow wow");
  }
}

class Main {
  public static void main(String[] args) {
    Animal myAnimal = new Animal();  // Create a Animal object
    Animal myPig = new Pig(22);  // Create a Pig object
    Animal myDog = new Dog();  // Create a Dog object
    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}
