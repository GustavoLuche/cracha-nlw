const LinksSocialMedia = {
  github: 'gustavoluche',
  youtube: '/channel/UCzL1F2tZ-8iXV5qQe42o7-Q',
  facebook: 'gustavo.luche.9',
  instagram: 'gustavo_luche',
  twitter: 'gluche08'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLink.textContent = data.login
    })
}

getGitHubProfileInfos()
