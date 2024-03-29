const modal = document.getElementById('modal__container');
const openBtn = document.getElementById('btn__open');
const closeBtn = document.getElementById('btn__close');
const logo = document.getElementById('logo');
const title1 = document.getElementById('modal__titles1');
const title2 = document.getElementById('modal__titles2');
const title3 = document.getElementById('modal__titles3');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  logo.style.display = 'none';
  openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  openBtn.style.display = 'block';
  logo.style.display = 'block';
});

title1.addEventListener('click', () => {
  modal.style.display = 'none';
  logo.style.display = 'block';
  openBtn.style.display = 'block';
});
title2.addEventListener('click', () => {
  modal.style.display = 'none';
  openBtn.style.display = 'block';
  logo.style.display = 'block';
});
title3.addEventListener('click', () => {
  logo.style.display = 'block';
  openBtn.style.display = 'block';
  modal.style.display = 'none';
});

// popup window

const btnLive = 'See live';
const btnSource = 'See source';

const works = [
  {
    name: '4Learn app',
    cat: ['Project', 'Full-stack dev', 2023],
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/4learn.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://4-learn-website.vercel.app/', 'https://github.com/mhnazary/4Learn-website'],
  },
  {
    name: 'Math Magician',
    cat: ['Project', 'Full-stack dev', 2023],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['React', 'Redux'],
    snapshot: './images/math.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://math-magicians-theta.vercel.app/', 'https://github.com/mhnazary/math-magicians'],
  },
  {
    name: 'Air Polution',
    cat: ['Project', 'Full-stack dev', 2023],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['React', 'Redux'],
    snapshot: './images/air.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://react-capstone-project-chi.vercel.app/', 'https://github.com/mhnazary/air-polution-app'],
  },
  {
    name: 'Js Capstone',
    cat: ['Project', 'Full-stack dev', 2023],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/film.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],    connectionsURL: ['https://github.com/mhnazary/JS-Capstone', 'https://github.com/mhnazary/JS-Capstone'],
  },
];

const works2 = [
  {
    name: '4Learn app',
    cat: ['Project', 'Full-stack dev', 2023],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['React', 'Tailwind'],
    snapshot: './images/4learn.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://4-learn-website.vercel.app/', 'https://github.com/mhnazary/4Learn-website'],
  },
  {
    name: 'Math Magician',
    cat: ['Project', 'Full-stack dev', 2023],
    description:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['React', 'Redux'],
    snapshot: './images/math.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],    connectionsURL: ['https://math-magicians-theta.vercel.app/', 'https://github.com/mhnazary/math-magicians'],
  },
  {
    name: 'Air Polution',
    cat: ['Project', 'Full-stack dev', 2023],
    description:
    'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    tags: ['React', 'Redux'],
    snapshot: './images/air.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],    connectionsURL: ['https://react-capstone-project-chi.vercel.app/', 'https://github.com/mhnazary/air-polution-app'],
  },
  {
    name: 'Js Capstone',
    cat: ['Project', 'Full-stack dev', 2023],
    description:
    'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/film.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://github.com/mhnazary/JS-Capstone', 'https://github.com/mhnazary/JS-Capstone'],
  },
];

const bodyTag = document.querySelector('body');

function projectModal(e) {
  const docFragment = document.createDocumentFragment();
  const workCardInf = works[parseInt(e.target.dataset.workbtn, 10)];

  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('project-overlay-wrapper');

  const projectCtn = document.createElement('div');
  projectCtn.classList.add('project-overlay', 'work-card');

  const projecHeadingCtn = document.createElement('div');
  projecHeadingCtn.classList.add('work-title-container');

  const projectCloseBtn = document.createElement('span');
  projectCloseBtn.textContent = 'X';
  projectCloseBtn.classList.add('work-clase', 'work-title');

  const projectHeading = document.createElement('h2');
  projectHeading.textContent = workCardInf.name;
  projectHeading.classList.add('work-title');

  projecHeadingCtn.appendChild(projectHeading);
  projecHeadingCtn.appendChild(projectCloseBtn);
  docFragment.appendChild(projecHeadingCtn);

  const workCat = document.createElement('ul');
  workCat.classList.add('work-cat');
  for (let i = 0; i < workCardInf.cat.length; i += 1) {
    const catList = document.createElement('li');
    if (i === 0) catList.classList.add('cat-title');
    else catList.classList.add('cat-descrip');
    catList.textContent = workCardInf.cat[i];
    workCat.appendChild(catList);
  }
  docFragment.appendChild(workCat);

  const workImage = document.createElement('img');
  workImage.classList.add('work-image');
  workImage.src = workCardInf.snapshot;
  workImage.alt = `${workCardInf.name} Project, ${workCardInf.cat[2]}`;
  docFragment.appendChild(workImage);

  const workCardBody = document.createElement('div');
  workCardBody.classList.add('work-card-body');

  const workDescrip = document.createElement('p');
  workDescrip.classList.add('work-descrip');
  workDescrip.textContent = workCardInf.description;
  workCardBody.appendChild(workDescrip);

  docFragment.appendChild(workCardBody);

  const workCardFooter = document.createElement('div');
  workCardFooter.classList.add('work-title-footer');

  const workCardLangs = document.createElement('ul');
  workCardLangs.classList.add('work-langs');
  workCardInf.tags.forEach((tag) => {
    const langList = document.createElement('li');
    langList.classList.add('work-lang');
    langList.textContent = tag;
    workCardLangs.appendChild(langList);
  });

  const workCardBtnsCtn = document.createElement('div');
  workCardBtnsCtn.classList.add('work-btns');
  for (let i = 0; i < 2; i += 1) {
    const workCardBtnsLink = document.createElement('a');
    workCardBtnsLink.href = workCardInf.connectionsURL[i];
    workCardBtnsLink.target = '_blank';
    const workCardBtns = document.createElement('button');
    workCardBtns.classList.add('work-btn');
    const workCardBtnsText = document.createElement('span');
    workCardBtnsText.textContent = workCardInf.connectionstext[i];
    workCardBtns.appendChild(workCardBtnsText);
    const workCardBtnsImg = document.createElement('img');
    workCardBtnsImg.src = workCardInf.connectionsBtn[i];
    workCardBtnsImg.alt = workCardInf.connectionstext[i];
    workCardBtnsImg.classList.add('work-image');
    workCardBtns.appendChild(workCardBtnsImg);

    workCardBtnsLink.append(workCardBtns);
    workCardBtnsCtn.appendChild(workCardBtnsLink);
  }

  workCardFooter.appendChild(workCardLangs);
  workCardFooter.appendChild(workCardBtnsCtn);
  workCardBody.appendChild(workCardFooter);
  docFragment.appendChild(workCardBody);

  projectCtn.appendChild(docFragment);
  projectOverlay.appendChild(projectCtn);
  bodyTag.appendChild(projectOverlay);

  const closeBtn = document.querySelector('.work-clase');
  closeBtn.addEventListener('click', () => bodyTag.removeChild(projectOverlay));
}

function renderworks() {
  const docFragmentSd = document.createDocumentFragment();
  const docFragment = document.createDocumentFragment();
  const docFragementFinal = document.createDocumentFragment();

  const projectOverlay = document.createElement('ul');
  projectOverlay.classList.add('works');
  const introSection = document.querySelector('#intro');
  const workSection = document.createElement('section');
  workSection.classList.add('scroll', 'modal-bg');
  workSection.setAttribute('id', 'works');

  for (let i = 0; i < works2.length; i += 1) {
    const workCardInf = works2[i];
    const projectCtn = document.createElement('li');
    projectCtn.classList.add('work');

    const workImage = document.createElement('img');
    workImage.classList.add('work-image');
    workImage.src = workCardInf.snapshot;
    workImage.alt = `${workCardInf.name} Project, ${workCardInf.cat[2]}`;
    docFragmentSd.appendChild(workImage);

    const workCard = document.createElement('div');
    workCard.classList.add('work-card');

    const projectHeading = document.createElement('h2');
    projectHeading.textContent = workCardInf.name;
    projectHeading.classList.add('work-title');
    docFragment.appendChild(projectHeading);

    const workCat = document.createElement('ul');
    workCat.classList.add('work-cat');
    for (let i = 0; i < workCardInf.cat.length; i += 1) {
      const catList = document.createElement('li');
      if (i === 0) catList.classList.add('cat-title');
      else catList.classList.add('cat-descrip');
      catList.textContent = workCardInf.cat[i];
      workCat.appendChild(catList);
    }
    docFragment.appendChild(workCat);

    const workDescrip = document.createElement('p');
    workDescrip.classList.add('work-descrip');
    workDescrip.textContent = workCardInf.description;
    docFragment.appendChild(workDescrip);

    const workCardLangs = document.createElement('ul');
    workCardLangs.classList.add('work-langs');
    workCardInf.tags.forEach((tag) => {
      const langList = document.createElement('li');
      langList.classList.add('work-lang');
      langList.textContent = tag;
      workCardLangs.appendChild(langList);
    });
    docFragment.appendChild(workCardLangs);

    const workCardBtnsCtn = document.createElement('div');
    workCardBtnsCtn.classList.add('work-btns');
    const workCardBtns = document.createElement('button');
    workCardBtns.classList.add('work-btn');
    workCardBtns.textContent = 'See project';
    workCardBtns.setAttribute('data-workBtn', `${i}`);
    workCardBtnsCtn.append(workCardBtns);
    docFragment.appendChild(workCardBtnsCtn);
    workCard.append(docFragment);
    docFragmentSd.appendChild(workCard);
    projectCtn.appendChild(docFragmentSd);
    docFragementFinal.appendChild(projectCtn);
  }

  projectOverlay.appendChild(docFragementFinal);
  workSection.appendChild(projectOverlay);
  introSection.parentNode.insertBefore(workSection, introSection.nextSibling);
  const projectBtns = document.querySelectorAll('.work .work-btn');
  projectBtns.forEach((btn) => btn.addEventListener('click', projectModal));
}

window.addEventListener('load', renderworks);