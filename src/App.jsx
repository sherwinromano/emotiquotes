import { useState } from "react";
import "./sass/App.scss";

function App() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectValue, setSelectValue] = useState("Select a mood");
  const moods = [
    {
      emoji: "😊",
      mood: "Happy",
    },
    {
      emoji: "😔",
      mood: "Sad",
    },
    {
      emoji: "😠",
      mood: "Angry",
    },
  ];
  const [emoji, setEmoji] = useState("");
  const [result, setResult] = useState([]);

  const happy = [
    {
      quote:
        "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
      author: "Norman Vincent Peale",
    },
    {
      quote:
        "The happiest people seem to be those who have no particular cause for being happy except that they are so.",
      author: "William Inge",
    },
    {
      quote:
        "Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.",
      author: "Marcel Proust",
    },
    {
      quote:
        "Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.",
      author: "Golda Meir",
    },
    {
      quote:
        "One of the best ways to make yourself happy in the present is to recall happy times from the past. Photos are a great memory-prompt, and because we tend to take photos of happy occasions, they weight our memories to the good.",
      author: "Gretchen Rubin",
    },
    {
      quote:
        "Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.",
      author: "Helen Keller",
    },
    {
      quote:
        "Struggle teaches you a lot of things, and I am happy that I witnessed a roller coaster ride. The journey has improved me as a person and made me more mature.",
      author: "Manoj Bajpayee",
    },
    {
      quote:
        "Try and leave this world a little better than you found it, and when your turn comes to die, you can die happy in feeling that at any rate, you have not wasted your time but have done your best.",
      author: "Robert Baden-Powell",
    },
    {
      quote:
        "The only way you gain mental toughness is to do things you're not happy doing. If you continue doing things that you're satisfied and make you happy, you're not getting stronger. You're staying where you're at. Either you're getting better, or you're getting worse. You're not staying the same.",
      author: "David Goggins",
    },
    {
      quote:
        "I, not events, have the power to make me happy or unhappy today. I can choose which it shall be. Yesterday is dead, tomorrow hasn't arrived yet. I have just one day, today, and I'm going to be happy in it.",
      author: "Groucho Marx",
    },
    {
      quote:
        "Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness. It is far better take things as they come along with patience and equanimity.",
      author: "Carl Jung",
    },
    {
      quote:
        "My theory on life is that life is beautiful. Life doesn't change. You have a day, and a night, and a month, and a year. We people change - we can be miserable or we can be happy. It's what you make of your life.",
      author: "Mohammed bin Rashid Al Maktoum",
    },
    {
      quote:
        "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
      author: "Albert Camus",
    },
    {
      quote:
        "I am determined to be cheerful and happy in whatever situation I may find myself. For I have learned that the greater part of our misery or unhappiness is determined not by our circumstance but by our disposition.",
      author: "Martha Washington",
    },
    {
      quote:
        "We don't develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity.",
      author: "Barbara De Angelis",
    },
    {
      quote:
        "You know, all that really matters is that the people you love are happy and healthy. Everything else is just sprinkles on the sundae.",
      author: "Paul Walker",
    },
    {
      quote:
        "Money has never made man happy, nor will it, there is nothing in its nature to produce happiness. The more of it one has the more one wants.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "Be happy with being you. Love your flaws. Own your quirks. And know that you are just as perfect as anyone else, exactly as you are.",
      author: "Ariana Grande",
    },
    {
      quote:
        "Stay positive and happy. Work hard and don't give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people.",
      author: "Tena Desae",
    },
    {
      quote:
        "I don't know what your destiny will be, but one thing I know: the only ones among you who will be really happy are those who will have sought and found how to serve.",
      author: "Albert Schweitzer",
    },
    {
      quote:
        "Learning lessons is a little like reaching maturity. You're not suddenly more happy, wealthy, or powerful, but you understand the world around you better, and you're at peace with yourself. Learning life's lessons is not about making your life perfect, but about seeing life as it was meant to be.",
      author: "Elisabeth Kubler-Ross",
    },
    {
      quote:
        "Happiness is an attitude of mind, born of the simple determination to be happy under all outward circumstances.",
      author: "J. Donald Walters",
    },
    {
      quote:
        "If we only wanted to be happy, it would be easy; but we want to be happier than other people, and that is almost always difficult, since we think them happier than they are.",
      author: "Montesquieu",
    },
    {
      quote:
        "Morality is not the doctrine of how we may make ourselves happy, but how we may make ourselves worthy of happiness.",
      author: "Immanuel Kant",
    },
    {
      quote:
        "We are not the same persons this year as last; nor are those we love. It is a happy chance if we, changing, continue to love a changed person.",
      author: "W. Somerset Maugham",
    },
    {
      quote:
        "We all have a hungry heart, and one of the things we hunger for is happiness. So as much as I possibly could, I stayed where I was happy.",
      author: "Mary Oliver",
    },
    {
      quote:
        "Life is short, and if we enjoy every moment of every day, then we will be happy no matter what happens or what changes along the way.",
      author: "Gretchen Bleiler",
    },
    {
      quote:
        "Be happy with what you have and are, be generous with both, and you won't have to hunt for happiness.",
      author: "William E. Gladstone",
    },
    {
      quote:
        "A happy life must be to a great extent a quiet life, for it is only in an atmosphere of quiet that true joy dare live.",
      author: "Bertrand Russell",
    },
    {
      quote:
        "To be happy at home is the ultimate result of all ambition, the end to which every enterprise and labor tends, and of which every desire prompts the prosecution.",
      author: "Samuel Johnson",
    },
    {
      quote:
        "For me the best thing about winning an award is when the people cheer for your win. When you can see that the people are really happy that you are winning something, that's the most reward thing in the world.",
      author: "Busta Rhymes",
    },
    {
      quote:
        "And now, once again, I bid my hideous progeny go forth and prosper. I have an affection for it, for it was the offspring of happy days, when death and grief were but words, which found no true echo in my heart.",
      author: "Mary Shelley",
    },
    {
      quote:
        "Happiness is the only good. The time to be happy is now. The place to be happy is here. The way to be happy is to make others so.",
      author: "Robert Green Ingersoll",
    },
    {
      quote:
        "Often people ask how I manage to be happy despite having no arms and no legs. The quick answer is that I have a choice. I can be angry about not having limbs, or I can be thankful that I have a purpose. I chose gratitude.",
      author: "Nick Vujicic",
    },
    {
      quote:
        "Money is not a motivating factor. Money doesn't thrill me or make me play better because there are benefits to being wealthy. I'm just happy with a ball at my feet. My motivation comes from playing the game I love. If I wasn't paid to be a professional footballer I would willingly play for nothing.",
      author: "Lionel Messi",
    },
    {
      quote:
        "A sound mind in a sound body, is a short, but full description of a happy state in this World: he that has these two, has little more to wish for; and he that wants either of them, will be little the better for anything else.",
      author: "John Locke",
    },
    {
      quote:
        "Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored.",
      author: "Earl Nightingale",
    },
    {
      quote:
        "I think the biggest disease the world suffers from in this day and age is the disease of people feeling unloved. I know that I can give love for a minute, for half an hour, for a day, for a month, but I can give. I am very happy to do that, I want to do that.",
      author: "Princess Diana",
    },
    {
      quote:
        "At the end of the day, you are in control of your own happiness. Life is going to happen whether you overthink it, overstress it or not. Just experience life and be happy along the way. You can't control everything in your life, but you can control your happiness.",
      author: "Holly Holm",
    },
    {
      quote:
        "He who is of calm and happy nature will hardly feel the pressure of age, but to him who is of an opposite disposition youth and age are equally a burden.",
      author: "Plato",
    },
    {
      quote:
        "I need to celebrate life because I'm in a good spot, I work hard, and I am happy with who I am and happy with what I do for a living, and sometimes I just focus and overwhelm myself so much with the fights and getting better, that I just need to slow it down and enjoy life and enjoy training.",
      author: "Dustin Poirier",
    },
    {
      quote:
        "Perfect happiness is a beautiful sunset, the giggle of a grandchild, the first snowfall. It's the little things that make happy moments, not the grand events. Joy comes in sips, not gulps.",
      author: "Sharon Draper",
    },
    {
      quote:
        "With me, what you see is what you get. Yes, call me naive, but I love life. I am happy, and for that, I make no apologies. I do like to see the best in people, and when someone is nice to my face, I tend to believe them.",
      author: "Joyce Giraud",
    },
    {
      quote:
        "Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management, which is perhaps the most important ingredient to living a happy, healthy and rewarding life.",
      author: "Marilu Henner",
    },
    {
      quote:
        "If you truly get in touch with a piece of carrot, you get in touch with the soil, the rain, the sunshine. You get in touch with Mother Earth and eating in such a way, you feel in touch with true life, your roots, and that is meditation. If we chew every morsel of our food in that way we become grateful and when you are grateful, you are happy.",
      author: "Thich Nhat Hanh",
    },
    {
      quote:
        "A birthday is just another day where you go to work and people give you love. Age is just a state of mind, and you are as old as you think you are. You have to count your blessings and be happy.",
      author: "Abhishek Bachchan",
    },
    {
      quote:
        "You never know what the future holds, so I am just enjoying being happy, healthy, and having my wonderful husband by my side.",
      author: "Olivia Newton-John",
    },
    {
      quote:
        "Happiness, true happiness, is an inner quality. It is a state of mind. If your mind is at peace, you are happy. If your mind is at peace, but you have nothing else, you can be happy. If you have everything the world can give - pleasure, possessions, power - but lack peace of mind, you can never be happy.",
      author: "Dada Vaswani",
    },
    {
      quote:
        "The glory is being happy. The glory is not winning here or winning there. The glory is enjoying practicing, enjoy every day, enjoying to work hard, trying to be a better player than before.",
      author: "Rafael Nadal",
    },
    {
      quote:
        "Success is not defined by money or status, necessarily, but by how many people you've impacted and how fulfilled you feel with your decisions. If you can garner all of these things, then more power and success to you, but all in all, you must feel happy and satisfied with what you personally have put out into the world",
      author: "Kirstin Maldonado.",
    },
  ];
  const sad = [
    {
      quote:
        "For all sad words of tongue and pen, The saddest are these, 'It might have been'.",
      author: "John Greenleaf Whittier",
    },
    {
      quote:
        "There is a sacredness in tears. They are not the mark of weakness, but of power. They speak more eloquently than ten thousand tongues. They are the messengers of overwhelming grief, of deep contrition, and of unspeakable love.",
      author: "Washington Irving",
    },
    {
      quote:
        "Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is.",
      author: "Dita Von Teese",
    },
    {
      quote: "Don't grieve. Anything you lose comes round in another form.",
      author: "Rumi",
    },
    {
      quote:
        "Your pain is the breaking of the shell that encloses your understanding.",
      author: "Khalil Gibran",
    },
    {
      quote:
        "The rose and the thorn, and sorrow and gladness are linked together.",
      author: "Saadi",
    },
    {
      quote: "Tears come from the heart and not from the brain.",
      author: "Leonardo da Vinci",
    },
    {
      quote:
        "Make the most of your regrets; never smother your sorrow, but tend and cherish it till it comes to have a separate and integral interest. To regret deeply is to live afresh.",
      author: "Henry David Thoreau",
    },
    {
      quote:
        "Worry never robs tomorrow of its sorrow, it only saps today of its joy.",
      author: "Leo Buscaglia",
    },
    {
      quote:
        "Sorrows are like thunderclouds, in the distance they look black, over our heads scarcely gray.",
      author: "Jean Paul",
    },
    {
      quote: "Our sweetest songs are those that tell of saddest thought.",
      author: "Percy Bysshe Shelley",
    },
    {
      quote: "A sad soul can kill quicker than a germ.",
      author: "John Steinbeck",
    },
    {
      quote:
        "The walls we build around us to keep sadness out also keeps out the joy.",
      author: "Jim Rohn",
    },
    {
      quote: "Nothing is more sad than the death of an illusion.",
      author: "Arthur Koestler",
    },
    {
      quote: "Depression is the inability to construct a future.",
      author: "Rollo May",
    },
    {
      quote:
        "Affliction comes to us, not to make us sad but sober; not to make us sorry but wise.",
      author: "H. G. Wells",
    },
    {
      quote:
        "Participate joyfully in the sorrows of the world. We cannot cure the world of sorrows, but we can choose to live in joy.",
      author: "Joseph Campbell",
    },
    {
      quote:
        "If we could read the secret history of our enemies we should find in each man's life sorrow and suffering enough to disarm all hostility.",
      author: "Henry Wadsworth Longfellow",
    },
    {
      quote:
        "The word 'happy' would lose its meaning if it were not balanced by sadness.",
      author: "Carl Jung",
    },
    {
      quote:
        "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep.",
      author: "Taraji P. Henson",
    },
    {
      quote:
        "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.",
      author: "Christopher Morley",
    },
    {
      quote: "Sadness flies away on the wings of time.",
      author: "Jean de La Fontaine",
    },
    {
      quote:
        "There is no despair so absolute as that which comes with the first moments of our first great sorrow, when we have not yet known what it is to have suffered and be healed, to have despaired and have recovered hope.",
      author: "George Eliot",
    },
    {
      quote:
        "Oh, I am very weary, Though tears no longer flow; My eyes are tired of weeping, My heart is sick of woe.",
      author: "Anne Bronte",
    },
    {
      quote:
        "It is sadder to find the past again and find it inadequate to the present than it is to have it elude you and remain forever a harmonious conception of memory.",
      author: "F. Scott Fitzgerald",
    },
    {
      quote:
        "For I have learned to look on nature, not as in the hour of thoughtless youth, but hearing oftentimes the still, sad music of humanity.",
      author: "William Wordsworth",
    },
    {
      quote:
        "Can I see another's woe, and not be in sorrow too? Can I see another's grief, and not seek for kind relief?",
      author: "William Blake",
    },
    {
      quote: "One must not let oneself be overwhelmed by sadness.",
      author: "Jackie Kennedy",
    },
    {
      quote:
        "And I remember going to the record studio and there was a park across the street and I'd see all the children playing and I would cry because it would make me sad that I would have to work instead.",
      author: "Michael Jackson",
    },
    {
      quote:
        "If you don't know about pain and trouble, you're in sad shape. They make you appreciate life.",
      author: "Evel Knievel",
    },
    {
      quote:
        "They say it's better to bury your sadness in a graveyard or garden that waits for the spring to wake from its sleep and burst into green.",
      author: "Conor Oberst",
    },
    {
      quote:
        "First, accept sadness. Realize that without losing, winning isn't so great.",
      author: "Alyssa Milano",
    },
    {
      quote:
        "I can see the humorous side of things and enjoy the fun when it comes; but look where I will, there seems to me always more sadness than joy in life.",
      author: "Jerome K. Jerome",
    },
    {
      quote:
        "In this world, full often, our joys are only the tender shadows which our sorrows cast.",
      author: "Henry Ward Beecher",
    },
    {
      quote:
        "Experiencing sadness and anger can make you feel more creative, and by being creative, you can get beyond your pain or negativity.",
      author: "Yoko Ono",
    },
    {
      quote:
        "Sad things happen. They do. But we don't need to live sad forever.",
      author: "Mattie Stepanek",
    },
    {
      quote:
        "Melancholy and sadness are the start of doubt... doubt is the beginning of despair; despair is the cruel beginning of the differing degrees of wickedness.",
      author: "Comte de Lautreamont",
    },
    {
      quote:
        "It is a sad thing when men have neither the wit to speak well nor the judgment to hold their tongues.",
      author: "Jean de la Bruyere",
    },
    {
      quote:
        "Sad will be the day for any man when he becomes contented with the thoughts he is thinking and the deeds he is doing - where there is not forever beating at the doors of his soul some great desire to do something larger; which he knows he was meant and made to do.",
      author: "Phillips Brooks",
    },
    {
      quote:
        "A tragedy need not have blood and death; it's enough that it all be filled with that majestic sadness that is the pleasure of tragedy.",
      author: "Jean Racine",
    },
    {
      quote:
        "Sad people dislike the happy, and the happy the sad; the quick thinking the sedate, and the careless the busy and industrious.",
      author: "Horace",
    },
    {
      quote:
        "I really believe that all of us have a lot of darkness in our souls. Anger, rage, fear, sadness. I don't think that's only reserved for people who have horrible upbringings. I think it really exists and is part of the human condition. I think in the course of your life you figure out ways to deal with that.",
      author: "Kevin Bacon",
    },
    {
      quote:
        "I love my past, I love my present. I am not ashamed of what I have had, and I am not sad because I no longer have it.",
      author: "Sidonie Gabrielle Colette",
    },
    {
      quote:
        "Crying is cleansing. There's a reason for tears, happiness or sadness.",
      author: "Dionne Warwick",
    },
    {
      quote:
        "Isn't it sad to go to your grave without ever wondering why you were born? Who, with such a thought, would not spring from bed, eager to resume discovering the world and rejoicing to be part of it?.",
      author: "Richard Dawkins",
    },
    {
      quote:
        "People are sad. People are broke. People are worried about money, people are worried that they're not enough and not amounting to anything and they don't feel good about themselves. People have rough times, and everybody's pretending it's not true, and we need to break that veneer.",
      author: "Eve Ensler",
    },
    {
      quote:
        "Dying is only one thing to be sad over... Living unhappily is something else.",
      author: "Morrie Schwartz",
    },
    {
      quote:
        "Let us remember that sorrow alone is the creator of great things.",
      author: "Ernest Renan",
    },
    {
      quote:
        "It is one of the most saddening things in life that, try as we may, we can never be certain of making people happy, whereas we can almost always be certain of making them unhappy.",
      author: "Thomas Huxley",
    },
    {
      quote:
        "We look before and after, And pine for what is not; Our sincerest laughter With some pain is fraught; Our sweetest songs are those that tell of saddest thought.",
      author: "Percy Bysshe Shelley",
    },
  ];
  const anger = [
    {
      quote:
        "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
      author: "Mark Twain",
    },
    {
      quote:
        "Anybody can become angry - that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way - that is not within everybody's power and is not easy.",
      author: "Aristotle",
    },
    {
      quote:
        "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
      author: "Buddha",
    },
    {
      quote: "While seeking revenge, dig two graves - one for yourself.",
      author: "Douglas Horton",
    },
    {
      quote:
        "Love implies anger. The man who is angered by nothing cares about nothing.",
      author: "Edward Abbey",
    },
    {
      quote: "I shall allow no man to belittle my soul by making me hate him.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "Bitterness is like cancer. It eats upon the host. But anger is like fire. It burns it all clean.",
      author: "Maya Angelou",
    },
    {
      quote:
        "If you get down and quarell everyday, you're saying prayers to the devil, I say.",
      author: "Bob Marley",
    },
    {
      quote:
        "When angry count to ten before you speak. If very angry, count to one hundred.",
      author: "Thomas Jefferson",
    },
    {
      quote:
        "For every minute you remain angry, you give up sixty seconds of peace of mind.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote: "Whatever is begun in anger ends in shame.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "Let us not look back in anger, nor forward in fear, but around in awareness.",
      author: "James Thurber",
    },
    {
      quote: "Violence is the last refuge of the incompetent.",
      author: "Isaac Asimov",
    },
    {
      quote:
        "There are two things a person should never be angry at, what they can help, and what they cannot.",
      author: "Plato",
    },
    {
      quote:
        "In times of great stress or adversity, it's always best to keep busy, to plow your anger and your energy into something positive.",
      author: "Lee Iacocca",
    },
    {
      quote:
        "Heaven has no rage like love to hatred turned, nor hell a fury like a woman scorned.",
      author: "William Congreve",
    },
    {
      quote:
        "Every day we have plenty of opportunities to get angry, stressed or offended. But what you're doing when you indulge these negative emotions is giving something outside yourself power over your happiness. You can choose to not let little things upset you.",
      author: "Joel Osteen",
    },
    {
      quote: "Never go to bed mad. Stay up and fight.",
      author: "Phyllis Diller",
    },
    {
      quote: "He who angers you conquers you.",
      author: "Elizabeth Kenny",
    },
    {
      quote:
        "Anger, if not restrained, is frequently more hurtful to us than the injury that provokes it.",
      author: "Lucius Annaeus Seneca",
    },
    {
      quote: "A man that studieth revenge keeps his own wounds green.",
      author: "Francis Bacon",
    },
    {
      quote:
        "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
      author: "Epictetus",
    },
    {
      quote:
        "How much more grievous are the consequences of anger than the causes of it.",
      author: "Marcus Aurelius",
    },
    {
      quote: "The opposite of anger is not calmness, its empathy.",
      author: "Mehmet Oz",
    },
    {
      quote: "To be angry is to revenge the faults of others on ourselves.",
      author: "Alexander Pope",
    },
    {
      quote:
        "Speak when you are angry - and you'll make the best speech you'll ever regret.",
      author: "Laurence J. Peter",
    },
    {
      quote: "Sometimes it's worse to win a fight than to lose.",
      author: "Billie Holiday",
    },
    {
      quote:
        "A man who has not passed through the inferno of his passions has never overcome them.",
      author: "Carl Jung",
    },
    {
      quote:
        "Discussion is an exchange of knowledge; an argument an exchange of ignorance.",
      author: "Robert Quillen",
    },
    {
      quote: "Anger and intolerance are the enemies of correct understanding.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "Fear is the only true enemy, born of ignorance and the parent of anger and hate.",
      author: "Edward Albert",
    },
    {
      quote:
        "A broken bone can heal, but the wound a word opens can fester forever.",
      author: "Jessamyn West",
    },
    {
      quote: "Anger dwells only in the bosom of fools.",
      author: "Albert Einstein",
    },
    {
      quote: "There was never an angry man that thought his anger unjust.",
      author: "Saint Francis de Sales",
    },
    {
      quote:
        "Don't get the impression that you arouse my anger. You see, one can only be angry with those he respects.",
      author: "Richard M. Nixon",
    },
    {
      quote:
        "There's a natural law of karma that vindictive people, who go out of their way to hurt others, will end up broke and alone.",
      author: "Sylvester Stallone",
    },
    {
      quote:
        "Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.",
      author: "Thomas a Kempis",
    },
    {
      quote:
        "People won't have time for you if you are always angry or complaining.",
      author: "Stephen Hawking",
    },
    {
      quote: "We boil at different degrees.",
      author: "Clint Eastwood",
    },
    {
      quote: "Every time you get angry, you poison your own system.",
      author: "Alfred A. Montapert",
    },
    {
      quote: "Get mad, then get over it.",
      author: "Colin Powell",
    },
    {
      quote: "Keep your temper. A decision made in anger is never sound.",
      author: "Ford Frick",
    },
    {
      quote:
        "When a man points a finger at someone else, he should remember that four of his fingers are pointing at himself.",
      author: "Louis Nizer",
    },
    {
      quote: "Anger is a wind which blows out the lamp of the mind.",
      author: "Robert Green Ingersoll",
    },
    {
      quote:
        "Beware of him that is slow to anger; for when it is long coming, it is the stronger when it comes, and the longer kept. Abused patience turns to fury.",
      author: "Francis Quarles",
    },
    {
      quote:
        "Be calm in arguing; for fierceness makes error a fault, and truth discourtesy.",
      author: "George Herbert",
    },
    {
      quote:
        "Anger is a killing thing: it kills the man who angers, for each rage leaves him less than he had been before - it takes something from him.",
      author: "Louis L'Amour",
    },
    {
      quote: "Anger begins with folly, and ends with repentance.",
      author: "Pythagoras",
    },
    {
      quote:
        "It is impossible for you to be angry and laugh at the same time. Anger and laughter are mutually exclusive and you have the power to choose either.",
      author: "Wayne Dyer",
    },
    {
      quote:
        "Indulge not thyself in the passion of anger; it is whetting a sword to wound thine own breast, or murder thy friend.",
      author: "Akhenaton",
    },
  ];

  const randomize = () => {
    if (selectValue == "Happy") {
      const random = Math.floor(Math.random() * happy.length);
      setResult(happy[random]);
    } else if (selectValue == "Sad") {
      const random = Math.floor(Math.random() * sad.length);
      setResult(sad[random]);
    } else if (selectValue == "Angry") {
      const random = Math.floor(Math.random() * anger.length);
      setResult(anger[random]);
    }
  };

  return (
    <main>
      <div className="content-wrapper">
        <section>
          <div className="title-section">
            <h1>Emotiquotes</h1>
            <p>Whatever your mood is, there's a quote behind it.</p>
          </div>
          <div className="input-section">
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() =>
                  setOpenDropdown((current) => (current ? false : true))
                }
              >
                <div className="select-result">
                  {selectValue == "Select a mood" ? (
                    <p>{selectValue}</p>
                  ) : (
                    <>
                      <span>{emoji}</span>
                      <p>{selectValue}</p>
                    </>
                  )}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={openDropdown ? "chevron-up" : "chevron-down"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {openDropdown ? (
                <div className="dropdown-content">
                  <ul>
                    {moods.map((mood) => {
                      return (
                        <li
                          key={mood.mood}
                          onClick={() => (
                            setSelectValue(mood.mood),
                            setEmoji(mood.emoji),
                            setOpenDropdown(false)
                          )}
                        >
                          <span>{mood.emoji}</span>
                          <p>{mood.mood}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
            <button onClick={() => randomize()}>Generate</button>
          </div>
        </section>
        <section>
          <p className="quote">{result.quote}</p>
          <p className="author">{result.author}</p>
        </section>
      </div>
    </main>
  );
}

export default App;
