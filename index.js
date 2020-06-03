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

  app.on('issues.opened', async context => {
    const repo = context.payload.repository.name
    var gitlabRepo = 'https://gitlab.com/nvidia/'
    if (repo in repos) {
      gitlabRepo = repos[repo]
    }

    const issueComment = context.issue({
      body: `Thanks for your contribution!
This repository is a read-only mirror of the following repository: ${gitlabRepo}
Do you mind opening a pull request against that repo?\n
Thanks!`
    })

    app.log('Issue created on repo:', repo)
    return context.github.issues.createComment(issueComment)
  })
}
