import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const QuestionnaireMRI = () => {
  const location = useLocation();
  const { ageGroup } = location.state || {};

  const questionnaireData = useMemo(() => ({
    toddler: {
      questionnaire: [
        'Does your child look at you when you call his/her name?',
        'How easy is it for you to get eye contact with your child?',
        'Does your child point to indicate that s/he wants something? (e.g., a toy that is out of reach)',
        'Does your child point to share interest with you? (e.g., pointing at an interesting sight)',
        'Does your child pretend? (e.g., care for dolls, talk on a toy phone)',
        'Does your child follow where you’re looking?',
        'If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g., stroking hair, hugging them)',
        'Would you describe your child’s first words as:',
        'Does your child use simple gestures? (e.g., wave goodbye)',
        'Does your child stare at nothing with no apparent purpose?',
      ],
    },
    child: {
      questionnaire: [
        'How easy is it for you to get eye contact with your child?',
        'In a social group, s/he can easily keep track of several different people’s conversations',
        'S/he finds it easy to go back and forth between different activities',
        'S/he doesn’t know how to keep a conversation going with his/her peers',
        'S/he is good at social chit-chat',
        'When s/he was in preschool, s/he used to enjoy playing games involving pretending with other children',
        'S/he finds it easy to work out what someone is thinking or feeling just by looking at their face',
        'S/he finds it hard to make new friends',
      ],
    },
    adolescent: {
      questionnaire: [
        'In a social group, s/he can easily keep track of several different people’s conversations',
        'If there is an interruption, s/he can switch back to what s/he was doing very quickly',
        'I find it easy to read between the lines when someone is talking to me',
        'I know how to tell if someone listening to me is getting bored',
        'When s/he was younger, s/he used to enjoy playing games involving pretending with other children',
        'S/he finds social situations easy',
        'S/he finds it difficult to imagine what it would be like to be someone else',
        'S/he finds it easy to work out what someone is thinking or feeling just by looking at their face',
        'S/he finds it hard to make new friends',
        'I find it difficult to work out people’s intentions',
      ],
    },
    adult: {
      questionnaire: [
        'S/he usually concentrates more on the whole picture, rather than the small detail',
        'I find it easy to do more than one thing at once',
        'I find it easy to read between the lines when someone is talking to me',
        'If there is an interruption, s/he can switch back to what s/he was doing very quickly',
        'I find it easy to tell if someone else is interested or bored with what I am saying',
        'I know how to tell if someone listening to me is getting bored',
        'I like to collect information about categories of things (e.g., types of car, types of bird, types of train, types of plant, etc.)',
        'I find it easy to work out what someone is thinking or feeling just by looking at their face',
        'I find social situations easy',
        'I find it difficult to work out people’s intentions',
      ],
    },
  }), []);

  const [answers, setAnswers] = useState({
    age: '',
    gender: '',
    jaundice: '',
    relation: '',
    questionnaire: {}, // Store responses for ageGroup-specific questions
    facialImage: null, // Store responses for facial image
    video: null, // Store responses for video
  });

  useEffect(() => {
    // Initialize answers with default values
    setAnswers({
      age: '',
      gender: '',
      jaundice: '',
      relation: '',
      questionnaire: questionnaireData[ageGroup]?.questionnaire.reduce((acc, question) => {
        acc[question] = 'No';
        return acc;
      }, {}),
      facialImage: null,
      video: null,
    });
  }, [ageGroup, questionnaireData]);

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      questionnaire: {
        ...prevAnswers.questionnaire,
        [question]: answer,
      },
    }));
  };

  const handleFileUpload = (event, fileType) => {
    // Handle file upload logic here
    const file = event.target.files[0];
    console.log(`Uploaded ${fileType} File:`, file);
    
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [fileType]: file,
    }));
  };

  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Answers:', answers);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Fill in the details</h2>
      <p>Age Group: {ageGroup}</p>

      <form onSubmit={handleSubmit}>
        <ul className="list-unstyled">
          {/* AgeGroup-specific questions */}
          {questionnaireData[ageGroup]?.questionnaire.map((question, index) => (
            <li key={index} className="mb-3">
              {question}
              <select
                className="form-select mt-2"
                onChange={(e) => handleAnswerChange(question, e.target.value)}
                value={answers.questionnaire[question]}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </li>
          ))}
        </ul>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={answers.age}
            onChange={(e) => setAnswers((prevAnswers) => ({ ...prevAnswers, age: e.target.value }))}
            required
          />

          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            className="form-select"
            id="gender"
            value={answers.gender}
            onChange={(e) => setAnswers((prevAnswers) => ({ ...prevAnswers, gender: e.target.value }))}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label htmlFor="jaundice" className="form-label">
            Born with Jaundice:
          </label>
          <select
            className="form-select"
            id="jaundice"
            value={answers.jaundice}
            onChange={(e) => setAnswers((prevAnswers) => ({ ...prevAnswers, jaundice: e.target.value }))}
            required
          >
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label htmlFor="relation" className="form-label">
            Relation with Child:
          </label>
          <select
            className="form-select"
            id="relation"
            value={answers.relation}
            onChange={(e) => setAnswers((prevAnswers) => ({ ...prevAnswers, relation: e.target.value }))}
            required
          >
            <option value="">Select Relation</option>
            <option value="Self">Self</option>
            <option value="Parent">Parent</option>
            <option value="Relative">Relative</option>
            <option value="Healthcare Professional">Healthcare Professional</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mt-4">
          {/* Facial Image upload */}
          <label>
            Upload Facial Image:
            <input type="file" onChange={(e) => handleFileUpload(e, 'facialImage')} required />
          </label>
        </div>

        <div className="mt-4">
          {/* Video upload */}
          <label>
            Upload Video:
            <input type="file" onChange={(e) => handleFileUpload(e, 'video')} required />
          </label>
        </div>
        
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionnaireMRI;
