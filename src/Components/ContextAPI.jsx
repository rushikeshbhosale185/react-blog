import React, { createContext, useState } from "react";

export const store = createContext();

const ContextAPI = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      category: "Home",
      image1: "https://wallpaperaccess.com/full/1512237.jpg",
    },
    {
      id: 2,
      category: "bollywood",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0c1U5BqvHmqy3gpcMlyBfpaLXyFJLVKW-_A&usqp=CAU",
      DataTitle:
        "Bholaa Box Office Estimate Day 3: Show a jump of 40% on Saturday; collects Rs. 10 crores",
      DataDescription:
        "Ajay Devgn's Bholaa has shown good gains in collections on Saturday as estimates indicate third-day number in the range of Rs. 9.75 to 10.50 crores. It's a growth of approx. 45% in the national chains, however, being a Saturday, the mass belts have gone down, consolidating the full-day growth to 40%.",
      DataDetailDescription:
        "Ajay Devgn's Bholaa has shown good gains in collections on Saturday as estimates indicate third-day number in the range of Rs. 9.75 to 10.50 crores. It's a growth of approx. 45% in the national chains, however, being a Saturday, the mass belts have gone down, consolidating the full-day growth to 40%.The three-day total of Bholaa now stands at Rs. 28.60 crores, and the movie is targeting an extended four-day weekend of Rs. 40 crores. These are reasonable numbers, but the real game for Bholaa will begin on Monday, as it's this day which will decide the fate of this actioner in the long run. The multiplexes have gone up on Saturday and this is always a good sign for any feature film. There was a fear of minimal growth on Saturday, but that has not happened.Bholaa opened at Rs. 11.20 crores on Thursday, followed by Rs. 7.40 crores on Friday, and the third day is headed towards the double-digit number. Being a mass heavy film, Sunday should show a jump of a minimum 20 to 25 percent and lay the platform for some sort of trending in the long run. The audience talk is decent and hence there is a hope for the film to hold better on weekdays.It will also benefit on account of holidays of Mahavir Jayanti, Good Friday, and Ambedkar Jayanti in the coming 2 weeks. But all eyes now are on Sunday growth and Monday hold.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 3,
      category: "bollywood",
      DataImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Pathaan.jpg",
      DataTitle:
        "Siddharth Anand says Shah Rukh Khan Salman Khans bridge scene was axed in Pathaan Uday Chopra suggested post credit scene",
      DataDescription:
        "Shah Rukh Khan returned to the big screen earlier this year in a lead role with Pathaan and shattered box office records. to a roar when two superstars, fondly known as Karan Arjun of Indian cinema, came together for an action packed sequence.",
      DataDetailDescription:
        "Shah Rukh Khan returned to the big screen earlier this year in a lead role with Pathaan and shattered box office records. Salman Khan made a cameo in the movie as Tiger and it led to a roar when two superstars, fondly known as Karan  Arjun of Indian cinema, came together for an action-packed sequence. Siddharth Anand recently talked about the post-credit scene where the actors are sitting on the railway track on the bridge talking about the spy universe, which was also a meta moment about their star power.At the News 18 Rising India Summit 2023, Siddharth Anand said, The sequence you watched in post credits, that was the end of that train sequence He added that they struggled with the tone of the scene so we came up with the idea that make it about them in real life and well find humour in that.He continued, But then we chopped that from the film. It ended how that sequence is ending and the film ended. When we saw the film after the final mix, Uday Chopra came up with this idea that we should put that scene at the end of the film. And we all realized, Why did we not think of it Its mind blowing. Credit to Uday Chopra for that suggestion.Siddharth Anand said that he was clear that he wanted to add humour to Salman Khans appearance as Tiger. I wanted it to be funny because you know that they Shah Rukh and Salman will destroy the goons. You are already prepared. How will they do it is what the audience wants to know. But the X factor is the humour. Shah Rukh and Salman have such great chemistry with each other. They are very good friends, they have great understanding and they are like that off-camera also, so I wanted to capture that, he said.Speaking of the Karan Arjun reference, he said that they wanted to play to the gallery, front footed. He made Salman Khan say Bhaag Pathaan bhaag which was a callback to Karan Arjuns Bhaag Arjun bhaag. The director said, Salman was a little shy but I pushed him to do it.Meanwhile, Tiger 3 arrives in theatres on Diwali 2023. Shah Rukh Khan and Salman Khan will reunite again in that film. SRK will shoot for 7 days for a massive action sequence in Tiger 3 that is sure to leave people on the edge of their seats! The film also stars Katrina Kaif as Zoya & Emraan Hashmi as Tigers nemesis.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 4,
      category: "bollywood",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIHToC3YzgIqaFrypPEn0kXgHvAistjRFfw&usqp=CAU",
      DataTitle:
        "Hrithik Roshan Unveils New War Movie Poster In Hindi, Tamil & Telugu - Appocalypse",
      DataDescription:
        "Yash Raj Films’ War is stirring up great buzz thanks to the excellent teaser town, promotion is now gearing up to reveal more of the movie. Hrithik Roshan who stars in the film recently unveiled a new poster for the movie in Hindi, Tamil and Telugu languages. Check them out in the gallery below.",
      DataDetailDescription:
        "War is touting its action sequences, including being the first movie  has received an enthusiastic response and was trending on YouTube for quite a while. Too bad Vaani Kapoor, the lead actress, has been merely projected as a glam girl with little regard to the character being played by her. It remains to be seen if action is all that War has to offer or there’s a decent story buried underneath as well.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 5,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW0xoLNpkLDU1U3c_ByeWsPH0lRPkwRlwUDTd21WXwjgm7hnt-mmeOdV_4p5mPXq5XGpM7dUXuO9cUe4Wzw8ePwJb6d9yVVTBRU.jpg?r=ff0",
      DataTitle: "Laal Singh Chaddha",
      DataDescription:
        "An earnestly optimistic man recounts his journey through life, love and momentous milestones in Indian history. Adapted from 1994s Forrest Gump.",
      DataDetailDescription:
        "Laal Singh Chaddha a man with low IQ level is travelling in a train and happens to tell his story to his co passenger with background of current events happening in India finding it interesting more fellow passengers join in.He was born during the Indo Pak war where his grandfather was a martyr hence he was named after him having a low IQ level no school wants to admit him but finally a priest of Catholic school does so seeing the fighting spirit in his mother.The school children try to avoid him but he befriends Roopa Dsouza his his classmate and bonds very well with her but Roopa wants to be rich as her drunkard father always beats her mother for money one day leading to her death.After death of her mother Roopa goes to stay with her grandmother who turns out to be maid working in Lal's house and both start to spend more time together and as kid Lal eventually proposes her.Years later Roopa and Lal study together at a college in Delhi and Lal still has same feelings for her.But Roopa's ambition is to got to Mumbai to be an actress an become rich while Lal joins the Indian army.During his term in army Lal meets Bala an both become good friends and plan a business together but Bala passes away in the war.After his army service Lal decides to full fill dream of Bala and starts the business planned with him where he is assisted by Mohdmmad Paji who was once a terrorist and Lal saved his life during war.Lal's life and business is doing well but he still has a place for Roopa whom he hasn't met since years and waits for return",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 6,
      category: "bollywood",
      DataImage:
        "https://imgs.search.brave.com/QglFQuB2oB2Qfme5ga0mA1taP9gXwTy9zN3FZ-3CjCA/rs:fit:1200:667:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/MS8xMS9KZXJzZXkt/MTIwMC0xLmpwZw",
      DataTitle: "Jersey",
      DataDescription:
        "Ten years after quitting cricket, a gifted but dejected ex-batsman pursues a spot on the national team, hoping to fulfill his son's wish for a jersey.",
      DataDetailDescription:
        "Fans are going crazy over the newly launched book Jersey where copies are getting sold within no time the book details the story of former domestic cricketer Arjun Talwar.During the late 70s till mid 80s between 1979 to 1986 Arjun Talwar was one of the greatest batsman in domestic cricket with a wish to play for team India.In 1995 Arjun Talwar is a forgotten person who lives a middle class life with his wife Vidya and son Kittu he has left cricket longtime back and currently faces suspension from job where he is accused of bribe.Arjun promises original Jersey of Indian Cricket team to Kittu on his birthday but cant afford it being jobless while Vidya tries run the house with steady income.Arjun gets an offer of assistant coach from his coach Baali sir which he rejects but Baali convinces him to play for a charity match against New Zealand which he accepts hoping to get Jersey for Kittu from the match fees.Arjun shows his batting skills even after 10 years but looses the match by 2 runs and also finds that being charity match he wont be paid.The same day being Kittu's birthday Arjun cant arrange for money and gets pissed on Baali while Vidya to accuses him for loosing his confidence in cricket at early age and currently at job.Arjun returns to Baali saying he wants to get back to cricket but not as a coach but as a player where Baali makes him realize that considering his age of 36 and his fitness its impossible for him to comeback as a player and play for India.Arjun does not loose hope and tries to make a comeback as player at an age where cricketers retire.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 7,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeZWdDzplNodbunFkP2hmCBqrG8P9ylezzDR3bdbKt4k92uir4FBlOSQFOJSOXUGf0v3VCYh9D175mTQhd74yBQM9Eevk2zDmss.jpg?r=490",
      DataTitle: "Sanju",
      DataDescription:
        "From the depths of addiction to the heights of stardom to underworld entanglements, this biopic traces the checkered past of Indian actor Sanjay Dutt.",
      DataDetailDescription:
        "Few lives in our time are as dramatic and enigmatic as the saga of Sanjay Dutt. Coming from a family of cinema legends, he himself became a film star, then saw dizzying heights and darkest depths: adulation of die-hard fans, unending battles with various addictions, brushes with the underworld, prison terms, loss of loved ones, and the haunting speculation that he might be a terrorist. Sanju is in turns a hilarious and heartbreaking exploration of one man's battle against his own wild self and the formidable external forces trying to crush him. It depicts the journey of a man through everything that life can throw at him. Some true stories leave you thinking did this really happen ? This is one such unbelievable story that happens to be true.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 8,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbZ6W-BKZyzCXlleewaJmr7fpRgcNHdNOC2jjLiUyULEjmgUtrwg-NfeiDx7KPGRVnHye512bCYb710JsEuwi3fo6SGvTjs9PpY.jpg?r=ac",
      DataTitle: "Parmanu: The Story of Pokhran",
      DataDescription:
        "A dedicated government official puts his career in jeopardy by insisting that India become a nuclear power, a goal that powerful forces resist.",
      DataDetailDescription:
        "Captain Ashwat Raina's efforts to turn India into a nuclear state are at first met with criticism and then years later, with an offer from the government. With the help of Himanshu Shukla, the Prime Minister's principal secretary, he leads a team to conduct a second nuclear test series. The only major threat lurking is the American Lacrosse satellite which caught the first test preparations, further causing America to warn India about such future tests. With their patriotic hearts and unbreakable spirits, Ashwat and his team race against time to conduct the tests confidentially while the country's worsening political scenario as well as the presence of spies from US and Pakistan puts them into both mental as well as physical challenges.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 9,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR7YOqcZgoT0Mqr4otn8CIr1jJgBXdke6YhYsVsD-97VeDfnixTvvinEnFQO4JvrGns5C8QYZ3ZbeLu01r-JBdSzkSrbU62PZdA.jpg?r=d2a",
      DataTitle: "Dear Zindagi",
      DataDescription:
        "A young cinematographer with a bright professional future and a lack of empathy learns the importance of balancing ambition with humanity.",
      DataDetailDescription:
        "Dear Zindagi (transl. Dear life) is a 2016 Indian Hindi-language coming-of-age drama film written and directed by Gauri Shinde. It was produced by Gauri Khan, Karan Johar, and Shinde under the banners of Red Chillies Entertainment, Dharma Productions, and Hope Productions respectively. The film stars Alia Bhatt and Shah Rukh Khan in the lead role with Ira Dubey, Kunal Kapoor, Angad Bedi, Ali Zafar, Yashaswini Dayama and Rohit Suresh Saraf in supporting roles. The plot centres on a budding cinematographer who is discontented with her life and meets a free-spirited psychologist who helps her to gain a new perspective on her life.Development of the film began in 2015, when Shinde signed Bhatt and Khan for a film to be made under her banner. Principal photography took place in Goa and Mumbai, in the period from 21 January to 20 May 2016. The film features a score composed by Amit Trivedi and lyrics written mostly by Kausar Munir.Dear Zindagi released on 23 November 2016 in North America, two days before its worldwide release on 25 November 2016, and grossed ₹1.39 billion (US$17 million) at the box office, thus emerging as a commercial success. It received positive reviews from critics, with particular praise directed towards the themes, direction, screenplay, dialogues, soundtrack and cast performances, with particular praise directed towards Bhatt and Khan's performances.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 10,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRaPEsCNMpLI210T7AnzmTZSw9LMqZ0ndpiwEa0k2rlSVzzeWv01Mn4rDpVfZy4uVsiUI8JVXKG8EnLDWB3mMfiGLznZUAB7FBE.jpg?r=847",
      DataTitle: "Taare Zameen Par",
      DataDescription:
        "When daydreamer Ishaan is sent to boarding school, an unconventional art teacher tries to help the imaginative student discover his true identity.",
      DataDetailDescription:
        "Taare Zameen Par, also known as Like Stars on Earth in English, is a 2007 Indian Hindi-language drama film produced and directed by Aamir Khan. The film stars Khan himself, along with Darsheel Safary, Tanay Chheda, Vipin Sharma and Tisca Chopra. The film explores the life and imagination of Ishaan (Safary), a 9-year-old boy who, despite excelling in art, has poor academic performance which leads his parents to send him to a boarding school, where a new art teacher Nikumbh (Khan) suspects that he is dyslexic and helps him to overcome his reading disorder.Creative director and writer Amole Gupte initially developed the idea with his wife Deepa Bhatia, who served as the film's editor. Shankar–Ehsaan–Loy composed the film's score, and Prasoon Joshi wrote the lyrics for many of the songs. Principal photography took place in Mumbai and in Panchgani's New Era High School and some of the school's students make appearances.Taare Zameen Par made its theatrical debut in India on 21 December 2007, earning ₹1.35 billion worldwide, thus proving to be a commercial success. It received widespread critical acclaim, with praise for its novel story, screenplay, direction, dialogues, soundtrack and performances of the cast. The film also proved to be vital in raising awareness about dyslexia.A recipient of several accolades, Taare Zameen Par was India's official entry at the 81st Academy Awards for Best Foreign Film, but did not proceed further. At the 55th National Film Awards, it won 3 awards – Best Film on Family Welfare, Best Lyrics (Prasoon Joshi for Maa) and Best Male Playback Singer (Shankar Mahadevan for Maa). At the 53rd Filmfare Awards, it received a leading 11 nominations, including Best Actor (Safary), Best Supporting Actor (Aamir Khan) and Best Supporting Actress (Chopra), and won a leading 5 awards, including Best Film, Best Director (Aamir Khan) and Best Lyricist (Joshi for Maa).UTV Home Entertainment released a DVD for Indian audiences in 2010. Disney's later release of the international edition DVD marked the first purchase of distribution rights for an Indian film by a global company.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 11,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSawLEOrcQ74980mnhXtZe7VzLmrqXYl0XP8DFQqrpceBWZb-MRtKoEE4Ey5EJiKELlo55_FX3Ysmh0ox5R45vlox8FC29nBgg4.jpg?r=bea",
      DataTitle: "Swades: We, the People",
      DataDescription:
        "An Americanized NASA scientist returns to his native India on a business trip and searches for the nanny who helped raise him.",
      DataDetailDescription:
        "Swades: We, the People (transl. Homeland) is a 2004 Indian Hindi-language drama film co-written, directed and produced by Ashutosh Gowariker.[4] The film stars Shah Rukh Khan, Gayatri Joshi and Kishori Ballal while Daya Shankar Pandey, Rajesh Vivek, Lekh Tandon appear in supporting roles.The plot was based on two episodes of the series Vaapsi on Zee TV's Yule Love Stories (1994–95)[5] which had Gowariker playing the role of Mohan Bhargav.[6] The story of the lead role setting up a micro hydroelectric project to generate electricity was reported to be inspired by the 2003 Kannada film Chigurida Kanasu which was based on the novel of the same name by Jnanapith awardee K. Shivaram Karanth and Bapu Kuti by Rajni Bakshi.[10] The music and background score was composed by A. R. Rahman, with lyrics penned by Javed Akhtar.Swades was theatrically released on 17 December 2004, and it opened to rave reviews from critics, with praise for the performances of Khan, Joshi and Ballal, and the story, screenplay, and soundtrack. However, it emerged as a commercial failure at the box office.At the 50th Filmfare Awards, Swades received 8 nominations, including Best Film, Best Director (Gowarikar) and Best Music Director (Rahman), and won Best Actor (Khan) and Best Background Score (Rahman).It was dubbed in Tamil as Desam and released on 26 January 2005, coinciding with Indian Republic Day. Despite its commercial failure, Swades is regarded ahead of its time and is now considered a cult classic of Hindi cinema and one of the best films in Shah Rukh Khan's filmography. Shahrukh's performance in this film is regarded as among the best performances of his career. The film is owned by Red Chillies Entertainment.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 12,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzvzPKaJLFV1Oi2zX2dI26m7_ziAh89spkIGcp5EGCSmc5bc4N-NepS7i5EyXV7u--11Sacah3ywihPHgD3wrjeoap39EIP2Tg.jpg?r=870",
      DataTitle: "Lakshya",
      DataDescription:
        "After dropping out of the army, a spoiled teenager reenlists and proves his mettle by becoming an officer just as war breaks out.",
      DataDetailDescription:
        "Lakshya (transl. Aim) is a 2004 Indian Hindi-language coming-of-age war-drama film directed by Farhan Akhtar and produced by Ritesh Sidhwani. It stars Amitabh Bachchan, Hrithik Roshan and Preity Zinta in lead roles with Boman Irani and Anjula Bedi in supporting roles. Based on the 1999 Kargil War, the film is about Karan Sheirgill, an aimless and lazy boy from Delhi who joins the Indian Army and transforms himself into a soldier to make his girlfriend Romila Dutta proud of him.At the 50th Filmfare Awards, Lakshya received 4 nominations, including Best Director (Farhan) and Best Actor (Roshan), and won 2 awards – Best Choreography (Prabhu Deva for Main Aisa Kyun Hoon...) and Best Cinematography. Although not a block buster at the box office. The film has gained a cult following.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 13,
      category: "bollywood",
      DataImage:
        "https://imgs.search.brave.com/-h-pEqt9u-3IcQZUp_k8Qda0dU0zAEu0Zu_19ZB7r3c/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/cmE4U2R3bXpKYXhO/Tm8wOFhCMGlBSGFF/SyZwaWQ9QXBp",
      DataTitle: "Raees",
      DataDescription:
        "After street smart kid Raees rises to become Gujarat's bootlegging king in the 1980s, he tries to balance his life of crime with helping his people.",
      DataDetailDescription:
        "Raees (transl. Rich) is a 2017 Indian Hindi-language action film[7] directed by Rahul Dholakia and produced by Red Chillies Entertainment and Excel Entertainment.[8] It stars Shah Rukh Khan, Nawazuddin Siddiqui and Mahira Khan.[9][10][11] Raees is said to be based on the criminal Abdul Latif's life,[12] however, the filmmakers have denied this.[13][14].The film was released on 25 January 2017 during India's Republic Day weekend.[1] It received overall positive reviews from the critics, who appreciated the performances of Khan and Siddiqui, production design, cinematography and visual effects, and was a huge success at the box office,[15] becoming the 6th highest-grossing Hindi film of 2017 Raees was also the most pirated Hindi film of 2017.[16] The film's soundtrack has also received over 160 crore (1.6 billion) streams on YouTube.[17] The film received five nominations at the 63rd Filmfare Awards, including Best Actor for Khan. It became the 47th highest-grossing Indian film of all time.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 14,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZxCmuY1dDFjSqnnci2rVBO2Fcnxc7rFnnUBIJcvixfvcdhm5vhJTH3JD8qYBCNAN5QKTlxbV70EYRz4mgibFqZxx8SjVWWNM74.jpg?r=3f4",
      DataTitle: "Zindagi Na Milegi Dobara",
      DataDescription:
        "Three friends on an adventurous road trip/bachelor party in Spain learn some lessons about themselves and each other that will change them forever.",
      DataDetailDescription:
        "Zindagi Na Milegi Dobara (transl.You Only Live Once), also abbreviated as ZNMD, is a 2011 Indian Hindi-language buddy road comedy drama film directed by Zoya Akhtar and produced by Farhan Akhtar and Ritesh Sidhwani under Excel Entertainment. The film stars an ensemble cast of Hrithik Roshan, Abhay Deol, Farhan Akhtar, Katrina Kaif and Kalki Koechlin. It was filmed in Spain, India, Egypt, and the United Kingdom on a budget of ₹45 crore (equivalent to ₹79 crore or US$9.9 million in 2020). The music and background score are composed by Shankar Ehsaan Loy with lyrics by Javed Akhtar.The film's story follows three childhood friends, Arjun, Kabir, and Imran, who reunite for a three-week road trip. They set off to Spain and meet Laila, who falls in love with Arjun and helps him overcome his compulsion to work. Kabir and his fiancée Natasha experience significant misunderstandings, while Imran wishes to meet his biological father, an artist. During their trip, each friend chooses a dangerous sport for the group to partake in.Zindagi Na Milegi Dobara was initially planned to release on 27 May 2011, but technical problems with post-production work led to the release being postponed to 24 June, and again to 15 July that year. The film had a worldwide release on 1,800 screens and was a commercial success grossing ₹1.53 billion (US$19 million) and received widespread critical acclaim for its direction, story, screenplay, music, humor, cinematography and performances of the ensemble cast.At the 57th Filmfare Awards, Zindagi Na Milegi Dobara received a leading 13 nominations, including Best Actor (Hrithik Roshan), Best Supporting Actor (Abhay Deol) and Best Supporting Actress (Kalki Koechlin), and won a leading 7 awards, including Best Film, Best Film (Critics), Best Director (Zoya Akhtar) and Best Supporting Actor (Farhan Akhtar). Additionally, at the 59th National Film Awards, it won 2 awards – Best Choreography (Bosco-Caesar for Senorita) and Best Audiography (Baylon Fonseca). The film is now available on Netflix and Amazon Prime Video.[4][5]",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 15,
      category: "bollywood",
      DataImage:
        "https://imgs.search.brave.com/UuM4hmi2SUY93O_ckHHFgMxvvazZnx8cFxeeSSu6TuA/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9tci5j/b21pbmdzb29uLml0/L2ltZ2RiL2xvY2Fu/ZGluZS9wb3N0ZXIv/NDU4MTdfaGQuanBn",
      DataTitle: "Lagaan",
      DataDescription:
        "In 1890s India, an arrogant British commander challenges the harshly taxed residents of Champaner to a high-stakes cricket match.",
      DataDetailDescription:
        "Lagaan: Once Upon a Time in India (transl. Agricultural tax) is a 2001 Indian Hindi epic sports drama film written and directed by Ashutosh Gowariker. The film was produced by Aamir Khan, who stars alongside debutant Gracy Singh and British actors Rachel Shelley and Paul Blackthorne. Set in 1893, during the late Victorian period of India's colonial British Raj, the film follows the inhabitants of a village in Central India, who, burdened by high taxes and several years of drought, are challenged by an arrogant British Indian Army officer to a game of cricket as a wager to avoid paying the taxes they owe. The villagers face the arduous task of learning a game that is alien to them and play for a victory.Produced on a budget of ₹25 crore (US$5.3 million), Lagaan was the most expensive Indian film at the time of its release. It faced multiple challenges during production: Khan was initially skeptical to star in a sports film, and later, prospective producers called for budget cuts and script modifications. Eventually, the film would become the maiden project of Aamir Khan Productions, and mark Khan's foray into film production. Gowariker was inspired by aspects of the sports drama Naya Daur (1957) in developing the film. The language featured in the film was based on Awadhi, but was diluted with standard Hindi for modern audiences. Principal photography took place in villages near Bhuj. Nitin Chandrakant Desai served as art director, while Bhanu Athaiya was the costume designer. The original soundtrack was composed by A. R. Rahman, with lyrics written by Javed Akhtar.Lagaan was theatrically released in India on 15 June 2001, clashing with Gadar: Ek Prem Katha. It received critical acclaim for Gowariker's direction, Khan's performance and the film's anti-imperialist stance. With earnings of ₹65.97 crore (US$13.98 million) during its initial release, the film was the third highest-grossing Hindi film of 2001. Lagaan was screened at numerous international film festivals and garnered multiple accolades. It was the third Indian film to be nominated for the Academy Award for Best Foreign Language Film after Mother India (1957) and Salaam Bombay! (1988). Lagaan became the most-awarded film at the 47th Filmfare Awards with eight wins, including Best Film, Best Director for Gowariker and Best Actor for Khan. At the 49th National Film Awards, the film won eight awards, including Best Popular Film",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 16,
      category: "bollywood",
      DataImage:
        "https://occ-0-2106-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdZU2wUHyB96VF79Z0Cyi5YrsPugm_-PecKlwjIjzEAf3OZzJbOsCRloT-kZ-Qkzfj6fYXXpE6Nm1-3QXPuRpHY8AsfIYOCxqPI.jpg?r=ee3",
      DataTitle: "Phir Hera Pheri",
      DataDescription:
        "Driven by greed, three rich friends seek to double their wealth and find themselves indebted to a ruthless gangster.",
      DataDetailDescription:
        "Phir Hera Pheri (transl. Monkey Business once again) is a 2006 Indian Hindi-language comedy film written and directed by Neeraj Vora. It serves as the sequel to Hera Pheri (2000)[2] and second installment of the Hera Pheri franchise. It stars Akshay Kumar, Suniel Shetty and Paresh Rawal reprising their roles from the previous film with Bipasha Basu, Rimi Sen, Johnny Lever and Rajpal Yadav. The plot follows, a twist of fate changes the lives of Raju, Shyam and Baburao when they get cheated by a fraudster Anuradha. They must now find another way to repay the loan taken from a dreaded gangster Totla Seth. The central plot takes inspiration from the 1998 film Lock, Stock and Two Smoking Barrels and The Circus.Upon its release on 9 June 2006, the film was a major commercial success,[6][7] becoming the 8th highest grosser of the year.Over the years, the film has attained a cult status and significant fan following across generations owing to Akshay Kumar's comic timing as well its supporting casts like Rawal, Lever and Yadav. It is now considered a milestone in comedy films, as well as one of the best sequels ever made",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 17,
      category: "bollywood",
      DataImage:
        "https://m.media-amazon.com/images/M/MV5BZDdjYWVlZTktMWE2NS00YjBkLTkyMzEtZmYyMTQ3MjdkZTg1XkEyXkFqcGdeQXVyMTU1MjI2ODE1._CR0,0,971,971._SY307_SX307_AL_.jpg",
      DataTitle: "Best of 2022: Top 10 Most Popular Indian Web Series",
      DataDetailDescription:
        "1. Panchayat : Season 2 of Panchayat takes us back to Phulera, as Panchayat Secretary Abhishek Tripathi continues to struggle between feeling at home and wanting more for himself. The cast — led by Jitendra Kumar, Neena Gupta, Raghubir Yadav, Chandan Roy, and Faisal Malik — touch upon slightly more serious, emotional themes this season, and pull it off, while maintaining the show's gentle comedy.2. Delhi Crime : Season 1 of Delhi Crime, based on the Nirbhaya case, released in 2019. While a difficult watch, the gritty procedural was an instant success. Released in 2022, Season 2, detailing a series of gruesome home invasions, is no different. In five fast-paced episodes, we go back into the world of Delhi crime and Delhi police, made very real by the standout cast, led by Shefali Shah.3. Rocket Boys : Based on the lives of Dr. Homi J. Bhabha and Dr. Vikram Sarabhai,Rocket Boys is a fascinating peek into India's formative years in the field of aeronautics. Jim Sarbh and Ishwak Singh's easy camaraderie translates well on screen and doesn't let the show drag. To lend authenticity to the story, classical dancer Mallika Sarabhai, Vikram Sarabhai's daughter, was consulted for information about their home and lifestyle.4. Human : If you've ever wondered how unethical and dangerous the business of saving lives can be, Human, a show about the dark side of Indian pharma, has the answer for you. The gripping psychological thriller will compel you to binge-watch the full season, especially with Shefali Shah's portrayal of a ruthless pharma boss.5. Apharan : Much like the first season, the second season of Apharan fully embraces its over-the-top, weird world and doesn't give the very aptly cast Arunoday Singh time to breathe. There's suspense, action, that kitschy '70s vibe, and so much more that keeps fans hooked through the 11-episode run.6. Gullak : In its third season, Gullak continued to charm fans with its disarming portrayal of the middle-class Mishra family and their problems, so relatable that for many it's almost like watching their own parents and siblings on screen. In five crisp episodes, Jameel Khan, Geetanjali Kulkarni, Vaibhav Raj Gupta, and Harsh Mayar prove yet again that ordinary is not always boring.7. NCR Days : Not your average college show, NCR Days is the story of Monu, played by Nikhil Vijay, who comes to NCR from Jodhpur for an MBA, primarily so he can marry his girlfriend back home. In his journey of growing, changing, and finding himself, he makes new friends and learns some hard lessons. Writer-director Ambrish Verma doesn't just create a rich, complex world in only five episodes, but also plays a central character in the show.8. Abhay : Season 3 of Abhay continues to follow UP Police SP Abhay Pratap Singh (played by Kunal Kemmu) as he battles personal demons and solves gruesome crimes. This season differs from earlier seasons in that it pits him against one central villain — a charismatic cult leader planning mass murder, played to perfection by Vijay Raaz. Kunal's performance keeps you rooting for Abhay through some very tumultuous times.9. Campus Diaries : Featuring some very popular content creators, like Harsh Beniwal and Saloni Gaur, Campus Diaries tells the coming-of-age stories of six students at Excel University. They navigate love, life, and all the angst and challenges that come with learning how to be an adult in the real world.10. College Romance : A quintessential new-adult rom-com, College Romance continued to be a hit with fans as Season 3 released in 2022. In just five easy-to-binge episodes, love and friendship are tested amidst scandals and long-distance relationships. So, if you're not in college anymore, get ready to miss the good ol' days!",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 18,
      category: "bollywood",
      DataImage:
        "https://m.media-amazon.com/images/M/MV5BMzgzMWZiYmUtMGU3ZS00YzQ3LWE2MzYtYmUxNmNhMTFiMTM5XkEyXkFqcGdeQXVyMTU1MjI2ODE1._V1_SY307_SX307_AL_.jpg",
      DataTitle: "Best of 2022: Top 10 Most Popular Indian Stars",
      DataDetailDescription:
        "1. Dhanush 2. Alia Bhatt 3. Aishwarya Rai Bachchan 4. Ram Charan Teja 5.Samantha Ruth Prabhu 6.Hrithik Roshan 7. Kiara Advani 8. N.T. Rama Rao Jr. 9. Allu Arjun 10. Yash ",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 19,
      category: "bollywood",
      DataImage:
        "https://m.media-amazon.com/images/M/MV5BMGI3ZTBkNzAtZjhkNC00ODg4LTkzNzgtYTA4Y2RmMTZiNzBhXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SY351_SX624_AL_.jpg",
      DataTitle: "Most Anticipated Indian Movies of 2022",
      DataDetailDescription:
        "1. KGF Chapter 2 : In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.2. RRR : A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.3. Laal Singh Chadda : Laal Singh Chaddha, a simple man whose extraordinary journey will fill you with love, warmth, happiness and will also make you laugh.4. Gungubai Kathiawadi : Duped and sold to a brothel, a young woman fearlessly reclaims her power, using underworld connections to preside over the world she was once a pawn in.5. Beast : After a shopping mall in Chennai had been hijacked by terrorists who held the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.6. Dhakkad : Agent Agni, a highly trained and deadly field agent is entrusted with the mission to gather Intel and eliminate Rudraveer, an international human and arms trafficker who has been off the radar for ten years.7. Radhe Shyam : In 1976, Vikramaditya, a palmist and disciple of Paramahamsa, predicts to Indian Prime Minsiter Indira Gandhi that soon she will declare emergency in the country. The prediction comes true and he becomes famous but has to leave the country for the same. Two years later Vikramaditya is a renowned palmist in Italy and loves to travel all over.8. Brahmastra Part One: Shiva : This is the story of Shiva who sets out in search of love and self-discovery. During his journey, he has to face many evil forces that threaten our existence.9. Heropanti 2 : Babloo Ranawat, a genius hacker, is tasked with tracking down Laila, the mastermind behind the world's largest cyber-crime yet to occur. Will Babloo be able to stop him?.10. Adipurush : Adaptation of Indian mythology that depicts the triumph of good over evil.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 20,
      category: "bollywood",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhB20-ApT_6z9dEppdpWCb9O1ndQW41_diA&usqp=CAU",
      DataTitle:
        "Gaslight Review : GASLIGHT is the story of a daughter and her missing father.",
      DataDetailDescription:
        "GASLIGHT is the story of a daughter and her missing father. Mishri aka Meesha (Sara Ali Khan) returns to her hometown in Gujarat to meet her father (Shataf Ahmed Figar) after years. Meesha cant walk and had separated from her father after a tragedy in the palace and also after her father remarried. As soon as Meesha returns, shes welcomed by her stepmother, Rukmani (Chitrangda Singh). Surprisingly, her father is nowhere to be found. Rukmani and others tell her that he had to urgently head to their factory to pacify the agitated workers on strike. Meesha finds the reason unconvincing. She calls her father but his phone is switched off. Moreover, eerie things happen to her at night that make her believe that her father is dead. While Rukmani rubbishes these claims, Kapil (Vikrant Massey), a faithful servant of the palace, decides to help her. What happens next forms the rest of the film.Neha Veena Sharma and Pavan Kirpalani's story is alright but could have been translated into a fine suspense flick. Neha Veena Sharma and Pavan Kirpalani's screenplay, however, is clichéd and unexciting for most parts. The writers take a lot of time for the build-up. Amit Mehta's dialogues (additional dialogues by Neha Veena Sharma) are routine.Pavan Kirpalani's direction is a mixed bag. He succeeds in making good use of the location and in creating an eerie, mysterious atmosphere. A particular scene, shot in the salt pan, also stands out for its execution. However, despite a runtime of 111 minutes, the film seems too long as its quite slow. Some scenes test the patience of the viewers. Moreover, the template of a character seeing something mysterious but failing to prove it to the rest of the characters has been beaten-to-death.Thankfully, the suspense in the last 15 minutes is shocking and unexpected. The makers also tie all the loose ends at this point and the film ends on a thrilling and justified note. This majorly saves the film.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 21,
      category: "technology",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVGM_dNPAUV5Ut80or3ktY09VD6mJHX2DZQ&usqp=CAU",
      DataTitle: "TikTok fined £12.7m for misusing children's data",
      DataDescription:
        "It estimated TikTok allowed up to 1.4 million UK children aged under 13 to use the platform in 2020.The video-sharing site used the data of children of this age without parental consent, according to an investigation by the Information Commissioner's Office (ICO).",
      DataDetailDescription:
        "TikTok has been fined £12.7m by the UK's data watchdog for failing to protect the privacy of children.It estimated TikTok allowed up to 1.4 million UK children aged under 13 to use the platform in 2020.The video-sharing site used the data of children of this age without parental consent, according to an investigation by the Information Commissioner's Office (ICO).TikTok said it had invested heavily to stop under-13s accessing the site.The ICO said many were able to access the site despite TikTok setting 13 as the minimum age to create an account.It said that children's data may have been used to track and profile them, and potentially present them with harmful or inappropriate content.Information commissioner John Edwards said: There are laws in place to make sure our children are as safe in the digital world as they are in the physical world. TikTok did not abide by those laws.As a consequence, an estimated one million under-13s were inappropriately granted access to the platform, with TikTok collecting and using their personal data.TikTok should have known better. TikTok should have done better. Our £12.7m fine reflects the serious impact their failures may have had Later, he told BBC News TikTok had taken no steps to obtain parental consent.When you sign up you can be targeted for advertising, you can be profiled, your data contributes to an algorithm which feeds content, he said.If you've been looking at content which is not appropriate for your age, that can get more and more extreme It can be quite harmful for people who are not old enough to fully appreciate the implications and to make appropriate choices.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 22,
      category: "technology",
      DataImage:
        "https://cdn.coingape.com/wp-content/uploads/2023/01/23163928/Poster-Image-2023-01-23T163917.583.jpg",
      DataTitle: "Tech ChatGPT banned in Italy over privacy concerns",
      DataDescription:
        "Italy has become the first Western country to block advanced chatbot ChatGPT.The Italian data-protection authority said there were privacy concerns relating to the model, which was created by US start-up OpenAI and is backed by Microsoft.",
      DataDetailDescription:
        "Italy has become the first Western country to block advanced chatbot ChatGPT.The Italian data-protection authority said there were privacy concerns relating to the model, which was created by US start-up OpenAI and is backed by Microsoft.The regulator said it would ban and investigate OpenAI with immediate effect.OpenAI told the BBC it complied with privacy laws.Millions of people have used ChatGPT since it launched in November 2022.It can answer questions using natural, human like language and it can also mimic other writing styles, using the internet as it was in 2021 as its database.Microsoft has spent billions of dollars on it and it was added to Bing last month.It has also said that it will embed a version of the technology in its Office apps, including Word, Excel, PowerPoint and Outlook.There have been concerns over the potential risks of artificial intelligence (AI), including its threat to jobs and the spreading of misinformation and bias.Earlier this week key figures in tech, including Elon Musk, called for these types of AI systems to be suspended amid fears the race to develop them was out of control.The Italian watchdog said that not only would it block OpenAI's chatbot but it would also investigate whether it complied with General Data Protection Regulation.GDPR governs the way in which we can use, process and store personal data.The watchdog said on 20 March that the app had experienced a data breach involving user conversations and payment information.It said there was no legal basis to justify the mass collection and storage of personal data for the purpose of training the algorithms underlying the operation of the platform.It also said that since there was no way to verify the age of users, the app exposes minors to absolutely unsuitable answers compared to their degree of development and awareness.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 23,
      category: "technology",
      DataImage:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/12507/production/_129251057_gettyimages-1128061419.jpg.webp",
      DataTitle: "Twitter's blue ticks disappear as Musk attacks NY Times",
      DataDescription:
        "The New York Times has lost its blue tick on Twitter after it said it would not pay to remain verified.Twitter has started removing verification badges from accounts which already had a blue tick, after announcing they would be part of a paid subscription from 1 April.",
      DataDetailDescription:
        "The New York Times has lost its blue tick on Twitter after it said it would not pay to remain verified.Twitter has started removing verification badges from accounts which already had a blue tick, after announcing they would be part of a paid subscription from 1 April.The New York Times, along with several other organisations and celebrities, said they would not pay for the tick.It prompted Elon Musk to launch a volley of insults at the newspaper.The real tragedy of @NYTimes is that their propaganda isn't even interesting, Mr Musk, who owns Twitter, wrote on the platform.Also, their feed is the Twitter equivalent of diarrhea. It's unreadable, he added.There has been no official comment from Twitter and the New York Times has not responded to Mr Musk's comments.Under Twitter's new rules, blue ticks which once showed official, verified accounts, will start to be removed from accounts which do not pay for it.Organisations seeking verification badges instead have to pay a monthly fee of $1,000 (£810) to receive a gold verification tick, while individual accounts must pay $8 (£6.40) a month for a blue one.The subscription service will generate revenue for Twitter. However, concerns have been raised that without the verification process, it will be difficult to tell genuine accounts from impersonators.As well as not paying the subscription fee, the New York Times said it would also not pay for the verification of its journalists' Twitter accounts, apart from in rare instances where this status would be essential for reporting purposes, a spokesperson said.Following the announcement, the newspaper, which has almost 55 million Twitter followers, lost its verification badge.But it is unclear whether all organisations must sign up to the subscription service in order to remain verified.Ten thousand of the most-followed organisations on Twitter will be exempt from the rules, the New York Times reports, citing an internal Twitter document.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 24,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/oneplus-nord-ce-3-lite-5g-review.jpg?w=640",
      DataTitle:
        "OnePlus Nord CE 3 Lite review: A stylish mid-ranger with average camera",
      DataDescription:
        "The OnePlus Nord CE 2 Lite has been one of the highest-selling 5G phones of 2022. Many people I know considered the Nord CE Lite as it was a OnePlus device. Cut to the chase; the company has now launched the OnePlus Nord CE 3 Lite with the same Snapdragon 695 SoC.",
      DataDetailDescription:
        "The OnePlus Nord CE 2 Lite has been one of the highest-selling 5G phones of 2022. Many people I know considered the Nord CE Lite as it was a OnePlus device. Cut to the chase; the company has now launched the OnePlus Nord CE 3 Lite with the same Snapdragon 695 SoC.I have been playing around with the OnePlus Nord CE 3 Lite for the last two weeks, and here is my take on what could probably be the most affordable 5G smartphone from OnePlus in 2023.After unboxing the OnePlus Nord CE 3 Lite, I couldnt help but marvel at the pastel lime colour of the device, which also has some neon green accents. The OnePlus Nord CE 3 Lite does look a lot like the Realme 10 Pro. However, the subtle OnePlus branding at the back does make all the difference.The Nord CE 3 Lite being a budget offering, has the basics covered, including a 3.5mm headphone jack and a microSD card slot, although not a dedicated one. While it lacks the iconic alert slider, its quite understandable how OnePlus is pitching the alert slider as more of a premium feature.The Nord CE 3 Lite is also available in black colour, but that just looks blunt, at least in my opinion. It has a plastic back panel like its predecessor. While it does attract smudges and fingerprints, they arent very evident, at least on the lemon green variant. Overall, when compared to its predecessor, the Data Nord CE 3 Lite looks and feels a lot more premium.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 25,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/zoho-ceo-sridhar-vembu.jpg?w=640",
      DataTitle:
        "Zohos Sridhar Vembu optimistic about AI, pushes for make-in-India GPT",
      DataDescription:
        "In 2023, more and more tech companies are focussed on implementing AI into their solutions to enhance efficiency. US-based AI powerhouse OpenAI is currently leading the race when it comes to deploying generative AI.",
      DataDetailDescription:
        "In 2023, more and more tech companies are focussed on implementing AI into their solutions to enhance efficiency. US-based AI powerhouse OpenAI is currently leading the race when it comes to deploying generative AI. And, this has prompted many technology companies around the world to research and develop AI solutions to break the monopoly.At a recent interaction at the Zoho Path event, Sridhar Vembu, the co-founder and the CEO of Zoho said that his team has been testing various indigenous and open-sourced AI solutions. He asserted that he is optimistic about AI technology. Vembu also expressed his concerns over monopoly in AI technology adding that collaborative efforts need to be directed towards building capable AI solutions in India that could be as good as or even better than GPT-4. And, all this with the support of the government.Vembu, Rajiv Kumar (Chairman, Pahle India Foundation), and Sharad Sharma (co-founder of iSPIRT Foundation) have signed on an open letter to the Government of India requesting it initiate an effort to catch up with the AI developments and prevent any kind of monopoly in AI in India. Vembu recommended setting up an AI public policy with the objective of preventing any kind of monopoly in AI and fostering development of indigenous AI technology.He also said, “there should be a strong regulatory framework around AI with openness and transparency.” Vembu said, “The first set of jobs that AI could put a threat to is programming job.” He is also optimistic about low-code no-code platforms, where one developer can replace 100 developers with the help of AI.The Princeton University alumnus also cited the recent instance where leading AI scientist Yoshua Bengio, entrepreneur Elon Musk, and other tech pioneers signed open letter seeking to momentarily halt the advancements in AI considering its imminent threat to society.Vembu also said that AI could be like a power loop, where it could automate a lot of things. He believes that AI could make technology and digital products even more affordable by reducing the cost of production.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 26,
      category: "technology",
      DataImage: "https://images.indianexpress.com/2023/04/dogc.jpg?w=640",
      DataTitle: "Dogecoin jumps as Musks Twitter flips logo to Shiba Inu dog",
      DataDescription:
        "Dogecoins Shiba Inu dog replaced Twitters blue bird as the social media companys logo on Tuesday, helping the meme coin add as much as $4 billion to its market value.",
      DataDetailDescription:
        "Dogecoins Shiba Inu dog replaced Twitters blue bird as the social media companys logo on Tuesday, helping the meme coin add as much as $4 billion to its market value.The token, born as a satire of a cryptocurrency frenzy in 2013 and has no fundamental use, surged to 10 cents around 1500 EST from 7 cents as Elon Musk indicated in a tweet on Monday he had delivered on his promise of changing the social media apps logo to dogecoins dog.With a market capitalization of $13.7 billion, dogecoin is now the seventh biggest cryptocurrency, according to data site CoinMarketCap.com. Its market value stood at around $10 billion before the news.Musk, who is ranked as the second-richest person in the world by Forbes, is a vocal proponent of cryptocurrencies and has heavily influenced prices for dogecoin and bitcoin in the past.The Tesla boss on Friday asked a U.S. judge to throw out a $258 billion racketeering lawsuit accusing him of running a pyramid scheme to support dogecoin.Dogecoin more than doubled in October after Musk, dubbed “the dogefather” by retail traders, sealed a $44 billion deal to take over Twitter in October.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 27,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/Cell-phone-pioneer-Martin-Cooper.jpg?w=640",
      DataTitle:
        "8 facts about Martin Cooper, inventor of the cellphone & former VP of Motorol",
      DataDescription:
        "The first phone call with a cellular device was made by Martin Cooper, a former vice president of Motorola, in 1973. The inventor conceptualised a cell phone that wouldnt be chained to the car. Rather, it would be portable.",
      DataDetailDescription:
        "The first phone call with a cellular device was made by Martin Cooper, a former vice president of Motorola, in 1973. The inventor conceptualised a cell phone that wouldnt be chained to the car. Rather, it would be portable. The result? The DynaTAC (Dynamic Adaptive Total Area Coverage) phone, which was 23 cm tall and weighed 1.1 kg.Now, 50 years later, the inventor says hes “devastated” when he sees people staring at their phones while crossing the street. “They are out of their minds,” he added in an interview with the AFP News Agency.By: Tech Desk.The first phone call with a cellular device was made by Martin Cooper, a former vice president of Motorola, in 1973. The inventor conceptualised a cell phone that wouldnt be chained to the car. Rather, it would be portable. The result? The DynaTAC (Dynamic Adaptive Total Area Coverage) phone, which was 23 cm tall and weighed 1.1 kg.Now, 50 years later, the inventor says hes “devastated” when he sees people staring at their phones while crossing the street. “They are out of their minds,” he added in an interview with the AFP News Agency.How Martin Cooper invented the cellphone : When AT&T proposed a cellular architecture to expand its car-phone service, Motorola feared that the telecom company would grow into a monopoly. Martin Cooper was placed in charge of the urgent project to develop a cellphone. The result was DynaTAC (Dynamic Adaptive Total Area Coverage), which allowed 35 minutes of talk time before it ran out of battery.Cooper showed off the first cellphone to AT&T rival : On April 3, 1973, Cooper introduced the DynaTAC phone at a press conference in New York. To make sure that the phone was working before the start of the event, he rang engineer Joel Engel, head of AT&Ts rival project, announcing he was calling from a portable cellphone.The first commercial cellphone was a success despite the steep price tagAfter years of development, Motorola in 1983 introduced the first portable cellphone for consumers, the DynaTAC 8000x. Despite the steep price tag of $3,995, the phone was a success.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 28,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/bill-gates-featured.jpg?w=640",
      DataTitle: "Bill Gates says calls to pause AI wont solve challenges",
      DataDescription:
        "Calls to pause the development of artificial intelligence will not “solve the challenges” ahead, Microsoft co-founder Bill Gates told Reuters, his first public comments since an open letter sparked a debate about the future of the technology",
      DataDetailDescription:
        "Calls to pause the development of artificial intelligence will not “solve the challenges” ahead, Microsoft co-founder Bill Gates told Reuters, his first public comments since an open letter sparked a debate about the future of the technology.The technologist-turned-philanthropist said it would be better to focus on how best to use the developments in AI, as it was hard to understand how a pause could work globally.His interview with Reuters comes after an open letter — published last week and co-signed by Elon Musk and more than 1,000 AI experts – demanded an urgent pause in the development of systems “more powerful” than Microsoft-backed OpenAIs new GPT-4, which can hold human-like conversation, compose songs and summarise lengthy documents.The experts, including Apple co-founder Steve Wozniak, said in the letter the potential risks and benefits to society need to be assessed.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 29,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/empty-office-layoffs-featured-unsplash.jpg?w=640",
      DataTitle:
        "Apple reportedly joins layoffs club: A look at the Data job cuts in the tech industry",
      DataDescription:
        "When every major tech company was announcing layoffs, Apple gained the appreciation of many for avoiding the situation altogether. However, not even Apple is immune to the economic downturn.",
      DataDetailDescription:
        "When every major tech company was announcing layoffs, Apple gained the appreciation of many for avoiding the situation altogether. However, not even Apple is immune to the economic downturn.According to a fresh report, the Cupertino-based company is now also eliminating a few roles. Apple isnt the only company seeing layoffs recently though – its also joined by EA, Kyndryl, and others. We take a look at the major sackings this week and the last here.A Bloomberg report citing people familiar with the matter revealed that Apple is eliminating a small number of roles within its corporate retail teams. Its not clear how many people will be affected but the report does say that the number is “likely very small.Still, while Apple has finally given in and has joined the likes of Google, Amazon, Meta, and Microsoft, its layoffs are far fewer in number compared to these companies, which have each announced tens of thousands of job cuts. So far, the company managed to avoid layoffs by laying off contractors, delaying bonuses, reducing travel budgets, and pushing back projects instead.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 30,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/Google-Search-Travel.jpg?w=640",
      DataTitle:
        "Google Search lets users save money on flight tickets and browse hotels",
      DataDescription:
        "Google is rolling out a bunch of new features to its search engine. With summer just around the corner, many are looking forward to travelling to beat the heat. With that in mind, Google is introducing new ways that can help improve the trip planning experience.",
      DataDetailDescription:
        "Google is rolling out a bunch of new features to its search engine. With summer just around the corner, many are looking forward to travelling to beat the heat. With that in mind, Google is introducing new ways that can help improve the trip planning experience.Browse hotels Starting this week, Google will roll out the ability to browse and discover hotels on mobile devices. If you search for a hotel and tap on the view more button, Google will let you explore the property in what it calls a swipeable story format where you can go through the photos of the hotel so you know what it looks like.Explore more Google is also making it easier to find more things to do when you are travelling to a new place. If you are visiting a popular place or want to go to some other place, searching for an attraction or tour company will directly show the price associated along with a link that lets you book a ticket.Save money on flight tickets As it turns out, Google is also working to make it easy for users to save money on their next flight. Currently available as a pilot program for price guarantees in the United States, if users see a flight with the price guarantee badge, it means the price for the flight wont go any lower.The tech giant says that if the price goes down than what the badge mentioned, the company will pay the user the difference amount via Google Pay. However, the program is only available for those flight bookings made from Google on flights that depart from the United States.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 31,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/Nearby-Share.jpg?w=640",
      DataTitle:
        "Googles Nearby Share app makes it easy to transfer files from Android to Windows",
      DataDescription:
        "In 2020, Google introduced a new way for Android users to quickly send and receive files. Available on Android 6 and above, the feature has now found its way to Windows.",
      DataDetailDescription:
        "In 2020, Google introduced a new way for Android users to quickly send and receive files. Available on Android 6 and above, the feature has now found its way to Windows. This means you can now easily send or receive photos, videos, documents and other files from nearby Android devices to your Windows PC using the Nearby Share app.Currently in beta, Nearby Share for Windows can be downloaded from the Android website. Once downloaded, the installation process takes a few steps and the app works irrespective of whether it is open or in the background.To send or receive files from or to your Windows-based PC, all you need to do is sign in to the Nearby Share app using your Google account. Users can either drag and drop files into the app or choose which files they want to share using the Send with Nearby Share option that appears when you right-click on a file.One note to note here is that if you log in to the Nearby Share app on Windows and use the same account on your Android device, file transfers will be automatically accepted even if the screen is off.Nearby Share beta for Windows is currently not available in Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 32,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/Sony-lens-20230403.jpg?w=640",
      DataTitle: "Sony launches new compact 50mm F1.4 G Master lens in India",
      DataDescription:
        "Sony India announced the launch of its FE 50mm F1.4 GM lens. According to the company, this premium e-mount lens is compact and lightweight despite its large aperture.",
      DataDetailDescription:
        "Sony India announced the launch of its FE 50mm F1.4 GM lens. According to the company, this premium e-mount lens is compact and lightweight despite its large aperture.The lens is rated for a minimum focusing distance of 0.41 metres and maximum magnification is 0.16 metres when autofocus is used. The minimum focusing distance is 0.38 metres and the maximum magnification is 0.16x when autofocus is used.The lens comes with a 67 mm thread mount, meaning filters that work with Sonys FE 24mm F1.4GM and FE 35mm F1.4 GM lenses will work with this as well.According to Sony, the FE 50mm F1.4 GM lens comes with autofocus that is nearly twice as fast as “conventional models with the same specifications. The lens has XD linear motors and control algorithms that optimise responses to the control signals so that focus is more precise, vibrations are minimised and autofocus operates more quietly. This should make the lens appropriate for shooting videos.The lens has an 11-blade circular aperture which offers “sharp realism” throughout the maximum aperture range, according to the company. When shooting wide open at F1.4, the lens should be able to offer creamy bokeh and great depth of field that can separate subjects clearly from the background.The FE 50mm F1.4 GM lens comes with two extreme aspherical elements that are aimed at effectively correcting field curvature and aberrations. It is built with one extra-low dispersion glass element that is aimed at suppressing chromatic aberrations to maintain clear and sharp images without colour bleeding.It also comes with Sonys Nano ARE Coating II, which suppresses reflections even in a backlit scene.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 33,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/WhatsApp-Image-2023-04-03-at-3.58.40-PM.jpeg?w=640",
      DataTitle:
        "I tried the DigiYatra app for the first time: Heres my experience",
      DataDescription:
        "When I first heard about the DigiYatra that would cut down the security check time at the Indian airports, I was intrigued to try it at my next trip. When the time came, I was left disappointed as I wasnt able to verify my name on my boarding pass using Aadhaar.",
      DataDetailDescription:
        "When I first heard about the DigiYatra that would cut down the security check time at the Indian airports, I was intrigued to try it at my next trip. When the time came, I was left disappointed as I wasnt able to verify my name on my boarding pass using Aadhaar.This time around, I was running a bit late for airport and I wanted to give DigiYatra another try just to ensure I clear the security as quickly as possible. I was in a luck this time around as the booking had my correct name — Vivek U, thanks IndiGo for understanding people can also have single digit sur name.Some flight carriers want users have have a full second name with at least two characters (surname) while I just have a single initial on Aadhaar although I have a longer surname on my passport.Setting up the DigiYatra app Setting up the DigiYatra app is fairly simple. I downloaded the app from the Google Play Store and logged in using my phone number and quickly likned my Aadhaar, again using the OTP verification method. The app is also available for iPhones.Next I uploaded the flight ticket (pdf) for the DigiYatra to fetch all the details about the flight. Lastly, I had to take a selfie to authenticate and then allow the app to share my data with the airport, in this case its the kempegowda internernational airport.My experience of using DigiYatra At the initial security checkpoint, all I have to do is show my face to the digital kiosk and scan the barcode on the DigiYatra app. My face will then be verified with the one I shared earlier on the app along with my details via the Aadhaar that I have linked to the DigiYatra app.Once I got in, during the primary scanning area, I again posed at the digital kiosk and I was let in and all this took less than three minutes. The next 13 minutes were spend at putting by luggage through the xray scanner.Why I liked about the DigiYatra app It cuts down the time spent at security checks. I was able to cut the regular cue and then there is no need to carry any additional documents, where, your face works as the authenticator. I was able to complete my two-level security checks in just 15 minutes, which is the least time that it has ever taken to clear security at the Bengaluru airport.While there are no actual cons of using DigiYatra instead of conventional security process at the airport, I do have a few suggestions to make. The app should allow users to add more types of documents, such as a passport, where the majority of people have their full name.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 34,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/sync-playlists-between-music-streaming-apps-featured.jpg?w=640",
      DataTitle:
        "How to transfer entire playlists between Spotify, Apple Music, YT Music, & others",
      DataDescription:
        "There hasnt been a better time to live for music lovers in India than now. Owing to a music streaming boom in the country, theres now a slew of music streaming services to pick from.",
      DataDetailDescription:
        "There hasnt been a better time to live for music lovers in India than now. Owing to a music streaming boom in the country, theres now a slew of music streaming services to pick from. And the days of having to painstakingly download every song from shady MP3 sites are long past. But with so many options to pick from, its difficult to stay loyal to a single service sometimes.If youve ever switched music services, then you must be familiar with the struggle of transferring each song and re-curating playlists. Helping ease that process is the nifty tool Soundiiz, which not only helps transfer entire playlists between music streaming apps but also helps keep them in sync. See how you can use the tool below.Getting started 1. Visit soundiiz.com on any device and log in using the button on the top right 2. Youll be directed straight to the Soundiiz web app 3. Tap the hamburger menu icon on the top left and hit the Connect Services button on the bottom left 4. Here, hit the Connect button for the services you wish to transfer/sync playlists between 1. Open the hamburger menu again and tap on Transfer under the Tools section 2. Select source (the service you wish to transfer your playlists from) and destination (the service you wish to transfer to) 3. Hit the Start button 4. Hit the pencil icon to select the playlist you wish to transfer. Note that youll only be able to transfer one playlist at a time if you are a free Soundiiz user 5. Keep hitting the Confirm buttons at the bottom to proceed until you see the Transferring screenWhile youll not be able to transfer more than one playlist at a time, you can always repeat the process until youve transferred all your playlists.Sync playlists If you keep juggling between two or more music streaming platforms, like Spotify and Apple Music for example, then keeping your playlists in sync between the two can be a tedious task. Soundiiz automates this process – when youve turned on sync between two playlists, adding a new track for one playlist will automatically insert the same track into another.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 35,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/03/wwdc-2023-expected-products.jpg?w=640",
      DataTitle:
        "Apple WWDC 2023: AR/VR headsets, Mac Pro & new iMacs, among expected launches",
      DataDescription:
        "Apple confirmed that its 2023 edition of the Worldwide Developers Conference (WWDC) will kickstart on June 5. While the next-generation operating systems (beta versions) like iOS 17, iPadOS 17, macOS, and watchOS 10 will be demonstrated at the WWDC 2023.",
      DataDetailDescription:
        "Apple confirmed that its 2023 edition of the Worldwide Developers Conference (WWDC) will kickstart on June 5. While the next-generation operating systems (beta versions) like iOS 17, iPadOS 17, macOS, and watchOS 10 will be demonstrated at the WWDC 2023, it is speculated that the company may announce quite a few hardware products such as Reality Pro AR/VR headset, Apple Silicon based Mac Pro, 15-inch MacBook Air, and even the new Apple Silicon based iMac.Here are all the major hardware products that Apple could announce at WWDC 2023.Apple Reality Pro AR/VR headsets.The Reality Pro is likely to take the center stage at the WWDC 2023 as Apple ventures into the AR/VR world to take on players like Meta-owned Quest. In terms of hardware, the Apple Reality Pro could easily be the most powerful consumer-grade virtual-reality headset, which is said to run on a custom rOS, powered by a custom Apple Silicon.The device is said to weigh between 300 to 400 grams, and is likely to pack two high-resolution OLED eyepieces, possibly with 4K resolution per eye along with a plethora of sensors for eye and head tracking. This is said to be a standalone device. However, users might have to pair it with an iPhone to configure and control it.With all the cutting-edge technology, the Apple Reality Pro is also said to be on the expensive side. Leaks suggest that Apples first AR/VR headset could cost as much as $3,000 or Rs 2,50,000. Apple Mac Pro The Mac Pro is the only computer that Apple currently sells with an Intel CPU, and the company is expected to complete the Intel-Apple Silicon transition by announcing the Apple Silicon-powered Mac Pro, which will be the most powerful Mac that the company has ever launched.15-inch MacBook Air Apple is also expected to announce its first 15-inch MacBook Air at WWDC 2023. Again, the design and the form factor of the upcoming MacBook Air could have a similar design while the 15-inch model will have a slightly larger form factor. Similarly, it is also said to feature the next-generation Apple Silicon M3 processor, which is said to be more powerful and power efficient. In terms of pricing, the 15-inch MacBook Air is likely to sit between the 13-inch MacBook Air and the 14-inch MacBook Pro.New iMacs Apple is also expected to announce the refreshed version of the iMac, possibly with M2/M3 chip at WWDC 2023. Again, the design and the features will be similar to the current iMac and are expected to come in multiple colour variants and will ship with the Data macOS.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 36,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/04/psp-featured.jpeg?w=640",
      DataTitle: "8 handheld gaming consoles that will remind you of the PSP",
      DataDetailDescription:
        "The PSP era may be long past but gaming handhelds like it are seemingly making an epic comeback. Last year saw the release of the Steam Deck – a device built for PC gaming in a smartphone-like form factor – and a full year since it began shipping, the handheld sits fourth in Steams top sellers list.On April 1, Asus too unveiled a portable gaming device of its own to take on the Steam Deck. Its a fast-populating market, and we, therefore, decided to bunch up the best gaming handhelds into a single listicle so that you dont have to go looking around.Asus has announced its first gaming handheld, the ROG Ally, which promises to deliver a powerful PC gaming experience on a 7-inch 1100p 120Hz display. The device runs Windows 11 and uses a custom AMD Ryzen chip that can be paired with an external GPU for more performance. The ROG Ally was initially teased on April 1st, but Asus confirmed that it was not an April Fools joke and that it will be available soon.The ROG Ally will compete with Valves Steam Deck, which has a similar design but a lower-resolution 60Hz screen and runs a Linux-based OS. Asus claims that the ROG Ally can run any game that its hardware can handle, unlike the Steam Deck which is limited to some games in the Steam library.The Nintendo Switch is perhaps the most popular device in its category, with sales surpassing the Game Boy and PS last month. It also stands out from this list because it runs on its own software codenamed Horizon instead of using a spin of Windows. The Switch name pertains to the fact that the console can be used in three ways: handheld, tabletop and TV. In tabletop and TV modes, the controls detach from the screen.Available unofficially on Amazon for a starting price of Rs 52,800 (since the device is yet to launch officially in the country), Valves Steam Deck can be thought of as a portable gaming laptop allowing you to play your existing Steam library on the go. It has a 7-inch touchscreen, full-size controls, and a custom AMD processor that can run AAA games smoothly…including Cyberpunk 2077.The Steam Deck also supports a docked mode that connects to a monitor for a bigger screen. It runs on SteamOS, a Linux-based system that can run Windows games through Valves Proton compatibility layer.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 37,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/03/youtube-tips-and-tricks.jpg?w=640",
      DataTitle:
        "Binge-watching on YouTube? These 5 tips can enhance your viewing experience",
      DataDetailDescription:
        "Arguably, YouTube is the biggest video-sharing platform in the world today. Over the years, the Google-owned platform has witnessed a rapid rise in the number of content creators. While users enjoy a variety of video content, content creators get the opportunity to monetise their efforts.Owing to the ease of access and a wide range of genres, YouTube has become the go-to platform for video content. It also has a paid version, YouTube Premium, that offers an uninterrupted viewing experience.If you spend hours on YouTube every day, getting a YouTube Premium subscription will elevate your viewing experience. YouTube Premium offers not only ad-free video streaming, but also features like picture-in-picture mode, allowing users to watch videos while multitasking.Similarly, you can also play just the audio in the background with the YouTube Premium subscription. Right now, the monthly YouTube subscription plan costs Rs 139 while the annual plan costs Rs 1,290. If you are trying Premium for the first time, YouTube will offer at least one month of free subscription for most users.If you watch YouTube on mobile data, enabling data saver mode could help you watch a lot of videos with limited data usage. Go to settings > data saving and enable data-saving mode to reduce data usage by YouTube. Note that enabling this option will reduce the video streaming quality to 360p, and you wont be able to manually change the video resolution.If you want to get the best streaming experience on YouTube, you should enable a higher picture quality option. Make sure to enable the same for both mobile and Wi-Fi data to enjoy high-quality video streaming on YouTube. Again, if you have a slower internet speed, videos could take a few seconds to buffer and load.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 38,
      category: "technology",
      DataImage: "https://images.indianexpress.com/2023/03/ceir.jpg?w=640",
      DataTitle: "How to find lost or stolen phone through CEIR portal",
      DataDetailDescription:
        "There is no worst feeling than losing your smartphone in this connected world. Phones are no more just devices that are used to make calls and send SMSs, phones are currently the modern world equivalent of swizz army knives, which can do a lot of things.Department of telecommunications, Govt of India has launched a new website named Central Equipment Identity Register (CEIR), allowing users to quickly lodge a complaint on a lost electronic gadget with an IMEI (International Mobile Equipment Identity) number such as a smartphone at a local police station. Using the CEIR website, users can block a stolen or lost mobile, unblock a found mobile, and they can even use the website to find more details about a second-hand smartphone.There is also a free Android and iOS app called KYM (know your mobile), which can also offer details on the status of your smartphone. It offers details like the status of the IMEI number, mobile manufacturer name, model number, and device type. All you have to have is the IMEI number (which will be available on the bill, box, and can also be accessed from the phone by dialling *#06#) and a phone number that can receive OTP.Right now, CEIR service is available in all 37 states (including union territories). To report a lost or stolen smartphone, one needs details like the mobile number of the SIM cards installed on the phone, the IMEI number, and a mobile purchase invoice.Similarly, you also need to file a complaint at your nearest police station as the digital copy of the police complaint is also required to block the phone along with the details of the smartphone owner. When you block a smartphone on CEIRs website, it will be blocklisted on the central database and wont be able to use it.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 39,
      category: "technology",
      DataImage:
        "https://images.indianexpress.com/2023/03/whatsapp-plus-extension-featured.jpg?w=640",
      DataTitle:
        "Worried about opening WhatsApp at work? This browser extension can blur your chats, contacts.",
      DataDetailDescription:
        "WhatsApp isnt exactly built to be used for business collaboration – people generally use apps like Slack for that. But in India, the Meta-owned platform is like a one-stop destination for all kinds of communication, work and otherwise, which can mess with the work-life balance sometimes.Things get worse when you work in an open office where people can outrightly peek into your system. Or you could be working at a cafe trying to mind your own business but are bothered by an invasive seatmate.Helping with these problems is a browser extension for WhatsApp Web that blurs out contact names, their profile pictures, and/or their messages on the chat list. Called WA Web Plus, the extension extends the chat apps feature list and enhances privacy. Heres how you can use it.While WA Web Pluss website claims that the extension is built for Chrome, it should also work on Edge, Opera, Vivaldi, and Brave, since they use the same engine (Chromium). We tested it out on Edge and it worked expectedly. However, browsers like Firefox and Safari are left out since they cannot install from the Chrome Web Store.The WA Web Pluss list of features is overwhelmingly lengthy but some features are obviously more useful than others: Blur recent messages, contact names, contact photos, and conversation messages: Your colleagues will only see what you want them to see when youve toggled these on.Set lock screen password: If you are in the habit of your leaving your PC open when you go on lunch breaks then its important to ensure that no one has access to your WhatsApp but you even when youre away.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 40,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/04/barbie-1200.jpg?resize=450,250",
      DataTitle:
        "Barbie trailer: Margot Robbie and Ryan Gosling are all glammed up as the popular dolls in spunky new video",
      DataDescription:
        "Hollywood star Margot Robbie has come alive as Barbie in the Data trailer of Greta Gerwig directorial of the same name. The film also stars a number of other familiar actors and stars, including Ryan Gosling and Simu Liu as the Ken dolls.",
      DataDetailDescription:
        "Hollywood star Margot Robbie has come alive as Barbie in the Data trailer of Greta Gerwig directorial of the same name. The film also stars a number of other familiar actors and stars, including Ryan Gosling and Simu Liu as the Ken dolls.The clip sees some healthy, comical banter between a variety of Kens, as different versions of Barbie greet each other. Those who grew up around the dolls or played with them as children might get a little nostalgic, as Gerwig brings in not only Barbies pink car, but her hairstyles and her roller blades into the picture too.While it may seem ridiculous and far-fetched to make a Barbie movie, it is also perhaps this intrigue that will end up drawing the audience to cinemas ultimately. So far, we know very little about the plot of the feature, except that it stars celebrities such as Dua Lipa, Emma Mackey, and Kate McKinnon among others in pivotal roles.The one-line synopsis with which the Barbie trailer was shared online reads, “To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or youre a Ken.” Fans seems excited about watching the feature as one of them commented, “This looks like it will be fun. Theyre going for the whole a child is playing with them route with them, hitting all of the meta points then they end up in the real world, which can either be fun or an overdone mess, so Im interested where theyre going to take it.” Another person wrote, “Are we all in agreement that this looks so much better than anyone thought it possibly would/could be? Im legit excited to see this!”",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 41,
      category: "hollywood",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnphmHH50ZEGDaXwPXqL4hYcVtcwEL61nYuA&usqp=CAU",
      DataTitle:
        "Leonardo DiCaprio testifies in international money-laundering case of Fugees rapper",
      DataDescription:
        "Leonardo DiCaprio, while on the witness stand during the trial, responded to questions in a composed manner, sometimes acknowledging that he may not recall certain details or dates with clarity.",
      DataDetailDescription:
        "Movie star Leonardo DiCaprio testified in federal court Monday morning as part of a trial involving international money laundering, bribery and a prominent rap artist.Prakazrel “Pras” Michel — a founding member of the iconic 1990s hip-hop group, The Fugees — is accused of funneling money from a fugitive Malaysian financer through straw donors to Barack Obamas 2012 reelection campaign. Five years later, prosecutors say he tried to squelch an investigation into that same financer under former President Donald Trumps administration.At the heart of the case is Low Taek Jho, usually known as Jho Low. He is accused of masterminding an international money laundering and bribery scheme that stole billions from the Malaysian state investment fund known as 1MDB.DiCaprios connection with the case comes from his years-long relationship with Low, who was one of the primary financers of the movie “The Wolf of Wall Street.” Low is currently a fugitive but has maintained his innocence.According to the charges, Michel essentially became a conduit for Lows pilfered millions and his attempts to influence the U.S. government. Prosecutors allege that from June to November 2012, Low directed more than $21.6 million to be moved from foreign entities to Michels accounts in order to funnel money into the 2012 presidential election. They say Michel then paid about 20 straw donors and conduits so they could make the donations in their names and conceal where the money actually came from, according to the indictment.DiCaprio testified that he met and befriended Low at a birthday party in Las Vegas in 2010. “I understood him to be a huge businessman with many different connections in Abu Dhabi and Malaysia,” he said.The 48-year-old Oscar winner answered questions on the witness stand calmly — occasionally deferring to a fuzzy memory on some details and dates. In addition to his relationship with Low, DiCaprio said he had known the defendant Michel since sometime in the 1990s when they met backstage after a Fugees concert.Low was known for hosting lavish star-studded parties and group vacations on his private jet to events like the World Cup in Brazil. DiCaprio recounted one particular junket that involved flying to Australia to celebrate New Years Eve, then flying to Las Vegas to celebrate a second time in one day. Michel was present on some of these trips, DiCaprio said.Low became a regular contributor to DiCaprios charitable foundation, and eventually Low floated the idea of providing the primary financing for “The Wolf of Wall Street.”DiCaprio said he had Lows funding and legitimacy carefully vetted before entering into a business relationship.“I was given the green light by my team as well as my studio,” he said. “He was a legitimate business person wanting to invest in the movie.”DiCaprio also recalled a “casual conversation” with Low in which Low told him he intended to make a large contribution to Obamas reelection campaign.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 42,
      category: "hollywood",
      DataImage:
        "https://static.onecms.io/wp-content/uploads/sites/6/2010/09/harry-potter-ron_240.jpg",
      DataTitle:
        "Harry Potter likely to be rebooted as seven season HBO Max series; each season to be based on one book",
      DataDescription:
        "The new Harry Potter project will be a reboot of the classic book series rather than an in-universe spinoff such as the Fantastic Beasts films.",
      DataDetailDescription:
        "Get ready to return to Hogwarts, this time on the small screen.The best-selling Harry Potter series will be rebooted for the streaming age, according to new reports that suggest Warner Bros. Discovery is in early talks with JK Rowlings camp to produce a new show based on her popular books. Rowling, who has courted controversy in recent years with her comments about trans rights issues, will retain a degree of creative control, but wont serve as showrunner or creator.According to Bloomberg, the series would be directly based on Rowlings books, rather than being an “in-universe spinoff” such as the Fantastic Beasts films. “Each season would reportedly draw from one of the books, suggesting an ongoing franchise that would stretch for years for the studio. Under the deal, Rowling would maintain a degree of creative involvement with the series, though she would not serve as primary creator or showrunner,” a section of a Variety report read.Harry Potter, a series of seven fantasy novels, was adapted into an eight-part global blockbuster film series by Warner Bros. starting with Harry Potter and the Sorcerers Stone in 2001. The movie franchise culminated with Harry Potter and the Deathly Hallows  Part 2 in 2011, and has grossed a combined total of $7.7 billion. Post the Harry Potter films, a spin-off prequel series was planned, which started with the 2016 Fantastic Beasts and Where to Find Them, but stalled after the critical and commercial underperformance of last years Fantastic Beasts: The Secrets of Dumbledore.The film series still holds a strong pop-culture influence even a decade after its conclusion, even though public opinion of Rowling herself remains conflicted. The Harry Potter film series was headlined by Daniel Radcliffe in the titular role, Rupert Grint as Ron Weasley and Emma Watson as Hermione Granger.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 43,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/04/extraction-2-teaser-trailer-1200.jpg?resize=450,250",
      DataTitle:
        "Extraction 2 teaser trailer: Chris Hemsworth shows once again he can be lethal even without Mjolnir or Stormbreaker",
      DataDescription:
        "Chris Hemsworth is back from the dead for another lethal mission in Russo Brothers' sequel to Extraction, directed by Sam Hargrave.",
      DataDetailDescription:
        "When Extraction was released back in 2020, it turned out to be a huge hit, more so in India as it was set in the country and featured Bollywood actors Randeep Hooda and Pankaj Tripathi. There was a huge expectation for its sequel. In the meanwhile, Russo Brothers also developed a huge fanbase in India with The Gray Man, which had Dhanush in a lead role. Now, all these have culminated and resulted in a great reception for the teaser trailer of Chris Hemsworth starrer Extraction 2.The promo is unique in a way that rather than taking the usual route of showing various scenes of the film, it just shows a small chunk of what seems to be an extraction sequence that is high on action. Hemsworth is seen battling an army to get Kutaisi Staff (Sinead Phelps) out of a prison. The clip is enough to hint at whats in store in the action thriller.As far as the plot of Extraction 2 goes, after surviving the fatal mission in the first part, Chris Hemsworths Tyler Rake goes into a coma for nine months. After he comes into his senses, he joins the Australian black ops for another deadly mission, which is to rescue the battered family of a ruthless Georgian gangster from the prison where they are being held.Goldhiteh Farahani. Adam Bessa, Olga Kurylenko, Daniel Bernhardt, and Tinatin Dalakishvili also star in the film. It will begin streaming from June 16 on Netflix.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 44,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/04/Dungeons-and-Dragons.jpeg?resize=450,250",
      DataTitle:
        "Dungeons and Dragons opens with $38.5M, takes down John Wick 4",
      DataDescription:
        "Dungeons and Dragons: Honor Among Thieves cost $150 million to make. With a production cost like that, the film will be looking for sustained sales through April and similar success overseas to potentially kickstart a new franchise.",
      DataDetailDescription:
        "Riding terrific reviews and a strong word-of-mouth, the role playing game adaptation Dungeons & Dragons: Honor Among Thieves opened with $38.5 million in US and Canadian movie theaters over the weekend, according to studio estimates Sunday, stealing the top box-office perch from John Wick: Chapter 4.The Paramount Pictures and eOne release appealed to more moviegoers than many expected a film based on a notoriously niche table top game to interest. Game Night directors Jonathan Goldstein and John Francis Daley turned in a rollicking comic action-adventure, with a cast including Chris Pine, Michelle Rodriguez, Regé-Jean Page and Hugh Grant, thats bringing in ticket buyers less familiar with D&D. Audiences gave Honor Among Thieves, which launched with a raucous opening-night premiere at SXSW, an A- CinemaScore. It scored 91% fresh on Rotten Tomatoes.Dungeons & Dragons was also a big roll of the dice. The film, co-produced and co-financed by Paramount with eOne, which is owned by Hasbro, cost $150 million to make. With a production cost like that, Dungeons & Dragons will be looking for sustained sales through April and similar success overseas to potentially kickstart a new franchise. It launched internationally with $33 million.“The challenge with this film is convincing everyone that this film is for you,” said Aronson. “Jonathan and John, these guys are really talented and great collaborators. Were going to work more with them. Hopefully, this will be the start of a franchise.”John Wick: Chapter 4, which launched last weekend with a franchise-best $73.5 million, slid to second place in its second weekend with $28.2 million. While a sizeable dip, the assassin action film, starring Keanu Reeves, has already accrued $122.8 million domestically and, after adding another $35 million internationally over the weekend, $245 million worldwide. Lionsgate has no shortage of plans for further expansion in the franchise.Along with John Wick: Chapter 4, Creed III and Scream VI, Dungeons & Dragons adds to a string of well-received March releases that have surpassed box-office expectations and scored well with audiences. Its a streak that Universal Pictures The Super Mario Bros. Movie will look to continue next weekend.“While it may not be the highest grossing March ever, this is one of the best months of March for the industry in its history, coming off of three years of a pandemic-challenged marketplace,” said Paul Dergarabedian, senior media analyst for data firm Comscore. “March is not the summer, but its sure felt like the summer, with hit after hit.”Those film have helped push the 2023 box office well ahead of last years pace, up 28.7%, according to David A. Gross, who runs Franchise Entertainment Research. Still, overall ticket sales arent yet up to pre-pandemic levels, trailing the 2017-2019 average by 28.8%.Games and toys are also proving to be dependable big-screen resources. Dungeons & Dragons will be followed this year by Greta Gerwigs Barbie and a new Transformers movie. The Super Mario Bros. Movie is expected to extend a rising trend for the once-derided video game adaptation.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 45,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/03/celebrities-at-nmacc.jpg?resize=450,250",
      DataTitle:
        "Tom Holland, Zendaya, Penelope Cruz, Christian Louboutin, Jeff Koons to grace Nita Mukesh Ambani Cultural Centre opening",
      DataDescription:
        "While many Bollywood celebrities are expected to be gracing the event, we have got access to the list of international celebrities who will be attending the grand opening.",
      DataDetailDescription:
        "The opening ceremony of the Nita Mukesh Ambani Cultural Centre (NMACC) in Mumbai is going to be a star-studded affair. While many Bollywood celebrities are expected to be gracing the event, we have got access to the list of international celebrities who will be attending the grand opening.Academy award winner actor Penelope Cruz, Spider-Man stars Tom Holland and Zendaya, American artist Jeff Koons and French fashion designer Christian Louboutin are on the guest list of the Ambanis for the opening of Nita Mukesh Ambani Cultural Centre. Priyanka Chopra and Nick Jonas too are expected to join the international stars at the event.The cultural centre is situated within the Jio World Centre at Bandra Kurla Complex in Mumbai. On the first of its three-day opening extravaganza, there will be a musical theatrical titled Civilization to Nation: The Journey of Our Nation. Directed by Indian playwright and director Feroz Abbas Khan, it will see a dance performance choreographed by Vaibhavi Merchant. 700 performers will be performing at the opening ceremony.Talking about the opening of the cultural centre, Isha Ambani, daughter of Nita and Mukesh Ambani, said in a statement, “The Nita Mukesh Ambani Cultural Centre is so much more than a space – it is the culmination of my mothers passion for arts, culture, and her love for India. She has always dreamt of creating a platform that would be welcoming to audiences, artists, performers, and creatives at large. Her vision for NMACC is to showcase the best of what India has to offer to the world and bring the world to India.”",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 46,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/03/Zendaya.jpg?resize=450,250",
      DataTitle: "Zendaya to receive Star of the Year award at CinemaCon 2023",
      DataDescription:
        "Zendaya will receive the award at the Big Screen Achievement Awards ceremony. CinemaCon 2023 will be held at Caesars Palace in Las Vegas from April 24-27.",
      DataDetailDescription:
        "Hollywood star and the Euphoria actor Zendaya is all set to receive the Star of the Year award at CinemaCon 2023. According to Variety, a US-based media house, Mitch Neuhauser, managing director of CinemaCon, has announced the news. Zendaya will receive the award at the Big Screen Achievement Awards ceremony on the final night of the convention. CinemaCon 2023 will be held at Caesars Palace in Las Vegas from April 24-27.“In just a few short years, Zendaya has captured audiences attention with her compassionate performance on the small screen as Rue in Euphoria and has drawn audiences in on the big screen with her performances in Spider-Man: Far From Home, The Greatest Showman and Dune. We could not be more honored to present Zendaya with this years CinemaCon Star of the Year Award,” said Neuhauser, reported Variety.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 47,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/03/Jennifer-Aniston-on-wearing-Manish-Malhotras-dress-in-Murder-Mystery-2-1200.jpg?resize=450,250",
      DataTitle:
        "Jennifer Aniston on wearing Manish Malhotras dress in Murder Mystery 2: It was beautiful",
      DataDescription:
        "Jennifer Aniston wore an ivory-coloured chikankari lehenga designed by Manish Malhotra for an Indian wedding sequence in the Netflix movie Murder Mystery 2",
      DataDetailDescription:
        "Hollywood star Jennifer Aniston says she had a gala time gorging on Indian food and donning a “beautiful” lehenga by Indian fashion designer Manish Malhotra for her upcoming film Murder Mystery 2.Aniston, who enjoys a huge fan following in India courtesy her hit 1990s sitcom Friends, wore an ivory-coloured chikankari lehenga designed by Malhotra for an Indian wedding sequence in the Netflix movie. Renowned Hollywood costume designer Debra Mcguire had picked the ensemble for the actor.Adam Sandler, who was also part of the conversation, said Jennifer Aniston “looked stunning” in the lehenga.“Thank you, sweetheart,” she responded to her co-stars praise.“It was extremely heavy and I wasnt expecting that. So much respect for all the beautiful women of India who have to not only wear it, but dance their b**** off. We had a really good time,” she added.The new Netflix movie is the sequel to 2019s Murder Mystery, which followed married couple Nick and Audrey Spitz who get caught up in a murder investigation on a billionaires yacht.Murder Mystery 2 lifts off four years after the events of the first film in the comedy mystery franchise. Now, the Spitzes are full-time detectives struggling to get their private eye agency off the ground when theyre invited to celebrate the wedding of their friend the Maharaja (Adeel Akhtar) on his private island, a character introduced in the first film.But trouble follows the Spitzes again when the groom is kidnapped for ransom soon after the festivities begin — making each glamorous guest, family member, and the bride herself a suspect.Aniston said they shot the wedding scene for three days in Hawaii.The actors, who are real-life friends and share great chemistry on screen, were also completing each others sentences in the roundtable interview.“We had five days to shoot that scene,” she said, to which Sandler, 56, added, “And dance and eat Indian food.” “Food and be happy. But remember how long it took? We also shot it in Hawaii for three days,” Aniston continued.Sandler once again dished out a compliment to his co-star.“It was hot. You looked fantastic,” he said.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 48,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/03/Keanu-Reeves.jpeg?resize=450,250",
      DataTitle:
        "Keanu Reeves John Wick Chapter 4 comes out blazing with 73.5 million dollars",
      DataDescription:
        "John Wick: Chapter 4 starring Keanu Reeves as the reluctant-but-not-that-reluctant killer John Wick, exceeded both expectations and previous opening weekends in the R-rated franchise.",
      DataDetailDescription:
        "John Wick: Chapter 4, the fourth installment in the Keanu Reeves assassin series, debuted with a franchise-best $73.5 million at the box office, according to studio estimates Sunday.The Lionsgate film, starring Reeves as the reluctant-but-not-that-reluctant killer John Wick, exceeded both expectations and previous opening weekends in the R-rated franchise. Since first launching in 2014 with John Wick ($14 million on its opening weekend), the Chad Stahelski-directed series has steadily grown as a ticket-seller with each sequel. The 2017 follow-up opened with $30.4 million, and the 2019 third chapter, Parabellum, debuted with $56.8 million.But Chapter 4, running two hours and 49 minutes and costing at least $100 million to produce, is the biggest film yet in the once-lean action series. Critics also said it was a franchise high point, scoring 95% fresh on Rotten Tomatoes. The film, which drew a 69% male audience, added $64 million overseas. Its Lionsgates biggest success of the pandemic era.“When you make a fourth in an action franchise, you have to expect it to go down. That is the nature of these franchises,” said Joe Drake, chairman of Lionsgate Motion Picture Group. “But we kept seeing signals and it was wonderful to see the movie they delivered. We saw the audience wanting more.”Though John Wick has been bigger at the box office with each new release — an enviable and rare trajectory among Hollywood franchises — Chapter 4 brings some finality to Reeves character. The actor hasnt entirely dismissed continuing the series, telling interviewers “never say never.”Regardless, the franchise is set to keep humming. A spin-off titled Ballerina starring Ana de Armas and co-starring Reeves has already been shot. The miniseries The Continental, with Mel Gibson, is upcoming on Peacock.“Chad and Keanu have created this world and that world continues to expand. I dont know what all the edges of that world are, still,” said Drake. “As best they can, theyll continue to try to seduce Keanu to come back and do things. He gets beat up in these shows. He really does. And at the end hes like, Im not doing it anymore. Then you watch him sit in the theater and feel that audience.”“So were going to continue to look for ways to meet that demand.”The release of John Wick: Chapter 4, which included a surprise premiere at SXSW, was also bittersweet. Lance Reddick, who plays the Continental Hotel concierge, Charon, in the films, unexpectedly died at the age of 60 a week before the films release.But the success of John Wick: Chapter 4 adds to a strong start in 2023 for Hollywood. After ticket sales rebounded to about 67% of pre-pandemic levels last year, the release lineup is steadier and more packed this year. Sequels have led the way, including Creed III and Scream VI. Ticket sales are up 28% from last year, according to data firm Comscore.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 49,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/03/deepika-padukone-rrr-oscars.jpg?resize=450,250",
      DataTitle:
        "Oscars 2023: Deepika Padukone introduces RRRs Naatu Naatu at 95th Academy Awards.",
      DataDescription:
        "Deepika Padukone brought glamour to the Indian contingent at the 95th Academy Awards. She was given the honor of being an Oscar presenter.",
      DataDetailDescription:
        "Deepika Padukone took to the stage and introduced the “Naatu Naatu” musical performance by Kaala Bhairava and Rahul Sipligunj at the 95th Academy Awards on Monday morning (India time). The actor was revealed as one of the presenters in the first round of announcements. Other presenters at the prestigious awards include Halle Berry, John Travolta, Harrison Ford, and others. The show is hosted by comedian Jimmy Kimmel.Deepika described the song as a banger, as dancer took to the stage and lit up the crowd. The performance received a standing ovation.India was powerfully represented at the Oscars this year. In addition to Deepika appearing as a presenter, director SS Rajamoulis RRR was nominated in the Best Original Song category, for the track “Naatu Naatu.” Shaunak Sens widely-decorated All that Breathes has been nominated in the Best Documentary Feature category, but lost, and The Elephant Whisperers was nominated in the Best Documentary Short category.Nominees Kaala Bhairava and Rahul Sipligunj performed the song on stage. Everything Everywhere All at Once led the field of nominees with 11 nods. Deepika made her Hollywood acting debut with the action film xXx: Return of Xander Cage. She will soon be seen in a cross-border romantic comedy.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 50,
      category: "hollywood",
      DataImage:
        "https://imgs.search.brave.com/TsjS0P-tnR67V4Lm4dYo_etrfxv42gckp3anVsfg9H4/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JRi56/VVZqMEU4NiUyYkZt/eElSZ2wlMmZRQzRr/dyZwaWQ9QXBp",
      DataTitle:
        "The Night Agent Leads Netflix Top 10 for Second Week in a Row",
      DataDescription:
        "The buzz surrounding the action thriller series, which scored an early Season 2 renewal at the streamer less than a week after launch, boosted the series to log 385 million hours viewed in its first two weeks since its March 23 debut. As fans tuned in to watch Peter Sutherland tackle his perilous mission, “The Night Agent” brought in 47 million views.",
      DataDetailDescription:
        "“The Night Agent” has nabbed the top spot on Netflixs Top 10 English TV List for a second week in a row.The buzz surrounding the action thriller series, which scored an early Season 2 renewal at the streamer less than a week after launch, boosted the series to log 385 million hours viewed in its first two weeks since its March 23 debut. As fans tuned in to watch Peter Sutherland tackle his perilous mission, “The Night Agent” brought in 47 million views.On the film front, the action-packed “Murder Mystery 2,” led by Adam Sandler and Jennifer Aniston, debuted to the No. 1 spot on the English Films list with 64.42 million hours viewed, marking the 2nd biggest opening weekend for a comedy film on the streamer. Viewing for “Murder Mystery” also boosted the first flick to the No. 2 spot with 24.7 million hours viewed as viewers caught up on Sandler and Anistons first adventure.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 51,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/03/Untitled-design-94.jpg?resize=450,250",
      DataTitle: "A history of Indian nominations at the Oscars",
      DataDescription:
        "Only 13 Indians have been nominated to the Oscars in its nearly 100 years. Heres a look at the nominations and the wins.",
      DataDetailDescription:
        "The 95th Academy Award might turn out to be a prosperous one for the Indian filmmaking fraternity with three nominations this year. After winning a Golden Globe, the infectious Naatu Naatu, from SS Rajamoulis epic action drama film RRR (2022), might just clench the Best Original Song at the Oscars tomorrow. Moreover, All That Breathes (2022) by Shaunak Sen and Aman Mann is in the running for Best Documentary Feature while Kartiki Gonsalves and Guneet Mongas Elephant Whisperers (2022) has been nominated for Best Documentary (Short Subject).So far, 13 Indians have been nominated to the Oscars and eight of them have won the prestigious award. Heres a look at all the nominations for Indian films, documentaries and shorts for the Academy.1958: Though not an official entry, Mehboob Khans Mother India (1957) was the first Indian film to receive an honorary mention in the Best Foreign Language Film category at the 30th Academy Awards. It was a critical and commercial success, both in India and abroad and was also nominated for the Palme dOr at the Cannes Film Festival. The film is a powerful portrayal of the resilience and strength of Indian women, with Nargis delivering a remarkable performance in the lead role.1961: At the 33rd Oscars, producer Ismail Merchants 13-minute short film The Creation of Woman (1961) and directed by Charles F Schwep was nominated in the Best Short Subject (Live Action) category. It, however, didnt win. The film, narrated by Saeed Jaffrey, portrays the genesis of man and woman from the perspective of Brahma, the Hindu god of creation. The lead roles are performed by two skilled dancers, while Bhaskar Roy Chowdhury portrays the character of God.1969: Fali Bilimorias short documentary The House That Ananda Built (1968) was nominated for Best Documentary (Short Subject) at the 41st Academy Awards but it didnt win. The documentary follows Ananda, a successful businessman in Nagpur, and looks at his life, children and beliefs from prior to independence until 20 years after.1978: Ishu Patels short animated Bead Game (1977) was nominated in the Best Animated Short Film category at the 50th Academy Awards, though it did not win. The film features a series of intricate hand-drawn animations, set to a haunting soundtrack of Indian classical music. The images depict the life cycle of a single organism, from birth to death and rebirth, as well as the larger cycles of nature and the cosmos.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 52,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/03/gargi-rrr-jhund.jpg?resize=450,250",
      DataTitle:
        "Beyond RRR and Chhello Show, four great Indian movies that couldve been stronger Oscar contenders",
      DataDescription:
        "While RRR and Chhello show were India's biggest contenders in the feature film categories at this year's Oscars, there were several other Indian movies worthy of consideration. Here are four.",
      DataDetailDescription:
        "In a rush to put every last egg in the RRR basket, the films legions of admirers failed to realise one important thing about Oscar campaigns: fans dont get to pick the winners. When it was decided, for whatever reason, that the largely unseen Chhello Show would represent India at the Academy Awards, the RRR brigade was up in arms. While the Indian contingent was typically toxic in its social media dissent, the Americans whod been desperately trying to emulate desi behaviour (including our willing ignorance of socio-political context), decided that they, too, must voice their dissatisfaction. Nobody was quite sure about whom to direct their anger at, which resulted in vague fist-waving on Twitter.But sheer popularity — or, in the case of RRR, cult success — isnt enough to guarantee a nomination. As has been repeated ad nauseam by this point, Academy Awards campaigns are highly political. And at the end of the day, a film has to actually be good to score a nomination, regardless of how much money is funneled into getting people to watch it. Which is why the travelling circus that everybody put their money on didnt ultimately score more than one nod, and the darling festival hit documentary All that Breathes actually did exactly what was expected of it. Without a rabid social media campaign.Although fans of RRR would understandably disagree, Chhello Show wasnt a particularly bad pick for the Best International Feature category. In fact, theres proof to support this argument; did you know that its the only Indian movie to progress to the shortlist stage of voting since the Academy began announcing these shortlists in 2006? Chhello Show had a real shot at securing a nod. There was a sound strategy at play here; had things gone as planned, India wouldve had three feature films in contention in three different categories. Not to mention The Elephant Whisperers, which is competing in the Best Documentary Short category.Theres no way of knowing if the Film Federation of India shot itself in the foot by not selecting RRR. But what we do know is that members of the Academy respond to certain ingredients in their foreign language films, once enough money has been spent on attracting their attention, of course. On paper, RRR and Chhello Show had all the components — they were culturally specific, yet thematically accessible — but here are four other options that might have had a shot at Oscars success, provided, of course, that theyd been bestowed with all the bells and whistles of an Academy Awards campaign.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 53,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/03/Edward-Norton-R.jpg?resize=450,250",
      DataTitle: "When Hollywood needs a movie villain, the tech bro answers",
      DataDescription:
        "In recent years, the tech bro has proliferated on movie screens as Hollywoods go-to bad guy.",
      DataDetailDescription:
        "“A toast to the disruptors,” Edward Nortons tech billionaire says in Rian Johnsons Oscar-nominated Glass Onion: A Knives Out Mystery.And why not a toast? Sundays Academy Awards wont give a prize for best villain, but if they did, Miles Bron would win it in a walk. (With apologies to the cloud of Nope.) He is an immediately recognisable type weve grown well acquainted with: a visionary (or so everyone says), a social media narcissist, a self-styled disrupter who talks a lot about “breaking stuff”.Miles Bron is just the Data in a long line of Hollywoods favorite villain: the tech bro. Looking north to Silicon Valley, the movie industry has found perhaps its richest resource of big-screen antagonists since Soviet-era Russia.Great movie villains dont come along often. The best-picture nominated Top Gun: Maverick, like its predecessor, was content to battle with a faceless enemy of unspecified nationality. Why antagonise international ticket buyers when Tom Cruise vs. Whomever works just fine but in recent years, the tech bro has proliferated on movie screens as Hollywoods go-to bad guy. Its a rise that has mirrored mounting fears over technologys expanding reach into our lives and increasing skepticism for the not always altruistic motives of the men – and it is mostly men – who control todays digital empires.Weve had the devious Biosyn Genetics CEO (Campbell Scott) in Jurassic World: Dominion, a franchise dedicated to the peril of tech overreach; Chris Hemsworths biotech overlord in Spiderhead; and Mark Rylances maybe-Earth-destroying tech guru in 2021′s Dont Look Up. Weve had Eisenberg, again, as a tech bro-styled Lex Luthor in 2016′s Batman v. Superman; Harry Mellings pharmaceutical entrepreneur in 2020s The Old Guard; Taika Waititis rule-breaking videogame mogul in 2021′s Free Guy; Oscar Isaacs search engine CEO in 2014′s Ex Machina; and the critical portrait of the Apple co-founder in 2015′s Steve Jobs.Kids movies, too, regularly channel parental anxieties about technologys impact on children. In 2021′s The Mitchells vs. the Machines, a newly launched AI brings about a robot apocalypse. Rons Gone Wrong (2021) also used a robot metaphor for smartphone addiction. And TV series have just as aggressively rushed to dramatize Big Tech blunders. Recent entries include: Ubers Travis Kalanick in Showtimes Super Pumped; Theranos Elizabeth Holmes in Hulus The Dropout; and WeWorks Adam and Rebekah Neumann in Apple TVs We Crashed. Some of these portrayals you could chalk up to Hollywood jealousy over the emergence of another California epicenter of innovation. But those worlds merged long ago. Many of the companies that released these movies are disrupters, themselves — none more than Netflix, distributor of Glass Onion. The streamer was cajoled into releasing Johnsons sequel more widely in theaters than any previous Netflix release. Estimates suggested the film collected some $15 million over opening weekend, the old fashioned way, but Netflix executives have said they dont plan to make a habit of such theatrical rollouts.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 54,
      category: "hollywood",
      DataImage:
        "https://imgs.search.brave.com/rhqaj-azcMTgktldO_zNPXsmN9V_yc_EdtH5LSfF2iE/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/cHY0R2FvY09PVFVo/VjFEZk4wYTdBSGFF/SyZwaWQ9QXBp",
      DataTitle:
        "Creed III debuts to $58.7 million, knocks out Ant-Man and the Wasp: Quantamania",
      DataDescription:
        "Creed III made around $58.7 million in ticket sales in North America, while being screened at 4,007 locations. Analysts had anticipated the film to collect around $30 million during the opening weekend.",
      DataDetailDescription:
        "Creed III punched above its weight at the domestic box office in its first weekend in theaters. The MGM release knocked Ant-Man and the Wasp: Quantumania out of first place and far surpassed both industry expectations and the opening weekends of the first two movies in the franchise.Playing in 4,007 locations in North America, Creed III earned an estimated $58.7 million in ticket sales, according to studio estimates Sunday. Going into the weekend, analysts expected the film to open in the $30 million range. The first Creed debuted to $29 million in 2015 and Creed II opened to $35 million in 2018.Michael B. Jordan made his directorial debut with Creed III, which pits his character Adonis against a childhood friend, Dame, played by Jonathan Majors. Its the first in the Rocky/Creed films to not feature Sylvester Stallone, who chose not to return because of creative differences.“This is beyond all of our expectations. And we knew that we had something special — we tested the movie and it tested great, but the public responded so resoundingly to it,” said Erik Lomis, MGMs head of distribution. “Everything went right here starting with the movie itself… It was just up to us not to break it when they gave it to us and we didnt.” Strong reviews helped Creed III, which is currently sitting at an 87% on Rotten Tomatoes, while audiences gave it an A- CinemaScore. The audience was largely male (63%), diverse (36% Black, 28% Latino, 23% white and 13% Asian/other) and young (55% between 18 and 34) according to exit polls.Over 80% of general audiences said the film was a “definite recommend.” With Black audiences, that number ballooned to 89%.“Ive been doing this a long time and thats rarefied air,” Lomis said. “People love the movie.”Its also the most expensive Creed film, with a reported production budget of $75 million, compared to the others which cost $35 million and $50 million. Internationally, Creed III earned $41.8 million from 75 markets, making its global debut $100.4 million.Its a big moment for Amazon, who acquired MGM for $8.5 billion last year, and could have simply released Creed III on its streaming service with a limited theatrical run. But they chose theatrical, and it paid “Amazon threw their weight behind this movie like only they can do,” Lomis said. “They supercharged the campaign with marketing support across all their verticals on the platform and beyond the platform. That shows a commitment to the theatrical business model from Amazon and MGM, which I think should be exciting to everybody.”The companys next major theatrical release is the Ben Affleck-directed Air, starring Matt Damon, out next month.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 55,
      category: "hollywood",
      DataImage:
        "https://images.indianexpress.com/2023/04/spider-man-1200.jpg?resize=450,250",
      DataTitle:
        "Spider-Man Across the Spider-Verse trailer sees Miles Morales become a rebel as he clashes with Oscar Isaacs Miguel OHara",
      DataDetailDescription:
        "The brand-new trailer of Spider-Man: Across the Spider-Verse is as funny and thrilling as one could have hoped for. With Miles Morales discovering there is a whole Spiderteam at work spread across different multiverses, things have been considerably amped up for the sequel of the blockbuster Spider-Man: Into the Spider-Verse.The promo sees Miles reuniting with his old mentor Peter, who now has a kid, while Oscar Isaacs Miguel OHara is seen trying to tame Miles into obedience. There is some romance also in the offing with Hailee Steinfelds Gwen Stacy. All in all, the new film has a lot going on for it, including some well-done comic moments, and a popular Spider-Man meme where different Spideys are seen pointing at each other.The official synopsis of Spider-Man: Across the Spider-Verse reads, “Miles Morales returns for the next chapter of the Oscar-winning Spider-Verse saga, Spider-Man: Across the Spider-Verse. After reuniting with Gwen Stacy, Brooklyns full-time, friendly neighbourhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. What makes this movie special is the introduction of Indian Spider-Man for the very first time, Pavitr Prabhakar, straight out of the streets of Mumbattan. The film is directed by Joaquim Dos Santos, Kemp Powers and Justin K. Thompson.”",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 56,
      category: "hollywood",
      DataImage:
        "https://imgs.search.brave.com/YQURN_PtQdIw9rg99nqOOGSvIfOCvyCB2zf1RO7t-pE/rs:fit:474:248:1/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1vdmlld2Vi/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDQv/bW9hbmEuanBlZw",
      DataTitle:
        "Moana Remake: Everything We Know About The Live-Action Film Starring Dwayne Johnson",
      DataDetailDescription:
        "Cue the Moana soundtrack, because a live-action remake of the beloved Disney film is officially in the works! The exciting news was announced at the Disney 2023 Annual Meeting of Shareholders Webcast on April 3 by Dwayne Johnson, who is reprising his role as Maui. Dwayne will also produce the new film alongside Aulii Carvalho, who voiced Moana in the animated feature.“Humbled to say were bringing #MOANAs beautiful story to the live action big screen!” Dwayne tweeted when the news was announced. “#MAUI changed my life (miss you grandpa) and Im honored to partner with @DisneyStudios to tell our story thru the realm of music & dance, which at the core is who we are as Polynesian people.”Disney fans are so excited that their favorites from Moana are being brought to life on the big screen. The 2016 animated film grossed over $640 million worldwide and was nominated for two Academy Awards. Disney just did live-action remakes of Cruella and Pinocchio, with Peter Pan & Wendy, The Little Mermaid, and Snow White on deck. We cant wait to see how Disneys live-action spin on Moana turns out. Heres everything you need to know about the upcoming film.There is no release date yet for the Moana live-action remake. Dwayne Johnson said in his announcement that the film is “still very early in the process” with “so much more work to be done.” That means we might not see the movie until 2024, if not 2025 or later.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 57,
      category: "hollywood",
      DataImage:
        "https://imgs.search.brave.com/YNsj8nyoVr6bagXAutqHWwP8_irm4vhG0Ix0_EY4X-Q/rs:fit:474:266:1/g:ce/aHR0cHM6Ly9sZWdl/bmRhcnktZGlnaXRh/bC1uZXR3b3JrLWFz/c2V0cy5zMy5hbWF6/b25hd3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA1/LzMxMTAzODEwL3No/cmVrLWRvbmtleS1j/b25mdXNlZC05MjB4/NTE4LmpwZWc",
      DataTitle: "Shrek 5: Everything We Know So Far About The Movie",
      DataDetailDescription:
        "After years of waiting, its looking like Shrek 5 is finally going to happen. Shrek changed everything when that big (and sometimes) friendly ogre came into our lives all the way back in 2001, and hes been our beloved green ogre ever since. Over the past 20 years, the Shrek franchise — Shrek, Shrek 2, Shrek the Third, and Shrek Forever After — has become a global phenomenon and made over $1 billion at the box office.Its been over a decade since the last Shrek movie, Shrek Forever After, was in theaters and fans are anxiously awaiting news about Shrek 5. Luckily, Illumination CEO Chris Meledandri gave a hopeful update about the next sequel on April 4, 2023. Life has rounded up all the Data updates about the movies development, the cast, and more.Is there going to be a Shrek 5? Signs are pointing to yes. On April 4, Illumination CEO Chris Meledandri basically confirmed that a fifth movie is happening. “We anticipate the cast coming back. Talks are starting now, and every indication that weve gotten is theres tremendous enthusiasm on behalf of the actors to return,” he told Variety. Chris also hinted that Donkey, voiced by Eddie Murphy, would be worthy of a spinoff film.Antonio Banderas, who voices Puss in Boots in the Shrek universe, gave an update about Shrek 5 in a Dec. 2022 interview while promoting Puss in Boots: The Last Wish, which was a big success at the box office. “Ive been with this cat for almost 20 years. The first time I did Puss in Boots, I was working on Broadway, so I did my first session there. Ive done five movies now. There is probably gonna be another, and Shrek is probably coming back,” he told Deadline.Theres been talk of Shrek 5 for years, dating as far back as 2004. Shrek 5 has been in development limbo ever since. Back in 2004, DreamWorks co-founder Jeffrey Katzenberg revealed a 5-film plan for Shrek had been mapped out. When the third Shrek film was released back in 2007, Jeffrey said at the time that Shrek 5 would be released in 2013. Nearly 10 years later in 2016, THR reported that Shrek 5 would hit theaters in 2019.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 58,
      category: "hollywood",
      DataImage:
        "https://imgs.search.brave.com/7fA5OHMtm84HdgzKKA_aBLW92OkfkET9gI_NQcZIOQk/rs:fit:474:326:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaGlnaG9u/Y2luZW1hYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDQvVGhlLVN1cGVy/LU1hcmlvLUJyb3Mt/TW92aWUtRnVsbC1Q/bG90LVN1bW1hcnkt/TGVha2VkLWFuZC1T/cG9pbGVycy1SZWFk/LUhlcmUuanBnP3c9/MTA4MCZzc2w9MQ",
      DataTitle:
        "Super Mario Bros. Movie: Photos Of The Cast Voicing The Characters",
      DataDetailDescription:
        "Chris Pratt voices the character of Mario in the Super Mario Bros. movie which is released on April 5, 2023. Mario is a happy-go-lucky Italian plumber thats always trying to rescue Princess Peach.The animated Nintendo film has an all-star cast that voices the characters from Anya Taylor-Joy to Jack Black, Seth Rogen, and more. The highly anticipated film brings the characters from the iconic Nintendo video game to life and you will not believe which A-list stars voice the characters. To see who plays who, you can scroll through the gallery to see all of the photos. Anya Taylor-Joy plays the character of Princess Peach, who is always getting captured by Bowser and needs the Mario brothers help. Jack Black plays Bowser, who is your quintessential villain that breathes fire and is always trying to capture Princess Peach.Keegan-Michael Key voices the character of Toad – your friendly little neighborhood helper that is always there to help Mario along the way. Seth Rogen voices Donkey Kong, a tough, run-and-tumble character. Fun fact: the first time Mario ever appeared in a video game was the Donkey Kong game. Kevin Michael Richardson voices Kamek, a small, wise sorcerer thats always up to no good.Fred Armisen plays Cranky Kong, Donkey Kongs grumpy uncle, who used to run a shop in the games where you could buy items.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 59,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2023/03/mahesh-babu_200_insta.jpg?w=640",
      DataTitle:
        "Mahesh Babu offers a glimpse of his arm day routine; know why it matters",
      DataDescription:
        "Arm training involves exercises that target the muscles in the arms, including biceps, triceps, and forearms, said Varun Rattan, co-founder, The Body Science Academy, Noida",
      DataDetailDescription:
        "Arm training involves exercises that target the muscles in the arms, including biceps, triceps, and forearms, said VarunA host of celebrities have been working very hard to achieve their fitness goals and also sharing glimpses of their journeys while at it. Among the many stars to do so is Telugu actor Mahesh Babu who recently shared a picture of himself after an arm day workout.The actors post was soon flooded with fire emojis from friends and fans, considering he seldom gives fitness updates. One wrote, “Baby is on fire”, while Hrithik Roshans trainer Kris Gethin commented, “Looking good, bro”!Arm training involves exercises that target the muscles in the arms, including biceps, triceps, and forearms. Training these muscles can help you build strength and also tone the arms, said Varun Rattan, co-founder, The Body Science Academy, Noida.“Your biceps are the muscles that run along the front of the upper arms. They are responsible for flexing elbows — the movement you use when you do a bicep curl. Triceps are the muscles that run along the back of your upper arms. They are responsible for extending the elbow — the movement you use when doing a tricep kickback. Forearms are the muscles that run along the lower part of your arms. They are responsible for wrist flexion and extension, the movements you use when you do a wrist curl or wrist extension,” explained Rattan.Why is it necessary to train the arms?Theres no denying that performing exercises like pullups, shoulder presses, and bench presses provide more strength benefits compared to curls and triceps extensions. However, some individuals might not see a significant improvement in their biceps or triceps by only performing these compound exercises. “Such individuals require focused arm training. Strengthening weak links is crucial to enhance performance in larger lifts. At times, isolated training is essential to fortify specific body parts,” noted Rattan.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 60,
      category: "fitness",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi11Oglw2BPQVw9UUfhq-fWXRpEbig9jp-IA&usqp=CAU",
      DataTitle:
        "Ranbir Kapoors fitness trainer shares secret behind his physical transformation for Animal",
      DataDescription:
        "To get a body like Ranbir, you would have to eat a balanced and healthy diet, reduce your caloric intake, and increase physical activity to burn off excess body fat. It may also involve resistance training to build muscle mass and boost metabolism, explains fitness expert Utsav Agarwal.",
      DataDetailDescription:
        "Ranbir Kapoor is undoubtedly a dedicated actor who never shies away from going to extreme lengths to fit the part that he is essaying on the silver screen, even if it means undergoing a massive physical transformation. As such, his personal fitness trainer Shivoham has shared pictures of Ranbir featuring his six-pack abs and muscular body that he has built for his upcoming film, Animal. Shivoham calls Ranbir disciplined, dedicated and hardworking, and revealed that the actor would come for training even at 4 am. And when busy shooting, he would steal some time to train to get in shape for his role.Shivoham wrote, “What you see is truly an example of a disciplined lifestyle, dedication and a lot of hard work. Its a team effort and results like this cannot be achieved by half-hearted involvement”.Shivoham emphasised that having willpower is the most important when embarking upon a physical transformation journey. “The nutrition, the supplements, the training but, more than anything, the WILL to wake up and do what is necessary is the number one reason why you achieve your goals and this is what sets you apart from the rest. 4 am training sessions, 11:30 pm training sessions or even sometimes finding the time in between shoots, Ranbir has done it all. Balancing his personal life along with his professional life. All these things cannot be learned from reading books, these are values that are imbibed in you and conditioning that you pick up from your parents and the company you keep”.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 61,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2023/03/praanvi-yoga-instructor.jpg?resize=450,250",
      DataTitle:
        "Guinness alert: Indian schoolgirl becomes the worlds youngest yoga instructor",
      DataDescription:
        "I want to spread the love of yoga to as many people as possible, she said",
      DataDetailDescription:
        "Praanvi Gupta, a 7-year-old girl from India, has created a Guinness World Record by becoming the worlds youngest yoga instructor (female). She has been approved and certified as an RYT00 (Registered Yoga Teacher) by the Yoga Alliance Organisation after completing the 200-hour Yoga Teacher Training Course.According to the records website, shes even younger than the youngest yoga instructor (male) Reyansh Surani — also from India — who received his certification in July 2021, at the age of 9 years and 220 days.Praanvi, who would watch her mother practise yoga at home, began her yoga journey at the tender age of just 3.5 years. After months of observing and imitating her mother, the young girl started practising yoga on her own followed by enrolling in formal yoga classes at the age of seven .I want to spread the love of yoga to as many people as possible,” she told guinnessworldrecords.com, on her passion for teaching. As such, encouraged by her yoga instructor, she started the Yoga Teachers Training Program.She continued, “This journey was not an easy one, because of my regular school which was also ongoing. But, with great support from my teachers and parents, Im happy that I successfully completed and passed the qualification exam of Yoga Teachers Training Course.”",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 62,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2023/03/yoga-for-beginners.jpg?resize=450,250",
      DataTitle:
        "Its never too late to start your yoga journey; here are five asanas for beginners",
      DataDescription:
        "Yoga has the power to heal and strengthen you physically, mentally and spiritually, irrespective of where you're from, how old you are etc, Anshuka Parwani, celebrity yoga expert, wrote on Instagram",
      DataDetailDescription:
        "Initially, yoga can feel extremely intimidating and even daunting to some people. However, it is only a matter of habit and one can easily incorporate yoga into their daily routine. No matter how old you are or how much you weigh, yoga can be done by everyone. So, if youre out of shape or a bit inflexible, there are a set of yoga asanas you can begin with.Listing these asanas on Instagram, Anshuka Parwani, a celebrity yoga trainer, wrote Its never too late to start your yoga journey. Yoga has the power to heal and strengthen you physically, mentally, and spiritually, irrespective of where youre from, how old you are, etc. Yoga is truly for everyone.Tadasana is the simplest yoga pose where you have to stand straight. Tada means “mountain”; thus, it is also known as the mountain pose. There is no risk associated with practicing it, however, pregnant ladies should avoid this posture since they might lose balance. In case, they want to perform it, it should be under supervision during the first two trimesters only.Also known as Raised Hands Pose, it is a full body stretch that is most often done as part of the Sun Salutation sequence. This pose improves posture, strengthens the legs, and provides a full body stretch.The Sanskrit word katiL means waist and chakra means wheel; hence we call it Waist Rotating Pose. However, it is commonly known as Standing Spinal Twist as it involved the movement of the waist.Also referred to as the Tree pose, those new to the practice, especially elderly people, should perform this pose taking support. Its aids in flexibility of spine and hips, improves the balance of legs and overall stability. It is also good for sciatica and back pain.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 63,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2023/01/workout-2.jpg?resize=450,250",
      DataTitle: "This 10-minute workout will help keep lethargy at bay",
      DataDescription:
        "Yasmin Karachiwala, a celebrity fitness instructor, shared an easy 10-minute workout routine that can be done anywhere, anytime!",
      DataDetailDescription:
        "Exercise not only helps you control weight and combat health issues but is also a great mood elevator. As such, exercising regularly gives a boost to your self-esteem and makes you feel better. However, many of us do not find the time or motivation to exercise daily. But the good news is that, as per the Centers for Disease Control and Prevention, only 75 minutes per week of vigorous-intensity activity is enough to keep you healthy and fit. That comes around to approximately 10 to 11 minutes per day, not too bad, right?For this, we have got the perfect workout routine that you can do anywhere at any time. Here is the 10-minute workout routine by celebrity fitness instructor, Yasmin Karachiwala, to make you glow from the inside out.A plank pose, or Kumbhakasana, is one of the foundational poses in yoga. A high plank roll is a variation to the traditional plank pose. Singh said, “It provides stability and strength to the core muscles, which contain your oblique, lower back, and all of the side muscles. This exercise will also help enhance your twisting stability.To perform this move, go down on your fours. Make sure your hands are directly under your shoulders with your back and legs aligned in a straight line. Contract your abs and rotate and pivot towards the right. Press your hands while knocking your feet on the other side. Repeat this with the other leg as well.“Reverse lunges are an excellent way to work your hamstrings, glutes, calves and quads, while providing you with lower body strength,” said Singh. It is a great option for beginners as it is easy to control the backward motion.First, stand shoulder-width apart. Then, inhale and carefully take a big step backwards with your right foot as you bend both knees to 90 degrees, making sure your weight is distributed evenly between both legs. Now, exhale and extend both knees while transferring your weight onto your left foot. At the same time, raise your right foot to bring your knee near your chest. Lower your right leg to the starting position. Repeat this on the other side.Squats are one of the main movement patterns humans use in their daily life– we perform it every time we sit down and get up from a chair.  Singh said this movement helps strengthen lateral muscles. He added that it is beneficial for people who play sports like football and lawn tennis. “The side-to-side squats activate several muscle groups simultaneously, working the legs, glutes, and core. The squat increases performance and flexibility and the side-to-side movement improves dynamic balance and agility,” he added.To do this exercise, start with your feet shoulder-width apart and your hands in front holding each other. Then, start to hinge at the hips and bend your knees slightly. Ensure that your back is straight up. Now, push your leg to one side and bend your other knee. Bring the leg back so that both of them are together. Then, repeat the process to the other side.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 64,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2023/02/harsh-varrdhan-kapoor_insta.jpg?resize=450,250",
      DataTitle:
        "Taking care of yourself can be fun and very rewarding’: Harsh Varrdhan Kapoor reveals his ‘mad’ HIIT workout",
      DataDescription:
        "10 sprints for 30 seconds each with 101 minute brisk walks super set with 50 jump squats and 50 jump pushups followed by 30 burpees, 30 crunches followed by 30 bench jumps and 30 medicine ball twists all in 45",
      DataDetailDescription:
        "Harsh Varrdhan Kapoor has been working really hard to achieve his fitness goals, and the results are definitely showing. As such, sharing a glimpse of his well-toned physique, the Kapoor scion revealed his high-energy HIIT or High-Intensity Interval Training workout with trainer Neal Drew.“HIIT workout with @DrewNealpt was mad today…10 sprints for 30 seconds each with 101 minute brisk walks super set with 50 jump squats and 50 jump pushups followed by 30 burpees, 30 crunches followed by 30 bench jumps and 30 medicine ball twists…all in 45 minutes…needed ice afterwards…” he shared.In another Instagram Story, he shared that the power workout session was followed by a sunset and a hot shower to complete hot and cold recovery. “Taking care of yourself can be fun and very rewarding,” he added, alongside a mirror selfie showing off his toned physique.HIIT workouts boost anaerobic capacity and muscular strength, and the steady-paced cardio exercises build endurance as they primarily rely on the oxidative energy system, explained Varun Rattan, co-founder of The Body Science Academy, Noida. “Aerobic refers to the body’s process of producing energy with oxygen. It includes all exercises that last more than two minutes. HIIT, on the other hand, is more suitable for individuals who want to produce maximum power in minimum time, such as sprints. Besides, those looking for a fast workout may be drawn to HIIT,” said Rattan.Stressing that such exercises also have an ‘after burn’ effect, registered dietitian Garima Goyal said, “You need more oxygen for recovery, which boosts the body’s metabolism and you burn more calories.”",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 65,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2022/07/skipping_200_getty.jpg?w=640",
      DataTitle:
        "Do not go to bed feeling stressed and burned out; try this fitness drill to uplift your mood, pave the path for good sleep",
      DataDescription:
        "Doing this 15 minutes workout will uplift your mood, release your stress and pave the path for a sound sleep,said Nidhi S, a yoga practitioner and fitness coach",
      DataDetailDescription:
        "Sometime back, cricketer Virat Kohli was seen unwinding with a quick fitness drill. Turns out, this seemingly simple cardio activity can help relieve stress, apart from helping keep one active and fit. But before we move on to the benefits of the drill, take a look at the former captain of the men’s cricket team acing it like a pro.“Been pending for a long time, but it’s never too late I guess,” he wrote in the caption to the post.And just when we were looking up what Virat was actually doing, we came across yoga practitioner and fitness coach Nidhi S’ Instagram post that had her doing almost similar moves and also listing down their benefits.“Burned out after a stressful day? The worst you can do to yourself is to go to bed without releasing the stress. Taking quick cardio might look like a tough option at this moment but believe me, doing this 15 minutes workout will uplift your mood, release your stress, and pave the path for a sound sleep,” she captioned the post.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 66,
      category: "fitness",
      DataImage: "https://images.indianexpress.com/2022/03/pull-ups.jpg?w=640",
      DataTitle: "Amp up your pull-up game with these preparatory moves",
      DataDescription:
        "What is 'impossible' is trying a pull-up for the first time without putting the work in before to strengthen the right muscles! according to Kayla Itsines, a fitness trainer",
      DataDetailDescription:
        "Bodyweight exercises can be difficult for many to begin with. But the right preparatory or assisted exercises can help one ace any challenging exercise, believes fitness trainer Kayla Itsines. “I’ve said it before and I’ll say it again, pull-ups are not impossible’…,” said Itsines.Pull ups help strengthen the back, arm and shoulder muscles. Besides improving grip strength, they also benefit overall body strength and flexibility. “Pull up is an amazing bodyweight movement that also helps build upper-body strength. It is a compound movement that involves multiple muscle groups, and is one of the best back-strengthening exercises,” said Sameeran Chetia, a certified fitness trainerThe best way to perform this movement is by hanging from a pull up bar and try pulling yourself up to the chin level, added Chetia.During movement, try to engage the muscles in your arms and back. When performed the right way, pull-up helps in strengthening the biceps, forearms, and core muscles. Another benefit you get from pull-ups is grip strength, which can help in day-to-day activities. It is a very simple movement but is effective at the same time with loads of benefits",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 67,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2023/01/Fix-lower-back-pain.jpg?resize=450,250",
      DataTitle:
        "Four reasons your lower back may be paining; and what to do about it",
      DataDescription:
        "Fitness expert Namrata Purohit shares her tips and simple exercises on on how to fix lower back pain",
      DataDetailDescription:
        "Lower back pain is unfortunately common in adults, especially the ones who work at a desk all day. Fitness instructor and Pilates expert Namrata Purohit shared a video on her Instagram page that delves into what causes back pain, from the point of view of the body, and shared four tips that can help reduce or even get rid of the pain. “Back Pain, No Pain! Here are 4 tips to help reduce or get rid of lower back pain!,” she captioned the post.The first thing she attributes lower back pain to is our posture. It is no mystery that having a bad posture can harm our spine, and in turn cause pain. Namrata says the way to fix it is by doing isometric strength training. Simply put by doing planks. “Planks are a highly effective exercise activating the muscles for spinal stabilisation. So get strong!” A 2021 study by Gautam Gupta and Mayank Alok, published in the International Journal of Science and Research, found that “Plank training is useful in enhancing the quality of life and reducing pain in low back pain.”The next tip from Namarta is to strengthen the abs and our core. “The most important thing is to work the core. Working the abs and the core helps maintain proper spinal curvature and a neutral pelvic tilt which is important for preventing back pain. It also lifts the pressure of your spine,” the expert shares.Stiff hips are the third reason your lower back may be hurting. “Stiff hips can lead to lower back pain,” Namrata claims, adding, “A lack of rotational mobility and the ability to flex or extend your hips forward or backwards, can affect your walking and running. Every motion will increase the mechanical strain on your lower back.” To open your hips, exercises such as the reclined pigeon pose or extended child’s pose are ideal.The last tip is to build our glute muscles. “The glute muscles are the main stabilisers of the pelvis and help support the lower back. When these muscles are weak, you overcompensate by using the muscle in your back to stabalise the body. This adds stress and tension to the lower back,” she says. Bridge pose is an excellent pose to strengthen these muscles.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 68,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2023/01/GettyImages-body-weight-fat-exercise-1200.jpg?w=640",
      DataTitle:
        "Five ways to avoid pain and injury when starting a new exercise regime",
      DataDescription:
        "Don't let the fear of pain or injury put you off from starting a new exercise regime. The benefits of exercise far outweigh the temporary feeling of muscle soreness that can accompany a new exercise regime",
      DataDetailDescription:
        "Getting in the habit of exercising isn’t easy. Not only is finding the time to exercise a major deterrent for people, the fear of aches, pain and injuries is also a reason that people put off starting a new exercise regime.But exercise doesn’t necessarily have to lead to pain or injuries. Here are some simple things you can do to avoid these when starting out.It’s important to warm up before your exercise. Warming up raises the temperature of the working muscles and the whole body. It also prepares your body for the increased stress of exercise. Muscles that have been warmed up are able to exercise for longer, and suffer less soreness and reduced injury risk.Exactly what constitutes an effective warm-up varies from workout to workout. But in general, you should dedicate at least five to ten minutes of your workout to warming up. Start with large, whole-body movements such as body-weight squats and lunges before progressing to more task-specific actions – such as a walk or jog before running, or lifting light weights before weight training. Your warm-up shouldn’t be too strenuous. Aim to use only about 40-60% of your maximum effort.A common mistake when starting a new exercise regime is to do too much. This can lead to pain after workouts, and may also increase your likelihood of injury.When you first begin a new workout plan, it’s important to start gradually and at your own pace. Since everyone is different, avoid following an exercise programme that uses absolute distances or repetitions. Instead, focus on how you feel during a workout and listen to what your body is telling youIt can take weeks or even months to notice the benefits of exercise, so don’t expect to see your health and fitness improve overnight. It’s also worth noting that progress isn’t always linear – some days you may find it’s difficult to exercise as long or as hard as you did the previous session. Listen to your body and stop when you feel tired, to avoid injury.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 69,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2022/10/Suryabhedi-pranayama.jpg?w=640",
      DataTitle:
        "This breathing technique can warm your body and keep seasonal flu at bay",
      DataDescription:
        "However, it is not advisable for people who have high blood pressure and heart diseases, according to Aditi Zawar, a yoga intructor",
      DataDetailDescription:
        "During winter, many people fall sick with seasonal colds and flu, which can take a toll on the body. As such, Aditi Zawar, a yoga instructor, who often shares videos on wellness, took to Instagram to share a yoga asana that she said can help prevent us from falling sick owing to the weather changes. “It is getting extremely cold out there. If you are someone who is prone to infections like cold, cough, or other flu-related to the colder seasons, here is one prayanam that can help you warm your body,” she said in the video.Stressing “breath is medicine”, she demonstrated ‘suryabhedi pranayama‘, a breathing technique that requires the practitioner to inhale from the right nostril while holding the other one with a finger and then exhaling through the left nostril. This, she suggested, can be done 8 to 10 times a day.Explaining its benefits she said, “The suryabhedi pranayama activates the sun element in our body and keeps it warm. . It helps improve your ability to fight flus and infections like cold, sinusitis, bronchitis, Covid, and other respiratory problems. It also purifies the blood and helps relieve symptoms of indigestion.”Agreeing, yoga trainer Ira Trivedi said that as the pranayama — which focuses only on the right nostril (also known as surya nadi or Pingala) — activates the Surya nadi, which helps kickstart one’s metabolism. “Since the practice aggravates the pitta dosha, it stimulates the digestive fire and aids proper digestion. It further eliminates digestive worms and addresses diseases afflicting the digestion tract, like gas and bloating.”",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 70,
      category: "fitness",
      DataImage:
        "https://images.indianexpress.com/2022/12/weightloss-1.jpg?w=640",
      DataTitle: "It is time you stop believing these weight loss myths",
      DataDescription:
        "Markets and grocery shops are full of diet foods with deceptive labels; they are actually causing more harm good, said Garima Goyal, a registered dietitian",
      DataDetailDescription:
        "The internet is full of information about ‘tips to lose weight’, ‘best foods to lose weight’, ‘diets to shed those extra kilos’, and so on and so forth. But among such, many a time, helpful information there creep in some that are simply false or widely-believed myths. As such, to help you make informed choices on your weight loss journey, Simrun Chopra, a nutritionist and coach, took to Instagram to debunk certain common myths.I know the feeling of not wanting to go on a diet. Or of eating whatever you can on Sunday night before you start Monday,” she captioned an Instagram video, adding that the diet culture in India has been made “worse because of menu plans and not a diet plan.A diet has calories and macro splits, etc. It doesn’t have menus. It shouldn’t tell you what to eat and when, as it is unsustainable. The only way to lose weight is when you consume fewer calories than you burn, calorie deficitIt is commonly believed that you cannot have tea or coffee if you are trying to lose weight. However, Simrun said all one needs to do is strike a balance rather than giving up on the beverages. “Just accommodate calories. Reduce it to half milk-half water and ½ to 1 tsp sugar,” she suggested, adding that tea and coffee should not be consumed more than twice a day.Again, you do not need to stop eating out. Instead, check the menu and look for things that fit your macros in general, and avoid very oily, deep fried food. “Share the dessert and don’t overeat. Remember, you’re eating for taste here. Eat slowly and enjoy the flavours,” she added.Again, this is a myth. Simrun stressed that no food can increase metabolic rate. According to the expert, one must focus on increasing muscle mass to increase the Basal Metabolic Rate (BMR). “These are the muscles that hold our skeleton together and help with basic stuff like lifting things or standing and walking. It doesn’t mean you’ll become a bodybuilder overnight,” she explained.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 71,
      category: "fitness",
      DataImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/230327091618-04-exercise-reduce-stress-wellness-jogging-stock-exlarge-169.jpg",
      DataTitle: "Chronic stress can affect your health. One activity can help",
      DataDescription:
        "These days, many people find it hard to unplug. Inflation, global warming and gun violence are on the rise. Bullies proliferate on social media. The 24/7 news cycle constantly blares distressing news, and people often face difficult personal or professional situations.",
      DataDetailDescription:
        "About half of Americans said they experienced stress within the past day, according to a Gallup Poll survey from last October, a finding that was consistent for most of 2022. Personal finances and current and political events were major sources of stress for one-third or more of adults, a survey from CNN in partnership with the Kaiser Family Foundation found in October.Stress isn’t inherently bad, said Richard Scrivener, a personal trainer and product development manager at London’s Trainfitness, an education technology company. Stressing your muscles through weight training, for example, leads to beneficial changes. In addition, short-term stress in healthy people typically isn’t a hazard. “But if stress is continuous, especially in older or unhealthy individuals, the long-term effects of the response to stress may lead to significant health issues,” Scrivener said.Stress occurs when you face a new, unpredictable or threatening situation, and you don’t know whether you can manage it successfully, said clinical psychologist Dr. Karmel Choi, an assistant professor in the Center for Precision Psychiatry at Harvard Medical School and Massachusetts General Hospital in Boston.Luckily, there are many ways to combat stress. Keep a daily routine, get plenty of sleep, eat healthy foods, and limit your time following the news or engaging in social media, recommends the World Health Organization. It also helps to stay connected with others and to employ calming practices such as meditation and deep breathing. One of the most successful tools, though, is physical activity.Exercise is remarkably effective for managing psychological stress,” Choi said. “Exercise doesn’t remove what’s causing the stress, but it can boost mood, reduce tension and improve sleep — all of which are impacted by stress — and ultimately this can support people to approach their challenges in a more balanced way.Numerous studies back up the positive effect of exercise on stress. Physical activity, and especially exercise, significantly reduced the symptoms of anxiety in a study published in Advances in Experimental Medicine and Biology, for example. Similarly, a Frontiers in Psychology study of university students found that regularly engaging in low- to moderate-intensity aerobic exercises for six weeks helped alleviate their depressive symptoms and perceived stress.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 72,
      category: "fitness",
      DataImage:
        "https://imgs.search.brave.com/yHLOVO95EvZzOZwrXJ1gtkAAbcbOkaDJ6RSaglcryvE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/d0J6RDNzYnZralo0/RWZTQTZ4UjFRSGFF/OCZwaWQ9QXBp",
      DataTitle:
        "This Single Kettlebell Program Can Help You Achieve Your Total Body Training Goals",
      DataDescription:
        "With a single kettlebell and lots of creativity, you can build muscle, burn calories, and forge strength.",
      DataDetailDescription:
        "WHEN YOU'RE LOW on space, time, and patience, you'll find the most fitness success with a go-to routine that checks all the boxes without demanding too much other than the willingness to work.Look no further than this program, which you can use as your main training plan for the month. All you need is a single kettlebell, which you'll heft to hit your lower body and posterior chain while also honing some explosive power. After running through the six movements, you'll understand that an effective workout doesn't have to be complicated.Kneel on your shins, holding a kettlebell by the horns at your forehead, abs and glutes tight. Without moving your torso, move the kettlebell around your head clock- wise in a close circle. Repeat the process, now going counterclockwise. That’s 1 rep.Stand holding a kettlebell at your chest, the ball of the bell facing upward. Tighten your abs and aim to keep your hips and shoulders square to the front. Begin to march slowly, lifting each knee high; focus on not letting the kettlebell tip as you do. Do 1 set on each side.Stand with your feet shoulder-width apart, holding a kettle- bell in your right hand at your shoulder. Tighten your abs and glutes. This is the start. Press the kettlebell overhead. As you do this, rotate your torso to the left and turn your hips toward the left, pivoting onto the toes of your right foot. Return to the start. That’s 1 rep. Do 1 set on each side.Stand holding a kettlebell in your right hand, abs and glutes tight. Push your butt back and lower your torso until it’s at a 45 degree angle with the floor. Keep the kettle- bell close to your shin as you do this. This is the start. Tighten your shoulder blades, then row the bell to your right hip. Lower with control. That’s 1 rep. Do 1 set on each side.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 73,
      category: "fitness",
      DataImage:
        "https://hips.hearstapps.com/hmg-prod/images/young-bodybuilder-doing-squats-workout-at-the-royalty-free-image-1680033534.jpg?crop=1.00xw:0.916xh;0,0&resize=1200:*",
      DataTitle:
        "This 200-Rep Bodyweight Workout PDF Can Help You Burn Through Fat",
      DataDescription:
        "You'll have to finish 200 reps across 12 stations in just 20 minutes. Can you survive this do-it-anywhere program?",
      DataDetailDescription:
        "Hey there, Men's Health MVP member. When was the last time you skipped your workout because you didn't have access to a gym?We can start off with a few assumptions about why that has become an issue. You don’t have the luxury of spending hours exercising. You don’t have much workout equipment at home. You’ve found it hard to stick with a fitness plan over the long term.We get it. But you can lose weight and get fit without driving yourself up a wall. In fact, if a lack of time has ever kept you from improving your health and fitness, then join the club of people who no longer have an excuse. You can shed excess pounds, shape up, build muscle, and gain self-confidence and self-satisfaction without sacrificing much of your time at all. We’ll show you how right here. The best part is, you can start today. And why wouldn’t you? Now that you have this workout, you’re all out of excuses—and you subscribe to our kickass membership program, through which you get exclusive access to PDFs of our top-notch fitness and nutrition guides, including this bodyweight workout plan to burn fat and get moving.Which brings us to the solution: It’s called the Bodyweight 200, and it addresses all those obstacles and gives you everything you need, whether you’re a beginner or seasoned athlete, to construct your best body ever. The workout itself requires only two items—a Swiss ball and a chinup bar—to perform this 20-minute, total-body routine designed by Craig Ballantyne, C.S.C.S., a strength and conditioning coach in Toronto.So you can do it in your basement, your garage, your living room, or even your bedroom. And while a weight-free workout may sound easy, Bodyweight 200 will challenge every muscle in your body. (The 200 stands for the number of repetitions you do.)Do this workout 3 times a week (Monday, Wednesday, and Friday, for example). Perform the exercises as a circuit, doing 1 set of each movement for the prescribed number of repetitions. Complete them in the order shown in the chart at left, without resting between exercises. Too easy? Rest for a minute and repeat the circuit.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 74,
      category: "fitness",
      DataImage:
        "https://imgs.search.brave.com/QekFXFm2P_iv-U5XcjMpx4z6EAqLKHPsansOvT8u-FU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/MjVERGp5clB0X1VH/TXZqVmdfWThBSGFF/OCZwaWQ9QXBp",
      DataTitle: "14 Benefits of Strength Training,Click here to know more",
      DataDetailDescription:
        "1. Makes you stronger Strength training helps you become stronger.Gaining strength allows you to perform daily tasks much easier, such as carrying heavy groceries or running around with your kids (3Trusted Source, 4Trusted Source).Furthermore, it helps improve athletic performance in sports that require speed, power, and strength, and it may even support endurance athletes by preserving lean muscle mass (3Trusted Source, 4Trusted Source).2. Burns calories efficiently Strength training helps boost your metabolism in two ways.First, building muscle increases your metabolic rate. Muscles are more metabolically efficient than fat mass, allowing you to burn more calories at rest (5Trusted Source, 6Trusted Source).Second, research shows that your metabolic rate is increased up to 72 hours after strength-training exercise. This means that youre still burning additional calories hours and even days after your workout (7Trusted Source, 8Trusted Source).3. Decreases abdominal fat .Fat stored around the abdomen, especially visceral fat, is associated with an increased risk of chronic diseases, including heart disease, nonalcoholic fatty liver disease, type 2 diabetes, and certain types of cancer (9Trusted Source, 10Trusted Source, 11Trusted Source, 12Trusted Source).Multiple studies have shown the benefit of strength-training exercises for reducing abdominal and total body fat (13Trusted Source, 14Trusted Source, 15Trusted Source).4. Can help you appear leaner As you build more muscle and lose fat, you will appear leaner.This is because muscle is more dense than fat, meaning it takes up less space on your body pound for pound. Therefore, you may lose inches off of your waist even if you dont see a change in the number on the scale.Also, losing body fat and building stronger and larger muscles showcases more muscle definition, creating a stronger and leaner appearance.5. Decreases your risk of fallsStrength training lowers your risk of falls, as youre better able to support your body (16Trusted Source, 17Trusted Source, 18Trusted Source). In fact, one review including 23,407 adults over the age of 60 showed a 34% reduction in falls among those who participated in a well-rounded exercise program that included balance exercises and resistance and functional training (18Trusted Source).Fortunately, many forms of strength training have been shown to be effective, such as tai chi, weight training, and resistance band and bodyweight exercises (19Trusted Source, 20Trusted Source, 21Trusted Source, 22Trusted Source).6. Lowers your risk of injury Including strength training in your exercise routine may reduce your risk of injury.Strength training helps improve the strength, range of motion, and mobility of your muscles, ligaments, and tendons. ",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 75,
      category: "fitness",
      DataImage:
        "https://imgs.search.brave.com/eyIju-eOhhSCJhiiMmiz7jTJl6R7Su41KkDsv4EnR2U/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/SjlDc24wUU9odjRN/elg0MVh5dzhnSGFG/aiZwaWQ9QXBp",
      DataTitle: "Should You Wear a Lifting Belt When Strength Training?",
      DataDetailDescription:
        "If you regularly hit up the weight room, you may have noticed some folks with lifting belts strapped around their waists as they deadlift, squat, or do other big moves. The belts can look like a wider version of a traditional belt—leather with a buckle closure—or come with a wide Velcro closure instead. But do they have a purpose—besides making you look like a hard-core Olympic lifter? And, maybe more importantly, should you be wearing one too?Lifting belts do serve a purpose. But theyre best used only in certain circumstances: when youre lifting heavy weight, and your goal is to lift even heavier weight.Below, we dig into everything you need to know about lifting belts, including what they are, how they work, and when you may want to consider strapping one on.Basically, a weight belt—which wraps and fastens around your abdomen just like a traditional belt—helps you lift safely by providing core-bracing support that protects your spine. Your core muscles help protect your spine while strength training, and a weight lifting belt helps provide extra support to them. Your core muscles fire during compound exercises like the deadlift, squat, or overhead press to help support your spine and keep you from falling forward or backward (bending or flexing) under heavy loads. Remember, your core actually includes your diaphragm on the front of your body, obliques on your sides, and muscles (called the spinal erectors) on your back, as well as your transverse abdominis—your innermost, deep core muscles, which are often referred to as your bodys internal weight lifting belt. All of these muscles engage to help support your spine and complete a movement.Engaging your core, or core bracing, involves breath too. When powerlifters lift heavy loads, they take a breath into their abdomen, engage their core muscles, and hold the breath throughout the rep, exhaling at the top of the move. This creates intra-abdominal pressure so their entire trunk stays stiff when hefting heavy weight, exercise physiologist Tom Holland, MS, CSCS, author of The Micro-Workout Plan, tells SELF. (This technique is called the Valsalva maneuver, and theres been much internet and scientific debate over its safety. In short, its a breathing method thats not intended for beginners and should not be practiced without working alongside a pro first. ",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 76,
      category: "fitness",
      DataImage:
        "https://hips.hearstapps.com/hmg-prod/images/701/articles/2017/03/wolverine-circumcision-1504047580.png?crop=0.639xw:1.00xh;0.210xw,0&resize=360:*",
      DataTitle:
        "A Bodybuilder Attempted Hugh Jackmans Intense Wolverine Training Plan",
      DataDetailDescription:
        "Hugh Jackman is back in training to play Wolverine for the tenth time in the upcoming Deadpool 3, his first official appearance as the character in the Marvel Cinematic Universe. The actor has promised that this Data version of the character will be angrier than ever, and his intense prep for the movie seems to reflect this: Jackman is hitting two workouts and eating 8,000 calories per day.In a recent video on the Buff Dudes channel, bodybuilder and YouTuber Hudson White spends the day eating and working out like Jackman, and soon finds that the Wolverine routine is not for the faint of heart.For one thing, it costs $180 to buy and prepare just one day's worth of food in Jackman's diet. White usually only consumes around 2,500 calories per day, and so eating 8,000 calories across six meals is an insane challenge in itself. There's only been a few times in my life that I've actually surpassed 5,000 calories, and it's just been a chore, he says. How am I going to put all of this in my body in a 12-hour period?For the first workout of the day, White focuses on lower body, performing the trap bar deadlift, cyclist squats (a staple of old-school bodybuilding), forward/reverse lunges, jumping split squats, and seated calf raises, spending nearly two hours in the gym.Once he has refueled, the second workout of the day is a shorter one, taking just 45 minutes and consisting of pullups, bench press, double clap pushups, single-arm banded flys, dumbbell shoulder press, weighted cross bench dips, dumbbell bicep curls, and decline mobility ball crunches.After following Jackman's routine for just one day, White finds that the usual pleasure he takes from exercising and enjoying food is starting to wane, due to the strictly regimented, high-volume nature of what is required to physically transform for a superhero role.Sadly, doing it this way,when you're having two workouts a day, when you're trying to put 8,000 calories in your body, it's a chore, it's a full-time job really, and I don't like it to be completely honest, I'm not a fan of this, and if I had to do this for a long period of time, I would lose the joy of lifting and eating. The way these actors are doing it, they're yo-yoing for the role and what it requires of them, but for me, I could not do this.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 77,
      category: "fitness",
      DataImage:
        "https://imgs.search.brave.com/pj2WZaMf8nnSMirUBVjslXyJVlOqeBE76BbsAvLCbJw/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/bHVOQUhmU1RvN1ZD/ZUNobEZKckd3SGFF/NSZwaWQ9QXBp",
      DataTitle: "How to Do the Trap Bar Deadlift to Transform Your Workouts",
      DataDetailDescription:
        "THE STRAIGHT BAR deadlift is widely esteemed as a strength training essential. For good reason, too: The compound lift fires up the hamstrings and glutes, while engaging other muscles through your quads, back, and abs. For most guys, deadlift day begins and ends with the Olympic (or straight) barbell. This unforgiving implement is generally how most strength sports (like powerlifting and strongman) engage with the deadlift, and it is a useful tool to build strength and size—but it might not be the most functional way to train the movement. That distinction goes to another piece of gear: the trap bar.The trap bar shifts your grip from the front of your body to the sides, which is a much more natural way to lift a heavy load off the floor. When youre hinging over to pick up a heavy load of groceries (we see you and your six bags in each arm), youre probably not ending up with the bags in front of your thighs—but thats the way that you lift when you do the barbell deadlift. Youd struggle to walk those bags into the house if you hold them in that same position. Were used to carrying loads on our sides, so why not train our deadlifts the same way?This is where the trap bar has an advantage over the traditional barbell. The bar is fixed in a hexagonal shape, with neutral grip handles in the center. The lifter is able to grasp the load at a natural angle, aiding a more comfortable pull. This reinforces natural movement by situating the load more centrally, all while packing on heavy weights like the straight bar.Still, doing the trap bar deadlift isnt as simple as just pulling the weight off the floor. Like other variations, the trap bar deadlift requires the proper mechanics, says Mens Health fitness director Ebenezer Samuel C.S.C.S., as he and fitness editor Brett Williams, N.A.S.M., demonstrate the essentials that can keep your heavyweight lifts safe and effective.Benefits of the Trap Bar DeadliftYou'll have a more natural motion when you lift. “It's going to be a lot easier and a lot more natural for you to pick up in the trap bar",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 78,
      category: "food",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2cD25p3ZdDIU7P4gJIZ-Q0o_7vCaj07tQJm-I1qWUw&s",
      DataTitle:
        "Hospital-themed restaurant in US criticised for offering free meals to customers over 158 kgs",
      DataDescription:
        "With a controversial hospital theme, it refers to its customers as patients with waiters dressed up as doctors and waitresses dressed as nurses",
      DataDetailDescription:
        "A US-based restaurant, called Heart Attack Grill, recently came under scanner after it reportedly gave free food to overweight diners. Several viral videos on TikTok and other social media platforms show potential customers lining up outside the controversial eatery in Las Vegas to see whether they qualify for a free meal on a giant weighing scale. As per the viral claims, anybody with a weight of 158 kg or above was eligible for this offer.Soon after the videos went viral, social media became abuzz with people all over the world criticising the restaurant for its dangerous offer, and other harmful servicesFounded in 2005, this restaurant is famous for its high-calorie and unhealthy food options on the menu. With a controversial hospital theme, it refers to its customers as patients with waiters dressed up as doctors and waitresses dressed as nurses. If this wasn’t enough, customers are supposed to change into their hospital gowns after placing their orders.Some of their dishes include the Single Bypass Burger, the Octuple Bypass Burger, Flatliner Fries, and Butterfat Milkshakes. Their food items are available in “Single,” “Double,” “Triple,” “Quadruple,” “Quintuple,” “Sextuple,” “Septuple,” and even “Octuple Bypass” orders. Basically, if such food items are eaten frequently, they can increase the chances of one suffering from a heart attack. While patients who are unable to finish their meals are subjected to brutal spankings, finishing a Triple or Quadruple Bypass Burger will earn the diners a chance to be placed in a wheelchair and wheeled out to their vehicle by their “personal nurse”.Several incidents of death and ill health have been reported in relation to the consumption of the food served by this restaurant. Despite repeated criticism and complaints, Heart Attack Grill thrives on controversy as a marketing strategy.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 79,
      category: "food",
      DataImage:
        "https://images.indianexpress.com/2023/03/Italy_Starbucks_Olive_Oil_Drinks_AP.jpg?resize=450,250",
      DataTitle: "Olive oil in coffee? New Starbucks line a curiosity in Italy",
      DataDescription:
        "Italy's olive oil producers' association, ASSITOL, welcomed “the daring innovation, saying the line of drinks could ”relaunch the image of olive oil, especially among young people.'' The association has been promoting adding olive oil to cocktails.",
      DataDetailDescription:
        "Putting olive oil in coffee is hardly a tradition in Italy, but that didn’t stop Starbucks interim CEO Howard Schultz from launching a series of beverages that do just that in Milan, the city that inspired his coffee house empire.The coffee-olive oil concoction — echoing a keto-inspired trend of adding butter to coffee, only with a sugary twist — has provoked both amusement and curiosity among Italians.Gambero Rosso, an Italian food and wine magazine, called the mixing of olive oil with coffee “a curious combination” but said it was reserving judgment, having not yet sampled the drinksIt did praise featuring the staple of Italian kitchens as a main ingredient, not just a condiment. The magazine also noted the health benefits of consuming extra virgin olive oil, which some Italians do habitually straight from the bottle.“Did we need coffee with extra virgin olive oil and syrups? Maybe yes, maybe no,” wrote the magazine’s Michela Becchi. But the chance to promote Italian excellence is a valuable one, she added.Italy’s olive oil producers’ association, ASSITOL, welcomed “the daring innovation,” saying the line of drinks could ”relaunch the image of olive oil, especially among young people.” The association has been promoting adding olive oil to cocktails.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 80,
      category: "food",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDX365xSGrKVX0yHlN17IwYx_lLTuHPkxGAA&usqp=CAU",
      DataTitle:
        "Potato noodles have taken social media by storm, here’s a recipe you can try",
      DataDescription:
        "As bizarre as they sound, potato noodles are a staple in many East Asian cuisines, including Chinese, Korean, and Japanese",
      DataDetailDescription:
        "From children to adults, nobody can resist a bowl of spicy and delicious noodles when hunger strikes. While most people rely on packets of instant noodles, others try making them from scratch at home. As such, have you ever tried making your noodles using potatoes? As bizarre as they sound, potato noodles are a staple in many East Asian cuisines, including Chinese, Korean, and Japanese. Potato noodles are believed to have originated in China, where they are called “fun see” or “fen si.” They were originally made from mung bean starch, but over time, the recipe was modified to use potato starch instead.Also known as ‘potato starch noodles’ or ‘glass noodles’, they are translucent, have a slightly chewy texture when cooked, and are often used in soups, stir-fries, and salads. Additionally, potato noodles are also gluten-free, making them a popular alternative for people with gluten sensitivities or celiac disease. Currently going viral on social media, these noodles are easy-to-make and a tasty addition to your menu.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 81,
      category: "food",
      DataImage:
        "https://images.indianexpress.com/2023/04/king-charles-cheese_200ap.jpg?w=640",
      DataTitle: "In Germany, Charles III makes organic ‘king cheese’",
      DataDescription:
        "Charles, 74, who ascended the throne after the death of Queen Elizabeth II in September, is set to be crowned during a May 6 coronation ceremony at London's Westminster Abbey",
      DataDetailDescription:
        "After schmoozing with Berlin’s political elite in the morning, King Charles III headed to the German countryside for a down-to-earth afternoon visit at an organic farm, where Britain’s monarch helped make an orange-colored cheese with a crown imprint.We heard that the king is a great lover of cheese,” said Katja von Maltzan, who with her husband runs the Brodowin farm 80 kilometers (50 miles) northeast of Germany’s capital.Charles’ visit underlined his interest and commitment to environmental causes. His three-day visit to Germany — his first foreign trip as Britain’s monarch — also included a reception dedicated to building a more sustainable world.During the reception at German President Frank-Walter Steinmeier’s Bellevue Palace, he met government ministers, experts and advocacy group representatives. He and Camilla, the queen consort, arrived in Berlin on Wednesday.Brodowin farm was established in 1991 on land that used to be part of an East German agricultural cooperative. The 2,300-hectare (5,683-acre) farm produces vegetables, dairy products, flax and sunflower oil, fresh meat and sausages according to strict organic standards. Almost all of its electricity is generated on-site through a solar energy system.At Brodowin farm, the British king met with young farming trainees and went on a tour of the property, which has 160 dairy cows, 300 dairy goats and 1,800 hens. Von Maltzan and her husband walked Charles through the entire cheese-making process.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 82,
      category: "food",
      DataImage:
        "https://images.indianexpress.com/2023/03/Riyaaz-Rizwan-Almani-1.jpg?w=640",
      DataTitle: "What the Amlani brothers bring to Mumbai’s food circuit",
      DataDescription:
        "As Rizwan Amlani introduces his Mexican 'cantina' to the city, we talk to him and his brother Riyaaz about running restaurants, celebrating their vernacular side, and their dream of India as a culinary destination",
      DatDetailDescription:
        "It is interesting how life comes full circle for a restaurant in south Mumbai. In 1983, Nasir Amlani, the patriarch, took over Berry’s, a restaurant at Veer Nariman Road, Churchgate. Boasting of a live orchestra and offering Indian, Chinese and Continental food, it became the space where their family bonded and, perhaps, it is where the idea of being a restaurateur took root for the Amlani siblings. The same address saw Riyaaz Amlani starting Mocha in 2002, which led to the birth of his empire Impresario Handmade Restaurants. And, now his younger brother Rizwan, a graduate of the French Culinary Institute, New York, and CEO of Dope Coffee Roasters, has parked Mezcalita, an 83-seater Mexican cantina and tequila bar, at the same address.Talking about Berry’s, Riyaaz, 48, says, “Our father wasn’t a restauranteur, he was more like an entrepreneur. He would go there every day; it was the only outing we had. We would go there and have butter chicken and triple Schezwan rice. Sometimes we would even pack it and take it to school.” For Rizwan, it is where he would bond with the family. “I remember being 10 years old or so and someone — either dad or Riyaaz — putting a tie on me. I would tuck my shirt in and go from one table to another taking orders. My favourite part was the pantry, it was where the sandwiches were and I remember thinking that this is what I would like to be.”While Rizwan realised his passion early on, Riyaaz tried selling shoes before setting up bowling alleys and go-karting tracks. “It is then that the realisation hit — not everyone bowled or went go-karting, some just met for a cup of coffee and a chutney sandwich,” says Riyaaz. At the time, there was a dearth of such spaces in Mumbai. Thus Mocha was born in 2002. “It was all about coffee and conversations. We offered good coffee, desserts sourced from home chefs and rudimentary sandwiches. We even introduced conversation cookies which had provocative topics to propel conversations,” says Riyaaz.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 83,
      category: "food",
      DataImage:
        "https://images.indianexpress.com/2023/03/Nargisi-koftas.jpg?w=640",
      DataTitle: "Ramadan special: This weekend, try Nargisi kofta for iftaar ",
      DataDescription:
        "Nargisi kofta name comes from its resemblance to a flower named Narcissus (Nargis), a winter flower grown in India.",
      DataDetailDescription:
        "During the holy month of Ramadan, Muslims fast from pre-dawn to dusk and have only two meals — the sehri and iftaar. While some foods are commonly prepared for pre-and post-fast meals, many also experiment with their culinary skills and try new recipes to indulge with their family and friends. So if, over the weekend, you wish to try something new, how about preparing Nargisi kofta — a preparation made with ground meat mixture wrapped around a hard-boiled egg and cooked in a rich gravy — you’ve come to the right place. However, this recipe ditches the gravy altogether.The name nargisi kofta comes from the dish’s resemblance to a winter flower named Narcissus (Nargis), which is found in India. The flower has a yellow center (the colour of cooked egg yolk), surrounded by white petals resembling the cooked egg white. Hence, when the Nargisi kofta is cut in half, it can remind you of the beautiful flower.1. Start off by processing the chillies, coriander and onions together to crush them into pieces but don’t turn into a paste.2. Add 2 eggs to the mince followed by fresh coriander, coriander seeds, and garlic and ginger paste. Mix well.3. At this stage, do a taste test and adjust if you wish. This amount of chilli and masala is enough to make spicy kebabs but if you want it less spicy, then just add 1 chilli and 1.5 masala packet instead.4. Boil the eggs in the meantime.5. Once mixed, flatten the kebabs and put the egg in it and roll it up.6. You can either bake, fry it or cook into a curry.7. Serve up with a nice green chutney.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 84,
      category: "food",
      DataImage:
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_200,ar_3:2/v1/img/recipes/71/34/4/khbtXM1UQSWmQl55v3i5_DSC_0144.jpg",
      DataTitle: "INCREDIBLE LEMON CAKE",
      DataDescription:
        "If you like lemon, you're going to love this cake! Saw this recipe being made by the Barefoot Contessa on TV and just had to have it. Not being overly experienced, I was a bit intimidated by the recipe. However, it is not very hard, looks great and the taste is incredible! Cook time does not include time for the cakes to cool",
      DataDetailDescription:
        "Preheat oven to 350°F.Grease and flour 2 (8 1/2 x 4 1/4 x 2 1/2-inch) loaf pans, lining the bottom with parchment paper, if desired.Cream, using paddle attachment, butter and 2 C granulated sugar in bowl of electric mixer until light and fluffy, approximately 5 minutes.With mixer on medium speed, add eggs, 1 at a time, and the lemon zest.Sift together flour, baking powder, baking soda and salt into a bowl.In another bowl, combine 1/4 C lemon juice, buttermilk and vanilla.Alternately add flour and buttermilk mixtures to batter, beginning and ending with flour mixtureDivide batter evenly between pans, smoothing the tops.Bake 45 minutes- 1 hour, until tester comes out clean.When cakes are done, cool 10 minutes.Meanwhile, combine 1/2 C granulated sugar and 1/2 C lemon juice in small saucepan, cooking over low heat until sugar dissolves.Remove cakes from pans and set on wire rack over jelly pan (best to set upside down on rack so that syrup is spooned onto the bottom of the cake as it will absorb better than spooning over the top).Spoon lemon syrup over cakes.Allow cakes to cool completely.Glaze: Combine confectioners' sugar and lemon juice in a bowl, mixing with whisk until smooth.Pour over the tops of the cakes and allow to drizzle down the sides.Garnish with 2 lemon slices and some greens (e. g., Italian parsley or mint leaves), as desired.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 85,
      category: "food",
      DataImage:
        "https://imgs.search.brave.com/_SJFxQuxEOrEPNQpcNZhgTSeAFEO2YxcNGDD5-zlCAQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/dGhyaXZlbWFya2V0/LmNvbS93cC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wNS9C/X1NwaWNlV29ybGRf/MDE5LWJsb2cuanBn",
      DataTitle: "7 Classic Spice Blends You Should Use More Often",
      DataDescription:
        "Whether you make them at home, or opt to purchase pre-mixed blends, these spice blends are a must-have for any home cook.",
      DataDetailDescription:
        "Spices are the key to making spectacular meals at home, and having a few spice blends on hand — customized combinations of multiple spices — are one easy way to use spices before they go stale. From jerk seasoning with its sweet, heady notes of allspice to ground blends like garam masala and ras el hanout that are warming with cinnamon and cloves, spice blends are responsible for creating the signature flavors of some of our favorite recipes, and play an integral role in culinary traditions around the world.Here, we’re sharing seven iconic spice blends, each with its own unique flavor profile and culinary significance, along with some of our favorite ways to use them — and these spice blends can all be easily made at home. For the freshest, most potent spice blend, start with whole spices and grind them up in a spice grinder. However if you don’t have the time or equipment to do so, you can purchase ground spices in bulk (many Latin, Mexican, Indian, Asian, Mediterranean, and Middle Eastern grocery stores sell ground spices in large quantities at an affordable price) and mix them yourself. Alternatively, there are plenty of pre-mixed spice blends available at grocery stores or from specialty retailers like or Burlap & Barrel.A popular seasoning in the Middle East, Za’atar is a spice blend that is typically made with dried thyme, oregano, sumac, sesame seeds, caraway, marjoram, and dill. The combination of spices has an earthy, tangy, and nutty flavor that complements a variety of dishes. It’s an essential topping on Lachuch, a soft and spongy Yemenite flatbread. Additionally, it’s versatile enough to use on vegetables like these Roasted Carrots with Preserved Lemons and Dates, or with earthy meats like lamb as featured in this Lamb Sliders with Yogurt-Tahini Sauce. Za’atar can also be a star at breakfast, too. Win your next brunch with this Za'atar Baked Eggs recipe. Ras el hanout is a spice blend that originated in Morocco, Tunisia, and Algeria. The name translates to  indicating that it is a spice blend that often varies from market to market and region to region. While there’s no set recipe, you’ll typically find some mixture of  black pepper, white pepper, cinnamon, nutmeg, allspice, anise cloves, ginger, cumin, coriander, cayenne, turmeric, and sumac. It has a well-rounded flavor profile with warm and slightly sweet notes from the nutmeg, cinnamon, and cloves. This blend is traditionally used in tajines but is also particularly well-suited for rich meats like pork and duck in recipes like Pork Chops with Sherry Pan Sauce with Ras Al Hanout and these Spiced Duck Breasts with Mandarin Oranges and Dates. Garam masala is a warm aromatic spice blend that originates from northern India. Garam means while masala means blend, but the spice itself is not necessarily spicy-hot.Jerk seasoning has a long history in Jamaican cuisine and is believed to have originated with the Maroons, a group of enslaved Africans who escaped from the plantations and settled in the hills of Jamaica. Today, it is a beloved spice blend around the world, featuring prominently in many Caribbean and Jamaican dishes.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 86,
      category: "food",
      DataImage:
        "https://imgs.search.brave.com/nIU7UdYQeusMzQdKGEU2rB1etr7G_M9LEYQ1VkBRyLY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMzLmFscGhhY29k/ZXJzLmNvbS82NTkv/dGh1bWItMTkyMC02/NTkwMjAuanBn",
      DataTitle: "How to Make Bad Coffee Taste Better",
      DataDescription:
        "You don't have to suffer through a bad cup of morning coffee.",
      DataDetailDescription:
        "Most people would probably assume I make great coffee at home. I work at Food & Wine, I care about things like garnishing my scrambled eggs in a cute way, and I deeply appreciate a good cocktail (or mocktail). Still, when it comes to my at-home coffee situation, the standards are  floor-level. My roommate and I have been brewing our daily coffee in an ancient Mr. Coffee machine for the past four years — the coffee pot actually came with the first apartment we got together, so its age is undetermined, and someone clearly didn’t care enough to take it when they moved out. It also doesn’t help that we’re reluctant to buy anything but the cheapest coffee beans available at the grocery store. Even if you happen to have a coffee scale and Chemex at home, odds are at some point you’ll end up in an office, great aunt’s house, hotel room, or somewhere else with mediocre  coffee — and that’s when you’ll be grateful for these tips on how to make it taste better.Okay, don’t literally add the cinnamon to the pot — you want to add your spices to the coffee grounds before you brew. This is an easy way to make your coffee more aromatic, flavorful, and cozy-feeling; it’s one of my favorite tricks in the wintertime. Any warm baking spices will work, such as nutmeg, star anise, cloves, or cardamom (the latter is especially good), but I’m more likely to have ground cinnamon on hand than anything else. Simply add a pinch or two of the ground spice to the grinds in your coffee filter, give it a stir to evenly distribute things, and brew as normal.Want to feel like you just went through the drive-thru at Starbucks, without the $6 hole in your pocket ?Add some foamy milk to your cup of joe, and you’ll instantly feel a little fancier. Milk will hold bubbles (as in, it’ll become foamy) when it’s warm –– so, to create a little layer of froth for your coffee, just pour a little milk into a sealable container, like a jar or tupperware. This will work slightly better with a dairy milk, but non-dairy alternatives will hold some bubbles too. Microwave it until thoroughly warm, but not scalding hot. Then add the appropriate lid, and shake the container vigorously for about thirty seconds. The result should be some frothy milk that will make it feel like you’re drinking a cappuccino.The obvious answer to making bad coffee taste better is to simply add more sugar, and there’s no way better to do that than by stirring a packet of hot chocolate mix into your mug. This is basically a cheat code for making a mocha at home, and the combination of sugar and milk powder is really great at masking overly bitter coffee. Make sure you use a cocoa mix that’s meant to be dissolved in water, like Swiss Miss. One of the biggest benefits of this hack is that it doesn’t require intervention before the coffee is brewed — so if your mother-in-law already started the pot, you can still save your own cup.According to the rules of science — which I know to be true, although I don’t really know why — either salt or sugar can help offset and cut bitter flavors. (A fun way to test this is by trying a leaf of radicchio without seasoning, then with salt, with honey, and with both salt and honey. But I digress.) Sprinkle a small amount of salt — think just half of a pinch — into your coffee grounds before brewing to reduce excess sharpness and acidity.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 87,
      category: "food",
      DataImage:
        "https://imgs.search.brave.com/fSHycBFwzctUyMHUs8LD-uucfcoPcVb1HZj9BgFPg84/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bGl0dGxlY29mZmVl/cGxhY2UuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA0/L2NvZmZlZS1ncmlu/ZGVycy5qcGc",
      DataTitle: "How to Grind Coffee At Home, According to Experts",
      DataDescription: "Grinder or no grinder, baristas share their best tips.",
      DataDetailDescription:
        "Without even knowing it, you've probably grown up with the sound of coffee grinding. Think about the coffee aisle in the supermarket, where large industrial grinders take whole beans and divvy them into small pieces. The practice of coffee grinding is so ubiquitous that it's even a bonus task on the television show Supermarket Sweep — both the original show and the newly rebooted version. Contestants can patiently grind a bag of coffee for extra cash. Grinding coffee is an essential step in the brewing process, and with so many affordable options, it's a step you should consider taking out of the supermarket and into your home. Like many things at the supermarket, coffee is a food item that begins to get stale sooner if you grind it ahead of time. Grinding at home will allow you to enjoy the freshest, tastiest version of your favorite brew. Here's everything you need to know about how to grind for any situation.Grinding makes coffee particles small enough so that when you pour water, it can extract flavor. If you simply throw whole beans into your coffee brewer, you'll end up with slightly coffee-flavored water, because the water can't penetrate the beans and find all the good-tasting stuff we're looking for. Grind size ultimately impacts how water flows through the coffee bed, the corresponding extraction rate, and thus the final taste of the coffee you've brewed, says Sierra Yeo, the 2022 UK Brewers Cup Champion. Simply put, grinding coffee changes the available surface area for water to interact with coffee. The more surface area, the more water can mingle with, and pull flavor from, beans. Blade grinders: Blade grinders have a propellor-like blade, usually powered by a motor, that chops coffee into smaller pieces. However, blade grinders are notorious for chopping coffee unevenly, creating particles of all sizes. If you grind coffee with a blade grinder, you sort of never know what you're going to get: you might have particles that are dust-like in size, and others that look like giant boulders (sometimes a bean or two might even escape the blade, and not be chopped at all). Burr grinders: Burrs are usually a set of plates that allow coffee beans to pass through, ensuring that they don't get chopped up again and making the resulting ground coffee much more even in size. Burrs can be made from stainless steel or porcelain, and you control the grind size by moving the burrs closer to, or further from, one another. Burr grinders can be automatic (you press a button, and it grinds) or manual (usually involving a crank one must turn). Blade grinder: If you prefer a blade grinder for its more compact sizing and cheaper price tag, we recommend the KRUPS Silent Vortex Electric Grinder. Simple and straightforward, this powerful grinder features durable stainless steel blades that operate on only one setting. Its grinding chamber holds 3 ounces of whole beans, suitable for 12 cups of coffee. Before you begin, you should decide what brewer you will use and decide on a grind setting for that machine. You might have read somewhere that for a French press, for example, you're supposed to grind coarsely, and while that might work for you, its important to know that theres no one right way to grind. There can be recommendations from manufacturers or experts in the field, but ultimately you can experiment to find out what flavor profile you prefer from your coffees and adjust your grind size to achieve that, says Yeo. ",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 88,
      category: "food",
      DataImage:
        "https://www.foodandwine.com/thmb/EWtoCEjoqBe0DDkndwoDQfZHyNM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Baked-Pizza-Pasta-with-Soppressata-XL-RECIPE0323-ee628618b9e54d4d964afcdc2d7f75e4.jpg",
      DataTitle: "Baked “Pizza” Pasta with Soppressata",
      DataDescription:
        "With chopped soppressata, gooey mozzarella cheese, and a drizzle of hot honey, this pizza-style pasta bake made with grattini is comforting and delicious.",
      DataDetailDescription:
        "Inspired by soppressata and hot honey pizza, this baked fresh egg pasta dish starts with a harissa- and soppressata-laced tomato sauce. Using chopped soppressata in the sauce and sliced on top gives you a double dose of flavor. Lots of low-moisture mozzarella yields a gooey interior and well-browned top. Don’t have a 12-inch oven-and broiler-proof skillet? Transfer the mixture to a 9- x 13-inch broiler-safe baking pan before baking and broiling in step 4. Harissa is available at most grocery stores or online at nyshuk.com.Preheat oven to 425°F with rack 8 inches from heat. Finely chop half of the soppressata; very thinly slice remaining soppressata into thin rounds. Set aside. Cook oil and butter in a 12-inch broiler-safe skillet over medium until butter is melted and bubbling, 1 to 2 minutes. Add finely chopped soppressata, shallots, garlic, oregano, 1/2 teaspoon salt, crushed red pepper, and black pepper. Cook, stirring occasionally, until soppressata is rendered and shallots are softened, about 3 minutes. Add harissa and tomato paste; cook, stirring constantly, until sizzling and evenly combined, about 2 minutes. Add wine; cook, stirring and scraping up any browned bits from bottom of skillet, until nearly evaporated, about 1 minute. Stir in tomatoes. Transfer skillet to preheated oven, and roast until tomatoes start to burst, about 10 minutes.Meanwhile, bring a large saucepan of salted water to a boil over high. Stir in grattini. Cook, undisturbed, until just al dente, 4 to 5 minutes. Drain pasta well, and spread on a large rimmed baking sheet; let cool slightly, about 5 minutes.Remove skillet from oven, and return to stovetop; do not turn oven off. Stir broth and chickpeas into mixture in skillet; bring to a simmer over medium. Stir in remaining 1/2 teaspoon salt. Gradually fold in cooked pasta and half of the shredded cheese (about 11/2 cups). Sprinkle pasta with remaining 11/2 cups cheese; arrange sliced soppressata over cheese.Return skillet to oven, and bake at 425°F until cheese is melted and bubbly, 15 to 20 minutes. Increase oven temperature to broil (do not remove skillet from oven); broil until cheese is golden brown, 2 to 4 minutes. Remove skillet from oven; let cool slightly, about 10 minutes. Garnish with crushed red pepper, basil leaves, and hot honey.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 89,
      category: "food",
      DataImage:
        "https://imgs.search.brave.com/9vjexYHsTJjw5iSVLNSBZwu-EChpaj9Q9HC7HFMEkmo/rs:fit:640:360:1/g:ce/aHR0cDovL21zcG1h/Zy5jb20vZG93bmxv/YWRzLzMxOTk5L2Rv/d25sb2FkL0l5ZXIt/Y29va2luZy1hdC1o/b21lLmpwZz9jYj02/YmNkMjkxOWFhNTcz/ZTE5NjQzZDYxNTM4/YTliZWMzNCZ3PTY0/MA",
      DataTitle:
        "Raghavan Iyer, 61, Dies; Made Indian Cooking Accessible Across America",
      DataDescription:
        "He broke with traditions in writing cookbooks, teaching thousands of cooks, consulting for restaurants, leading tours, catering meals and creating frozen dinners.",
      DataDetailDescription:
        "Raghavan Iyer, who left India for the United States  as a young man clueless about how to cook even a simple potato curry and went on to teach America’s heartland how to prepare one of the world’s most complex cuisines, died on Friday in San Francisco. He was 61.The cause was pneumonia complicated by colorectal cancer that had metastasized to his lungs and brain, said Terry Erickson, his partner of 41 years. Mr. Iyer lived in Minneapolis and was visiting San Francisco at his death.Mr. Erickson was one of the first people Mr. Iyer met when he arrived in Minnesota from Mumbai at 21 to attend a small but well-regarded hospitality management program. He had picked it because it was the least expensive one he could find in America.“When I first got to this country, I was almost embarrassed about where I was from and the food we ate,” he said in an interview with The New York Times in February. After a while, he said, he realized that his culture was the “tool” he could use to overcome feelings of inferiority.Mr. Iyer parlayed a rascally charm and a palate imprinted by the vegetarian South Indian food of his childhood into a prolific career, one built in part on the cookbooks of Madhur Jaffrey and Julie Sahni, the Indian cooking heavyweights who began their culinary careers in the 1970s. He referred to them as “the grandes dames of Indian cooking.”His contributions were a bridge to a new breed of American cooks and cookbook authors from the Indian diaspora, like Nik Sharma and Asha Gomez, who broke with classic preparations and found success playing with ingredients — swapping feta for the Indian cheese paneer, for example, or replacing the crust of a pizza with naan.Mr. Iyer consulted for restaurants around the country, taught countless workshops, led tours to India, created a line of frozen Indian meals for Target and instructed thousands of professional cooks at universities, museums and companies, including Google.But his favorite thing was helping individual cooks confidently tackle dishes like curries and biryanis, often using basic ingredients that are common in supermarkets.Mr. Iyer published “Betty Crocker’s Indian Home Cooking,” the first of his seven books, in 2001. The Betty Crocker company hadn’t been in the market for an Indian cookbook, but Mr. Iyer kept pressing an editor he knew at General Mills, Betty Crocker’s corporate parent, with headquarters in Minneapolis.Betty Crocker eventually let him cook a multicourse Indian lunch for a collection of executives and book publishers. It was a spectacular success. Afterward, he asked, “Is Betty ready for Indian?” The book went on to be a hit.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 90,
      category: "food",
      DataImage:
        "https://static01.nyt.com/images/2019/11/12/dining/aw-vegan-macaroni-and-cheese/aw-vegan-macaroni-and-cheese-jumbo.jpg?quality=75&auto=webp",
      DataTitle: "What to Cook This Week",
      DataDescription:
        "Sticky honey-ginger drumsticks, blackened cauliflower and nori rice.",
      DataDetailDescription:
        "Good morning. The cherry blossoms were pinking the side streets on Staten Island the other morning as I drove the family down from Joe and Pat’s pizzeria to the beach at Great Kills, for a walk out to Crooke’s Point.It was one of those days that feel like a vacation, a small adventure, a taste of the world beyond. We walked on the hard sand above the tide line, and I felt as I sometimes do walking through the Garden District in New Orleans when the bougainvillea scents the air. Everything was possibility.So maybe a vegan dinner, then? Millie Peartree has a terrific new recipe for blackened cauliflower, spiced hard and cooked on a preheated sheet pan, that would pair beautifully with Alexa Weibel’s super-creamy vegan mac and cheese (above). I think you could make that tonight.Ali Slagle has a new recipe for salmon with asparagus and nori rice that’s also shaping up as a weeknight winner, since you can cook the asparagus and ginger-coated salmon in the same pan. Cooking the rice with dried seasoned seaweed gives it a fine oceanic flavor, excellent alongside the fish. Going forward, I think we’ll be cooking a lot of nori rice.I love Melissa Clark’s recipe for pepperoni pasta with lemon and garlic, though I hold back on some of the crisped-up pepperoni to add at the end, for texture. One subscriber adds a dollop of mascarpone. I’d go with ricotta myself.Chag Pesach sameach! Passover begins today, though you need not be observant to enjoy Joan Nathan’s chicken with artichokes and lemon, a tagine that goes well with couscous — or not, depending on your Passover traditions.More Ali Slagle, this time with a beautiful roasted fish with lemon, sesame and herb bread crumbs. Which fish? Ali calls for freshwater trout. I might go with flounder instead.And then you can end the week with Eric Kim’s new recipe for sticky ginger-and-honey-baked chicken. Shellac the drumsticks with a simple marinade of ground ginger, soy and honey, then bake them over root vegetables for a delicious one-pan meal. It is the best kind of comfort food.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 91,
      category: "food",
      DataImage:
        "https://imgs.search.brave.com/x-NBs5OQKF2j0MRTn1oyz3U4FKSRn7h4eQZGprxMZsw/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/UlpXMWowZkxOZFJ6/WXl4UmN1OHdnSGFG/aiZwaWQ9QXBp",
      DataTitle: "Mumbai Pav Bhaji",
      DataDescription:
        "Pav Bhaji is a spicy mashed vegetable dish, served piping hot with a dollop of butter, diced red onions, cilantro, and a squeeze of lime. Accompanied by warm buttery pan-toasted rolls, this visually delightful dish is sure to fill your tummy as well as your heart! ",
      DataDetailDescription:
        "Pav Bhaji is a combo dish of Pav(meaning bread), and bhaji(meaning curried mashed vegetables). Mumbai Paav Bhaji, the King of Indian Fast Food, is an immensely gratifying meal, that will transport you to gastronomical bliss. Pav Bhaji is not only a sure-shot party pleaser but also a wholesome satisfying weeknight dinner.  Mumbai Pav Bhaji is quite popular all over India as one of the most loved and flavorful street food. The best part I like about making Mumbai Pav Bhaji, is that you don’t have to be super precise in your initial prep and chopping. First, cook the roughly chopped vegetables together in the ginger-garlic, onion-tomato base. Next, lightly mash the cooked veggies, bringing forth the distinctly spicy-tangy flavors. The final dish is incredibly tasty and presentable, you will be surprised at how little effort went into making this goodness!A great combination of nutritious mixed vegetables in a lip-smacking tomato base, Paav Bhaji is one of the best ways to get your kids to eat their veggies.The Curry (Bhaji) is served with soft buns or dinner rolls AKA pav that are not sweet. In the US, some cities have Indian Bakeries such as Hot Breads that make the traditional Indian Pav. If you have one near you, do grab their fresh soft buns, For the rest of us who may not have easy access to teh traditional Pav, buy buns or soft rolls from grocery stores that have 2 grams of sugar or less. I prefer buying soft potato buns, burgers buns, or Whole foods dinner rolls.The best way to serve piping hot Pav Bhaji is with warm buttery rolls or buns. Spoon the bhaji onto plates, sprinkle with red onion, and serve with the toasted buns and lime or lemon wedges on the side. You can also place the bhaji directly on the buns and serve it like sloppy joes. I often like to pair pav bhaji with either Veg Pulao or Sweet Coconut Rice for a full meal that works great for entertaining, game nights, or movie nights.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 92,
      category: "food",
      DataImage:
        "https://imgs.search.brave.com/BGpofywHwEdvcd_0vcWetIKHfP3lpScnYKt5B0xAdFs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/ekFidlJmWDUwUzlZ/QlYyYWpnakpBSGFF/OCZwaWQ9QXBp",
      DataTitle: "Instant Pot Chicken Biryani",
      DataDescription:
        "Instant Pot Chicken Biryani is one of my favorite dishes and definitely one of the most requested meals at my house. This one-pot meal is made of fragrant basmati rice, tender spiced chicken, and caramelized onions, and it can be cooked in less than an hour",
      DataDetailDescription:
        "Quite possibly the most well known rice dish from India, biryani can be found throughout the country, though there are subtle variations from region to region. But one thing is consistent: the process to make it is long and complex. My family's treasured recipe transforms Chicken Biryani into a quick, accessible dish. There are many variations of this recipe that originate in several states of India. My favorite, of course, is the one made by my mom that I grew up eating. Warm, deep spiced Chicken Biryani, with freshly ground spices, caramelized onions, marinated tender chicken cooked over long grain basmati rice.Biryani is a rice dish with vegetables, chicken, or fish marinated in yogurt and warm spices such as turmeric, red chili powder, and garam masala. It is traditionally slow-cooked by layering the marinated meat or vegetables over the rice and is topped with caramelized onions, aromatic saffron, and fresh cilantro or mint.It is said that Biryani is originally a Persian dish that eventually made its way to South Asia. Since then there have been many regional variations of this majestic dish based on the cooking methods.Dum Biryani - Layers of meat and partially cooked rice are added to a heavy-bottomed pot which is sealed tightly with raw dough so the flavors and steam do not escape. It is then slow-cooked for hours. This is also how my mom made her Biryani on the stovetop.Kacchi Biryani - Raw meat is cooked by layering over rice and then slow-cooked.Pukka Biryani - Partially cooked meat and rice are layered and cooked.As biryani became popular in South Asia, several regional variations of this dish came along. Starting with the Kacchi style Hyderabadi Dum Biryani, the Malabar Pukka Biryani from coastal India, the Calcutta Biryani with potatoes from eastern India, spicy Chettinad Biryani from the southern states, and the flavorful, tangy Sindhi Biryani from Sindh, Pakistan. Many more variations and recipes but one thing that is common is that they are all incredibly tasty!Given how much we enjoy Chicken Biryani, I had to try mom's recipe in the Instant Pot. After a few attempts, I was able to simplify it so much that it can be easily prepared for a weeknight meal using the Instant Pot. This is my humble attempt to make mom's incredible chicken biryani.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 93,
      category: "food",
      DataImage:
        "https://images.indianexpress.com/2023/03/chia-seed-pudding.jpg?w=640",
      DataTitle:
        "Ramadan special: This delicious, highly nutritious chia seed pudding is perfect for suhoor",
      DataDetailDescription:
        "During the holy month of Ramadan, Muslims around the world fast from dawn to dusk. As such, to stay active and energetic throughout the day while fasting, it is important to eat healthy and nutritious food during sehri (pre-dawn meal) and iftar (meal eaten at dusk while breaking fast). So, if you have been scouting for recipes to break or begin your fast with, celebrity fitness expert Yasmin Karachiwala has an easy, delicious, and nutritious chia pudding recipe that you can easily whip up for sehri.“Ramadan Kareem everyone! We are constantly struggling with what to eat for sehri. So today, I’m going to share with you my favourite go-to — chia pudding. It’s packed with essential nutrients to keep you feeling full and satisfied throughout the day,” Karichawala wrote in an Instagram post, as she shared the nutritious recipe.Add ½ cup milk of choice and ½ cup mangoes to a blender. Blend until smooth Add blueberry mix along with 2 tbsp chia seeds, 2 tsp maple syrup , and ½ tsp vanilla extract to a mason jar Mix together and let sit in the fridge for a minimum of 3 hours, but preferably overnight.Stir together, then add toppings like plain Greek yoghurt and fresh mango slices Enjoy!Chia pudding can be a great option for suhoor, as it is high in fiber, protein, and healthy fats. Speaking with indianexpress.com, Sameena Ansari – Senior Dietitian and Nutritionist, CARE Hospitals, Hi-Tec City, Hyderabad, said: “The fiber and protein in chia seeds can help to keep you feeling full and satisfied throughout the day, which can be especially helpful during Ramadan, when meals are limited. Chia seeds are also a good source of omega-3 fatty acids, which can help reduce inflammation and support overall health”.*Chia seeds absorb a lot of liquid, so it is important to use the right ratio of chia seeds to liquid to avoid a clumpy or dry texture.*Chia seeds can be a choking hazard if not properly soaked and hydrated, so consume them carefully.While chia pudding can be a healthy addition to your suhoor meal, it is important to balance it with other nutritious foods to ensure that you are getting all of the nutrients that your body needs.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 94,
      category: "food",
      DataImage:
        "https://images.indianexpress.com/2023/04/1BOLIVIA-PERU-FOOD.jpg?resize=450,250",
      DataTitle:
        "South American chefs celebrate Amazon cooking with worm chili and tree bark",
      DataDetailDescription:
        "Indigenous communities in the countries' huge areas of tropical rainforest capture feet-long fish, use bows and arrows to hunt, and harvest green and yellow peppers, and maize, transporting the products often hundreds of miles to big cities.In the high altitudes of Bolivia’s La Paz, some of South America’s top chefs are paying homage to regional Amazonian culinary ingredients including gusanillo, or worm chili, tree bark that tastes like garlic, and honey from stingless bees.The new collaboration between Bolivian chef Marsia Taha and Peruvian chef Virgilio Martinez is seeking to raise awareness of the region’s incredible – and at times unusual – foods, and the indigenous communities at the forefront of collecting them.At Taha’s restaurant Gustu in La Paz, a feast of colors and flavors was carefully spread out on wooden tables decorated with large leaves to celebrate the gastronomic diversity of the Peruvian and Bolivian Amazon.“This is not only a celebration of the Amazon and its biodiversity but of our producers as well. They are the ones who make it possible for these products to arrive to our homes or our restaurants,” said Taha.Indigenous communities in the countries’ huge areas of tropical rainforest capture feet-long fish, use bows and arrows to hunt, and harvest green and yellow peppers, and maize, transporting the products often hundreds of miles to big cities.cMartinez said there had been a growing movement to preserve regional culinary products and flavors.“Over the last five years, we have seen a strong Latin American culture that wants to preserve its identity, that wants to preserve its ancestral culture,” he told Reuters.The chefs sourced ingredients from almost 200 indigenous communities in the Amazon through Gustu’s project Sabores Silvestres, or Wild Flavors, which has collected information on hundreds of ingredients through 15 years of research.“As Latin-Americans and South Americans, we have understood that our advantage is that we have the capacity to translate this environment, these products and flavors into something simple. We can bring it to the table with simplicity and grace.”“We have worked with close to 200 indigenous communities and over 600 registered products – we have also used them at our restaurant. This brings us great pride,” Taha said.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 95,
      category: "food",
      DataImage:
        "https://images.indianexpress.com/2023/04/NMACC-thali.jpg?resize=450,250",
      DataTitle:
        "Maheep Kapoor gives a glimpse of thali served at NMACC gala - this is what it comprised",
      DataDetailDescription:
        "The launch of the Nita Mukesh Ambani Cultural Centre (NMACC) over the weekend can be best described as back-to-back nights of art, culture, fashion, and oodles of glamour. Attended by Bollywood and Hollywood stars dressed in high couture that paid homage to Indian culture, design and aesthetics, pictures and videos from the gala event are still ruling social media.While we all saw the celebrity looks that added to the charm of the event, did you also get a chance to lay your eyes on the scrumptious Indian thali that was served to the guests, in keeping with the theme of the event? In case you missed it, worry not. All thanks to Maheep Kapoor, we now know what was served — and it looks super delicious! In one of the pictures shared by the The Fabulous Lives of Bollywood Wives actor, we spotted a large silver thali with various small bowls placed on it. In it, there were servings of papads, laddoo, gujiya, and assorted Indian bread to be enjoyed with palak paneer, dal, a variety of Indian curries, vegetarian pulao, halwa, among other things.But it was not just Maheep, even Shraddha Kapoor gave a special shout out to the food. “My favourite part – this THALI aaand me wearing Paithani with a fun twist by @manishmalhotra05 @nmacc.india – You’ve to see it to believe it What a proud moment for India to have such a world class Cultural Centre!” she captioned her Instagram post.Nita Mukesh Ambani Cultural Centre, also called NMACC, is located within Jio World Centre in Bandra-Kurla Complex, Mumbai. It was inaugurated with a grand opening on March 31 and April 1. On the second day of the launch, India in Fashion exhibition along with various other performances were held at the centre, which aims to preserve and promote Indian art forms. NMACC was the dream project of Neeta Ambani.The centre’s grand opening was attended by celebrities like Priyanka Chopra, Nick Jonas, Shah Rukh Khan, Salman Khan, Rekha, Alia Bhatt, Gigi Hadid, Deepika Padukone, Ranveer Singh, Kiara Advani, Sidharth Malhotra, Kareena Kapoor, Saif Ali Khan, Karan Johar, Zendaya, Tom Holland, and many others.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 96,
      category: "food",
      DataImage: "https://images.indianexpress.com/2022/09/egg.jpg?w=640",
      DataTitle: "You are sure to love this healthy and quick egg recipe",
      DataDetailDescription:
        "Eggs are a powerhouse of various vitamins and minerals. Beneficial for brain health, heart health, and even the eyes, eggs can be consumed in numerous ways — boiled, poached, and even as a curry.“Today, I have this easy frittata recipe that is healthy and quick to make,” Yasmin wrote as she shared the recipe.Bring 1 cup of water to a boil in a large pan covered with a lid.Add a pinch of salt, sweet potato cubes, sliced carrot, and garlic, and cook for 5 to 7 minutes until the sweet potato and carrot are slightly softRemove the vegetables from the water and keep them aside.Beat the egg whites vigorously with a whisker until it becomes frothy and bubblyHeat the olive oil in a pan over medium flame. When the oil is hot add the egg whites, then scatter the cooked vegetables evenly over top.Let the frittata cook on the stove for 2 minutes",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 97,
      category: "Home",
      image2:
        "https://www.bollywoodhungama.com/wp-content/uploads/2022/11/Pathaan-6.jpg",
    },
    {
      id: 98,
      category: "Home",
      image3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs99VzabXgNpc3O45QVM2mhseX-wVVUMuow&usqp=CAU",
    },
    {
      id: 99,
      category: "more",
      DataImage:
        "https://crunchify.com/wp-content/uploads/2023/02/What-is-ChatGPT-Getting-started-with-ChatGPT.png",
      DataTitle:
        "ChatGPT displays a level of respect that most One Piece and Naruto fans fail to display",
      DataDetailDescription:
        "One of the biggest debates in anime and manga focuses on what’s better between One Piece and Naruto, with each respective fandom crowning their series with the title. It’s one of the oldest debates in the contemporary general otaku fanbase, despite respective creators, authors, and illustrators Eiichiro Oda and Masashi Kishimoto being real-life friends. However, fans of each series are constantly looking to compare and contrast the two, trying to analyze who boasts the better overall quality. When bias and other prejudices are put to the side, one major difficulty in this comes down to how different the two series are in everything, including setting, plot, themes, messages, etc. This distinction was recently explained by ChatGPT, an artificial intelligence chatbot designed by OpenAI, when we asked whether or not One Piece was better than Naruto. While fans looking for a definitive answer and explanation of clearcut supremacy may be disappointed, the answer ChatGPT gave us is a perfect one.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 100,
      category: "more",
      DataImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLcT5KRzQTXCC03CHfuPBFTtxhqC_3aLv3w&usqp=CAU",
      DataTitle:
        "Apple says ‘Hello Mumbai’ as it opens its first retail store in India tomorrow",
      DataDescription:
        "Lucasfilm announced three new live-action films in the Star Wars franchise on Friday.",
      DataDetailDescription:
        "“The stars are aligned” as tech pundits and insiders like to say on Apple’s first retail stores in India which will open in Mumbai and Delhi this week, a move that would get the Cupertino-based company closer to the market with one of the youngest populations in the world. As India’s economy is expected to have solid growth, with its 1.4 billion population, combined with the market’s increasing appetite for high-end smartphones, Apple is seeking to thrive in a market that offers many untapped opportunities for brands like it. Apple will open its first store in India in Mumbai on Tuesday, followed by the second one in Delhi on Thursday. The Mumbai store will cover well over 22,000 square feet inside the Jio World Drive Mall, an upscale mall owned by India’s richest man Mukesh Ambani. The retail outlet is a beautiful one, featuring a triangular handcrafted timber ceiling that extends beyond the glass façade to the underside of the exterior canopy. According to Apple, each tile is made from 408 pieces of timber, forming 31 modules per tile with a total of 1,000 tiles that make up the ceiling. In fact, there are over 450,000 individual timber elements, all of which were assembled in Delhi.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 101,
      category: "more",
      DataImage:
        "https://imageio.forbes.com/specials-images/imageserve/637b1d11729a96ce28ea598c/0x0.jpg?format=jpg&width=1200",
      DataTitle: "The Top 10 Tech Trends In 2023 Everyone Must Be Ready For",
      DataDescription:
        "As a futurist, it’s my job to look ahead — so every year, I cover the emerging tech trends that will be shaping our digital world in the next 12 months.",
      DataDetailDescription:
        "AI will also augment nearly every job in every business process across industries. More retailers will use AI to manage and automate the complex inventory management processes that happen behind the scenes, so convenience trends like buy-online-pickup-at-curbside (BOPAC), buy-online-pickup-in-store (BOPIS), and buy-online-return-in-store (BORIS), will become standard.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 102,
      category: "Tollywood",
      DataImage:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bdd8fb44912715.5821fe577f4ee.jpg",
      DataTitle: "Dhruva-Telugu Tollywood Movie Poster Design Pranaytony!",
      DataDescription:
        "Dhruva is a 2016 Indian Telugu-language action thriller film[3] directed by Surender Reddy and produced by Allu Aravind under his banner Geetha Arts. The launch and principal photography of the film took place in February 2016 filming took place in Hyderabad and Kashmir. ",
      DataDetailDescription:
        "It features Ram Charan in the titular role, along with Aravind Swamy, Rakul Preet Singh, and Navdeep in important roles. A remake of the Tamil film Thani Oruvan (2015), it follows Dhruva, an IPS officer who wants to arrest Siddharth Abhimanyu, a wealthy scientist, who uses secret medical and illegal practices for profit.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 103,
      category: "Tollywood",
      DataImage: "https://wallpapercave.com/wp/wp10314727.jpg",
      DataTitle:
        "Gaddalakonda Ganesh is a 2019 Indian Telugu-language action comedy film",
      DataDescription:
        "directed by Harish Shankar and produced by Ram Achanta and Gopichand Achanta under the 14 Reels Plus banner.[5][6] The film is an official remake of the 2014 Tamil film Jigarthanda which itself was inspired by the 2006 South Korean movie A Dirty Carnival.",
      DataDetailDescription:
        "The film is an official remake of the 2014 Tamil film Jigarthanda which itself was inspired by the 2006 South Korean movie A Dirty Carnival.[7][8][9] The film stars Varun Tej, Atharvaa, Pooja Hegde, and Mirnalini Ravi.[6][10][11] The film marks the Telugu debut of Atharvaa and Mirnalini Ravi.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 104,
      category: "Tollywood",
      DataImage:
        "https://i.pinimg.com/originals/8e/4e/13/8e4e131e7ee47cfbbd48b9e9ccffda23.jpg",
      DataTitle: "Temper is a 2015 Indian Telugu-language action film",
      DataDescription:
        "The written by Vakkantham Vamsi and directed by Puri Jagannadh. Starring N. T. Rama Rao Jr., Kajal Aggarwal and Prakash Raj, the narrative revolves around Daya, a corrupt police officer, whose life changes after a brawl that eventually leads to him stumbling upon a murder case.",
      DataDetailDescription:
        "Temper was produced by Bandla Ganesh on Parameswara Art Productions banner. Anup Rubens composed the soundtrack while Mani Sharma composed the background score. Shyam K. Naidu and S. R. Sekhar handled the film's cinematography and editing, respectively. The film was made on a budget of ₹35 crore (350 million). Production began on 1 August 2014 at Hyderabad and principal photography commenced on the next day. After being halted twice because of the Film Federation employees' strike, the film's shoot was completed by 31 January 2015, with the film being primarily shot in and around Hyderabad and Goa.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 105,
      category: "Tollywood",
      DataImage:
        "https://en.janbharattimes.com/wp-content/uploads/2023/01/highest-grossing-telugu-movies-all-time.jpg",
      DataTitle:
        "Highest Grossing Telugu Movies 2023 & All Time (Tollywood) - JanBharat Times",
      DataDescription:
        "Popular Indian cinema, Telugu, or Tollywood cinema produces 100+ films in a year. It is considered as second-largest film production center in India after Bollywood.",
      DataDetailDescription:
        "Rajamouli’s directed Baahubali2: The Conclusion was released on 28 April 2017 and broke several box office records. The Magnum Opus film is not only the highest box office grosser in Telugu but it even broke the record of Bollywood’s highest-grosser Dangal and holds the record of the no. 1 spot in the list of the highest BO-grossing films in India & 2nd highest-grossing Indian film WW.",

      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 106,
      category: "Tollywood",
      DataImage:
        "https://cdn.tollywood.net/wp-content/uploads/2018/02/Tholi-Prema-Movie-New-Posters-2-723x1024.jpg",
      DataTitle: "Tholi Prema Movie New Posters",
      DataDescription:
        "Tholi Prema (transl. First love) is a 2018 Indian Telugu-language romantic drama film written and directed by Venky Atluri in his directorial debut.",
      DataDetailDescription:
        "Produced by B. V. S. N. Prasad's Sri Venkateswara Cine Chitra, the film stars Varun Tej and Raashi Khanna. The music is composed by S. Thaman while cinematography and editing are done by George C. Williams and Naveen Nooli respectively.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 107,
      category: "Tollywood",
      DataImage:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202301/sir_1673854894.jpg",
      DataTitle: "SIR (2023) Movie : What's Behind",
      DataDescription:
        "Kollywood actor Dhanush is known for doing different genre roles and versatile performances. When he teamed with Telugu director Venky Atluri, everyone got excited. The film's title Vaathi/SIR generated immense interest.",
      DataDetailDescription:
        "Kollywood actor Dhanush is known for doing different genre roles and versatile performances. When he teamed with Telugu director Venky Atluri, everyone got excited. The film's title Vaathi/SIR generated immense interest. The film's first look, teaser, and trailer got a good response and the film is released on 17 February 2023. The film's OTT rights have been bagged by Netflix and streaming will be done after the completion of its theatrical run. Let us find out what Dhanush offered to movie lovers as SIR.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 108,
      category: "Tollywood",
      DataImage: "https://i.ytimg.com/vi/0UOPqiZER1o/maxresdefault.jpg",
      DataTitle:
        "Mass Maharaja Ravi Teja First look Teaser | Waltair Veerayya | Megastar Chiranjeevi | Bobby Kolli",
      DataDescription:
        "The Elric brothers' mother is dead and their father has long since abandoned them. Deciding to perform a forbidden human transmutation to bring their mother back, they end up losing their bodies. Now Edward must join the military in order to gain certain alchemical privileges, with his one goal being to restore his brother to his original state. But with war on the horizon it's only a matter of time before they are both forced to question their morals and ultimately decide the value of human life.",
      DataDetailDescription:
        "Mass Maharaja Ravi Teja First look Teaser From Waltair Veerayya on Mythri Movie Makers. Waltair Veerayya is an upcoming Telugu film ft. Megastar Chiranjeevi, Ravi Teja, Shruti Haasan, Catherine Tresa. Music composed by Rockstar Devi Sri Prasad, Story Dialogues & Direction by KS Ravindra (Bobby Kolli), Produced by Naveen Yerneni and Y Ravi Shankar under the banner Mythri Movie Makers,Audio On Sony Music.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 109,
      category: "Tollywood",
      DataImage:
        "https://www.scrolldroll.com/wp-content/uploads/2023/03/agilan-south-indian-movies-releasing-in-march-2023.jpg",
      DataTitle: "Jayam Ravi returns as Agilan",
      DataDescription:
        "a kingpin of underground illegal business at the harbour where he works as a crane operator.",
      DataDetailDescription:
        "Jayam Ravi returns as Agilan, a kingpin of underground illegal business at the harbour where he works as a crane operator. What happens when the police and another gangster are on his trail? The movie is anticipated to be full of action and drama, so watch out for this film on the 10th of March.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 110,
      category: "Tollywood",
      DataImage:
        "https://www.filmibeat.com/ph-big/2022/12/upcoming-south-indian-movies-2023-that-are-expected-to-rock-the-box-office_1671089347100.jpg",
      DataTitle:
        "Upcoming South Indian Movies 2023, That Are Expected to Rock At The Box- Office",
      DataDescription:
        "Salaar is an upcoming Indian Telugu-language action thriller film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under Hombale Films.",
      DataDetailDescription:
        "Salaar is an upcoming Indian Telugu-language action thriller film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under Hombale Films. It stars Prabhas as the titular character alongside Prithviraj Sukumaran, Shruti Haasan and Jagapathi Babu. The movie is set to release in 28 September 2023.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 112,
      category: "Tollywood",
      DataImage:
        "https://www.filmibeat.com/ph-big/2022/12/upcoming-south-indian-movies-2023-that-are-expected-to-rock-the-box-office_167108934720.jpg",
      DataTitle:
        "Jailer is an upcoming Indian Tamil-language action comedy film",
      DataDescription:
        "Jailer is an upcoming Indian Tamil-language action comedy film written and directed by Nelson, and produced by Kalanithi Maran of Sun Pictures.",
      DataDetailDescription:
        "Jailer is an upcoming Indian Tamil-language action comedy film written and directed by Nelson, and produced by Kalanithi Maran of Sun Pictures. The film stars Rajinikanth, with Shiva Rajkumar, Vasanth Ravi, Yogi Babu, Ramya Krishnan and Vinayakan in supporting roles. The movie will release in 14 April 2023.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 113,
      category: "Tollywood",
      DataImage:
        "https://www.filmibeat.com/ph-big/2022/12/upcoming-south-indian-movies-2023-that-are-expected-to-rock-the-box-office_167108934730.jpg",
      DataTitle: "Varisu is an upcoming Indian Tamil-language drama film",
      DataDescription:
        "Varisu is an upcoming Indian Tamil-language drama film directed by Vamshi Paidipally. Vijay and Rashmika Mandanna are playing the lead role in the movie",
      DataDetailDescription:
        "Varisu is an upcoming Indian Tamil-language drama film directed by Vamshi Paidipally. Vijay and Rashmika Mandanna are playing the lead role in the movie, the Varisu will release 12 January 2023 on pongal occasion.   ",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 114,
      category: "Tollywood",
      DataImage:
        "https://www.filmibeat.com/ph-big/2022/12/upcoming-south-indian-movies-2023-that-are-expected-to-rock-the-box-office_167108934740.jpg",
      DataTitle:
        "Thunivu is an upcoming Indian Tamil-language action thriller film written and directed by H. Vinoth, and produced by Boney Kapoor.",
      DataDetailDescription:
        "Thunivu is an upcoming Indian Tamil-language action thriller film written and directed by H. Vinoth, and produced by Boney Kapoor.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 115,
      category: "Tollywood",
      DataImage:
        "https://www.filmibeat.com/ph-big/2022/12/upcoming-south-indian-movies-2023-that-are-expected-to-rock-the-box-office_167108934710.jpg",
      DataTitle:
        "Kabzaa is an upcoming Kannada-language period action film directed by R.",
      DataDetailDescription:
        "Kabzaa is an upcoming Kannada-language period action film directed by R. The star cast features Upendra, Kiccha Sudeep, Shriya Saran in the main lead roles. The movie will be releasing on February 19, 2023.  ",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 116,
      category: "Tollywood",
      DataImage:
        "https://www.filmibeat.com/ph-big/2022/12/upcoming-south-indian-movies-2023-that-are-expected-to-rock-the-box-office_167108934790.jpg",
      DataTitle:
        "Ponniyin Selvan Part - II The film ended on a cliffhanger and now, all eyes are on the film's second part.",
      DataDetailDescription:
        "The film ended on a cliffhanger and now, all eyes are on the film's second part. According to reports, Ponniyin Selvan: Part 2 is likely to hit the theatres on April 28, 2023.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
    {
      id: 117,
      category: "Tollywood",
      DataImage:
        "https://www.filmibeat.com/ph-big/2022/12/upcoming-south-indian-movies-2023-that-are-expected-to-rock-the-box-office_167108934780.jpg",
      DataTitle:
        "Adipurush is an Indian epic mythological film based on Ramayana.",
      DataDetailDescription:
        "Adipurush is an Indian epic mythological film based on Ramayana.   the film stars Prabhas as Raghava, Kriti Sanon as Janaki, and Saif Ali Khan as Lankesh. Total budget of the movie is 550 Crore, the movie is set to release on  12 January 2023.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5kyrH59UaWyXpROe9zS1i9APHHH6qtmdJQ&usqp=CAU",
      name: "Rushikesh Bhosale",
      date: "12:00 , 20-April-2023.",
    },
  ]);
  console.log(props.children);
  return (
    <div>
      <store.Provider value={[data, setData]}>{props.children}</store.Provider>
    </div>
  );
};

export default ContextAPI;
