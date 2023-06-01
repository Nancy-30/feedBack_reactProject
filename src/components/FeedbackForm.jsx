import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {
    const [text , setText] = useState('')
    const [rating , setrating] = useState(10)
    const [btnDisabled , setbtnDisabled] = useState(true)
    const [message , setmsg] = useState('')

    const handleTextChange = (e)=>{
        if(text === ''){
            setbtnDisabled(true)
            setmsg(null)
        } else if(text!=='' && text.trim().length<=10){
            setmsg('Text must be atleast 10 characters')
            setbtnDisabled(true)
        } else{
            setmsg(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(text.trim().length > 10 ){
            const newFeedBack = {
                text,
                rating
            }

            handleAdd(newFeedBack)
            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>

            <RatingSelect select = {(rating)=>setrating(rating)} />
            <div className="input-group">
                <input 
                onChange = {handleTextChange} 
                type="text" 
                placeholder="Write a review"
                value = {text}
                />

                <Button type="submit" isDisabled = {btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
 