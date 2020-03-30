import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const [content, setContent] = useState([
    {
      question: 'My background before changing career',
      answer:
        "It's been a twisty path, but one full of adventure! After " +
        'studying European Literature & Critical Thinking in Oxford and ' +
        'London, I spent nearly 9 years working, travelling & ' +
        'volunteering overseas as a teacher, followed by an MRes in ' +
        `Human Rights in Glasgow. Check out the animation on the Journey page for some of the places I've been!`,
      expanded: false,
      id: 123,
    },
    {
      question: 'How did I get into coding?',
      answer:
        'I started playing with code when living in Asia by writing a travel blog & using online courses. On returning to the UK, I took the 16-week software development programme & a 4-week ' +
        'UX course with the awesome CodeClan & immediately ' +
        'started work as a fullstack developer. My first job was in a fintech startup, ' +
        'Castlight, which focussed on using Open Banking technology to empower customers to improve their credit rating & which was bought by Experian in 2019. Our stack was Rails & React, but shifted towards .NET & AngularJS. I spent a lot of my evenings & weekends working on keeping up with ReactJS, completing the Fullstack Open certification from the University of Helsinki, attending the Glasow JavaScript Meetups, & spinning up a lot of JAMStack projects for fun!',
      expanded: false,
      id: 456,
    },
    {
      question: 'What am I doing now?',
      answer:
        'In January 2020 I decided to shift towards my main focus - ReactJS - & remote ' +
        'work. As a last hurrah, I bought a small van & set off ' +
        'round the Highlands & Islands of Scotland (while coding online, ' +
        'thanks to data tethering & platforms such as Frontend ' +
        "Masters & Udacity!). Since Covid-19 has cut that journey short, I'm now " +
        'available for a remote FrontEnd role earlier than expected. You can check out my GitHub & LinkedIn via the links in the footer, & feel free to contact me via the Contact page if you want to know more!',
      expanded: false,
      id: 789,
    },
    {
      question: 'What are my main skills?',
      answer:
        'My main obsessions are everything ReactJS, the JAMstack ' +
        'ecosystem, Cypress.io & GraphQL. My global experience & diverse background gives me a unique perspective on customer-focussed web-design, content, & collaboration - as well as the necessary independence & initiative to thrive in remote working. PhD ' +
        "research skills & a tireless enthusiasm for learning mean I'm always up for a challenge & ready to get to grips with new technologies on the fly.",
      expanded: false,
      id: 101112,
    },
    {
      question: 'About this website',
      answer:
        'This site was built using NextJS, GSAP & SASS, ' +
        'with Figma for the design stage & Zeit for deployment. The configuration is set up to allow a ' +
        'refactor into TypeScript... when I finally get around to it! The source code ' +
        'is available on my GitHub profile (see link in footer).',
      expanded: false,
      id: 131415,
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
