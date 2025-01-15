import { useState } from 'react';
import '../index.css';

const GenZTranslator = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [newWord, setNewWord] = useState('');
    const [newTranslation, setNewTranslation] = useState('');
    const [translations, setTranslations] = useState({
        'how are you': 'how ya doin?',
        'what is up': 'wassup',
        'i am': "I'm",
        'you are': 'ya',
        'cool': 'lit',
        'very good': 'on fleek',
        'great': 'slaps',
        'friend': 'homie',
        'yes': 'bet',
        'no': 'nah',
        'what': 'say less?',
        'crazy': 'goated',
        'wow': 'no way',
        'goodbye': 'later skater',
        'hello': 'yo fam',
        'party': 'rager',
        'awesome': 'dope',
        'funny': 'hilarious af',
        'amazing': 'iconic',
        'boring': 'mid',
        'tired': 'dead',
        'food': 'grub',
        'money': 'bread',
        'love': 'simping',
        'angry': 'big mad',
        'excited': 'hyped',
    });

    const translateText = () => {
        let translated = inputText.toLowerCase();

        // Sort dictionary by key length to prioritize phrases
        Object.entries(translations)
            .sort((a, b) => b[0].length - a[0].length)
            .forEach(([standard, genZ]) => {
                translated = translated.replace(new RegExp(`\\b${standard}\\b`, 'gi'), genZ);
            });

        // Capitalize sentences
        translated = translated
            .split('. ')
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
            .join('. ');

        setTranslatedText(translated);
    };

    return (
        <div className="translator-container">
            <h1 className="title">Gen Z Translator</h1>
            <div className="form-group">
                <label htmlFor="regularText" className="label">Regular Text</label>
                <textarea
                    id="regularText"
                    className="textarea"
                    rows="4"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your text here..."
                />
            </div>

            <button
                onClick={translateText}
                className="translate-button"
            >
                Translate to Gen Z
            </button>

            <div className="form-group" style={{ marginTop: '20px' }}>
                <label htmlFor="translatedText" className="label">Gen Z Translation</label>
                <div className="output">
                    {translatedText || 'Translation will appear here...'}
                </div>
            </div>

            <div className="form-group custom-translation">
                <h2 className="section-title">Add Custom Translation</h2>
                <label htmlFor="newWord" className="label">Word/Phrase</label>
                <input
                    id="newWord"
                    type="text"
                    placeholder="Word or phrase to translate"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    className="input"
                />
                <label htmlFor="newTranslation" className="label">Gen Z Translation</label>
                <input
                    id="newTranslation"
                    type="text"
                    placeholder="Gen Z translation"
                    value={newTranslation}
                    onChange={(e) => setNewTranslation(e.target.value)}
                    className="input"
                />
                <button
                    onClick={() => {
                        setTranslations({ ...translations, [newWord.toLowerCase()]: newTranslation.toLowerCase() });
                        setNewWord('');
                        setNewTranslation('');
                    }}
                    className="add-translation-button"
                >
                    Add Translation
                </button>
            </div>
        </div>
    );
};

export default GenZTranslator;
