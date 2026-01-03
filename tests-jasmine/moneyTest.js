import {formatCurrency} from '../scripts/utils/money.js';
import { renderPaymentSummary } from '../scripts/checkout/paymentSummary.js';

describe('test Suite : Format Currency',()=>{ // in jasmine to create a test suite use describe() function 
  it('Convert Cents Into $(Doller)',()=>{
    expect(formatCurrency(2095)).toEqual('20.95');
  });
  it('Works With 0',function(){
    expect(formatCurrency(0)).toEqual('0.00');
  });
  it('Work With Rounds , rounds up with nearest cents',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01')
  });
});

// describe('test Suite: Payment Summary ',()=>{
//   it('productPriceCents',()=>{
//     expect()
//   })
// })

