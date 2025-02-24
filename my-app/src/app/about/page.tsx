
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'

function page() {
    return (
        <div>
            <SignedOut>
                <SignUpButton>
                    <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Sign Up
                    </button>
                </SignUpButton>
            </SignedOut>

            <SignedIn>
                <SignOutButton>
                    <button className='bg-orange-400 hover:bg-red text-white font-bold py-2 px-4 rounded'>
                        Sign Out
                    </button>
                </SignOutButton>
            </SignedIn>
        </div>
    )
}

export default page
