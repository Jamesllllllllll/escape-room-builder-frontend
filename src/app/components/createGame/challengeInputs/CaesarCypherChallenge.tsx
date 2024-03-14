import Input from '../../ui/Input';
import { useState } from 'react';

export default function CaesarCypherChallenge({
  index,
  clue,
  description,
  answer,
  onClueChange,
  onDescriptionChange,
  onAnswerChange,
  challengeType,
}: {
  index: number;
  clue: string | string[] | undefined;
  description: string | undefined;
  answer: string | undefined;
  onClueChange(e: any, index: number | undefined): void;
  onDescriptionChange(e: any, index: number | undefined): void;
  onAnswerChange(e: any, index: number | undefined): void;
  challengeType: string;
}) {
  const [encryptedClue, setEncryptedClue] = useState<string>('');
  const encryptCaesarCypher = (answer: string | undefined) => {
    // leetcode mode ON
    let originalWord: string[];
    let encryptedWord: string[] = [];

    if (typeof answer === 'string') {
      originalWord = Array.from(answer);
      const randomSeed = Math.floor(Math.random() * 25) + 1;
      originalWord.forEach((letter) => {
        let newLetter = letter.charCodeAt(0) + randomSeed;
        if (newLetter > 122) {
          newLetter = newLetter - 26;
        }
        encryptedWord.push(String.fromCharCode(newLetter));
        setEncryptedClue(encryptedWord.toString());
      });
    }
    return encryptedWord;
  };

  const onEncrypt = (e: any) => {
    e.preventDefault();
    clue = encryptCaesarCypher(answer).toString().replaceAll(',', '');
    onClueChange(clue, index);
  };

  return (
    <div className='border-2 border-black p-8 rounded-xl bg-white/50' key={`${challengeType}-${index}`}>
      <h3 className='mb-6'>New {challengeType} Challenge</h3>
      <label htmlFor={`challenge-description-${index}`} className=''>
        Describe the word to be decrypted
      </label>
      <Input
        fieldType={`challenge-description-${index}`}
        value={description}
        placeholder='Describe the word to be decrypted'
        onChange={onDescriptionChange}
        key={`challenge-description-${index}`}
      />
      <label htmlFor={`challenge-answer-${index}`}>Answer</label>
      <Input
        fieldType={`challenge-answer-${index}`}
        value={answer}
        placeholder='Answer'
        onChange={onAnswerChange}
        key={`challenge-answer-${index}`}
      />
      <button onClick={onEncrypt}>
        <span>Encrypt</span>
      </button>
      <p>Encrypted clue:</p>
      <Input
        fieldType={`challenge-caesar-cypher-clue-${index}`}
        value={encryptedClue.toString().replaceAll(',', '')}
        onChange={onClueChange}
        placeholder=''
        key={`challenge-caesar-cypher-clue-${index}`}
        disabled
      />
    </div>
  );
}