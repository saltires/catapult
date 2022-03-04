/**
 * 问题描述：对于如下代码，请说出它编译不通过的原因，并对其做出修改，使代码能编译通过
 */
 type Fish = { swim: () => void };
 type Bird = { fly: () => void };
 declare function getSmallPet(): Fish | Bird;
 function isFish(pet: Fish | Bird): boolean {
   return (pet as Fish).swim !== undefined;
 }
 // ---cut---
 // Both calls to 'swim' and 'fly' are now okay.
 let pet = getSmallPet();
 
 if (isFish(pet)) {
   pet.swim();
 } else {
   pet.fly();
 }

 // isFish 函数的功能，如果仅仅从Javascript方面来说，isFish 确实能判断目标参数是否是Fish对象
// 但是Typescript 是js的超集，它独有的类型系统在进行类型收窄操作时，只能使用 typeof或者真实性判断if(x)等进行收窄操作
// 而对于 isFish 函数来说，如果仅仅返回boolean值，它是不具备类型收窄功能的
// 注意：类型收窄是指 从 string | number 这样更灵活的类型收窄为仅仅是 string 或者是 number
// 如果想让 isFish 具有类型收窄的功能，备注：（在Typescript中，也将这种具有类型收窄的操作符或者是函数称之为类型保护(type guard)）
// 可以让isFish 函数的返回值变为类型断言（type predicates），改动如下：
/**
 *
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
 * 
 */
// 类似于 pet is Fish 这样的语句，就是一个类型断言，这时，isFish 函数便具有了缩窄某个变量的类型的功能
