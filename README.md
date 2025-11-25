# EduProject: A Personal Knowledge Hub

This project is a personal educational website designed to provide clear, rigorous, and accessible learning materials on mathematics, physics, and informatics. It was developed with the assistance of an AI, and this document outlines both the ethical considerations of that process and how the project's structure is designed to support learners with difficulties.

---
## Table of Contents

- [Open Source and Free as in Freedom](#open-source-and-free-as-in-freedom)
- [The Ethics of AI in Development](#the-ethics-of-ai-in-development)
- [How This Project Helps with Learning Difficulties](#how-this-project-helps-with-learning-difficulties)
- [Deployment](#deployment)

---

## Open Source and Free as in Freedom

This project is proudly open source, licensed under the **GNU General Public License v3.0 or later (GPLv3+)**. This means that anyone is free to use, study, share, and improve the software.

Our choice of the GPLv3+ is a commitment to the principle of "free as in freedom." It ensures that this project, and any derivative works, will always remain open and accessible to everyone. We believe that knowledge should be a shared resource, and by using a strong copyleft license, we are protecting that freedom for all future users and contributors.

---

## The Ethics of AI in Development

The development of this project was a collaboration between a human developer and an AI assistant. This approach raises important ethical considerations regarding accountability, creativity, and the role of technology in our work.

Our philosophy is that **AI should be a tool, not a replacement for human judgment.** The AI was used to:
-   **Automate Repetitive Tasks:** Fixing broken links, standardizing page structures, and refactoring code.
-   **Accelerate Problem-Solving:** Identifying bugs, suggesting solutions, and explaining complex configurations.
-   **Generate Boilerplate:** Creating initial file structures and content placeholders.

However, every change made by the AI was reviewed, approved, and ultimately directed by the human developer. The final code, the architectural decisions, and the educational content are all the result of human oversight. This ensures that the AI's contributions are accurate, relevant, and aligned with the project's goals, maintaining full human accountability for the final product.

In the spirit of "Bàn tay ta làm nên tất cả/ Có sức người sỏi đá cũng thành cơm" (Our hands make everything/ With human effort, even stones can become rice), we believe that technology should empower, not replace, human creativity and effort.


---

## How This Project Helps with Learning Difficulties

This project is intentionally designed to be a supportive environment for learners who, like me, may face learning difficulties. The structure and features are chosen to reduce cognitive load and provide multiple ways to engage with the material.

### 1. Clear and Consistent Structure
Every page follows the same predictable layout: a navigation bar, a main content container, and a footer. This consistency means you don't have to re-learn how to navigate the site every time you visit a new section. You can focus on the content, not on figuring out where things are.

### 2. Interactive, Hands-On Learning
Static text and images are not always enough. This project uses interactive tools to make learning more engaging and intuitive:
-   **GeoGebra & PhET:** For math and physics, you can manipulate variables and see the results in real-time. This is invaluable for building a conceptual understanding that goes beyond memorizing formulas.
-   **Embedded Compilers:** For informatics, you can write and run code directly on the page. This immediate feedback loop makes it easier to experiment, make mistakes, and learn by doing.

### 3. Focused, "Bite-Sized" Content
Each page is organized into small, distinct sections with clear headings. This breaks down complex topics into manageable chunks, making it easier to process and retain information without feeling overwhelmed.

### 4. Accessible Foundation
The project is built with clean, semantic HTML and modern CSS. This provides a strong foundation for accessibility tools like screen readers and ensures that the acontent is available to the widest possible audience.

By combining AI as an ethical development partner and a thoughtful, user-centric design, this project aims to be a welcoming and effective space for all learners.

---
## Deployment

This website is designed to be deployed as a containerized application using Docker or Podman.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) or [Podman](https://podman.io/getting-started/installation) installed on your machine.

### Building the Image

1.  Clone this repository to your local machine.
2.  Navigate to the root directory of the project.
3.  Build the container image using the following command:

    ```bash
    docker build -t personal-knowledge-project .
    ```
    or for Podman users:
    ```bash
    podman build -t personal-knowledge-project .
    ```

### Running the Container

Once the image is built, you can run it as a container.

```bash
docker run -d -p 8080:80 --name personal-knowledge-project personal-knowledge-project
```
or for Podman users:
```bash
podman run -d -p 8080:80 --name personal-knowledge-project personal-knowledge-project
```
This command will:
- `-d`: Run the container in detached mode (in the background).
- `-p 8080:80`: Map port 8080 on your host machine to port 80 inside the container.
- `--name personal-knowledge-project`: Assign a name to the container for easy reference.

You can now access the website by navigating to `http://localhost:8080` in your web browser.

### Stopping and Starting the Container

- To **stop** the container:
  ```bash
  docker stop personal-knowledge-project
  podman stop personal-knowledge-project
  ```
- To **start** the container again:
  ```bash
  docker start personal-knowledge-project
  podman start personal-knowledge-project
  ```
- To **remove** the container:
  ```bash
  docker rm personal-knowledge-project
  podman rm personal-knowledge-project
  ```

---
## Inspiration for Networking
- Bringus studio
- Wolfgang's Channel
- Jeff Geerling
- Hardware Haven