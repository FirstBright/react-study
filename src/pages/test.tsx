import { getNow, ten } from "@/utils/temp"

export default function Home() {
    const now = getNow()
    console.log("🚀 ~ Home ~ now:", now)
    console.log("🚀 ~ ten:", ten)

    return <p>test page</p>
}
