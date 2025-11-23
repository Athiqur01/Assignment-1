Q-1: What are some differences between interfaces and types in TypeScript?
TypeScript-এ interface এবং type এর মধ্যে কিছু পার্থক্য হলো:
1. Types ইউনিয়ন এবং ইন্টারসেকশন সাপোর্ট করে, অন্যদিকে interfaces ইউনিয়ন এক্সপ্রেশন সাপোর্ট করে না।
উদাহরণঃ
type Result = string | number
type Combined = { a: number } & { b: string }
2. Type প্রিমিটিভ এবং কমপ্লেক্স উভয় ধরনের টাইপকে অ্যালিয়াস করতে পারে।
বিপরীতে, interface প্রিমিটিভকে অ্যালিয়াস করতে পারে না।
উদাহরণ:
type ID = string | number
3. শুধুমাত্র type ব্যবহার করে mapped type তৈরি করা যায়।
উদাহরণ:
type ReadonlyObj<T> = {
  readonly [K in keyof T]: T[K]
}
4. Interface একাধিকবার extend করা যায়, অন্যদিকে type পুনরায় declare করা যায় না।
Q-2: What is the use of the keyof keyword in TypeScript? Provide an example.
keyof একটি অপারেটর যা কোনো অবজেক্ট টাইপ গ্রহণ করে এবং তার সমস্ত key–কে string (বা numeric) literal টাইপের একটি union হিসেবে তৈরি করে। নিচে একটি টাইপের উদাহরণ দেওয়া হলো:
type Person = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type PersonKeys = keyof Person;
The result is: "name" | "age" | "isAdmin"