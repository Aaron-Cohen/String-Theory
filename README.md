# History and Background Information

String Theory allows a user to visualize chords and scales in any tuning of their choice. 

As a guitarist, I often find myself playing in alternative tunings. While alternative tunings can provide
sparks of creativity, it can be cumbersome to calculate the new shapes of chords and scales. With this in
mind, String Theory was born. 

# Usage Notes Pertaining to Music Theory

There was a design tradeoff when creating this project. From the perspective of a guitarist, any sharp
can be represented as a flat and vice versa- these notes are enharmonic equivalents. 

Despite this equivalency, there are general conventions in music theory on when to use which note so as to
avoid a double sharp or other unnecessary accidentals. String Theory displays exactly what the user tells
it to and will not override the user's input to enforce "good practice." There are times when a user
would want to violate these conventions, so as a design choice, String Theory allows it to happen. 

For example, the chord of Bb major consists of Bb, D, and F.
Alternatively, one could choose to notate this as A# major consisting of A#, C##, E# === A#, D, F

In this above example, the root of A#, D, F is unclear, whereas Bb, D, and F clearly have a root of 
Bb per the [definition of a triad](https://en.wikipedia.org/wiki/Triad_(music)).

When using String Theory, the user can select whether they would like to see accidentals displayed as
sharps or flats. While the highlighted frets will be identical, the above example underscores why one
choice may be better than the other depending on context.

# Project Made With Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

String Theory is my first project created using the React framework for JavaScript.
If you have improvements to my code, or would like to leave feedback, please reach out to me 
through my [LinkedIn](https://www.linkedin.com/in/-aaroncohen/).
