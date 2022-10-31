// Use this file to implement the quiz view.

import React from 'react';
import MarkdownTextView from './Components/MarkdownTextView';
import { Question, QuizMetadata } from './Data Structures';
import './QuizView.css'
import './quizdesign.json'

interface QuizViewProps {
    metadata: QuizMetadata
    questions: Question[]
}
 
interface QuizViewState {
    // Gives the unix timestamp of the user's starting time.
    quizStartTime?: number

    /* Define more state variables as needed */
}
 
class QuizView extends React.Component<QuizViewProps, QuizViewState> {
    constructor(props: QuizViewProps) {
        super(props);
        this.state = {
            
        };
    }
    render() {

        // Here is an example of how you can insert a variable number of elements into a page
        let questions: JSX.Element[] = []
    
        return (
            <div className='quiz_container'>
                <h2 className='quiz-title'><MarkdownTextView rawText={this.props.metadata.quiz_title} /></h2>
                <MarkdownTextView rawText={this.props.metadata.quiz_subtitle || undefined} />
                
                <div className='question_number'>
                    <span><MarkdownTextView rawText='**Question 1**' /> </span>
                </div>

                <div className='single_choice'>
                    <h3 className='question-title'>Which of the following choices is the capital of California?</h3>
                    <p className='single-choice-indicator'>Select The Best Choice From The Following Options</p>
                        <div className = "question_content">

                            <input type="radio" name="langs" className = 'single-box' value='San Francisco' id='single-check-1'/> 
                            <label className='single' htmlFor='single-check-1'><span>San Francisco</span></label>
                        
                            <input type="radio" name="langs" className = 'single-box' value='Los Angeles' id='single-check-2'/>
                            <label className='single' htmlFor='single-check-2'><span>Los Angeles</span></label>
                            
                            <input type="radio" name="langs" className = 'single-box' value='Las Vegas' id='single-check-3'/>
                            <label className='single' htmlFor='single-check-3'><span>Las Vegas</span></label>

                            <input type="radio" name="langs" className = 'single-box' value='Sacramento' id='single-check-4'/> 
                            <label className='single' htmlFor='single-check-4'><span>Sacramento</span></label>

                        </div>
                    <button className="button-singlechoice-submit">Submit</button>
                    
                    {questions}
                </div>
            </div>

        )
    }
}
 
export default QuizView;