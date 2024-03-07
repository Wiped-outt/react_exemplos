import styled, { keyframes } from "styled-components";

// Componente funcional About
const About = () => {
    return (
        <Container>
            {/* Wrapper para o conteúdo da seção "Sobre Mim" */}
            <ContentWrapper>
                <title>Sobre Mim</title>
                
                {/* Descrição */}
                <Description>
                    Sou um desenvolvedor apaixonado por tecnologia e sempre em busca de novos desafios. Minha jornada começou quando descobri o poder da programação e desde então, não parei mais de aprender a evoluir.
                </Description>

                {/* Wrapper para a seção de habilidades */}
                <SkillsWrapper>
                    <SkillTitle>Algumas de minhas habilidades:</SkillTitle>

                    {/* Lista de habilidades */}
                    <SkillList>
                        <skill>
                            <SkillIcon>💻</SkillIcon>
                            <SkillName>Desenvolvimento Web</SkillName>
                        </skill>
                        <skill>
                            <SkillIcon>📱</SkillIcon>
                            <SkillName>Desenvolvimento Mobile</SkillName>
                        </skill>
                        <skill>
                            <SkillIcon>🎨</SkillIcon>
                            <SkillName>Design de Interfaces</SkillName>
                        </skill>
                    </SkillList>
                </SkillsWrapper>
            </ContentWrapper>
        </Container>
    );
};

// Animação de entrada (slide-up)
const slideUpAnimation = keyframes
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
