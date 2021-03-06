const questions = [
  {
    question: 'Meaning of life?',
    answer: '42',
  },
  {
    question: 'Where is the city of Swansea located?',
    answer: 'Wales',
  },
  {
    question: 'When is Christmas Eve celebrated?',
    answer: '24th of December',
  },
  {
    question:
      'Which British sportsman won five consecutive gold medals at the Olympic Games in the rowing category?',
    answer: 'Sir Steve Redgrave',
  },
  {
    question:
      'What is the name of the centrepiece to the Remembrance Day service located in Whitehall, London?',
    answer: 'Cenotaph',
  },
  {
    question: 'Who was the inventor of the World Wide Web?',
    answer: 'Sir Tim Berners-Lee',
  },
  {
    question:
      'What does the UK offer to its residents or citizens (choose FIVE answers)?',
    answer:
      'Freedom of belief and religion, Freedom of speech, Freedom from unfair discrimination, A right to a fair trial, A right to join in the election of a government',
  },
  {
    question: 'When did the Wars of the Roses start?',
    answer: '1455',
  },
  {
    question: 'How many members does the Scottish Parliament have?',
    answer: '129',
  },
  {
    question: 'What does the term ‘coalition’ refer to?',
    answer:
      'If no political party wins a majority, two parties may join and govern together',
  },
  {
    question:
      'The public can listen to debates in the Palace of Westminster from public galleries in both the House of Commons and the House of Lords',
    answer: 'True',
  },
  {
    question: 'Pool and darts are traditional pub games.',
    answer: 'True',
  },
  {
    question: 'When did the UK join the European Economic Community (EEC)?',
    answer: 'In 1973',
  },
  {
    question:
      'What is the minimum age requirement in the UK to drink wine or beer with a meal provided you are with someone over 18?',
    answer: '16 years old',
  },
  {
    question: 'Who is the spiritual leader of the Church of England?',
    answer: 'The Archbishop of Canterbury',
  },
  {
    question: 'Civil servants cannot stand for public office',
    answer: 'True',
  },
  {
    question: 'Elizabeth I was the younger daughter of which King?',
    answer: 'Henry VIII',
  },
  {
    question: 'When did the First World War end?',
    answer: '11th of November 1918',
  },
  {
    question:
      'Which British scientist was awarded a Nobel Prize for discovering the structure of the DNA molecule?',
    answer: 'Francis Crick',
  },
  {
    question: 'When did people learn how to make bronze?',
    answer: 'Around 4,000 years ago',
  },
  {
    question: 'Who was Boudicca?',
    answer: 'One of the tribal leaders who fought against the Romans',
  },
  {
    question:
      'What actions did Henry VII take after his victory in the Wars of the Roses?',
    answer: 'Reduced the power of the nobles',
  },
  {
    question: 'Who became Prime Minister of the UK in May 2010?',
    answer: 'David Cameron',
  },
  {
    question: 'How were Elizabeth I and ‘Mary, Queen of Scots’ related?',
    answer: 'They were cousins',
  },
  {
    question: 'Choose the correct answer, the Middle Ages was',
    answer: 'A period of constant war',
  },
  {
    question: 'What does the acronym NATO stand for?',
    answer: 'The North Atlantic Treaty Organisation',
  },
  {
    question: 'What characterised the people from the Bronze Age?',
    answer: 'They were accomplished metalworkers',
  },
  {
    question:
      'What is the name of the event that refers to the 6 June 1944 when Allied Forces landed in Normandy aiming to attack Hitler’s forces in Western Europe during World War II?',
    answer: 'D-Day',
  },
  {
    question:
      'Which British Prime Minister led the Conservative government from 1979 to 1990?',
    answer: 'Margaret Thatcher',
  },
  {
    question:
      'Which of the following civilisations is known for having built roads and public buildings, creating a structure of law and having introduced new plants and animals in Britain?',
    answer: 'The Romans',
  },
  {
    question:
      'What marked the beginning of what is called ‘constitutional monarchy’?',
    answer: 'The laws passed after the Glorious Revolution',
  },
  {
    question: 'When was the Turing machine discovered?',
    answer: 'In the 1930s',
  },
  {
    question:
      'During which period were the House of Lords and House of Commons established?',
    answer: 'Middle Ages',
  },
  {
    question: 'How many years did Queen Victoria reign for?',
    answer: 'Almost 64 years',
  },
  {
    question: 'What is the name of Admiral Nelson’s ship?',
    answer: 'HMS Victory',
  },
  {
    question:
      'What are the British scientists Sir Ian Wilmot and Keith Campbell famous for?',
    answer: 'The cloning of the first mammal, Dolly the sheep',
  },
  {
    question:
      'Which of the following was one of the commanders in the defeat of the Spanish Armada and one of the founders of England’s naval tradition?',
    answer: 'Sir Francis Drake',
  },
  {
    question: 'Edward VI son of Henry VIII was Catholic or Protestant',
    answer: 'Protestant',
  },
  {
    question: 'Which is scottish? Scotch eggs / Haggis',
    answer: 'Haggis - sheep stomach dish',
  },
  {
    question: 'Is Beowulf a middle ages poem?',
    answer: 'No',
  },
  {
    question:
      'Passport to Pimlico, The ladykillers and Carry On are which kind of films?',
    answer: 'Comedies',
  },
  {
    question: 'Which organisation looks after the Edinburgh Castle?',
    answer: 'Historic Scotland',
  },
  {
    question: 'How many casualties in WWI?',
    answer: 'two million',
  },
  {
    question: 'Who did Mary, Queen of Scots give her throne to?',
    answer: 'Her son james VI',
  },
  {
    question: 'Who was sir Francis Chichester',
    answer: 'First person to sail around the world?',
  },
  {
    question: 'At what age can you drive a car or motorcycle in the UK?',
    answer: '17',
  },
  {
    question: 'What scottish painter is known for The origin of Painting',
    answer: 'David Allan',
  },
  {
    question: 'Where is the Statue of Boudicca queen of Iceni?',
    answer: 'Westminster Bridge',
  },
  { question: 'When was battle of Bannockburn?', answer: '1314' },
  {
    question: 'British poets about WW1',
    answer: 'Siegfried Sassoon and Wilfred Owen',
  },
  {
    question: 'Dame Ellen Marchartur is famous for?',
    answer: 'Fastest person to sail around the world, single handed',
  },
  {
    question: 'Since when has the man booker prize been awarded?',
    answer: '1968',
  },
  {
    question: 'Why is Leamington spa famous?',
    answer: 'First tennis club was founded there',
  },
  {
    question: 'Which two Henry VIII wifes are executed?',
    answer: 'anna boleyn and Catherine Howard',
  },
  {
    question: 'Two types of rugby?',
    answer: 'union and league',
  },
  {
    question: 'Two famous british film directors?',
    answer: 'Alfred Hitchcock and Sir Alexander Korda',
  },
  { question: 'Royal Society was formed by?', answer: 'Charles I' },
  {
    question: 'Bradley wiggins is famous for?',
    answer: 'winning tour de france',
  },
  {
    question:
      'Austen Butler who introduced Education act 1944 was from which party?',
    answer: 'Conservative',
  },
  {
    question: 'Where was Newton born?',
    answer: 'Linconshire',
  },
  { question: 'Who painted Dedham Vale?', answer: 'John Constable' },
  {
    question: 'Where was Dylan Thomas the writer born',
    answer: 'Swansea',
  },
  {
    question:
      'Architectural significance of a country house: Hardwick Hall or Elgin manor?',
    answer: 'Hardwick Hall',
  },
  {
    question: 'Who is the bard of Scotland?',
    answer: 'Robert Burns',
  },
  {
    question: 'How many members are in the Senedd?',
    answer: '120',
  },
  {
    question: 'Why did they build the London Eye?',
    answer: 'To celebrate the new millenium',
  },
  {
    question: 'Which Scottish co discovered the insulin?',
    answer: 'John Macleod',
  },
  {
    question: 'What architectural style was popular in 19th century?',
    answer: 'Gothic',
  },
  {
    question: 'how many kids did elisabeth 1 had?',
    answer: 'none',
  },
  {
    question: 'How many on jury in Scotland?',
    answer: '15',
  },
  {
    question: 'How many on jury in England, Wales and Northern Ireland?',
    answer: '12',
  },
  {
    question: 'From Music Hall to TV stars?',
    answer: 'Morecambe and Wise',
  },
  {
    question: 'Who wrote the poem Home Thoughts from Abroad?',
    answer: 'Robert Browning',
  },
  {
    question:
      'What did the Scottish do after Charles 1 imposed the stupid prayer book?',
    answer: 'They invaded England:)',
  },
  {
    question: 'What is the prize for Theatre?',
    answer: 'The Laurance Olivier Awards',
  },
  {
    question: 'When did Britain get separated from the continent permanently?',
    answer: '10000 years ago',
  },
  {
    question: 'Famous garden in Scotland?',
    answer: 'Inveraray Castle',
  },
  {
    question: 'Who is sir Roger Bannister?',
    answer: 'He ran 1 mile under 4 minutes for the first time',
  },
  {
    question: 'Who invented the ATM in 60s?',
    answer: 'James Goodfellow',
  },
  {
    question: 'How long was the Hundred Years War?',
    answer: '116',
  },
  {
    question: 'Where was Sake Dean Mahomet raised?',
    answer: 'Bengal region of India',
  },
  {
    question: 'Beveridge was member of which party?',
    answer: 'Liberal',
  },
  {
    question: 'Where and When was Battle of Boyne?',
    answer: 'Ireland, 1690 - William orange defeated James II',
  },
  {
    question: 'Kingsley Amis" most famous book?',
    answer: 'Lucky Jim',
  },
  {
    question: 'Why is sir John Lavery famous?',
    answer: 'He painted the Royal Family',
  },
  {
    question: 'Who killed Richard III at the battle of Bosworth FIeld?',
    answer: 'Henry Tudor',
  },
  {
    question: 'Which garden is in the nOrthern Ireland?',
    answer: 'Mount Stewart',
  },
  {
    question: 'John Petts is famous for?',
    answer: 'Stained glass and Engravings',
  },
  {
    question: 'Graham Greenes famous novel?',
    answer: 'The heart of the matter',
  },
  {
    question: 'how old for Moped?',
    answer: '16',
  },
  {
    question: 'Jackie Stewart?',
    answer: 'Formula 1 Winner',
  },
  { question: 'when was the enlightment?', answer: '18th Century' },
]

export default questions
