import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'What to Eat? — A little planning. Better eating.', description: 'Your personal Nigerian meal planner, kitchen companion and feeding budget.' };
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
