// mobile number validation regexp
export const getMobileNumber = (mobileNumber) => {
    const mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
    const junkReg = /[^\d]/gi;
    const persinNum = [
      /۰/gi,
      /۱/gi,
      /۲/gi,
      /۳/gi,
      /۴/gi,
      /۵/gi,
      /۶/gi,
      /۷/gi,
      /۸/gi,
      /۹/gi,
    ];
    const num2en = (str) => {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persinNum[i], i);
      }
      return str;
    };
    let mobiles = num2en(mobileNumber + "").match(mobileReg) || [];
    mobiles.forEach(function (value, index, arr) {
      arr[index] = value.replace(junkReg, "");
      arr[index][0] === "0" || (arr[index] = "0" + arr[index]);
    });
    return mobiles;
  };

  export const persian2EnglishNumber = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

  