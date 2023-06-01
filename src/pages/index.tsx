import Image from "next/image"
import { Inter } from "next/font/google"
import { Button, Center, Stack } from "@mantine/core"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Stack>
        <ion-button>Hello Ionic</ion-button>
        <Center>
          <Button>Hello Mantine</Button>
        </Center>
      </Stack>
    </div>
  )
}
