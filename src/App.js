import React, { useEffect, useState } from 'react'
import PatternIcon_Desktop from './images/pattern-divider-desktop.svg'
import PatternIcon_Mobile from './images/pattern-divider-mobile.svg'
import DiceIcon from './components/DiceIcon/DiceIcon'
import './styles/App.css'

// Didnt create a fetch() but just copied some quotes data to my file
const quotesData = [
  {
    "q": "A man who acquires the ability to take full possession of his own mind may take possession of anything else to which he is justly entitled.",
    "a": "Andrew Carnegie",
    "c": "139",
    "h": "<blockquote>&ldquo;A man who acquires the ability to take full possession of his own mind may take possession of anything else to which he is justly entitled.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>"
  },
  {
    "q": "Our life is what our thoughts make it. A man will find that as he alters his thoughts toward things and other people, things and other people will alter towards him.",
    "a": "James Allen",
    "c": "165",
    "h": "<blockquote>&ldquo;Our life is what our thoughts make it. A man will find that as he alters his thoughts toward things and other people, things and other people will alter towards him.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"
  },
  {
    "q": "I begin with an idea and then it becomes something else.",
    "a": "Pablo Picasso",
    "c": "56",
    "h": "<blockquote>&ldquo;I begin with an idea and then it becomes something else.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
  },
  {
    "q": "The roots of education are bitter, but the fruit is sweet.",
    "a": "Aristotle",
    "c": "58",
    "h": "<blockquote>&ldquo;The roots of education are bitter, but the fruit is sweet.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
  },
  {
    "q": "Your mind will make you rich or poor, depending on the use you put to it.",
    "a": "Brian Tracy",
    "c": "73",
    "h": "<blockquote>&ldquo;Your mind will make you rich or poor, depending on the use you put to it.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "Leadership is solving problems",
    "a": "Colin Powell",
    "c": "30",
    "h": "<blockquote>&ldquo;Leadership is solving problems&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>"
  },
  {
    "q": "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.",
    "a": "Ronald Reagan",
    "c": "89",
    "h": "<blockquote>&ldquo;Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.&rdquo; &mdash; <footer>Ronald Reagan</footer></blockquote>"
  },
  {
    "q": "It matters not who you love, where you love, why you love, when you love or how you love, it matters only that you love.",
    "a": "John Lennon",
    "c": "120",
    "h": "<blockquote>&ldquo;It matters not who you love, where you love, why you love, when you love or how you love, it matters only that you love.&rdquo; &mdash; <footer>John Lennon</footer></blockquote>"
  },
  {
    "q": "Your conscience is the measure of the honesty of your selfishness. Listen to it carefully.",
    "a": "Richard Bach",
    "c": "90",
    "h": "<blockquote>&ldquo;Your conscience is the measure of the honesty of your selfishness. Listen to it carefully.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
  },
  {
    "q": "The dream is free, but the hustle is sold separately.",
    "a": "Steve Harvey",
    "c": "53",
    "h": "<blockquote>&ldquo;The dream is free, but the hustle is sold separately.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>"
  },
  {
    "q": "Stuff your eyes with wonder... live as if you'd drop dead in ten seconds. See the world. It's more fantastic than any dream made or paid for in factories.",
    "a": "Ray Bradbury",
    "c": "154",
    "h": "<blockquote>&ldquo;Stuff your eyes with wonder... live as if you'd drop dead in ten seconds. See the world. It's more fantastic than any dream made or paid for in factories.&rdquo; &mdash; <footer>Ray Bradbury</footer></blockquote>"
  },
  {
    "q": "Blessed is he who expects nothing, for he shall never be disappointed.",
    "a": "Alexander Pope",
    "c": "70",
    "h": "<blockquote>&ldquo;Blessed is he who expects nothing, for he shall never be disappointed.&rdquo; &mdash; <footer>Alexander Pope</footer></blockquote>"
  },
  {
    "q": "If you try to micromanage yourself all you're going to do is make yourself miserable.",
    "a": "Naval Ravikant",
    "c": "85",
    "h": "<blockquote>&ldquo;If you try to micromanage yourself all you're going to do is make yourself miserable.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>"
  },
  {
    "q": "The greatest discovery of all time is that a person can change their future by merely changing their attitude.",
    "a": "Oprah Winfrey",
    "c": "110",
    "h": "<blockquote>&ldquo;The greatest discovery of all time is that a person can change their future by merely changing their attitude.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
  },
  {
    "q": "Remember we're all in this alone.",
    "a": "Lily Tomlin",
    "c": "33",
    "h": "<blockquote>&ldquo;Remember we're all in this alone.&rdquo; &mdash; <footer>Lily Tomlin</footer></blockquote>"
  },
  {
    "q": "The key to success is action.",
    "a": "Brian Tracy",
    "c": "29",
    "h": "<blockquote>&ldquo;The key to success is action.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "You don't have to control your thoughts; you just have to stop letting them control you.",
    "a": "Dan Millman",
    "c": "88",
    "h": "<blockquote>&ldquo;You don't have to control your thoughts; you just have to stop letting them control you.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>"
  },
  {
    "q": "Be like a postage stamp. Stick to it until you get there.",
    "a": "Bob Proctor",
    "c": "57",
    "h": "<blockquote>&ldquo;Be like a postage stamp. Stick to it until you get there.&rdquo; &mdash; <footer>Bob Proctor</footer></blockquote>"
  },
  {
    "q": "Be not afraid of growing slowly, be afraid only of standing still. ",
    "a": "Chinese Proverb",
    "c": "67",
    "h": "<blockquote>&ldquo;Be not afraid of growing slowly, be afraid only of standing still. &rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
  },
  {
    "q": "Our greatest glory is not in never falling but in rising every time we fall.",
    "a": "Confucius",
    "c": "76",
    "h": "<blockquote>&ldquo;Our greatest glory is not in never falling but in rising every time we fall.&rdquo; &mdash; <footer>Confucius</footer></blockquote>"
  },
  {
    "q": "Stand up to your obstacles and do something about them. You'll find they haven't half the strength you think they have.",
    "a": "Norman Vincent Peale",
    "c": "119",
    "h": "<blockquote>&ldquo;Stand up to your obstacles and do something about them. You'll find they haven't half the strength you think they have.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
  },
  {
    "q": "There is no value in anything until it is finished. ",
    "a": "Genghis Khan",
    "c": "52",
    "h": "<blockquote>&ldquo;There is no value in anything until it is finished. &rdquo; &mdash; <footer>Genghis Khan</footer></blockquote>"
  },
  {
    "q": "Don't live the same year 75 times and call it a life.",
    "a": "Robin Sharma",
    "c": "53",
    "h": "<blockquote>&ldquo;Don't live the same year 75 times and call it a life.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
  },
  {
    "q": "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    "a": "Paulo Coelho",
    "c": "86",
    "h": "<blockquote>&ldquo;There is only one thing that makes a dream impossible to achieve: the fear of failure.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
  },
  {
    "q": "Repetition does not transform a lie into a truth.",
    "a": "Franklin D. Roosevelt",
    "c": "49",
    "h": "<blockquote>&ldquo;Repetition does not transform a lie into a truth.&rdquo; &mdash; <footer>Franklin D. Roosevelt</footer></blockquote>"
  },
  {
    "q": "For things to change, you have to change.",
    "a": "Jim Rohn",
    "c": "41",
    "h": "<blockquote>&ldquo;For things to change, you have to change.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
  },
  {
    "q": "Getting lost along your path is a part of finding the path you are meant to be on.",
    "a": "Robin Sharma",
    "c": "82",
    "h": "<blockquote>&ldquo;Getting lost along your path is a part of finding the path you are meant to be on.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
  },
  {
    "q": "Be a master of change rather than a victim of change.",
    "a": "Brian Tracy",
    "c": "53",
    "h": "<blockquote>&ldquo;Be a master of change rather than a victim of change.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "If you need inspiration, don't do it.",
    "a": "Elon Musk",
    "c": "37",
    "h": "<blockquote>&ldquo;If you need inspiration, don't do it.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
  },
  {
    "q": "Don't give up on your dreams, or your dreams will give up on you.",
    "a": "John Wooden",
    "c": "65",
    "h": "<blockquote>&ldquo;Don't give up on your dreams, or your dreams will give up on you.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
  },
  {
    "q": "Each of us is a unique strand in the intricate web of life and here to make a contribution.",
    "a": "Deepak Chopra",
    "c": "91",
    "h": "<blockquote>&ldquo;Each of us is a unique strand in the intricate web of life and here to make a contribution.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"
  },
  {
    "q": "Well done is better than well said.",
    "a": "Benjamin Franklin",
    "c": "35",
    "h": "<blockquote>&ldquo;Well done is better than well said.&rdquo; &mdash; <footer>Benjamin Franklin</footer></blockquote>"
  },
  {
    "q": "We must not sit down and wait for miracles. Up and be going!",
    "a": "John Eliot",
    "c": "60",
    "h": "<blockquote>&ldquo;We must not sit down and wait for miracles. Up and be going!&rdquo; &mdash; <footer>John Eliot</footer></blockquote>"
  },
  {
    "q": "Embrace the life you have and stop wishing that you could be someone else.",
    "a": "Joyce Meyer",
    "c": "74",
    "h": "<blockquote>&ldquo;Embrace the life you have and stop wishing that you could be someone else.&rdquo; &mdash; <footer>Joyce Meyer</footer></blockquote>"
  },
  {
    "q": "You are what you believe in. You become that which you believe you can become.",
    "a": "Bhagavad Gita",
    "c": "78",
    "h": "<blockquote>&ldquo;You are what you believe in. You become that which you believe you can become.&rdquo; &mdash; <footer>Bhagavad Gita</footer></blockquote>"
  },
  {
    "q": "Be gentle with yourself. Think less and feel more. Be as happy as you can. You only have this moment.",
    "a": "Dan Millman",
    "c": "101",
    "h": "<blockquote>&ldquo;Be gentle with yourself. Think less and feel more. Be as happy as you can. You only have this moment.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>"
  },
  {
    "q": "A little impatience will spoil great plans.",
    "a": "Chinese Proverb",
    "c": "43",
    "h": "<blockquote>&ldquo;A little impatience will spoil great plans.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
  },
  {
    "q": "There are no second chances in life, except to feel remorse.",
    "a": "Carlos Ruiz Zafon",
    "c": "60",
    "h": "<blockquote>&ldquo;There are no second chances in life, except to feel remorse.&rdquo; &mdash; <footer>Carlos Ruiz Zafon</footer></blockquote>"
  },
  {
    "q": "If the happiness and prosperity of other people depend on you, you have nothing to fear anymore.",
    "a": "Robert Greene",
    "c": "96",
    "h": "<blockquote>&ldquo;If the happiness and prosperity of other people depend on you, you have nothing to fear anymore.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>"
  },
  {
    "q": "We forge the chains we wear in life.",
    "a": "Charles Dickens",
    "c": "36",
    "h": "<blockquote>&ldquo;We forge the chains we wear in life.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
  },
  {
    "q": "Trust, like the soul, never returns once it is gone.",
    "a": "Publilius Syrus",
    "c": "52",
    "h": "<blockquote>&ldquo;Trust, like the soul, never returns once it is gone.&rdquo; &mdash; <footer>Publilius Syrus</footer></blockquote>"
  },
  {
    "q": "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
    "a": "Pema Chodron",
    "c": "100",
    "h": "<blockquote>&ldquo;If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
  },
  {
    "q": "The purpose of life is the expansion of happiness.",
    "a": "Deepak Chopra",
    "c": "50",
    "h": "<blockquote>&ldquo;The purpose of life is the expansion of happiness.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"
  },
  {
    "q": "Turn off your mind, relax, and float downstream.",
    "a": "John Lennon",
    "c": "48",
    "h": "<blockquote>&ldquo;Turn off your mind, relax, and float downstream.&rdquo; &mdash; <footer>John Lennon</footer></blockquote>"
  },
  {
    "q": "Every man gotta right to decide his own destiny.",
    "a": "Bob Marley",
    "c": "48",
    "h": "<blockquote>&ldquo;Every man gotta right to decide his own destiny.&rdquo; &mdash; <footer>Bob Marley</footer></blockquote>"
  },
  {
    "q": "Nourish the mind like you would your body. The mind cannot survive on junk food.",
    "a": "Brian Tracy",
    "c": "80",
    "h": "<blockquote>&ldquo;Nourish the mind like you would your body. The mind cannot survive on junk food.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "I discovered a long time ago that if I helped enough people get what they wanted, I would always get what I wanted and I would never have to worry.",
    "a": "Tony Robbins",
    "c": "147",
    "h": "<blockquote>&ldquo;I discovered a long time ago that if I helped enough people get what they wanted, I would always get what I wanted and I would never have to worry.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
  },
  {
    "q": "As you think, so shall you become. ",
    "a": "Bruce Lee",
    "c": "35",
    "h": "<blockquote>&ldquo;As you think, so shall you become. &rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>"
  },
  {
    "q": "The question isn't who is going to let me; it's who is going to stop me.",
    "a": "Ayn Rand",
    "c": "72",
    "h": "<blockquote>&ldquo;The question isn't who is going to let me; it's who is going to stop me.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
  },
  {
    "q": "Knowing is not enough, we must apply. Willing is not enough, we must do.",
    "a": "Johann Wolfgang von Goethe",
    "c": "72",
    "h": "<blockquote>&ldquo;Knowing is not enough, we must apply. Willing is not enough, we must do.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"
  },
  {
    "q": "Creative endeavors are by their nature uncertain.",
    "a": "Robert Greene",
    "c": "49",
    "h": "<blockquote>&ldquo;Creative endeavors are by their nature uncertain.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>"
  },
  {
    "q": "Perplexity is the beginning of knowledge.",
    "a": "Kahlil Gibran",
    "c": "41",
    "h": "<blockquote>&ldquo;Perplexity is the beginning of knowledge.&rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>"
  },
  {
    "q": "Tension is who you think you should be. Relaxation is who you are.",
    "a": "Chinese Proverb",
    "c": "66",
    "h": "<blockquote>&ldquo;Tension is who you think you should be. Relaxation is who you are.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
  },
  {
    "q": "Confidence comes not from always being right but not fearing to be wrong.",
    "a": "Unknown",
    "c": "73",
    "h": "<blockquote>&ldquo;Confidence comes not from always being right but not fearing to be wrong.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
  },
  {
    "q": "Living a life that has a greater purpose and living up to it is the ultimate degree that we should strive for.",
    "a": "Gurbaksh Chahal",
    "c": "110",
    "h": "<blockquote>&ldquo;Living a life that has a greater purpose and living up to it is the ultimate degree that we should strive for.&rdquo; &mdash; <footer>Gurbaksh Chahal</footer></blockquote>"
  },
  {
    "q": "There is a wisdom of the head, and there is a wisdom of the heart.",
    "a": "Charles Dickens",
    "c": "66",
    "h": "<blockquote>&ldquo;There is a wisdom of the head, and there is a wisdom of the heart.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
  },
  {
    "q": "The only people without problems are those in cemeteries.",
    "a": "Tony Robbins",
    "c": "57",
    "h": "<blockquote>&ldquo;The only people without problems are those in cemeteries.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
  },
  {
    "q": "It's easy to be a critic, but being a doer requires effort, risk, and change.  ",
    "a": "Wayne Dyer",
    "c": "79",
    "h": "<blockquote>&ldquo;It's easy to be a critic, but being a doer requires effort, risk, and change.  &rdquo; &mdash; <footer>Wayne Dyer</footer></blockquote>"
  },
  {
    "q": "The greatest gift that you can give to others is the gift of unconditional love and acceptance. ",
    "a": "Brian Tracy",
    "c": "96",
    "h": "<blockquote>&ldquo;The greatest gift that you can give to others is the gift of unconditional love and acceptance. &rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "All life is a manifestation of the spirit, the manifestation of love.",
    "a": "Morihei Ueshiba",
    "c": "69",
    "h": "<blockquote>&ldquo;All life is a manifestation of the spirit, the manifestation of love.&rdquo; &mdash; <footer>Morihei Ueshiba</footer></blockquote>"
  },
  {
    "q": "Never close your lips to those whom you have already opened your heart.",
    "a": "Charles Dickens",
    "c": "71",
    "h": "<blockquote>&ldquo;Never close your lips to those whom you have already opened your heart.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
  },
  {
    "q": "The journey, not the destination matters.",
    "a": "T.S. Eliot",
    "c": "41",
    "h": "<blockquote>&ldquo;The journey, not the destination matters.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>"
  },
  {
    "q": "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    "a": "Rumi",
    "c": "127",
    "h": "<blockquote>&ldquo;Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.&rdquo; &mdash; <footer>Rumi</footer></blockquote>"
  },
  {
    "q": "When it comes to mastering a skill, time is the magic ingredient.",
    "a": "Robert Greene",
    "c": "65",
    "h": "<blockquote>&ldquo;When it comes to mastering a skill, time is the magic ingredient.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>"
  },
  {
    "q": "The more you lose yourself in something bigger than yourself, the more energy you will have.",
    "a": "Norman Vincent Peale",
    "c": "92",
    "h": "<blockquote>&ldquo;The more you lose yourself in something bigger than yourself, the more energy you will have.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
  },
  {
    "q": "When angry count to ten before you speak. If very angry, count to one hundred.",
    "a": "Thomas Jefferson",
    "c": "78",
    "h": "<blockquote>&ldquo;When angry count to ten before you speak. If very angry, count to one hundred.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"
  },
  {
    "q": "If you want to see things just as they are, then you yourself must practice just as you are.",
    "a": "Dogen",
    "c": "92",
    "h": "<blockquote>&ldquo;If you want to see things just as they are, then you yourself must practice just as you are.&rdquo; &mdash; <footer>Dogen</footer></blockquote>"
  },
  {
    "q": "What's right is what's left if you do everything else wrong.",
    "a": "Robin Williams",
    "c": "60",
    "h": "<blockquote>&ldquo;What's right is what's left if you do everything else wrong.&rdquo; &mdash; <footer>Robin Williams</footer></blockquote>"
  },
  {
    "q": "We've got to live, no matter how many skies have fallen.",
    "a": "D. H. Lawrence",
    "c": "56",
    "h": "<blockquote>&ldquo;We've got to live, no matter how many skies have fallen.&rdquo; &mdash; <footer>D. H. Lawrence</footer></blockquote>"
  },
  {
    "q": "Nothing important is learned; it is simply remembered.",
    "a": "Carlos Ruiz Zafon",
    "c": "54",
    "h": "<blockquote>&ldquo;Nothing important is learned; it is simply remembered.&rdquo; &mdash; <footer>Carlos Ruiz Zafon</footer></blockquote>"
  },
  {
    "q": "We tend to live up to our expectations.",
    "a": "Earl Nightingale",
    "c": "39",
    "h": "<blockquote>&ldquo;We tend to live up to our expectations.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>"
  },
  {
    "q": "Imagination means nothing without doing.  ",
    "a": "Charlie Chaplin",
    "c": "42",
    "h": "<blockquote>&ldquo;Imagination means nothing without doing.  &rdquo; &mdash; <footer>Charlie Chaplin</footer></blockquote>"
  },
  {
    "q": "What gets measured gets improved.",
    "a": "Robin Sharma",
    "c": "33",
    "h": "<blockquote>&ldquo;What gets measured gets improved.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
  },
  {
    "q": "The final mystery is oneself.",
    "a": "Oscar Wilde",
    "c": "29",
    "h": "<blockquote>&ldquo;The final mystery is oneself.&rdquo; &mdash; <footer>Oscar Wilde</footer></blockquote>"
  },
  {
    "q": "You were born to win, but to be a winner, you must plan to win, prepare to win, expect to win.",
    "a": "Arnold Schwarzenegger",
    "c": "94",
    "h": "<blockquote>&ldquo;You were born to win, but to be a winner, you must plan to win, prepare to win, expect to win.&rdquo; &mdash; <footer>Arnold Schwarzenegger</footer></blockquote>"
  },
  {
    "q": "It's easier to go down a hill than up it but the view is much better at the top.",
    "a": "Henry Ward Beecher",
    "c": "80",
    "h": "<blockquote>&ldquo;It's easier to go down a hill than up it but the view is much better at the top.&rdquo; &mdash; <footer>Henry Ward Beecher</footer></blockquote>"
  },
  {
    "q": "When things go wrong, don't go with them.",
    "a": "Elvis Presley",
    "c": "41",
    "h": "<blockquote>&ldquo;When things go wrong, don't go with them.&rdquo; &mdash; <footer>Elvis Presley</footer></blockquote>"
  },
  {
    "q": "Nothing can survive without food. Everything we consume acts either to heal us or to poison us.",
    "a": "Thich Nhat Hanh",
    "c": "95",
    "h": "<blockquote>&ldquo;Nothing can survive without food. Everything we consume acts either to heal us or to poison us.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>"
  },
  {
    "q": "If you do not tell the truth about yourself you cannot tell it about other people.",
    "a": "Virginia Woolf",
    "c": "82",
    "h": "<blockquote>&ldquo;If you do not tell the truth about yourself you cannot tell it about other people.&rdquo; &mdash; <footer>Virginia Woolf</footer></blockquote>"
  },
  {
    "q": "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree. ",
    "a": "Martin Luther",
    "c": "94",
    "h": "<blockquote>&ldquo;Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree. &rdquo; &mdash; <footer>Martin Luther</footer></blockquote>"
  },
  {
    "q": "What would you do if you weren't afraid?",
    "a": "Spencer Johnson",
    "c": "40",
    "h": "<blockquote>&ldquo;What would you do if you weren't afraid?&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
  },
  {
    "q": "Fiction is the truth inside the lie.",
    "a": "Stephen King",
    "c": "36",
    "h": "<blockquote>&ldquo;Fiction is the truth inside the lie.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>"
  },
  {
    "q": "Yesterday is gone. Tomorrow has not yet come. We have only today.",
    "a": "Mother Teresa",
    "c": "65",
    "h": "<blockquote>&ldquo;Yesterday is gone. Tomorrow has not yet come. We have only today.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>"
  },
  {
    "q": "Peace is not the absence of conflict, but the ability to cope with it.",
    "a": "Unknown",
    "c": "70",
    "h": "<blockquote>&ldquo;Peace is not the absence of conflict, but the ability to cope with it.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
  },
  {
    "q": "It is not how much we have, but how much we enjoy, that makes happiness.",
    "a": "Charles Spurgeon",
    "c": "72",
    "h": "<blockquote>&ldquo;It is not how much we have, but how much we enjoy, that makes happiness.&rdquo; &mdash; <footer>Charles Spurgeon</footer></blockquote>"
  },
  {
    "q": "Success is about creating value.",
    "a": "Candice Carpenter",
    "c": "32",
    "h": "<blockquote>&ldquo;Success is about creating value.&rdquo; &mdash; <footer>Candice Carpenter</footer></blockquote>"
  },
  {
    "q": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    "a": "Denis Waitley",
    "c": "122",
    "h": "<blockquote>&ldquo;There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.&rdquo; &mdash; <footer>Denis Waitley</footer></blockquote>"
  },
  {
    "q": "Life and death are of supreme importance. Time swiftly passes by and opportunity is lost.",
    "a": "Dogen",
    "c": "89",
    "h": "<blockquote>&ldquo;Life and death are of supreme importance. Time swiftly passes by and opportunity is lost.&rdquo; &mdash; <footer>Dogen</footer></blockquote>"
  },
  {
    "q": "The biggest and only critic lives in your perception of people's perception of you rather than people's perception of you.",
    "a": "Criss Jami",
    "c": "122",
    "h": "<blockquote>&ldquo;The biggest and only critic lives in your perception of people's perception of you rather than people's perception of you.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
  },
  {
    "q": "If you try to get rid of fear and anger without knowing their meaning, they will grow stronger and return.",
    "a": "Deepak Chopra",
    "c": "106",
    "h": "<blockquote>&ldquo;If you try to get rid of fear and anger without knowing their meaning, they will grow stronger and return.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"
  },
  {
    "q": "Receive without pride, let go without attachment.",
    "a": "Marcus Aurelius",
    "c": "49",
    "h": "<blockquote>&ldquo;Receive without pride, let go without attachment.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
  },
  {
    "q": "Think of yourself as dead. you have lived your life. Now, take what's left, and live it properly.",
    "a": "Marcus Aurelius",
    "c": "97",
    "h": "<blockquote>&ldquo;Think of yourself as dead. you have lived your life. Now, take what's left, and live it properly.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
  },
  {
    "q": "Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.",
    "a": "Socrates",
    "c": "98",
    "h": "<blockquote>&ldquo;Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.&rdquo; &mdash; <footer>Socrates</footer></blockquote>"
  },
  {
    "q": "Whatever we plant in our subconscious mind and nourish with repetition and emotion will one day become reality.",
    "a": "Earl Nightingale",
    "c": "111",
    "h": "<blockquote>&ldquo;Whatever we plant in our subconscious mind and nourish with repetition and emotion will one day become reality.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>"
  },
  {
    "q": "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.",
    "a": "Peter Drucker",
    "c": "83",
    "h": "<blockquote>&ldquo;Knowledge has to be improved, challenged, and increased constantly, or it vanishes.&rdquo; &mdash; <footer>Peter Drucker</footer></blockquote>"
  },
  {
    "q": "A man should do his job so well that the living, the dead, and the unborn could do it no better.",
    "a": "Martin Luther King, Jr.",
    "c": "96",
    "h": "<blockquote>&ldquo;A man should do his job so well that the living, the dead, and the unborn could do it no better.&rdquo; &mdash; <footer>Martin Luther King, Jr.</footer></blockquote>"
  },
  {
    "q": "It is better to offer no excuse than a bad one. ",
    "a": "George Washington",
    "c": "48",
    "h": "<blockquote>&ldquo;It is better to offer no excuse than a bad one. &rdquo; &mdash; <footer>George Washington</footer></blockquote>"
  },
  {
    "q": "True life is lived when tiny changes occur.",
    "a": "Leo Tolstoy",
    "c": "43",
    "h": "<blockquote>&ldquo;True life is lived when tiny changes occur.&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>"
  },
  {
    "q": "Everyone thinks of changing the world, but no one thinks of changing himself.",
    "a": "Leo Tolstoy",
    "c": "77",
    "h": "<blockquote>&ldquo;Everyone thinks of changing the world, but no one thinks of changing himself.&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>"
  },
  {
    "q": "Family not only needs to consist of merely those whom we share blood, but also of those whom we'd give blood.",
    "a": "Charles Dickens",
    "c": "109",
    "h": "<blockquote>&ldquo;Family not only needs to consist of merely those whom we share blood, but also of those whom we'd give blood.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
  },
  {
    "q": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    "a": "Ayn Rand",
    "c": "81",
    "h": "<blockquote>&ldquo;You can avoid reality, but you cannot avoid the consequences of avoiding reality.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
  },
  {
    "q": "Laziness may appear attractive, but work gives satisfaction.",
    "a": "Anne Frank",
    "c": "60",
    "h": "<blockquote>&ldquo;Laziness may appear attractive, but work gives satisfaction.&rdquo; &mdash; <footer>Anne Frank</footer></blockquote>"
  },
  {
    "q": "The only limits in our life are those we impose on ourselves.",
    "a": "Bob Proctor",
    "c": "61",
    "h": "<blockquote>&ldquo;The only limits in our life are those we impose on ourselves.&rdquo; &mdash; <footer>Bob Proctor</footer></blockquote>"
  },
  {
    "q": "Take responsibility of your own happiness, never put it in other people's hands.",
    "a": "Roy T. Bennett",
    "c": "80",
    "h": "<blockquote>&ldquo;Take responsibility of your own happiness, never put it in other people's hands.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
  },
  {
    "q": "Love doesn't need reason. It speaks from the irrational wisdom of the heart.",
    "a": "Deepak Chopra",
    "c": "76",
    "h": "<blockquote>&ldquo;Love doesn't need reason. It speaks from the irrational wisdom of the heart.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"
  },
  {
    "q": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    "a": "Abraham Lincoln",
    "c": "89",
    "h": "<blockquote>&ldquo;Give me six hours to chop down a tree and I will spend the first four sharpening the axe.&rdquo; &mdash; <footer>Abraham Lincoln</footer></blockquote>"
  },
  {
    "q": "You just can't beat the person who never gives up. ",
    "a": "Babe Ruth",
    "c": "51",
    "h": "<blockquote>&ldquo;You just can't beat the person who never gives up. &rdquo; &mdash; <footer>Babe Ruth</footer></blockquote>"
  },
  {
    "q": "Some of your greatest lessons come from your darkest moments.",
    "a": "Roger Lee",
    "c": "61",
    "h": "<blockquote>&ldquo;Some of your greatest lessons come from your darkest moments.&rdquo; &mdash; <footer>Roger Lee</footer></blockquote>"
  },
  {
    "q": "A man who cannot tolerate small misfortunes can never accomplish great things.",
    "a": "Chinese Proverb",
    "c": "78",
    "h": "<blockquote>&ldquo;A man who cannot tolerate small misfortunes can never accomplish great things.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
  },
  {
    "q": "The goal is not to show how great you are to others, but how vulnerable you are to yourself.",
    "a": "Maxime Lagace",
    "c": "92",
    "h": "<blockquote>&ldquo;The goal is not to show how great you are to others, but how vulnerable you are to yourself.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
  },
  {
    "q": "We must not be afraid of dreaming the seemingly impossible if we want the seemingly impossible to become a reality.",
    "a": "Vaclav Havel",
    "c": "115",
    "h": "<blockquote>&ldquo;We must not be afraid of dreaming the seemingly impossible if we want the seemingly impossible to become a reality.&rdquo; &mdash; <footer>Vaclav Havel</footer></blockquote>"
  },
  {
    "q": "There is always risk, so learn to manage risk instead of avoiding it.",
    "a": "Robert Kiyosaki",
    "c": "69",
    "h": "<blockquote>&ldquo;There is always risk, so learn to manage risk instead of avoiding it.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"
  },
  {
    "q": "Never give way to laziness.",
    "a": "Bhagavad Gita",
    "c": "27",
    "h": "<blockquote>&ldquo;Never give way to laziness.&rdquo; &mdash; <footer>Bhagavad Gita</footer></blockquote>"
  },
  {
    "q": "Those who look for the bad in people will surely find it.",
    "a": "Abraham Lincoln",
    "c": "57",
    "h": "<blockquote>&ldquo;Those who look for the bad in people will surely find it.&rdquo; &mdash; <footer>Abraham Lincoln</footer></blockquote>"
  },
  {
    "q": "Leaders think and talk about solutions. Followers think and talk about the problems.",
    "a": "Brian Tracy",
    "c": "84",
    "h": "<blockquote>&ldquo;Leaders think and talk about solutions. Followers think and talk about the problems.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "Never put off to tomorrow what you can do to-day.",
    "a": "Thomas Jefferson",
    "c": "49",
    "h": "<blockquote>&ldquo;Never put off to tomorrow what you can do to-day.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"
  },
  {
    "q": "If you quit once it becomes a habit.",
    "a": "Michael Jordan",
    "c": "36",
    "h": "<blockquote>&ldquo;If you quit once it becomes a habit.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>"
  },
  {
    "q": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    "a": "Rumi",
    "c": "74",
    "h": "<blockquote>&ldquo;Your heart is the size of an ocean. Go find yourself in its hidden depths.&rdquo; &mdash; <footer>Rumi</footer></blockquote>"
  },
  {
    "q": "Behind every beautiful thing, there's some kind of pain.",
    "a": "Bob Dylan",
    "c": "56",
    "h": "<blockquote>&ldquo;Behind every beautiful thing, there's some kind of pain.&rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>"
  },
  {
    "q": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "a": "Thomas Edison",
    "c": "109",
    "h": "<blockquote>&ldquo;Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.&rdquo; &mdash; <footer>Thomas Edison</footer></blockquote>"
  },
  {
    "q": "Freedom itself demands discomfort.",
    "a": "Mark Manson",
    "c": "34",
    "h": "<blockquote>&ldquo;Freedom itself demands discomfort.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>"
  },
  {
    "q": "Nothing ever goes away until it has taught us what we need to know.",
    "a": "Pema Chodron",
    "c": "67",
    "h": "<blockquote>&ldquo;Nothing ever goes away until it has taught us what we need to know.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
  },
  {
    "q": "Far and away the best prize that life has to offer is the chance to work hard at work worth doing.",
    "a": "Theodore Roosevelt",
    "c": "98",
    "h": "<blockquote>&ldquo;Far and away the best prize that life has to offer is the chance to work hard at work worth doing.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>"
  },
  {
    "q": "Sometimes out of your biggest misery, comes your greatest gain.",
    "a": "Steve Harvey",
    "c": "63",
    "h": "<blockquote>&ldquo;Sometimes out of your biggest misery, comes your greatest gain.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>"
  },
  {
    "q": "True life is lived when tiny changes occur.",
    "a": "Leo Tolstoy",
    "c": "43",
    "h": "<blockquote>&ldquo;True life is lived when tiny changes occur.&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>"
  },
  {
    "q": "If you're brave enough to say goodbye, life will reward you with a new hello.",
    "a": "Paulo Coelho",
    "c": "77",
    "h": "<blockquote>&ldquo;If you're brave enough to say goodbye, life will reward you with a new hello.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
  },
  {
    "q": "Waste no more time arguing about what a good man should be. Be one.",
    "a": "Marcus Aurelius",
    "c": "67",
    "h": "<blockquote>&ldquo;Waste no more time arguing about what a good man should be. Be one.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
  },
  {
    "q": "Rather than love, than money, than fame, give me truth.",
    "a": "Henry David Thoreau",
    "c": "55",
    "h": "<blockquote>&ldquo;Rather than love, than money, than fame, give me truth.&rdquo; &mdash; <footer>Henry David Thoreau</footer></blockquote>"
  },
  {
    "q": "Stay away from people who makes you feel like you are wasting their time.",
    "a": "Paulo Coelho",
    "c": "73",
    "h": "<blockquote>&ldquo;Stay away from people who makes you feel like you are wasting their time.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
  },
  {
    "q": "Nothing you do is going to matter that much in the long run. Don't take yourself so seriously.",
    "a": "Naval Ravikant",
    "c": "94",
    "h": "<blockquote>&ldquo;Nothing you do is going to matter that much in the long run. Don't take yourself so seriously.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>"
  },
  {
    "q": "Do not bite at the bait of pleasure, till you know there is no hook beneath it.",
    "a": "Thomas Jefferson",
    "c": "79",
    "h": "<blockquote>&ldquo;Do not bite at the bait of pleasure, till you know there is no hook beneath it.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"
  },
  {
    "q": "Don't let someone elses. opinion become your reality.",
    "a": "Les Brown",
    "c": "53",
    "h": "<blockquote>&ldquo;Don't let someone elses. opinion become your reality.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
  },
  {
    "q": "Create with the heart; build with the mind.",
    "a": "Criss Jami",
    "c": "43",
    "h": "<blockquote>&ldquo;Create with the heart; build with the mind.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
  },
  {
    "q": "In life you need either inspiration or desperation.",
    "a": "Tony Robbins",
    "c": "51",
    "h": "<blockquote>&ldquo;In life you need either inspiration or desperation.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
  },
  {
    "q": "Change is hard at first, messy in the middle and gorgeous at the end.",
    "a": "Robin Sharma",
    "c": "69",
    "h": "<blockquote>&ldquo;Change is hard at first, messy in the middle and gorgeous at the end.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
  },
  {
    "q": "Courage is almost a contradiction in terms. It means a strong desire to live taking the form of a readiness to die.",
    "a": "Gilbert Chesterton",
    "c": "115",
    "h": "<blockquote>&ldquo;Courage is almost a contradiction in terms. It means a strong desire to live taking the form of a readiness to die.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>"
  },
  {
    "q": "When one door closes another door opens. ",
    "a": "Alexander Graham Bell",
    "c": "41",
    "h": "<blockquote>&ldquo;When one door closes another door opens. &rdquo; &mdash; <footer>Alexander Graham Bell</footer></blockquote>"
  },
  {
    "q": "It is safer to search in the maze than to remain in a cheeseless situation.",
    "a": "Spencer Johnson",
    "c": "75",
    "h": "<blockquote>&ldquo;It is safer to search in the maze than to remain in a cheeseless situation.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
  },
  {
    "q": "Do the hard jobs first. The easy jobs will take care of themselves.",
    "a": "Dale Carnegie",
    "c": "67",
    "h": "<blockquote>&ldquo;Do the hard jobs first. The easy jobs will take care of themselves.&rdquo; &mdash; <footer>Dale Carnegie</footer></blockquote>"
  },
  {
    "q": "A different result requires doing something different.",
    "a": "Gary Keller",
    "c": "54",
    "h": "<blockquote>&ldquo;A different result requires doing something different.&rdquo; &mdash; <footer>Gary Keller</footer></blockquote>"
  },
  {
    "q": "It's only after you've stepped outside your comfort zone that you begin to change, grow, and transform.",
    "a": "Roy T. Bennett",
    "c": "103",
    "h": "<blockquote>&ldquo;It's only after you've stepped outside your comfort zone that you begin to change, grow, and transform.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
  },
  {
    "q": "Everyone has a sense of humor. If you don't laugh at jokes, you probably laugh at opinions.",
    "a": "Criss Jami",
    "c": "91",
    "h": "<blockquote>&ldquo;Everyone has a sense of humor. If you don't laugh at jokes, you probably laugh at opinions.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
  },
  {
    "q": "It's not the men in your life that matters, it's the life in your men.",
    "a": "Mae West",
    "c": "70",
    "h": "<blockquote>&ldquo;It's not the men in your life that matters, it's the life in your men.&rdquo; &mdash; <footer>Mae West</footer></blockquote>"
  },
  {
    "q": "Reading should be a pleasure, not a chore.",
    "a": "Joan Rivers",
    "c": "42",
    "h": "<blockquote>&ldquo;Reading should be a pleasure, not a chore.&rdquo; &mdash; <footer>Joan Rivers</footer></blockquote>"
  },
  {
    "q": "We can know only that we know nothing. And that is the highest degree of human wisdom.",
    "a": "Leo Tolstoy",
    "c": "86",
    "h": "<blockquote>&ldquo;We can know only that we know nothing. And that is the highest degree of human wisdom.&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>"
  },
  {
    "q": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    "a": "Lao Tzu",
    "c": "129",
    "h": "<blockquote>&ldquo;A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
  },
  {
    "q": "Some people find fault like there is a reward for it.  ",
    "a": "Zig Ziglar",
    "c": "55",
    "h": "<blockquote>&ldquo;Some people find fault like there is a reward for it.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
  },
  {
    "q": "A mountain never yields to the wind no matter how strong it is.",
    "a": "Zen Proverb",
    "c": "63",
    "h": "<blockquote>&ldquo;A mountain never yields to the wind no matter how strong it is.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>"
  },
  {
    "q": "Be the silent watcher of your thoughts and behavior. You are beneath the thinker.",
    "a": "Eckhart Tolle",
    "c": "81",
    "h": "<blockquote>&ldquo;Be the silent watcher of your thoughts and behavior. You are beneath the thinker.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"
  },
  {
    "q": "What the caterpillar calls the end of the world, the master calls a butterfly.",
    "a": "Richard Bach",
    "c": "78",
    "h": "<blockquote>&ldquo;What the caterpillar calls the end of the world, the master calls a butterfly.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
  },
  {
    "q": "Do every act of your life as if it were your last.",
    "a": "Marcus Aurelius",
    "c": "50",
    "h": "<blockquote>&ldquo;Do every act of your life as if it were your last.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
  },
  {
    "q": "In the middle of difficulty lies opportunity.",
    "a": "Albert Einstein",
    "c": "45",
    "h": "<blockquote>&ldquo;In the middle of difficulty lies opportunity.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>"
  },
  {
    "q": "Failure is just information and an opportunity to change your course.",
    "a": "Oprah Winfrey",
    "c": "69",
    "h": "<blockquote>&ldquo;Failure is just information and an opportunity to change your course.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
  },
  {
    "q": "Realize deeply that the present moment is all you ever have. ",
    "a": "Eckhart Tolle",
    "c": "61",
    "h": "<blockquote>&ldquo;Realize deeply that the present moment is all you ever have. &rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"
  },
  {
    "q": "The more something threatens your identity, the more you will avoid it.",
    "a": "Mark Manson",
    "c": "71",
    "h": "<blockquote>&ldquo;The more something threatens your identity, the more you will avoid it.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>"
  },
  {
    "q": "It is during our darkest moments that we must focus to see the light.",
    "a": "Aristotle",
    "c": "69",
    "h": "<blockquote>&ldquo;It is during our darkest moments that we must focus to see the light.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
  },
  {
    "q": "Every blessing ignored becomes a curse.",
    "a": "Paulo Coelho",
    "c": "39",
    "h": "<blockquote>&ldquo;Every blessing ignored becomes a curse.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
  },
  {
    "q": "Don't ever save anything for a special occasion. Being alive is the special occasion.",
    "a": "Mary Engelbreit",
    "c": "85",
    "h": "<blockquote>&ldquo;Don't ever save anything for a special occasion. Being alive is the special occasion.&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>"
  },
  {
    "q": "The friend is the man who knows all about you, and still likes you.",
    "a": "Elbert Hubbard",
    "c": "67",
    "h": "<blockquote>&ldquo;The friend is the man who knows all about you, and still likes you.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
  },
  {
    "q": "Nature does not hurry, yet everything is accomplished.",
    "a": "Lao Tzu",
    "c": "54",
    "h": "<blockquote>&ldquo;Nature does not hurry, yet everything is accomplished.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
  },
  {
    "q": "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
    "a": "Sun Tzu",
    "c": "110",
    "h": "<blockquote>&ldquo;Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
  },
  {
    "q": "No one has ever become poor by giving.",
    "a": "Anne Frank",
    "c": "38",
    "h": "<blockquote>&ldquo;No one has ever become poor by giving.&rdquo; &mdash; <footer>Anne Frank</footer></blockquote>"
  },
  {
    "q": "There is a cosmic law which says that every satisfaction must be paid for with a dissatisfaction.",
    "a": "G.I. Gurdjieff",
    "c": "97",
    "h": "<blockquote>&ldquo;There is a cosmic law which says that every satisfaction must be paid for with a dissatisfaction.&rdquo; &mdash; <footer>G.I. Gurdjieff</footer></blockquote>"
  },
  {
    "q": "The essence of the Way is detachment.",
    "a": "Bodhidharma",
    "c": "37",
    "h": "<blockquote>&ldquo;The essence of the Way is detachment.&rdquo; &mdash; <footer>Bodhidharma</footer></blockquote>"
  },
  {
    "q": "I've always lived in the moment.",
    "a": "Yanni",
    "c": "32",
    "h": "<blockquote>&ldquo;I've always lived in the moment.&rdquo; &mdash; <footer>Yanni</footer></blockquote>"
  },
  {
    "q": "We need a backbone, not a wishbone.",
    "a": "Joyce Meyer",
    "c": "35",
    "h": "<blockquote>&ldquo;We need a backbone, not a wishbone.&rdquo; &mdash; <footer>Joyce Meyer</footer></blockquote>"
  },
  {
    "q": "You can have results or excuses, but not both.",
    "a": "Arnold Schwarzenegger",
    "c": "46",
    "h": "<blockquote>&ldquo;You can have results or excuses, but not both.&rdquo; &mdash; <footer>Arnold Schwarzenegger</footer></blockquote>"
  },
  {
    "q": "One's best success comes after their greatest disappointments.",
    "a": "Henry Ward Beecher",
    "c": "62",
    "h": "<blockquote>&ldquo;One's best success comes after their greatest disappointments.&rdquo; &mdash; <footer>Henry Ward Beecher</footer></blockquote>"
  },
  {
    "q": "Waste not fresh tears over old griefs.",
    "a": "Euripides",
    "c": "38",
    "h": "<blockquote>&ldquo;Waste not fresh tears over old griefs.&rdquo; &mdash; <footer>Euripides</footer></blockquote>"
  },
  {
    "q": "Being in a good frame of mind helps keep one in the picture of health.",
    "a": "Unknown",
    "c": "70",
    "h": "<blockquote>&ldquo;Being in a good frame of mind helps keep one in the picture of health.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
  },
  {
    "q": "The biggest adventure is what lies ahead.",
    "a": "J.R.R. Tolkien",
    "c": "41",
    "h": "<blockquote>&ldquo;The biggest adventure is what lies ahead.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
  },
  {
    "q": "Until you change how you get things done, you'll never know what works best.",
    "a": "Roy T. Bennett",
    "c": "76",
    "h": "<blockquote>&ldquo;Until you change how you get things done, you'll never know what works best.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
  },
  {
    "q": "A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise. ",
    "a": "Buddha",
    "c": "135",
    "h": "<blockquote>&ldquo;A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise. &rdquo; &mdash; <footer>Buddha</footer></blockquote>"
  },
  {
    "q": "Life is growth. If we stop growing, technically and spiritually, we are as good as dead.",
    "a": "Morihei Ueshiba",
    "c": "88",
    "h": "<blockquote>&ldquo;Life is growth. If we stop growing, technically and spiritually, we are as good as dead.&rdquo; &mdash; <footer>Morihei Ueshiba</footer></blockquote>"
  },
  {
    "q": "What the mind can conceive, it can achieve.",
    "a": "Napoleon Hill",
    "c": "43",
    "h": "<blockquote>&ldquo;What the mind can conceive, it can achieve.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
  },
  {
    "q": "If you quit once it becomes a habit.",
    "a": "Michael Jordan",
    "c": "36",
    "h": "<blockquote>&ldquo;If you quit once it becomes a habit.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>"
  },
  {
    "q": "The world is changed by your example, not by your opinion.",
    "a": "Paulo Coelho",
    "c": "58",
    "h": "<blockquote>&ldquo;The world is changed by your example, not by your opinion.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
  },
  {
    "q": "The traveler sees what he sees. The tourist sees what he has come to see.",
    "a": "Gilbert Chesterton",
    "c": "73",
    "h": "<blockquote>&ldquo;The traveler sees what he sees. The tourist sees what he has come to see.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>"
  },
  {
    "q": "If you want to be sad, no one in the world can make you happy. But if you make up your mind to be happy, no one and nothing on earth can take that happiness from you.",
    "a": "Paramahansa Yogananda",
    "c": "166",
    "h": "<blockquote>&ldquo;If you want to be sad, no one in the world can make you happy. But if you make up your mind to be happy, no one and nothing on earth can take that happiness from you.&rdquo; &mdash; <footer>Paramahansa Yogananda</footer></blockquote>"
  },
  {
    "q": "A thing constructed can only be loved after it is constructed; but a thing created is loved before it exists.",
    "a": "Charles Dickens",
    "c": "109",
    "h": "<blockquote>&ldquo;A thing constructed can only be loved after it is constructed; but a thing created is loved before it exists.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
  },
  {
    "q": "To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.",
    "a": "Johann Wolfgang von Goethe",
    "c": "112",
    "h": "<blockquote>&ldquo;To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"
  },
  {
    "q": "It doesn't matter where you are, you are nowhere compared to where you can go.",
    "a": "Bob Proctor",
    "c": "78",
    "h": "<blockquote>&ldquo;It doesn't matter where you are, you are nowhere compared to where you can go.&rdquo; &mdash; <footer>Bob Proctor</footer></blockquote>"
  },
  {
    "q": "Of all men's miseries the bitterest is this: to know so much and to have control over nothing. ",
    "a": "Herodotus",
    "c": "95",
    "h": "<blockquote>&ldquo;Of all men's miseries the bitterest is this: to know so much and to have control over nothing. &rdquo; &mdash; <footer>Herodotus</footer></blockquote>"
  },
  {
    "q": "It is not fair to ask of others what you are not willing to do yourself.",
    "a": "Eleanor Roosevelt",
    "c": "72",
    "h": "<blockquote>&ldquo;It is not fair to ask of others what you are not willing to do yourself.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
  },
  {
    "q": "Nearly every crisis seems to be the worst one, but after it's over, it isn't so bad.",
    "a": "Harry S. Truman",
    "c": "84",
    "h": "<blockquote>&ldquo;Nearly every crisis seems to be the worst one, but after it's over, it isn't so bad.&rdquo; &mdash; <footer>Harry S. Truman</footer></blockquote>"
  },
  {
    "q": "Whatever you are, be a good one.",
    "a": "Abraham Lincoln",
    "c": "32",
    "h": "<blockquote>&ldquo;Whatever you are, be a good one.&rdquo; &mdash; <footer>Abraham Lincoln</footer></blockquote>"
  },
  {
    "q": "Discipline yourself, and others won't need to.",
    "a": "John Wooden",
    "c": "46",
    "h": "<blockquote>&ldquo;Discipline yourself, and others won't need to.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
  },
  {
    "q": "I am thankful to all those who said no. It's because of them, I did it myself.  ",
    "a": "Wayne Dyer",
    "c": "80",
    "h": "<blockquote>&ldquo;I am thankful to all those who said no. It's because of them, I did it myself.  &rdquo; &mdash; <footer>Wayne Dyer</footer></blockquote>"
  },
  {
    "q": "You cannot change your destination overnight but you can change your direction overnight.",
    "a": "Jim Rohn",
    "c": "89",
    "h": "<blockquote>&ldquo;You cannot change your destination overnight but you can change your direction overnight.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
  },
  {
    "q": "Do not stop thinking of life as an adventure.",
    "a": "Eleanor Roosevelt",
    "c": "45",
    "h": "<blockquote>&ldquo;Do not stop thinking of life as an adventure.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
  },
  {
    "q": "Make peace within, and there will be no one who can overcome you. And no one you will wish to overcome.",
    "a": "Dan Millman",
    "c": "103",
    "h": "<blockquote>&ldquo;Make peace within, and there will be no one who can overcome you. And no one you will wish to overcome.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>"
  },
  {
    "q": "A poet should be so crafty with words that he is envied even for his pains.",
    "a": "Criss Jami",
    "c": "75",
    "h": "<blockquote>&ldquo;A poet should be so crafty with words that he is envied even for his pains.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
  },
  {
    "q": "Difficulties strengthen the mind, as labor does the body.  ",
    "a": "Seneca",
    "c": "59",
    "h": "<blockquote>&ldquo;Difficulties strengthen the mind, as labor does the body.  &rdquo; &mdash; <footer>Seneca</footer></blockquote>"
  },
  {
    "q": "To succeed takes more than the desire to win. It also takes the acceptance that we could fail.",
    "a": "Simon Sinek",
    "c": "94",
    "h": "<blockquote>&ldquo;To succeed takes more than the desire to win. It also takes the acceptance that we could fail.&rdquo; &mdash; <footer>Simon Sinek</footer></blockquote>"
  },
  {
    "q": "Decide upon your major definite purpose in life and then organize all your activities around it.",
    "a": "Brian Tracy",
    "c": "96",
    "h": "<blockquote>&ldquo;Decide upon your major definite purpose in life and then organize all your activities around it.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "It is indeed a radical act of love just to sit down and be quiet for a time by yourself.",
    "a": "Jon Kabat-Zinn",
    "c": "88",
    "h": "<blockquote>&ldquo;It is indeed a radical act of love just to sit down and be quiet for a time by yourself.&rdquo; &mdash; <footer>Jon Kabat-Zinn</footer></blockquote>"
  },
  {
    "q": "Every day is an opportunity to a make a new happy ending.",
    "a": "Jonathan Swift",
    "c": "57",
    "h": "<blockquote>&ldquo;Every day is an opportunity to a make a new happy ending.&rdquo; &mdash; <footer>Jonathan Swift</footer></blockquote>"
  },
  {
    "q": "Till it has loved, no man or woman can become itself.",
    "a": "Emily Dickinson",
    "c": "53",
    "h": "<blockquote>&ldquo;Till it has loved, no man or woman can become itself.&rdquo; &mdash; <footer>Emily Dickinson</footer></blockquote>"
  },
  {
    "q": "The nearer a man comes to a calm mind, the closer he is to strength.",
    "a": "Marcus Aurelius",
    "c": "68",
    "h": "<blockquote>&ldquo;The nearer a man comes to a calm mind, the closer he is to strength.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
  },
  {
    "q": "Our life isn't how much we can take out, but how much we can put in.  ",
    "a": "Estee Lauder",
    "c": "70",
    "h": "<blockquote>&ldquo;Our life isn't how much we can take out, but how much we can put in.  &rdquo; &mdash; <footer>Estee Lauder</footer></blockquote>"
  },
  {
    "q": "True knowledge exists in knowing that you know nothing.",
    "a": "Socrates",
    "c": "55",
    "h": "<blockquote>&ldquo;True knowledge exists in knowing that you know nothing.&rdquo; &mdash; <footer>Socrates</footer></blockquote>"
  },
  {
    "q": "Ponder and deliberate before you make a move.",
    "a": "Sun Tzu",
    "c": "45",
    "h": "<blockquote>&ldquo;Ponder and deliberate before you make a move.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
  },
  {
    "q": "Remember where you came from, where you're going, and why you created this mess you got yourself into in the first place.",
    "a": "Richard Bach",
    "c": "121",
    "h": "<blockquote>&ldquo;Remember where you came from, where you're going, and why you created this mess you got yourself into in the first place.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
  },
  {
    "q": "I am thankful to all those who said no. It's because of them, I did it myself.  ",
    "a": "Wayne Dyer",
    "c": "80",
    "h": "<blockquote>&ldquo;I am thankful to all those who said no. It's because of them, I did it myself.  &rdquo; &mdash; <footer>Wayne Dyer</footer></blockquote>"
  },
  {
    "q": "We are all faced with a series of great opportunities brilliantly disguised as impossible situations. ",
    "a": "Charles Swindoll",
    "c": "102",
    "h": "<blockquote>&ldquo;We are all faced with a series of great opportunities brilliantly disguised as impossible situations. &rdquo; &mdash; <footer>Charles Swindoll</footer></blockquote>"
  },
  {
    "q": "Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.",
    "a": "Paulo Coelho",
    "c": "89",
    "h": "<blockquote>&ldquo;Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
  },
  {
    "q": "At first dreams seem impossible, then improbable, then inevitable.",
    "a": "Christopher Reeve",
    "c": "66",
    "h": "<blockquote>&ldquo;At first dreams seem impossible, then improbable, then inevitable.&rdquo; &mdash; <footer>Christopher Reeve</footer></blockquote>"
  },
  {
    "q": "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
    "a": "Thich Nhat Hanh",
    "c": "82",
    "h": "<blockquote>&ldquo;Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>"
  },
  {
    "q": "A lie can travel half way around the world while the truth is putting on its shoes.",
    "a": "Mark Twain",
    "c": "83",
    "h": "<blockquote>&ldquo;A lie can travel half way around the world while the truth is putting on its shoes.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>"
  },
  {
    "q": "Anger begins with folly, and ends with repentance. ",
    "a": "Beverly Sills",
    "c": "51",
    "h": "<blockquote>&ldquo;Anger begins with folly, and ends with repentance. &rdquo; &mdash; <footer>Beverly Sills</footer></blockquote>"
  },
  {
    "q": "The fact of the matter is that there will be nothing learned from any challenge in which we don't try our hardest.",
    "a": "Josh Waitzkin",
    "c": "114",
    "h": "<blockquote>&ldquo;The fact of the matter is that there will be nothing learned from any challenge in which we don't try our hardest.&rdquo; &mdash; <footer>Josh Waitzkin</footer></blockquote>"
  },
  {
    "q": "There are no limitations to the mind except those we acknowledge...",
    "a": "Napoleon Hill",
    "c": "67",
    "h": "<blockquote>&ldquo;There are no limitations to the mind except those we acknowledge...&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
  },
  {
    "q": "The fastest way to change is to laugh at your own folly.",
    "a": "Spencer Johnson",
    "c": "56",
    "h": "<blockquote>&ldquo;The fastest way to change is to laugh at your own folly.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
  },
  {
    "q": "The best way to predict your future is to create it.",
    "a": "Abraham Lincoln",
    "c": "52",
    "h": "<blockquote>&ldquo;The best way to predict your future is to create it.&rdquo; &mdash; <footer>Abraham Lincoln</footer></blockquote>"
  },
  {
    "q": "I am not the outcome. I am never the result. I am only the effort.",
    "a": "Kamal Ravikant",
    "c": "66",
    "h": "<blockquote>&ldquo;I am not the outcome. I am never the result. I am only the effort.&rdquo; &mdash; <footer>Kamal Ravikant</footer></blockquote>"
  },
  {
    "q": "I take the position that I'm always to some degree wrong, and the aspiration is to be less wrong.",
    "a": "Elon Musk",
    "c": "97",
    "h": "<blockquote>&ldquo;I take the position that I'm always to some degree wrong, and the aspiration is to be less wrong.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
  },
  {
    "q": "Turn your wounds into wisdom. ",
    "a": "Oprah Winfrey",
    "c": "30",
    "h": "<blockquote>&ldquo;Turn your wounds into wisdom. &rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
  },
  {
    "q": "There are no constraints on the human mind, no walls around the human spirit, no barriers to our progress except those we ourselves erect.",
    "a": "Ronald Reagan",
    "c": "138",
    "h": "<blockquote>&ldquo;There are no constraints on the human mind, no walls around the human spirit, no barriers to our progress except those we ourselves erect.&rdquo; &mdash; <footer>Ronald Reagan</footer></blockquote>"
  },
  {
    "q": "The more you know, the more you know you don't know.",
    "a": "Aristotle",
    "c": "52",
    "h": "<blockquote>&ldquo;The more you know, the more you know you don't know.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
  },
  {
    "q": "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
    "a": "Elon Musk",
    "c": "91",
    "h": "<blockquote>&ldquo;It's OK to have your eggs in one basket as long as you control what happens to that basket.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
  },
  {
    "q": "If anything is worth doing, do it with all your heart.",
    "a": "Buddha",
    "c": "54",
    "h": "<blockquote>&ldquo;If anything is worth doing, do it with all your heart.&rdquo; &mdash; <footer>Buddha</footer></blockquote>"
  },
  {
    "q": "Success is like reaching an important birthday and finding you're exactly the same.",
    "a": "Audrey Hepburn",
    "c": "83",
    "h": "<blockquote>&ldquo;Success is like reaching an important birthday and finding you're exactly the same.&rdquo; &mdash; <footer>Audrey Hepburn</footer></blockquote>"
  },
  {
    "q": "Our deeds determine us, as much as we determine our deeds.",
    "a": "George Eliot",
    "c": "58",
    "h": "<blockquote>&ldquo;Our deeds determine us, as much as we determine our deeds.&rdquo; &mdash; <footer>George Eliot</footer></blockquote>"
  },
  {
    "q": "I've always lived in the moment.",
    "a": "Yanni",
    "c": "32",
    "h": "<blockquote>&ldquo;I've always lived in the moment.&rdquo; &mdash; <footer>Yanni</footer></blockquote>"
  },
  {
    "q": "The attempt to escape from pain, is what creates more pain.",
    "a": "Gabor Mate",
    "c": "59",
    "h": "<blockquote>&ldquo;The attempt to escape from pain, is what creates more pain.&rdquo; &mdash; <footer>Gabor Mate</footer></blockquote>"
  },
  {
    "q": "Everything great that has ever happened to humanity has begun as a single thought in someone's mind.",
    "a": "Yanni",
    "c": "100",
    "h": "<blockquote>&ldquo;Everything great that has ever happened to humanity has begun as a single thought in someone's mind.&rdquo; &mdash; <footer>Yanni</footer></blockquote>"
  },
  {
    "q": "The key to success is to focus our conscious mind on things we desire not things we fear. ",
    "a": "Brian Tracy",
    "c": "90",
    "h": "<blockquote>&ldquo;The key to success is to focus our conscious mind on things we desire not things we fear. &rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "The truth... It is a beautiful and terrible thing, and should therefore be treated with great caution.",
    "a": "Albus Dumbledore",
    "c": "102",
    "h": "<blockquote>&ldquo;The truth... It is a beautiful and terrible thing, and should therefore be treated with great caution.&rdquo; &mdash; <footer>Albus Dumbledore</footer></blockquote>"
  },
  {
    "q": "Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.",
    "a": "Dalai Lama",
    "c": "89",
    "h": "<blockquote>&ldquo;Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>"
  },
  {
    "q": "Happiness is a choice and a skill and you can dedicate yourself to learning that skill and making that choice.",
    "a": "Naval Ravikant",
    "c": "110",
    "h": "<blockquote>&ldquo;Happiness is a choice and a skill and you can dedicate yourself to learning that skill and making that choice.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>"
  },
  {
    "q": "The spirit is beyond destruction. No one can bring an end to spirit which is everlasting.",
    "a": "Bhagavad Gita",
    "c": "89",
    "h": "<blockquote>&ldquo;The spirit is beyond destruction. No one can bring an end to spirit which is everlasting.&rdquo; &mdash; <footer>Bhagavad Gita</footer></blockquote>"
  },
  {
    "q": "A zen master's life is one continuous mistake.",
    "a": "Dogen",
    "c": "46",
    "h": "<blockquote>&ldquo;A zen master's life is one continuous mistake.&rdquo; &mdash; <footer>Dogen</footer></blockquote>"
  },
  {
    "q": "The quality, not the longevity, of one's life is what is important.",
    "a": "Martin Luther King, Jr.",
    "c": "67",
    "h": "<blockquote>&ldquo;The quality, not the longevity, of one's life is what is important.&rdquo; &mdash; <footer>Martin Luther King, Jr.</footer></blockquote>"
  },
  {
    "q": "Do not fight with pigs - you will be smeared in mud but the pig will like it.",
    "a": "George Bernard Shaw",
    "c": "77",
    "h": "<blockquote>&ldquo;Do not fight with pigs - you will be smeared in mud but the pig will like it.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
  },
  {
    "q": "No man is happy who does not think himself so.",
    "a": "Norman Vincent Peale",
    "c": "46",
    "h": "<blockquote>&ldquo;No man is happy who does not think himself so.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
  },
  {
    "q": "Public opinion is the worst of all opinions.",
    "a": "Nicolas Chamfort",
    "c": "44",
    "h": "<blockquote>&ldquo;Public opinion is the worst of all opinions.&rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>"
  },
  {
    "q": "By words the mind is winged.",
    "a": "Aristophanes",
    "c": "28",
    "h": "<blockquote>&ldquo;By words the mind is winged.&rdquo; &mdash; <footer>Aristophanes</footer></blockquote>"
  },
  {
    "q": "Learn from the mistakes of others. You can't live long enough to make them all yourself.",
    "a": "Eleanor Roosevelt",
    "c": "88",
    "h": "<blockquote>&ldquo;Learn from the mistakes of others. You can't live long enough to make them all yourself.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
  },
  {
    "q": "Self-knowledge is the beginning of self-correction.",
    "a": "Norman Vincent Peale",
    "c": "51",
    "h": "<blockquote>&ldquo;Self-knowledge is the beginning of self-correction.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
  },
  {
    "q": "From morning till night, we should never rely on a single thing.",
    "a": "Huang Po",
    "c": "64",
    "h": "<blockquote>&ldquo;From morning till night, we should never rely on a single thing.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>"
  },
  {
    "q": "Productize your perspective.",
    "a": "Jack Butcher",
    "c": "28",
    "h": "<blockquote>&ldquo;Productize your perspective.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>"
  },
  {
    "q": "Every second you have on this planet is very precious and it's your responsibility that you're happy.",
    "a": "Naval Ravikant",
    "c": "101",
    "h": "<blockquote>&ldquo;Every second you have on this planet is very precious and it's your responsibility that you're happy.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>"
  },
  {
    "q": "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    "a": "Ayn Rand",
    "c": "100",
    "h": "<blockquote>&ldquo;Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
  },
  {
    "q": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    "a": "Aristotle",
    "c": "90",
    "h": "<blockquote>&ldquo;It is the mark of an educated mind to be able to entertain a thought without accepting it.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
  },
  {
    "q": "Failure is an option here. If things are not failing, you are not innovating enough.",
    "a": "Elon Musk",
    "c": "84",
    "h": "<blockquote>&ldquo;Failure is an option here. If things are not failing, you are not innovating enough.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
  },
  {
    "q": "The danger of an adventure is worth a thousand days of ease and comfort.",
    "a": "Paulo Coelho",
    "c": "72",
    "h": "<blockquote>&ldquo;The danger of an adventure is worth a thousand days of ease and comfort.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
  },
  {
    "q": "Discontent is the first necessity of progress.",
    "a": "Thomas Edison",
    "c": "46",
    "h": "<blockquote>&ldquo;Discontent is the first necessity of progress.&rdquo; &mdash; <footer>Thomas Edison</footer></blockquote>"
  },
  {
    "q": "Waste no more time arguing about what a good man should be. Be one.",
    "a": "Marcus Aurelius",
    "c": "67",
    "h": "<blockquote>&ldquo;Waste no more time arguing about what a good man should be. Be one.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
  },
  {
    "q": "Failure is acceptable. Not trying is a whole different ball park.",
    "a": "Michael Jordan",
    "c": "65",
    "h": "<blockquote>&ldquo;Failure is acceptable. Not trying is a whole different ball park.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>"
  },
  {
    "q": "The most important battle is one to conquer yourself.",
    "a": "Yanni",
    "c": "53",
    "h": "<blockquote>&ldquo;The most important battle is one to conquer yourself.&rdquo; &mdash; <footer>Yanni</footer></blockquote>"
  }
]

const App = () => {
  document.body.style.backgroundColor = 'hsl(218, 23%, 16%)'
  document.body.style.transition = '.3s ease-in'
  window.onload = () => {
    setTimeout(() => {
      alert('😀 Click on the dice icon to generate a new quote... ')
    },3000)
  }

  // State
  const [singleQuote, setSingleQuote] = useState(null)

  // Handlers
  const handleGenerateQuote = () => {
    const num = Math.floor(Math.random() * 250)
    setSingleQuote({
      ...quotesData[num],
      id: num-1
    })
  }

  useEffect(() => {
    setTimeout(()=>{
      handleGenerateQuote()
    }, 1000)
  }, [])
  
  return (
    <>
      <div className="main-container w-full h-screen flex justify-center items-center font-body">
        {!singleQuote ? 
          <p className='text-xl text-primary2 transition-all ease-out'>Loading...</p>
        :
          <div className="QuoteCard relative bg-DarkGrayishBlue drop-shadow-lg rounded-2xl w-11/12 sm:w-3/6 md:w-2/6 p-5 text-center flex flex-col justify-center">

          <p className="py-2 text-xs font-bold text-primary2 uppercase">advice #{singleQuote.id}</p>

          <h2 className='py-4 text-primary1 font-bold text-xl'>
            {singleQuote.q}
          </h2>

          <p className="py-2 text-xs font-bold text-primary2 uppercase">{singleQuote.a}</p>

          {/* Patterns */}
          <img src={PatternIcon_Desktop} className='pt-5 hidden sm:block' alt="icon" />
          <img src={PatternIcon_Mobile} className='pt-5 sm:hidden' alt="icon" />

          {/* Dice Icon */}
          <DiceIcon onClick={handleGenerateQuote}/>
        </div>}
      </div>
    </>
  )
}

export default App