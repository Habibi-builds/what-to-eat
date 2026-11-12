'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowDown,Shuffle,Sparkles} from 'lucide-react';
import {money} from '../lib/budget';
export type SpinOption={ids:(string|null)[];label:string;total:number};
export default function MealSpinner({options,onSelect,allowance}:{options:SpinOption[];onSelect:(option:SpinOption)=>void;allowance:number}){
 const [spinning,setSpinning]=useState(false),[rotation,setRotation]=useState(0),[winner,setWinner]=useState<SpinOption|null>(null);
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null),locked=useRef(false),callback=useRef(onSelect);
 callback.current=onSelect;
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);
 function spin(){
  if(locked.current||!options.length)return;
  locked.current=true;setSpinning(true);setWinner(null);
  const index=Math.floor(crypto.getRandomValues(new Uint32Array(1))[0]/4294967296*options.length),choice=options[index];
  const angle=360-(index+.5)*360/options.length;
  setRotation(previous=>previous+(360-previous%360)%360+360*5+angle);
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  timer.current=setTimeout(()=>{locked.current=false;setSpinning(false);setWinner(choice);callback.current(choice)},reduced?100:4200);
 }
 const colors=['#234e3e','#e8c797','#789177','#f0dfbf','#b77752','#dce5ce','#446f58','#ebbc8c'];
 return <section className="spin-panel" aria-labelledby="spin-title"><div className="spin-copy"><div className="eyebrow"><Sparkles size={13}/> A LITTLE FUN BEFORE YOU COOK</div><h2 id="spin-title">Can’t decide? Give it a spin.</h2><p>Let the wheel pick today’s breakfast, lunch and dinner. Every option fits your {money(allowance)} daily allowance.</p><button className="button primary spin-button" onClick={spin} disabled={spinning||!options.length}><Shuffle size={17}/>{spinning?'Finding your daily meals…':winner?'Spin again':'Spin for today’s meals'}</button><div className="spin-status" role="status" aria-live="polite">{spinning?'Around it goes… your next meal is almost here.':winner?<><strong>Your daily plan is ready!</strong><span>{winner.label} leads the way · {money(winner.total)} estimated for the day.</span><a href="#daily-plan">See your three meals <ArrowDown size={13}/></a></>:options.length?'The wheel shows the main meal in each possible daily plan.':'No meal fits this allowance yet. Review your budget or local prices.'}</div></div><div className="wheel-stage" aria-hidden="true"><span className="wheel-pointer"/><div className="food-wheel" style={{transform:`rotate(${rotation}deg)`,transitionDuration:spinning?'4.2s':'0s',background:options.length?`conic-gradient(${options.map((_,i)=>`${colors[i%colors.length]} ${i*360/options.length}deg ${(i+1)*360/options.length}deg`).join(',')})`:'#dce5ce'}}><svg viewBox="0 0 300 300">{options.map((o,i)=>{const angle=(i+.5)*360/options.length;return <g key={i} transform={`rotate(${angle},150,150)`}><text x="150" y="53" textAnchor="middle" fill={[0,2,4,6].includes(i)?'#fffaf0':'#35513b'} fontSize="10" fontWeight="600">{o.label.length>20?o.label.slice(0,18)+'…':o.label}</text></g>})}</svg><div className="wheel-hub"><span>what<br/>to eat?</span><Sparkles size={17}/></div></div><span className="wheel-caption">GOOD FOOD IS A SPIN AWAY</span></div></section>
}
