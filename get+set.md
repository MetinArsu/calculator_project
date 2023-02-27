### 1.) Nachteil des Aktuellen Codes:
- 1.) Name kann außerhalb des Objects nicht verändert werden
- 2.) Method kann nicht als Property ausgeführt werden () benötigt.

### 2.) Lösung: Get & Set
- Getter und Setter sind spezielle Methoden in JavaScript-Objekten.
- Mit Getters kann auf Eigenschaften (Properties) in Objekten zugegriffen werden.
- Mit Setters können Eigenschaften in Objekten verändert werden.

## 3.) Code: Get

> In diesem Code ist get und set etwas Overkill aber für Testzwecke ausreichend.

FALSCH:

```
get fullName() {
    return `${this.first} ${this.last}`;
  }
const user = new Person("Metin", "Arsu");
console.log(user.fullName());
```
- Keyword = get
- Fehlercode bei Klammern, da Get als Property und nicht als Method angesprochen wird.
- "fullName is not a function"

RICHTIG:
```
get fullName() {
    return `${this.first} ${this.last}`;
  }
const user = new Person("Metin", "Arsu");
console.log(user.fullName);
```
> wir können hier jetzt den Vornamen ändern:
```
user.first = "Christian"
console.log(user.fullName)
```

## 4.) Code: Set
>fullName soll geupdated werden. Der Setter wird mit dem Keyword “set” gesetzt und braucht einen Parameter. Der Parameter greift rechts vom folgenden Zuweisungsoperator. Diesesmal basteln wir Herbert.

```
  set fullName(newName){
    console.log("You changed a name!")
    console.log(newName)
}

user.fullName = "Herbert Nikolajewski"

console.log(user.fullName); // Metin
console.log(user.fullName); // Metin
```

> Lass uns Herby als Array abrufen:

```
console.log(newName.split(" "));
```
> Jetzt destructurieren wir Ihn mal
```
const [first, last] = newName.split(" ");
this.first = first;
this.last = last;
```
> Lass uns Herby zu Christian updaten:
```
user.fullName = "Herbert Nikolajevski"
console.log(user.fullName)
```
> Dem Setter können wir einer Logik hinzufügen, zb das er einen Fehler ausspuckt, wenn der String leer ist.

```
set fullName(newName){
    if (!newName) {
        return "Bitte tragen Sie einen gültigen namen ein"
    }
}
user.fullName = ""
console.log(user.fullName)
```

## Warum und was?
- Wir können Logik hinzufügen wie zum beispiel einen Counter.
- Wie sinnig das ist, ist mal dahin gestellt.
```
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;

    this.count = 0;
  }
get fullName() {
    this.count += 1;
    return `${this.first} ${this.last}`;
  }

console.log(user.count)
```