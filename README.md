# Tennora Landing Page
Frontend environment for Tennora.com using React, Next.js, and Tailwind. Hosted using Vercel.
# Directory Reference
---
```bash
tennora_landing_page
|-- app # Next.js root definition
|-- components # Contains common TypeScript snippets used by various pages (components) of Tennora.com
|   |-- contactForm
|   |-- contactPage
|   |-- demo
|   |-- footer
|   |-- pricingPage
|   |-- testimonialsPage
|   `-- ui
|-- lib # Common utils used by various UIs
|-- pages # UI Pages of Tennora.com that use components
|-- pictures # Common pictures utilized by the site
|   `-- profile
|-- public # Metadata for the site
`-- tennora_landing_page.git # Git hooks
    |-- hooks
    `-- info
```
# Example Dev Environment
---
### Requirements
```bash
-[x] VSCode
-[x] Docker
-[x] Git
```
### Directory Setup
```bash
Tennora
|-- tennora_landing_page # Cloned Git repository
|-- Dockerfile
`-- entrypoint.sh
```
#### Dockerfile
```docker
FROM ubuntu

# System dependencies
RUN apt update -y
RUN apt-get install -y curl vim iputils-ping

# Install Node
RUN curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN rm nodesource_setup.sh
RUN apt-get install -y nodejs
EXPOSE 3000

# Copy entrypoints
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ] # Comment this line to prevent auto startup
```
#### Entrypoint
```bash
#!/bin/bash

cd home/tennora
npm install
npm run build
npm run start
```
#### Startup commands
I suggest adding these as aliases to your ~/.bashrc or ~/.zshrc (separate or together)
##### Build
> docker build . -t ubuntu-node
##### Run
> docker run -it --rm --name="ubuntu-node" -v $DIR_REPO_PATH:/home/tennora -p 3000:3000 ubuntu-node
##### Example
> alias tennora-run="cd $DIR_PATH && docker build . -t ubuntu-node && docker run -it --rm --name="ubuntu-node" -v ./tennora_landing_page/:/home/tennora -p 3000:3000 ubuntu-node && cd ~-"