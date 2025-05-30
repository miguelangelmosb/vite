import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Card>
        <CardHeader>
          <CardTitle>Miguel Mosquera</CardTitle>
          <CardDescription>Software Engineer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>I am a software engineer passionate about learning, sharing knowledge, and collaborating in teams. I enjoy taking on new challenges, exploring emerging technologies, and contributing to collective growth, driven by curiosity and a constant desire to improve.</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}
export default App