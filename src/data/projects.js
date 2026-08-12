// Conteúdo baseado nos projetos reais do GitHub de Rafael Serafin.
export const projects = [
  {
    id: 'ptml',
    name: 'PTML',
    full: 'Portable Terminal Markup Language',
    file: 'Render.fs',
    lang: 'F#',
    tags: ['F#', '.NET', 'Parser', 'Compilers'],
    pitch: 'Uma linguagem de marcação declarativa  no estilo HTML+CSS  para construir interfaces de terminal.',
    description:
      'Em vez de montar telas de terminal na mão com códigos ANSI soltos, o PTML deixa descrever a interface como árvore de widgets. Um pipeline completo: lexer, parser recursivo, AST, motor de layout flexbox-like e um renderer que emite apenas o que mudou na tela.',
    highlights: [
      'Lexer, parser e AST próprios  ~2.000 linhas de F#',
      'Motor de layout com alinhamento, gap e profundidade (z-index)',
      '15+ widgets: blocos, colunas, spinners, progress bars, bordas',
      'Extensão própria de syntax highlighting para VS Code',
      'Renderer por diff: só repinta o que mudou no terminal',
    ],
    snippet: `<?ptml encoding="UTF-8" terminal-resize="reflow"?>
<terminal x-align="center">
  <block title="status" border="rounded">
    <column>
      <text foreground="gold">sistema online</text>
      <column>
        <row gap="1">
          <text>cpu</text>
          <progress value="7" max="10" show-value="true" />
        </row>
        <row gap="1">
          <text>ram</text>
          <progress value="4" max="10" show-value="true" />
        </row>
      </column>
    </column>
  </block>
</terminal>`,
    status: 'active',
    links: { github: 'https://github.com/rafael-serafin1/ptml' },
  },
  {
    id: 'personal-api',
    name: 'Personal API',
    full: 'API REST para personal trainers',
    file: 'PersonalController.java',
    lang: 'Java',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST'],
    pitch: 'API em camadas para gerenciar personal trainers, alunos, treinos e exercícios  do jeito que o mercado brasileiro espera.',
    description:
      'Spring Boot com arquitetura MVC completa: controllers, services, repositories e DTOs, sobre um modelo relacional 1:N encadeado (personal → aluno → treino → exercício). Mais de 28 endpoints RESTful com PostgreSQL via JPA/Hibernate.',
    highlights: [
      'Camadas Controller / Service / Repository / DTO bem separadas',
      '28+ endpoints RESTful cobrindo o fluxo completo',
      'Modelagem relacional 1:N do domínio fitness',
      'Build reproduzível com Maven wrapper',
    ],
    snippet: `@RestController
@RequestMapping("/personais")
class PersonalController {
  @GetMapping("/{id}/alunos")
  List<Aluno> alunos(@PathVariable Long id) {
    return service.listarAlunos(id);
  }
}`,
    status: 'finalizado/em evolução',
    links: { github: 'https://github.com/rafael-serafin1/personal-api-app' },
  },
  {
    id: 'cli-todo-manager',
    name: 'CLI Todo Manager',
    full: 'Comando de terminal para manutenção de afazeres',
    file: 'macros.h',
    lang: 'C',
    tags: ['ANSI C', 'Macros & XMacros', 'File Manipulation'],
    pitch: 'Comando para terminal chamado `todo`, responsável por adicionar, remover, listar e checar tarefas/afazeres em projetos.',
    description:
      'Escrito inteiramente em C, apenas utilizando as bibliotecas do sistema, com suporte para diferentes sistemas operacionas.',
    highlights: [
      'Adicionar tarefas através do subcomando `add`',
      'Marcar como feito tarefas através do índice',
      'Configurações armazenadas em repositórios dentro do projeto',
      'Totalmente procedural e rápido',
    ],
    snippet: `todo init; todo add "Bake a cake"; todo check "1"; todo list --all`,
    status: 'finalizado',
    links: { github: 'https://github.com/rafael-serafin1/cli-todo-manager' },
  },
  {
    id: 'docitup',
    name: 'Document It Up!',
    full: 'Extensão para Visual Studio Code',
    file: 'CmlParser.ts',
    lang: 'TypeScript',
    tags: ['TypeScript', 'Extension', 'Navigation', 'Documentation'],
    pitch: 'Escreve animações CSS como seletor + gatilho + ação, sem event listener nenhum espalhado pelo código.',
    description:
      'Extensão para Visual Studio Code: focada em documentação de código inline e navegação por meio do workspace, tudo através de uma síntaxe de tags baseada na semântica da CML (Commentary Markup Language), desenvolvida para uso na extensão.',
    highlights: [
      'parser + providers próprios em TypeScript puro',
      'Catálogo próprio com +10 tags diferentes com usos',
      'Documentação inline com provedor de metadados sob demanda',
      'Suporte a navegação do ambiente através de metadados definidos em linha',
    ],
    snippet: `
    \/\/<label>HTTP_GET</label>
    \/\/<desc>Região responsável por encapsular todas funções responsáveis pelo método HTTP GET</desc>
    \/\/<span>
    ...
    \/\/</span>
    `,
    status: 'estável e utilizável',
    links: { github: 'https://github.com/rafael-serafin1/document-it-up-vscode' },
  },
  {
    id: 'crud-tecnico',
    name: 'CRUD Técnico',
    full: 'Aplicação full-stack para academias',
    file: 'app.jsx',
    lang: 'JavaScript',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL'],
    pitch: 'React + Vite no front, Express no back, PostgreSQL no meio  o mesmo domínio da Personal API, agora ponta a ponta.',
    description:
      'Aplicação de página única para gestão de academias: personal trainers, alunos, treinos e exercícios. Front-end em React com Vite, back-end em Node/Express seguindo o mesmo padrão em camadas, e um schema relacional completo em PostgreSQL.',
    highlights: [
      'Front-end React + Vite consumindo API própria',
      'Back-end Express com controllers, services e repositories',
      '28+ endpoints REST espelhando o domínio fitness',
      'Schema relacional versionado em PostgreSQL',
    ],
    snippet: `const { data } = await api.get(
  \`/alunos/\${id}/treinos\`
)
setTreinos(data)`,
    status: 'em evolução',
    links: { github: 'https://github.com/rafael-serafin1/crud-tecnico-application' },
  },
]
