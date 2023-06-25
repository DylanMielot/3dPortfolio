import { Html, useProgress } from '@react-three/drei'

function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <div className="relative w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
      style={{ width: "300px" }}>
      <div className="bg-blue-600 h-2.5 w-full rounded-full" style={{ width: progress + '%' }}></div>
      <div className='absolute top-5 left-[50%]'
        style={{ transform: "translateX(-50%)" }}> {progress.toFixed(1)}% loaded</div>
    </div>
  </Html>
}

export default Loader