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
    --image "nodehello:{{.Run.ID}}" `
    --context "https://github.com/mgrabarz/ACR-Features-Demo#:build-tasks" `
    --branch "master" `
    --file "dockerfile" `
    --git-access-token ~~PAT_HERE~~
    ```

    Test run your task.

    ```
    az acr task run --registry acrfeaturesdemo --name oncommit
    ```