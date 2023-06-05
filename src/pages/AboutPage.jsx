import { Link } from "react-router-dom"
import Card from "../components/shared/Card"
 
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>Version : 1.0.0</p>

            <p>
                <Link href = "/">Back to home</Link>
            </p>
        </div>
        
    </Card>
  )
}

export default AboutPage
