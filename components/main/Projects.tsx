import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
         Meus projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CharmeClinica.png"
          title="Charme Clinica Biomédica"
          description="Um site totalmente versátil, limpo e atrativo, destacando-se como plataforma principal para uma clínica de estética biomédica. Ele visa apresentar serviços de forma eficiente, facilitando o agendamento de horários. Este projeto é verdadeiramente extraordinário, atendendo precisamente às solicitações da cliente."
        />
        <ProjectCard
          src="/LabHosting.png"
          title="LabHosting"
          description="Um projeto de website extremamente moderno e atrativo, destacando-se pelo estilo neon e um visual versátil. Sua principal função é automatizar as vendas de hospedagens gamer no mercado brasileiro, ao mesmo tempo em que gerencia eficientemente dados e informações relacionadas ao serviço oferecido."
        />
        <ProjectCard
          src="/UrbanRoleplay.png"
          title="Urban Roleplay"
          description="Um site completamente clean e contemporâneo, apresentando uma infraestrutura tecnológica de última geração, além de um design visualmente impressionante e destacado. Um projeto verdadeiramente extraordinário."
        />
      </div>
    </div>
  );
};

export default Projects;
