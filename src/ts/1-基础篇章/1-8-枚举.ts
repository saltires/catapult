/**
 * 问题描述：请分别定义枚举 A 和枚举 B，二者的意义要求都一致，代表一个星期的七天，从周一都周末，
 * 但是要求枚举 A 的值为数值，而枚举 B 的值为字符串格式的英文（例如，周一为 monday）
 */
enum A {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saterday,
  Sunday
}

enum B {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saterday = 'Saterday',
  Sunday = 'Sunday'
}

export {}