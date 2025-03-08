import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center justify-center my-2'>
        <SignIn />
    </div>
  
)
} 