import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='w-full min-h-screen flex justify-center items-center'>
			<Button onClick={() => setCount((count) => count + 1)}>
				Welcome: {count}
			</Button>
		</div>
	)
}

export default App
