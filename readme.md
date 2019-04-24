> Author: [Marek Grabarz](https://linkedin.com/in/grabarz)

This repository demonstrates advanced features of ACR (Azure Container Registry).

1. **Quick ACR build**

   ``
   az acr build --registry acrfeaturesdemo --image nodehello:v1 .\build-tasks\
   ``
2. **ACR build task on commit**

    Generate token under: https://github.com/settings/tokens/new

    Create build definition:

    ```
    az acr task create `
    --registry "acrfeaturesdemo" `
    --name "oncommit" `
    --image "node-base:stable" `
    --context "https://github.com/mgrabarz/ACR-Features-Demo#:build-tasks" `
    --branch "master" `
    --file "dockerfile-v2-base" `
    --git-access-token ~~PAT_HERE~~
    ```

    Test run your task.

    ```
    az acr task run --registry acrfeaturesdemo --name oncommit
    ```
    Test run on commit.

3. **ACR build task on base update**

    Create build definition:

    ```
    az acr task create `
    --registry "acrfeaturesdemo" `
    --name "onbaseupdate" `
    --image "nodehello:{{.Run.ID}}" `
    --arg "REGISTRY_NAME=acrfeaturesdemo.azurecr.io" `
    --context "https://github.com/mgrabarz/ACR-Features-Demo#:build-tasks" `
    --file "dockerfile-v2-app" `
    --branch "master" `
    --git-access-token ~~PAT_HERE~~
    ```

4. **ACR multistep build task**

    Run build:

    ```
    az acr run --registry acrfeaturesdemo  -f .\build-tasks\multistep.yaml https://github.com/mgrabarz/ACR-Features-Demo#:build-tasks
    ```