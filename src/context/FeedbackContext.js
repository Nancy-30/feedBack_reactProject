import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setfeedback] = useState([
        // {
        //     id: 1,
        //     text: 'This item is from context 1',
        //     rating: 10
        // },
        // {
        //     id: 2,
        //     text: 'This item is from context 2',
        //     rating: 9
        // },
        // {
        //     id: 3,
        //     text: 'This item is from context 3',
        //     rating: 10
        // },
    ])

    const [FeedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        setfeedback([newFeedBack, ...feedback])
    }


    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setfeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = (id , updItem) =>{
        setfeedback(feedback.map((item)=> (item.id === id ? {...item , ...updItem} : item))
        )
    }

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            FeedbackEdit,
            deleteFeedback,
            addFeedBack,
            editFeedback,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext