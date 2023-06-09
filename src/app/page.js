import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-current">
        <div class="basis-3/5 flex-col flex-auto">
            <div class="relative w-20 h-20">
                <Image src="/favicon.ico" fill="true" style={{objectFit: "contain"}} />
            </div>
        </div>
          </main>
  )
}
