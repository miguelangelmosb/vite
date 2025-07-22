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

import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Card>
        <CardHeader>
            <Avatar>
              <AvatarImage src="/images/profile.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          <div className="text-left">
            <CardTitle>Miguel Mosquera</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <p>I am a software engineer passionate about learning, sharing knowledge, and collaborating in teams. I enjoy taking on new challenges, exploring emerging technologies, and contributing to collective growth, driven by curiosity and a constant desire to improve.</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-center space-x-4">
            <a href="https://www.facebook.com/hardrock80s/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="text-blue-600 hover:text-blue-800 w-6 h-6" />
            </a>
            <a href="https://x.com/miguelangelmos" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="text-blue-400 hover:text-blue-600 w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/miguelangelmosb/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="text-pink-500 hover:text-pink-700 w-6 h-6" />
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
export default App