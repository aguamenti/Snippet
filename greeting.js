/*eslint no-undef: 0*/

const getDailyGreeting = (name) => {
  const hours = Number((new Date()).getHours());
  if (hours >= 0 && hours < 12) {
    return (`Good morning, ${name}.`);
  } else if (hours >= 12 && hours < 17) {
    return (`Good afternoon, ${name}.`);
  } else {
    return (`Good evening, ${name}.`);
  }
};

chrome.storage.sync.get('preferences', (currentStore) => {
  const currentPreferences = currentStore.preferences;
  if (currentPreferences.name === "") {
    const prompt = document.getElementById('prompt');
    prompt.classList.remove('hidden');
    const promptForm = document.getElementById('prompt-form');
    const promptInput = document.getElementById('prompt-input');

    promptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      currentPreferences.name = promptInput.value;
      chrome.storage.sync.set({preferences: currentPreferences}, ()=>{
        chrome.tabs.reload();
      });
    });
  } else {
    // const xSet = document.getElementsByClassName('X');
    // Array.from(xSet).forEach((x)=>{
    //   x.classList.add('hidden');
    // });
    // TODO Hide the divs that are false in the chrome storage preferences
    const greeting = document.getElementById('greeting');
    const greetingText = getDailyGreeting(currentPreferences.name);
    const greetingH2 = document.getElementById('greeting-h2');
    greeting.classList.remove('hidden');
    greetingH2.innerHTML = greetingText;
  }
});
