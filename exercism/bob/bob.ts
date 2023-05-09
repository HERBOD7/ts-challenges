// https://exercism.org/tracks/typescript/exercises/bob/edit

// Your task is to determine what Bob will reply to someone when they say something to him or ask him a question.

// Bob only ever answers one of five things:
// "Sure." This is his response if you ask him a question, such as "How are you?" The convention used for questions is that it ends with a question mark.
// "Whoa, chill out!" This is his answer if you YELL AT HIM. The convention used for yelling is ALL CAPITAL LETTERS.
// "Calm down, I know what I'm doing!" This is what he says if you yell a question at him.
// "Fine. Be that way!" This is how he responds to silence. The convention used for silence is nothing, or various combinations of whitespace characters.
// "Whatever." This is what he answers to anything else.

// sample input: 'WHAT THE HELL WERE YOU THINKING?'
// sample output : Calm down, I know what I'm doing!

export function hey(message: string): string {
    message = message.trim();
    const isUpperCase = (input: string): boolean => {
      if(input == input.toUpperCase()) {
        return true;
      }
      return false;
    }
  
    const includeNumber = (input: string): boolean => {
      const regex = new RegExp(/\d/);
      return regex.test(input);
    }
  
    const includeChar = (input: string): boolean => {
      const regex = new RegExp(/[A-Z]/);
      return regex.test(input);
    }
  
    if(message.includes('?') && isUpperCase(message) && !includeNumber(message)) {
      return "Calm down, I know what I'm doing!";
    } else if (message[message.length - 1] === '?') {
      return 'Sure.';
    } else if (message.trim() === '') {
      return 'Fine. Be that way!';
    } else if (isUpperCase(message) && includeChar(message)) {
      return 'Whoa, chill out!';
    } else {
      return 'Whatever.';
    }
}
  