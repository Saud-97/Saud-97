const path = require("path");
const fetch = require("node-fetch");
const fs = require("fs");

let stars = 0,
  page = 1;

let special;

const CountStars = async () => {
  let StarsData = await fetch(
    `https://api.github.com/users/Saud-97/starred?per_page=100&page=${page}`
  ).then((res) => res.json());
  stars += StarsData.length;
  page++;
  if (StarsData.length === 100) CountStars();
  else WriteReadMe();
};

const WriteReadMe = async () => {
  //Get ReadMe path
  const ReadMe = path.join(__dirname, "..", "README.md");
  const date = new Date();
  
  //Season Based Emoji
  let dd = date.getDate(), mm = date.getMonth() + 1
  
  if(mm === 12)special = ["⛄", "❄", "🎄"]

  //Fetching Info From Github API 
  let UserData = await fetch("https://api.github.com/users/Saud-97").then(
    (res) => res.json()
  );

  //Creating the text what we gonna save on ReadMe file
  const text = `
  
   ![visitors](https://visitor-badge.laobi.icu/badge?page_id=saud-97.saud-97)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

<p align="center">
  <a href="#">
    <img align="center" src="https://readme-typing-svg.herokuapp.com?color=FFFFFF&center=true&vCenter=true&width=600&height=100&lines=Hi+there!;My+name+is+Saud.;I+am+a+Full+Stack+Developer+from+Saudi+Arabia." />
  </a>
  <br>
</p>

<h1></h1>

<h2 align="center"> ${special?special[0]:"✨"} About Me ${special?special[0]:"✨"}</h2>


\`\`\`python
#!/usr/bin/python
# -*- coding: utf-8 -*-


class AboutMe:

    def __init__(self):
        self.name = "Saud Aljaffer"
        self.role = "Computer Scientest and Information Security Analyst"
        self.languages_spoken = ["Arabic", "English"]
        self.programming_languages: ["Javascript/Typescript", "Python", "C#", "Kotlin", "Java", "Bash"],
        self.opened_issues: {{ ISSUES }},
        self.opened_pull_requests: {{ PULL_REQUESTS }},
        self.total_commits: {{ COMMITS }},
        self.stars: ${stars},
        self.repositories: { created: {{ REPOSITORIES }}, contributed: {{ REPOSITORIES_CONTRIBUTED_TO }} },
        
    def say_hi(self):
        print("Thanks for visiting my github profile. Have a great day ahead!")

me = AboutMe()
me.say_hi()
\`\`\`


<h2 align="center"> ${special?special[0]:"✨"} Contact Me ${special?special[0]:"✨"}</h2>

<p align="center">
  Discord: S97#6758
</p>


<h2 align="center"> ${special?special[0]:"✨"} Technologies & Tools ${special?special[0]:"✨"}</h2>

![](https://img.shields.io/badge/OS-Windows-informational?style=flat&logo=windows&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Editor-Android_Studio-informational?style=flat&logo=android-studio&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Editor-VS_Code-informational?style=flat&logo=visual-studio-code&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Editor-Intellij_IDEA-informational?style=flat&logo=intellij-idea&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Code-Python-informational?style=flat&logo=python&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Code-CSharp-informational?style=flat&logo=go&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Code-Kotlin-informational?style=flat&logo=go&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Code-Java-informational?style=flat&logo=go&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Shell-Bash-informational?style=flat&logo=gnu-bash&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Tools-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Tools-Docker-informational?style=flat&logo=docker&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/Tools-Kubernetes-informational?style=flat&logo=kubernetes&logoColor=white&color=6aa6f8)
<h1></h1>
  

  
<h2 align="center"> ${special?special[1]:"🚀"} My Stats ${special?special[1]:"🚀"}</h2>
<p align="center">
<img src="https://github-readme-streak-stats-s97.herokuapp.com/?user=saud-97&theme=tokyonight">
</p>

  <p align="center">
 <img class="img" src="https://saud-97-github-readme-stats.vercel.app/api?username=saud-97&show_icons=true&theme=radical" />
</h3>
<h3 align="center">
 <img class="img" src="https://saud-97-github-readme-stats.vercel.app/api/top-langs/?username=saud-97&theme=radical&layout=compact" />
</h3>
  </p>
  
  <h1></h1>
<!-- Last updated on ${date.toString()} ;-;-->
<i>Last updated on ${date.getDate()}${
    date.getDate() === 1
      ? "st"
      : date.getDate() === 2
      ? "nd"
      : date.getDate() === 3
      ? "rd"
      : "th"
  } ${
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][date.getMonth()]
  } ${date.getFullYear()} using magic</i> ${special?special[2]:"✨"}`;

  //Saving on readme.md
  fs.writeFileSync(ReadMe, text);
};

(() => {
    CountStars();
})()
