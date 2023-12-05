function Persona(FirstName, lastName, age, location) {

    this.FirstName = FirstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;

    function compareAges(ageToCompare) {
        return this.age > ageToCompare;
    }

     }

     const persona1 = new Persona ('Luca, Rossi, 21, Empoli')
     const persona2 = new Persona ('Maria, bianchi, 32 , Torino')
     const persona3 = new Persona ('Luca, Bachini, 46 , Potenza')

     console.log(persona1)
