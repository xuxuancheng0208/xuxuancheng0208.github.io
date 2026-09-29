export const papers = [
  {
    "id": "physforce",
    "title": "PhysForce: Physics-aware Force Control for Interactive Video World Model",
    "image": "/images/papers/physforce-method.png",
    "venue": "ICLR 2027",
    "authors": "Xuancheng Xu, Xiaofeng Wang, Yue Ma, Zheng Zhu, Bing-Kun Bao",
    "links": [
      {
        "label": "Project page",
        "url": "https://physforceproject.github.io/"
      }
    ],
    "description": [
      "PhysForce integrates supervised fine-tuning and physics-aware reinforcement learning for force-controlled interactive video generation. Its Latent Force Intervention Encoder and Physics Attribution Network connect applied forces to localized physical responses."
    ],
    "year": "2026",
    "abstract": "Interactive video world models aim to predict how visual environments evolve in response to user interventions, including physically consistent state changes induced by applied forces. Existing methods often represent forces as motion trajectories, which may introduce inappropriate motion priors, causing the model to over-rely on encoded displacement patterns. More fundamentally, the model’s internal representations do not reliably localize force-induced state changes, making it difficult to associate applied forces with their resulting physical responses. Also, limited force-annotated data make it difficult to produce physically consistent and temporally stable predictions in unseen scenarios. To address these limitations, we propose PhysForce, a two-stage framework that integrates supervised fine-tuning and reinforcement learning through three complementary components. During supervised fine-tuning, (1) the Latent Force Intervention Encoder maps force location, direction, and magnitude into the video latent space without exposing future motion; and (2) the Physics Attribution Network associates force interventions with localized changes in the latent state, strengthening the learning of physical responses to applied forces. During reinforcement learning, (3) Physics-Aware Reinforcement Learning uses self-supervised rewards on out-of-distribution videos to improve physical consistency and generalization. Extensive experiments show that PhysForce improves force responsiveness, physical consistency, and generalization, demonstrating its effectiveness for interactive video world models. Our anonymous project page is available at https://physforceproject.github.io/.",
    "venueType": "submission",
    "ccf": "A",
    "reviewStatus": "Under review"
  },
  {
    "id": "giga-world-1",
    "title": "GigaWorld-1: A Roadmap to Build World Models for Robot Policy Evaluation",
    "image": "/images/papers/giga-world-1.png",
    "venue": "Technical Report",
    "authors": "GigaAI Team (Xuancheng Xu is a co-first author and core contributor)",
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/pdf/2607.02642"
      },
      {
        "label": "Project page",
        "url": "https://open-gigaai.github.io/giga-world-1/"
      },
      {
        "label": "Code",
        "url": "https://github.com/open-gigaai/giga-world-1"
      }
    ],
    "description": [
      "Responsible for training the action-conditioned video foundation model in GigaWorld-1, as well as fine-tuning downstream tasks.",
      "GigaWorld-1 is a 1.3B/5B-parameter autoregressive diffusion-transformer world model designed specifically for robot policy evaluation. It generates simulated robot rollout videos and is adapted with parameter-efficient LoRA fine-tuning so that it can better predict whether different robot policies are likely to succeed or fail. "
    ],
    "year": "2026",
    "abstract": "Evaluating embodied robot foundation models remains a critical bottleneck; unlike large language models efficiently assessed via digital benchmarks, robotic policies require slow, costly real-world rollouts limited by hardware and human supervision, which has driven interest in world models as surrogate policy evaluators, yet the key properties that make a world model reliable for policy assessment remain poorly understood. This work presents a systematic study of world models for robotic policy evaluation and introduces WMBench, a benchmark constructed from real-robot teleoperation data and matched policy rollouts covering diverse manipulation tasks to enable controlled comparisons across model families, action encodings, rollout horizons, and evaluation metrics. Using WMBench, we analyze 7 video world models, 4 action representation schemes, and over 324,000 simulated policy rollouts paired with real robot executions, further enriching our analysis with large-scale community submissions from the CVPR 2026 GigaBrain Challenge, curated synthetic trajectories, and a training videos spanning more than 12,000 hours. Our experiments deliver three core insights: evaluator quality is dominated by long-horizon, action-faithful rollout consistency rather than short-term visual realism; pretraining gains stem not only from data scale but from balancing general world knowledge with robot-specific controllability; and architectural choices including action encoding, memory design, and evaluator-focused post-training strongly determine alignment with real-world robot behavior. Drawing on these results, we derive a practical design roadmap and realize it in GigaWorld-1, a world model specially optimized for policy evaluation, and we fully release our code, models, datasets, and toolkits to advance scalable evaluation research for embodied foundation models.",
    "venueType": "project",
    "reviewStatus": "Under review at Nature Machine Intelligence"
  },
  {
    "id": "smrabooth",
    "title": "SMRABooth: Subject and Motion Representation Alignment for Customized Video Generation",
    "image": "/images/papers/SMRABooth.png",
    "venue": "CVPR 2026",
    "authors": "Xuancheng Xu, Yaning Li, Sisi You, Bing-Kun Bao",
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2512.12193"
      },
      {
        "label": "Project page",
        "url": "https://smrabooth.github.io/"
      },
      {
        "label": "Code",
        "url": "https://github.com/xuxuancheng0208/SMRABooth"
      }
    ],
    "description": [
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2026",
      "We explore the application of representation alignment in video customization and demonstrate significant performance improvements across various baselines."
    ],
    "year": "2026",
    "abstract": "Customized video generation aims to produce videos that faithfully preserve the subject’s appearance from reference images while maintaining temporally consistent motion from reference videos. Existing methods struggle to ensure both subject appearance similarity and motion pattern consistency due to the lack of object-level guidance for subject and motion. To address this, we propose SMRABooth, which leverages the self-supervised encoder and optical flow encoder to provide object-level subject and motion representations. These representations are aligned with the model during the LoRA fine-tuning process. Our approach is structured in three core stages: (1) We exploit subject representations via a self-supervised encoder to guide subject alignment, enabling the model to capture overall structure of subject and enhance high-level semantic consistency. (2) We utilize motion representations from an optical flow encoder to capture structurally coherent and object-level motion trajectories independent of appearance. (3) We propose a subject-motion association decoupling strategy that applies sparse LoRAs injection across both locations and timing, effectively reducing interference between subject and motion LoRAs. Extensive experiments show that SMRABooth excels in subject and motion customization, maintaining consistent subject appearance and motion patterns, proving its effectiveness in controllable video generation.",
    "venueType": "conference",
    "ccf": "A"
  },
  {
    "id": "disco-lora",
    "title": "Disco-LoRA: Disentangled Composition of Content, Style, and Motion for Multi-concept Video Customization",
    "image": "/images/papers/Disco-LoRA.png",
    "venue": "ACM MM 2026",
    "authors": "Xuancheng Xu, Gengyun Jia, Bing-Kun Bao",
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/pdf/2606.26668"
      },
      {
        "label": "Project page",
        "url": "https://xuxuancheng0208.github.io/discolora_page/"
      }
    ],
    "description": [
      "ACM International Conference on Multimedia (MM) 2026",
      "We pioneer the task of multi-concept video customization by systematically categorizing content, style, and motion, and establish a comprehensive benchmark comprising four distinct tasks to evaluate this capability. Furthermore, we introduce a novel framework to effectively disentangle and recombine diverse concepts from data."
    ],
    "year": "2026",
    "abstract": "Video customization based on Text-to-Video (T2V) models aims to learn specific features from reference data to generate controllable videos. While significant strides have been made in image stylization and video motion customization, simultaneously controlling multiple concepts, such as content, style, and motion, remains a major challenge. In this work, we systematically define the task of multi-concept video customization, which requires the joint control of content, style, and motion. To facilitate research in this area, we construct a comprehensive benchmark and propose Disco-LoRA, a unified framework designed to tackle this problem by disentangling and flexibly recombining different concepts in two stages: (1) We decompose the objective into two sub-tasks: Content-Style and Content-Motion. Each sub-task is addressed using our Iterative Dual-LoRA Disentanglement Framework, which effectively disentangles distinct concepts within the data. (2) We identify layer-wise weight trends as crucial for LoRA identity, while weight magnitudes dictate composability. To harmonize these scales, we propose a Z-score-based statistical regularization that aligns weight distributions, preserving layer-wise trends while minimizing interference between different LoRAs. Extensive experiments show that Disco-LoRA excels in multi-concept video customization, effectively preserving appearance, style, and motion for controllable text-to-video generation. Our project page is available at https://xuxuancheng0208.github.io/discolora_page/.",
    "venueType": "conference",
    "ccf": "A"
  },
  {
    "id": "clgc",
    "title": "CLGC: Continuous Layout Guidance for Consistent Text-to-Video Editing",
    "image": "/images/papers/CLGC.png",
    "venue": "ICME 2025",
    "authors": "Xuancheng Xu, Ming Tao, Bing-Kun Bao",
    "links": [
      {
        "label": "Paper",
        "url": "https://ieeexplore.ieee.org/document/11210198"
      }
    ],
    "description": [
      "IEEE International Conference on Multimedia & Expo (ICME) 2025 [Oral]",
      "We propose CLGC, a novel framework that leverages layout guidance for consistent and efficient video editing."
    ],
    "year": "2025",
    "abstract": "Text-to-Video (T2V) editing aims to produce temporally consistent videos aligned with text prompts, simultaneously reconstructing the original spatial structure. Existing methods rely on cross-attention maps generated from fixed text prompts, which lack sufficient spatial information, leading to inaccurate object positioning across frames. Additionally, existing methods only rely on the first or former frame to synthesize the current frame, offering limited viewpoint information and causing flickering artifacts. To address these issues, we propose CLGC, a training-free framework for continuous layout-guided T2V editing. First, we introduce semantic masks for continuous object position layout guidance, refining cross-attention maps and ensuring accurate object positioning across frames. Second, we adaptively integrate extra reference frames into the self-attention for the current frame synthesis, enhancing temporal consistency in the edited video. Finally, we integrate parallel null-text inversion to improve DDIM sampling, achieving accurate reconstruction results. Extensive experiments demonstrate that CLGC excels at attribute editing and shape transformation, confirming its effectiveness in T2V editing.",
    "venueType": "conference",
    "ccf": "B",
    "distinction": "Oral"
  }
];
