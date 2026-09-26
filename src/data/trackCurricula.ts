export type CurriculumSession = {
  title: string;
  detail?: string;
};

export type TrackCurriculum = {
  slug: string;
  name: string;
  goal: string;
  delivery: string;
  learningApproach: string;
  outcomes: string[];
  theory: string[];
  practical: string[];
  prerequisites: string[];
  tools?: string[];
  sessions: CurriculumSession[];
  assessment: string[];
  completion: string[];
};

export const trackCurricula: TrackCurriculum[] = [
  {
    slug: 'ai-expert',
    name: 'AI Expert',
    goal: 'Equip professionals to use modern AI tools confidently, responsibly, and productively in research, communication, analysis, and day-to-day knowledge work.',
    delivery: '24 hours · Online training',
    learningApproach: 'A balanced mix of concise theory, guided demonstrations, hands-on labs, and an applied workflow project. No programming is required.',
    outcomes: [
      'Design, refine, and evaluate prompts for reliable professional results.',
      'Select suitable generative AI tools while recognizing limitations and failure modes.',
      'Create document-grounded assistants and practical AI-enabled workflows.',
      'Apply privacy, intellectual-property, security, bias, and human-oversight safeguards.'
    ],
    theory: [
      'Prompt design, context engineering, and output evaluation',
      'Generative AI and large language model capabilities and limitations',
      'Responsible and trustworthy AI in professional settings',
      'Retrieval-augmented generation and document-grounded assistants',
      'No-code and low-code AI workflow automation',
      'Agentic systems, multimodal AI, and emerging physical AI'
    ],
    practical: [
      'Create a reusable prompt template for a recurring professional task.',
      'Complete a research or productivity assignment that produces a brief, analysis, or report.',
      'Configure a no-code, document-grounded AI assistant.',
      'Build and demonstrate an end-to-end AI-assisted workflow.'
    ],
    prerequisites: [
      'Basic digital literacy and confidence using common workplace applications.',
      'No programming experience is required.',
      'Familiarity with generative AI is helpful but not mandatory.',
      'A computer, stable internet connection, and willingness to configure or connect tools.'
    ],
    tools: ['Ollama', 'Zotero', 'RAGFlow, AnythingLLM, or Flowise', 'Dify', 'Node-RED or n8n', 'LibreOffice', 'Optional commercial AI assistants'],
    sessions: [
      {title: 'AI foundations for professional work', detail: 'Capabilities, limits, tool selection, and responsible use.'},
      {title: 'Prompting and context engineering', detail: 'Reusable patterns, structured context, and result evaluation.'},
      {title: 'Research and productivity workflows', detail: 'Analysis, writing, evidence management, and presentation support.'},
      {title: 'Knowledge assistants', detail: 'Document grounding, retrieval, citations, and quality checks.'},
      {title: 'Automation and agents', detail: 'No-code orchestration, human approval, and failure recovery.'},
      {title: 'Applied project and examination', detail: 'Demonstrate an end-to-end workflow and complete the final assessment.'}
    ],
    assessment: [
      'A proctored online examination covering the track’s key concepts.',
      'A practical build demonstrating an AI-assisted professional workflow.',
      'The knowledge component contributes 60% and the practical component 40% of the final result.'
    ],
    completion: ['Attend at least 80% of scheduled sessions.', 'Achieve at least 70% overall.', 'Submit and present the practical project.', 'Receive a certificate after completing the examination and practical requirements.']
  },
  {
    slug: 'ai-strategist',
    name: 'AI Strategist',
    goal: 'Enable leaders and decision-makers to translate AI capabilities into responsible strategy, measurable organizational value, sound governance, and defensible investment choices.',
    delivery: '24 hours · Online training',
    learningApproach: 'Executive-level concepts, decision frameworks, facilitated case work, and a strategy dossier. No programming is required.',
    outcomes: [
      'Identify, assess, and prioritize high-value AI opportunities.',
      'Evaluate readiness across data, technology, people, process, and leadership.',
      'Build business cases with costs, benefits, risks, uncertainty, and measurable KPIs.',
      'Define governance, sourcing, operating-model, and adoption decisions.',
      'Communicate an actionable AI strategy and roadmap to executive stakeholders.'
    ],
    theory: [
      'AI fluency, capabilities, limitations, and opportunity framing',
      'AI readiness and organizational maturity',
      'Business cases, value measurement, ROI, and uncertainty',
      'Responsible AI, governance, and the AI risk lifecycle',
      'NIST AI RMF and ISO/IEC 42001 awareness',
      'Build, buy, partner, or abstain decisions',
      'Operating models, change management, adoption, and implementation'
    ],
    practical: [
      'Build a scored AI opportunity matrix and balanced initiative portfolio.',
      'Complete an organizational readiness and gap assessment.',
      'Define governance roles, accountability, and a priority risk assessment.',
      'Produce an AI Strategy and Investment Dossier with roadmap, KPIs, and executive recommendation.'
    ],
    prerequisites: ['Management, leadership, strategy, or decision-making experience.', 'No programming experience is required.', 'Access to a computer, stable internet connection, and common office tools.'],
    tools: ['Opportunity-prioritization templates', 'Readiness and risk-assessment canvases', 'Spreadsheet and presentation tools', 'Collaborative whiteboarding tools'],
    sessions: [
      {title: 'AI landscape and strategic ambition', detail: 'Capabilities, constraints, and an organizational ambition statement.'},
      {title: 'Problem framing and stakeholder alignment', detail: 'Use cases, stakeholders, outcomes, and decision context.'},
      {title: 'Opportunity assessment and prioritization', detail: 'Value, feasibility, risk, and portfolio balance.'},
      {title: 'Readiness and sourcing', detail: 'Gap assessment and build, buy, partner, or abstain choices.'},
      {title: 'Value, costs, and business cases', detail: 'ROI, uncertainty, KPIs, and benefits realization.'},
      {title: 'Governance, risk, and responsible AI', detail: 'Accountability, legal, ethical, security, and operational controls.'},
      {title: 'Operating model and adoption', detail: 'Change, capability building, implementation, and executive communication.'},
      {title: 'Strategy dossier and final assessment', detail: 'Present an integrated recommendation and complete the examination.'}
    ],
    assessment: ['A final knowledge examination covering strategy, value, readiness, governance, and risk.', 'An applied strategy dossier and executive presentation.', 'Assessment emphasizes evidence-based prioritization and practical decision quality.'],
    completion: ['Meet the attendance requirement communicated for the cohort.', 'Achieve the required final assessment score.', 'Submit and present the AI Strategy and Investment Dossier.', 'Receive a certificate after satisfying all examination and practical requirements.']
  },
  {
    slug: 'ai-engineer',
    name: 'AI Engineer',
    goal: 'Build the theoretical foundation and practical engineering skills needed to design, develop, evaluate, deploy, and monitor AI and machine-learning solutions.',
    delivery: '32 hours · Online training',
    learningApproach: 'Theory, guided exercises, practical laboratories, and project-based learning using realistic datasets and production-oriented workflows.',
    outcomes: [
      'Translate a business question into a measurable machine-learning task.',
      'Prepare data and build leak-proof model-development pipelines.',
      'Train, compare, tune, and evaluate supervised and unsupervised models.',
      'Develop neural-network, NLP, and retrieval-based solutions.',
      'Deploy, monitor, document, and audit a model responsibly.'
    ],
    theory: [
      'Problem framing and measurable success criteria',
      'Statistical foundations, sampling, and hypothesis testing',
      'Regression, classification, loss, optimization, and validation',
      'Feature engineering, dimensionality reduction, and ensemble methods',
      'Clustering, anomaly detection, neural networks, and transfer learning',
      'NLP, embeddings, prompting, and retrieval',
      'Deployment architecture, model drift, fairness, privacy, and model documentation'
    ],
    practical: [
      'Clean and explore a messy real-world dataset with pandas and decision-oriented visualizations.',
      'Build preprocessing pipelines and compare regression and classification models.',
      'Address imbalance, overfitting, and hyperparameter tuning with tracked experiments.',
      'Create clustering, transfer-learning, and document Q&A solutions.',
      'Serve a model with FastAPI, containerize it, and deploy it to an endpoint.',
      'Audit subgroup bias, write a model card, and deliver an end-to-end capstone repository.'
    ],
    prerequisites: ['Basic Python programming.', 'Introductory statistics or equivalent experience.', 'A Google account for Colab and course collaboration.', 'Interest in artificial intelligence, machine learning, or data science.'],
    tools: ['Python', 'Google Colab', 'pandas', 'scikit-learn', 'FastAPI', 'Git and GitHub', 'Container and cloud deployment tools'],
    sessions: [
      {title: 'Problem framing, statistics, and data preparation'},
      {title: 'Exploratory analysis and feature engineering'},
      {title: 'Regression and classification workflows'},
      {title: 'Validation, imbalance, overfitting, and tuning'},
      {title: 'Ensembles, clustering, and anomaly detection'},
      {title: 'Neural networks and transfer learning'},
      {title: 'NLP, embeddings, and document Q&A'},
      {title: 'Serving, containerization, deployment, and monitoring'},
      {title: 'Responsible AI audit and model documentation'},
      {title: 'Capstone demonstration and final examination'}
    ],
    assessment: ['A comprehensive final examination covering theoretical and practical knowledge.', 'A timed practical exercise applying the model-development workflow.', 'An end-to-end capstone project delivered with a live demonstration and repository.'],
    completion: ['Meet the cohort’s attendance threshold.', 'Achieve the required minimum final score.', 'Submit and present the final practical project.', 'Receive a certificate after completing the final exam and required practical components.']
  },
  {
    slug: 'ai-viber',
    name: 'AI Viber',
    goal: 'Equip developers to use AI-assisted engineering methods to specify, build, test, secure, and improve modern software products while retaining human engineering judgment.',
    delivery: '32 hours · Online training · 16 sessions',
    learningApproach: 'Participants carry one small software product through specification, working implementation, extension, documentation, and handover, with strong emphasis on review and recovery from agent errors.',
    outcomes: [
      'Use AI coding assistants with effective prompts and managed context.',
      'Turn acceptance criteria into a specification-driven development workflow.',
      'Review, debug, test, and recover generated code safely.',
      'Integrate an AI-powered capability with guardrails and evaluation.',
      'Create a production-style quality gate for security and maintainability.'
    ],
    theory: ['AI coding assistants', 'Prompting and context engineering', 'Specification-driven development and agentic workflows', 'Application and API integration', 'Code review, debugging, and existing codebases', 'Testing, security, quality, documentation, and handover'],
    practical: [
      'Build a working application feature end-to-end with an AI coding assistant.',
      'Set up automated tests, static analysis, and security scanning in continuous integration.',
      'Integrate an AI-powered feature with guardrails and evaluation.',
      'Complete three project milestones: specification, core implementation, and documented extension.',
      'Demonstrate a deployable product and complete a timed repository exercise.'
    ],
    prerequisites: ['Programming fundamentals in any modern language.', 'Basic Git, command-line, HTTP, JSON, and API familiarity.', 'A computer with at least 8 GB RAM and permission to install software.', 'Stable internet, an IDE such as Visual Studio Code, GitHub, and a Node.js or Python runtime.', 'No previous machine-learning experience is required.'],
    tools: ['An AI coding assistant', 'Visual Studio Code or another IDE', 'Git and GitHub', 'Node.js or Python', 'Automated testing and CI', 'Static analysis and security scanning', 'Local/offline model route where access is restricted'],
    sessions: [
      {title: 'Block 1 · Setup, safe use, and specification', detail: 'Sessions 1–3 · 6 hours'},
      {title: 'Block 2 · Scaffold and core implementation', detail: 'Sessions 4–8 · 10 hours; includes code review, integration, and failure recovery.'},
      {title: 'Block 3 · Quality and product extension', detail: 'Sessions 9–14 · 12 hours; testing, debugging, documentation, security, deployment, and handover.'},
      {title: 'Block 4 · Demonstration and final examination', detail: 'Sessions 15–16 · 4 hours'}
    ],
    assessment: ['Project and demonstration: 50% of the final grade.', 'Timed practical exercise on an unseen repository: 20%.', 'Automatically scored 45-item knowledge examination: 30%.', 'Project quality is checked across specification, working features, verification, security, maintainability, and handover.'],
    completion: ['Attend at least 13 of 16 sessions.', 'Achieve at least 70% overall and at least 50% in both practical and knowledge components.', 'Pass all three project milestones and publish the demonstration.', 'Complete at least 10 of 15 session questionnaires.', 'Receive a joint IEEE Computer Society Region 8 and AI Caravan certificate.']
  },
  {
    slug: 'ai-administrator',
    name: 'AI Administrator',
    goal: 'Enable administrators and operations professionals to design useful, controlled, no-code AI automations that connect tools, information, decisions, and human approval.',
    delivery: '28 hours · Live online training · 14 sessions',
    learningApproach: 'Interactive instruction and guided labs built around a no-code workflow platform, practical workplace processes, and a supervised capstone.',
    outcomes: [
      'Map current and future-state processes and identify suitable automation opportunities.',
      'Build no-code workflows that connect at least three workplace tools.',
      'Add AI capabilities, retrieval, and agent behavior to a workflow.',
      'Design human approval, permissions, audit logs, monitoring, and recovery.',
      'Operate AI automation responsibly with privacy, security, and cost controls.'
    ],
    theory: ['Workflow mapping and automation patterns', 'AI automation and agent fundamentals', 'Connecting tools, APIs, information, MCP, and RAG', 'Human-in-the-loop controls and oversight', 'Privacy, PII, least privilege, and prompt-injection awareness', 'Evaluation, monitoring, failure recovery, cost, governance, and change'],
    practical: ['Map a real organizational process.', 'Build an n8n automation spanning at least three tools.', 'Add an AI step to classify, summarize, draft, or route work.', 'Build a capstone agent workflow with approval and an audit log.', 'Complete a one-page risk assessment for the deployed workflow.'],
    prerequisites: ['Comfort using common digital workplace tools.', 'No coding or prior AI experience is required.', 'A computer, modern browser, stable internet connection, and access to common collaboration tools.'],
    tools: ['n8n', 'ChatGPT, Claude, or Copilot', 'Google Workspace or Microsoft 365', 'Slack or Microsoft Teams', 'Miro or draw.io', 'Optional Make, Zapier, OpenClaw, or Hermes'],
    sessions: [
      {title: '1 · Foundations of agents and automation'}, {title: '2 · Prompting for operators'}, {title: '3 · Current-state workflow mapping'}, {title: '4 · Future-state design and risk'},
      {title: '5 · Automation basics'}, {title: '6 · Adding AI'}, {title: '7 · Connectors, APIs, MCP, and RAG'}, {title: '8 · Building an agent'},
      {title: '9 · Multi-step and multi-agent workflows'}, {title: '10 · Controls, approval, and audit'}, {title: '11 · Security and governance'},
      {title: '12 · Monitoring, cost, and adoption'}, {title: '13 · Capstone build'}, {title: '14 · Final examination'}
    ],
    assessment: ['A 40-question, 60-minute proctored knowledge examination.', 'A 60-minute practical exercise mapping a process and building an approval workflow in n8n.', 'The practical component contributes 40% of the final grade.'],
    completion: ['Attend at least 80% of sessions.', 'Achieve at least 70% overall.', 'Submit the final workflow project and risk assessment.', 'Receive a certificate after completing the examination and practical requirements.']
  },
  {
    slug: 'ai-junior',
    name: 'AI Junior',
    goal: 'Introduce school students to artificial intelligence through safe, age-appropriate explanations, creative challenges, and guided projects that build confidence and curiosity.',
    delivery: '24 hours · Online training',
    learningApproach: 'Friendly explanations, guided exercises, no-code labs, and creative project work. No prior AI or programming experience is required.',
    outcomes: ['Explain core AI and machine-learning ideas in accessible language.', 'Recognize common AI applications in everyday life.', 'Create a simple no-code AI model and a basic chatbot.', 'Use AI creatively for art, music, or storytelling.', 'Apply safe, ethical, and responsible-use practices.'],
    theory: ['AI foundations and everyday applications', 'Creative problem solving with AI', 'Safe and responsible AI use', 'Machine-learning basics', 'Neural-network concepts', 'How chatbots and creative AI systems work'],
    practical: ['Train a simple model with Teachable Machine.', 'Create and test a basic chatbot.', 'Complete a guided AI art, music, or storytelling activity.', 'Design and present a final creative AI project.'],
    prerequisites: ['Curiosity and basic computer skills.', 'Basic web-browser and email familiarity.', 'A computer with a modern browser and stable internet connection.', 'No prior AI or programming knowledge is required.'],
    tools: ['Teachable Machine', 'Browser-based chatbot tools', 'Age-appropriate creative AI tools', 'Presentation and collaboration tools'],
    sessions: [
      {title: 'Discovering AI', detail: 'What AI is, where students encounter it, and what it can and cannot do.'},
      {title: 'Learning from data', detail: 'Friendly machine-learning and neural-network foundations.'},
      {title: 'Build a no-code model', detail: 'Collect examples, train, test, and improve.'},
      {title: 'Chatbots and creative AI', detail: 'Conversation, art, music, and storytelling activities.'},
      {title: 'Safe and responsible AI', detail: 'Privacy, fairness, verification, and positive use.'},
      {title: 'Final project and examination', detail: 'Present a creative project and complete the assessment.'}
    ],
    assessment: ['A 30-question proctored online knowledge examination.', 'A guided practical task building a simple model or chatbot.', 'The practical component contributes 40% of the final grade.'],
    completion: ['Attend at least 80% of scheduled sessions.', 'Achieve at least 70% overall.', 'Submit and present the final creative project.', 'Receive a certificate after completing the exam and practical requirements.']
  }
];

export function getTrackCurriculum(slug?: string) {
  return trackCurricula.find(track => track.slug === slug);
}
