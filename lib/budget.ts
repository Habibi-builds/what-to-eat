export type Expense={id:string;name:string;amount:number;category:string;date:string};
export const dateKey=(d=new Date())=>new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Lagos',year:'numeric',month:'2-digit',day:'2-digit'}).format(d);
export const monthKey=(day=dateKey())=>day.slice(0,7);
export const money=(n:number)=>new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(n);
export function budgetInfo(budget:number,expenses:Expense[],day=dateKey()) {const [y,m,d]=day.split('-').map(Number);const days=new Date(y,m,0).getDate();const spent=expenses.filter(e=>e.date.startsWith(day.slice(0,7))).reduce((s,e)=>s+e.amount,0);const remaining=Math.max(0,budget-spent);const left=days-d+1;return {spent,remaining,left,daily:remaining/left,weekly:Math.min(remaining,remaining/left*Math.min(7,left)),average:spent/d,progress:Math.min(100,spent/budget*100)};}
