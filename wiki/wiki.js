document.addEventListener("DOMContentLoaded", function () {
  // Get emotion from URL or set default to "Happiness"
  const urlParams = new URLSearchParams(window.location.search);
  let emotion = urlParams.get("emotion") || "Happiness";
  displayEmotion(emotion);

  // Dropdown functionality for selecting emotions dynamically
  const emotionDropdown = document.getElementById("emotion-dropdown");
  if (emotionDropdown) {
    emotionDropdown.value = emotion;
    emotionDropdown.addEventListener("change", function () {
      displayEmotion(this.value);
    });
  }

  // Highlight active navigation link
  highlightActiveNav();
});

function displayEmotion(emotion) {
  const emotionTitle = document.getElementById("emotion-title");
  const emotionImage = document.getElementById("emotion-image");
  const emotionDescription = document.getElementById("emotion-description");
  const emotionAdvice = document.getElementById("emotion-advice");


  // Emotion descriptions
  const emotionDescriptions = {
    Happiness: "Happiness is the feeling of joy and satisfaction.",
    Interest: "Interest is the emotion of curiosity and engagement.",
    Anticipation: "Anticipation is the feeling of expecting something exciting.",
    Vigilance: "Vigilance is the heightened awareness of your surroundings.",
    Boredom: "Boredom is the state of disinterest and lack of stimulation.",
    Disgust: "Disgust is the repulsion towards something unpleasant.",
    Aversion: "Aversion is an intense dislike or opposition.",
    Trepidation: "Trepidation is a feeling of nervous hesitation.",
    Fear: "Fear is the emotion of sensing danger or threat.",
    Dread: "Dread is a deep feeling of impending doom.",
    Serenity: "Serenity is a state of inner peace and calm.",
    Ecstasy: "Ecstasy is intense happiness and bliss.",
    Anger: "Anger is the emotion of frustration and irritation.",
    Rage: "Rage is uncontrolled and overwhelming anger.",
    Fury: "Fury is extreme and destructive anger.",
    Melancholy: "Melancholy is a deep, reflective sadness.",
    Sadness: "Sadness is an emotional response to loss.",
    Affliction: "Affliction is intense suffering and sorrow.",
    Distraction: "Distraction is when your attention is scattered.",
    Surprise: "Surprise is a sudden, unexpected emotion.",
    Astonishment: "Astonishment is extreme surprise and awe.",
    Acceptance: "Acceptance is being open to experiences.",
    Trust: "Trust is confidence and security in others.",
    Admiration: "Admiration is deep respect for someone or something.",
    Aggressiveness: "Aggressiveness is the emotion of forceful action.",
    Contempt: "Contempt is a feeling of superiority and disdain.",
    Remorse: "Remorse is deep regret for past actions.",
    Upset: "Upset is emotional disturbance and frustration.",
    Scared: "Scared is a strong feeling of fear and anxiety.",
    Submission: "Submission is yielding to authority or influence.",
    Love: "Love is a deep feeling of affection and connection.",
    Upbeat: "Upbeat is a feeling of optimism and positivity.",
  };


  // Emotion advices <---
  const emotionAdvices = {
    Happiness: "To manage intense joy, it's helpful to accept and enjoy the moment without letting it overwhelm you. Practicing deep breathing and mindfulness can help you stay calm. Setting boundaries, taking breaks if necessary, and sharing your happiness with others helps you maintain emotional balance. Additionally, a healthy routine and exercise help you manage that energy positively.",
    Interest: " Interest is a positive emotion that motivates us to explore new ideas, activities, or people. To take advantage of it, it’s important to allow ourselves to follow our curiosity and delve into what truly attracts us. However, it’s crucial to balance interest with focus, so we don’t scatter our attention across too many things at once. Setting clear goals and taking time to research and learn can help us make the most of our interest productively. Moreover, sharing our concerns with others can also enrich our understanding and keep us motivated.",
    Anticipation: " Anticipation is an emotion that arises when we are expecting something that generates excitement, whether positive or negative. While it can be exciting, excessive anticipation can lead to anxiety. To manage it, it’s helpful to focus on the present moment and not let thoughts about the future overwhelm us. Practicing deep breathing or meditation can help calm the nerves. It’s also important to have realistic expectations and remember that, while the future is uncertain, we can adapt to whatever comes. Enjoying the process, rather than just waiting for the outcome, can make anticipation more bearable.",
    Vigilance: "Vigilance is an emotion that drives us to be alert and attentive to our surroundings, generally to protect ourselves from potential threats. While it is useful in risky situations, an excessive level of vigilance can lead to anxiety or stress. To manage it, it’s important to find balance, allowing ourselves to relax and trust that we are not constantly in danger. Techniques such as meditation, deep breathing, and mindfulness practice can help reduce tension and focus on the present. Learning to recognize when vigilance is unnecessary can also help us stay calm and avoid emotional burnout.",
    Boredom: "Boredom is a feeling of dissatisfaction that arises when we find no interest in what we are doing. To manage it, it’s useful to identify what causes the boredom and try to change our activity or environment. Exploring new hobbies, learning something new, or exercising can help reactivate both the mind and body. It’s also important to accept that boredom can be an opportunity to rest and reflect, which can foster creativity and self-awareness. Sometimes, allowing ourselves to be bored can be a healthy way to disconnect and recharge.",
    Disgust: ": Disgust is an emotion that drives us to reject something we find unpleasant or repulsive. To manage it, it’s helpful to take a moment to breathe and calm the physical reactions. Reflecting on why we feel disgusted can help us differentiate between a natural response and an exaggerated one. In some situations, we can try to gradually face what disgusts us to reduce its emotional impact. It’s also important to remember that although this emotion is natural, it doesn’t always have to influence our decisions or interactions with others.",
    Aversion: "Aversion is a negative emotion that arises when we feel dislike or rejection towards something or someone. To manage it, it’s important to recognize the emotion without letting it control our actions. Reflecting on the cause of the aversion can help us understand whether it’s based on prejudice or an irrational response. Practicing empathy and trying to see things from another perspective can also reduce this feeling. Additionally, learning to accept what we dislike, without the need to change it, can free us from aversion and allow us to have a more open mind.",
    Trepidation: "Trepidation is a natural response to uncertainty and the unknown. To manage it, it’s helpful to ground yourself in the present and focus on what you can control. Practicing relaxation techniques, such as deep breathing or mindfulness, can reduce the physical symptoms of anxiety. It’s also important to break down the source of your trepidation into manageable steps, addressing each part with a calm and rational approach. Talking to someone you trust can provide comfort and perspective, and reminding yourself that not all situations will turn out as badly as we fear can help alleviate unnecessary worry.",
    Fear: "Fear is a natural emotion, but it can be managed effectively with certain strategies. First, it's important to accept fear without judging it, as trying to ignore it can only increase anxiety. Deep breathing and muscle relaxation techniques help reduce physical tension. Additionally, challenging negative thoughts and focusing on what is real and tangible can decrease the perception of fear. Talking about fear with friends or a professional can provide a new perspective. Finally, gradually exposing yourself to the source of fear in small steps can help reduce it over time.",
    Dread: "Dread, although similar to fear, is usually more long-lasting and can affect our well-being if not managed properly. To control it, it's important first to recognize that dread does not define our ability to confront it. Talking about fears with someone you trust can alleviate them and provide a sense of support. It's also useful to adopt a mindset of acceptance, remembering that dread is simply an emotional response that can be managed. Practicing mindfulness or meditation techniques helps us focus on the present and reduce anxiety. Additionally, breaking down dread into smaller parts and addressing each calmly can make it easier to handle.",
    Serenity: "To maintain serenity, it's key to practice acceptance and being present in the moment. Deep breathing and mindfulness techniques help calm the mind. Maintaining a balanced routine, avoiding unnecessary stress, and spending time in nature also promote tranquility. Additionally, surrounding yourself with people who inspire calm and dedicating time to self-care allow you to consistently maintain serenity.",
    Ecstasy: "If you're referring to ecstasy as an intense emotion or state, it's important to maintain emotional balance through acceptance of what you feel, deep breathing, and mindfulness. Setting boundaries, taking breaks, and maintaining a healthy routine also help manage arousal, along with exercise and the support of trusted people.",
    Anger: "Anger is a powerful emotion that arises when we feel unfairly treated or frustrated. To manage it, it’s essential to recognize it quickly and take a step back before reacting. Breathing deeply, counting to ten, or taking a brief break can help calm the physical reaction of anger. Reflecting on the situation and understanding its underlying causes also allows us to approach it more rationally. Expressing feelings assertively, but not aggressively, and seeking solutions instead of focusing only on the problem, can transform anger into an opportunity to improve circumstances.",
    Rage: " Rage is an emotion that arises when we feel unfairly treated or frustrated by something or someone. To manage it, it’s useful to recognize the early signs of annoyance and take a moment to calm down before acting. Breathing deeply, practicing relaxation, or stepping away from the situation can be effective tools to reduce the intensity of annoyance. It’s also important to reflect on the underlying cause of the annoyance and try to address the issue constructively. Communicating feelings assertively, without aggression, can help resolve the situation positively.",
    Fury: "Fury is an intense emotion that arises when we feel deeply frustrated, irritated, or threatened. To manage it, it’s crucial to recognize the emotion before it takes control. Breathing deeply and taking a moment to calm the body and mind can help reduce the intensity of fury. Practicing self-compassion and reflecting on the underlying causes of anger is also important for better understanding it. Sometimes, expressing feelings constructively or removing ourselves from the situation can prevent fury from damaging our relationships or well-being. Over time, learning to manage fury healthily helps us stay calm in difficult situations.",
    Sadness: " Sadness is a natural emotion that arises when we face loss or difficulties. To manage it, it’s important to allow ourselves to feel it without rushing to get over it. Talking about what makes us sad with someone we trust can offer relief and understanding. Additionally, taking care of ourselves through activities that bring comfort, like listening to music or taking a walk, can help process sadness in a healthy way. Recognizing that sadness is temporary and a normal part of life helps us cope with it more patiently.",
    Affliction: "Affliction is a deep emotional response to a significant loss or pain. To manage it, it’s important to acknowledge and accept the pain rather than suppress it. Taking time to process the emotion and seeking support from friends, family, or a professional can alleviate the emotional burden. Practicing self-compassion and being patient with oneself is also crucial during this process. Over time, affliction can transform into an opportunity for personal growth and resilience.",
    Distraction: "Disappointment is an emotion that arises when our expectations are not met. To manage it, it’s important to allow ourselves to feel the emotion without judging ourselves. Reflecting on what went wrong and learning from the experience can help us grow. Talking to someone we trust can also provide comfort and perspective. Accepting that expectations are not always fulfilled helps us better adapt to future situations and move forward with a more positive attitude.",
    Surprise: "Surprise is an emotional reaction that arises when we encounter something unexpected. To manage it, the first step is to take a moment to process the information and regain composure. Deep breathing can help stabilize emotions before reacting. It’s important to accept surprise without judging it, as it is a natural response. Reflecting on the situation and, if possible, sharing it with others, can turn the surprise into a more pleasant and less bewildering experience",

    Astonishment: "Astonishment is an emotion that arises when we face something unexpected or impressive. Although it is a positive feeling, it can be overwhelming. To manage it, it's helpful to take a moment to process what is happening, breathing deeply to absorb the experience more calmly. Appreciating the moment and reflecting on what causes our astonishment can help us enjoy it without feeling overwhelmed. Additionally, sharing the experience with others can amplify the feeling and make it more meaningful.",
    Acceptance: "To master acceptance, it's essential to practice self-compassion and be aware that we all have imperfections. Accept your own mistakes and limitations without harsh judgment. In relationships, cultivate respect and understanding for differences, allowing people to be as they are. Practicing mindfulness and gratitude also helps you accept the present moment as it is, without resisting circumstances you cannot change.",
    Trust: "To master trust, it's essential to build it gradually, both in yourself and in others. Practice self-acceptance and honesty, staying true to your principles. In relationships, foster open communication and mutual respect, setting clear boundaries and showing consistency in your actions. Maintain realistic expectations and learn to trust without giving away completely, ensuring that trust is earned and maintained over time.",
    Admiration: "To control admiration, it's important to maintain a balanced perspective, recognizing the qualities you appreciate without idealizing the other person. Valuing their virtues in a healthy way and learning from them without losing your identity is key. Practice mutual respect, gratitude, and constructive admiration, without letting it turn into dependency or a source of insecurity. Also, remember that everyone has strengths and weaknesses, so maintaining a realistic outlook helps cultivate healthy admiration.",
    Aggressiveness: "Aggressiveness is an emotional response that manifests when we feel frustration, anger, or threat, and it can lead to hostile or harmful behavior. To manage it, it’s important to recognize the signs of aggressiveness before it turns into an impulsive reaction. Breathing deeply and taking a moment to calm down can help control the emotional response. Additionally, practicing assertive communication, rather than aggressive communication, allows us to express our needs respectfully. Seeking solutions instead of blaming others and learning to release tension through physical activities or meditation are also effective ways to reduce aggressiveness.",
    Contempt: " Contempt is a negative emotion that arises when we feel that something or someone does not deserve respect or consideration. To manage it, it’s important to reflect on the root of this feeling and question whether it’s based on prejudice or misunderstandings. Practicing empathy and trying to understand others’ circumstances can help reduce this emotion. It’s also useful to remember that contempt can damage our relationships, so it’s better to address it with patience and compassion. By cultivating tolerance and respect, we can overcome contempt and foster more positive interactions.",
    Remorse: "Remorse is an emotion that arises when we feel we have made a wrong decision or caused harm to others. To manage it, it’s important to accept responsibility for our actions without letting guilt consume us. Reflecting on what happened and learning from the experience can help us grow. Apologizing to those we have affected, if possible, can also alleviate the weight of remorse. Additionally, practicing self-care and being kind to ourselves allows us to move forward with a healthier and more constructive mindset.",
    Upset: "To manage feeling upset, it’s important to allow yourself to acknowledge and express the emotion without judgment. Taking a step back from the situation can give you time to cool down and gain perspective. Deep breathing, journaling your feelings, or talking to someone you trust can help you process the emotions. Finding a healthy outlet, such as physical activity or relaxation techniques, can also help you release tension and regain your emotional balance.",


    Scared: "To deal with fear, it’s important to breathe deeply and ground yourself in the present moment. Recognizing that fear is often temporary and manageable can help reduce its grip. Breaking down the source of fear into smaller, less intimidating parts can make it feel less overwhelming. Talking about your fears with someone can also provide reassurance and help you gain a new perspective on the situation.",
    Submission: "To manage submission in a healthy way, it's important to find a balance between respecting others and maintaining your own personal power. The key is to set clear boundaries, express your needs and desires honestly, and ensure that the decisions you make are based on your well-being. Submission shouldn't involve losing your autonomy or accepting situations that make you feel uncomfortable or devalued. Practice self-care, self-compassion, and open communication to ensure that any form of submission is consensual and respectful.",
    Love: "To manage love in a balanced way, it's important to practice self-acceptance and ensure your emotional needs are met. Maintain open and honest communication with the person you love, always respecting your boundaries and those of the other person. Cultivating trust, patience, and mutual understanding is key. Also, don't forget to take care of yourself and maintain a balance between your personal relationships and your individual well-being.",
    Upbeat: "To maintain an upbeat mood, focus on the positive aspects of your day and engage in activities that bring you joy. Surround yourself with positive influences, whether through uplifting people, music, or environments. Practicing gratitude daily helps you stay focused on the good things in your life. Taking care of your physical health, through exercise and proper rest, also helps keep your energy high and your mindset positive.",
  };

  // Update page content
  emotionTitle.textContent = emotion;
  emotionImage.src = `../resources/emotionsV2.0/${emotion}.png`;
  emotionDescription.textContent =
    emotionDescriptions[emotion] || "No description available.";
  emotionAdvice.textContent =
    emotionAdvices[emotion] || "No description available.";
}

// Function to return to the Emotion Selector
function goBack() {
  window.location.href = "../emotionSelector/emotionSelector.html";
}
