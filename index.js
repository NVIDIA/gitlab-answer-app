// Copyright (c) 2020, NVIDIA CORPORATION.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const repos = {
  'container-config': 'https://gitlab.com/nvidia/container-toolkit/container-config',
  'container-toolkit': 'https://gitlab.com/nvidia/container-toolkit/container-toolkit',
  'container-wiki': 'https://gitlab.com/nvidia/container-toolkit/wiki',
  'gpu-feature-discovery': 'https://gitlab.com/nvidia/kubernetes/gpu-feature-discovery',
  'gpu-monitoring-tools': 'https://gitlab.com/nvidia/container-toolkit/gpu-monitoring-tools',
  'gpu-operator': 'https://gitlab.com/nvidia/kubernetes/gpu-operator',
  'k8s-device-plugin': 'https://gitlab.com/nvidia/kubernetes/device-plugin',
  'libnvidia-container': 'https://gitlab.com/nvidia/container-toolkit/libnvidia-container',
  'nvidia-container-runtime': 'https://gitlab.com/nvidia/container-toolkit/container-runtime',
  'nvidia-docker': 'https://gitlab.com/nvidia/container-toolkit/nvidia-docker',
  'gitlab-answer': 'https://gitlab.com/nvidia/'
}
/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('pull_request.opened', async context => {
    const repo = context.payload.repository.name
    var gitlabRepo = 'https://gitlab.com/nvidia/'
    if (repo in repos) {
      gitlabRepo = repos[repo]
    }

    const issueComment = context.issue({
      body: `Hello There!

Thanks for your contribution!
This repository is a read-only mirror of the following repository: ${gitlabRepo}

Do you mind:
- [ ] Opening a pull request against that repo?
- [ ] Making sure your work is signed: https://help.github.com/en/github/authenticating-to-github/signing-commits

Thanks again!`
    })

    app.log('Issue created on repo:', repo)
    return context.github.issues.createComment(issueComment)
  })
}
