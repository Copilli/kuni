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
  const fullAdviceElement = document.getElementById("full-emotion-advice");

  // Emotion descriptions
  const emotionDescriptions = {
    Happiness: "Happiness is the feeling of joy and satisfaction. It often shows through smiling, good mood, and a sense of well-being.",
    Interest: "Interest is the emotion of curiosity and engagement. It draws attention to something meaningful or stimulating.",
    Anticipation: "Anticipation is the emotion of expecting something positive or exciting. It can increase motivation and focus.",
    Vigilance: "Vigilance is a heightened awareness of surroundings, often to stay alert to risks or responsibilities.",
    Boredom: "Boredom is a lack of interest or stimulation, leading to feelings of restlessness or frustration.",
    Disgust: "Disgust is a reaction of revulsion to something offensive, unpleasant, or toxic—physically or morally.",
    Aversion: "Aversion is a strong feeling of dislike or opposition toward something, often triggering avoidance.",
    Trepidation: "Trepidation is a state of nervousness or fear about something that might happen. It includes unease and worry.",
    Fear: "Fear is the response to a perceived danger or threat. It helps trigger protective or defensive behaviors.",
    Dread: "Dread is deep and persistent fear, often related to future harm or unpleasant situations.",
    Serenity: "Serenity is the calm, peaceful state of mind. It reflects inner balance and emotional stability.",
    Ecstasy: "Ecstasy is intense joy or pleasure that overwhelms the senses, often felt during deeply emotional or fulfilling experiences.",
    Anger: "Anger is a reaction to perceived injustice or frustration. It can lead to assertive or destructive behaviors.",
    Rage: "Rage is extreme anger that can become uncontrollable, often leading to aggression or impulsive actions.",
    Fury: "Fury is violent and intense anger, frequently resulting in destructive or harmful behavior.",
    Melancholy: "Melancholy is a deep and reflective sadness, sometimes linked to nostalgia or emotional fatigue.",
    Sadness: "Sadness is a response to loss or disappointment. It may lead to crying, withdrawal, and reduced energy.",
    Affliction: "Affliction is severe emotional or physical suffering, often caused by trauma or hardship.",
    Distraction: "Distraction is when attention is diverted from one task to another, reducing focus or awareness.",
    Surprise: "Surprise is the emotion caused by something unexpected. It can be positive, neutral, or negative.",
    Astonishment: "Astonishment is extreme surprise and amazement, usually triggered by something extraordinary.",
    Acceptance: "Acceptance is the ability to acknowledge and cope with reality, especially when it can't be changed.",
    Trust: "Trust is the confidence in someone or something. It allows openness, cooperation, and a sense of safety.",
    Admiration: "Admiration is a respectful emotion toward someone’s abilities, actions, or qualities.",
    Aggressiveness: "Aggressiveness is a tendency to confront forcefully. It can reflect assertiveness or uncontrolled hostility.",
    Contempt: "Contempt is a dismissive or scornful attitude toward someone perceived as inferior or unworthy.",
    Remorse: "Remorse is deep regret for a wrong action, often paired with a desire to make amends.",
    Upset: "Upset is emotional disturbance due to stress, disappointment, or conflict, blending sadness and frustration.",
    Scared: "Being scared is the emotional and physical reaction to a sudden or looming threat, real or imagined.",
    Submission: "Submission is yielding to the authority or influence of others, often without resistance or question.",
    Love: "Love is a deep, enduring feeling of affection, connection, and care for others or oneself.",
    Upbeat: "Upbeat is an optimistic, cheerful, and energetic mood, often boosting motivation and morale."
  };

  // Emotion advices <---
  const emotionAdvices = {
    Happiness: "Enjoy the moment and share it. Breathe deeply, stay grounded, and maintain a healthy routine to balance joy.",
    Interest: "Follow your curiosity with focus. Explore new topics but avoid distractions by setting small goals.",
    Anticipation: "Stay present. Manage expectations and reduce anxiety through breathing or mindfulness.",
    Vigilance: "Balance awareness with relaxation. Use meditation and trust that you’re not always in danger.",
    Boredom: "Try something new. Change your environment or routine to re-engage your mind and body.",
    Disgust: "Pause and reflect. Calm yourself with breathing, and assess if the reaction is justified.",
    Aversion: "Recognize and question your reaction. Practice empathy and try to stay open-minded.",
    Trepidation: "Break tasks into steps. Focus on what you can control and talk to someone you trust.",
    Fear: "Accept your fear. Use deep breathing and gradual exposure to reduce anxiety over time.",
    Dread: "Don’t face it alone. Break it down, talk about it, and remember dread is manageable.",
    Serenity: "Maintain calm with routines. Avoid stress and spend time in peaceful environments.",
    Ecstasy: "Ground yourself. Balance intense joy with rest, mindfulness, and sharing with others.",
    Anger: "Pause before reacting. Breathe, reflect, and express feelings assertively, not aggressively.",
    Rage: "Notice early signs. Step away, calm down, and seek constructive ways to respond.",
    Fury: "Calm your body. Reflect on causes, step back if needed, and express emotions safely.",
    Melancholy: "Acknowledge the feeling. Find small joys, talk to someone, and take care of yourself.",
    Sadness: "Let yourself feel. Cry if needed, talk it out, and rest. Seek help if it lingers.",
    Affliction: "Accept the pain. Reach out, be patient with yourself, and grow through the experience.",
    Distraction: "Refocus gently. Take breaks, minimize interruptions, and reconnect with your goals.",
    Surprise: "Pause and process. Take a breath, reflect on what happened, and respond calmly.",
    Astonishment: "Breathe and enjoy. Let the moment settle, share it, and appreciate the experience.",
    Acceptance: "Be kind to yourself. Embrace what you can’t change and practice mindfulness.",
    Trust: "Build it slowly. Be honest, reliable, and set healthy boundaries.",
    Admiration: "Appreciate others without idealizing. Learn from them, but stay true to yourself.",
    Aggressiveness: "Recognize triggers. Use deep breaths, speak respectfully, and release tension healthily.",
    Contempt: "Challenge your judgment. Practice empathy and treat others with respect.",
    Remorse: "Learn from it. Apologize, grow, and treat yourself with compassion.",
    Upset: "Take space to cool down. Reflect, express your feelings, and reset.",
    Scared: "Ground yourself. Breathe, talk to someone, and take small steps toward facing the fear.",
    Submission: "Set boundaries. Respect others, but stand up for your needs.",
    Love: "Balance care and boundaries. Communicate openly and maintain your well-being.",
    Upbeat: "Celebrate small wins. Surround yourself with positivity and stay active."
  };
  

  // Full Emotion advices <---
  const fullEmotionAdvices = {
    "Happiness": "To manage intense joy, it's helpful to accept and enjoy the moment without letting it overwhelm you. Practicing deep breathing and mindfulness can help you stay calm. Setting boundaries, taking breaks if necessary, and sharing your happiness with others helps you maintain emotional balance. Additionally, a healthy routine and exercise help you manage that energy positively.",
    "Interest": "Interest is a positive emotion that motivates us to explore new ideas, activities, or people. To take advantage of it, it’s important to allow ourselves to follow our curiosity and delve into what truly attracts us. However, it’s crucial to balance interest with focus, so we don’t scatter our attention across too many things at once. Setting clear goals and taking time to research and learn can help us make the most of our interest productively. Moreover, sharing our concerns with others can also enrich our understanding and keep us motivated.",
    "Anticipation": "Anticipation is an emotion that arises when we are expecting something that generates excitement, whether positive or negative. While it can be exciting, excessive anticipation can lead to anxiety. To manage it, it’s helpful to focus on the present moment and not let thoughts about the future overwhelm us. Practicing deep breathing or meditation can help calm the nerves. It’s also important to have realistic expectations and remember that, while the future is uncertain, we can adapt to whatever comes. Enjoying the process, rather than just waiting for the outcome, can make anticipation more bearable.",
    "Vigilance": "Vigilance is an emotion that drives us to be alert and attentive to our surroundings, generally to protect ourselves from potential threats. While it is useful in risky situations, an excessive level of vigilance can lead to anxiety or stress. To manage it, it’s important to find balance, allowing ourselves to relax and trust that we are not constantly in danger. Techniques such as meditation, deep breathing, and mindfulness practice can help reduce tension and focus on the present. Learning to recognize when vigilance is unnecessary can also help us stay calm and avoid emotional burnout.",
    "Boredom": "Boredom is a feeling of dissatisfaction that arises when we find no interest in what we are doing. To manage it, it’s useful to identify what causes the boredom and try to change our activity or environment. Exploring new hobbies, learning something new, or exercising can help reactivate both the mind and body. It’s also important to accept that boredom can be an opportunity to rest and reflect, which can foster creativity and self-awareness. Sometimes, allowing ourselves to be bored can be a healthy way to disconnect and recharge.",
    "Disgust": "Disgust is an emotion that drives us to reject something we find unpleasant or repulsive. To manage it, take a moment to breathe and calm physical reactions. Reflecting on the cause can help determine whether it’s a necessary response. Gradual exposure or empathy may reduce its impact, especially in social or cultural contexts.",
    "Aversion": "Aversion is a negative emotion that arises when we feel dislike or rejection towards something or someone. To manage it, it’s important to recognize the emotion without letting it control our actions. Reflecting on the cause of the aversion can help us understand whether it’s based on prejudice or an irrational response. Practicing empathy and trying to see things from another perspective can also reduce this feeling. Additionally, learning to accept what we dislike, without the need to change it, can free us from aversion and allow us to have a more open mind.",
    "Trepidation": "Trepidation is a natural response to uncertainty and the unknown. To manage it, it’s helpful to ground yourself in the present and focus on what you can control. Practicing relaxation techniques, such as deep breathing or mindfulness, can reduce the physical symptoms of anxiety. It’s also important to break down the source of your trepidation into manageable steps, addressing each part with a calm and rational approach. Talking to someone you trust can provide comfort and perspective, and reminding yourself that not all situations will turn out as badly as we fear can help alleviate unnecessary worry.",
    "Fear": "Fear is a natural emotion, but it can be managed effectively with certain strategies. First, it's important to accept fear without judging it, as trying to ignore it can only increase anxiety. Deep breathing and muscle relaxation techniques help reduce physical tension. Additionally, challenging negative thoughts and focusing on what is real and tangible can decrease the perception of fear. Talking about fear with friends or a professional can provide a new perspective. Finally, gradually exposing yourself to the source of fear in small steps can help reduce it over time.",
    "Dread": "Dread, although similar to fear, is usually more long-lasting and can affect our well-being if not managed properly. To control it, it's important first to recognize that dread does not define our ability to confront it. Talking about fears with someone you trust can alleviate them and provide a sense of support. It's also useful to adopt a mindset of acceptance, remembering that dread is simply an emotional response that can be managed. Practicing mindfulness or meditation techniques helps us focus on the present and reduce anxiety. Additionally, breaking down dread into smaller parts and addressing each calmly can make it easier to handle.",
    "Serenity": "To maintain serenity, it's key to practice acceptance and being present in the moment. Deep breathing and mindfulness techniques help calm the mind. Maintaining a balanced routine, avoiding unnecessary stress, and spending time in nature also promote tranquility. Additionally, surrounding yourself with people who inspire calm and dedicating time to self-care allow you to consistently maintain serenity.",
    "Ecstasy": "If you're referring to ecstasy as an intense emotion or state, it's important to maintain emotional balance through acceptance of what you feel, deep breathing, and mindfulness. Setting boundaries, taking breaks, and maintaining a healthy routine also help manage arousal, along with exercise and the support of trusted people.",
    "Anger": "Anger is a powerful emotion that arises when we feel unfairly treated or frustrated. To manage it, it’s essential to recognize it quickly and take a step back before reacting. Breathing deeply, counting to ten, or taking a brief break can help calm the physical reaction of anger. Reflecting on the situation and understanding its underlying causes also allows us to approach it more rationally. Expressing feelings assertively, but not aggressively, and seeking solutions instead of focusing only on the problem, can transform anger into an opportunity to improve circumstances.",
    "Rage": "Rage is an emotion that arises when we feel unfairly treated or frustrated by something or someone. To manage it, it’s useful to recognize the early signs and take a moment to calm down before acting. Breathing deeply, practicing relaxation, or stepping away from the situation can be effective. Reflect on the underlying cause and address the issue constructively. Communicate assertively, not aggressively.",
    "Fury": "Fury is an intense emotion that arises when we feel deeply frustrated, irritated, or threatened. To manage it, it’s crucial to recognize the emotion before it takes control. Breathing deeply and taking a moment to calm the body and mind can help reduce the intensity of fury. Practicing self-compassion and reflecting on the underlying causes of anger is also important for better understanding it. Sometimes, expressing feelings constructively or removing ourselves from the situation can prevent fury from damaging our relationships or well-being. Over time, learning to manage fury healthily helps us stay calm in difficult situations.",
    "Melancholy": "Melancholy is a deep emotional state often linked to sadness or nostalgia. To manage it, acknowledge your feelings without judgment and give yourself space to reflect. Creative activities, journaling, or connecting with others can help process these emotions. Seek out meaning and purpose to counterbalance the heaviness of this state, and if it persists, consider speaking with a mental health professional.",
    "Sadness": "Sadness is a natural response to loss or disappointment. Allow yourself to feel it without suppressing it. Talking to someone, writing about your feelings, or engaging in comforting routines can help ease the pain. Remember that sadness often passes with time, and acknowledging it is part of emotional resilience.",
    "Affliction": "Affliction is a deep emotional response to a significant loss or pain. To manage it, it’s important to acknowledge and accept the pain rather than suppress it. Taking time to process the emotion and seeking support from friends, family, or a professional can alleviate the emotional burden. Practicing self-compassion and being patient with oneself is also crucial during this process. Over time, affliction can transform into an opportunity for personal growth and resilience.",
    "Distraction": "Distraction diverts attention from what's important. To manage it, create a focused environment and set clear goals. Break tasks into smaller steps, use time-blocking techniques, and reduce digital interruptions. Mindfulness can also help strengthen concentration.",
    "Surprise": "Surprise is an emotional reaction that arises when we encounter something unexpected. To manage it, the first step is to take a moment to process the information and regain composure. Deep breathing can help stabilize emotions before reacting. It’s important to accept surprise without judging it, as it is a natural response. Reflecting on the situation and, if possible, sharing it with others, can turn the surprise into a more pleasant and less bewildering experience.",
    "Astonishment": "Astonishment is an emotion that arises when we face something unexpected or impressive. Although it is a positive feeling, it can be overwhelming. To manage it, it's helpful to take a moment to process what is happening, breathing deeply to absorb the experience more calmly. Appreciating the moment and reflecting on what causes our astonishment can help us enjoy it without feeling overwhelmed. Additionally, sharing the experience with others can amplify the feeling and make it more meaningful.",
    "Acceptance": "To master acceptance, it's essential to practice self-compassion and be aware that we all have imperfections. Accept your own mistakes and limitations without harsh judgment. In relationships, cultivate respect and understanding for differences, allowing people to be as they are. Practicing mindfulness and gratitude also helps you accept the present moment as it is, without resisting circumstances you cannot change.",
    "Trust": "To master trust, it's essential to build it gradually, both in yourself and in others. Practice self-acceptance and honesty, staying true to your principles. In relationships, foster open communication and mutual respect, setting clear boundaries and showing consistency in your actions. Maintain realistic expectations and learn to trust without giving away completely, ensuring that trust is earned and maintained over time.",
    "Admiration": "To control admiration, maintain a balanced perspective, recognizing the qualities you appreciate without idealizing the other person. Valuing their virtues in a healthy way and learning from them without losing your identity is key. Practice mutual respect and gratitude without letting admiration turn into dependency or insecurity.",
    "Aggressiveness": "Aggressiveness is an emotional response that manifests when we feel frustration, anger, or threat, and it can lead to hostile or harmful behavior. To manage it, it’s important to recognize the signs of aggressiveness before it turns into an impulsive reaction. Breathing deeply and taking a moment to calm down can help control the emotional response. Additionally, practicing assertive communication, rather than aggressive communication, allows us to express our needs respectfully. Seeking solutions instead of blaming others and learning to release tension through physical activities or meditation are also effective ways to reduce aggressiveness.",
    "Contempt": "Contempt is a negative emotion that arises when we feel that something or someone does not deserve respect or consideration. To manage it, it’s important to reflect on the root of this feeling and question whether it’s based on prejudice or misunderstandings. Practicing empathy and trying to understand others’ circumstances can help reduce this emotion. It’s also useful to remember that contempt can damage our relationships, so it’s better to address it with patience and compassion. By cultivating tolerance and respect, we can overcome contempt and foster more positive interactions.",
    "Remorse": "Remorse is an emotion that arises when we feel we have made a wrong decision or caused harm to others. To manage it, it’s important to accept responsibility for our actions without letting guilt consume us. Reflecting on what happened and learning from the experience can help us grow. Apologizing to those we have affected, if possible, can also alleviate the weight of remorse. Additionally, practicing self-care and being kind to ourselves allows us to move forward with a healthier and more constructive mindset.",
    "Upset": "To manage feeling upset, it’s important to allow yourself to acknowledge and express the emotion without judgment. Taking a step back from the situation can give you time to cool down and gain perspective. Deep breathing, journaling your feelings, or talking to someone you trust can help you process the emotions. Finding a healthy outlet, such as physical activity or relaxation techniques, can also help you release tension and regain your emotional balance.",
    "Scared": "To deal with fear, it’s important to breathe deeply and ground yourself in the present moment. Recognizing that fear is often temporary and manageable can help reduce its grip. Breaking down the source of fear into smaller, less intimidating parts can make it feel less overwhelming. Talking about your fears with someone can also provide reassurance and help you gain a new perspective on the situation.",
    "Submission": "To manage submission in a healthy way, it's important to find a balance between respecting others and maintaining your own personal power. The key is to set clear boundaries, express your needs and desires honestly, and ensure that the decisions you make are based on your well-being. Submission shouldn't involve losing your autonomy or accepting situations that make you feel uncomfortable or devalued. Practice self-care, self-compassion, and open communication to ensure that any form of submission is consensual and respectful.",
    "Love": "To manage love in a balanced way, it's important to practice self-acceptance and ensure your emotional needs are met. Maintain open and honest communication with the person you love, always respecting your boundaries and those of the other person. Cultivating trust, patience, and mutual understanding is key. Also, don't forget to take care of yourself and maintain a balance between your personal relationships and your individual well-being.",
    "Upbeat": "To maintain an upbeat mood, focus on the positive aspects of your day and engage in activities that bring you joy. Surround yourself with positive influences, whether through uplifting people, music, or environments. Practicing gratitude daily helps you stay focused on the good things in your life. Taking care of your physical health, through exercise and proper rest, also helps keep your energy high and your mindset positive."
  };

  // Update page content
  emotionTitle.textContent = emotion;
  emotionImage.src = `../resources/emotionsV2.0/${emotion}.png`;
  emotionDescription.textContent =
    emotionDescriptions[emotion] || "No description available.";
  emotionAdvice.textContent =
    emotionAdvices[emotion] || "No description available.";
  fullAdviceElement.textContent = 
    fullEmotionAdvices[emotion] || "No extended advice available.";
}

// Function to return to the Emotion Selector
function goBack() {
  window.location.href = "../emotionSelector/emotionSelector.html";
}
