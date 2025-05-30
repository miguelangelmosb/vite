import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Card>
        <CardHeader>
          <div className="flex justify-center">
            <Avatar>
              <AvatarImage src="/images/profile.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-left">
            <CardTitle>Miguel Mosquera</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
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