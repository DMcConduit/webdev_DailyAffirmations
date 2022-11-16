var affirmations = [
'I am successful, confident, powerful, and strong.',
'I am getting better and better every day.',
'All I need is within me right now.',
'I am an unstoppable force of nature.',
'I am a living, breathing example of motivation.',
'I am having a positive and inspiring impact on the people I come into contact with.',
'I’m rising above the thoughts that are trying to make me angry or afraid.',
'Today is a phenomenal day.',
'You a paper chaser, you got your block on fire / Remaining a G until the moment you expire / You know what it is you make nothin’ out of somethin’ / You handle your biz and don’t be cryin’ and sufferin.- Juvenile',
'I am not pushed by my problems; I am led by my dreams.',
'I am grateful for everything I have in my life.',
'I can be whatever I want to be.',
'I am not defined my by past; I am driven by my future.',
'I use obstacles to motivate me to learn and grow.',
'Today will be a productive day.',
'Happiness is a choice, and today I choose to be happy.',
'Be the woman you would look up to.',
'Dont stop until you are proud.',
'Make it happen girl. Shock everyone.',
'It is ok for me to have everything I want.',
'Taking care of yourself is productive.',
'Never give up. Great things take time.',
'I never lose. I either win or learn. - Nelson Mandela',
'Sky is the limit and you know that you keep on, just keep on pressin on. Sky is the limit and you know that you can have what you want, be what you want. -Notorious B.I.G.',
'But please don’t cry, dry your eyes, never let up. Forgive but don’t forget, girl keep your head up. - Tupac',
'Put me anywhere on God’s green earth, I’ll triple my worth. Motherf—–. I, will, not, lose. - Jay Z',
'Dont stop, get it, get it - Uncle Luke'
]

function newAffirmation(){
  var randomNumber = Math.floor(Math.random() * (affirmations.length));
  document.getElementById('affirmation-display').innerHTML = affirmations[randomNumber];
}
