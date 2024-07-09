import Image from "next/image";
import React from 'react';

const MySection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Sobre Nós
          </h2>
          <p className="mb-4">
            Bem-vindo ao HematoAtlas, uma inovadora plataforma dedicada ao estudo da hematologia. O HematoAtlas foi criado com o objetivo de proporcionar uma experiência de aprendizagem completa e interativa, integrando um atlas de hematologia com um sistema de exercícios gamificados. Aqui, você pode ler conteúdos detalhados, visualizar fotos de células e suas alterações, realizar exercícios e ganhar pontos à medida que avança no seu aprendizado.
          </p>
          <h3 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Sobre o Projeto
          </h3>
          <p>
            Este projeto foi desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) de <strong>Davi Rodrigues de Oliveira</strong>, aluno do curso de Farmácia da UFRN. Sob a orientação da <strong>Prof. Dra. Juliana Felix da Silva</strong>, o HematoAtlas nasceu da necessidade de oferecer um recurso educativo moderno e acessível para estudantes e profissionais da área de hematologia.
          </p>
          <p>
          O laminário utilizado na plataforma contém imagens das lâminas fornecidas pelo Laboratório de Hematologia Clínica do Departamento de Análises Clínicas e Toxicológicas (DACT) da Universidade Federal do Rio Grande do Norte (UFRN). Além disso, algumas das imagens foram gentilmente cedidas por professores brasileiros que apoiaram este projeto, enriquecendo ainda mais nosso banco de dados visual.
          </p>
          <h3 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Nossa Missão
          </h3>
          <p>
          Nosso compromisso é com a qualidade e a eficácia do aprendizado. Através da gamificação, tornamos o estudo da hematologia mais envolvente e desafiador, incentivando a prática contínua e o aprofundamento do conhecimento.
          </p>
          <p>
          A plataforma HematoAtlas foi projetada para estudantes de hematologia, profissionais da área de saúde, e qualquer pessoa interessada em aprimorar seus conhecimentos sobre o sangue e suas patologias. Para garantir que estamos sempre melhorando e atendendo às necessidades dos nossos usuários, oferecemos um formulário de avaliação onde você pode compartilhar suas opiniões e sugestões sobre a plataforma. Sua participação é fundamental para continuarmos evoluindo e oferecendo um recurso de alta qualidade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MySection;
