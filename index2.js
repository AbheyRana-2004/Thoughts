const motivationalThoughts = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Don't be pushed by your problems, be led by your dreams.",
    "Difficulties in life are intended to make us better, not bitter.",
    "Your only limit is you.",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "The road to success is dotted with many tempting parking spaces.",
    "Do something today that your future self will thank you for.",
    "Hard work beats talent when talent doesn’t work hard.",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "The secret of getting ahead is getting started.",
    "Great things never come from comfort zones.",
    "Your life does not get better by chance, it gets better by change.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "Don’t limit your challenges. Challenge your limits.",
    "Every accomplishment starts with the decision to try.",
    "You don’t have to be great to start, but you have to start to be great.",
    "The only place where success comes before work is in the dictionary.",
    "Doubt kills more dreams than failure ever will.",
    "Success is not in what you have, but who you are.",
    "Wake up with determination, go to bed with satisfaction."
  ];
   
  const nextbtn = document.getElementById('nextbtn');
  const h21 = document.getElementById('h21');

  nextbtn.addEventListener('click', () => {
    const a = Math.floor(Math.random() * motivationalThoughts.length);
    h21.innerText = motivationalThoughts[a];
});
