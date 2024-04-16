import React from 'react';
import { useRouter } from 'next/router';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('https://leetcode.com/retr0sec');
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio Website
        </SectionTitle>
        <SectionText>
          “Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.”
        </SectionText>
        <Button onClick={handleLearnMoreClick}>Learn More</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
