import {type Expense} from './budget.ts';
export const dailyPaymentId=(day:string)=>`daily-meals:${day}`;
export function recordDailyPayment(expenses:Expense[],day:string,amount:number,budget:number):Expense[]{
 if(!Number.isFinite(amount)||amount<0||!Number.isInteger(amount))throw new Error('Enter a whole-naira amount of zero or more.');
 const id=dailyPaymentId(day),others=expenses.filter(e=>e.id!==id);
 const spent=others.filter(e=>e.date.startsWith(day.slice(0,7))).reduce((n,e)=>n+e.amount,0);
 if(amount>Math.max(0,budget-spent))throw new Error('This payment exceeds your remaining monthly balance.');
 return [...others,{id,name:'Daily meals — '+day,amount,category:'Food purchases',date:day}];
}
