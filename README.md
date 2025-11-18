Q-1: What are some differences between interfaces and types in TypeScript?
some differences between interfaces and types in TypeScript are:
1. Types support unions and intersections on the other hand interfaces does not support union expression. Example:
type Result = string | number
type Combined = { a: number } & { b: string }
2. Type can alias primitives and complex types. In contrast interface can not alias primitives. Example:
type ID = string | number
3. Only type works for mapped types. Example:
type ReadonlyObj<T> = {
  readonly [K in keyof T]: T[K]
}
4. Interfaces can be extended multiple times, on the other hand types cannot be re-declared

Q-2: What is the use of the keyof keyword in TypeScript? Provide an example.
keyof is an operator that takes an object type and produces a union of its keys as string (or numeric) literal types. An example of type is given below:
type Person = {
  name: string;
  age: number;
  isAdmin: boolean;
};

A type using keyOf is given below:
type PersonKeys = keyof Person;
The result is: "name" | "age" | "isAdmin"