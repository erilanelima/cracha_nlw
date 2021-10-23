const linksSocialMedia = {
  github: 'erilanelima',
  youtube: 'UCWVNCqIsuAOs6r5TsunT3SA',
  facebook: '',
  instragram: 'erilanesl',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
/* DOM Modelo de Objeto de Documento */
/*Boas práticas de nomes de variáveis:
 * camelCase
 * PascalCase
 * snake_case
 Também é importante os nomes estarem em inglês
 */

// ser humano ler 1234567891
// computador 0123456789

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userName.textContent = data.login
    })
}

getGitHubProfileInfos()

//ARROW FUNCTIONS É UMA FORMA CONTRAIDA DA FUNÇÃO, SENDO ELE ANÔMINA
