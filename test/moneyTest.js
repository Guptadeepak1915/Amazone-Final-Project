import {formatCurrency} from '../scripts/utils/money.js';

// basics cases
console.log('test Suite : format Currency');
console.log('convert cents into doller $');
if(formatCurrency(2095) ==='20.95'){
  console.log('passed')
}
else{
  console.log('failed')
}
console.log('works with zero ');
// Edge cases
if(formatCurrency(0)==='0.00'){
  console.log('passed')
}
else{
  console.log('failed')

}
console.log('work witho round ')
if(formatCurrency(2000.5)==='20.01'){
  console.log('pased');
}
else{
  console.log('failed')
}