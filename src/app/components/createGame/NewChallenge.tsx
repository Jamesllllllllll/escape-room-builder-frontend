import TriviaChallenge from './challengeInputs/TriviaChallenge';
import CaesarCypherChallenge from './challengeInputs/CaesarCypherChallenge';
import WordScrambleChallenge from './challengeInputs/WordScrambleChallenge';
import { Challenge } from '@/app/types/types';

export default function NewChallenge({
  index,
  clue,
  description,
  answer,
  onClueChange,
  onDescriptionChange,
  onAnswerChange,
  onRemove,
  challenge,
  dataTest
}: {
  index: number;
  clue: string | string[] | undefined;
  description: string | undefined;
  answer: string | undefined;
  onClueChange(e: any, index: number | undefined): void;
  onDescriptionChange(e: any, index: number | undefined): void;
  onAnswerChange(e: any, index: number | undefined): void;
  onRemove(e: any): void;
  challenge: Challenge;
  dataTest: string;
}) {
  switch (challenge.type) {
    case 'trivia': {
      return (
        <TriviaChallenge
          key={challenge.id}
          challengeType={challenge.type}
          clue={clue}
          description={description}
          answer={answer}
          onClueChange={onClueChange}
          onDescriptionChange={onDescriptionChange}
          onAnswerChange={onAnswerChange}
          onRemove={onRemove}
          index={index}
          dataTest={dataTest}
        />
      );
    }
    case 'caesar cypher': {
      return (
        <CaesarCypherChallenge
          key={challenge.id}
          challengeType={challenge.type}
          clue={clue}
          description={description}
          answer={answer}
          onClueChange={onClueChange}
          onDescriptionChange={onDescriptionChange}
          onAnswerChange={onAnswerChange}
          onRemove={onRemove}
          index={index}
          dataTest={dataTest}
        />
      );
    }
    case 'word scramble': {
      return (
        <WordScrambleChallenge
          key={challenge.id}
          challengeType={challenge.type}
          clue={clue}
          description={description}
          answer={answer}
          onClueChange={onClueChange}
          onDescriptionChange={onDescriptionChange}
          onAnswerChange={onAnswerChange}
          onRemove={onRemove}
          index={index}
          dataTest={dataTest}
        />
      );
    }
    default: {
      return <p>Challenge type not found</p>;
    }
  }
}
