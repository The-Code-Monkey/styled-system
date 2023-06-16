import {useRouter} from "next/navigation";

const Page = () => {
  const router = useRouter()

  return (
    <main>
      <h1>Style props for rapid UI development</h1>

      <button onClick={() => router.push('/getting-started')}>Documentation</button>
    </main>
  )
}

export default Page;