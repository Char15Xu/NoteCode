import React from 'react';
import { Question, QuizMetadata } from './Data Structures';
import MarkdownTextView from './Components/MarkdownTextView';
import QuizView from './QuizView';
import quiz from './quizdesign.json'

const questions = [quiz]
class Demo extends React.Component {

    /* For testing */
    metadata: QuizMetadata = {
        quiz_title: "Test Quiz",
        quiz_subtitle: "You can use this quiz for debugging.",
        randomize_choice_order: false,
        randomize_question_order: false,
        time_allowed: null,
        attempts_allowed: null,
        sections: []
    }

    questions: Question[] = [
        {
            prompt: "Example multiple choice question",
            subtitle: null,
            question_type: "multiple_choice"
        }
    ]

    constructor(props: {}) {
        super(props);

        document.title = "Demo Page"
    }
    
    render() { 
        return <div style={{margin: 'max(30px, 6%)'}}>
            
            <h3>UrsaTech Quiz Interface Demo Page</h3>
            <MarkdownTextView rawText={'The goal of this project is to design and implement a **standalone quiz plugin** for UrsaTech’s online CS education platform. You may contact us at rui.zhou@ursatechnology.com.\n\nAs part of your starter code, we have provided a Markdown text view for rendering math equations (e.g. $O(\\cdot)$ notation), `code`, tables, and much more. When displaying quiz questions, assume that *all* text need to support Markdown unless specified otherwise.\n\n#### Example of block code: \n\n```swift\nimport Foundation\nprint("Hello World!")\n\n```'} />
            <MarkdownTextView rawText='When implementing code completion questions, you’ll want to modify our provided `MarkdownTextView` component so that it supports inserting blank text boxes into the code.' />
            
            <div style={{backgroundColor: '#f6f6f6', borderRadius: 10, padding: '20px'}}>
            <div className = "question section">
            <div className='question number'>
                    <span><MarkdownTextView rawText='**Question 1**' /> </span>
                </div>
            <div className='question content'>
            <div style={{padding: '10px', margin: '10px 0', border: '1px dashed lightgray'}}>{`This is where the question content will go.`}</div>
            </div>
            
                </div>
                <div className = "answer section">
                
                    <button><MarkdownTextView rawText='Answer 1' /></button>
                    <button><MarkdownTextView rawText='Answer 2' /></button>
                    <button><MarkdownTextView rawText='Answer 3' /></button>
                    <button><MarkdownTextView rawText='Answer 4' /></button>
                
                </div>
            </div>    
        </div>
    }
}
 
export default Demo;