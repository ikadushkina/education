/*
  Задача написать функцию baseExpect которая будет работать следующим образом
  Пример
  baseExpect(4).toBe(4) === true
  baseExpect(5).toBe(4) === false
  baseExpect(5).toBe.not(4) === true
  baseExpect(5).toBe.not(5) === false
  Примечание: Должно работать только с числами
 */

function baseExpect(a) {
    return {
        toBe: function (b) {
            if (typeof a === "number" && typeof b === "number")
                return (a === b);
        },
        // not: function () {
        //             return !b;
        //         }
        //     }
        // }
    }
}


window.baseExpect = baseExpect;

export default baseExpect;
