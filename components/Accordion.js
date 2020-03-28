import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const [content, setContent] = useState([
    {
      question: 'My background before changing career',
      answer:
        "It's been a twisty path, but one full of adventure! After " +
        'studying European Literature & Critical Thinking in Oxford and ' +
        'London, I spent nearly 9 years working, travelling and ' +
        'volunteering overseas as a teacher, followed by an MRes in ' +
        "Human Rights in Glasgow. See the animation below for some of the places I've been!",
      expanded: false,
      id: 123,
    },
    {
      question: 'How did I get into coding?',
      answer:
        'I started playing with code when living in Asia & writing a travel blog. On returning to the UK, I took the 16-week software development programme and a 4-week ' +
        'UX course in 2017 with the awesome CodeClan & immediately ' +
        'started work as a fullstack developer in a fintech startup, ' +
        'Castlight, which was bought by Experian in 2019. You can check out my GitHub and LinkedIn via the links in the footer.',
      expanded: false,
      id: 456,
    },
    {
      question: 'What am I doing now?',
      answer:
        'In January 2020 I decided to shift towards ReactJS and remote ' +
        'work, but as a last hurrah bought a small van and set off ' +
        'round the Highlands & Islands of Scotland (while coding online, ' +
        'thanks to data tethering & platforms such as Frontend ' +
        "Masters!). Since Covid-19 has cut that journey short, I'm now " +
        'available for a remote FrontEnd role.',
      expanded: false,
      id: 789,
    },
    {
      question: 'What are my main skills?',
      answer:
        'My main obsessions are everything ReactJS, the JAMstack ' +
        'ecosystem & GraphQL. I bring my global experience, PhD ' +
        'research skills and a tireless enthusiasm for learning.',
      expanded: false,
      id: 101112,
    },
  ]);
  const toggleItem = index => {
    setContent(
      content.map((item, i) => {
        if (i === index) {
          item.expanded = !item.expanded;
        } else {
          item.expanded = false;
        }

        return item;
      }),
    );
  };
  return (
    <div className="accordion">
      {content.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          index={index}
          toggleItem={toggleItem}
        />
      ))}
    </div>
  );
};

export default Accordion;
