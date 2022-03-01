"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 问题描述：请分别定义枚举 A 和枚举 B，二者的意义要求都一致，代表一个星期的七天，从周一都周末，
 * 但是要求枚举 A 的值为数值，而枚举 B 的值为字符串格式的英文（例如，周一为 monday）
 */
var A;
(function (A) {
    A[A["Monday"] = 0] = "Monday";
    A[A["Tuesday"] = 1] = "Tuesday";
    A[A["Wednesday"] = 2] = "Wednesday";
    A[A["Thursday"] = 3] = "Thursday";
    A[A["Friday"] = 4] = "Friday";
    A[A["Saterday"] = 5] = "Saterday";
    A[A["Sunday"] = 6] = "Sunday";
})(A || (A = {}));
var B;
(function (B) {
    B["Monday"] = "Monday";
    B["Tuesday"] = "Tuesday";
    B["Wednesday"] = "Wednesday";
    B["Thursday"] = "Thursday";
    B["Friday"] = "Friday";
    B["Saterday"] = "Saterday";
    B["Sunday"] = "Sunday";
})(B || (B = {}));
